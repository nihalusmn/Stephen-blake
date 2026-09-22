# Stephen Blake motion integration

The original website is preserved in the supplied v4 folder. All changes and the ready-to-serve production build are in `websdite design final ` (the folder name ends with a space).

## Dependencies

- GSAP 3.15.0: reveal choreography and the shared ticker.
- ScrollTrigger: included in GSAP; section triggers and cinematic progress.
- Lenis 1.3.26: restrained desktop wheel smoothing; native touch scrolling.
- Three.js 0.186.0: optional, dynamically imported visual scene.
- Vite 8.3.0 (development dependency): ES modules and production asset bundling. This does not change the site into a framework application.
- pnpm selected because the source had no package manager; exact resolved dependencies recorded in pnpm-lock.yaml.

## Important files and architecture

- `index.html`: original semantic page and three primary destinations in the order Filter Coffee / Roasted Coffee / Green Coffee Beans.
- `app/site.css`: original inline stylesheet, extracted without redesign.
- `app/catalogue.js`: preserved product data, search, filters, specification dialog, request builder, navigation and contact actions.
- `app/main.js`: feature setup, live reduced-motion changes, responsive boundary and page lifecycle.
- `app/config.js`: independent feature switches.
- `app/animations/core.js`: GSAP and ScrollTrigger imports and plugin registration.
- `app/animations/scroll.js`: one Lenis instance on the GSAP ticker, modal/menu scroll locks, anchor focus and explicit site scrolling API. Native Element methods are unchanged. Current Lenis honors CSS scroll-padding, avoiding doubled offsets.
- `app/animations/reveals.js`: quick content reveals, image masks and dynamic catalogue cleanup. CSS retains efficient hover states.
- `app/animations/products.js`: restrained specification entrance.
- `app/accessibility.js`: mobile focus trap and expanded state.
- `app/visuals/journey.js`: deferred scene import, eligibility and cancellation.
- `app/visuals/scene-assets.js`: original deterministic geometry and procedural textures in an isolated factory.
- `app/visuals/scene-scope.js`: reusable scene resource owner, GSAP ticker registration, event cleanup, geometry/material/texture/skeleton disposal.
- `app/origin.js`: preserved coffee journey, lighting, camera and shader choreography. Scroll progress controls plant/cherry, harvesting, processing, green beans, roasting, ground coffee and the three destinations.
- `app/origin.css`, `app/motion.css`: responsive story and interaction styles.
- `assets/source/`: formerly embedded photography/logo, now cacheable.
- `docs/HIGGSFIELD-ASSETS.md`, `docs/higgsfield-category-prompts.json`: production asset requirements and ready generation briefs.
- `tests/audit.cjs`, `docs/test-results.json`: browser regression suite and latest complete result.

## Transition and imagery status

The live 3D vessels align by category key, so reordering cards does not misalign the scene. Between story progress .920 and .985, HTML photographs fade in while the canvas fades out between .930 and .985. At completion, the scene is transparent and the cards remain normal links; reversing scroll reverses the dissolve.

Three new coordinated photorealistic images were generated with the built-in image generator, as authorized by the user after the Higgsfield connection failed. They share the same bowl, warm side lighting, framing and espresso backdrop. Filter grounds, roasted beans and green beans each have a separate image. PNG masters are in assets/photography/masters/; optimized WebP variants at 480, 960 and 1120px are in assets/photography/. The masters are excluded from the deployed build. Both homepage category panels and category headers now use the new set. Scene alignment was calibrated to the new photographs (width 93%, rim center 46.5%). Generation prompts and provenance are recorded in docs/IMAGE-GENERATION.md. No new Higgsfield assets are required for this completed handoff.

## Performance and fallbacks

