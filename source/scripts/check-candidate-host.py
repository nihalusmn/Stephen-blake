"""Check the temporary v31 candidate. Run while the preview tunnel is active."""
import urllib.request,urllib.error,json,re,hashlib,os
from pathlib import Path
base=os.environ.get('SB_PREVIEW_URL') or re.search(r'https://[a-z-]+\.trycloudflare\.com',Path('output/v31/rc2-preview.log').read_text()).group(0)
results=[]
for path,headers in [('/',{}),('/assets/video/mobile/opening-v31.mp4',{'Range':'bytes=0-1023'}),('/assets/video/mobile/washed-v31.mp4',{'Range':'bytes=0-1023'}),('/assets/video/mobile/roasting-v31.mp4',{'Range':'bytes=100000-101023'}),('/assets/video/mobile/opening-v31.mp4',{'Range':'bytes=-1024'}),('/assets/video/recovery-v31/frame-070.jpg',{}),('/source/app/main.js',{}),('/.git/config',{})]:
 try:
  with urllib.request.urlopen(urllib.request.Request(base+path,headers=headers),timeout=25) as r:
   data=r.read();result={'path':path,'status':r.status,'headers':dict(r.headers),'length':len(data),'sha256':hashlib.sha256(data).hexdigest()}
   if path=='/':
    result['release']=re.search(r'data-release="([^"]+)"',data.decode()).group(1)
    result['scripts']=re.findall(r'<script[^>]+src="([^"]+)"',data.decode())
    local=Path('dist/index.html').read_text()
    owned=[url for url in result['scripts'] if url.startswith('./assets/')]
    assert owned==re.findall(r'<script[^>]+src="([^"]+)"',local),'Preview application bundle differs'
    result['html_transformed_by_preview_proxy']=data!=Path('dist/index.html').read_bytes()
    for asset in owned+re.findall(r'<link[^>]+href="(\./assets/[^"]+\.css)"',local):
     with urllib.request.urlopen(base+'/'+asset.removeprefix('./'),timeout=25) as response:
      assert response.read()==(Path('dist')/asset.removeprefix('./')).read_bytes(),'Application asset differs from build'
   if headers:
    assert r.status==206 and len(data)==1024
    local=(Path('dist')/path.lstrip('/')).read_bytes()
    value=headers['Range'].removeprefix('bytes=')
    start=len(local)-1024 if value.startswith('-') else int(value.split('-')[0])
    assert data==local[start:start+1024], 'Range bytes differ from local clip'
    assert r.headers['Content-Range']==f'bytes {start}-{start+1023}/{len(local)}', 'Incorrect Content-Range'
    assert r.headers['Content-Type'].startswith('video/mp4')
 except urllib.error.HTTPError as e:
  result={'path':path,'status':e.code};assert path in ['/source/app/main.js','/.git/config'] and e.code in [403,404]
 results.append(result);print(path,result['status'],result.get('release',''),result.get('length',''))
Path('docs/V31-preview-host-checks.json').write_text(json.dumps({'url':base,'results':results},indent=2))
print(base)
