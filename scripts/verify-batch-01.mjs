import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const root = process.cwd();
const read = (file) => readFile(path.join(root, file), 'utf8');
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(file));
    else if (entry.name === 'index.html' && !file.includes('_not-found')) result.push(file);
  }
  return result;
}
const pages = await walk(path.join(root, 'out'));
assert(pages.length > 0, 'Run npm run build before verification.');
const sitemap = await read('out/sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, new Set(urls).size, 'Duplicate sitemap URLs');
assert(!sitemap.includes('<lastmod>'), 'Do not use build time as modification time');
const origin = new URL(urls[0]).origin;
for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin);
  assert(parsed.pathname.endsWith('/'), `Missing trailing slash: ${url}`);
  await access(path.join(root, 'out', decodeURIComponent(parsed.pathname), 'index.html'));
}
let checked = 0;
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const route = '/' + path.relative(path.join(root, 'out'), path.dirname(file)).split(path.sep).filter(Boolean).join('/');
  const placeholder = /^\/(en|ru|ua)\/video-uri$/.test(route);
  const noindex = /<meta\b(?=[^>]*name="(?:robots|googlebot)")(?=[^>]*content="[^"]*\bnoindex\b)[^>]*>/i.test(html);
  const url = `${origin}${route === '/' ? '/' : `${route}/`}`;
  assert.equal(urls.includes(url), !placeholder && !noindex, `Sitemap coverage: ${route}`);
  if (!noindex) {
  const blocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const clinics = blocks.filter((data) => [data['@type']].flat().includes('MedicalClinic'));
  assert.equal(clinics.length, 1, `Duplicate/missing clinic: ${file}`);
  assert.equal(clinics[0]['@id'], `${origin}/#medical-clinic`);
  assert(!('openingHours' in clinics[0]) && !('openingHoursSpecification' in clinics[0]), 'Unconfirmed hours');
  assert(!blocks.some((data) => data.potentialAction?.['@type'] === 'SearchAction'), 'Unimplemented search action');
  }
  checked++;
}
const home = await read('out/index.html');
assert(home.includes(`rel="canonical" href="${origin}/"`));
assert(home.includes('hrefLang="x-default"') || home.includes('hreflang="x-default"'));
assert(!home.includes('content="' + origin + '/images/hero-bg.jpg"'));
assert((await read('out/robots.txt')).includes(`Sitemap: ${origin}/sitemap.xml`));

// Exercise the real shared serializer against a script-closing payload.
// TypeScript transpilation is in memory; no build artefacts are added to the repo.
const ts = require('typescript');
const modules = new Map();
async function loadTs(file) {
  if (modules.has(file)) return modules.get(file);
  const source = await read(file);
  const dependencies = {};
  for (const match of source.matchAll(/from "(@\/lib\/[^"\n]+)"/g)) dependencies[match[1]] = await loadTs(match[1].replace('@/', '') + '.ts');
  const module = { exports: {} };
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(compiled, { module, exports: module.exports, process, URL, require: (name) => dependencies[name] || require(name) }, { filename: file });
  modules.set(file, module.exports);
  return module.exports;
}
const seo = await loadTs('lib/seo.ts');
const payload = { text: '</script><script>alert("test")</script> & <tag>' };
const serialized = seo.JsonLd({ data: payload }).props.dangerouslySetInnerHTML.__html;
assert(!serialized.includes('<'));
assert.equal(JSON.parse(serialized).text, payload.text);
console.log(`PASS: ${checked} pages; ${urls.length} valid sitemap URLs; clinic schema, robots, homepage metadata and JSON-LD escaping.`);
