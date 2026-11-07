# Stephen Blake — cinematic journey, v23

## Direction and scope

Keep the approved v18 website, estate opening, product architecture and navigation. Replace the weaker v21 transformation shots. The owner's explicit order is **peeling → honey → washed → natural**, followed by parchment removal, green coffee, roasting, grinding and the cup. This takes precedence over the general brief's instruction not to reorder stages. The three processes are presented as alternatives, not as successive treatments of one commercial lot.

## Audit and reference observations

The local project is the implementation source of truth. Its journey combines the estate photograph, photographic layers, a Three.js fallback, GSAP/Lenis scroll choreography, HTML captions, the motion film and three interactive product cards. The public site could not be retrieved through the web tool during this pass; it was not used as evidence of the local changes.

The supplied reel shows a suspended cherry separating from its stem, fruit opening, a creased bean becoming the central subject, progressive roast colour, downward falling grind particles, then coffee drops and a cup. Its useful qualities are the fixed visual axis, pale negative space, macro material detail, restrained camera movement and a continuous object identity. Reference contact frames are retained locally in `output/cherry-refinement/reference-contact.jpg`; the reference reel is not redistributed in the website package.

The v21 faults were the transition from peeling to a whole dried cherry, the pea-like selected bean and changing bean identity during roasting. V22 corrected the order and bean continuity, but its replacement peel looked like a hard shell cracking. The owner then supplied `stephenblake video.mp4` and selected the earlier soft peeling action. V23 uses the matching original core source from 0–4.125 s, retimed to 4.75 s, then holds the exposed wet mucilage for two seconds. It does not continue into that core's unwanted green/pea transformation.

The latest direction adds three lateral processing panels and postpones parchment removal until they are complete. Desktop panels accumulate side by side; mobile panels slide horizontally. Honey, washed and natural remain alternative routes. The final hulling clip now demonstrates parchment removal; its final green frame is used for both selection and roasting. The generated natural-hulling source remains in the editable archive for future use but is not the active v23 hulling shot.

## Scene mapping and storyboard

Times refer to the 42.45-second processing master. The estate and harvest precede that master; the product handoff follows it. Overlaps are included in these timings.

| Existing stage / purpose | V23 treatment | Master timing | Caption / continuity |
|---|---|---|---|
| Estate / botanical origin | Retain shade-grown estate image and photographic cherry alignment | Before film | Every cup begins as a fruit |
| Harvest / ripe fruit | Retain stem separation and enlarged cherry approach | Before film | Harvested at ripeness |
| Depulping / reveal seed | Preserve the exact fall and soft red peel from the owner-selected film | 0–4.75 s | The skin comes away; no nut-like cracking |
| Honey processing | Hold the exposed wet mucilage from the same peeling shot | 4.75–6.75 s | Honey process; first lateral panel |
| Washed processing | Wash away mucilage; hold clean parchment-covered seed for a full extra second | 6.50–12.50 s | Washed process; alternative route |
| Natural processing and drying | Return explicitly to a different whole-cherry route; fruit shrivels and dries | 12.10–17.10 s | Natural process; whole-cherry drying |
| Drying / preparation for hulling | Retained within natural time lapse and honey/washed descriptions; not omitted | Above | The rail now says Hull when the actual husk removal begins |
| Hulling | Retained parchment-hulling source opens the protective dry layer and exposes a creased green bean | 16.85–24.85 s | Removing the parchment; Selected caption begins at 22.85 s when green is exposed |
| Green selection / grading | Hold the exact last hulling frame | 24.85–26.85 s | Selected. Sorted. Graded. |
| Roasting | Grade that same frame progressively to brown; no geometry or outline change | 26.85–31.85 s | Roasting |
| Grinding | New video starts from the exact final roasted reference; particles fall down | 31.85–37.85 s | Ground for brewing |
| Preparation / cup | Retain final coffee drops and cup from the selected core source | 37.45–42.45 s | From origin to the cup |
| Product collection | Existing photographic handoff to Green, Roasted and Filter categories | After film | All three cards retain their navigation and product content |

## Production and integration pipeline

1. Use the selected original core for soft peeling, retained washed/natural/parchment-hulling clips, and the v22 reference-driven grinding clip. Historical generated jobs and exact prompts are in `CONTINUITY-V22-PROMPTS.json` and `CONTINUITY-V22-GENERATIONS.json`; v23 selection is recorded separately. No further video generation was submitted for v23.
2. Composite the selected black-background process footage over warm ivory with FFmpeg. Normalize object height and camera centre. Clean the keyed matte with a three-pixel erosion, rounded cap mask and soft feathering to reduce coloured edge contamination. Use short matched overlaps for process joins; an explicit pale transition marks the switch from washed to the alternative natural route.
3. Extract frame 191 of parchment hulling. Hold it for the selected-green section, then blend its original colours into a brown version of the same pixels. This deliberately preserves the owner's requested shape, centre crease and orientation. It illustrates roast colour development; it does not simulate physical bean expansion or a complete roaster environment.
4. The retained v22 grinding generation was anchored to a roasted version of the same reference bean. Its scale differs slightly from the v23 hulling endpoint; the exact-pixel continuity guarantee applies to selection through roasting. Lift only pale background/highlight values to remove the generated beige background drift. Preserve dark coffee detail. Retain the core's final cup shot.
5. Encode the local silent master at 720 × 960, 24 fps, with a keyframe every six frames and fast-start metadata. The master is actual generated/composited footage, not a placeholder or native 4K render. No Blender, Houdini or offline physically based renderer was used.
6. Map existing scroll progress to video time in `app/visuals/journey-film.js`. The video never autoplays; scroll direction controls seek direction. HTML captions remain independent and editable in `index.html`. One main paused video and three paused processing-panel players share the same cached/Blob source instead of a large image sequence; frequent keyframes aid seeking. A Blob fallback supports simple local servers without byte-range responses.
7. Retain the photograph sequence while the film loads or if it fails, reduced-motion behaviour, Three.js fallback, mobile framing and the existing real-image category handoff. Asset disposal removes the video and object URL when the journey is torn down.

## QA and editable delivery

`tests/bean-continuity.py` compares the encoded green and roasted frames: bounding boxes within one compression-edge pixel, approximately 99.0% foreground overlap and 99.4% interior texture correlation. Small edge differences come from colour/compression thresholds. It also checks the hulling-to-green join. Browser checks cover captions/order, forward/reverse seeking, desktop/tablet/mobile viewports, local-file opening, blocked-film fallback, resource lifecycle and the packaged category navigation.

Review the film itself as well as these checks: technical checks cannot establish that generated imagery is indistinguishable from documentary footage. The result is a macro illustration, not proof of a particular lot's processing. Physical iOS/Android hardware has not been tested. All selected source clips, the finished films, prompts, captions, source code and reproduction scripts are included; no further render job or credit purchase is needed to run the delivered site.

## Horizontal chapter behaviour

At scroll progress .335–.560 the page remains pinned. At widths of at least 760 px, Honey, Washed and Natural panels move into three columns in that order; earlier panels retain their final frames and readable descriptions. At smaller widths, the same three panels occupy adjacent viewport-width spaces and slide left at the chapter boundaries. At .556–.574 the processing group moves upward to reveal parchment removal beneath it. Reverse scrolling retraces these transforms and media times. The collection and the existing page resume after the full journey.

The built-in mucilage image study is an unused production reference, not a live-film placeholder. The selected peel comes from the owner's approved video source.
