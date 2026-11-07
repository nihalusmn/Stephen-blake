STEPHEN BLAKE — COMPLETE WEBSITE

The dist folder is the ready-to-upload website. Upload its CONTENTS to your
web host's public directory. Keep index.html and assets together.
The production dist/index.html also works when double-clicked. The source
index.html forwards file-based previews to that build. In the delivered ZIP,
the production index.html is at the top level: extract first, then open it.

Local preview without installing dependencies:
  python3 scripts/serve-website.py 4175
  Open http://127.0.0.1:4175/dist/

To edit and rebuild (Node.js 22.12+ or 24 recommended):
  npm install
  npm run dev
  npm run build

Included: source code, production dist, final image assets and PNG masters,
expanded origin content, animation, product catalogue, documentation and tests.
Node dependencies and package caches are excluded from this ZIP.

Green product images are illustrative edits based on the supplied references.
Robusta Cherry and washed Arabica include the requested surface cleanup.
See docs/GREEN-CLEANUP.md and docs/GREEN-REFERENCE-IMAGES.md for image prompts.

The enquiry form prepares a brief for WhatsApp; it does not send email or
save to a backend. Unimplemented policy and administration links have been removed.
Owner-approved policies and production hosting security remain deployment tasks. See docs/IMPLEMENTATION.md for further implementation notes.
