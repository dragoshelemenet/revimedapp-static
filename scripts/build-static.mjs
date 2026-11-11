import { rmSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
// Only disposable build directories; never source or database files.
rmSync('.next', { recursive: true, force: true });
rmSync('out', { recursive: true, force: true });
const hash = createHash('sha256');
function walk(dir) {
 return readdirSync(dir, {withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(e => {
  const p = path.join(dir,e.name); return e.isDirectory() ? walk(p) : e.isFile() ? [p] : [];
 });
}
for (const dir of ['app','components','lib','content','styles','scripts']) {
 for (const file of walk(dir)) hash.update(file).update(readFileSync(file));
}
for (const file of ['package.json', 'package-lock.json', 'next.config.mjs']) hash.update(file).update(readFileSync(file));
for (const file of walk('public')) hash.update(file).update(readFileSync(file));
const release = { sourceVersion: hash.digest('hex').slice(0,20), builtAt: new Date().toISOString() };
for (const args of [['node_modules/next/dist/bin/next','build'], ['scripts/generate-search-files.mjs']]) {
 const result = spawnSync(process.execPath,args,{stdio:'inherit'});
 if (result.status !== 0) { rmSync('out',{recursive:true,force:true}); process.exit(result.status || 1); }
}
for (const file of walk('out').filter(p=>p.endsWith('.html'))) {
 const html=readFileSync(file,'utf8');
 writeFileSync(file,html.replace('</head>',`<meta name="revimed-source-version" content="${release.sourceVersion}"/></head>`));
}
writeFileSync('out/version.json', JSON.stringify(release,null,2)+'\n');
const checked=spawnSync(process.execPath,['scripts/verify-static-release.mjs'],{stdio:'inherit'});
if(checked.status!==0) {rmSync('out',{recursive:true,force:true});process.exit(checked.status||1);}
console.log('Release ready:', release.sourceVersion, '— deploy the entire out directory.');
