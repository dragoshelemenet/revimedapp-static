import type { Lang } from "@/lib/i18n";
import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import type { Lang } from "./i18n";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, "revimed.sqlite");
export const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS posts (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 lang TEXT NOT NULL DEFAULT 'ro',
 title TEXT NOT NULL,
 slug TEXT NOT NULL,
 excerpt TEXT NOT NULL,
 content TEXT NOT NULL,
 image TEXT NOT NULL DEFAULT '/images/medical-bg.jpg',
 keywords TEXT NOT NULL DEFAULT '',
 published INTEGER NOT NULL DEFAULT 1,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(lang, slug)
);

CREATE TABLE IF NOT EXISTS services_admin (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 lang TEXT NOT NULL DEFAULT 'ro',
 title TEXT NOT NULL,
 slug TEXT NOT NULL,
 icon TEXT NOT NULL DEFAULT '⚕️',
 image TEXT NOT NULL DEFAULT '/images/medical-bg.jpg',
 short_desc TEXT NOT NULL,
 full_content TEXT NOT NULL,
 keywords TEXT NOT NULL DEFAULT '',
 position INTEGER NOT NULL DEFAULT 0,
 published INTEGER NOT NULL DEFAULT 1,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(lang, slug)
);

CREATE TABLE IF NOT EXISTS prices (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 group_key TEXT NOT NULL DEFAULT '',
 lang TEXT NOT NULL DEFAULT 'ro',
 category TEXT NOT NULL DEFAULT 'General',
 service TEXT NOT NULL,
 price TEXT NOT NULL,
 note TEXT NOT NULL DEFAULT '',
 position INTEGER NOT NULL DEFAULT 0,
 published INTEGER NOT NULL DEFAULT 1,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gallery_items (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 lang TEXT NOT NULL DEFAULT 'ro',
 image TEXT NOT NULL,
 title TEXT NOT NULL,
 alt TEXT NOT NULL DEFAULT '',
 position INTEGER NOT NULL DEFAULT 0,
 published INTEGER NOT NULL DEFAULT 1,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`);

function hasColumn(table: string, column: string) {
 const cols = db.prepare(`PRAGMA table_info(${table})`).all() as { name: string }[];
 return cols.some((c) => c.name === column);
}

if (!hasColumn("posts", "lang")) db.exec("ALTER TABLE posts ADD COLUMN lang TEXT NOT NULL DEFAULT 'ro'");
if (!hasColumn("services_admin", "lang")) db.exec("ALTER TABLE services_admin ADD COLUMN lang TEXT NOT NULL DEFAULT 'ro'");
if (!hasColumn("prices", "lang")) db.exec("ALTER TABLE prices ADD COLUMN lang TEXT NOT NULL DEFAULT 'ro'");
if (!hasColumn("prices", "group_key")) db.exec("ALTER TABLE prices ADD COLUMN group_key TEXT NOT NULL DEFAULT ''");
if (!hasColumn("prices", "category")) db.exec("ALTER TABLE prices ADD COLUMN category TEXT NOT NULL DEFAULT 'General'");

db.prepare("UPDATE prices SET group_key = 'price_' || id WHERE group_key = '' OR group_key IS NULL").run();

export type Post = {
 id: number;
 lang: Lang;
 title: string;
 slug: string;
 excerpt: string;
 content: string;
 image: string;
 keywords: string;
 published: number;
 created_at: string;
 edited_at: string;
};

export type ServiceAdmin = {
 id: number;
 lang: Lang;
 title: string;
 slug: string;
 icon: string;
 image: string;
 short_desc: string;
 full_content: string;
 keywords: string;
 position: number;
 published: number;
 created_at: string;
 edited_at: string;
};

export type Price = {
 id: number;
 group_key: string;
 lang: Lang;
 category: string;
 service: string;
 price: string;
 note: string;
 position: number;
 published: number;
 created_at: string;
 edited_at: string;
};

const serviceCount = db.prepare("SELECT COUNT(*) as c FROM services_admin").get() as { c: number };
if (serviceCount.c === 0) {
 const insert = db.prepare(`
  INSERT INTO services_admin
  (lang,title,slug,icon,image,short_desc,full_content,keywords,position,published)
  VALUES ('ro',?,?,?,?,?,?,?,?,1)
 `);

 [
  ["Consultații Neurologice","consultatii-neurologice","🧠","/images/about-us.jpg","Evaluări neurologice complete pentru diagnosticarea și gestionarea afecțiunilor neurologice.","Consultațiile neurologice reprezintă un pas esențial pentru diagnosticarea și tratamentul afecțiunilor sistemului nervos central și periferic.","neurolog Chișinău, consultație neurologică",1],
  ["Consultații Neurochirurgie","consultatii-neurochirurgie","⚕️","/images/medical-bg.jpg","Consultații pentru evaluarea necesității intervențiilor chirurgicale și a patologiilor coloanei.","Consultațiile de neurochirurgie sunt disponibile pentru pacienții care necesită evaluarea detaliată a afecțiunilor coloanei și sistemului nervos.","neurochirurg Chișinău, hernie de disc",2],
  ["Fizioterapie și Reabilitare","fizioterapie-si-reabilitare","🏃","/images/medical-bg.jpg","Programe personalizate de reabilitare pentru recuperarea forței, mobilității și funcției.","Fizioterapia și reabilitarea sunt dedicate recuperării fizice, reducerii durerii și îmbunătățirii mobilității.","fizioterapie Chișinău, reabilitare",3],
  ["Diagnostic Funcțional","diagnostic-functional","💓","/images/medical-bg.jpg","Evaluări funcționale pentru sistemul nervos, mușchi, coordonare și funcții asociate.","Diagnosticul funcțional oferă pacienților evaluări pentru înțelegerea funcției sistemului nervos și a recuperării.","diagnostic funcțional, EEG, EMG",4],
  ["Terapie Balneară","terapie-balneara","🌿","/images/medical-bg.jpg","Tratamente balneare, nămol, hidroterapie și terapii complementare.","Terapia balneară include tratamente naturale și complementare pentru relaxare și recuperare.","terapie balneară, hidroterapie",5],
  ["Electroterapie","electroterapie","🎵","/images/medical-bg.jpg","Electrostimulare și proceduri electroterapeutice pentru durere, mușchi și recuperare.","Electroterapia folosește stimuli electrici și proceduri moderne pentru reducerea durerii și recuperare.","electroterapie, electrostimulare",6]
 ].forEach((row) => insert.run(...row));
}

const priceCount = db.prepare("SELECT COUNT(*) as c FROM prices").get() as { c: number };
if (priceCount.c === 0) {
 const insert = db.prepare(`
  INSERT INTO prices (group_key, lang, category, service, price, note, position, published)
  VALUES (?, 'ro', ?, ?, ?, ?, ?, 1)
 `);

 const prices: [string,string,string,string,string,number][] = [
  ["neuro_1","Consultații Neurologice","Consultație primară cu neurolog","500 MDL","Evaluare neurologică inițială",1],
  ["neuro_2","Consultații Neurologice","Consultație repetată cu neurolog","400 MDL","Consultație de control",2],
  ["neuro_3","Consultații Neurologice","Electroencefalografie (EEG)","1000 MDL","Evaluarea activității electrice cerebrale",3],
  ["neuro_4","Consultații Neurologice","Electromiografie (EMG)","800 MDL","Evaluarea nervilor și mușchilor",4],
  ["neuro_5","Consultații Neurologice","Imagistică IRM","2000 MDL","Investigație imagistică",5],
  ["neuro_6","Consultații Neurologice","Tomografie CT","1500 MDL","Investigație imagistică",6],
  ["neurochir_1","Consultații Neurochirurgie","Consultație primară cu chirurg","300 MDL","Evaluare inițială",8],
  ["neurochir_2","Consultații Neurochirurgie","Consultație repetată cu chirurg","300 MDL","Consultație de control",9],
  ["neurochir_3","Consultații Neurochirurgie","Planificare pre-operatorie","400 MDL","Recomandări și planificare",10],
  ["fizio_1","Fizioterapie și Reabilitare","Ședință de fizioterapie (30 min)","150 MDL","Ședință individuală",14],
  ["fizio_2","Fizioterapie și Reabilitare","Masaj terapeutic (60 min)","200 MDL","Masaj terapeutic",15],
  ["fizio_3","Fizioterapie și Reabilitare","Electroterapie combinată","150 MDL","Procedură combinată",16],
  ["diag_1","Diagnostic Funcțional","Teste funcționale neurologice","500 MDL","Evaluare funcțională",23],
  ["diag_2","Diagnostic Funcțional","Evaluări cognitive","700 MDL","Evaluare funcții cognitive",24],
  ["balneo_1","Terapie Balneară","Băi curative cu nămol","150 MDL/sesiune","Tratament balnear",27],
  ["balneo_2","Terapie Balneară","Hidroterapie","200 MDL/oră","Terapie cu apă",28],
  ["electro_1","Electroterapie","Electrostimulare musculară","150 MDL/oră","Activare musculară",33],
  ["electro_2","Electroterapie","Terapie cu ultrasunete (30 min)","180 MDL","Ultrasunete terapeutice",36]
 ];

 prices.forEach((p) => insert.run(...p));
}

export function getPublishedPosts(lang: Lang = "ro") {
 return db.prepare("SELECT * FROM posts WHERE published = 1 AND lang = ? ORDER BY datetime(created_at) DESC").all(lang) as Post[];
}

export function getAllPosts(lang?: Lang) {
 if (lang) return db.prepare("SELECT * FROM posts WHERE lang = ? ORDER BY datetime(created_at) DESC").all(lang) as Post[];
 return db.prepare("SELECT * FROM posts ORDER BY lang ASC, datetime(created_at) DESC").all() as Post[];
}

export function getPostBySlug(slug: string, lang: Lang = "ro") {
 return db.prepare("SELECT * FROM posts WHERE slug = ? AND lang = ? AND published = 1").get(slug, lang) as Post | undefined;
}

export function getAllPrices(lang?: Lang) {
 if (lang) return db.prepare("SELECT * FROM prices WHERE lang = ? ORDER BY position ASC, id ASC").all(lang) as Price[];
 return db.prepare("SELECT * FROM prices ORDER BY lang ASC, position ASC, id ASC").all() as Price[];
}

export function getPublishedPrices(lang: Lang = "ro") {
 return db.prepare("SELECT * FROM prices WHERE published = 1 AND lang = ? ORDER BY position ASC, id ASC").all(lang) as Price[];
}

export function getAllServicesAdmin(lang?: Lang) {
 if (lang) return db.prepare("SELECT * FROM services_admin WHERE lang = ? ORDER BY position ASC, id ASC").all(lang) as ServiceAdmin[];
 return db.prepare("SELECT * FROM services_admin ORDER BY lang ASC, position ASC, id ASC").all() as ServiceAdmin[];
}

export function getPublishedServicesAdmin(lang: Lang = "ro") {
 return db.prepare("SELECT * FROM services_admin WHERE published = 1 AND lang = ? ORDER BY position ASC, id ASC").all(lang) as ServiceAdmin[];
}

export function getServiceBySlug(slug: string, lang: Lang = "ro") {
 return db.prepare("SELECT * FROM services_admin WHERE slug = ? AND lang = ? AND published = 1").get(slug, lang) as ServiceAdmin | undefined;
}


export type GalleryItem = {
 id: number;
 lang: Lang;
 image: string;
 title: string;
 alt: string;
 position: number;
 published: number;
 created_at: string;
 edited_at: string;
};

const galleryCount = db.prepare("SELECT COUNT(*) as c FROM gallery_items").get() as { c: number };
if (galleryCount.c === 0) {
 const insertGallery = db.prepare(`
  INSERT INTO gallery_items (lang, image, title, alt, position, published)
  VALUES ('ro', ?, ?, ?, ?, 1)
 `);

 [
  ["/images/2pic.jpg", "Recepție Revimed PLUS+", "Recepție și spațiu de așteptare Revimed PLUS+", 1],
  ["/images/1pic.jpg", "Angajați prietenoși", "Echipă prietenoasă Revimed PLUS+", 2],
  ["/images/3.jpg", "Reabilitare medicală", "Proceduri de reabilitare medicală", 3],
  ["/images/pre.jpg", "Sală de terapie", "Spațiu pentru terapie și recuperare", 4],
  ["/images/pre1.jpg", "Proceduri terapeutice", "Proceduri medicale și recuperare", 5],
  ["/images/31.jpg", "Doctor Igor Revenco", "Doctor Igor Revenco - Centrul Medical Revimed PLUS+", 6]
 ].forEach((row) => insertGallery.run(...row));
}

export function getAllGalleryItems(lang?: Lang) {
 if (lang) return db.prepare("SELECT * FROM gallery_items WHERE lang = ? ORDER BY position ASC, id ASC").all(lang) as GalleryItem[];
 return db.prepare("SELECT * FROM gallery_items ORDER BY lang ASC, position ASC, id ASC").all() as GalleryItem[];
}

export function getPublishedGalleryItems(lang: Lang = "ro") {
 return db.prepare("SELECT * FROM gallery_items WHERE lang = ? AND published = 1 ORDER BY position ASC, id ASC").all(lang) as GalleryItem[];
}

export function getPublishedPostsSmart(lang: Lang = "ro") {
  return db
    .prepare("SELECT * FROM posts WHERE published = 1 AND lang = ? ORDER BY id DESC")
    .all(lang) as any[];
}

export function getAllPostsSmart(lang: Lang = "ro") {
 const rows = getAllPosts(lang);
 if (rows.length || lang === "ro") return rows;
 return getAllPosts("ro");
}

export function getPostBySlugSmart(slug: string, lang: Lang = "ro") {
  return db
    .prepare("SELECT * FROM posts WHERE published = 1 AND slug = ? AND lang = ? LIMIT 1")
    .get(slug, lang) as any | null;
}

export function getPublishedPricesSmart(lang: Lang = "ro") {
 const rows = getPublishedPrices(lang);
 if (rows.length || lang === "ro") return rows;
 return getPublishedPrices("ro");
}

export function getPublishedServicesSmart(lang: Lang = "ro") {
 const rows = getPublishedServicesAdmin(lang);
 if (rows.length || lang === "ro") return rows;
 return getPublishedServicesAdmin("ro");
}

export function getServiceBySlugSmart(slug: string, lang: Lang = "ro") {
 return getServiceBySlug(slug, lang) || getServiceBySlug(slug, "ro");
}

const iconMigrationMap: Record<string, string> = {
 "🧠": "https://img.icons8.com/color/96/brain.png",
 "⚕️": "https://img.icons8.com/color/96/medical-doctor.png",
 "🏃": "https://img.icons8.com/color/96/physical-therapy.png",
 "💓": "https://img.icons8.com/color/96/heart-health.png",
 "🌿": "https://img.icons8.com/color/96/spa.png",
 "🎵": "https://img.icons8.com/color/96/electrical.png"
};

try {
 const updateIcon = db.prepare("UPDATE services_admin SET icon = ? WHERE icon = ?");
 for (const [emoji, iconUrl] of Object.entries(iconMigrationMap)) {
  updateIcon.run(iconUrl, emoji);
 }
} catch {}

try {
 db.prepare("UPDATE services_admin SET icon = ? WHERE icon = ?").run(
  "https://img.icons8.com/color/96/electrical.png",
  "https://img.icons8.com/color/96/electrotherapy.png"
 );
} catch {}
