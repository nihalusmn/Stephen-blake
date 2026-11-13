# Stephen Blake — mobile performance review

Prepared 14 November 2026 (Asia/Kolkata). Branch: `codex/mobile-performance-v32`.

**Candidate ready for review. Nothing has been pushed or deployed.** This is a performance change, not a redesign. All 18 chapter video files, timeline cues, camera geometry, captions, catalogue behaviour and enquiry implementation remain unchanged.

## Production and scope

Verified production and GitHub main: `44592a56f85c1bd9b091f05708fc38183899aba1`. The live homepage SHA-256 was `c9afc32f501017ac860d9aca31f5b0a204ce800015bfc7b76508b7522646a1c2`, both before work and at the final production recheck. The prepared SEO commit `3a3c98376f1081119f8937dbd94fda31efbc0bd9` is still separate and was not deployed or modified. This branch starts from verified production; it neither includes nor reverts that pending SEO work. Coordinate that merge before publishing either branch.

Root `index.html` and `assets/` are the deployment output. Editable code is in `source/`. The rebuilt root was compared byte-for-byte with `source/dist` (270 asset files). Sitemap, robots, redirects, canonical, indexing tags and Google Analytics are unchanged.

## Results: five cold runs per profile, before and after

These are **matched local lab results**, not live Vercel measurements or real-user field data. Baseline was an immutable copy of deployed production. Both builds used the same local server, gzip text compression, byte-range media delivery and Chrome installation. Each Lighthouse run launched a fresh browser; runs were sequential. Lighthouse 13.6.0, Chrome 157, default simulated mobile and desktop presets. Mobile: 412×823, DPR 1.75, 4× CPU slowdown, 1,638.4 Kbps nominal simulated throughput / 150 ms RTT. External fonts were part of the original baseline delivery.

| Metric, median (range) | Baseline mobile | Candidate mobile | Baseline desktop | Candidate desktop |
| --- | --- | --- | --- | --- |
| Performance score | 76 (75–76) | **100 (100–100)** | 95 (95–96) | **100 (100–100)** |
| LCP | 7.581 s (6.906–8.329) | **1.421 s (1.419–1.422)** | 1.525 s (1.347–1.526) | **0.340 s (0.340–0.341)** |
| TBT | 14 ms (11–57) | 8.5 ms (7–9) | 0 ms | 0 ms |
| CLS | 0.0322 | **0** | 0.000078 | 0.000078 |
| Speed Index | 1.906 s | 1.868 s | 0.529 s | 0.550 s |
| Initial transfer | 1,953,273 bytes | 1,621,856 bytes | 2,012,968 bytes | 1,681,551 bytes |

The desktop Speed Index difference is a small regression of about 22 ms; it is not concealed by the score improvement. Initial transfer fell by approximately 331 KB in the median Lighthouse run. Baseline transfer varied because the browser occasionally fetched the below-fold roaster photograph during initialization.

### Important: LCP is not full-background readiness

A separate **applied-throttling** diagnostic (390×844, DPR 3, 200 KB/s, 150 ms latency, 4× CPU) measured the estate image's actual load event at **7.272 s before / 5.462 s after**: about **25% faster**, in one paired diagnostic run. This is not a five-run median. The opening decoder reached `loadeddata` at 4.926 s / 4.390 s in those traces.

The candidate's LCP is the visible headline. Chrome excludes the full-viewport background from LCP in these runs. Therefore the 1.42-second Lighthouse LCP **must not be presented as “the entire hero photograph loads in 1.42 seconds.”** Full photograph readiness on the constrained connection remains above 2.5 seconds. The visible improvement is smaller than the LCP reduction.

## Root causes and evidence

