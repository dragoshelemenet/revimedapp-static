import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { isLang } from "@/lib/i18n";

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const form = await req.formData();

  const langRaw = String(form.get("lang") || "ro");
  const lang = isLang(langRaw) ? langRaw : "ro";
  const image = String(form.get("image") || "").trim();
  const title = String(form.get("title") || "").trim();
  const alt = String(form.get("alt") || title).trim();
  const position = Number(form.get("position") || 0);
  const published = form.get("published") ? 1 : 0;

  if (!image || !title) return NextResponse.json({ ok: false }, { status: 400 });

  db.prepare(`
    INSERT INTO gallery_items (lang, image, title, alt, position, published)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(lang, image, title, alt, position, published);

  return NextResponse.json({ ok: true });
}
