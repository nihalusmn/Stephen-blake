# Stephen Blake v30 — mobile animation reliability audit

Audit date: 9 November 2026 UTC. Scope: missing, incorrect, or blank animation on mobile; startup dependencies, media loading, recovery, asset delivery, and the unfinished local recovery draft.

## Result

**The reported symptoms have reproducible code-level explanations. V30 can suppress the journey, destroy it after GPU loss, display an older animation after an unrelated image failure, or hide the current picture before a process video is ready. These are release-blocking reliability defects.**

Both Chromium and WebKit reproduced the missing-animation and wrong-animation paths against the **live, unchanged v30 deployment**. This is stronger evidence than the earlier local fast-network checks. It does not establish which trigger occurred on each of the user's physical phones; no device logs or physical-device sessions were available.

This is an audit, not a declaration that every phone is fixed. No GitHub push or production deployment was made during this audit. The existing local recovery draft is not release-ready.

## Version and evidence

- Published source revision: `a0e1e4ec38ac2a198a8b1fedde66c6eaca4ce90c`.
- Both `https://stephen-blake.vercel.app/` and `https://www.stephenblake.co.in/` served `assets/index-Dw34wudm.js`, with matching HTML ETags.
- Baseline code references below refer to that revision's `source/` folder, not the currently edited workspace.
- `V30-FAILURE-REPRODUCTIONS.json`: live Chromium fault injection results.
- `V30-WEBKIT-REPRODUCTIONS.json`: same cases in Playwright WebKit 26.5 on macOS with a 390 × 844 touch viewport.
- `V30-LIFECYCLE-REPRODUCTIONS.json`: native scrolling, context loss, withheld media events, and landscape startup in both engines.
- `V30-HOST-CHECKS.json`: direct response headers and byte-range checks on both public domains.
- Reproducible scripts: `tests/v30-failure-audit.cjs` and `tests/v30-lifecycle-audit.cjs`. `SB_URL` selects a candidate build; `SB_REPORT` selects a separate output file. The first script accepts `SB_ENGINE=webkit`. These are diagnostic captures; inspect the media state, not just the process exit code.

## Confirmed defects

### 1. Video startup unnecessarily depends on WebGL2 — high severity

Source: `source/app/origin.js:142–177`, `source/app/visuals/journey.js:21`.

The application allocates a WebGL2 renderer, environment maps, and a procedural scene before it creates the photographic/video journey. If WebGL2 initialization fails, `createOrigin()` disposes the scene and returns without creating the video or its scroll controller. The caller does not recover with a video-only timeline.

**Reproduced:** denying WebGL2 in both engines leaves no video elements, no active journey, and only the static hero/catalogue. The emitted message says “using photographic fallback”, but the cinematic photographic sequence was never created. This matches the “only the homepage” symptom under this condition.

**Required repair:** make the approved DOM/video timeline independent of WebGL. GPU capability must not be an eligibility condition for a video. A failed optional renderer must not destroy the scroll film.

### 2. One failed optional image exposes the old animation — high severity

Source: `source/app/visuals/macro-photographs.js:56–59,71–74`.

`Promise.all()` waits for every fallback image to decode. If any rejects, the shared `ready` flag never becomes true. `update()` then returns before calling the video controller's `motion.update(p)` on every subsequent frame.

**Reproduced:** blocking only `assets/photography/process/honey.webp` leaves the main video decoded and ready (`readyState=4`, `journeyVideo=ready`) but at time zero and invisible. The old WebGL canvas remains visible. All process players remain unloaded. This is a direct, deterministic explanation for “a different broken animation”, with no stale deployment required.

**Required repair:** video updates must be independent of optional still decoding. Handle each still failure separately, keep usable assets available, and do not expose a previous-generation renderer when the correct film is available.

### 3. Process panels cover the screen before their own video is ready — high severity

Source: `source/app/visuals/journey-film.js:73–92,151–157`.

The strip's visibility depends on the main movie's readiness and scroll progress. It does not depend on the Natural/Honey/Washed panel's decoded frame. Panels are loaded shortly before their chapters. The strip becomes opaque and the main film and photographic fallback are hidden even when the currently visible panel has `readyState=0`.

