"""Package the built website and editable source. Run from the project root."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import sys, re, json

version = sys.argv[1] if len(sys.argv) > 1 else '31'
if not version.isdigit():
    raise SystemExit('Supply a numeric version.')
root = Path.cwd()
candidate = '--candidate' in sys.argv[2:]
slim = int(version) >= 32
media = set(json.loads((root/'app/runtime-media.json').read_text())['files']) if slim else set()
media_extensions = {'.png','.jpg','.jpeg','.webp','.svg','.gif','.heic','.mp4','.mov','.webm','.m4v','.avif'}
out = root / (f'Stephen-Blake-v{version}-Candidate.zip' if candidate else f'Stephen-Blake-Complete-Website-v{version}.zip')
with ZipFile(out, 'w', ZIP_DEFLATED, 6) as archive:
    for p in (root / 'dist').rglob('*'):
        if p.is_file() and p.name != '.DS_Store':
            archive.write(p, p.relative_to(root / 'dist'))
    for name, destination in [('START-WEBSITE.command', 'START-WEBSITE.command'),
                              (f'docs/V{version}-RELEASE-CANDIDATE.md' if candidate else 'docs/FINAL-DELIVERY.md', 'START-HERE.md'),
                              ('CONTINUE-HERE.md', 'CONTINUE-HERE.md'),
                              ('scripts/serve-website.py', 'serve-website.py'),
                              ('Stephen-Blake-Cinematic-Film-v28.mp4', 'Stephen-Blake-Cinematic-Film-v28.mp4')]:
        if slim and Path(name).suffix.lower() in media_extensions: continue
        source = root / name
        if not source.exists(): source = root.parent / name
        archive.write(source, destination)
    for folder in ['app', 'assets', 'docs', 'tests', 'lib', 'scripts']:
        for p in (root / folder).rglob('*'):
            if slim and folder == 'assets' and str(p.relative_to(root)) not in media: continue
            if slim and folder != 'assets' and p.suffix.lower() in media_extensions: continue
            if p.is_file() and p.name != '.DS_Store' and not (int(version) >= 32 and ('-illustration-v32' in p.name or re.match(r'green-.*-v32-(480|960|1120)\.webp$',p.name))):
                archive.write(p, Path('source') / p.relative_to(root))
    for name in ['index.html', 'package.json', 'pnpm-lock.yaml', 'vite.config.js', 'README.txt', 'CONTINUE-HERE.md']:
        if (root / name).exists():
            archive.write(root / name, Path('source') / name)
with ZipFile(out) as archive:
    assert archive.testzip() is None
    assert 'source/app/visuals/journey-film.js' in archive.namelist()
    if not slim:
        assert 'assets/video/coffee-journey-v28.mp4' in archive.namelist()
        assert 'assets/video/mobile/coffee-journey-v30.mp4' in archive.namelist()
        assert 'assets/video/mobile/washed-v30.mp4' in archive.namelist()
        assert 'source/assets/video/masters/core.mp4' in archive.namelist()
    else:
        for path in media:
            assert path in archive.namelist(), path
            assert 'source/'+path in archive.namelist(), path
        for path in archive.namelist():
            if Path(path).suffix.lower() in media_extensions:
                assert path.removeprefix('source/') in media, f'Unused media packaged: {path}'
    if int(version) >= 31:
        assert 'source/app/visuals/scrub-surface.js' in archive.namelist()
        assert 'assets/video/mobile/opening-v31.mp4' in archive.namelist()
        assert 'assets/video/mobile/roasting-v31.mp4' in archive.namelist()
        assert 'source/app/visuals/chapter-covers.json' in archive.namelist()
        assert 'assets/video/recovery-v31/frame-196.jpg' in archive.namelist()
    if int(version) >= 32:
        assert 'assets/video/desktop/opening-v32.mp4' in archive.namelist()
        assert 'assets/video/desktop/roasting-v32.mp4' in archive.namelist()
        assert 'source/app/green-photography.js' in archive.namelist()
        assert 'assets/photography/green-collection-tray-v32-original-logo-960.webp' in archive.namelist()
print(f'{out.name}: verified, {out.stat().st_size / 1048576:.1f} MB')
