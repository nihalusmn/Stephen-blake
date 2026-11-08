"""Create mobile-only delivery copies; the approved desktop master stays intact.
Run from the project root. Requires FFmpeg (on PATH, or set SB_FFMPEG).
"""
from pathlib import Path
import os, shutil, subprocess

ffmpeg = os.environ.get('SB_FFMPEG') or shutil.which('ffmpeg')
if not ffmpeg:
    bundled = Path('/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg')
    if bundled.exists(): ffmpeg = str(bundled)
if not ffmpeg: raise SystemExit('Install FFmpeg or set SB_FFMPEG to its executable.')
source = Path('assets/video/coffee-journey-v28.mp4')
destination = Path('assets/video/mobile')
destination.mkdir(parents=True, exist_ok=True)
for name, start, end in [('coffee-journey', 0, None), ('natural', 1.50, 9.75),
                         ('honey', 10.00, 14.75), ('washed', 15.00, 20.55)]:
    cmd = [ffmpeg, '-hide_banner', '-loglevel', 'error']
    if start: cmd += ['-ss', str(start)]
    cmd += ['-i', str(source)]
    if end: cmd += ['-t', str(end-start)]
    cmd += ['-vf', 'scale=720:960:flags=lanczos', '-an', '-c:v', 'libx264',
            '-preset', 'slow', '-crf', '18', '-g', '6', '-keyint_min', '6',
            '-sc_threshold', '0', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
            '-y', str(destination / f'{name}-v30.mp4')]
    subprocess.run(cmd, check=True)
    print(f'{name}: ready')
