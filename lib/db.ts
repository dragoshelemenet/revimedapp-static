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
  image TEXT NOT NULL DEFAULT '/images/blog-default.jpg',
  keywords TEXT NOT NULL DEFAULT '',
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`);

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

export function getPublishedPosts() {
  return db.prepare("SELECT * FROM posts WHERE published = 1 ORDER BY datetime(created_at) DESC").all() as Post[];
}

export function getAllPosts() {
  return db.prepare("SELECT * FROM posts ORDER BY datetime(created_at) DESC").all() as Post[];
}

export function getPostBySlug(slug: string) {
  return db.prepare("SELECT * FROM posts WHERE slug = ? AND published = 1").get(slug) as Post | undefined;
}

export function getPostById(id: number) {
  return db.prepare("SELECT * FROM posts WHERE id = ?").get(id) as Post | undefined;
}
