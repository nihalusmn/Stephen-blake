"""Verify the decoded motion reveals distinct seeds and removes the fruit husk."""
from pathlib import Path
import subprocess,json
import numpy as np
from PIL import Image
FF='/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg'
D=Path('output/continuity-v26')
def frame(name,t):
 b=subprocess.check_output([FF,'-v','error','-ss',str(t),'-i',str(D/(name+'.mp4')),'-frames:v','1','-f','rawvideo','-pix_fmt','rgb24','-'])
 return np.frombuffer(b,np.uint8).reshape(960,720,3).astype(float)
first=frame('washed',0);middle=frame('washed',2.75);end=frame('washed',5.65)
honey=np.asarray(Image.open(D/'honey-reference.png').convert('RGB')).astype(float)
endpoint=np.asarray(Image.open(D/'washed-136.png')).astype(float)
assert np.abs(first-honey).mean()<2,'Wash must start with Honey seeds'
assert np.abs(end-endpoint).mean()<2,'End must hold the exposed solid seed photograph'
# Upper seed texture has been exposed while lower portions still carry gel.
top=(slice(390,450),slice(240,490));bottom=(slice(565,600),slice(240,490))
assert np.abs(middle[top]-end[top]).mean()<np.abs(middle[top]-first[top]).mean()
assert np.abs(middle[bottom]-first[bottom]).mean()<np.abs(middle[bottom]-end[bottom]).mean()
# A simple desaturation leaves the same image detail. This endpoint must not.
corr=float(np.corrcoef(first[355:625,205:530].mean(2).ravel(),end[355:625,205:530].mean(2).ravel())[0,1])
assert corr<.9,'The gel texture must be replaced, not just recoloured'
natural_mid=frame('natural',6.25);natural_end=frame('natural',8.35)
red=lambda a:(a[:,:,0]>a[:,:,1]*1.4)&(a[:,:,1]<120)&(a[:,:,0]>50)
assert red(natural_mid).sum()>15000,'Dry fruit husk must visibly leave the seeds'
end_husk=red(natural_end);end_husk[350:610,225:495]=False
assert end_husk.sum()<100,'Dry fruit husk must be absent around the parchment seeds'
expected=np.asarray(Image.open(D/'natural-202.png')).astype(float)
assert np.abs(natural_end-expected).mean()<2,'Natural ends on the clean parchment seed layer'
assert (np.max(natural_mid,2)<8).sum()<500,'No black matte fragments around moving husk'
report={'wash_start_MAE':float(np.abs(first-honey).mean()),'wash_end_MAE':float(np.abs(end-endpoint).mean()),'old_gel_new_seed_texture_correlation':corr,'natural_mid_husk_pixels':int(red(natural_mid).sum()),'natural_end_husk_pixels':int(end_husk.sum())}
Path('docs/V26-LAYER-CHECKS.json').write_text(json.dumps(report,indent=2));print('PASS',report)
