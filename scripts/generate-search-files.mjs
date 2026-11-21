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
      const pageUrl = new URL(route === '/' ? '/' : `${route}/`, origin).href;
      const canonicalTag = (html.match(/<link\b[^>]*>/gi) || []).find(tag => /rel="canonical"/.test(tag));
      const canonical = canonicalTag?.match(/href="([^"]+)"/)?.[1];
      // Export legacy aliases for visitors; index only their canonical articles.
      if (canonical && canonical !== pageUrl) continue;
      pages.push(pageUrl);
    }
  }
  return pages;
}

const urls = [...new Set(await indexPages(output))].sort();
if (!urls.length) throw new Error('No exported index.html pages found. Run next build first.');
function urlPriority(url) {
  const p = new URL(url).pathname;
  if (p === '/' || p === '/en/' || p === '/ru/' || p === '/ua/') return '1.0';
  if (/^(\/(?:en|ru|ua))?\/(dr-igor-revenco|servicii|preturi|contact|neurolog-chisinau|neurochirurg-chisinau|fizioterapie-chisinau|neuropediatru-chisinau|electrosomn-chisinau|hernie-de-disc-chisinau|tratament-migrene-chisinau|recuperare-dupa-avc-chisinau|dureri-de-spate-sciatica-chisinau|neurolog-ciocana-chisinau|nevrolog-kishinev|neyrohirurg-kishinev|fizioterapiya-kishinev|gryzha-diska-kishinev|detskiy-nevrolog-kishinev|nevrolog-chekany-kishinev)\//.test(p)) return '0.9';
  if (/^(\/(?:en|ru|ua))?\/(utilaj|blog|intrebari)\//.test(p)) return '0.8';
  return '0.7';
}
const pageImageMap = new Map();
for (const url of urls) {
  const p = new URL(url).pathname;
  const htmlFile = path.join(output, p === '/' ? 'index.html' : path.join(p, 'index.html'));
  try {
    const h = await readFile(htmlFile, 'utf8');
    const imgs = [...h.matchAll(/<img[^>]+src="(\/images\/(?:equipment|blog|gallery|3|medical-bg)[^"]+)"[^>]*alt="([^"]*)"/gi)]
      .map((m) => ({ loc: new URL(m[1], origin).href, title: m[2] }))
      .filter((x, i, a) => a.findIndex((y) => y.loc === x.loc) === i)
      .slice(0, 6);
    if (imgs.length) pageImageMap.set(url, imgs);
  } catch {}
}
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
  + urls.map((url) => {
    const imgs = pageImageMap.get(url) || [];
    const imgXml = imgs.map((img) => `<image:image><image:loc>${escapeXml(img.loc)}</image:loc>${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ''}</image:image>`).join('');
    return `  <url><loc>${escapeXml(url)}</loc><priority>${urlPriority(url)}</priority>${imgXml}</url>`;
  }).join('\n') + '\n</urlset>\n';
await writeFile(path.join(output, 'sitemap.xml'), xml);
await writeFile(
  path.join(output, 'robots.txt'),
  [
    'User-agent: *',
    'Allow: /',
    '',
    'User-agent: OAI-SearchBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    'User-agent: Claude-SearchBot',
    'Allow: /',
    '',
    'User-agent: Claude-User',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap.xml', origin).href}`,
    ''
  ].join('\n')
);

const llmsTxt = [
  '# Centrul Medical Revimed PLUS+ (Chișinău, Moldova)',
  '',
  '> Centrul Medical Revimed PLUS+ din Chișinău (Str. Mircea cel Bătrân 13/2, sectorul Ciocana) oferă consultații neurologice, neurochirurgie, neurologie pediatrică, recuperare medicală, fizioterapie, diagnostic funcțional și terapii complementare.',
  '',
  '## Lead Physician',
  '- **Dr. Igor Revenco**: Neurolog, neurochirurg și neuropediatru, medic de categorie superioară, doctor în neurochirurgie (USMF „Nicolae Testemițanu”), membru al Asociației Europene de Neurochirurgie (EANS), 35+ ani experiență clinică.',
  `- Profile: ${new URL('/dr-igor-revenco/', origin).href}`,
  '',
  '## Contact & Hours',
  '- Address: Str. Mircea cel Bătrân 13/2, MD-2044, Chișinău, Republica Moldova',
  '- Hours: Monday–Friday, 09:00–15:00 (Europe/Chisinau)',
  '- Phone: 022 60 50 60 | +373 79 422 908',
  '- Languages: Romanian (/), English (/en/), Russian (/ru/), Ukrainian (/ua/)',
  '',
  '## Key Pages',
  `- Home: ${new URL('/', origin).href}`,
  `- Dr. Igor Revenco: ${new URL('/dr-igor-revenco/', origin).href}`,
  `- Neurolog Chișinău: ${new URL('/neurolog-chisinau/', origin).href}`,
  `- Neurochirurg Chișinău: ${new URL('/neurochirurg-chisinau/', origin).href}`,
  `- Fizioterapie Chișinău: ${new URL('/fizioterapie-chisinau/', origin).href}`,
  `- Services: ${new URL('/servicii/', origin).href}`,
  `- Medical Equipment (25 devices): ${new URL('/utilaj/', origin).href}`,
  `- Prices (101 services, multi-currency): ${new URL('/preturi/', origin).href}`,
  `- Patient Tools & Assessments: ${new URL('/aplicatii/', origin).href}`,
  `- FAQ: ${new URL('/intrebari/', origin).href}`,
  `- Blog: ${new URL('/blog/', origin).href}`,
  `- Contact & Map: ${new URL('/contact/', origin).href}`,
  `- Sitemap: ${new URL('/sitemap.xml', origin).href}`,
  ''
].join('\n');
await writeFile(path.join(output, 'llms.txt'), llmsTxt);
console.log(`Generated sitemap.xml (${urls.length} URLs), robots.txt, and llms.txt from the static export.`);
