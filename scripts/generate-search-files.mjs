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
  if (/^(\/(?:en|ru|ua))?\/(dr-igor-revenco|servicii|preturi|contact|neurolog-chisinau|neurochirurg-chisinau|fizioterapie-chisinau|neuropediatru-chisinau|electrosomn-chisinau|hernie-de-disc-chisinau|tratament-migrene-chisinau|recuperare-dupa-avc-chisinau|dureri-de-spate-sciatica-chisinau|neurolog-ciocana-chisinau|neurolog-riscani-chisinau|neurolog-botanica-chisinau|neurolog-buiucani-chisinau|neurolog-centru-chisinau|nevralgie-neuropatie-chisinau|epilepsie-convulsii-chisinau|ameteli-vertij-chisinau|insomnie-tratament-chisinau|osteocondroza-cervicala-chisinau|eeg-chisinau|masaj-terapeutic-chisinau|diagnostic-amp-chisinau|reoencefalografie-chisinau|kinetoterapie-chisinau|acupunctura-reflexoterapie-chisinau|electroforeza-amplipuls-chisinau|nevrolog-kishinev|neyrohirurg-kishinev|fizioterapiya-kishinev|gryzha-diska-kishinev|detskiy-nevrolog-kishinev|nevrolog-chekany-kishinev|nevrolog-ryshkanovka-kishinev|nevrolog-botanika-kishinev|nevrolog-buyukany-kishinev|nevrolog-tsentr-kishinev|nevralgiya-neyropatiya-kishinev|epilepsiya-kishinev|lechenie-migreni-kishinev|osteohondroz-kishinev|eeg-kishinev|lechebnyy-massazh-kishinev|diagnostika-amp-kishinev|reoentsefalografiya-kishinev|kinezoterapiya-kishinev|igloukalyvanie-kishinev|elektroforez-amplipuls-kishinev)\//.test(p)) return '0.9';
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
  '- Primary Neurosurgery Consultation (Consultație primară neurochirurg): 500 MDL (follow-up: 400 MDL)',
  '- Physiotherapy session 30 min / Electrosomn / Amplipuls / Electrophoresis: 150 MDL',
  '- Therapeutic massage 60 min: 200 MDL | Electrotherapy + Kinesiotherapy: 250 MDL/hour',
  '- Electroencephalography (EEG): 1600 MDL | Non-invasive AMP 117 indices: 1000 MDL | Electrospondylography: 500 MDL | Brain mapping: 600 MDL | Rheoencephalography: 500 MDL',
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
  `- EEG Chișinău (1600 MDL): ${new URL('/eeg-chisinau/', origin).href}`,
  `- Masaj Terapeutic Chișinău (200 MDL): ${new URL('/masaj-terapeutic-chisinau/', origin).href}`,
  `- Diagnostic AMP 117 indici (1000 MDL): ${new URL('/diagnostic-amp-chisinau/', origin).href}`,
  `- Reoencefalografie REG (500 MDL): ${new URL('/reoencefalografie-chisinau/', origin).href}`,
  `- Kinetoterapie Chișinău (250 MDL): ${new URL('/kinetoterapie-chisinau/', origin).href}`,
  `- Acupunctură & Reflexoterapie (500 MDL): ${new URL('/acupunctura-reflexoterapie-chisinau/', origin).href}`,  `- Electroforeză & Amplipuls (100 MDL / 30 min): ${new URL('/electroforeza-amplipuls-chisinau/', origin).href}`,
  `- Electrospondilografie Chișinău (500 MDL): ${new URL('/electrospondilografie-chisinau/', origin).href}`,
  `- EEG Copii Chișinău (1600 MDL): ${new URL('/eeg-copii-chisinau/', origin).href}`,
  `- Fizioterapie Ciocana (100 MDL / 30 min): ${new URL('/fizioterapie-ciocana-chisinau/', origin).href}`,
  `- Cameră Salină & Băi cu Nămol Saki: ${new URL('/camera-salina-bai-namol-chisinau/', origin).href}`,
  `- Medic Fitoterapeut Chișinău (500 MDL): ${new URL('/fitoterapeut-chisinau/', origin).href}`,
  `- Ecografie & ECG Chișinău (200–250 MDL): ${new URL('/ecografie-ecg-chisinau/', origin).href}`,
  `- Magnetoterapie, Laser & Bioptron (100 MDL / 30 min): ${new URL('/magnetoterapie-laser-chisinau/', origin).href}`,
  `- Ozonoterapie & Darsonval (100 MDL / 30 min): ${new URL('/ozonoterapie-darsonval-chisinau/', origin).href}`,
  `- Distonie Neurovegetativă & Termalgometrie RUNO (500 MDL): ${new URL('/distonie-neurovegetativa-chisinau/', origin).href}`,
  `- Cartografierea Creierului 3D (600 MDL): ${new URL('/cartografierea-creierului-chisinau/', origin).href}`,
  `- Nevralgie de Trigemen & Pareză Facială: ${new URL('/nevralgie-trigemen-pareza-faciala-chisinau/', origin).href}`,
  `- Sindrom de Tunel Carpian & Amorțeli Mâini: ${new URL('/tunel-carpian-amorteli-maini-chisinau/', origin).href}`,
  `- Ticuri Nervoase & Logonevroză Copii: ${new URL('/ticuri-nervoase-balbaiala-copii-chisinau/', origin).href}`,
  `- Centru de Reabilitare Medicală & Neurologică: ${new URL('/reabilitare-medicala-neurologica-chisinau/', origin).href}`,
  `- Scolioză & Postură Copii și Adulți: ${new URL('/scolioza-postura-copii-adulti-chisinau/', origin).href}`,
  `- Pinten Calcanean, Artroză & Umăr Înghețat: ${new URL('/pinten-calcanean-artroza-chisinau/', origin).href}`,
  `- Boala Parkinson, Tremor & Memorie: ${new URL('/boala-parkinson-tremor-memorie-chisinau/', origin).href}`,
  `- Recuperare Post-Operatorie Coloană: ${new URL('/recuperare-postoperatorie-coloana-chisinau/', origin).href}`,
  `- Ghid RMN Protruzie L4–L5 / L5–S1, Hernie Schmorl & Stenoză: ${new URL('/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/', origin).href}`,
  `- Tinitus (Zgomote în Urechi) & Spondiloză Cervicală: ${new URL('/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau/', origin).href}`,
  `- Cefalee de Tensiune vs. Migrenă vs. Cervicogenă: ${new URL('/cefalee-tensiune-vs-migrena-chisinau/', origin).href}`,
  `- Ghid Diagnostic Funcțional (EEG vs. REG vs. AMP vs. ESG): ${new URL('/ghid-diagnostic-functional-eeg-reg-amp-chisinau/', origin).href}`,
  `- Nevralgie Intercostală & Durere între Omoplați (Inimă vs. Coloană): ${new URL('/nevralgie-intercostala-durere-omoplati-chisinau/', origin).href}`,
  `- Hernie Cervicală C5–C6 / C6–C7 & Amețeli: ${new URL('/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/', origin).href}`,
  `- Amorțeli Picioare & Polineuropatie: ${new URL('/amorteli-picioare-polineuropatie-chisinau/', origin).href}`,
  `- Ghid Contraindicații & Siguranță Fizioterapie: ${new URL('/contraindicatii-fizioterapie-siguranta-chisinau/', origin).href}`,
  `- Enurezis Nocturn la Copii (Neuropediatru & Electrosomn): ${new URL('/enurezis-nocturn-copii-neuropediatru-chisinau/', origin).href}`,
  `- Невролог Кишинёв: ${new URL('/ru/nevrolog-kishinev/', origin).href}`,
  `- Нейрохирург Кишинёв: ${new URL('/ru/neyrohirurg-kishinev/', origin).href}`,
  `- Физиотерапия Кишинёв: ${new URL('/ru/fizioterapiya-kishinev/', origin).href}`,
  `- Детский невролог Кишинёв: ${new URL('/ru/detskiy-nevrolog-kishinev/', origin).href}`,
  `- Грыжа диска Кишинёв: ${new URL('/ru/gryzha-diska-kishinev/', origin).href}`,
  `- Невролог Чеканы: ${new URL('/ru/nevrolog-chekany-kishinev/', origin).href}`,
  `- Лечение мигрени Кишинёв: ${new URL('/ru/lechenie-migreni-kishinev/', origin).href}`,
  `- Остеохондроз Кишинёв: ${new URL('/ru/osteohondroz-kishinev/', origin).href}`,
  `- ЭЭГ Кишинёв (1600 MDL): ${new URL('/ru/eeg-kishinev/', origin).href}`,
  `- Лечебный массаж Кишинёв (200 MDL): ${new URL('/ru/lechebnyy-massazh-kishinev/', origin).href}`,
  `- Диагностика АМП 117 (1000 MDL): ${new URL('/ru/diagnostika-amp-kishinev/', origin).href}`,
  `- РЭГ сосудов мозга (500 MDL): ${new URL('/ru/reoentsefalografiya-kishinev/', origin).href}`,
  `- Кинезотерапия Кишинёв (250 MDL): ${new URL('/ru/kinezoterapiya-kishinev/', origin).href}`,
  `- Иглоукалывание Кишинёв (500 MDL): ${new URL('/ru/igloukalyvanie-kishinev/', origin).href}`,  `- Электрофорез и Амплипульс (100 MDL / 30 мин): ${new URL('/ru/elektroforez-amplipuls-kishinev/', origin).href}`,
  `- Электросон и ТЭС-терапия (100 MDL / 30 мин): ${new URL('/ru/elektroson-kishinev/', origin).href}`,
  `- Реабилитация после инсульта: ${new URL('/ru/reabilitatsiya-posle-insulta-kishinev/', origin).href}`,
  `- Боль в спине и ишиас: ${new URL('/ru/boli-v-spine-ishias-kishinev/', origin).href}`,
  `- Лечение головокружения: ${new URL('/ru/golovokruzhenie-kishinev/', origin).href}`,
  `- Лечение бессонницы: ${new URL('/ru/lechenie-bessonnitsy-kishinev/', origin).href}`,
  `- Электроспондилография (500 MDL): ${new URL('/ru/elektrospondilografiya-kishinev/', origin).href}`,
  `- ЭЭГ детям (1600 MDL): ${new URL('/ru/eeg-detyam-kishinev/', origin).href}`,
  `- Физиотерапия Чеканы: ${new URL('/ru/fizioterapiya-chekany-kishinev/', origin).href}`,
  `- Соляная пещера и Грязевые ванны: ${new URL('/ru/solyanaya-peshchera-gryazevye-vanny-kishinev/', origin).href}`,
  `- Врач-фитотерапевт (500 MDL): ${new URL('/ru/fitoterapevt-kishinev/', origin).href}`,
  `- УЗИ и ЭКГ (200–250 MDL): ${new URL('/ru/uzi-ekg-kishinev/', origin).href}`,
  `- Магнитотерапия, Лазер и Биоптрон (100 MDL): ${new URL('/ru/magnitoterapiya-lazer-kishinev/', origin).href}`,
  `- Озонотерапия и Дарсонваль (100 MDL): ${new URL('/ru/ozonoterapiya-darsonval-kishinev/', origin).href}`,
  `- Лечение ВСД и тест РУНО (500 MDL): ${new URL('/ru/vsd-distoniya-kishinev/', origin).href}`,
  `- Картирование мозга (600 MDL): ${new URL('/ru/kartirovanie-mozga-kishinev/', origin).href}`,
  `- Невралгия тройничного нерва и лицевого нерва: ${new URL('/ru/nevralgiya-troynichnogo-nerva-kishinev/', origin).href}`,
  `- Туннельный синдром и онемение рук: ${new URL('/ru/tunnelnyy-sindrom-onemenie-ruk-kishinev/', origin).href}`,
  `- Нервные тики и заикание у детей: ${new URL('/ru/nervnye-tiki-zaikanie-detyam-kishinev/', origin).href}`,
  `- Центр медицинской реабилитации: ${new URL('/ru/meditsinskaya-reabilitatsiya-kishinev/', origin).href}`,
  `- Лечение сколиоза: ${new URL('/ru/lechenie-skolioza-kishinev/', origin).href}`,
  `- Пяточная шпора и артроз: ${new URL('/ru/pyatochnaya-shpora-artroz-kishinev/', origin).href}`,
  `- Болезнь Паркинсона и тремор: ${new URL('/ru/bolezn-parkinsona-tremor-kishinev/', origin).href}`,
  `- Реабилитация после операции на позвоночнике: ${new URL('/ru/reabilitatsiya-posle-operatsii-pozvonochnika-kishinev/', origin).href}`,
  `- Гид МРТ Протрузия L4–L5 / L5–S1, грыжа Шморля и стеноз: ${new URL('/ru/protruziya-diska-l4-l5-l5-s1-stenoz-kishinev/', origin).href}`,
  `- Шум в ушах (тиннитус) и шейный спондилёз: ${new URL('/ru/shum-v-ushah-tinnitus-spondilez-kishinev/', origin).href}`,
  `- Головная боль напряжения vs. Мигрень vs. Шейная: ${new URL('/ru/golovnaya-bol-napryazheniya-vs-migren-kishinev/', origin).href}`,
  `- Гид функциональной диагностики (ЭЭГ vs. РЭГ vs. АМП vs. ЭСГ): ${new URL('/ru/gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev/', origin).href}`,
  `- Межрёберная невралгия и боль между лопатками (Сердце vs. Спина): ${new URL('/ru/mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev/', origin).href}`,
  `- Грыжа шейного отдела C5–C6 / C6–C7 и головокружение: ${new URL('/ru/gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev/', origin).href}`,
  `- Онемение ног и полинейропатия: ${new URL('/ru/onemenie-nog-polineyropatiya-kishinev/', origin).href}`,
  `- Гид противопоказаний к физиотерапии: ${new URL('/ru/protivopokazaniya-k-fizioterapii-kishinev/', origin).href}`,
  `- Ночной энурез у детей (Детский невролог и Электросон): ${new URL('/ru/enurez-u-detey-nevrolog-kishinev/', origin).href}`,
  `- Services: ${new URL('/servicii/', origin).href}`,
  `- Medical Equipment (25 devices): ${new URL('/utilaj/', origin).href}`,
  `- Prices (96 services, MDL/EUR/USD/RON/UAH): ${new URL('/preturi/', origin).href}`,
  `- Patient Tools & Assessments: ${new URL('/aplicatii/', origin).href}`,
  `- FAQ: ${new URL('/intrebari/', origin).href}`,
  `- Blog (96 medical guides): ${new URL('/blog/', origin).href}`,
  `- Contact & Map: ${new URL('/contact/', origin).href}`,
  `- Sitemap: ${new URL('/sitemap.xml', origin).href}`,
  ''
].join('\n');
await writeFile(path.join(output, 'llms.txt'), llmsTxt);
console.log(`Generated sitemap.xml (${urls.length} URLs), robots.txt, and llms.txt from the static export.`);
