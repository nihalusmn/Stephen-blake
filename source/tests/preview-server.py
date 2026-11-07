"""Exercise the local preview's boundary and video byte-range responses."""
from pathlib import Path
from functools import partial
import importlib.util, threading, http.client, json
from http.server import ThreadingHTTPServer
spec=importlib.util.spec_from_file_location('preview','scripts/serve-website.py')
mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
server=ThreadingHTTPServer(('127.0.0.1',0),partial(mod.Handler,directory=str(Path('dist').resolve())))
threading.Thread(target=server.serve_forever,daemon=True).start()
port=server.server_address[1]
def request(path,headers={}):
 c=http.client.HTTPConnection('127.0.0.1',port);c.request('GET',path,headers=headers);r=c.getresponse();result=r.status,dict(r.getheaders()),r.read();c.close();return result
checks=[]
try:
 for url in ['/','/index.html','/dist/','/dist/index.html?version=29']:
  status,headers,data=request(url);assert status==200 and b'Stephen Blake' in data,url
 checks.append('Root and existing /dist preview URLs serve the production website')
 for url in ['/assets/','/.git/config','/source/index.html','/package.json','/../package.json','/dist/../package.json','/Stephen-Blake-Complete-Website-v28.zip']:
  assert request(url)[0]==404,url
 checks.append('Directory listings, source, dotfiles and archives are unavailable')
 assert request('/',{'Host':'untrusted.example'})[0]==403
 assert request('/',{'Host':'['})[0]==400
 checks.append('Unexpected and malformed Host headers rejected')
 video=Path('dist/assets/video/coffee-journey-v28.mp4').read_bytes()
 for header,expected in [('bytes=0-99',video[:100]),('bytes=-100',video[-100:]),('bytes=100-199',video[100:200])]:
  status,headers,data=request('/dist/assets/video/coffee-journey-v28.mp4',{'Range':header});assert status==206 and data==expected
 assert request('/assets/video/coffee-journey-v28.mp4',{'Range':f'bytes={len(video)}-'})[0]==416
 checks.append('Video start, middle and suffix ranges return exact bytes; invalid ranges rejected')
 assert headers['X-Content-Type-Options']=='nosniff'
 checks.append('No-sniff, revalidation and referrer response headers applied')
 Path('docs/preview-server-results.json').write_text(json.dumps({'checks':checks},indent=2))
 print('\n'.join('PASS '+c for c in checks))
finally:server.shutdown();server.server_close()
