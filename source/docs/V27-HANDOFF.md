# Stephen Blake — editable handoff
Updated 7 November 2026. Current release: **v27**.

## Current scope and approvals
The user approved the v26 animation, then requested a minimal collection redesign, more tangible mucilage removal, and a cherry falling through Origin and Harvest into Natural. This last request changes the process order to **Natural → Honey → Washed**. Keep these three as alternative routes, shown side by side on desktop and sliding horizontally on mobile. Do not restore the rejected v19 site redesign.

## V27 changes
- Collection: compact section without a full-screen empty hold. The final scroll tail is removed while the earlier animation keeps its original scroll distance. Unused viewport space below the cards is removed from document flow. Three unobstructed photographs, separate editorial captions, fine rules, compact mobile rows and intentional short-landscape sizing. The measured `.sb-card__img` and `.sb-card__body` hooks still drive the film-to-product handoff. Category links and products stay intact.
- Opening: uses the first Natural cherry photograph. Its fall ends on that exact first Natural frame. The estate zoom uses corresponding cherry coordinates, and the film moves to the Natural panel as it falls. The cherry stays intact throughout Origin and Harvest.
- Natural: approved whole-cherry drying and outer husk removal are retained.
- Honey: approved peeling footage is retained, trimmed only to skip its former introductory hold.
- Washed: photographed amber coating is carried down in independently deforming streams over fixed clean parchment-covered seeds. No hue morph or travelling wipe. Incoming water and runoff are retained from the original water clip. This is an illustrative composited material effect, not a fluid simulation or documentary footage.
- Parchment removal, green-to-roast continuity, smoke, grinding and cup footage are retained.

## Editable files
`index.html`: content and collection markup.
`app/origin.css`: collection design and responsive treatment.
`app/origin.js`: caption timings and fallback chapter boundaries.
`app/visuals/journey-film.js`: scroll-to-film timing, horizontal process panels, falling-film position.
`app/visuals/hero-handoff.js`: matching estate and opening cherry geometry.
`app/visuals/macro-photographs.js`: no-video fallback and collection handoff.
`scripts/prepare-wash-v27.py`: reproducible mucilage motion compositor.
`scripts/build-film-v27.py`: exact retained clips, falling introduction, film assembly.
`scripts/caption-coffee-film.py`: standalone film with captions.
`assets/video/masters/v27-production`: retained intermediates and reference frames needed to rebuild v27.

## Run or edit
The ZIP root is the deployable website: open index.html with its assets folder beside it. START-WEBSITE.command runs a local preview on macOS. The source folder is editable; install package dependencies and run npm run build. Built files go to dist. No media regeneration is needed to run the site.

To rebuild media, use Python with NumPy and Pillow, plus FFmpeg: run prepare-wash-v27.py, build-film-v27.py, then caption-coffee-film.py. Update the scripts' FFmpeg path for another machine. The film is 49.1 seconds. The website adds scroll timing, horizontal panels and overlays. Rebuild the website and run python3 scripts/package-website.py 27 for a new ZIP.

## Verification and limits
Collection checks cover desktop, tablet, portrait phones and short landscape. Cinematic checks cover seeking, matching captions, reversing, horizontal layout, file URLs and unavailable-video fallback. Physical iOS/Android hardware has not been tested. Existing forms prepare WhatsApp briefs; this task does not add an email/database backend. No public deployment or Git push is part of this release. See docs/V27-QA.md for the final results.
