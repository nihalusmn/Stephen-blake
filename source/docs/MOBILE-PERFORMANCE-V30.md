# V30 — mobile cinematic engine

7 November 2026. Visual sequence retained: estate/cherry → harvest → Natural → Honey → Washed → parchment removal → green → roast → grind → collection. The approved desktop film is byte-for-byte unchanged. V29 security/enquiry fixes remain.

## Measured comparison

Three identical 12-second forward/reverse scroll runs per build, fresh Chromium pages on this Mac, 390 × 844 CSS pixels, DPR 2, touch emulation, 4× CPU slowdown, local byte-range HTTP server. Table reports medians. The baseline is an untouched saved v29 production build. The same test script and throttling are used for both. Metrics include the processing panels and collection handoff, and the test rejects runs in which the film does not seek or panels do not load.

| Metric | V29 | V30 |
| --- | ---: | ---: |
| Average frame rate | 29.0 FPS | 60.1 FPS |
| 95th percentile frame interval | 33.4 ms | 16.7 ms |
| Long-task blocking during scroll | 422.0 ms | 0.0 ms |
| Main-thread task time | 2755.5 ms | 2515.2 ms |
| Style recalculation time | 777.4 ms | 356.4 ms |
| Layout time | 142.4 ms | 168.6 ms |
| 95th percentile seek completion | 5.4 ms | 1.6 ms |
| JavaScript loaded | 4928.3 KiB | 834.7 KiB |
| JS heap snapshot | 6.4 MiB | 6.0 MiB |

The improved cadence doubles the number of frames processed in the same time. Total layout time is slightly higher; this is not an across-the-board reduction in every metric. Progress error at the 95th percentile decreased from approximately 3.5% to 0.43% of the story in this controlled scroll. That is a synchronization measurement, not physical touchscreen input latency. Seek completion measures browser media events, not display-to-photon latency. Heap snapshots vary with garbage collection and exclude GPU/decoder memory.

The desktop master is 20,018,196 bytes. The phone delivery is 9,349,601 bytes (53.3% smaller), plus approximately 3.3 MiB of short process clips fetched near those chapters. Video geometry falls from 1080 × 1440 to 720 × 960 on phones: 55.6% fewer pixels per decoded frame. At the matched 720 × 960 reference size, FFmpeg SSIM over all 1,179 frames is 0.998375. This validates preservation of the source during delivery encoding; it does not claim new detail or human-perceived perfection.

Raw results: mobile-performance-before.json and mobile-performance-after.json. Browser traces are in performance/v30-before-trace.json.gz and performance/v30-after-trace.json.gz; decompress before importing into DevTools Performance. Benchmark source: tests/mobile-performance.cjs.

## Root causes and implementation

- Lenis was already wired to GSAP; no duplicate scroll library was added. Updated Lenis 1.3.26 → 1.3.27. One GSAP ticker remains the clock; native touch momentum is preserved, and the scene no longer adds a second delayed interpolation on touch. Desktop easing remains.
- Four full-resolution video elements previously prepared the same full film, and the primary player kept seeking under the process panels. Phones now use the smaller master and short route-specific clips. Only visible panels seek; inactive targets are retained for reversible scrolling. Desktop retains the original master. Media remains paused and scroll-driven.
- Photographic fallback layers previously performed 83 image/fragment updates even under a fully opaque film. Those updates now stop while hidden. Invisible Three.js calculations/rendering are bypassed where they are unnecessary, while the fallback and category-art utility remain.
- Embedded macro/process images inflated the JavaScript bundle. Images are now separate cacheable local assets, using paths compatible with the offline ZIP. They remain available to the photographic fallback.
- Hero-image matching now uses a transform instead of resizing the image every frame. Stage measurements are passed to the film, hero and vapour layers when layout changes, avoiding repeated layout reads inside those updates.
- The header measured every dark section on every scroll. A ResizeObserver and ScrollTrigger refresh invalidation now maintain cached bounds, with header updates on the shared ticker.
- Mobile viewport height and scroll distance stay fixed through small toolbar/keyboard-sized resizes. Real width/orientation changes remeasure. gsap.matchMedia owns the phone/tablet/desktop trigger configurations; cleanup removes the contexts, media listeners and players.
- Unified cinematic breakpoints at 768 px, refined tiny-screen progress-label spacing, and removed unnecessary permanent will-change hints from fallback fragments.

## Files changed

app/animations/core.js, app/animations/scroll.js, app/catalogue.js, app/origin.js, app/origin.css, app/visuals/journey-film.js, app/visuals/macro-photographs.js, app/visuals/hero-handoff.js, app/visuals/roast-vapour.js, package.json, pnpm-lock.yaml, assets/video/mobile/*, scripts/prepare-mobile-media.py, scripts/package-website.py, tests/mobile-engine.cjs, tests/mobile-touch.cjs, tests/mobile-performance.cjs, tests/audit.cjs, continuation/delivery documentation and test results. dist is rebuilt from these sources.

## Verification

- 52 main website checks, 19 lifecycle checks, 10 enquiry/security regression checks, and dark/light header contrast checks pass.
- Additional phone/tablet/desktop checks at 320, 390, 768 and 1440 px cover every chapter forwards and backwards, media decoding, no horizontal overflow, collection images, toolbar-sized height changes and orientation changes.
- Native browser touch-input simulation confirms scrolling, Lenis/native position agreement, menu lock/unlock and repeated reduced-motion teardown/restart without duplicate players or triggers.
- Blocked film requests retain the photographic sequence. Reduced motion avoids the cinematic media. No-WebGL fallback remains usable.
- Build passes; dependency audit reports zero known advisories. Existing IIFE/import.meta bundler warnings remain; deployed-build and local-file tests check actual runtime behaviour.
- Tests: mobile-engine-v30.json, mobile-touch-v30.json, test-results.json, lifecycle-results.json, audit-hardening-results.json, header-contrast-results.json, dependency-audit-v30.json.

## Boundaries

These are controlled browser measurements, not tests on physical Android/iOS hardware. No 60 FPS guarantee is made for every device, Safari version, thermal state or network. Real touchscreen input-to-display latency and GPU memory were not measured. Network tests used local assets rather than a slow cellular link. A physical iOS/Android acceptance pass and deployed-host caching/range-response checks remain advisable. V30 has not been pushed or publicly deployed in this task.

## Primary implementation references

- Lenis official integration/options: https://github.com/darkroomengineering/lenis/blob/main/README.md
- GSAP ticker lifecycle: https://gsap.com/docs/v3/GSAP/gsap.ticker/
- ScrollTrigger mobile resize configuration: https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.config()/
