# Higgsfield production asset manifest

Status: The three category images are COMPLETE using the built-in image generator, authorized by the user as a replacement for the unavailable Higgsfield connection. The original Higgsfield brief below is retained for future production reference. Current masters and responsive WebPs are in assets/photography/; see IMAGE-GENERATION.md. No Higgsfield generation is blocking the site.

## First priority: three matched photographic category destinations

Three separate 4:5 portrait images, 2K master (approximately 2048 × 2560). Deliver opaque RGB, no transparency, photographic still life, no baked labels. Export WebP variants at 480 × 600, 960 × 1200, and 1440 × 1800; retain the original masters separately. Do not upscale the temporary 720px images.

| Destination | Subject | Required final file | Purpose |
|---|---|---|---|
| Filter Coffee | Fine brown filter-coffee grounds in a shallow matte-black ceramic bowl | assets/photography/category-filter-1440.webp | Left category card and filter category header |
| Roasted Coffee | Natural whole roasted beans, varied seams, chestnut to espresso, restrained oil sheen, in the same bowl | assets/photography/category-roasted-1440.webp | Middle card and roasted category header |
| Green Coffee Beans | Unroasted pale olive/sage beans with natural creases and silverskin, in the same bowl | assets/photography/category-green-1440.webp | Right card and green category header |

### Composition for the animation handoff

Match the original scene's shallow basin silhouette: bowl approximately 84.5% of image width; center x=50%; elliptical rim center near y=38.8%. A subtly footed broad bowl, not a tall bucket. Three-quarter camera elevation around 25°, 85mm perspective, f/8. Warm 4300K soft key from high camera-left; low neutral rim from camera-right. Espresso-black backdrop (#0B0806) and tactile dark walnut/aged studio surface, restrained antique-brass edge highlight. Keep useful subject detail out of the bottom 20% where existing HTML text overlays sit, without drawing an artificial empty band.

The images must look like photographed materials, never Blender renders. Natural asymmetry and actual bean/ground microtexture are essential. No floating objects, smoke, glows, neon, purple, logos, packets or invented certification marks. All three exposures, bowl shapes, framing and backdrop tones must match. Recipe prompts are in higgsfield-category-prompts.json.

### Integration

1. Verify provider model constraints and generate the three distinct product subjects using the connected product-photoshoot workflow.
2. Inspect actual images and refine only observed defects. Verify bowl shape and alignment against the final scene.
3. Place optimized variants under assets/photography/. Point `.sb-card img` sources/srcsets in index.html and the GROUPS art paths in app/catalogue.js to those images.
4. Preserve the three category keys and URLs. Tune `ART_FILL` and `ART_ANCHOR_Y` in app/origin.js only if the final photographic framing requires it.
5. Inspect intermediate scroll frames (.92, .95, .97, .985) and the settled destination, desktop and mobile, before marking the new image request complete.

## Later cinematic asset upgrades (not required to operate the site)

| Asset | Master / web delivery | Transparency | Use |
|---|---|---|---|
| Indian plantation environment | 3840×2160; web 1920×1080 and mobile 1080×1350 WebP/AVIF | Opaque | Replace hero/environment photo |
| Ripe cherry macro | 2048×2560, 4:5; optional 2048px square texture plates | Opaque photo; alpha only for a deliberate isolated layer | Harvest chapter reference and texture source |
| Natural / washed / honey processing | Three 2560×1440 masters with matched lighting, mobile 1080×1350 | Opaque | Processing chapter photographic alternatives |
| Green bean surface / roasted surface | 2048×2048 seamless base color and roughness, 1024px mobile; correct linear/nonlinear color spaces | Opaque | High-quality future materials |
| Roast transition footage | 3840×2160 master, 6–8 sec, stable framing; web H.264/WebM at 1920×1080 and matching poster | Opaque | Optional richer roasting layer; no video needed today |
| Coffee branch, cherry, green and roasted bean models | glTF/GLB, mobile low-poly LOD; KTX2 textures at 1024/2048px | Alpha only for leaf cutouts | Replace procedural geometry when production models exist |

Higgsfield creates source imagery. Any production 3D model must be authored/reconstructed and checked for geometry/material quality; a still image is not a ready glTF asset. No fake production models or films were added.
