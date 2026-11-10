# V31 release candidate — 10 November 2026

Status: **RC3 automated checks passed; physical acceptance pending. RC1 and RC2 failed physical-device acceptance. Production remains v30. Do not publish yet.** Historical automated passes below do not override the user's phone failures.

## RC3: rapid scrolling, background and copy

- Removed the estate's dark vignette from the light film. The user's laptop screenshot exposed the scrim surrounding the movie. Background screen pixels are now checked at portrait, narrow-laptop and desktop sizes.
- Chapter video elements are retained and reused. RC2 reset the single main decoder every time the user crossed a chapter boundary, including in reverse. RC3 retains chapter buffers and prepares the next clip's metadata early. Cleanup releases all players; the mobile pool is bounded by the finite chapter list.
- A completed seek now gets a presentation opportunity before the next seek begins. `requestVideoFrameCallback` uses its actual media time; paused decoders have a two-paint fallback. A resolved gesture-play promise pauses the player it actually started, even if the active chapter changed.
- Phones use the same relative scroll length as desktop, avoiding the prior compressed 3.6-screen journey. The approved film and Natural → Honey → Washed order remain unchanged.
- Rewrote the processing descriptions in the animation, processing overview and enquiry options using primary technical references. See `PROCESS-DESCRIPTION-SOURCES.md`. In phone landscape, process captions sit beside the specimen so they do not run across the rail or offscreen.
- The non-canvas fallback now hides its retained still when the real video is presented.

### RC3 evidence

Both full browser suites passed 86 frame/presentation checks. The rapid-scroll test warmed the media once, then swept forward/back four times with 30 ms waits. It measured changing **canvas pixels**, not just reported timestamps: 190/200 changes at 390px, 182/200 at 758px and 180/200 at 1440px. No decoder reloads occurred during these warm reversals. These are desktop-browser measurements, not a claim of equivalent physical-phone performance. Geometry/recovery checks were repeated after the final responsive adjustments.

Reports: `V31-rc3-chromium.json`, `V31-rc3-webkit.json`, `V31-rc3-rapid.json`, `V31-rc3-layout-webkit.json`. The final-layout cold-cellular run passed 100 forward/reverse samples with the correct chapter pixels and collection. The RC3 ZIP also passed the extracted file:// preview check. Physical fast-scroll, rotation and foreground-return acceptance is still required on iPhone Safari and Samsung.

## RC2: fixes prompted by physical-phone failure

- The frame presenter previously required a decoded frame to be within 0.13 seconds of a moving scroll target. Continuous scrolling on a slow decoder could reject every completed frame. It now accepts useful progress within the correct chapter, retaining that picture while seeking the latest target.
- Recovery requests are coalesced to one in-flight image per surface. In-flight cache entries cannot be evicted and downloaded repeatedly; image failures have a timeout. Late images cannot overwrite a nearer frame or a different chapter.
- Metadata-first video startup replaces eager whole-movie loading. Phone delivery uses nine chapter clips; the opening is 157,248 bytes rather than a roughly 9 MB master. Abandoned chapter transfers are released, with the displayed canvas retained. See `docs/V31-chapter-media.json` and `scripts/prepare-chapter-media.py`.
- Nine small, embedded covers (28.6 KB of source JSON) are exact chapter-start pictures from the approved film. They provide immediate chapter-appropriate loading imagery without a network dependency. They are lower-resolution temporary covers, replaced by the full-resolution video/recovery frames. This is not a claim of full-rate motion on an arbitrarily slow connection.
- Unused opening-image preloads and an invisible hills image no longer compete with the film. Collection photographs have low download priority; the below-fold catalogue artwork is lazy-loaded.
- A bounded diagnostic server captures animation state only. It is not part of the production website and does not record form contents. Raw phone diagnostics are local under `output/v31/`, excluded from the ZIP and publishing checkout.
- `tests/v31-slow-network.cjs` now tests uninterrupted forward AND reverse scrolling at 1.44 Mbps, 200 ms network latency and 4× CPU throttling. It checks actual nonblank canvas pixels, chapter identity, frame advancement and the final collection. This catches a gap in the earlier tests, which mostly waited for each stage to settle.

## Fixes

