# Revimed display and build fix

Based on the uploaded revimed-current-source.zip, not the earlier SEO ZIP.

- content/blog.json is the single editable blog source. All blog readers, including legacy database reader exports, use it. SQLite data is retained but is no longer a blog display source.
- Removed nine duplicate Romanian article payloads from foreign-language entries. Existing alias URLs still work and render canonical translations. Metadata canonical URLs follow the canonical article.
- Preserved 12 canonical articles (three topics in four languages) and all existing blog URLs. Lists, detail pages and metadata resolve through the same reader.
- Removed the article script's delayed DOM rewriting. Articles render through React once; the document download button remains.
- Equipment lists, details, metadata and generated route parameters now use the same localized resolver. Deleted manual copies of equipment slug arrays. Translation files are deliberate language content, not alternative renderers.
- Fixed language links on error pages and the absent Romanian video route; article language switching now uses known translation pairs.
- Clean builds remove only .next and out. Failed builds/checks remove incomplete out output. A checked output contains version.json and matching HTML version markers.
- Added check:seo script and local asset/link verification. Silenced broad tracing for intentionally dynamic legacy filesystem paths.

No medical claims changed in this focused repair. The earlier SEO equipment-content package has NOT been merged: do not install that old package over this version. Its content improvements require a subsequent merge against this baseline.

## Verification
Production build and TypeScript passed. 234 HTML pages checked for version markers and local link/asset paths. All nine legacy blog URLs were compared against their canonical translated article bodies; all matched. Four blog listings contain three articles each. Build emitted no Turbopack tracing warning.

The uploaded archive excluded data and public assets. For the local build these were supplied from the previously inspected repository copy. They are not included or overwritten by this patch. Run the build in Codespaces to check your current assets/database. No browser/mobile visual review or live-host/CDN verification was performed for this patch. Hosting provider/settings were not supplied.
