import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import nextEnv from '@next/env';

// Next loads .env files for its build process; load the same files for this step.
nextEnv.loadEnvConfig(process.cwd(), false);
const origin = new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://revimed.site');
if (!['http:', 'https:'].includes(origin.protocol) || origin.pathname !== '/' || origin.search || origin.hash) {
  throw new Error('The site URL must be an http(s) origin without a path, query or fragment.');
}
const output = path.resolve('out');
const escapeXml = (value) => value.replace(/[<>&"']/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]);

async function indexPages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const pages = [];
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!['_next', '_not-found'].includes(entry.name)) pages.push(...await indexPages(file));
    } else if (entry.name === 'index.html') {
      const route = '/' + path.relative(output, directory).split(path.sep).filter(Boolean).join('/');
      // Existing localized video pages are placeholders, not published video content.
      let html = await readFile(file, 'utf8');
      const locale = route.split('/')[1];
      const htmlLang = locale === 'ua' ? 'uk' : ['en', 'ru'].includes(locale) ? locale : 'ro';
      const localizedHtml = html.replace(/<html\b[^>]*>/i, (tag) => tag.replace(/\blang="[^"]*"/, `lang="${htmlLang}"`));
      if (localizedHtml !== html) await writeFile(file, localizedHtml);
      html = localizedHtml;
      const tags = html.match(/<meta\b[^>]*>/gi) || [];
      if (tags.some((tag) => /name=["'](?:robots|googlebot)["']/i.test(tag) && /content=["'][^"']*\bnoindex\b/i.test(tag))) continue;
      pages.push(new URL(route === '/' ? '/' : `${route}/`, origin).href);
    }
  }
  return pages;
}

const urls = [...new Set(await indexPages(output))].sort();
if (!urls.length) throw new Error('No exported index.html pages found. Run next build first.');
// No lastmod: build time is not evidence that the page content changed.
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  + urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n') + '\n</urlset>\n';
await writeFile(path.join(output, 'sitemap.xml'), xml);
await writeFile(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', origin).href}\n`);
console.log(`Generated sitemap.xml (${urls.length} URLs) and robots.txt from the static export.`);
