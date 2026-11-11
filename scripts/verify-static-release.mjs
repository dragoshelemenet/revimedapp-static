import {readFileSync,readdirSync,existsSync} from 'node:fs';
import path from 'node:path';
const release=JSON.parse(readFileSync('out/version.json','utf8'));
const errors=[]; let pages=0;
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
for(const file of walk('out').filter(f=>f.endsWith('.html'))){
 const html=readFileSync(file,'utf8'); pages++;
 if(!html.includes(`name="revimed-source-version" content="${release.sourceVersion}"`))errors.push('Version mismatch: '+file);
 for(const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)[^"]*"/g)){
  if(match[1].startsWith('//'))continue;
  let url;try{url=decodeURIComponent(match[1].replaceAll('&amp;','&'));}catch{continue;}
  const dest=path.join('out',url);
  if(!existsSync(dest)&&!existsSync(path.join(dest,'index.html'))&&!existsSync(dest+'.html'))errors.push(file+': missing '+url);
 }
}
for(const route of ['/blog/','/ru/blog/','/utilaj/','/ru/utilaj/'])if(!existsSync(path.join('out',route,'index.html')))errors.push('Missing route: '+route);
if(!existsSync('out/sitemap.xml')||!existsSync('out/robots.txt'))errors.push('Missing search files');
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exit(1);}
console.log(`Verified ${pages} HTML pages: matching release version, local links/assets, RO/RU sections, sitemap and robots.`);
