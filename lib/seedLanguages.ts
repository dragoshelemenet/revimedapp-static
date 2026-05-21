import { db } from "@/lib/db";

const langs = ["en", "ru", "ua"] as const;

function tableExists(name: string) {
 return Boolean(db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?").get(name));
}

export function seedMissingLanguages() {
 if (tableExists("services_admin")) {
  const ro = db.prepare("SELECT * FROM services_admin WHERE lang='ro'").all() as any[];
  const insert = db.prepare(`
   INSERT INTO services_admin
   (lang,title,slug,icon,image,short_desc,full_content,keywords,position,published)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const lang of langs) {
   for (const item of ro) {
    const exists = db.prepare("SELECT id FROM services_admin WHERE lang=? AND slug=?").get(lang, item.slug);
    if (!exists) insert.run(lang, item.title, item.slug, item.icon, item.image, item.short_desc, item.full_content, item.keywords, item.position, item.published);
   }
  }
 }

 if (tableExists("prices")) {
  const ro = db.prepare("SELECT * FROM prices WHERE lang='ro'").all() as any[];
  const insert = db.prepare(`
   INSERT INTO prices
   (group_key,lang,category,service,price,note,position,published)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const lang of langs) {
   for (const item of ro) {
    const exists = db.prepare("SELECT id FROM prices WHERE lang=? AND group_key=?").get(lang, item.group_key);
    if (!exists) insert.run(item.group_key, lang, item.category, item.service, item.price, item.note, item.position, item.published);
   }
  }
 }

 if (tableExists("gallery_items")) {
  const ro = db.prepare("SELECT * FROM gallery_items WHERE lang='ro'").all() as any[];
  const insert = db.prepare(`
   INSERT INTO gallery_items
   (lang,image,title,alt,position,published)
   VALUES (?, ?, ?, ?, ?, ?)
  `);

  for (const lang of langs) {
   for (const item of ro) {
    const exists = db.prepare("SELECT id FROM gallery_items WHERE lang=? AND image=? AND position=?").get(lang, item.image, item.position);
    if (!exists) insert.run(lang, item.image, item.title, item.alt, item.position, item.published);
   }
  }
 }

 if (tableExists("posts")) {
  const ro = db.prepare("SELECT * FROM posts WHERE lang='ro'").all() as any[];
  const insert = db.prepare(`
   INSERT OR IGNORE INTO posts
   (lang,title,slug,excerpt,content,image,keywords,published)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const lang of langs) {
   for (const item of ro) {
    const exists = db.prepare("SELECT id FROM posts WHERE lang=? AND slug=?").get(lang, item.slug);
    if (!exists) insert.run(lang, item.title, item.slug, item.excerpt, item.content, item.image, item.keywords, item.published);
   }
  }
 }
}

seedMissingLanguages();
