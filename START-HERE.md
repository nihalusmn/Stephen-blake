## Cleaned V32 delivery
The runtime assets are now limited to those used by the current website. Old films, photo variants, editing originals and review screenshots are excluded. Both device-specific chapter sets and all recovery frames remain. The root index.html is the ready-to-open website; source/ contains the editable project and the same required assets.

## Final photo correction
The owner rejected the separate logo badge. The website now uses cleaned bean photographs with the original tray branding restored from the supplied photographs, without a separate logo overlay. Active image names include `v32-original-logo`. The shared-image policy remains unchanged. Do not rerun `apply-exact-photo-logo.cjs`; it is superseded by `restore-photo-branding.cjs`.

# Stephen Blake — v32 candidate

Open `index.html` with the adjacent `assets` directory, or use `START-WEBSITE.command` on macOS. The editable project is under `source/` in the complete ZIP.

## What changed

- The collection uses the owner's green-bean tray photograph, with cleaner bean surfaces.
- Five labelled samples were retouched and assigned from their printed labels. Duplicate photographs of the same samples were not presented as different products.
- The five supplied sample photographs are used only for their matching grades. At the owner’s final request, all other grades share the same green-coffee tray photograph, labelled as a general reference. Generated grade variations are excluded from the browser build. Final lot specification still requires a representative sample.
- Robusta Cherry has a yellowish straw/ochre/light yellow-brown palette; washed Arabica retains grey-green tones.
- Grade photographs remain fully visible rather than being cropped out of the mobile dialogue.
- Desktop now uses short, seekable 960×1280 chapters. Its first clip is about 217 KB, instead of requesting the approximately 19 MB full movie. Main and process panels retain their chapter decoders for reverse scrolling. The phone chapters, choreography, descriptions and timing are unchanged.

## Validation and boundaries

See the V32 JSON reports for actual browser checks. The checks include displayed-frame comparisons, reverse scrolling, rotation, blocked/delayed media, foreground resume, reduced motion, and the final collection. The desktop slow-network check uses a cold cache, a 1440px Retina viewport, 200 ms latency, approximately 1.44 Mbps throughput and 4× CPU throttling.

The user accepted v31 RC3 on both physical phones and reported pushing it to GitHub. Production was verified as v31 RC3, script index-u7ko3sv0.js, at the start of this work. The later Mac lag report led to the desktop chapter delivery change above.

This v32 candidate has not been pushed or publicly deployed by this task. Browser automation is not a new physical-device acceptance claim. Enquiry actions continue to prepare WhatsApp briefs; no email or database service has been added.

## Continue editing

- `app/green-photography.js`: grade-to-image mapping and captions.
- `docs/V32-PHOTO-SOURCES.md`: exact source photos and generation distinction.
- `assets/photography/retouched-source/`: editable master PNGs, excluded from the browser build.
- `scripts/export-green-photography.cjs`: responsive WebP exports (requires Sharp; update its local package path on another computer).
- `app/visuals/journey-film.js`: one film timeline shared by both layouts.
- `scripts/prepare-chapter-media.py --desktop`: rebuild desktop chapter files from the approved master; no need to regenerate to run the site.

Run `npm install`, then `npm run build`. For a complete editable archive run `python3 scripts/package-website.py 32 --candidate`.
