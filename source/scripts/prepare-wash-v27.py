"""Material advection for the washed chapter: the original photographed gel
is stretched, sheared and carried down by water over a stationary seed layer.
No colour morph or moving reveal/wipe is used. All timings deterministic.
"""
from pathlib import Path
import subprocess, math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
FF='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
W,H=720,960
OUT=Path('output/continuity-v27');OUT.mkdir(parents=True,exist_ok=True)
def smooth(v):
 v=np.clip(v,0,1);return v*v*(3-2*v)
honey=np.asarray(Image.open('assets/video/masters/v27-production/honey-reference.png').convert('RGB'),dtype=np.float32)
row=(honey[:,140:180].mean(1)+honey[:,560:600].mean(1))/2
bg=np.broadcast_to(row[:,None,:],honey.shape).copy()
im=Image.open('assets/video/masters/washed-seeds-clean-v26.png').convert('RGBA');box=im.getchannel('A').point(lambda a:255 if a>128 else 0).getbbox();im=im.crop(box).resize((294,253),Image.Resampling.LANCZOS)
clean=Image.new('RGBA',(W,H));clean.alpha_composite(im,(220,367));clean=np.asarray(clean,dtype=np.float32)
endpoint=bg*(1-clean[:,:,3:]/255)+clean[:,:,:3]*(clean[:,:,3:]/255)
y,x=np.indices((H,W),dtype=np.float32)
# Retain white specular highlights INSIDE the gel silhouette, remove only
# the connected exterior. This keeps the original Honey endpoint intact.
fg=(np.max(np.abs(honey-bg),axis=2)>20).astype('uint8')*255
fg[:340]=0;fg[635:]=0;fg[:,:195]=0;fg[:,540:]=0
mask=Image.fromarray(fg).filter(ImageFilter.MaxFilter(7))
ImageDraw.floodfill(mask,(0,0),128)
a=Image.fromarray(np.uint8(np.asarray(mask)!=128)*255).filter(ImageFilter.MinFilter(7)).filter(ImageFilter.GaussianBlur(.7))
a=np.asarray(a,dtype=np.float32)/255
# Twelve joined, irregular ribbons initially form exactly ONE coating. They
# begin draining at different times under the impact, then neck and separate.
centers=np.linspace(200,540,13);weights=[]
for c in centers:weights.append(np.exp(-((x-c-4*np.sin(y*.027+c)) / 20)**2))
weights=np.asarray(weights);weights/=np.maximum(weights.sum(0),1e-8)
def sample(arr,sx,sy):
 sx=np.clip(sx,0,W-1.001);sy=np.clip(sy,0,H-1.001);ix=sx.astype('int32');iy=sy.astype('int32');fx=sx-ix;fy=sy-iy
 if arr.ndim==3:fx=fx[:,:,None];fy=fy[:,:,None]
 return (arr[iy,ix]*(1-fx)+arr[iy,ix+1]*fx)*(1-fy)+(arr[iy+1,ix]*(1-fx)+arr[iy+1,ix+1]*fx)*fy
raw=subprocess.check_output([FF,'-v','error','-i','assets/video/masters/same-seeds-washed-v25.mp4','-vf','scale=720:960,fps=24','-f','rawvideo','-pix_fmt','rgb24','-'])
water=np.frombuffer(raw,np.uint8).reshape(-1,H,W,3)
p=subprocess.Popen([FF,'-v','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s','720x960','-r','24','-i','-','-an','-c:v','libx264','-preset','fast','-crf','16','-pix_fmt','yuv420p','-threads','2',str(OUT/'washed.mp4')],stdin=subprocess.PIPE)
for frame in range(144):
 t=frame/24;base=endpoint.copy();acc=np.zeros_like(base);coverage=np.zeros((H,W),dtype=np.float32)
 for i,c in enumerate(centers):
  delay=.65+.45*abs(c-390)/190+.65*(.5+.5*math.sin(i*2.3))
  u=max(0,t-delay)
  # Acceleration, surface tension and lateral drag. Each layer continues
  # OUT OF FRAME; it never dissolves in place to expose a different colour.
  travel=39*u*u+13*u*u*u
  stretch=1.1*math.sin(min(u/2,1)*math.pi/2)
  sy=350+(y-350-travel)/(1+stretch)
  q=np.clip((sy-350)/280,0,1)
  drift=(c-367)*.14*float(smooth(u/1.7))*(.3+.7*q)
  wobble=(np.sin(y*.035-i+t*5)+.4*np.sin(y*.091+t*7))*min(u*2.5,5)
  neck=1-.64*float(smooth(u/1.9))
  sx=c+(x-c-drift-wobble)/neck
  alpha=sample(a*weights[i],sx,sy)
  gel=sample(honey,sx,sy)
  drainage=smooth((y-620)/140)[:,:,None]
  gel=gel*(1-drainage*.6)+np.array([211,173,105])*drainage*.6
  # Stretching conserves pigment: departed gel becomes translucent amber
  # and refracts the ivory underneath, while the stationary seeds stay crisp.
  alpha*=1/(1+stretch*.45)
  acc+=gel*alpha[:,:,None];coverage+=alpha
 cov=np.clip(coverage,0,1)
 base=base*(1-cov[:,:,None])+acc/np.maximum(coverage[:,:,None],1e-6)*cov[:,:,None]
 wf=water[min(frame,len(water)-1)].astype(np.float32)
 wbg=(wf[:,130:170].mean(1)+wf[:,550:590].mean(1))/2
 delta=wf-wbg[:,None,:]
 above=1-smooth((y-378)/18);below=smooth((y-625)/18)
 region=np.clip(above*smooth((x-290)/35)*(1-smooth((x-420)/35))+below*smooth((x-265)/30)*(1-smooth((x-430)/35)),0,1)
 strength=float(smooth((t-.15)/.3)*(1-smooth((t-4.8)/.45)))
 base=np.clip(base+delta*region[:,:,None]*strength,0,255)
 # Fine clear runnels travel across the actual subject, linking the incoming
 # stream with the moving coating. Specular and refracted edges, not white bars.
 for c,phase in [(274,0),(325,1.2),(412,2.1),(474,3.8)]:
  cx=c+5*np.sin(y*.038+t*4+phase)
  ribbon=np.exp(-((x-cx)/1.8)**2)*smooth((y-355)/18)*(1-smooth((y-645)/25))*strength
  base=np.clip(base+ribbon[:,:,None]*16,0,255)
 if frame in [0,24,48,66,84,102,120,143]:Image.fromarray(base.astype('uint8')).save(OUT/f'washed-{frame:03}.png')
 p.stdin.write(base.astype('uint8').tobytes())
p.stdin.close();assert p.wait()==0
print('Rendered physically displaced gel layers over unchanged coffee seeds.')
