# V32 performance integration — 14 November 2026

Approved by the owner for integration into V32 and a push to GitHub main.

The V32 folder's editable animation application was compared with GitHub production commit `44592a5`: all existing application files matched. The tested performance candidate `7e8e16f` therefore integrates directly into that same V32 implementation. This is not a replacement animation or a different desktop version.

A fresh production build reproduced the tested root HTML and all 270 deployed assets byte-for-byte. All 18 mobile/desktop chapter videos remain byte-identical to the previous release. Desktop chapter selection, frame timing, camera geometry, scroll behaviour and the product collection are preserved. The existing SEO and Analytics configuration is retained. The separate pending SEO metadata commit `3a3c983` remains untouched and is not part of this release.

The detailed verification record is `PERFORMANCE-REVIEW.md`, with measurements under `performance-v32/`. Its statement that publication was awaiting approval describes the state at the time of that review; the owner has now authorized this integration and GitHub push.

Chrome and WebKit were tested on the available Mac. No new physical Windows, iPhone or Android acceptance test is claimed. Existing V32 desktop media are preserved, but operating-system-specific behaviour cannot be guaranteed from emulation.
