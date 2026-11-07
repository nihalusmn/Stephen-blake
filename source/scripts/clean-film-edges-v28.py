"""Clean the video matte's perimeter while preserving interior coffee texture.
Only fall/Natural and settled green/roast chapters are treated. Honey peeling,
washed motion, hulling flakes, grinding and cup timing remain unchanged.
"""
from pathlib import Path
import subprocess, numpy as np
from PIL import Image,ImageFilter,ImageDraw
FF='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
W,H=720,960
O=Path('output/continuity-v28');O.mkdir(parents=True,exist_ok=True)
def smooth(t):t=np.clip(t,0,1);return t*t*(3-2*t)
def clean(rgb):
 # Exterior flood fill preserves light specular highlights and dark grooves.
 bg=np.array([245,244,240],dtype=np.float32)
 mask=Image.fromarray(np.uint8(np.max(np.abs(rgb.astype(float)-bg),axis=2)>32)*255)
 # Ignore compression shimmer in the empty studio, away from the subject.
 mask=mask.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.MaxFilter(3))
 ImageDraw.floodfill(mask,(0,0),128)
 mask=Image.fromarray(np.uint8(np.asarray(mask)!=128)*255)
 # Smooth high-frequency block notches, then inset past the original matte.
 mask=mask.filter(ImageFilter.GaussianBlur(3.0))
 mask=mask.point(lambda a:255 if a>156 else 0).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(.9))
 alpha=np.asarray(mask,dtype=float)/255
 return np.uint8(np.clip(rgb*alpha[:,:,None]+bg*(1-alpha[:,:,None]),0,255))
if '--preview' in __import__('sys').argv:
 for name in ['cherry','roast']:
  im=np.asarray(Image.open(O/f'{name}-before.png').convert('RGB'));Image.fromarray(clean(im)).save(O/f'{name}-after.png')
 raise SystemExit(0)
dec=subprocess.Popen([FF,'-v','error','-i','assets/video/coffee-journey-v27.mp4','-f','rawvideo','-pix_fmt','rgb24','-'],stdout=subprocess.PIPE)
enc=subprocess.Popen([FF,'-v','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s',f'{W}x{H}','-r','24','-i','-','-an','-vf','scale=1080:1440:flags=lanczos','-c:v','libx264','-preset','fast','-crf','16','-g','6','-keyint_min','6','-sc_threshold','0','-pix_fmt','yuv420p','-threads','2','-movflags','+faststart','assets/video/coffee-journey-v28.mp4'],stdin=subprocess.PIPE)
i=0
while True:
 raw=dec.stdout.read(W*H*3)
 if len(raw)!=W*H*3:break
 rgb=np.frombuffer(raw,np.uint8).reshape(H,W,3);t=i/24
 # Whole cherry and dry husk before its pieces depart. After hulling settles,
 # use exactly the same corrected perimeter for green and roasted coffee.
 strength=(1-smooth((t-5.65)/.35)) if t<6 else (smooth((t-25.3)/.55) if 25.3<t<38.5 else 0)
 if strength>0:
  corrected=clean(rgb);rgb=np.uint8(rgb.astype(float)*(1-strength)+corrected.astype(float)*strength)
 if i==0:Image.fromarray(rgb).save('assets/video/coffee-journey-poster-v28.jpg',quality=97)
 if i in [34,80,124,642,768,870,913]:Image.fromarray(rgb).save(O/f'frame-{i:04}.png')
 enc.stdin.write(rgb.tobytes());i+=1
enc.stdin.close();assert enc.wait()==0;assert dec.wait()==0
print(f'Cleaned edges in {i} frames, timing unchanged; 1080×1440 delivery.')
