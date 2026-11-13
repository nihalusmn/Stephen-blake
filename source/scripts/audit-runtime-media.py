"""Trace live entry points and explicitly expand the animation's dynamic URLs.

Writes the build allowlist. --prune moves unused media out of this project to
a temporary recovery directory; it never touches another website version.
"""
from pathlib import Path
import json, re, sys, shutil, tempfile

root = Path(__file__).resolve().parent.parent
seen = set()
def visit(path):
    path = path.resolve()
    if path in seen: return
    seen.add(path)
    text = path.read_text()
    if path.suffix == '.json': return
    for ref in re.findall(r"(?:from\s*|import\s*)['\"]([^'\"]+)['\"]", text):
        if ref.startswith('.'): visit(path.parent / ref)
    if path.suffix == '.html':
        for ref in re.findall(r'(?:src|href)=[\"\'](app/[^\"\']+)[\"\']', text):
            visit(root / ref)
visit(root / 'index.html')
texts = '\n'.join(p.read_text() for p in seen if p.suffix != '.json')
media = set(re.findall(r'assets/[\w./-]+\.(?:avif|webp|png|jpe?g|svg|mp4|webm|woff2?)', texts))
# Catalogue paths are intentionally resolved at runtime.
for name in re.findall(r"image:'(/[^']+)'", (root/'app/catalogue.js').read_text()):
    media.add('assets/products' + name)
# Grade photos have a dynamic filename; cards and dossiers use two sizes.
photo_names = re.findall(r"photo\('([^']+)'\)", (root/'app/green-photography.js').read_text())
for name in photo_names:
    for size in (480,960): media.add(f'assets/photography/{name}-v32-original-logo-{size}.webp')
# All frames are needed for reverse scrolling, media failure and Data Saver.
for i in range(197): media.add(f'assets/video/recovery-v31/frame-{i:03}.jpg')
for name in ('opening','natural','honey','washed','hulling','green','roasting','grinding','collection'):
    media.add(f'assets/video/mobile/{name}-v31.mp4')
    media.add(f'assets/video/desktop/{name}-v32.mp4')
media.update('assets/fonts/' + p.name for p in (root/'assets/fonts').glob('*-OFL.txt'))
missing = [p for p in sorted(media) if not (root/p).is_file()]
if missing: raise SystemExit(f'Missing runtime files: {missing}')
files = [p for p in (root/'assets').rglob('*') if p.is_file()]
unused = [p for p in files if str(p.relative_to(root)) not in media]
manifest = {'version':32,'entryPoints':sorted(str(p.relative_to(root)) for p in seen),
            'files':sorted(media),'bytes':sum((root/p).stat().st_size for p in media)}
(root/'app/runtime-media.json').write_text(json.dumps(manifest,indent=2)+'\n')
report = {'keptCount':len(media),'keptBytes':manifest['bytes'],'removedCount':len(unused),
          'removedBytes':sum(p.stat().st_size for p in unused),
          'removed':[str(p.relative_to(root)) for p in unused]}
if '--prune' in sys.argv:
    recovery = Path(tempfile.mkdtemp(prefix='stephen-blake-v32-unused-'))
    for p in unused:
        dest = recovery / p.relative_to(root); dest.parent.mkdir(parents=True,exist_ok=True)
        shutil.move(p,dest)
    for p in sorted((root/'assets').rglob('*'),reverse=True):
        if p.is_dir() and not any(p.iterdir()): p.rmdir()
    report['temporaryRecovery'] = str(recovery)
    (root/'docs/V32-MEDIA-CLEANUP.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({k:v for k,v in report.items() if k!='removed'},indent=2))