- Main HTML reduced from about 1 MB to 33 KB by extracting embedded images and code.
- Main JS approximately 169 KB / 61 KB gzip. The roughly 600 KB / 155 KB gzip Three.js scene chunk is separate and deferred.
- Three.js runs at all viewport widths with lighter geometry on narrow screens. It is not requested with reduced motion, Save-Data, or direct category links. Photos and semantic content remain available. Tablet quality uses the existing reduced device tier.
- GPU rendering pauses when the scene is offscreen, document hidden, or progress settled; the shared GSAP ticker remains the only animation clock. Time-based scene decoration is now tied to progress, rather than running continuously.
- All scene events, observation, triggers and resources are released. Environment render targets are disposed in full. Reinitialization receives a fresh canvas after context loss/disposal.
- Category photos load early for a reliable handoff. Other existing product images retain lazy loading. Hero image is preloaded. Existing WebP files retained; no video or compressed model assets are currently needed.
- Fonts retain existing display=swap behavior; a font service outage falls back to the existing system serif/sans stack.
- Original lib/ vendor files are retained for archival/reference compatibility, but no longer loaded or copied into the production build. No duplicate live libraries.

## Disable features

Edit `app/config.js`, then rebuild:

- `smoothScroll: false`: native browser scroll; GSAP/scene still work.
- `cinematic: false`: skip the journey; retain normal content reveals and catalogue.
- `three: false`: no scene import; photographic fallback.
- `reveals: false`: content remains visible without reveal motion.
- `minimumSceneWidth`: optional cutoff; default 0, so narrow preview panels and phones retain the journey.

Operating-system reduced motion disables Lenis and the scene immediately and removes unnecessary reveals, including when changed with the page open.

## Enquiry limitation

The supplied form never sent or saved enquiries. That backend is still absent. Validation, specifications and WhatsApp handoff remain available. The confirmation now accurately says the brief is prepared, and the WhatsApp link includes the full brief and contact fields. No test messages were sent.

## Build and launch

With Node 22.12+ and pnpm installed: `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm build` and `pnpm preview`.

This computer has a bundled Node/pnpm runtime rather than a system node command. The finished static build can be launched without installing anything:

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory '/Users/nihalusmanmm/Desktop/websdite design final /dist'
```

Open http://127.0.0.1:8080. Serve over HTTP; the ES-module source is no longer intended for double-click file:// use. To deploy, upload the entire `dist/` directory. Source and original backups are not part of that build.

## Reference documentation

- https://github.com/darkroomengineering/lenis — GSAP ticker integration and native-scroll behavior.
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/ — triggers and lifecycle.
- https://threejs.org/docs/pages/WebGLRenderer.html — WebGL2 renderer and disposal.

## Validation completed

Production build passed. Chrome regression: 52 checks passed; lifecycle/fallback: 13 checks passed. Covered the full journey and photo dissolve, all category counts, search/empty feedback, species filtering, modal open/close and enquiry carryover, validation and prepared brief, same-page link targets, anchors, back/forward, desktop/tablet/mobile widths (1440/820/390/360), menu focus trap, reduced motion, repeated scene reinitialization, no duplicate triggers, keyboard scrolling, no-WebGL behavior, context loss, no broken images and no console/network errors. Tests did not send messages or enquiries. Screenshots inspected for desktop and mobile. Physical-device GPU benchmarking was not performed. The generated image set and desktop/mobile placement were visually inspected.

## Final generated-image verification

After integration of the built-in generated set, the 52-check production browser suite passed again. Additional visual checks captured story progress .92, .95, .97 and 1.0, and verified all three category header sources. Desktop final and intermediate views and the 390px mobile view were visually inspected. Preview screenshots are in docs/previews/. Build completed successfully with responsive generated WebPs and no master PNGs in the deploy output. The only existing business limitation remains the absent enquiry backend; WhatsApp handoff is available.

## Narrow-preview correction

Removed the 760px scene cutoff after verifying the user’s actual in-app preview was 736px wide. The existing low/mid quality tiers now keep the scroll journey on narrow screens instead of suppressing it. Reduced motion, Save-Data and unavailable WebGL still retain their fallbacks. Rebuilt successfully, reloaded the actual in-app tab, visually verified the branch/cherry scene and advancement to the processing chapter on scroll, and checked the tab console: no errors. Earlier mobile-photography-only test results describe the superseded cutoff behavior.
