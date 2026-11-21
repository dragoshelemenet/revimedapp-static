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
  if (/^(\/(?:en|ru|ua))?\/(dr-igor-revenco|servicii|preturi|contact|neurolog-chisinau|neurochirurg-chisinau|fizioterapie-chisinau|neuropediatru-chisinau|electrosomn-chisinau|hernie-de-disc-chisinau|tratament-migrene-chisinau|recuperare-dupa-avc-chisinau|dureri-de-spate-sciatica-chisinau|neurolog-ciocana-chisinau|neurolog-riscani-chisinau|neurolog-botanica-chisinau|neurolog-buiucani-chisinau|neurolog-centru-chisinau|nevralgie-neuropatie-chisinau|epilepsie-convulsii-chisinau|ameteli-vertij-chisinau|insomnie-tratament-chisinau|osteocondroza-cervicala-chisinau|eeg-chisinau|masaj-terapeutic-chisinau|diagnostic-amp-chisinau|reoencefalografie-chisinau|kinetoterapie-chisinau|acupunctura-reflexoterapie-chisinau|psihoterapeut-stres-anxietate-chisinau|electroforeza-amplipuls-chisinau|nevrolog-kishinev|neyrohirurg-kishinev|fizioterapiya-kishinev|gryzha-diska-kishinev|detskiy-nevrolog-kishinev|nevrolog-chekany-kishinev|nevrolog-ryshkanovka-kishinev|nevrolog-botanika-kishinev|nevrolog-buyukany-kishinev|nevrolog-tsentr-kishinev|nevralgiya-neyropatiya-kishinev|epilepsiya-kishinev|lechenie-migreni-kishinev|osteohondroz-kishinev|eeg-kishinev|lechebnyy-massazh-kishinev|diagnostika-amp-kishinev|reoentsefalografiya-kishinev|kinezoterapiya-kishinev|igloukalyvanie-kishinev|psihoterapevt-kishinev|elektroforez-amplipuls-kishinev)\//.test(p)) return '0.9';
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
const lastmod = new Date().toISOString().slice(0, 10);
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
  + urls.map((url) => {
    const imgs = pageImageMap.get(url) || [];
    const imgXml = imgs.map((img) => `<image:image><image:loc>${escapeXml(img.loc)}</image:loc>${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ''}</image:image>`).join('');
    return `  <url><loc>${escapeXml(url)}</loc><lastmod>${lastmod}</lastmod><priority>${urlPriority(url)}</priority>${imgXml}</url>`;
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
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: Claude-SearchBot',
    'Allow: /',
    '',
    'User-agent: Claude-User',
    'Allow: /',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    'User-agent: Applebot-Extended',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap.xml', origin).href}`,
    ''
  ].join('\n')
);

const llmsTxt = [
  '# Centrul Medical Revimed PLUS+ (Chișinău, Moldova)',
  '',
  '> Centrul Medical Revimed PLUS+ din Chișinău (Str. Mircea cel Bătrân 13/2, MD-2044, sectorul Ciocana) oferă consultații neurologice, neurochirurgie, neurologie pediatrică, recuperare medicală, fizioterapie (25 aparate medicale), diagnostic funcțional (EEG, REG, AMP 117 indici, electrospondilografie) și terapii complementare din 1991.',
  '',
  '## Lead Physician',
  '- **Dr. Igor Revenco**: Neurolog, neurochirurg și neuropediatru, medic de categorie superioară, doctor în neurochirurgie (USMF „Nicolae Testemițanu”), membru al Asociației Europene de Neurochirurgie (EANS), 35+ ani experiență clinică.',
  `- Profile: ${new URL('/dr-igor-revenco/', origin).href}`,
  '',
  '## Official Reference Prices (MDL — Updated November 2026)',
  '- Primary Neurology Consultation (Consultație primară neurolog): 500 MDL (follow-up: 400 MDL)',
  '- Primary Neurosurgery Consultation (Consultație primară neurochirurg): 300 MDL (follow-up: 300 MDL)',
  '- Physiotherapy session 30 min / Electrosomn / Amplipuls / Electrophoresis: 150 MDL',
  '- Therapeutic massage 60 min: 200 MDL | Electrotherapy + Kinesiotherapy: 250 MDL/hour',
  '- Electroencephalography (EEG): 1400 MDL | Non-invasive AMP 117 indices: 1000 MDL | Electrospondylography: 800 MDL | Brain mapping: 600 MDL | Rheoencephalography: 500 MDL',
  `- Full 101-service price list: ${new URL('/preturi/', origin).href}`,
  '',
  '## Contact & Hours',
  '- Address: Str. Mircea cel Bătrân 13/2, MD-2044, Ciocana, Chișinău, Republica Moldova',
  '- Coordinates: 47.0477461, 28.8887469',
  '- Hours: Monday–Friday, 09:00–15:00 (Europe/Chisinau)',
  '- Phone: 022 60 50 60 | +373 79 422 908',
  '- Languages: Romanian (/), English (/en/), Russian (/ru/), Ukrainian (/ua/)',
  '',
  '## Key Pages (RO & RU Chișinău Hubs)',
  `- Home: ${new URL('/', origin).href}`,
  `- Dr. Igor Revenco: ${new URL('/dr-igor-revenco/', origin).href}`,
  `- Neurolog Chișinău: ${new URL('/neurolog-chisinau/', origin).href}`,
  `- Neurochirurg Chișinău: ${new URL('/neurochirurg-chisinau/', origin).href}`,
  `- Fizioterapie Chișinău: ${new URL('/fizioterapie-chisinau/', origin).href}`,
  `- Neuropediatru Chișinău: ${new URL('/neuropediatru-chisinau/', origin).href}`,
  `- Electrosomn Chișinău: ${new URL('/electrosomn-chisinau/', origin).href}`,
  `- Hernie de disc Chișinău: ${new URL('/hernie-de-disc-chisinau/', origin).href}`,
  `- Tratament migrene Chișinău: ${new URL('/tratament-migrene-chisinau/', origin).href}`,
  `- Recuperare după AVC Chișinău: ${new URL('/recuperare-dupa-avc-chisinau/', origin).href}`,
  `- Dureri de spate & sciatică: ${new URL('/dureri-de-spate-sciatica-chisinau/', origin).href}`,
  `- Neurolog Ciocana: ${new URL('/neurolog-ciocana-chisinau/', origin).href}`,
  `- Amețeli & vertij: ${new URL('/ameteli-vertij-chisinau/', origin).href}`,
  `- Insomnie tratament: ${new URL('/insomnie-tratament-chisinau/', origin).href}`,
  `- Osteocondroză cervicală: ${new URL('/osteocondroza-cervicala-chisinau/', origin).href}`,
  `- EEG Chișinău (1400 MDL): ${new URL('/eeg-chisinau/', origin).href}`,
  `- Masaj Terapeutic Chișinău (200 MDL): ${new URL('/masaj-terapeutic-chisinau/', origin).href}`,
  `- Diagnostic AMP 117 indici (1000 MDL): ${new URL('/diagnostic-amp-chisinau/', origin).href}`,
  `- Reoencefalografie REG (500 MDL): ${new URL('/reoencefalografie-chisinau/', origin).href}`,
  `- Kinetoterapie Chișinău (250 MDL): ${new URL('/kinetoterapie-chisinau/', origin).href}`,
  `- Acupunctură & Reflexoterapie (400 MDL): ${new URL('/acupunctura-reflexoterapie-chisinau/', origin).href}`,
  `- Psihoterapeut Chișinău (300 MDL): ${new URL('/psihoterapeut-stres-anxietate-chisinau/', origin).href}`,
  `- Electroforeză & Amplipuls (150 MDL): ${new URL('/electroforeza-amplipuls-chisinau/', origin).href}`,
  `- Невролог Кишинёв: ${new URL('/ru/nevrolog-kishinev/', origin).href}`,
  `- Нейрохирург Кишинёв: ${new URL('/ru/neyrohirurg-kishinev/', origin).href}`,
  `- Физиотерапия Кишинёв: ${new URL('/ru/fizioterapiya-kishinev/', origin).href}`,
  `- Детский невролог Кишинёв: ${new URL('/ru/detskiy-nevrolog-kishinev/', origin).href}`,
  `- Грыжа диска Кишинёв: ${new URL('/ru/gryzha-diska-kishinev/', origin).href}`,
  `- Невролог Чеканы: ${new URL('/ru/nevrolog-chekany-kishinev/', origin).href}`,
  `- Лечение мигрени Кишинёв: ${new URL('/ru/lechenie-migreni-kishinev/', origin).href}`,
  `- Остеохондроз Кишинёв: ${new URL('/ru/osteohondroz-kishinev/', origin).href}`,
  `- ЭЭГ Кишинёв (1400 MDL): ${new URL('/ru/eeg-kishinev/', origin).href}`,
  `- Лечебный массаж Кишинёв (200 MDL): ${new URL('/ru/lechebnyy-massazh-kishinev/', origin).href}`,
  `- Диагностика АМП 117 (1000 MDL): ${new URL('/ru/diagnostika-amp-kishinev/', origin).href}`,
  `- РЭГ сосудов мозга (500 MDL): ${new URL('/ru/reoentsefalografiya-kishinev/', origin).href}`,
  `- Кинезотерапия Кишинёв (250 MDL): ${new URL('/ru/kinezoterapiya-kishinev/', origin).href}`,
  `- Иглоукалывание Кишинёв (400 MDL): ${new URL('/ru/igloukalyvanie-kishinev/', origin).href}`,
  `- Психотерапевт Кишинёв (300 MDL): ${new URL('/ru/psihoterapevt-kishinev/', origin).href}`,
  `- Электрофорез и Амплипульс (150 MDL): ${new URL('/ru/elektroforez-amplipuls-kishinev/', origin).href}`,
  `- Services: ${new URL('/servicii/', origin).href}`,
  `- Medical Equipment (25 devices): ${new URL('/utilaj/', origin).href}`,
  `- Prices (101 services, MDL/EUR/USD/RON/UAH): ${new URL('/preturi/', origin).href}`,
  `- Patient Tools & Assessments: ${new URL('/aplicatii/', origin).href}`,
  `- FAQ: ${new URL('/intrebari/', origin).href}`,
  `- Blog (40 medical guides): ${new URL('/blog/', origin).href}`,
  `- Contact & Map: ${new URL('/contact/', origin).href}`,
  `- Sitemap: ${new URL('/sitemap.xml', origin).href}`,
  ''
].join('\n');
await writeFile(path.join(output, 'llms.txt'), llmsTxt);
console.log(`Generated sitemap.xml (${urls.length} URLs), robots.txt, and llms.txt from the static export.`);
