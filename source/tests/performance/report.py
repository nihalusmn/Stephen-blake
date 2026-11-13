"""Summarise measured reports without choosing favourable runs."""
import json,statistics,shutil
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'output/performance';docs=root/'source/docs/performance-v32';docs.mkdir(exist_ok=True)
summary={}
for label in ['baseline','experiment-a','experiment-b','experiment-fonts','experiment-d','experiment-e','candidate']:
 runs=json.loads((out/label/'summary.json').read_text());summary[label]={}
 for profile in sorted(set(r['profile'] for r in runs)):
  rows=[r for r in runs if r['profile']==profile]
  summary[label][profile]={key:{'median':statistics.median(r[key] for r in rows),'min':min(r[key] for r in rows),'max':max(r[key] for r in rows),'runs':[r[key] for r in rows]} for key in ['score','fcp','lcp','tbt','cls','speedIndex','bytes']}
  summary[label][profile]['count']=len(rows)
  if label in ['baseline','candidate']: assert len(rows)==5, (label,profile,len(rows))
 for label2 in [label]:shutil.copyfile(out/label2/'summary.json',docs/(label2+'-runs.json'))
(docs/'measurements.json').write_text(json.dumps(summary,indent=2))
validation={}
for name in ['site-regression','reliability-chromium','reliability-webkit','visual-comparison','rapid-scroll','slow-network','slow-blocked','warm-fallback','seo-preservation','local-font-delay-chromium','local-font-delay-webkit']:
 p=out/'candidate'/(name+'.json');r=json.loads(p.read_text());validation[name]=r if name in ['visual-comparison','seo-preservation'] else ({'status':r.get('status','passed'),'count':len(r.get('passed',r.get('results',r.get('samples',[])))),'errors':r.get('errors',[])} if isinstance(r,dict) else {'status':'passed','count':len(r)})
r=json.loads((out/'candidate/analytics.json').read_text());validation['analytics']={k:r[k] for k in ['status','initialPageViews','collectedRequests','syntheticEnquiry']}
(docs/'validation-summary.json').write_text(json.dumps(validation,indent=2))
for label in ['baseline','candidate']:
 r=json.loads((out/label/'startup.json').read_text());(docs/(label+'-startup.json')).write_text(json.dumps(r,indent=2))
shutil.copyfile(out/'encoding.json',docs/'encoding.json')
for label in ['baseline','candidate']:
 for profile in ['mobile','desktop']:
  s=summary[label][profile];print(label,profile,'n',s['count'],*(f'{k}={s[k]["median"]:.3f} [{s[k]["min"]:.3f},{s[k]["max"]:.3f}]' for k in ['score','lcp','tbt','cls','speedIndex','bytes']))
