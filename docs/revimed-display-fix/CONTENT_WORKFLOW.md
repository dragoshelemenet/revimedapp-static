# One editing and publishing workflow

Blog: edit content/blog.json. One entry per language/slug. Do not edit SQLite posts or add article copies to components. lib/staticBlogPosts.ts is a compatibility reader, not a second content store. content/blog-aliases.json preserves old URLs without old article bodies. lib/blogSlugTranslations.ts maps language equivalents. Update this mapping when adding a translated article.

Equipment: Romanian content lives in lib/equipment.ts; language translations live in lib/equipment.en.ts, lib/equipment.ru.ts and lib/equipment.ua.ts. All displayed equipment uses lib/equipmentLocalized.ts. The Romanian catalog controls which devices exist; translations enrich those entries. Missing translations retain the existing Romanian fallback. Add a device to the catalog and its translations; routes are generated automatically. Never maintain a second slug array in route files.

Renderers: BlogPostTemplate renders blog articles; EquipmentDetailPage renders equipment details. Route files select language and slug. The download component does not rewrite the article.

Build once with npm run build; publish the resulting entire out directory. Never publish .next or repository source as the static website. A successful local build is not a successful deployment. Host configuration and cache refresh still need verification on your hosting account.

SQLite still supplies other existing sections such as prices/contact. This patch preserves those sources and does not migrate the whole clinic CMS. No changes in data/ are part of the patch. Any database edits made after the uploaded snapshot were unavailable for inspection; blog edits must now use the JSON source.
