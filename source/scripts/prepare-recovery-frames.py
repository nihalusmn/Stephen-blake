"""Extract sparse recovery frames from the approved film, never a different animation."""
from pathlib import Path
import subprocess, json
root=Path(__file__).resolve().parent.parent
ffmpeg='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
out=root/'assets/video/recovery-v31'
out.mkdir(parents=True,exist_ok=True)
subprocess.run([ffmpeg,'-hide_banner','-loglevel','error','-i',str(root/'assets/video/mobile/coffee-journey-v30.mp4'),'-vf',r'select=not(mod(n\,6))','-fps_mode','vfr','-q:v','3','-start_number','0','-y',str(out/'frame-%03d.jpg')],check=True)
frames=sorted(out.glob('frame-*.jpg'))
(out/'manifest.json').write_text(json.dumps({'source':'../mobile/coffee-journey-v30.mp4','fps':4,'count':len(frames),'width':720,'height':960},indent=2))
print(len(frames),'frames;',sum(p.stat().st_size for p in frames),'bytes')