1. **An invisible decoder was incorrectly participating in Chrome's LCP result.** The baseline observer recorded a video candidate at 5.036 s even while its computed opacity was 0, its visibility was hidden, and its parent had opacity 0 / visibility hidden. Lighthouse also selected `video.sb-frame-decoder`. The visible film already uses a retained canvas; the video element is only its decoder. Decoder-only elements now have no display box. Actual scene canvases, hero images and text remain visible on their existing timelines. The direct-video fallback explicitly restores display when a 2D canvas is unavailable. This corrects the internal layer contract; the headline score improvement alone is not evidence of faster visible photography.
2. **Bandwidth competition delayed the estate image.** Initially, three collection photographs, three future-process recovery frames, the opening recovery image, a handoff poster, fonts, JavaScript and the opening video shared the connection. Later videos were already chapter-based and deferred; there was no initial full-film download. The three future-process recovery images now request near their existing preparation boundaries instead of at startup. Recovery on direct or reverse entry still requests the correct frame immediately.
3. **Font delivery introduced a separate cross-origin stylesheet/font chain and a small font-swap layout shift.** The exact original Archivo and Fraunces WOFF2 files are now local, with the same weights, styles, unicode ranges and `font-display: swap`. Original OFL licences are included. Candidate mobile CLS is zero; fonts and all matched scene typography were verified.
4. **The estate photograph was relatively expensive.** The new AVIF alternatives retain the original dimensions and composition, including the cherry anchor. The 1680-pixel image is 260,418 bytes versus the original WebP's 516,132 bytes. The 960-pixel alternative is 128,595 bytes. Original WebP images remain as browser fallbacks. No lower resolution or new generated image was substituted.
5. **JavaScript was secondary.** The applied-throttling baseline recorded two long tasks of 82 and 56 ms; the candidate recorded one of 79 ms. The original five-run mobile median TBT was only 14 ms. Delaying important controls or rebuilding the engine was not justified by this evidence.

Raw startup observers, resource timings, long-task records and Lighthouse traces are retained under `output/performance/`. Compact reproducible results are in `source/docs/performance-v32/`.

## Isolated experiments

Each behavioural experiment used two exploratory cold mobile runs; these are attribution checks, not final five-run acceptance samples. Full distributions are in the accompanying JSON files.

- **A — Future-process recovery priority:** deferred only Natural/Honey/Washed recovery prefetch until near the existing chapter preparation window. Scores 80/77; LCP 5.329/6.455 s. Retained. Opening media and all failure paths remain available.
- **B — First-frame presentation:** decoder display boxes removed; retained canvas and existing image presentation unchanged; direct-video fallback explicitly supported. Scores 81/81; LCP 5.032/5.031 s. Retained after Chrome and WebKit pixel/recovery checks. This is partly a measurement correction, not a comparable reduction in time to visible background.
- **C — Encoding:** inspected all 18 chapter files. H.264, yuv420p, 24 fps, six-frame GOP (250 ms), no B-frames, `moov` before `mdat`; mobile 720×960 and desktop 960×1280. The mobile opening is only 157,248 bytes / 1.625 s. No evidence justified replacing this seek-friendly encoding. No chapter video was re-encoded.
- **D — Initialization order:** tested establishing the journey before reveal measurements. Scores 75/78; transfer and LCP variability persisted. No consistent benefit; discarded. Catalogue, navigation and initialization order are unchanged.
- **E — Image delivery:** same-resolution AVIF with WebP fallback. Scores 83/81; LCP 4.656/5.105 s. Retained after visual comparison. RGB SSIM against decoded original at 1680 pixels: 0.971917. No crop or resolution change; scene screenshots are more informative than this single quality metric.
- **Font delivery:** independently tested local copies of the existing fonts. Scores 75/75 while the old invisible decoder still dominated LCP; mobile CLS improved to zero. Retained in the combined candidate.

An intermediate combined build exposed an asset-packaging bug: CSS referenced removed hashed font filenames. Those incomplete benchmark runs were **rejected**, not reported as final results. The build now rewrites relative CSS URLs before deduplication. All final CSS URLs and browser requests passed validation.

## Visual and functional validation

- **22 paired screenshots:** phone and desktop at hero, zoom handoff, origin, harvest, Natural, Honey, Washed, hulling, roasting, grinding and collection. All 18 film/collection comparisons were pixel-identical. Four hero/zoom comparisons had mean absolute RGB error 1.69–2.58 on a 0–255 scale due to AVIF compression; composition and text were unchanged. Reviewed the resulting hero image and screenshots visually.
- **52 website assertions passed:** catalogues, filters, empty states, product dialogs, scroll locks, enquiry validation and preparation, WhatsApp link content, anchors, Back/Forward, deep links, focus/menu behaviour, 360/390/820 layouts, reduced motion, image loads and absence of console/network errors.
- **86 displayed-frame assertions in Chromium and 86 in WebKit passed.** Healthy, blocked videos, delayed panel, transient media failure, metadata-only/events, slow seeks, optional poster failure, Data Saver/WebGL independence, landscape, desktop, reverse scroll, rotation, context-loss independence, foreground resume, collection and reduced-motion restart.
- **Rapid scroll:** 600 samples across 390, 758 and 1440 pixels. Retained chapter decoders were not reloaded on warm reversal; redraw and final-frame settling assertions passed.
- **Slow delivery:** 100 continuous forward/reverse samples with CPU throttling, 200 ms latency and 180 KB/s delivery, plus another 100 with all videos blocked. Correct chapter/visible pixels and final collection assertions passed. This is network emulation, not physical cellular testing.
- **Warm reload and no-canvas fallback:** passed in Chromium and WebKit. Direct-video presentation remains visible when canvas creation fails.
- **GA4:** actual tag loaded against a locally routed production-origin document; collection requests were intercepted. Exactly one initial `page_view` and one measurement-ID configuration. Synthetic enquiry preparation and intercepted WhatsApp action did not put buyer/company/email values in observed analytics requests. No message was sent.
- **SEO/delivery:** 17 preservation checks passed; sitemap HTTP 200 and one canonical URL; robots and Vercel rules unchanged; metadata/GA source unchanged; media Range request returned 206 with the requested bytes.
- **Build:** Vite build passed, runtime media inventory complete, generated CSS references resolved, root deployment assets equal the tested build, `git diff --check` passed. Existing Vite `inlineDynamicImports` warning remains informational; no dependency upgrades were made.

