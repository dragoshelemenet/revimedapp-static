# Install in Codespaces

Upload revimed-display-fix.zip into the repository root. Run from that root:

```bash
revimed_patch_dir=$(mktemp -d /tmp/revimed-display-fix.XXXXXX) &&
unzip -q revimed-display-fix.zip -d "$revimed_patch_dir" &&
python3 "$revimed_patch_dir/apply-display-fix.py" --repo "$PWD" --apply &&
npm ci &&
npm run build &&
npm run check:seo
```

The installer verifies current files against your uploaded snapshot, backs up replaced files beside the repository, and copies only the listed files. It never deletes source, resets Git, commits, or pushes. If it reports a conflict, it copied nothing; do not force-unzip.

Review changes using git diff. To stage only this patch after the build passes (same terminal):

```bash
python3 "$revimed_patch_dir/apply-display-fix.py" --repo "$PWD" --stage &&
git diff --cached --stat
```

Check that no unrelated files were already staged before committing. Then:

```bash
git commit -m "Unify Revimed article rendering and static builds" &&
git push origin main
```

Do not git pull over pending changes or reapply the older revimed-seo-update.zip. This patch uses the exact source snapshot you uploaded. Dependencies are unchanged.

## Publishing
Set the hosting build command to npm run build and the publish directory to out. Deploy the entire output as one release; do not copy selected HTML files onto an older export. A static site updates only after a successful deployment.

Compare local out/version.json with https://YOUR-DOMAIN/version.json after deployment. Matching sourceVersion confirms matching tracked code/content inputs covered by the build fingerprint; builtAt distinguishes separate builds. It does not prove every CDN edge has refreshed. If they differ, inspect the hosting project, deployment branch and published artifact. Existing sourceVersion markers can be inspected in page source.

Configure the actual host to revalidate HTML and version.json, and retain immutable caching only for content-hashed /_next/static/ assets. This ZIP does not install provider-specific headers because the hosting provider is unknown. Do not add no-cache meta tags or a second deployment pipeline as a substitute.
