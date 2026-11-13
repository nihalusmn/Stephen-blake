from pathlib import Path
import re, subprocess, json, urllib.request, xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[3]
baseline='44592a56f85c1bd9b091f05708fc38183899aba1'
old=subprocess.check_output(['git','show',baseline+':source/index.html'],cwd=root).decode()
new=(root/'source/index.html').read_text()
checks={}
for pattern,name in [(r'<link rel="canonical"[^>]+>','canonical'),(r'<meta name="robots"[^>]+>','indexing'),(r'<title>.*?</title>','title'),(r'<meta name="description"[^>]+>','description'),(r'<!-- Google Analytics 4 -->\s*<script>[\s\S]*?</script>','GA4')]:
 checks[name]=re.search(pattern,old).group()==re.search(pattern,new).group()
for path in ['source/public/sitemap.xml','source/public/robots.txt','source/public/vercel.json']:
 checks[path]=(root/path).read_bytes()==subprocess.check_output(['git','show',baseline+':'+path],cwd=root)
for name in ['sitemap.xml','robots.txt']:
 with urllib.request.urlopen('http://127.0.0.1:4197/'+name) as r:
  checks[name+' status']=r.status==200
  if name=='sitemap.xml':checks['sitemap URLs']=[x.text for x in ET.fromstring(r.read()).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]==['https://www.stephenblake.co.in/']
req=urllib.request.Request('http://127.0.0.1:4197/assets/video/mobile/opening-v31.mp4',headers={'Range':'bytes=0-1023'})
with urllib.request.urlopen(req) as r:checks['media range']=r.status==206 and len(r.read())==1024 and r.headers['Content-Range'].startswith('bytes 0-1023/')
# No timeline, media policy, analytics or enquiry implementation changed.
for path in ['source/app/visuals/film-only-journey.js','source/app/visuals/hero-handoff.js','source/app/visuals/media-policy.js','source/app/animations/scroll.js','source/app/catalogue.js']:
 checks[path]=(root/path).read_bytes()==subprocess.check_output(['git','show',baseline+':'+path],cwd=root)
assert all(checks.values()),checks
(root/'output/performance/candidate/seo-preservation.json').write_text(json.dumps(checks,indent=2))
print('PASS',len(checks),'SEO, analytics source, routing, timeline and range checks')
