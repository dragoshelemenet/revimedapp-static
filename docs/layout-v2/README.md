# Shared layout update

Based on commit 82eedd8. Existing page text, blog JSON, equipment datasets and URLs are retained.

- `components/Header.tsx` and `Header.module.css`: single global navigation, including Questions.
- `components/PageHeading.tsx` and `PageHeading.module.css`: every inner page heading, without background pictures.
- Only HomeTemplate uses the existing photographic homeHero.
- Removed obsolete route animation and DOM-injected hero scroll controls.
- Removed 2,847 lines from global.css, primarily obsolete header/hero selectors and comments. Other feature CSS remains; this is not a full rewrite of all application tools.
- Blog content stays in content/blog.json. Equipment content stays in lib/equipment.ts and its language files, through equipmentLocalized.ts.
- BlogPosting and FAQ structured data reflect existing visible text. Translated blog canonicals have hreflang links. Sitemap excludes legacy alias URLs while retaining their exported pages.
- Release hash now includes package inputs and public assets. A new version requires a successful full build and deployment of out/.
- Release checks enforce the same navigation per language and one shared header on every HTML page.

Validation: Next.js production build and release checks; desktop browser navigation through Questions, Blog, Equipment and Home. External Unsplash blog images did not load in the preview environment; their existing URLs were retained. Mobile layout has responsive CSS but was not visually tested on a device.

Hosting cache configuration and live indexing are not verified by a local build. Deploy the whole out directory atomically. Search and AI citations cannot be guaranteed.
