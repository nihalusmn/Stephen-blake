from pathlib import Path
import subprocess

FF='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
SRC='/Users/nihalusmanmm/Downloads/C0064_1.mp4'
OUT=Path('output/roastery-films')
def run(args):
    subprocess.run([FF,'-hide_banner','-loglevel','error','-y',*args],check=True)
grade='colorchannelmixer=rr=0.94:gg=1.01:bb=1.16,eq=saturation=0.86:contrast=1.025:brightness=0.008'
base='vidstabtransform=input=output/roastery-review/motion.trf:smoothing=15:optzoom=0:zoom=2:interpol=bicubic,crop=1040:1848:20:55,'+grade+',trim=start=0.3:end=5.5,setpts=4*(PTS-STARTPTS),fps=25,setsar=1'
enc=['-c:v','libx264','-preset','medium','-crf','18','-pix_fmt','yuv420p','-movflags','+faststart']
run(['-i',SRC,'-vf',base+',scale=1080:1920:flags=lanczos,setsar=1','-an',*enc,str(OUT/'Stephen-Blake-Portrait-Master.mp4')])
master=str(OUT/'Stephen-Blake-Portrait-Master.mp4')
# Dissolve the last 0.8 seconds into the beginning, retaining forward movement.
loop='[0:v]split[a][b];[a]trim=start=0.8,setpts=PTS-STARTPTS[body];[b]trim=end=0.8,setpts=PTS-STARTPTS[head];[body][head]xfade=transition=fade:duration=0.8:offset=19.2,format=yuv420p[v]'
run(['-i',master,'-filter_complex',loop,'-map','[v]','-an',*enc,'-crf','23','assets/video/roastery-story.mp4'])
run(['-ss','3','-i','assets/video/roastery-story.mp4','-frames:v','1','-q:v','2','assets/video/roastery-poster.jpg'])
# Native-width landscape detail: label, drum, and cooling tray.
detail="[0:v]split=3[a][b][c];[a]trim=end=6.4,setpts=PTS-STARTPTS,crop=1080:608:0:360[a1];[b]trim=start=6.4:end=13.6,setpts=PTS-STARTPTS,crop=1080:608:0:820[b1];[c]trim=start=13.6:end=20.8,setpts=PTS-STARTPTS,crop=1080:608:0:1250[c1];[a1][b1][c1]concat=n=3:v=1:a=0[v]"
run(['-i',master,'-filter_complex',detail,'-map','[v]','-an',*enc,str(OUT/'Stephen-Blake-Landscape-Master.mp4')])
land=str(OUT/'Stephen-Blake-Landscape-Master.mp4')
run(['-i',land,'-vf','scale=1920:1080:flags=lanczos,setsar=1','-an',*enc,str(OUT/'Stephen-Blake-Landscape-Web.mp4')])
font='/System/Library/Fonts/Supplemental/Arial.ttf'
titles=[('STEPHEN BLAKE',0.5,5.8),('CRAFTED WITH PRECISION',6.8,10.8),('FROM ROAST TO CUP',11.2,15.4),('Coffee Roastery · Private Label · Bulk Supply',16,20.4)]
filters=['scale=1920:1080:flags=lanczos,setsar=1','drawbox=x=0:y=900:w=iw:h=180:color=black@0.4:t=fill']
for title,start,end in titles:
    alpha=f"if(lt(t,{start}),0,if(lt(t,{start+0.5}),(t-{start})/0.5,if(lt(t,{end-0.5}),1,if(lt(t,{end}),({end}-t)/0.5,0))))"
    filters.append(f"drawtext=fontfile='{font}':text='{title}':fontsize=32:fontcolor=0xF4EFE5:x=70:y=970:alpha='{alpha}'")
run(['-i',land,'-stream_loop','-1','-i',SRC,'-map','0:v','-map','1:a','-vf',','.join(filters),'-af','highpass=f=80,lowpass=f=10000,afftdn=nf=-25,volume=0.65,afade=t=in:d=0.6,afade=t=out:st=19.8:d=1','-t','20.8',*enc,'-c:a','aac','-b:a','160k',str(OUT/'Stephen-Blake-Brand-Film.mp4')])
print('All four exports and the website loop are complete.',flush=True)