**Reproduced:** at approximately 38% story progress, the strip had opacity 1, the main video opacity 0, the fallback opacity 0, and the visible Natural video `readyState=0`. This occurred on ordinary cold entry to the live chapter in both engines, and again when its request was deliberately delayed. It is not merely a theoretical slow-network issue.

**Required repair:** preserve a correct visible frame while each panel loads. Use panel-specific decoded readiness and actual-film posters; do not let an empty player become the only visual. Keep side-by-side choreography and captions intact. Test entering and reversing into a chapter before its media has loaded.

### 4. GPU context loss permanently removes the cinematic journey — high severity

Source: `source/app/origin.js:1643–1644,1661`.

The `webglcontextlost` handler calls `dispose()`, which also removes film resources and the timeline. There is no video-only recovery or context-restored restart.

**Reproduced:** requesting context loss through `WEBGL_lose_context` on the live page removes the film and active journey. Normal scrolling does not rebuild it. This is separate from WebGL being unavailable at startup.

**Required repair:** preserve or recreate the same video timeline and scroll position without requiring a functioning GPU scene. Verify recovery after a tab/background lifecycle change as well as synthetic context loss.

### 5. Data Saver silently disables the whole story — high severity where the API is exposed

Source: `source/app/visuals/journey.js:6–10`.

`!navigator.connection?.saveData` is part of the startup eligibility condition. If true data-saving preference is reported, startup exits before creating any journey.

**Reproduced:** a simulated `saveData=true` causes the static-only page in both test engines. This tests the JavaScript branch; it does **not** mean Safari exposes the Network Information API or that iOS Low Data Mode was detected on a physical phone.

**Required repair:** use lighter media or an explicit motion opt-in instead of silently deleting the experience. Preserve `prefers-reduced-motion`; that is a separate accessibility preference and intentionally requests less movement.

### 6. Fragile media readiness and permanent failure state — medium/high severity

Source: `source/app/visuals/journey-film.js:61–64,95–124`.

- The main player becomes ready only through `loadeddata`/`canplay`, and only with a non-empty seekable range.
- The seek path refuses to operate before `readyState >= 2`; metadata availability alone cannot initiate the frame request.
- There is no gesture-assisted decoder initialization, startup timeout, or visible retry path.
- A main-media error sets `failed=true` permanently. A later successful readiness event never clears it.
- A panel retries once using the full main movie, but there is no recovery if that request also fails.
- The no-seekable-range path fetches the entire movie as a Blob. An initially empty range does not itself prove that the host lacks byte ranges; this can cause an unnecessary full download and additional memory use.

**Reproduced:** withholding `loadeddata`/`canplay` delivery leaves a video with decoded frame data at time zero, without the application marking it ready. This is a synthetic event-delivery test, not evidence that every reported iPhone withholds those events. Blocking MP4 requests instead shows the older still-image sequence; the production controller has no retry UI to return to the approved film.

**Required repair:** explicit media states, metadata/frame readiness handling, serialized seeks, gesture/resume recovery when required, bounded retries, and a fallback made from the approved movie rather than a different animation. Do not require autoplay for a scroll-scrubbed experience.

Apple documents that preload and autoplay behaviour are policy-dependent. A preload hint is not a promise that a paused movie will be ready at the next scroll position:
- https://webkit.org/blog/6784/new-video-policies-for-ios/
- https://developer.apple.com/documentation/webkit/delivering-video-content-for-safari

### 7. Landscape phones select desktop media and choreography — medium severity

Source: `source/app/visuals/journey-film.js:11–12,78` and width-based styling in `source/app/origin.css`.

Media selection uses only `width < 768`. An 844px-wide landscape phone selects the 1080 × 1440 desktop master instead of the 720 × 960 phone encode. Process players can then use full-length desktop movies, increasing decode and download demand. Width also selects the desktop multi-column layout.

**Reproduced:** a cold 844 × 390 touch viewport loads `coffee-journey-v28.mp4` with `videoWidth=1080`. That filename is the master reused by v30; it is not evidence of a stale v28 website.

