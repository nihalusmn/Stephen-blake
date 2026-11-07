# Stephen Blake — editable handoff
Updated 7 November 2026. Current release: **v29** (security and functional audit; v28 animation preserved).

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

Tests cover the colour seam at multiple scroll positions, animation and captions, reverse seeking, responsive views and the actual extracted ZIP. Physical iOS/Android hardware is not tested. No public deployment or Git push was performed. Enquiries still prepare WhatsApp briefs; no email/database backend is added.
