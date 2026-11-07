# V25 release verification

Verified 6 November 2026.

- Cherry alignment, intact Harvested hold, Honey-only peel, roasting vapour and exact reverse camera position: passed at 1440 × 1000, 390 × 844 and 768 × 1024 (60 sampled states).
- Full film seeking, captions, horizontal process panels, viewport coverage and collection handoff: passed at all three sizes (42 sampled states).
- Direct file opening and blocked-video photographic fallback: passed.
- Reduced motion, resize, keyboard scrolling, repeated cleanup/reinitialization, no duplicate players/triggers and no-WebGL catalogue fallback: 19 checks passed, no browser errors.
- Green/roast silhouette overlap: 98.61%; texture correlation: 99.42%. Both use the same cleaned source matte, including rounded source-frame edges.
- The 45.46-second captioned MP4 opens and has a valid final container.
- The actual ZIP was extracted to a separate folder; every deployed file matched the build by SHA-256. Its animation, three process players, photographic collection handoff, FAQ and green-coffee catalogue navigation passed at 1440 and 390 pixels wide using file URLs.
- Final packaging includes refreshed QA documents; deployed files are unchanged from the tested extraction.

Automated checks use installed Chrome with emulated viewport sizes. Physical iOS/Android devices were not tested. Existing enquiry/backend and hosting limits are described in FINAL-DELIVERY.md.
