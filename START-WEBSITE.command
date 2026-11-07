#!/bin/zsh
cd -- "${0:A:h}"
preview_script="$PWD/serve-website.py"
if [[ -d dist ]]; then
  preview_script="$PWD/scripts/serve-website.py"
  cd dist
fi
python3 "$preview_script" 4180
