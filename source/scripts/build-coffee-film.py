"""v26: peel → honey → washed → natural → dry hull → SAME bean/roast."""
from pathlib import Path
import subprocess,os,shutil,json
FF=os.environ.get('FFMPEG_BIN') or shutil.which('ffmpeg') or '/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
ROOT=Path(__file__).resolve().parents[1];os.chdir(ROOT)
BASE=ROOT/'output/continuity-v26';BASE.mkdir(parents=True,exist_ok=True)
MASTER=ROOT/'assets/video/masters';OUT=ROOT/'assets/video'
# Preserve the approved hulling/roast footage from the V25 preparation.
for shot in ['hulling','green-roast']:
 shutil.copy2(ROOT/'output/continuity-v25'/f'{shot}.mp4', BASE/f'{shot}.mp4')
grade="curves=r='0/0 0.45/0.48 0.72/0.91 1/0.96':g='0/0 0.43/0.48 0.68/0.92 1/0.96':b='0/0 0.40/0.47 0.62/0.92 1/0.95',lutrgb=r='min(val,245)':g='min(val,244)':b='min(val,240)'"
cap="geq=lum='p(X,Y)*if(lt(Y,32),clip((1-pow((X-W*.52)/(W*.5),2)-pow((Y-32)/32,2))*20,0,1),if(gt(Y,H-32),clip((1-pow((X-W*.48)/(W*.5),2)-pow((Y-(H-32))/32,2))*20,0,1),1))'"
key='format=rgba,colorkey=0x000000:0.035:0.025,scale=-2:480,split[fg][a];[a]alphaextract,erosion,erosion,erosion,erosion,erosion,dilation,dilation,boxblur=2:1,lut=y=\'clip((val-90)*255/95,0,255)\','+cap+',gblur=sigma=0.7[alpha];[fg][alpha]alphamerge'
def run(args):subprocess.run([FF,'-hide_banner','-loglevel','error','-y',*args],check=True)
def render(name,args,duration):
 run([*args,'-an','-c:v','libx264','-preset','fast','-crf','17','-threads','2','-t',str(duration),str(BASE/(name+'.mp4'))])
 print('Rendered',name,flush=True)
# V25 process shots are prepared by scripts/prepare-process-v26.py.
# Preserve the precise soft peel approved in the user's uploaded film.
# Stop BEFORE the original core strips the seed again or becomes pea-like.
# At 4.125s the red peel has left and wet mucilage is exposed.
opening=f'trim=start=0:duration=4.125,setpts=(PTS-STARTPTS)*(4.75/4.125),crop=720:960:0:160,{grade},fps=24,tpad=stop_mode=clone:stop_duration=2,setsar=1,format=yuv420p'
render('peeling-honey',['-i',str(MASTER/'core.mp4'),'-vf',opening],6.75)
# Green/roast is prepared with the same smoothed matte as the hulling endpoint.
if '--prepare' in __import__('sys').argv:raise SystemExit(0)
# The grinding generation starts from the exact roasted frame above.
# Lift only the pale background/highlights to the common ivory; preserve dark
# coffee values. This removes the generated shot's drifting beige backdrop.
grind_grade="lutrgb=r='if(lte(val,180),val,min(245,180+(val-180)*65/42))':g='if(lte(val,170),val,min(244,170+(val-170)*74/44))':b='if(lte(val,160),val,min(240,160+(val-160)*80/46))'"
render('grinding',['-i',str(MASTER/'same-bean-grinding-v22.mp4'),'-vf',f'trim=duration=6,setpts=PTS-STARTPTS,scale=720:960,{grind_grade},fps=24,setsar=1,format=yuv420p'],6)
render('cup',['-i',str(MASTER/'core.mp4'),'-vf',f'trim=start=13:duration=5,setpts=PTS-STARTPTS,crop=720:960:0:160,{grade},fps=24,setsar=1,format=yuv420p'],5)
shots=[('peeling-honey',6.75,0,'fade'),('washed',6,.25,'fade'),('natural',8.5,.4,'fadewhite'),('hulling',8,.25,'fade'),('green-roast',10,0,'cut'),('grinding',6,0,'cut'),('cup',5,.4,'fade')]
inputs=[]
for name,*_ in shots:inputs+=['-i',str(BASE/(name+'.mp4'))]
filters=[f'[{i}:v]settb=AVTB,setpts=PTS-STARTPTS[v{i}]' for i in range(len(shots))];duration=shots[0][1];previous='v0';edit=[dict(shot='peeling-honey',start=0,end=6.75)]
for i,(shot,dur,overlap,transition) in enumerate(shots[1:],1):
 offset=duration-overlap;name=f'x{i}'
 if overlap:filters.append(f'[{previous}][v{i}]xfade=transition={transition}:duration={overlap}:offset={offset:.3f}[{name}]')
 else:filters.append(f'[{previous}][v{i}]concat=n=2:v=1:a=0[{name}]')
 previous=name;duration+=dur-overlap;edit.append(dict(shot=shot,start=round(offset,3),end=round(duration,3)))
run([*inputs,'-filter_complex_threads','1','-filter_complex',';'.join(filters),'-map',f'[{previous}]','-an','-c:v','libx264','-preset','slow','-crf','19','-g','6','-keyint_min','6','-sc_threshold','0','-pix_fmt','yuv420p','-threads','2','-movflags','+faststart',str(OUT/'coffee-journey-v26.mp4')])
print('Final duration',duration)
(BASE/'edit-timeline.json').write_text(json.dumps(edit,indent=2))
run(['-i',str(OUT/'coffee-journey-v26.mp4'),'-vf',f'fps={12/duration},scale=240:-1,tile=6x2','-frames:v','1',str(BASE/'film-contact.jpg')])
run(['-i',str(OUT/'coffee-journey-v26.mp4'),'-frames:v','1',str(OUT/'coffee-journey-poster-v26.jpg')])