**Required repair:** use input capability and a consistent orientation policy for media and layout. Verify both cold landscape entry and rotating an already-running portrait journey. Do not mix mobile video sizing with desktop-only CSS overrides.

## What the evidence rules out, and what it does not

- Both public domains currently serve the same v30 HTML/script. No evidence of the two domains serving different releases was found.
- The mobile master returns HTTP 206 for a requested byte range, with correct `Content-Range`, `video/mp4`, and matching content prefixes. The live host's range support is working for that asset.
- The phone master is H.264 High profile, level 3.1, yuv420p, 720 × 960 at 24fps; it is not an obviously unsupported codec choice for the reported phones. This metadata check is not proof of hardware decoder behaviour under memory pressure.
- Native programmatic window scrolling advances the main movie in the healthy baseline. The evidence does not support blaming Lenis alone for every failure.
- No application service worker was found in the reviewed code that would deliberately select another cached animation. The old-animation exposure is already explained by the fallback logic.
- Reviewed animation code contains no evidence of malicious tampering or an attacker-controlled media URL. These findings are reliability/availability defects, not demonstrated security exploits. This was not a full account, infrastructure, dependency-advisory, or penetration audit; the November 7 dependency report should not be represented as a fresh scan.
- `vite.config.js` does not define an explicit supported-browser target. The installed Vite default includes Safari 16.4; older iOS versions and embedded browsers were not tested. Phone model alone does not establish the installed browser version. This is a compatibility coverage gap, not a reproduced explanation for these five devices.
- Chrome touch emulation and macOS WebKit are not physical iPhones or Samsung Internet. Battery-saving behaviour, actual memory pressure, browser versions, mobile Safari compositor behaviour, and the exact triggers on the five reported phones remain unmeasured.

## Why the earlier tests missed this

The previous performance measurements used local assets and typically waited for the main video and all stills before exercising the timeline. They were useful measurements of an already-loaded animation, not a cold-start cellular reliability test. The lifecycle suite explicitly accepted a static catalogue after WebGL failure. Thus a test could pass while the user-required cinematic journey was absent.

Future acceptance must assert that the **approved frame is visible**, rather than merely checking that a video exists, a CSS class is present, the timeline advances, or the strip is visible.

## Status of Luna's local recovery draft

The workspace differs from published v30. The unfinished draft introduces `film-only-journey.js`, removes Data Saver as an eligibility gate, allows video updates independently of optional stills, and selects phone media for coarse pointers. These changes address important structural problems but do not fix all findings above.

During this audit I corrected three defects in that draft: an invalid category-opacity calculation, a no-op media invalidation callback that could leave newly loaded media hidden until scrolling resumed, and a hero transform that did not use the existing cherry-matching geometry. These are draft corrections, not a release claim.

Remaining release blockers include per-panel readiness/fallback, media startup/retry recovery, and end-to-end validation of the new renderer. The draft also needs landscape CSS review: the more-specific desktop Honey video height rule can override coarse-pointer sizing. Do not publish it solely because the narrow `mobile-resilience.cjs` checks pass; those checks currently do not prove decoded panel pixels or successful category image visibility.

## Remediation and release acceptance

1. Make a single approved DOM/video timeline independent of WebGL and optional still loading.
2. Make every panel retain the correct visible frame through loading, failure, retry and reverse scroll.
3. Add media state/recovery handling, including metadata-only startup, foreground resume, slow seeks, and transient errors.
4. Apply one phone/desktop policy across geometry, CSS, media URLs, and rotation.
5. Run the reproduction cases against the candidate build, including one still failing, all videos blocked, a delayed panel, context loss, Data Saver, reduced motion, cold landscape entry, reverse scrolling, and returning from a background tab. Add assertions for actual displayed frames and the final collection.
6. Verify on at least one physical iPhone in Safari and the reported Samsung/Android browser, using a cold cache and cellular loading. Emulation does not replace this acceptance gate.
7. Only after the candidate passes, rebuild and push the intended release, then recheck both public domains against the new build and verify media range delivery.

**Audit conclusion:** v30's biggest problem is coupled startup and incomplete failure recovery, not a need to redesign the coffee animation. Preserve the approved artwork and process choreography; repair the controller that decides when and whether it can appear.
