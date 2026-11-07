from pathlib import Path
import subprocess,json,textwrap,os,shutil
FF=os.environ.get('FFMPEG_BIN') or shutil.which('ffmpeg') or '/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
ROOT=Path(__file__).resolve().parents[1]
os.chdir(ROOT)
base=ROOT/'output/continuity-v28'
base.mkdir(parents=True,exist_ok=True)
cues=[
(0,.45,'Every cup begins\nas a fruit.','Before coffee is a bean, it is a cherry on a tree.'),
(.45,1.50,'Harvested\nat ripeness','The ripe cherry protects the coffee seeds within.'),
(1.50,10.0,'Natural\nprocess','The whole cherry dries; its outer husk is removed to reveal parchment-covered seeds.'),
(10.0,15.0,'Honey\nprocess','Soft fruit skin is removed; mucilage remains on the seeds during drying.'),
(15.0,20.5,'Washed\nprocess','Water carries the loosened mucilage away, exposing parchment-covered coffee seeds.'),
(20.5,26.5,'Removing the\nparchment','Dry, brittle parchment breaks into flakes to reveal green coffee.'),
(26.5,30.5,'Selected.\nSorted. Graded.','Green coffee is prepared to an agreed buyer specification.'),
(30.5,38.5,'Character,\ndeveloped by heat.','The same bean deepens from green to a rich roasted brown.'),
(38.5,44.5,'Ground\nfor the brew','Roasted coffee is ground to suit the intended brewing method.'),
(44.5,49.1,'From origin\nto the cup.','Green coffee. Roasted coffee. Filter coffee.')]
(base/'film-cues.json').write_text(json.dumps([dict(start=a,end=b,title=t,description=d) for a,b,t,d in cues],indent=2))
font=os.environ.get('FONT_SERIF','/System/Library/Fonts/Supplemental/Georgia.ttf')
sans=os.environ.get('FONT_SANS','/System/Library/Fonts/Supplemental/Arial.ttf')
filters=["[0:v]scale=720:960:flags=lanczos,format=rgba[film];nullsrc=s=720x960:r=24,format=gray,geq=lum='255*clip(min(min(Y/100,(H-1-Y)/100),min(X/80,(W-1-X)/80)),0,1)'[mask];[film][mask]alphamerge[soft];color=c=0xf5f4f0:s=1440x960:r=24:d=49.1[bg];[bg][soft]overlay=680:0:shortest=1[v0]"]
filters.append(f"[v0]drawtext=fontfile='{sans}':text='S T E P H E N   B L A K E':fontsize=19:fontcolor=0x273a30:x=80:y=110,drawbox=x=80:y=170:w=420:h=1:color=0xb0b4a8:t=fill[v1]")
last='v1'
for i,(a,b,title,desc) in enumerate(cues):
 titlefile=base/f'title-{i}.txt';descfile=base/f'desc-{i}.txt'
 titlefile.write_text(title);descfile.write_text(textwrap.fill(desc,36))
 # Text-file paths are project-relative to avoid filter escaping of the workspace name.
 enable=f'gte(t,{a})*lt(t,{b})'
 filters.append(f"[{last}]drawtext=fontfile='{font}':textfile='{titlefile.relative_to(Path.cwd())}':expansion=none:fontsize=48:line_spacing=8:fontcolor=0x25352c:x=80:y=355:enable='{enable}',drawtext=fontfile='{sans}':textfile='{descfile.relative_to(Path.cwd())}':expansion=none:fontsize=22:line_spacing=12:fontcolor=0x646a61:x=80:y=520:enable='{enable}'[t{i}]")
 last=f't{i}'
filters.append(f"[{last}]drawtext=fontfile='{sans}':text='O R I G I N   /   P R O C E S S   /   C H A R A C T E R':fontsize=12:fontcolor=0x71786b:x=80:y=842,format=yuv420p[out]")
subprocess.run([FF,'-y','-v','error','-i','assets/video/coffee-journey-v28.mp4','-filter_complex_threads','1','-filter_complex',';'.join(filters),'-map','[out]','-an','-c:v','libx264','-preset','fast','-crf','19','-threads','2','-movflags','+faststart','Stephen-Blake-Cinematic-Film-v28.mp4'],check=True)
subprocess.run([FF,'-y','-v','error','-ss','10','-i','Stephen-Blake-Cinematic-Film-v28.mp4','-frames:v','1',str(base/'captioned-review.jpg')],check=True)
