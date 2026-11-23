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
const escapeXml = (value) => String(value || '').replace(/[<>&"']/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]);
const stripTags = (html) => String(html || '')
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim();

const pageMetaMap = new Map();

async function indexPages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const pages = [];
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!['_next', '_not-found'].includes(entry.name)) pages.push(...await indexPages(file));
    } else if (entry.name === 'index.html') {
      const route = '/' + path.relative(output, directory).split(path.sep).filter(Boolean).join('/');
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
      if (canonical && canonical !== pageUrl) continue;

      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const descTag = tags.find((t) => /name=["']description["']/i.test(t));
      const descMatch = descTag?.match(/content="([^"]*)"/i) || descTag?.match(/content='([^']*)'/i);
      const citableMatch = html.match(/<aside[^>]*class="[^"]*rm-citable-summary[^"]*"[^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);

      pageMetaMap.set(pageUrl, {
        route: route === '/' ? '/' : `${route}/`,
        lang: htmlLang,
        title: stripTags(titleMatch?.[1] || ''),
        h1: stripTags(h1Match?.[1] || ''),
        description: stripTags(descMatch?.[1] || ''),
        citable: stripTags(citableMatch?.[1] || '')
      });

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
  if (/^\/(?:ru\/)?[a-z0-9-]+-(?:chisinau|kishinev)\/$/.test(p)) return '0.9';
  if (/^(\/(?:en|ru|ua))?\/(dr-igor-revenco|servicii|preturi|contact)\//.test(p)) return '0.9';
  if (/^(\/(?:en|ru|ua))?\/(utilaj|blog|intrebari|aplicatii)\//.test(p)) return '0.8';
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

// Comprehensive AI Search & Crawler Access in robots.txt
const aiCrawlers = [
  '*',
  'Googlebot',
  'Google-Extended',
  'Google-CloudVertexBot',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'Yandex',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'DuckAssistBot',
  'cohere-ai',
  'MistralAI-User'
];

await writeFile(
  path.join(output, 'robots.txt'),
  [
    ...aiCrawlers.flatMap((ua) => [`User-agent: ${ua}`, 'Allow: /', '']),
    `Sitemap: ${new URL('/sitemap.xml', origin).href}`,
    ''
  ].join('\n')
);

// Categorize all exported URLs dynamically so llms.txt, llms-full.txt, and feed.xml never miss a single new page
const roLocalUrls = urls.filter((u) => /^\/[a-z0-9-]+-chisinau\/$/.test(new URL(u).pathname));
const ruLocalUrls = urls.filter((u) => /^\/ru\/[a-z0-9-]+-kishinev\/$/.test(new URL(u).pathname));
const roEquipUrls = urls.filter((u) => /^\/utilaj\/[^/]+\/$/.test(new URL(u).pathname));
const roBlogUrls = urls.filter((u) => /^\/blog\/[^/]+\/$/.test(new URL(u).pathname));
const ruBlogUrls = urls.filter((u) => /^\/ru\/blog\/[^/]+\/$/.test(new URL(u).pathname));
const roAppUrls = urls.filter((u) => /^\/aplicatii\/teste-si-instrumente\/[^/]+\/$/.test(new URL(u).pathname));

const formatEntry = (url) => {
  const m = pageMetaMap.get(url);
  const label = (m?.h1 || m?.title || url).replace(/\s*\|\s*Revimed PLUS\+.*$/i, '').trim();
  const summary = m?.citable || m?.description || '';
  return `- [${label}](${url})${summary ? `: ${summary}` : ''}`;
};

const llmsTxt = [
  '# Centrul Medical Revimed PLUS+ (Chișinău, Republica Moldova)',
  '',
  '> Centrul Medical Revimed PLUS+ (`S.R.L. „REVIMED PLUS”`, IDNO `1011600011964`, mun. Chișinău, sectorul Ciocana, bd. Mircea cel Bătrân nr. 13/2, MD-2044) oferă consultații de neurologie, neurochirurgie, neurologie pediatrică, recuperare medicală, fizioterapie (25 aparate medicale), diagnostic funcțional (EEG 19 canale, REG, EHO-Encefalografie, AMP 117 indici, Electrospondilografie, Cartografierea creierului 3D, Termalgometrie RUNO), testări cognitive/MMPI, Biofeedback, stimulare AVS și terapii complementare. Experiență clinică din 1991.',
  '',
  '## Machine-Readable Discovery Endpoints',
  `- Full AI Knowledge Compendium (llms-full.txt): ${new URL('/llms-full.txt', origin).href}`,
  `- XML Sitemap (${urls.length} canonical URLs): ${new URL('/sitemap.xml', origin).href}`,
  `- RSS 2.0 Medical Guides & Articles Feed: ${new URL('/feed.xml', origin).href}`,
  '',
  '## Lead Physician & Legal Entity',
  '- **Legal Entity**: S.R.L. „REVIMED PLUS”, IDNO 1011600011964 (registered 31.03.2011, Republic of Moldova)',
  '- **Dr. Igor Revenco**: Medic neurolog, neurochirurg și neuropediatru de categorie superioară, doctor în neurochirurgie (USMF „Nicolae Testemițanu”), membru al Asociației Europene de Neurochirurgie (EANS), 35+ ani experiență clinică.',
  `- Physician Profile (RO): ${new URL('/dr-igor-revenco/', origin).href}`,
  `- Physician Profile (RU): ${new URL('/ru/dr-igor-revenco/', origin).href}`,
  `- Physician Profile (EN): ${new URL('/en/dr-igor-revenco/', origin).href}`,
  `- Physician Profile (UA): ${new URL('/ua/dr-igor-revenco/', origin).href}`,
  '',
  '## Indicative Reference Tariffs (MDL — Updated November 2026, Non-Binding Information)',
  '- Consultație primară neurolog / neurochirurg / neuropediatru / fitoterapeut / reflexolog / acupuncturist: 500 MDL (consultație repetată: 400 MDL)',
  '- Electroencefalografie (EEG 19 canale adulți & copii): 1600 MDL',
  '- Examinare neinvazivă 117 indici clinici Biopromin AMP-Tech (screening funcțional complementar): 1000 MDL',
  '- Cartografierea creierului computerizată 3D: 600 MDL',
  '- Reoencefalografie (REG): 500 MDL | Electrospondilografie computerizată (ESG): 500 MDL | Termalgometrie RUNO (sistem nervos vegetativ): 500 MDL',
  '- EHO-Encefalografie (ECHO-EG): 250 MDL | Ecografie organe interne: 250 MDL | ECG computerizată: 200 MDL | Uro-test: 200 MDL',
  '- Evaluare funcțională neuropsihologică: 700 MDL | Testare cognitivă avansată (memorie/atenție): 800 MDL | Evaluare biomecanică: 600 MDL | Evaluare ergonomică: 550 MDL',
  '- Testări psihodiagnostice computerizate: MMPI (200 MDL), Luscher (200 MDL), Sondy (200 MDL), Personalitate (250 MDL), Funcții executive (300 MDL), Inteligență emoțională (300 MDL), Evaluare psihosocială (350 MDL), Stres post-traumatic (400 MDL)',
  '- Proceduri din categoria Echipamente și metode curative (Electrosomn, Amplipuls, Electroforeză, Magnetoterapie, Laser, Ultrasunete, Bioptron, Ozonoterapie, Darsonval, Biofeedback, Stimulare AVS alfa-beta-theta, LANAFORM, JAD-masaj, ION-DETOX): 100 MDL / 30 min',
  '- Băi curative cu nămol din Saki / aeroionoterapie în peștera de sare: 100–150 MDL | Masaj terapeutic 60 min: 200 MDL | Kinetoterapie / reabilitare: 220–300 MDL',
  '- Notă legală: Toate tarifele și informațiile de pe site sunt orientative („ca atare” / „as is”), nu constituie ofertă publică fermă și nu înlocuiesc serviciul de urgență 112.',
  '',
  '## Contact & Clinic Hours',
  '- Address: bd. Mircea cel Bătrân 13/2, MD-2044, sectorul Ciocana, mun. Chișinău, Republica Moldova',
  '- Geo Coordinates: 47.0477461, 28.8887469',
  '- Hours: Luni–Vineri (Monday–Friday), 09:00–15:00 (Europe/Chisinau)',
  '- Phone: 022 60 50 60 | +373 79 422 908 (WhatsApp)',
  '',
  '## Core Clinic Pages (RO / EN / RU / UA)',
  `- Home (RO): ${new URL('/', origin).href}`,
  `- Home (RU): ${new URL('/ru/', origin).href}`,
  `- Home (EN): ${new URL('/en/', origin).href}`,
  `- Home (UA): ${new URL('/ua/', origin).href}`,
  `- Services (96 services): ${new URL('/servicii/', origin).href}`,
  `- Prices (96 services, MDL/EUR/USD/RON/UAH): ${new URL('/preturi/', origin).href}`,
  `- Medical Equipment Catalog (25 devices): ${new URL('/utilaj/', origin).href}`,
  `- Interactive Patient Tools & Assessments: ${new URL('/aplicatii/', origin).href}`,
  `- Frequently Asked Questions (FAQ): ${new URL('/intrebari/', origin).href}`,
  `- Video Library: ${new URL('/video-uri/', origin).href}`,
  `- Contact & Map: ${new URL('/contact/', origin).href}`,
  `- Terms & Conditions / Legal Notice: ${new URL('/termeni-si-conditii/', origin).href}`,
  '',
  `## Clinical Authority Guides — Romanian (${roLocalUrls.length} Chișinău Medical Guides)`,
  ...roLocalUrls.map((u) => {
    const m = pageMetaMap.get(u);
    const label = (m?.h1 || m?.title || u).replace(/\s*\|\s*Revimed PLUS\+.*$/i, '').trim();
    return `- [${label}](${u})`;
  }),
  '',
  `## Clinical Authority Guides — Russian (${ruLocalUrls.length} Кишинёвских клинических гидов)`,
  ...ruLocalUrls.map((u) => {
    const m = pageMetaMap.get(u);
    const label = (m?.h1 || m?.title || u).replace(/\s*\|\s*Revimed PLUS\+.*$/i, '').trim();
    return `- [${label}](${u})`;
  }),
  '',
  `## Medical Equipment Pages (${roEquipUrls.length} Therapeutic & Diagnostic Devices)`,
  ...roEquipUrls.map((u) => {
    const m = pageMetaMap.get(u);
    const label = (m?.h1 || m?.title || u).replace(/\s*\|\s*Revimed PLUS\+.*$/i, '').trim();
    return `- [${label}](${u})`;
  }),
  '',
  `## Interactive Patient Self-Assessment Tools (${roAppUrls.length} Tools)`,
  ...roAppUrls.map((u) => {
    const m = pageMetaMap.get(u);
    const label = (m?.h1 || m?.title || u).replace(/\s*\|\s*Revimed PLUS\+.*$/i, '').trim();
    return `- [${label}](${u})`;
  }),
  '',
  `## Medical Blog Articles — Romanian (${roBlogUrls.length} Articles)`,
  ...roBlogUrls.map((u) => {
    const m = pageMetaMap.get(u);
    const label = (m?.h1 || m?.title || u).replace(/\s*\|\s*Revimed PLUS\+.*$/i, '').trim();
    return `- [${label}](${u})`;
  }),
  ''
].join('\n');

await writeFile(path.join(output, 'llms.txt'), llmsTxt);

// Generate llms-full.txt with self-contained citable summaries for every clinical guide, device, and article
const llmsFullTxt = [
  '# Centrul Medical Revimed PLUS+ — Complete Clinical Knowledge Base (llms-full.txt)',
  '',
  '> Exhaustive machine-readable index of all clinical guides, diagnostic protocols, physiotherapy devices, and medical articles published by Centrul Medical Revimed PLUS+ (S.R.L. „REVIMED PLUS”, IDNO 1011600011964, Chișinău, bd. Mircea cel Bătrân 13/2, tel. 022 60 50 60), reviewed by Dr. Igor Revenco (Neurologist, PhD Neurosurgeon, Neuropediatrician, EANS Member, 35+ years experience). All information and prices are indicative ("as is") and do not replace emergency medical care (112).',
  '',
  `## 1. Romanian Clinical Authority Guides (${roLocalUrls.length} Guides — Direct Citable Summaries)`,
  ...roLocalUrls.map(formatEntry),
  '',
  `## 2. Russian Clinical Authority Guides (${ruLocalUrls.length} Guides — Direct Citable Summaries)`,
  ...ruLocalUrls.map(formatEntry),
  '',
  `## 3. Medical Equipment & Physiotherapy Devices (${roEquipUrls.length} Devices)`,
  ...roEquipUrls.map(formatEntry),
  '',
  `## 4. Medical Blog Articles (${roBlogUrls.length} RO + ${ruBlogUrls.length} RU Articles)`,
  ...roBlogUrls.map(formatEntry),
  ...ruBlogUrls.map(formatEntry),
  ''
].join('\n');

await writeFile(path.join(output, 'llms-full.txt'), llmsFullTxt);

// Generate RSS 2.0 Feed (out/feed.xml) for AI aggregators, Perplexity, Bing/Copilot, and Google Discover
const pubDateRfc = new Date().toUTCString();
const feedUrls = [...roLocalUrls, ...ruLocalUrls, ...roBlogUrls, ...ruBlogUrls];
const rssXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
  '  <channel>',
  '    <title>Centrul Medical Revimed PLUS+ Chișinău — Ghiduri Clinice &amp; Articole Medicale</title>',
  `    <link>${escapeXml(origin.href)}</link>`,
  `    <atom:link href="${escapeXml(new URL('/feed.xml', origin).href)}" rel="self" type="application/rss+xml" />`,
  '    <description>Ghiduri clinice de neurologie, neurochirurgie, neuropediatrie, diagnostic funcțional (EEG, REG, EHO-EG, AMP, ESG, RUNO) și fizioterapie în Chișinău — revizuite de Dr. Igor Revenco.</description>',
  '    <language>ro-MD</language>',
  `    <lastBuildDate>${pubDateRfc}</lastBuildDate>`,
  ...feedUrls.map((u) => {
    const m = pageMetaMap.get(u) || {};
    const title = (m.h1 || m.title || u).replace(/\s*\|\s*Revimed PLUS\+.*$/i, '').trim();
    const summary = m.citable || m.description || title;
    return [
      '    <item>',
      `      <title>${escapeXml(title)}</title>`,
      `      <link>${escapeXml(u)}</link>`,
      `      <guid isPermaLink="true">${escapeXml(u)}</guid>`,
      `      <pubDate>${pubDateRfc}</pubDate>`,
      `      <description>${escapeXml(summary)}</description>`,
      '    </item>'
    ].join('\n');
  }),
  '  </channel>',
  '</rss>',
  ''
].join('\n');

await writeFile(path.join(output, 'feed.xml'), rssXml);

console.log(`Generated sitemap.xml (${urls.length} URLs), robots.txt (${aiCrawlers.length} AI/search crawlers), llms.txt, llms-full.txt, and feed.xml (${feedUrls.length} items) from the static export.`);
