"""V27: falling intact cherry → Natural → Honey → Washed → parchment.
Reuse all approved source clips; only the opening and washed material change.
"""
from pathlib import Path
import subprocess,json,shutil
from PIL import Image
FF='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
B=Path('output/continuity-v27');B.mkdir(parents=True,exist_ok=True)
def run(args):subprocess.run([FF,'-v','error','-y',*args],check=True)
# Translate the unchanged first Natural frame: the same cherry lands in the
# exact first Natural frame. The upper extension is its own empty background.
im=Image.open('assets/video/masters/v27-production/natural-000.png').convert('RGB')
p=subprocess.Popen([FF,'-v','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s','720x960','-r','24','-i','-','-an','-c:v','libx264','-crf','16','-pix_fmt','yuv420p',str(B/'fall.mp4')],stdin=subprocess.PIPE)
for f in range(36):
 t=f/35;dy=round(-125*(1-t*t));fr=Image.new('RGB',(720,960),(245,244,240));fr.paste(im,(0,dy));p.stdin.write(fr.tobytes())
 if f==0:fr.save('assets/video/coffee-journey-poster-v27.jpg',quality=95)
p.stdin.close();assert p.wait()==0
for shot in ['natural','hulling','green-roast','grinding','cup']:
 shutil.copy2(Path('assets/video/masters/v27-production')/(shot+'.mp4'),B/(shot+'.mp4'))
run(['-i','assets/video/masters/v27-production/peeling-honey.mp4','-vf','trim=start=1.5,setpts=PTS-STARTPTS','-an','-c:v','libx264','-crf','16','-pix_fmt','yuv420p',str(B/'peeling-honey.mp4')])
shots=[('fall',1.5,0,'cut'),('natural',8.5,0,'cut'),('peeling-honey',5.25,.25,'fadewhite'),('washed',6,.25,'fade'),('hulling',8,.25,'fade'),('green-roast',10,0,'cut'),('grinding',6,0,'cut'),('cup',5,.4,'fade')]
inputs=[]
for name,*_ in shots:inputs+=['-i',str(B/(name+'.mp4'))]
filters=[f'[{i}:v]settb=AVTB,setpts=PTS-STARTPTS[v{i}]' for i in range(len(shots))];duration=shots[0][1];previous='v0';edit=[dict(shot='fall',start=0,end=1.5)]
for i,(shot,dur,overlap,transition) in enumerate(shots[1:],1):
 offset=duration-overlap;name=f'x{i}'
 if overlap:filters.append(f'[{previous}][v{i}]xfade=transition={transition}:duration={overlap}:offset={offset:.3f}[{name}]')
 else:filters.append(f'[{previous}][v{i}]concat=n=2:v=1:a=0[{name}]')
 previous=name;duration+=dur-overlap;edit.append(dict(shot=shot,start=round(offset,3),end=round(duration,3)))
run([*inputs,'-filter_complex_threads','1','-filter_complex',';'.join(filters),'-map',f'[{previous}]','-an','-c:v','libx264','-preset','fast','-crf','18','-g','6','-keyint_min','6','-sc_threshold','0','-pix_fmt','yuv420p','-threads','2','-movflags','+faststart','assets/video/coffee-journey-v27.mp4'])
(B/'edit-timeline.json').write_text(json.dumps(edit,indent=2));print('Final duration',duration)
