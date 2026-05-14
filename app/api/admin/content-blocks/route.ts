import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { isLang } from "@/lib/i18n";
import "@/lib/content";

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const form = await req.formData();

  const langRaw = String(form.get("lang") || "ro");
  const lang = isLang(langRaw) ? langRaw : "ro";
  const page_key = String(form.get("page_key") || "").trim();
  const block_key = String(form.get("block_key") || "hero").trim();
  const title = String(form.get("title") || "").trim();
  const text = String(form.get("text") || "").trim();
  const image = String(form.get("image") || "").trim();
  const position = Number(form.get("position") || 0);
  const published = form.get("published") ? 1 : 0;

  if (!page_key || !block_key) return NextResponse.json({ ok: false }, { status: 400 });

  db.prepare(`
    INSERT INTO content_blocks (lang, page_key, block_key, title, text, image, position, published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(lang, page_key, block_key) DO UPDATE SET
      title=excluded.title,
      text=excluded.text,
      image=excluded.image,
      position=excluded.position,
      published=excluded.published,
      edited_at=CURRENT_TIMESTAMP
  `).run(lang, page_key, block_key, title, text, image, position, published);

  return NextResponse.json({ ok: true });
}
