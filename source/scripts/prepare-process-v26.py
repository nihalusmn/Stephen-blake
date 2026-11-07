"""V26: spatial mucilage removal and separate dried-fruit husk removal.
Composites photographic layers into video; never hue-shifts gel into a seed.
"""
from pathlib import Path
import subprocess, math, json
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
FF='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
OUT=Path('output/continuity-v26');OUT.mkdir(parents=True,exist_ok=True)
M=Path('assets/video/masters'); W,H=720,960

def smooth(x):return np.clip(x,0,1)**2*(3-2*np.clip(x,0,1))
def decode(path,w=W,h=H):
 data=subprocess.check_output([FF,'-v','error','-i',str(path),'-vf',f'scale={w}:{h},fps=24','-f','rawvideo','-pix_fmt','rgb24','-'])
 return np.frombuffer(data,np.uint8).reshape(-1,h,w,3)
def encode(name,frames,duration):
 p=subprocess.Popen([FF,'-v','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s','720x960','-r','24','-i','-','-an','-c:v','libx264','-preset','fast','-crf','16','-pix_fmt','yuv420p','-threads','2','-t',str(duration),str(OUT/f'{name}.mp4')],stdin=subprocess.PIPE)
 for frame in frames:p.stdin.write(np.asarray(frame,dtype=np.uint8).tobytes())
 p.stdin.close();assert p.wait()==0

def over(dst,src,alpha):return dst*(1-alpha[...,None])+src*alpha[...,None]
def clean_layer(box):
 im=Image.open(M/'washed-seeds-clean-v26.png').convert('RGBA')
 b=im.getchannel('A').point(lambda a:255 if a>128 else 0).getbbox()
 im=im.crop(b).resize((box[2]-box[0],box[3]-box[1]),Image.Resampling.LANCZOS)
 layer=Image.new('RGBA',(W,H));layer.alpha_composite(im,(box[0],box[1]))
 return np.asarray(layer).astype(np.float32)

if not (OUT/'honey-reference.png').exists():
 subprocess.run([FF,'-v','error','-y','-ss','6.25','-i','assets/video/coffee-journey-v25.mp4','-frames:v','1',str(OUT/'honey-reference.png')],check=True)
honey=np.asarray(Image.open(OUT/'honey-reference.png').convert('RGB')).astype(np.float32)
# The original background varies gently in Y. Continue the empty left/right
# margins behind the subject; this avoids a rectangular wipe boundary.
row=(honey[:,140:180].mean(1)+honey[:,560:600].mean(1))/2
background=np.broadcast_to(row[:,None,:],(H,W,3)).copy()
clean=clean_layer((220,367,514,620)); endpoint=over(background,clean[:,:,:3],clean[:,:,3]/255)
y,x=np.indices((H,W)); x=x.astype(float);y=y.astype(float)
# Irregular, gravity-directed wash front with narrow rivulets. It advances
# through actual photographic layers, changing texture AND silhouette.
front_noise=8*np.sin(x*.039)+4*np.sin(x*.061+1.3)+2*np.sin(x*.133)
channels=sum(19*np.exp(-((x-c)/s)**2) for c,s in [(248,12),(310,9),(381,13),(455,8),(494,10)])
water=decode(M/'same-seeds-washed-v25.mp4')
# Keep the real incoming water and drainage outside the seeds, discarding
# the source video's unchanged gel-covered seed surface entirely.
water_region=((1-smooth((y-378)/18))*smooth((x-290)/35)*(1-smooth((x-420)/35))+
              smooth((y-625)/18)*smooth((x-265)/30)*(1-smooth((x-430)/35)))
water_region=np.clip(water_region,0,1)
metrics=[]
def wash_frames():
 for frame in range(144):
  t=frame/24
  advance=smooth((t-.82)/3.30)
  front=315+355*advance+front_noise+channels
  reveal=smooth((front-y)/22)
  # At the start and finish, the exact uncoated/coated photographs hold.
  if t<.72:reveal[:]=0
  if t>4.35:reveal[:]=1
  base=over(honey,endpoint,reveal)
  # A thick remaining gel lip and downward-running amber strands give the
  # coating a visible departing edge, rather than a uniform dissolve.
  lip=(1-reveal)*np.exp(-((y-front-7)/13)**2)*np.clip((honey[:,:,0]-honey[:,:,2]-18)/60,0,1)
  base=over(base,honey*.94,lip*.32)
  for c,delay in [(244,.05),(314,.16),(408,.0),(487,.24)]:
   head=315+355*smooth((t-.82-delay)/3.3)
   length=24+38*math.sin(math.pi*float(np.clip((t-.82)/3.3,0,1)))
   width=3.5+2*math.sin(t*3+c)
   strand=np.exp(-((x-c-2*np.sin(y*.028+t*4))/width)**2)*smooth((y-head)/6)*(1-smooth((y-head-length)/9))
   strand*=float(smooth((t-1.05)/.4)*(1-smooth((t-4.0)/.4)))
   strand*=((y>365)&(y<680))
   # Restrained translucent amber runoff, lit with the source coating.
   tint=np.zeros_like(base);tint[:]=[190,137,69]
   base=over(base,tint,strand*.24)
  wf=water[min(frame,len(water)-1)].astype(float)
  water_bg=(wf[:,130:170].mean(1)+wf[:,550:590].mean(1))/2
  # Photographic water luminance/colour difference from its empty background.
  delta=wf-water_bg[:,None,:]
  water_strength=float(smooth(t/.22)*(1-smooth((t-4.75)/.45)))
  base=np.clip(base+delta*water_region[:,:,None]*water_strength,0,255)
  if frame in [0,36,66,90,110,136]:
   Image.fromarray(base.astype('uint8')).save(OUT/f'washed-{frame:03}.png')
   metrics.append({'frame':frame,'exposed_fraction':float(reveal[355:626,205:530].mean())})
  yield base
