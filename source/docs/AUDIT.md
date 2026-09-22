# Baseline audit — 21 September 2026

Source: `/Users/nihalusmanmm/Desktop/stephen-blake-website-v4/`.
Working copy: `/Users/nihalusmanmm/Desktop/websdite design final /`.
The complete source folder remains unchanged and serves as the reversible backup.

- Plain HTML, CSS and JavaScript; no framework, package.json, lockfile, build system or package manager existed.
- index.html: 1,023,065 bytes, inline styles, embedded image map, catalogue and business logic.
- app/origin.js: one large scene with geometry, procedural textures, shader modifications, scroll handling, Lenis, lifecycle and category callbacks.
- app/origin.css: cinematic layout, category cards, responsive layouts and fallback.
- lib/: GSAP/ScrollTrigger 3.12.5, Lenis 1.1.18, Three.js r160, loaded eagerly as globals.
- Assets: 9 rendered category WebPs at 480/960/1440 widths; 18 product WebPs; plantation, hills, roastery and logo embedded in HTML. No video or model files.
- Fonts: Fraunces and Archivo via Google Fonts with display=swap; no local font files.
- Existing breakpoints: 540, 560, 600, 700, 760, 820, 860, 900, 980, 1000 and 1080px.
- Existing access features: semantic sections, native product dialog, focus outlines, labels, reduced-motion CSS and initial-load scene fallback.
- Existing animation: IntersectionObserver/CSS reveals, standalone hero RAF, GSAP scene ticker, Lenis ticker, CSS UI transitions and category entrance animations.
- Business data: 3 green, 2 roasted/ground, 11 filter products, plus custom blend enquiries. Category hash routing, variety/search filters, product specifications, request wizard, private label, WhatsApp/email/phone links.

Baseline Chrome run: scene initialized; three destination cards; one broken image (empty range-art source) and one 404 (favicon). No JavaScript exceptions observed.

Problems confirmed by source audit: scrollIntoView prototype override; duplicate category click routing; Lenis and observer lifetimes not cleaned up; ScrollTriggers survive scene disposal; rendered environment textures tracked without their render targets; continuous GPU rendering when scene progress is stationary; live reduced-motion changes unhandled; mobile drawer lacks focus trap and expanded state; fake enquiry success despite no backend.
