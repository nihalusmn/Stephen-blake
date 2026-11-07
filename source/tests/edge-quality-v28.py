from PIL import Image,ImageFilter
from pathlib import Path
import numpy as np,json
root=Path('output/continuity-v28');report=[]
for name in ['cherry','roast']:
 before=np.asarray(Image.open(root/f'{name}-before.png').convert('RGB')).astype(float)
 after=np.asarray(Image.open(root/f'{name}-after.png').convert('RGB')).astype(float)
 masks=[np.max(np.abs(im-[245,244,240]),axis=2)>32 for im in [before,after]]
 def roughness(m):
  rows=m.sum(1)>80;ys=np.flatnonzero(rows);ys=ys[10:-10]
  left=np.argmax(m,axis=1)[ys];right=m.shape[1]-1-np.argmax(m[:,::-1],axis=1)[ys]
  return float(np.mean(np.abs(np.diff(left,n=2)))+np.mean(np.abs(np.diff(right,n=2))))
 a,b=map(roughness,masks)
 core=np.asarray(Image.fromarray(masks[0].astype('uint8')*255).filter(ImageFilter.MinFilter(25)))>250
 texture=float(np.abs(before-after)[core].mean())
 assert b<a,(name,a,b)
 assert texture<1,(name,texture)
 report.append({'subject':name,'edge_second_difference_before':a,'after':b,'interior_mean_pixel_change':texture})
Path('docs/v28-edge-quality.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
