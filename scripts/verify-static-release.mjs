import {readFileSync,readdirSync,existsSync} from 'node:fs';
import path from 'node:path';
const release=JSON.parse(readFileSync('out/version.json','utf8'));
const errors=[]; let pages=0;
const navigationByLanguage = new Map();
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
for(const file of walk('out').filter(f=>f.endsWith('.html'))){
 const html=readFileSync(file,'utf8'); pages++;
 const nav = html.match(/<nav\b[^>]*>([\s\S]*?)<\/nav>/)?.[1] || '';
 if (!nav.includes('/intrebari')) errors.push('Missing shared Questions navigation: '+file);
 const language = html.match(/<html[^>]*lang="([^"]+)"/)?.[1] || 'ro';
 const links = [...nav.matchAll(/href="([^"]+)"/g)].map(m=>m[1]).join('|');
 const previous = navigationByLanguage.get(language);
 if (previous && previous !== links) errors.push('Inconsistent navigation: '+file);
 navigationByLanguage.set(language, links);
 if ((html.match(/<header\b/g)||[]).length !== 1) errors.push('Expected one shared header: '+file);

 if(!html.includes(`name="revimed-source-version" content="${release.sourceVersion}"`))errors.push('Version mismatch: '+file);
 for(const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)[^"]*"/g)){
  if(match[1].startsWith('//'))continue;
  let url;try{url=decodeURIComponent(match[1].replaceAll('&amp;','&'));}catch{continue;}
  const dest=path.join('out',url);
  if(!existsSync(dest)&&!existsSync(path.join(dest,'index.html'))&&!existsSync(dest+'.html'))errors.push(file+': missing '+url);
 }

 // Permanent Zero-Legal-Risk Guardrails
 if (html.includes('www.youtube.com/embed/') || html.includes('img.icons8.com')) errors.push('Legal/privacy risk (use youtube-nocookie.com/embed/ and local SVG icons): ' + file);
 if (/1pic\.jpg|mediskrin|медискрин|медіскрін|medic internist|psihoterapeut/i.test(html)) errors.push('Legal/scope risk (deleted service or photo found): ' + file);
 if (/\b\d+\s*[–-]\s*\d+\s*(?:mg\/zi|mg\/day|мг\/день|g\/zi|g\/day|г\/день)\b/i.test(html)) errors.push('Legal risk (explicit online dosage prescription found): ' + file);
 if (/cel mai bun neurolog|самый лучший невролог|the best neurologist in the city/i.test(html)) errors.push('Legal risk (unsubstantiated comparative superlative): ' + file);
}
for(const route of ['/blog/','/ru/blog/','/utilaj/','/ru/utilaj/','/termeni-si-conditii/','/en/termeni-si-conditii/','/ru/termeni-si-conditii/','/ua/termeni-si-conditii/','/cookies/','/en/cookies/','/ru/cookies/','/ua/cookies/','/intrebari/','/en/intrebari/','/ru/intrebari/','/ua/intrebari/','/video-uri/','/en/video-uri/','/ru/video-uri/','/ua/video-uri/'])if(!existsSync(path.join('out',route,'index.html')))errors.push('Missing route: '+route);
if(!existsSync('out/sitemap.xml')||!existsSync('out/robots.txt'))errors.push('Missing search files');
for (const tRoute of ['out/termeni-si-conditii/index.html', 'out/en/termeni-si-conditii/index.html', 'out/ru/termeni-si-conditii/index.html', 'out/ua/termeni-si-conditii/index.html']) {
 const tHtml = existsSync(tRoute) ? readFileSync(tRoute, 'utf8') : '';
 if (!tHtml.includes('1011600011964') || !tHtml.includes('wsod.cloud') || !tHtml.includes('022 60 50 60') || !tHtml.includes('112')) {
  errors.push('Legal risk: missing mandatory unified protection (1011600011964, wsod.cloud, 022 60 50 60 photo removal, 112) in ' + tRoute);
 }
}
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exit(1);}
console.log(`Verified ${pages} HTML pages: matching release version, local links/assets, RO/RU sections, zero-legal-risk guardrails, sitemap and robots.`);
