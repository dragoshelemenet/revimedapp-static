import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
const origin = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://revimed.site').replace(/\/$/, '');
const languages = [['ro', ''], ['en', '/en'], ['ru', '/ru'], ['uk', '/ua']];
const pages = [
  { route: '/', file: 'index.html' },
  { route: '/servicii/', file: 'servicii/index.html' },
  { route: '/utilaj/', file: 'utilaj/index.html' },
  ...['consultatii-neurologice', 'consultatii-neurochirurgie', 'fizioterapie-si-reabilitare', 'diagnostic-functional', 'terapie-balneara', 'electroterapie'].map((slug) => ({ route: `/servicii/${slug}/`, file: `servicii/${slug}/index.html` })),
  ...['aparat-amp', 'electrosomn-4t', 'electrosomn-5-es-10-5', 'electrosomn-3', 'etrans-1', 'etrans-2', 'etrans-3', 'transair-01p-transair-05', 'transair-01s-transair-04', 'transair-01s-transair-03', 'lenar', 'bi-lenar', 'mdm-k', 'mdm-101', 'mdm-2000', 'amplipuls-4', 'amplipuls-5', 'amplipuls-6', 'kandadzia-kang-da-jia-lqx-2000a', 'aparat-electroforeza-medicamentoasa', 'spectr-lc', 'lampa-solux', 'detox-spa-bio', 'spa-sy-f088-detox-bio-178', 'rheotest'].map((slug) => ({ route: `/utilaj/${slug}/`, file: `utilaj/${slug}/index.html` }))
];
for (const page of pages) {
  for (const [lang, prefix] of languages) {
    const file = path.join('out', prefix, page.file);
    const html = await readFile(file, 'utf8');
    const canonical = `${origin}${prefix}${page.route}`;
    assert(html.includes(`<link rel="canonical" href="${canonical}"`), `canonical missing/wrong: ${file}`);
    assert(html.includes(`hrefLang="${lang}" href="${origin}${prefix}${page.route}"`), `hreflang ${lang} missing/wrong: ${file}`);
    assert(html.includes(`hrefLang="x-default" href="${origin}${page.route}"`), `x-default missing/wrong: ${file}`);
    assert(/<meta name="description" content="[^"]+"/.test(html), `description missing: ${file}`);
  }
}
const sitemap = await readFile('out/sitemap.xml', 'utf8');
assert(sitemap.includes(`${origin}/servicii/consultatii-neurochirurgie/`));
assert(!sitemap.includes('consultatii-neurochirurgicale'));
await access('out/robots.txt');
console.log(`PASS: canonical, hreflang and descriptions across ${pages.length * languages.length} home/service/equipment pages; corrected service routes are in the sitemap.`);
