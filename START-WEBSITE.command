#!/bin/zsh
cd -- "${0:A:h}"
if [[ -d dist ]]; then cd dist; fi
print 'Open http://localhost:4180 in your browser. Keep this window open while viewing.'
python3 -m http.server 4180 --bind 127.0.0.1
