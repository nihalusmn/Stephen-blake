# Stephen Blake — cinematic journey, v22

## Direction and scope

Keep the approved v18 website, estate opening, product architecture and navigation. Replace the weaker v21 transformation shots. The owner's explicit order is **peeling → honey → washed → natural**, followed by natural hulling, green coffee, roasting, grinding and the cup. This takes precedence over the general brief's instruction not to reorder stages. The three processes are presented as alternatives, not as successive treatments of one commercial lot.

## Audit and reference observations

The local project is the implementation source of truth. Its journey combines the estate photograph, photographic layers, a Three.js fallback, GSAP/Lenis scroll choreography, HTML captions, the motion film and three interactive product cards. The public site could not be retrieved through the web tool during this pass; it was not used as evidence of the local changes.

The supplied reel shows a suspended cherry separating from its stem, fruit opening, a creased bean becoming the central subject, progressive roast colour, downward falling grind particles, then coffee drops and a cup. Its useful qualities are the fixed visual axis, pale negative space, macro material detail, restrained camera movement and a continuous object identity. Reference contact frames are retained locally in `output/cherry-refinement/reference-contact.jpg`; the reference reel is not redistributed in the website package.

The v21 faults were the transition from peeling to a whole dried cherry, the pea-like selected bean, and changing bean identity during roasting. V22 replaces the peeling and hulling shots, removes the old core's green/roast/grind section and uses a new grinding clip anchored to the final roasted frame. Existing natural, washed and honey source clips remain useful after reordering and trimming. No page redesign is required.

## Scene mapping and storyboard

Times refer to the 42.45-second processing master. The estate and harvest precede that master; the product handoff follows it. Overlaps are included in these timings.

| Existing stage / purpose | V22 treatment | Master timing | Caption / continuity |
|---|---|---|---|
| Estate / botanical origin | Retain shade-grown estate image and photographic cherry alignment | Before film | Every cup begins as a fruit |
| Harvest / ripe fruit | Retain stem separation and enlarged cherry approach | Before film | Harvested at ripeness |
| Depulping / reveal seed | New reference-driven shot: red fruit opens, mucilage-coated coffee appears | 0–5.00 s | The skin comes away; Honey caption begins as the coated seed is exposed at 2.70 s |
| Honey processing | Keep mucilage visible; use opening of existing honey source | 4.75–6.75 s | Honey process; one processing route |
| Washed processing | Wash away mucilage; hold clean parchment-covered seed for a full extra second | 6.50–12.50 s | Washed process; alternative route |
| Natural processing and drying | Return explicitly to a different whole-cherry route; fruit shrivels and dries | 12.10–17.10 s | Natural process; whole-cherry drying |
| Drying / preparation for hulling | Retained within natural time lapse and honey/washed descriptions; not omitted | Above | The rail now says Hull when the actual husk removal begins |
| Hulling | New dark dried-cherry husk fractures and falls away, revealing a creased green bean | 16.85–24.85 s | Hulling the dried cherry; Selected caption begins at 22.85 s when green is exposed |
| Green selection / grading | Hold the exact last hulling frame | 24.85–26.85 s | Selected. Sorted. Graded. |
| Roasting | Grade that same frame progressively to brown; no geometry or outline change | 26.85–31.85 s | Roasting |
| Grinding | New video starts from the exact final roasted reference; particles fall down | 31.85–37.85 s | Ground for brewing |
| Preparation / cup | Retain final coffee drops and cup from the selected core source | 37.45–42.45 s | From origin to the cup |
| Product collection | Existing photographic handoff to Green, Roasted and Filter categories | After film | All three cards retain their navigation and product content |

## Production and integration pipeline

1. Generate replacement macro footage in Higgsfield Kling 3.0 Standard from supplied start/end image references. Selected jobs and exact prompts are in `CONTINUITY-V22-PROMPTS.json` and `CONTINUITY-V22-GENERATIONS.json`.
2. Composite the selected black-background process footage over warm ivory with FFmpeg. Normalize object height and camera centre. Erode the keyed matte by two pixels and softly feather it to reduce coloured edge contamination. Use short matched overlaps for process joins; an explicit pale transition marks the switch from washed to the alternative natural route.
3. Extract frame 191 of natural hulling. Hold it for the selected-green section, then blend its original colours into a brown version of the same pixels. This deliberately preserves the owner's requested shape, centre crease and orientation. It illustrates roast colour development; it does not simulate physical bean expansion or a complete roaster environment.
4. Anchor grinding to the exact final roasted image. Lift only pale background/highlight values to remove the generated beige background drift. Preserve dark coffee detail. Retain the core's final cup shot.
5. Encode the local silent master at 720 × 960, 24 fps, with a keyframe every six frames and fast-start metadata. The master is actual generated/composited footage, not a placeholder or native 4K render. No Blender, Houdini or offline physically based renderer was used.
6. Map existing scroll progress to video time in `app/visuals/journey-film.js`. The video never autoplays; scroll direction controls seek direction. HTML captions remain independent and editable in `index.html`. One paused video replaces a large image sequence to limit file count and memory; frequent keyframes aid seeking. A Blob fallback supports simple local servers without byte-range responses.
7. Retain the photograph sequence while the film loads or if it fails, reduced-motion behaviour, Three.js fallback, mobile framing and the existing real-image category handoff. Asset disposal removes the video and object URL when the journey is torn down.

## QA and editable delivery

`tests/bean-continuity.py` compares the encoded green and roasted frames: identical bounding boxes, approximately 98.8% foreground overlap and 99.5% interior texture correlation. Small edge differences come from colour/compression thresholds. It also checks the hulling-to-green join. Browser checks cover captions/order, forward/reverse seeking, desktop/tablet/mobile viewports, local-file opening, blocked-film fallback, resource lifecycle and the packaged category navigation.

Review the film itself as well as these checks: technical checks cannot establish that generated imagery is indistinguishable from documentary footage. The result is a macro illustration, not proof of a particular lot's processing. Physical iOS/Android hardware has not been tested. All selected source clips, the finished films, prompts, captions, source code and reproduction scripts are included; no further render job or credit purchase is needed to run the delivered site.
