"""Check the rendered bean silhouette and frame-to-frame joins, not source text."""
from pathlib import Path
import subprocess,json,math
FF='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
def frame(path,t):
 return subprocess.check_output([FF,'-v','error','-ss',str(t),'-i',str(path),'-vf','scale=720:960','-frames:v','1','-pix_fmt','rgb24','-f','rawvideo','-'])
def mask(data):
 return {i//3 for i in range(0,len(data),3) if max(abs(data[i]-245),abs(data[i+1]-244),abs(data[i+2]-240))>65}
def bbox(m):
 return [min(i%720 for i in m),min(i//720 for i in m),max(i%720 for i in m),max(i//720 for i in m)]
a=frame('output/continuity-v25/green-roast.mp4',.1);b=frame('output/continuity-v25/green-roast.mp4',9.9)
ma,mb=mask(a),mask(b);iou=len(ma&mb)/len(ma|mb)
assert iou>.98, f'Bean silhouette changed: IoU={iou}'
# Corresponding interior texture must stay at the same coordinates.
common=ma&mb
points={i for i in common if all(i+dy*720+dx in common for dx,dy in [(-12,0),(12,0),(0,-12),(0,12),(-9,-9),(9,9),(-9,9),(9,-9)])}
x=[.3*a[i*3]+.59*a[i*3+1]+.11*a[i*3+2] for i in points]
y=[.3*b[i*3]+.59*b[i*3+1]+.11*b[i*3+2] for i in points]
mx=sum(x)/len(x);my=sum(y)/len(y)
corr=sum((v-mx)*(w-my) for v,w in zip(x,y))/math.sqrt(sum((v-mx)**2 for v in x)*sum((w-my)**2 for w in y))
assert corr>.98,f'Bean texture shifted: correlation={corr}'
report=dict(silhouette_overlap=iou,texture_correlation=corr,green_bounds=bbox(ma),roasted_bounds=bbox(mb))
if Path('output/continuity-v25/hulling.mp4').exists():
 h=frame('output/continuity-v25/hulling.mp4',7.95)
 mean=sum(abs(v-w) for v,w in zip(h,a))/len(a)
 assert mean<1.5,f'Hulling-to-green cut changed the bean: {mean}'
 report['hulling_to_green_mean_pixel_difference']=mean
Path('docs/bean-continuity-check.json').write_text(json.dumps(report,indent=2))
print('PASS',json.dumps(report))
g=frame('assets/video/masters/same-bean-grinding-v22.mp4',0)
print('Grinding first-frame bounds',bbox(mask(g)))
