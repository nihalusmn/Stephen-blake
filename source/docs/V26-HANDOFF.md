# Stephen Blake — editable handoff
Updated 6 November 2026. Current release: **v26**.

## Preserve the approved experience
Keep the v18 visual design, cherry zoom, intact Harvested hold, original Honey skin peeling, horizontal processing sequence, roasting smoke and product-photo handoff. Do not restore the rejected v19 redesign. V25 is retained as a separate ZIP.

The Honey/peeling, parchment-hulling, green/roast, grinding and cup intermediate clips are byte-for-byte identical to v25. Hash evidence is in `docs/V26-PRESERVED-CLIPS.json`.

## Latest choreography
Estate zoom → branch release → intact ripe cherry → original soft skin peel within Honey → amber mucilage stays on the seeds → Washed water carries that coating away, exposing distinct solid parchment-covered seeds → Natural whole-cherry drying, then dry outer fruit-husk removal, exposing parchment-covered seeds → separate parchment removal → green selection → roast → grind → cup → real product photographs.

Honey, Washed and Natural are alternative processing routes. They accumulate side by side on desktop and slide sideways on mobile. They are not successive treatments of one commercial lot.

## V26 corrections
Washed must physically reveal a separate clean-seed photograph beneath the mucilage. Never replace this with a hue/saturation change. `scripts/prepare-process-v26.py` composites the exact Honey endpoint, the transparent clean-seed layer and photographic water/runoff with a spatial wash front. Amber gel is fully absent at the endpoint.

Natural lasts 8.5 seconds: whole-cherry drying, rigid outer fruit-husk removal, and a hold on parchment-covered seeds. Its matte removes only exterior background, preserving internal dark creases. Retimed adjacent-frame blending avoids optical-flow holes. Parchment removal remains a later chapter.

The master is 48.95 seconds. Wash starts at 6.50, Natural at 12.10, parchment removal at 20.35, selection at 26.35, roast at 30.35, grind at 38.35 and cup at 44.35. Processing-player endpoints are 6.45, 12.08 and 20.32. Natural completes at progress .550 and holds before the strip exits from .556. Other scroll ranges and layout are unchanged.

## Where to edit
- `index.html`: site text and captions.
- `app/origin.js`: scroll timing, captions, hero transform and scene lifecycle.
- `app/visuals/hero-handoff.js`: shared photo/film cherry geometry and first-frame mask.
- `app/visuals/journey-film.js`: film paths, timing cues, horizontal players and reversible seeking.
- `app/visuals/roast-vapour.js`: scroll-driven roasting wisps.
- `app/visuals/macro-photographs.js`: photographic fallback and product handoff.
- `app/origin.css`: responsive presentation and reduced motion.
- `assets/video/masters/washed-seeds-clean-v26.png`: generated transparent clean-seed photograph. Its exact prompt and built-in generation method are in `docs/V26-IMAGE-PROMPT.md`. No additional Higgsfield credits were spent for v26.

## Build and continue
The ZIP root is deployable: open `index.html` with its `assets` folder beside it. The `source` folder contains the editable project. Install its package dependencies and run `npm run build`; output goes to `dist`.

To regenerate media, use Python with Pillow and NumPy plus FFmpeg:
1. Run `scripts/prepare-process-v25.py` for the retained hulling/roast intermediates.
2. Run `scripts/prepare-process-v26.py`. It extracts its Honey reference from the included v25 master if missing.
3. Run `scripts/build-coffee-film.py` to assemble v26. It copies retained hulling/roast intermediates from the v25 output folder.
4. Run `scripts/caption-coffee-film.py` for the standalone linear film.
5. Build the website, then run `python3 scripts/package-website.py 26`.

Media scripts use FFmpeg at `/Applications/Shutter Encoder.app/Contents/app/Library/ffmpeg`; adjust for another machine. The original machine's Python with imaging libraries is `/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3`. Tests use its bundled Playwright import path. Media regeneration is unnecessary merely to run or deploy the completed website.

## Checks and limits
`tests/process-layers-v26.py` verifies decoded start, intermediate and endpoint layers. `tests/cinematic-film.cjs` covers captions, seeking, horizontal layout, three viewport sizes, file URLs and blocked-video fallback. `tests/lifecycle.cjs` covers reduced motion, resizing and cleanup. `tests/release-package.cjs` checks the actual extracted ZIP and catalogue navigation.

Physical mobile hardware is not verified. Footage is illustrative generated/composited media, not documentary evidence of company lots. The standalone film is linear; the website adds the zoom, horizontal layout and vapour. No public deployment or Git push was made.

The sample-request form prepares WhatsApp briefs. Existing policy/admin destinations require separate hosting/backend implementation. Historical media costs and generation decisions remain in the v21–v25 records.
