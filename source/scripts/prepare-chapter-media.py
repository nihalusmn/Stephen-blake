"""Encode the approved movie as short seekable chapters; no creative edits.

Default preserves the accepted phone files. --desktop creates a separate set.
"""
from pathlib import Path
import json, os, shutil, subprocess, sys

ffmpeg=os.environ.get('SB_FFMPEG') or shutil.which('ffmpeg') or '/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
source=Path('assets/video/coffee-journey-v28.mp4')
desktop='--desktop' in sys.argv
version='32' if desktop else '31'
destination=Path('assets/video/desktop' if desktop else 'assets/video/mobile');destination.mkdir(parents=True,exist_ok=True)
chapters=[('opening',0,1.5),('natural',1.5,9.70),('honey',10,14.70),('washed',15,20.48),
          ('hulling',20.5,26.5),('green',26.5,30.5),('roasting',30.5,38.5),('grinding',38.5,44.5),('collection',44.5,49.05)]
manifest=[]
for name,start,end in chapters:
    target=destination/f'{name}-v{version}.mp4'
    subprocess.run([ffmpeg,'-hide_banner','-loglevel','error','-ss',str(start),'-i',str(source),
        '-t',str(end-start+.084),'-vf',('scale=960:1280:flags=lanczos' if desktop else 'scale=720:960:flags=lanczos'),'-an','-c:v','libx264',
        '-preset','slow','-crf','22','-g','6','-keyint_min','6','-sc_threshold','0','-bf','0',
        '-pix_fmt','yuv420p','-movflags','+faststart','-y',str(target)],check=True)
    manifest.append(dict(chapter=name,start=start,end=end,bytes=target.stat().st_size))
    print(name,target.stat().st_size,flush=True)
Path(f'docs/V{version}-chapter-media.json').write_text(json.dumps(manifest,indent=2)+'\n')
