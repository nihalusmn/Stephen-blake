# Stephen Blake — editable handoff
Updated 10 November 2026. **V31 RC3 under test after RC1 and RC2 failed physical phones; production remains v30.**

Start with [docs/V31-RELEASE-CANDIDATE.md](docs/V31-RELEASE-CANDIDATE.md). The user requires physical iPhone/Samsung acceptance before GitHub push. Do not mistake browser emulation for that gate. The new single DOM/video timeline preserves the approved film and removes the WebGL/optional-photo startup dependency. Recovery frames are in assets/video/recovery-v31. Build and automated test results are in the v31 documents.

## Latest: RC3

RC2 also failed physical acceptance: fast scrolling still broke/jolted on both phones, and the laptop showed a dark vignette. RC3 removes that overlay, retains chapter decoders instead of resetting them on chapter changes, captures completed seek frames before scheduling the next seek, and gives phones desktop-equivalent scroll space. It also updates process copy from primary references and fixes landscape caption overflow. Tests now count actual changed pixel hashes during rapid reversals. See the release candidate report for measured results and limits. DO NOT PUSH until both physical phones accept RC3.

## Earlier mobile failure follow-up

Read `docs/V31-RELEASE-CANDIDATE.md`. RC1's 86-per-browser checks did not catch continuous-scroll frame starvation. The user's Android diagnostic confirmed the canvas stayed on a harvest frame while captions advanced. RC2 removes strict near-target frame rejection, coalesces recovery requests, embeds lightweight chapter covers and uses small phone chapter videos instead of the full master. Current reports use the `V31-rc2-` prefix; do not present older RC1 results as current acceptance.

Physical iPhone Safari and Samsung acceptance is still REQUIRED before pushing. Diagnostic preview uses the running local server on port 4191; the regular preview is port 4175. Ephemeral tunnel logs/tokens are under `output/v31/`, never ship them. No GitHub push for v31 has been made.

## Historical release notes

## V30 mobile engine
See docs/MOBILE-PERFORMANCE-V30.md for measured comparisons, implementation notes and testing limits.
- Lenis 1.3.27 and GSAP share the ticker; touch uses native scrolling without additional scene lag.
- Stable mobile stage geometry and cached scroll distances avoid toolbar-sized resize jumps; width/orientation changes still relayout.
- Phone film is 720×960, with short Natural/Honey/Washed clips. The unchanged desktop film remains 1080×1440. Clips preload near their chapter; hidden players are not continually scrubbed.
- Macro stills are separate cacheable assets. Their hidden layers and invisible 3D fallback stop doing unnecessary per-frame work.
- Header section bounds are measured on layout changes rather than on every scroll event. Hero scaling uses transforms.
- Rebuild mobile media with scripts/prepare-mobile-media.py (FFmpeg required). Do not regenerate media just to run the site.
- Production index.html + assets are in dist. Build with npm run build after installing packages, then package with python3 scripts/package-website.py 30. The macOS launcher is optional; the complete extracted ZIP can also open directly.
- Browser performance traces and JSON results are under docs/performance and docs/mobile-*. The tests use local Chromium/touch emulation, not physical phones.

## V29 audit fixes
See docs/WEBSITE-AUDIT-2026-11-07.md for findings, checks and boundaries.
- Patched Vite to 8.3.3 and source-map-js to 1.2.2; registry audit now reports zero known advisories.
- Enquiry messages retain notes, phone and enquiry type; invalid quantities are rejected with visible errors. Prepared links are invalidated when the buyer changes the brief.
- Product selection clears stale grade/origin/process; the wizard cancels queued auto-advance on manual navigation.
- Product controls retain keyboard focus; browser Back restores the correct section.
- Removed dead policy/admin links instead of inventing legal policies or a backend.
- Preview serves only index.html and assets, blocks directory listings/unexpected hosts, and retains byte-range support.
- Fixed header contrast over dark sections. Animation scripts and the v28 media are unchanged. The film filename intentionally stays v28 in the v29 website.

## V28 corrections
The compact collection and Natural → Honey → Washed choreography are unchanged.
- `app/origin.css`: the How It Works section has a full-width opaque paper background, so the compact animation stage cannot show through and create a colour seam through its text.
- `scripts/clean-film-edges-v28.py`: cleans the exterior matte of the falling cherry, whole/drying Natural cherry and settled green/roasting bean. The interior photographic detail is retained. The method smooths compression notches and insets/antialiases the cutout perimeter. Honey peeling, wash-off motion and later sequence timing are retained.
- `assets/video/coffee-journey-v28.mp4`: 1080×1440 delivery, 49.1 seconds. This resolution is an upscale of the existing source, not new photographic detail.
- `app/visuals/journey-film.js` and `hero-handoff.js`: reference the v28 film/poster; choreography coordinates and scroll timing stay unchanged.

## Run or continue
Open index.html in the extracted ZIP with assets beside it, or use START-WEBSITE.command on macOS. Editable project is in source. Install its package dependencies and run npm run build. Media regeneration is unnecessary to run the website.

The v27 history and full choreography notes are in docs/V27-HANDOFF.md. To rebuild v28, run scripts/clean-film-edges-v28.py against the included v27 master, then scripts/caption-coffee-film.py, build the website and run python3 scripts/package-website.py 28. Media scripts require Pillow, NumPy and FFmpeg; adjust the recorded FFmpeg path for another computer.

Tests cover the colour seam at multiple scroll positions, animation and captions, reverse seeking, responsive views and the actual extracted ZIP. Physical iOS/Android hardware is not tested. V29 was pushed to GitHub main as d0f0e14. V30 has not been pushed or publicly deployed in this task. Enquiries still prepare WhatsApp briefs; no email/database backend is added.