- One `film-only-journey.js` timeline now runs on every device. Production no longer imports `origin.js`, Three.js or the alternative macro animation. GPU failure and Data Saver do not disable it. Reduced motion still deliberately skips cinematic media.
- Each paused video has an independent presentation buffer. Reloads and seeks cannot erase the current decoded picture. When a decoder is unavailable, sparse recovery frames extracted from the same approved film follow the scroll position. This fallback is 4 frames per second, not a claim of full-rate video when video playback is blocked.
- No optional photograph gates movie initialization. Per-source metadata, seek, progress, error and resume handling is explicit. There are bounded retries and an accessible Retry motion control after persistent failure. Loading does not depend on a non-empty initial seekable range or a full-film Blob fetch.
- A real user gesture can prime a muted decoder if its browser requires it; the movie is immediately paused and remains scroll-driven.
- `media-policy.js` is the shared phone/desktop rule. Coarse-pointer phones retain mobile clips in landscape. Panel geometry, hero geometry and heat vapour use the same rule. Rotation preserves story progress.
- The pinned scaffold is established before viewport measurements, avoiding a WebKit cold-load race that could calculate an oversized track. Resize detection compares viewport width to viewport width, rather than to the narrower stage width when a scrollbar is present.
- Actual-film frames remain visible through delayed panel loads and reversed scrolling. Process panels keep the approved Natural → Honey → Washed lateral sequence.
- External font CSS is loaded without blocking startup; a delayed-font regression verifies that the timeline initializes before the font response. Font completion triggers a layout refresh.
- Production CSS now loads as a stylesheet in the document head instead of being injected by JavaScript. This prevents the initial unstyled mobile layout from expanding the viewport. Browser-native smooth scrolling is disabled while Lenis/the story controller owns scrolling, preventing interrupted early-scroll transitions.
- The final catalogue images, navigation, accessible reduced-motion teardown and restart remain functional.

## Files

Production changes: `app/visuals/journey.js`, `film-only-journey.js`, `journey-film.js`, `scrub-surface.js`, `recovery-frames.js`, `media-policy.js`, `hero-handoff.js`, `roast-vapour.js`, `app/origin.css`, `app/motion.css`, `index.html`, `vite.config.js`.

Recovery pictures: `assets/video/recovery-v31/` (197 JPEG frames, about 6.1 MB total, requested as needed; bounded decoded-image cache). Reproduce them with `python3 scripts/prepare-recovery-frames.py`. Do not regenerate the master film to build the site.

Production JavaScript is approximately 222 KB (about 90 KB gzip) plus a 61 KB stylesheet, versus approximately 855 KB of JavaScript in v30. This is a transfer-size comparison, not a physical-phone FPS claim.

## Evidence and tests

RC2 passed 86 frame/presentation checks in each of Chrome and WebKit. Continuous cold-cellular runs passed 100 forward/reverse samples with video and another 100 with all video requests blocked. The temporary loading covers are excluded from full-resolution frame acceptance assertions. The wider site passed 52 checks, and the actual extracted RC2 ZIP passed harvest, all three processes, roasting and collection checks through file://.

- `tests/v31-reliability.cjs`: Chrome/WebKit test matrix, actual canvas-pixel comparisons against approved movie frames, screen-pixel visibility checks, collection photos/navigation, reverse scrolling, cold landscape, rotation continuity, missing optional still, WebGL denial/context loss, Data Saver, blocked movies, delayed panels, metadata-only startup, delayed seeks, transient failures, foreground/online recovery and reduced motion.
- `docs/V31-rc2-chromium.json` and `docs/V31-rc2-webkit.json`: RC2 results; only `status: passed` is acceptance. A partial report or a diagnostic capture is not a pass.
- `tests/audit.cjs` and `tests/audit-hardening.cjs`: wider website and hostile-input/validation regression checks. The previous test that accepted a static page after GPU failure now requires the approved film to remain available.
- `docs/V31-dependency-advisories.json`: npm advisory response for the 19 installed package names on this machine; no advisories returned. This is not a guarantee against unknown vulnerabilities or an audit of hosting-account access.
- `docs/V31-preview-host-checks.json`: public candidate release identifier, exact media range support, recovery images and blocked source/config URLs.

The WebKit tests run on macOS, not on a physical iPhone. Visibility events are simulated in the automated suite. Physical browser policies, actual app switching, Low Power Mode and cellular loading must be checked on the user's devices before release.

## Candidate preview

https://deals-closed-injured-gary.trycloudflare.com/?version=31-rc3

The proxy applies standard email obfuscation to contact addresses; the application JavaScript and CSS were checked byte-for-byte against the local build. Video ranges return HTTP 206 and source/config paths return 404.

## Required phone acceptance

Use a new Private/Incognito tab with Wi-Fi off to avoid a warm browser cache. Open the candidate link directly in Safari on the iPhone, and directly in the browser used on the Samsung S23.

1. Start scrolling soon after the homepage appears. The branch/cherry should enter the same approved film.
2. Scroll forwards and backwards across Natural, Honey and Washed. No blank panel or old 3D animation should appear.
3. Continue through parchment removal, green beans, roasting, grinding and the collection. Open a collection product.
4. Rotate while viewing Washed or roasting. The same stage should remain selected.
5. Switch to another app for 20 seconds and return. Continue scrolling in both directions.
6. Repeat with the phone's power/data saving settings enabled where available. Report the phone, OS/browser version and any failing stage. If Reduce Motion is enabled, the intentionally static accessible page is expected.

The temporary Cloudflare preview requires the Mac and its preview/tunnel processes to remain running. It is not the production site. If the tunnel expires, recreate it; do not use the old v30 production URL as the candidate test.

## Release gate

Do not push this candidate to production until both physical-phone tests pass. User has explicitly made this a release condition. After any required correction, rerun the affected assertions, rebuild, push the approved revision to `git@github.com:nihalusmn/Stephen-blake.git`, and verify the new build and range responses on both public domains. No push has been made for v31 yet.
