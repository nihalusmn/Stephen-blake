"""Reproducible process corrections using selected footage and rigid parchment pieces."""
from pathlib import Path
import subprocess,io,math
import numpy as np
from PIL import Image,ImageFilter,ImageDraw
FF='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
BASE=Path('output/continuity-v25');BASE.mkdir(parents=True,exist_ok=True)
M=Path('assets/video/masters')
def run(args):subprocess.run([FF,'-v','error','-y',*args],check=True)
def subject(source,n):
 b=subprocess.check_output([FF,'-v','error','-i',str(source),'-vf',f"select='eq(n,{n})',format=rgba,colorkey=0x000000:0.035:0.025,scale=-2:480",'-frames:v','1','-f','image2pipe','-vcodec','png','-'])
 im=Image.open(io.BytesIO(b)).convert('RGBA')
 alpha=im.getchannel('A').filter(ImageFilter.MinFilter(7)).filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(1.25))
 alpha=alpha.point(lambda v:round(max(0,min(255,(v-90)*255/95)))).filter(ImageFilter.GaussianBlur(.65));im.putalpha(alpha)
 return im
parchment=subject(M/'brittle-parchment-v25.mp4',0)
green=subject(M/'hulling-corrected.mp4',191)
# Round off the source frame's clipped top/bottom without changing the bean
# between milling, selection and roasting. Apply one shared silhouette mask.
a=np.array(green.getchannel('A')).astype(float)
yy,xx=np.indices(a.shape); cx=(a.shape[1]-1)/2
arc=np.sqrt(np.maximum(0,1-((xx-cx)/(a.shape[1]*.49))**2))
cap=20*(1-arc)
edge=np.minimum(yy-cap,a.shape[0]-1-yy-cap)
a*=np.clip(edge/1.5,0,1)
green.putalpha(Image.fromarray(a.astype('uint8')))
# Same screen coordinates for dry milling, sorting and roast; no silhouette morph.
w,h=green.size
parchment=parchment.resize((w,h),Image.Resampling.LANCZOS)
canvas=lambda:Image.new('RGB',(720,960),(245,244,240))
def place(bg,im,x=None,y=None):bg.paste(im,(int((720-im.width)/2 if x is None else x),int((960-im.height)/2 if y is None else y)),im)
def encode(name,frames,duration):
 proc=subprocess.Popen([FF,'-v','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s','720x960','-r','24','-i','-','-an','-c:v','libx264','-preset','fast','-crf','17','-pix_fmt','yuv420p','-threads','2','-t',str(duration),str(BASE/(name+'.mp4'))],stdin=subprocess.PIPE)
 for frame in frames:proc.stdin.write(frame.tobytes())
 proc.stdin.close();assert proc.wait()==0

def smooth(t):t=max(0,min(1,t));return t*t*(3-2*t)
# Irregular staggered fracture seams; every piece is a rigid photographic flake.
cols,rows=4,5
points=[[(round(x*w/cols + (math.sin(y*11+x*7)*w*.045 if 0<x<cols else 0)),round(y*h/rows + (math.sin(x*13+y*5)*h*.035 if 0<y<rows else 0))) for x in range(cols+1)] for y in range(rows+1)]
pieces=[]
for row in range(rows):
 for col in range(cols):
  polygon=[points[row][col],points[row][col+1],points[row+1][col+1],points[row+1][col]]
  mask=Image.new('L',(w,h));ImageDraw.Draw(mask).polygon(polygon,fill=255)
  part=parchment.copy();part.putalpha(Image.fromarray(np.minimum(np.array(part.getchannel('A')),np.array(mask))))
  box=part.getbbox()
  if box:
   part=part.crop(box);sign=-1 if col<2 else 1
   pieces.append((part,box,row,col,sign))
def hull_frames():
 for frame in range(192):
  t=frame/24;bg=canvas();place(bg,green)
  for part,box,row,col,sign in pieces:
   start=.85+row*.24+abs(col-1.5)*.11
   u=max(0,(t-start)/2.7);opening=smooth(u)
   x=(720-w)/2+box[0]+sign*(15*opening+100*u*u)
   y=(960-h)/2+box[1]-8*opening+275*u*u
   angle=sign*(9+col*3+row*2)*opening
   rigid=part.rotate(angle,Image.Resampling.BICUBIC,expand=True)
   if u<1.9:place(bg,rigid,x-(rigid.width-part.width)/2,y-(rigid.height-part.height)/2)
  yield bg
if '--process-only' not in __import__('sys').argv:encode('hulling',hull_frames(),8)
arr=np.array(green).astype(float);lum=arr[:,:,0]*.30+arr[:,:,1]*.59+arr[:,:,2]*.11
brown=arr.copy()
for c,f in enumerate([.68,.36,.20]):brown[:,:,c]=lum*f
def roast_frames():
 for frame in range(240):
  t=frame/24;a=max(0,min(1,(t-2)/7.4));im=Image.fromarray(np.uint8(np.clip(arr*(1-a)+brown*a,0,255)),'RGBA');bg=canvas();place(bg,im);yield bg
if '--process-only' not in __import__('sys').argv:encode('green-roast',roast_frames(),10)
# Gradual drying: stretch the rapid wrinkling interval, interpolate intermediate frames.
retime="setpts='if(lt(PTS*TB,0.8),PTS*0.5,if(lt(PTS*TB,3.5),(0.4+(PTS*TB-0.8)*1.5555556)/TB,(4.6+(PTS*TB-3.5)*0.2666667)/TB))'"
key='format=rgba,colorkey=0x000000:0.035:0.025,split[f][a];[a]alphaextract,erosion,erosion,erosion,gblur=sigma=1.2[a2];[f][a2]alphamerge'
f=f'[0:v]scale=-2:480,{retime},minterpolate=fps=24:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1,tpad=stop_mode=clone:stop_duration=0.4,{key}[obj];color=c=0xf5f4f0:s=720x960:r=24:d=5[bg];[bg][obj]overlay=(W-w)/2:(H-h)/2:shortest=1,setsar=1,format=yuv420p[v]'
run(['-i',str(M/'natural-corrected.mp4'),'-filter_complex_threads','1','-filter_complex',f,'-map','[v]','-an','-c:v','libx264','-preset','fast','-crf','17','-threads','2','-t','5',str(BASE/'natural.mp4')])
# The generated wash is anchored to the exact honey endpoint. A gradual loss
# of amber saturation makes the clean parchment result legible at small sizes.
f="scale=720:960,hue=s='1-0.65*clip((t-2)/3,0,1)',fps=24,setsar=1,format=yuv420p"
run(['-i',str(M/'same-seeds-washed-v25.mp4'),'-vf',f,'-an','-c:v','libx264','-preset','fast','-crf','17','-threads','2','-t','6',str(BASE/'washed.mp4')])
print('Prepared rigid parchment, clean silhouette, gradual drying, and matching wash.')