Obsolete v30 WebGL-engine expectations were not used to assess this film-only engine. Existing rapid/network test URLs were made configurable so they exercise the candidate, not an unrelated server. The original delayed-Google-font test was updated to intercept local WOFF2 files as well. Targeted delayed/failed-local-font runs passed in both Chromium and WebKit, including animation startup before the delayed fonts returned.

## Changed files

- `source/app/visuals/journey-film.js`: defer three optional recovery prefetches; all chapter definitions/cues retained.
- `source/app/visuals/scrub-surface.js`: explicit decoder-only display state and direct-video fallback restoration.
- `source/index.html`, `source/app/fonts.css`, `source/assets/fonts/*`: same local fonts and licenses; AVIF `<picture>` alternative.
- `source/assets/photography/hero-estate-{960,1680}.avif`: optimized same-resolution derivatives; originals retained.
- `source/scripts/audit-runtime-media.py`, `source/app/runtime-media.json`: include new formats/fonts/licences in the allowlist.
- `source/vite.config.js`: deduplicate new asset formats and correctly rewrite relative CSS URLs.
- `source/tests/performance/*`, three updated existing regression tests, and this report/results.
- Root `index.html` / `assets/`: generated deployment output only.

## Limitations and release recommendation

- **No physical iPhone or Android device was operated for this candidate.** WebKit and Chrome emulation do not replace physical acceptance, especially for paused decoding with no display box. Before release, test cold cellular forward/reverse scroll, rotation and app switching on the user's iPhone Safari and Samsung Chrome.
- **Field INP has not been measured.** Lab TBT is not INP. No real-user 75th-percentile Core Web Vitals claim is made.
- The full estate background remains 5.46 s in the illustrative constrained-network trace. Further gains would require changing the loading schedule for collection imagery, non-hero fonts or opening preparation. That deserves a separate validation pass rather than sacrificing first-scroll readiness or image quality merely for a score.
- Recheck live CDN caching, compression, media range delivery and five-run performance after any approved deployment. Local scores exclude production GA/network/CDN overhead; do not promise a live score of 100.
- Production is unchanged. Obtain explicit approval before pushing main or deploying. Reconcile the pending SEO branch without dropping its metadata/structured data.

## Reproduction

Run commands from the performance repository unless a source working directory is specified. Tests require local Chrome, the existing Codex Playwright runtime, and Lighthouse 13.6.0 (`SB_LH_CLI` can override its path).

1. `pnpm --dir source install --frozen-lockfile --ignore-scripts`
2. `pnpm --dir source build`
3. Copy `serve-website.py` into the local `source/dist` test directory, then `python3 source/tests/performance/serve.py source/dist 4197`.
4. `node source/tests/performance/lighthouse-batch.cjs candidate http://127.0.0.1:4197/ 5`
5. From `source/`: run `tests/audit.cjs`, `tests/v31-reliability.cjs`, `tests/v31-rapid-scroll.cjs`, and `tests/v32-desktop-network.cjs` with `SB_URL=http://127.0.0.1:4197/`; use `SB_ENGINE=webkit` for the WebKit reliability run, `SB_BLOCK_VIDEO=1` for blocked-video network coverage, and `SB_REPORT` to retain independent reports.
6. `node source/tests/performance/analytics.cjs`, `node source/tests/performance/warm-and-fallback.cjs`, and `python3 source/tests/performance/seo-preservation.py`.

Browser LCP interpretation references: [Chrome/web.dev LCP documentation](https://web.dev/articles/lcp), [Chrome LCP breakdown](https://developer.chrome.com/docs/performance/insights/lcp-breakdown). These explain the distinction between eligible visible content, video first-frame timing, full-viewport backgrounds and resource/render delays; the observations above come from this site's saved traces.
