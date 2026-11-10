"""Query npm's advisory service for the exact installed dependency versions."""
import json, urllib.request
from pathlib import Path
packages={}
for item in json.loads(Path('node_modules/.package-map.json').read_text())['packages'].values():
 p=Path('node_modules')/item['url']/'package.json'
 if not p.exists(): continue
 data=json.loads(p.read_text())
 if data.get('private'): continue
 packages.setdefault(data['name'],[])
 if data['version'] not in packages[data['name']]: packages[data['name']].append(data['version'])
request=urllib.request.Request('https://registry.npmjs.org/-/npm/v1/security/advisories/bulk',data=json.dumps(packages).encode(),headers={'Content-Type':'application/json'})
with urllib.request.urlopen(request,timeout=30) as response: advisories=json.load(response)
Path('docs/V31-dependency-advisories.json').write_text(json.dumps({'installed':packages,'advisories':advisories},indent=2))
print(len(packages),'installed packages;',len(advisories),'packages with advisory results')
