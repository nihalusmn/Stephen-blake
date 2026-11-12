# Sitemap and canonical URL fix — ready for approval

Date: 12 November 2026 (India)
Branch: `codex/seo-sitemap-v32`
Production baseline: `95b57c2` (Google Analytics 4 release)
Status: locally built and tested; not pushed and not deployed.

## Approved scope prepared

- Production sitemap location: https://www.stephenblake.co.in/sitemap.xml
- URL count: **1** — https://www.stephenblake.co.in/
- Local HTTP preview: http://127.0.0.1:4194/sitemap.xml
- Local website preview: http://127.0.0.1:4194/

The site is one HTML document. Coffee categories, Origins, Our Story, Private Label, FAQ and Request are fragment-driven sections within that document. Product specifications open in a dialog. They are not separate canonical pages and are not separate sitemap entries. No new page URLs, priorities, change frequencies or speculative modification dates were invented.

## Live audit findings before modification

The homepage response matched the GitHub production HTML byte for byte, including GA4 `G-TN6RLJQF4B`.

| URL | Observed response | Action |
| --- | --- | --- |
| https://www.stephenblake.co.in/ | 200; no canonical tag | Add canonical homepage and explicit index/follow |
| https://www.stephenblake.co.in/sitemap.xml | 404 | Add root XML sitemap |
| https://www.stephenblake.co.in/robots.txt | 404 | Add crawl permission and sitemap reference |
| https://stephenblake.co.in/ | 308 to HTTPS www | Preserve www policy; encode matching host rule |
| http://www.stephenblake.co.in/ | 308 to HTTPS www | Existing HTTPS redirect is correct |
| http://stephenblake.co.in/ | 308 to HTTPS apex, then www | Existing two-hop redirect; no blocking issue |
| https://www.stephenblake.co.in/index.html | Duplicate 200 | Permanent redirect to `/`, preserving query parameters |
| https://stephen-blake.vercel.app/ | Duplicate 200 | Permanent redirect from this exact alias to HTTPS www |
| https://www.stephenblake.co.in/source/ | Duplicate source HTML, 200 | X-Robots-Tag: noindex on source paths |
| https://www.stephenblake.co.in/source/index.html | Duplicate source HTML, 200 | X-Robots-Tag: noindex on source paths |
| Source README / delivery notes | Publicly accessible, no indexing exclusion | noindex header for editable source and root maintenance files |
| `/green-coffee`, `/story` | 404; not genuine page routes | Exclude; actual links are `#green-coffee` and `#story` |
| A deliberately nonexistent path | 404 | Preserve genuine 404 behavior; no catch-all rewrite |
| `/?version=32` | Duplicate homepage, 200 | Canonical tag consolidates query variants; campaign parameters remain intact |

Public source files remain accessible; noindex excludes them from search, not from public access. Robots does not block those paths, allowing crawlers to observe their noindex headers. No source files or visitor assets were removed in this SEO change.

## Implementation

- `source/public/sitemap.xml`, `robots.txt` and `vercel.json` are copied unchanged to the Vite build root and the deployed repository root.
- Vite now uses its standard `public` directory, preventing future builds from omitting the sitemap.
- Packaging includes the public directory so editable ZIP exports retain the fix.
- Vercel configuration adds only redirects and indexing/content-type headers. It does not change build settings, route rendering, rewrites, caching, animation resources or Analytics.
- The local preview server permits sitemap/robots delivery, sends appropriate MIME types and supports the index alias redirect while retaining video byte ranges and source-file protection.
- Vercel preview hostnames are not redirected by a wildcard rule. Only the apex production hostname and the known stable Vercel alias are matched.

## Validation completed

- Locked dependency install and production Vite build passed.
- 40 SEO checks passed against both the built output and ready-to-deploy root, including HTTP 200, XML namespace, exactly one canonical URL, robots accessibility and media range delivery.
- Sitemap validated with `xmllint` against the official sitemaps.org XML schema.
- Proposed Vercel fields validated against the official Vercel configuration schema rules.
- 52 existing website checks passed: catalogue, product dialogs, forms, mobile layouts, navigation, reduced motion, animation startup and absence of broken images or console/network errors.
- Page body, compiled animation JavaScript, CSS, all 255 media files and the GA4 initialization script are byte-identical to production baseline.
- Reports: `SEO-CHECKS.json` and `SEO-WEBSITE-CHECKS.json`.

## Approval and post-deployment verification

Approval is required before pushing to GitHub main or creating a Vercel deployment. No remote branch was pushed because the connected project may automatically create a preview deployment.

After approval: recheck origin/main for concurrent changes, publish this reviewed change, wait for Vercel, then verify production sitemap HTTP 200/XML, robots reference, homepage canonical, www/apex/index/Vercel-alias redirects, source noindex headers and video byte ranges. These Vercel production routing checks cannot be claimed as complete before deployment. The live sitemap remains 404 until that approved deployment finishes.

Then submit `sitemap.xml` in the verified Google Search Console property. Sitemap availability does not guarantee immediate crawling, indexing or ranking.

## Primary references

- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google canonical guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Vite public directory: https://vite.dev/guide/assets.html#the-public-directory
- Vercel redirects and headers: https://vercel.com/docs/project-configuration/vercel-json
