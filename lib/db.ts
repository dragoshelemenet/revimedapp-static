import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, "revimed.sqlite");
export const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL DEFAULT '/images/medical-bg.jpg',
  keywords TEXT NOT NULL DEFAULT '',
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS prices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  service TEXT NOT NULL,
  price TEXT NOT NULL,
  note TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`);

const count = db.prepare("SELECT COUNT(*) as c FROM prices").get() as { c: number };
if (count.c === 0) {
  const seed = db.prepare("INSERT INTO prices (service, price, note, position, published) VALUES (?, ?, ?, ?, 1)");
  [
    ["Neurological consult", "La solicitare", "Consultație specializată", 1],
    ["Neuro-surgery consult", "La solicitare", "Consultație specializată", 2],
    ["Fizionarație și Reabilitare", "La solicitare", "Program personalizat", 3],
    ["Functional diagnostics", "La solicitare", "Evaluare funcțională", 4],
    ["Bahmeră Therapy", "La solicitare", "Terapie complementară", 5],
    ["Electrostimulation", "La solicitare", "Procedură terapeutică", 6]
  ].forEach((row) => seed.run(...row));
}

export type Post = {
  id: number;
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

export type Price = {
  id: number;
  service: string;
  price: string;
  note: string;
  position: number;
  published: number;
  created_at: string;
  edited_at: string;
};

export function getPublishedPosts() {
  return db.prepare("SELECT * FROM posts WHERE published = 1 ORDER BY datetime(created_at) DESC").all() as Post[];
}

export function getAllPosts() {
  return db.prepare("SELECT * FROM posts ORDER BY datetime(created_at) DESC").all() as Post[];
}

export function getPostBySlug(slug: string) {
  return db.prepare("SELECT * FROM posts WHERE slug = ? AND published = 1").get(slug) as Post | undefined;
}

export function getAllPrices() {
  return db.prepare("SELECT * FROM prices ORDER BY position ASC, id ASC").all() as Price[];
}

export function getPublishedPrices() {
  return db.prepare("SELECT * FROM prices WHERE published = 1 ORDER BY position ASC, id ASC").all() as Price[];
}
