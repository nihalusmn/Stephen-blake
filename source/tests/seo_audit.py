"""Candidate-only SEO regression checks. Does not publish or modify production."""
from pathlib import Path
from functools import partial
from html.parser import HTMLParser
from http.server import ThreadingHTTPServer
from urllib.request import urlopen, Request, build_opener, HTTPRedirectHandler
from urllib.error import HTTPError
from urllib.robotparser import RobotFileParser
import importlib.util, json, re, subprocess, threading, xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
CANONICAL = 'https://www.stephenblake.co.in/'
BASELINE = '95b57c2'
checks = []
def check(name, condition):
    assert condition, name
    checks.append(name)
    print('PASS', name)

class Head(HTMLParser):
    def __init__(self): super().__init__(); self.canonicals=[]; self.robots=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='link' and a.get('rel')=='canonical': self.canonicals.append(a.get('href'))
        if tag=='meta' and a.get('name')=='robots': self.robots.append(a.get('content'))

class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs): return None

def baseline(name):
    return subprocess.check_output(['git','show',f'{BASELINE}:{name}'],cwd=ROOT)

config=json.loads((ROOT/'vercel.json').read_text())
check('Root, source public files and built SEO files agree', all(
    (ROOT/name).read_bytes()==(ROOT/'source/public'/name).read_bytes()==(ROOT/'source/dist'/name).read_bytes()
    for name in ('sitemap.xml','robots.txt','vercel.json')))
check('No routing rewrite or build override', not any(k in config for k in ('rewrites','routes','buildCommand','outputDirectory','framework','cleanUrls')))
redirects=config['redirects']
check('Permanent index alias redirect', {'source':'/index.html','destination':'/','permanent':True} in redirects)
for host in ('stephenblake.co.in','stephen-blake.vercel.app'):
    check(f'Canonical host rule: {host}', any(r.get('has')==[{'type':'host','value':host}]
        and r['destination']==CANONICAL+':path*' and r.get('permanent') for r in redirects))
check('No canonical-host redirect loop or wildcard preview redirect', all(
    not r.get('has') or r['has'][0]['value'] in ('stephenblake.co.in','stephen-blake.vercel.app') for r in redirects))
check('Source files excluded from indexing', any(h['source']=='/source/:path*' and
    {'key':'X-Robots-Tag','value':'noindex'} in h['headers'] for h in config['headers']))
check('Production homepage has no noindex header', all(h['source'] not in ('/','/:path*') for h in config['headers']))

for directory in (ROOT, ROOT/'source/dist'):
    label='deployed root' if directory==ROOT else 'Vite build'
    html=(directory/'index.html').read_text()
    head=Head();head.feed(html)
    check(f'{label}: one canonical production URL', head.canonicals==[CANONICAL])
    check(f'{label}: indexable robots setting', head.robots==['index, follow'])
    check(f'{label}: design/body unchanged', html.split('<body>',1)[1]==baseline('index.html').decode().split('<body>',1)[1])
    analytics=lambda s:re.search(r'<!-- Google Analytics 4 -->\s*(<script>[\s\S]*?</script>)',s).group(1)
    check(f'{label}: GA4 exactly preserved', analytics(html)==analytics(baseline('index.html').decode()))
    for asset in json.loads((ROOT/'source/app/runtime-media.json').read_text())['files']:
        check_bytes=(directory/asset).read_bytes()==baseline(asset)
        assert check_bytes, asset
    check(f'{label}: all 255 media files unchanged', True)
    for asset in (ROOT/'assets').glob('*'):
        if asset.is_file() and asset.suffix in ('.js','.css'):
            assert (directory/'assets'/asset.name).read_bytes()==baseline('assets/'+asset.name)
    check(f'{label}: animation JavaScript and CSS unchanged',True)

    spec=importlib.util.spec_from_file_location('preview',ROOT/'serve-website.py')
    module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
    class QuietHandler(module.Handler):
        def log_message(self,*args): pass
    server=ThreadingHTTPServer(('127.0.0.1',0),partial(QuietHandler,directory=str(directory)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
    local=f'http://127.0.0.1:{server.server_port}'
    try:
        with urlopen(local+'/sitemap.xml') as response:
            xml=response.read()
            check(f'{label}: sitemap HTTP 200 and XML content type',response.status==200 and response.headers.get_content_type()=='application/xml')
        tree=ET.fromstring(xml)
        check(f'{label}: valid sitemap namespace',tree.tag=='{http://www.sitemaps.org/schemas/sitemap/0.9}urlset')
        urls=[e.text for e in tree.findall('{*}url/{*}loc')]
        check(f'{label}: only the genuine canonical page',urls==[CANONICAL])
        with urlopen(local+'/robots.txt') as response:
            robots=response.read().decode()
            check(f'{label}: robots HTTP 200 and text content type',response.status==200 and response.headers.get_content_type()=='text/plain')
        parser=RobotFileParser();parser.parse(robots.splitlines())
        check(f'{label}: robots references the production sitemap',parser.site_maps()==[CANONICAL+'sitemap.xml'])
        check(f'{label}: crawlers can fetch page and rendering assets',all(parser.can_fetch('Googlebot',CANONICAL+path) for path in ('','assets/index-CbZ-EHU6.js','assets/style-CdBItdCm.css','sitemap.xml')))
        try: build_opener(NoRedirect).open(local+'/index.html?utm_source=test')
        except HTTPError as e: check(f'{label}: index redirect preserves query',e.code==308 and e.headers['Location']=='/?utm_source=test')
        else: raise AssertionError('index.html did not redirect')
        for path in ('/this-page-does-not-exist-seo-audit','/source/index.html'):
            try: urlopen(local+path)
            except HTTPError as e: check(f'{label}: local preview keeps {path} unavailable',e.code==404)
            else: raise AssertionError('Unexpected public route '+path)
        with urlopen(Request(local+'/assets/video/desktop/opening-v32.mp4',headers={'Range':'bytes=0-1023'})) as response:
            check(f'{label}: video byte ranges preserved',response.status==206 and len(response.read())==1024)
    finally: server.shutdown();server.server_close();thread.join()

report={'status':'passed','productionBase':BASELINE,'sitemapUrl':CANONICAL+'sitemap.xml','urlCount':1,
        'checks':checks,'deploymentStatus':'Not deployed; production HTTP and Vercel redirect/header verification require approval and deployment.'}
(ROOT/'source/docs/SEO-CHECKS.json').write_text(json.dumps(report,indent=2)+'\n')
print(f'{len(checks)} checks passed. No production changes made.')