encode('washed',wash_frames(),6)
(OUT/'wash-removal-metrics.json').write_text(json.dumps(metrics,indent=2))

# Drying uses retimed adjacent source frames, NOT optical-flow motion vectors:
# the latter broke fine creases into floating rectangular holes.
raw=decode(M/'natural-corrected.mp4',300,480)
def exterior_matte(rgb):
 b=Image.fromarray(np.uint8(np.max(rgb,2)>22)*255,'L').copy()
 for px,py in [(0,0),(rgb.shape[1]-1,0),(0,rgb.shape[0]-1),(rgb.shape[1]-1,rgb.shape[0]-1)]:
  if b.getpixel((px,py))==0:ImageDraw.floodfill(b,(px,py),128)
 a=Image.fromarray(np.uint8(np.array(b)!=128)*255,'L')
 return a.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(.6))
small=[]
for rgb in raw:
 im=Image.fromarray(rgb).convert('RGBA');im.putalpha(exterior_matte(rgb));small.append(im)
blank=Image.new('RGB',(W,H),(245,244,240))
def centered(im):
 bg=blank.copy();bg.paste(im,((W-im.width)//2,(H-im.height)//2),im);return bg
# The dried husk splits as dry pieces; the two inner parchment-covered seeds
# remain fixed and intact. Its texture is taken from the final actual shot.
husk=small[-1];hw,hh=husk.size
inner=clean_layer((238,365,482,595));inner_bg=over(np.asarray(blank).astype(float),inner[:,:,:3],inner[:,:,3]/255)
# Uneven shell divisions rather than equal horizontal tiles.
seams=[[(0,0),(151,0),(136,83),(162,154),(119,228),(144,302),(104,394),(130,480),(0,480)],
       [(151,0),(300,0),(300,164),(246,145),(219,190),(162,154),(136,83)],
       [(162,154),(219,190),(246,145),(300,164),(300,352),(257,329),(215,370),(144,302),(119,228)],
       [(144,302),(215,370),(257,329),(300,352),(300,480),(130,480),(104,394)]]
parts=[]
for i,poly in enumerate(seams):
 a=Image.new('L',(hw,hh));ImageDraw.Draw(a).polygon(poly,fill=255)
 part=husk.copy();part.putalpha(Image.fromarray(np.minimum(np.asarray(part.getchannel('A')),np.asarray(a))))
 box=part.getbbox();parts.append((part.crop(box),box,i))
def natural_frames():
 for frame in range(204):
  t=frame/24
  if t<4.5:
   # Preserve a deliberate drying interval and a whole dry cherry hold.
   st=.8*(t/.5) if t<.5 else (.8+(t-.5)*2.7/3.5 if t<4 else 3.5+(t-4)*1.5/.5)
   pos=min(len(small)-1,st*24);i=int(pos);f=pos-i
   im=Image.blend(small[i],small[min(i+1,len(small)-1)],f)
   bg=centered(im)
  else:
   bg=Image.fromarray(np.uint8(inner_bg))
   for part,box,i in parts:
    u=max(0,(t-4.65-i*.09)/1.65)
    sign=-1 if i==0 else 1
    opening=float(smooth(u));theta=sign*(24+12*i)*opening
    rigid=part.rotate(theta,Image.Resampling.BICUBIC,expand=True)
    px=(W-hw)/2+box[0]+sign*(105*opening+95*u*u)
    py=(H-hh)/2+box[1]+(100+35*i)*u*u-22*opening
    if u<1.8:bg.paste(rigid,(round(px-(rigid.width-part.width)/2),round(py-(rigid.height-part.height)/2)),rigid)
  if frame in [0,90,108,126,150,180,202]:bg.save(OUT/f'natural-{frame:03}.png')
  yield bg
encode('natural',natural_frames(),8.5)
print('Rendered spatial wash removal and dry husk removal, with distinct parchment seeds.')
