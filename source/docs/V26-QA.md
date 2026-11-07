# V26 release checks — 6 November 2026

- Honey peeling, hulling, green/roast, grinding and cup source clips: identical SHA-256 hashes to v25. See V26-PRESERVED-CLIPS.json.
- Decoded Washed film starts with the actual Honey endpoint, reveals the clean surface progressively, and ends on the distinct solid-seed photograph. Texture correlation with the original gel is 0.50, confirming this is not merely a colour shift. See V26-LAYER-CHECKS.json.
- Decoded Natural film visibly removes the dry fruit husk and ends with zero remaining husk pixels outside the parchment seed pair. No black matte rectangles remain around the moving husk.
- Full film/caption/forward-and-reverse seeking checks passed at 1440 × 1000, 390 × 844 and 768 × 1024. Horizontal panels remain side by side at desktop sizes and slide sideways on mobile.
- File opening and blocked-video photographic fallback passed.
- All 19 lifecycle checks passed, including reduced motion, resize, keyboard scroll, repeated cleanup/reinitialization and catalogue fallback, with no browser errors.
- The actual ZIP was extracted separately; every website file matched the build by SHA-256. Animation, three process players, endpoint hold, photographic collection handoff, FAQ and catalogue navigation passed from extracted file URLs at 1440 and 390 pixels wide.
- The standalone captioned MP4 has a valid 48.96-second container.

The final ZIP was repackaged to include refreshed QA/handoff documents; its deployed website files were verified unchanged from the tested extraction. Physical iOS/Android devices were not tested.
