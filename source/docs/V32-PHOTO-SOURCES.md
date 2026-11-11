## Final photo correction
The owner rejected the separate logo badge. The website now uses cleaned bean photographs with the original tray branding restored from the supplied photographs, without a separate logo overlay. Active image names include `v32-original-logo`. The shared-image policy remains unchanged. Do not rerun `apply-exact-photo-logo.cjs`; it is superseded by `restore-photo-branding.cjs`.

# Green coffee photographs and illustrations

Originals supplied by the owner on 11 November 2026 remain unchanged.

| Source files | Label verified on the photograph | Selected retouch |
| --- | --- | --- |
| IMG_4047–4048 | Robusta Cherry AAA | IMG_4048 |
| IMG_4049–4053 | Arabica PL A | IMG_4053 |
| IMG_4055–4056 | Arabica PL PB | IMG_4056 |
| IMG_4054, 4057–4058, 4060 | Arabica Cherry A | IMG_4058 |
| IMG_4061–4064 | Arabica Parchment C | IMG_4064 |
| E1B5591C-B841-4EE1-910B-4DC4131BF4E1_1_105_c.jpeg | Unlabelled green coffee tray | Collection photograph |

The selected photographs received AI cosmetic surface retouching: smoother, cleaner beans, reduced rough flakes and speckling, balanced light. They are labelled **Retouched sample photograph**, not evidence of the current sale lot. Alternate shots of the same five samples were inspected but not duplicated in the catalogue.

Final owner direction: stop generating grade variations. The 13 grade options without a supplied sample photograph all use the same common tray photograph, captioned **Green coffee reference photograph · Grade-specific sample on request**. The generated grade variations are not used in the website and are excluded from the browser build. Their drafts remain local only and are excluded from delivery. The five supplied grade photographs remain mapped to their exact labels.

Reference for grading context: [Coffee Board of India — exporter guidance and grading standards](https://coffeeboard.gov.in/Exporter.aspx). This is context, not certification of these images.

Higgsfield was explicitly requested. The connector accepted the references and quoted 2.75 credits per image, but rejected all six initial submissions as out of credits. No Higgsfield generation jobs were created. Built-in image generation, previously authorised by the owner, was used as the fallback. See GREEN-GRADE-GENERATION-JOBS.json and GREEN-PHOTO-RETOUCH-PROMPTS.json for prompts.

Final masters: assets/photography/retouched-source/.
Browser assets: assets/photography/*-v32-{480,960,1120}.webp.
Mapping: app/green-photography.js. The dialogue changes image and caption when the buyer changes grade; images use contain to preserve the printed labels.

Owner's colour direction: Robusta Cherry is predominantly yellowish, straw/ochre and pale yellow-brown, with only a restrained olive undertone. Washed Arabica retains grey-green/sage tones.

## Official logo supplied during review

The owner supplied `STEPHEN BLAKE LOGO.pdf.png`. A verbatim copy is saved as `assets/photography/retouched-source/brand-master.png`. Generated redraws of the crest are not approved. The owner explicitly approved direct original-artwork placement. The final photos use the supplied artwork on a consistent dark oval label; no logo typography is generated. The input artwork is cropped to its bounds and resized proportionally, preserving its two-colour design and internal negative spaces. `scripts/apply-exact-photo-logo.cjs` repeats the edit from the saved before-logo plates. `docs/V32-logo-placements.json` records source hash and placements. Before-logo plates remain editable source only and are excluded from browser delivery.
