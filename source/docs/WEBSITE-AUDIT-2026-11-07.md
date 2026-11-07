# Stephen Blake website audit — 7 November 2026

Release: v29. Approved v28 animation and imagery retained.

## Findings corrected

| Area | Verified issue | Correction |
| --- | --- | --- |
| Dependencies | Seven registry advisories: two high, four moderate, one low, all in development/build dependencies | Vite 8.3.0 → 8.3.3; source-map-js 1.2.1 → 1.2.2. Follow-up registry audit: zero known advisories. |
| Enquiry data | Phone, enquiry type and free-text requirements omitted from the prepared WhatsApp message | All entered enquiry/contact fields included; no message sent by audit tests. |
| Validation | Nonpositive quantities accepted; volume errors hidden inside the contact step | Reject invalid/nonfinite quantities and amounts below 0.1; show status independently of wizard step. |
| Stale enquiry | An already-prepared send link retained old details after edits | Clear the prepared confirmation on changes and refresh the current WhatsApp brief. |
| Product selection | Previous grade, region and process could survive choosing a different product | Reset those fields to the new selection; clear the selected product when changing coffee form. |
| Wizard | Delayed auto-advance could override manual step navigation | Cancel outstanding timer and capture the intended next step. |
| Keyboard access | Product option rendering destroyed the focused button; dialog lacked an explicit accessible name | Restore focus to selected option; name dialog from product heading. |
| Navigation | Back from a category to a section could jump to the collection instead | Restore the actual destination and refresh layout after closing the category. |
| Footer | Privacy, terms, shipping and admin links resolved to absent pages | Remove dead destinations. Replace the broken form privacy link with accurate WhatsApp handoff information. No legal terms invented. |
| Header contrast | Animation header rule could override the dark-section background, leaving pale text on a pale header | Apply the paper background only outside dark sections and measure section positions after layout changes. |
| Local preview | Generic file server exposed project directories and accepted unrelated Host headers | Restrict to built index/assets, block directory listings/dotfiles/outside-root symlinks and unexpected hosts; keep byte ranges for scrubbing. |

## Security review scope

Reviewed application code, entry HTML, build configuration, dependency lockfile, local preview server, asset references and interactive flows. Pattern checks found no embedded private keys or common API-token formats in application/assets/scripts/docs. No evidence of malicious code or unexpected application network transmission was found. User text is escaped or assigned through DOM text nodes; a hostile HTML payload was tested in the enquiry without execution. The only application fetch is the local animation film; Google Fonts and buyer-initiated WhatsApp links are expected external services.

Dependency evidence: dependency-audit-before.json and dependency-audit.json. Publisher/reference advisories:
- https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22
- https://github.com/advisories/GHSA-68fv-2mgg-jv7q

The vulnerabilities above concern build/development tooling, not an observed compromise of the published static site.

## Verification

- Production build succeeds. Existing IIFE/import.meta warnings relate to bundling; no application runtime exceptions were observed.
- 52 main browser checks: categories, search, product specification dialogs, enquiry flow, anchors/history, responsive menu, 360/390/820/1440 widths, reduced motion, context-loss fallback and loaded images.
- 19 lifecycle checks: repeated animation teardown/recreation, single film/overlays, three process panels, no duplicate triggers, mobile resizing, keyboard scrolling and no-WebGL/reduced-motion fallbacks.
- Targeted checks: complete enquiries, visible quantity validation, hostile text, stale-link invalidation, product-state reset, wizard race prevention, focus/history and every catalogue product image.
- Five local-server checks: working root and /dist URLs, restricted files/listings/Host headers, exact byte-range responses and security response headers.
- Animation scripts and motion layers matched the approved v28 archive byte for byte. In origin.css, only the unrelated sticky-header background selector was corrected. No process choreography or visual redesign was made.
- Two further header checks passed on dark and light sections; see header-contrast-results.json.
- Logs: test-results.json, lifecycle-results.json, audit-hardening-results.json and preview-server-results.json.

The extracted v29 ZIP also passed desktop (1440 px) and mobile (390 px) animation, caption, process-player, collection-photo and category-navigation checks. The restarted live preview returned 200 for the website and 404 for source files and directory listings.

## Remaining boundaries

This is a local static-site audit, not a penetration test of a deployed domain. Hosting accounts, DNS, TLS, CDN rules, HTTP security headers on the future host and access permissions were not accessible or tested. A scan cannot prove there are no unknown vulnerabilities.

The enquiry form prepares a WhatsApp brief; it has no email/database backend. The buyer must choose to send the message. Owner-approved privacy/terms/shipping policies still need to be supplied before public launch. The removed admin link did not represent a working dashboard.

Chrome viewport emulation was tested; physical iOS/Android hardware and all Safari versions were not. External Google Fonts require connectivity. Generated process imagery remains illustrative. The bundled film/source assets are large; no compression or dependency refactor that could alter the approved animation was attempted.
