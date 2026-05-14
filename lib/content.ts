import { db } from "@/lib/db";
import type { Lang } from "@/lib/i18n";

db.exec(`
CREATE TABLE IF NOT EXISTS contact_content (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lang TEXT NOT NULL DEFAULT 'ro' UNIQUE,
  fixed_phone TEXT NOT NULL DEFAULT '(022) 60-50-60',
  phone TEXT NOT NULL DEFAULT '(+373) 069773816',
  phone_alt TEXT NOT NULL DEFAULT '(+373) 079422908',
  email TEXT NOT NULL DEFAULT 'doctor-revenco@ya.ru',
  address TEXT NOT NULL DEFAULT 'str. Mircea cel Bătrân 13/2, Sector Ciocana, Chișinău',
  hours_week TEXT NOT NULL DEFAULT 'De luni până vineri: 09:00 - 16:00',
  hours_weekend TEXT NOT NULL DEFAULT 'Weekend: Închis',
  bus TEXT NOT NULL DEFAULT '113, 23, 5',
  trolleybus TEXT NOT NULL DEFAULT '12, 23, 24',
  tram TEXT NOT NULL DEFAULT '7, 10',
  image_one TEXT NOT NULL DEFAULT '/images/6.jpg',
  image_two TEXT NOT NULL DEFAULT '/images/1.jpg',
  map_link TEXT NOT NULL DEFAULT 'https://www.google.com/maps/place/REVIMED+-+Neurologie,+Diagnostic+Functional+si+Reabilitare,Salina+SPA./@47.0477497,28.8842622,17z/data=!3m1!4b1!4m5!3m4!1s0x40c97c92cf964149:0x39935b1c7bfd85fa!8m2!3d47.0477461!4d28.8887469?hl=en',
  map_embed TEXT NOT NULL DEFAULT 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.616804240469!2d28.88426222989308!3d47.047749667734834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c92cf964149%3A0x39935b1c7bfd85fa!2sREVIMED%20-%20Neurologie%2C%20Diagnostic%20Functional%20si%20Reabilitare%2CSalina%20SPA.!5e0!3m2!1sen!2sus!4v1674255096722!5m2!1sen!2sus',
  edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS content_blocks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lang TEXT NOT NULL DEFAULT 'ro',
  page_key TEXT NOT NULL,
  block_key TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT '',
  text TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 1,
  edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(lang, page_key, block_key)
);
`);

const langs: Lang[] = ["ro", "en", "ru", "ua"];

for (const lang of langs) {
  db.prepare("INSERT OR IGNORE INTO contact_content (lang) VALUES (?)").run(lang);
}

const defaults = [
  ["ro", "contact", "hero", "Contactați-ne", "Adresă, telefon, program, transport și hartă pentru Centrul Medical Revimed PLUS+.", ""],
  ["ro", "galerie", "hero", "Galerie Revimed PLUS+", "Imagini din centru și video-uri despre proceduri, recuperare și activitatea Revimed PLUS+.", ""],
  ["ro", "preturi", "hero", "Prețuri Revimed PLUS+", "Alege categoria și verifică rapid serviciul. Pentru confirmare și programare, contactează centrul.", ""],
  ["ro", "servicii", "hero", "Servicii medicale", "Consultații, diagnostic, terapii și reabilitare organizate clar.", ""],
  ["ro", "aplicatii", "hero", "Teste și Instrumente", "Instrumente educaționale curate, rapide și ușor de folosit.", ""],
  ["en", "contact", "hero", "Contact us", "Address, phone, schedule, transport and map for Revimed PLUS+ Medical Center.", ""],
  ["ru", "contact", "hero", "Контакты", "Адрес, телефон, график, транспорт и карта медицинского центра Revimed PLUS+.", ""],
  ["ua", "contact", "hero", "Контакти", "Адреса, телефон, графік, транспорт і карта медичного центру Revimed PLUS+.", ""]
];

const insertBlock = db.prepare(`
  INSERT OR IGNORE INTO content_blocks (lang, page_key, block_key, title, text, image)
  VALUES (?, ?, ?, ?, ?, ?)
`);
defaults.forEach((row) => insertBlock.run(...row));

export type ContactContent = {
  id: number;
  lang: Lang;
  fixed_phone: string;
  phone: string;
  phone_alt: string;
  email: string;
  address: string;
  hours_week: string;
  hours_weekend: string;
  bus: string;
  trolleybus: string;
  tram: string;
  image_one: string;
  image_two: string;
  map_link: string;
  map_embed: string;
  edited_at: string;
};

export type ContentBlock = {
  id: number;
  lang: Lang;
  page_key: string;
  block_key: string;
  title: string;
  text: string;
  image: string;
  position: number;
  published: number;
  edited_at: string;
};

export function getContactContent(lang: Lang = "ro") {
  return db.prepare("SELECT * FROM contact_content WHERE lang = ?").get(lang) as ContactContent;
}

export function getAllContactContent() {
  return db.prepare("SELECT * FROM contact_content ORDER BY lang ASC").all() as ContactContent[];
}

export function getContentBlock(lang: Lang = "ro", pageKey: string, blockKey: string) {
  return db.prepare("SELECT * FROM content_blocks WHERE lang = ? AND page_key = ? AND block_key = ?")
    .get(lang, pageKey, blockKey) as ContentBlock | undefined;
}

export function getAllContentBlocks(lang?: Lang) {
  if (lang) {
    return db.prepare("SELECT * FROM content_blocks WHERE lang = ? ORDER BY page_key ASC, position ASC, id ASC")
      .all(lang) as ContentBlock[];
  }

  return db.prepare("SELECT * FROM content_blocks ORDER BY lang ASC, page_key ASC, position ASC, id ASC")
    .all() as ContentBlock[];
}

export function getContactContentSmart(lang: Lang = "ro") {
  return getContactContent(lang) || getContactContent("ro");
}

export function getContentBlockSmart(lang: Lang = "ro", pageKey: string, blockKey: string) {
  return getContentBlock(lang, pageKey, blockKey) || getContentBlock("ro", pageKey, blockKey);
}

export function getPublishedGalleryItemsSmart(lang: Lang = "ro") {
  const rows = db.prepare("SELECT * FROM gallery_items WHERE lang = ? AND published = 1 ORDER BY position ASC, id ASC").all(lang) as any[];
  if (rows.length || lang === "ro") return rows;
  return db.prepare("SELECT * FROM gallery_items WHERE lang = 'ro' AND published = 1 ORDER BY position ASC, id ASC").all() as any[];
}
