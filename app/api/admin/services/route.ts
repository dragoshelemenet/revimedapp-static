import { NextResponse } from "next/server";
import slugify from "slugify";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const form = await req.formData();

  const title = String(form.get("title") || "").trim();
  const cleanSlug = String(form.get("slug") || "").trim();
  const slug = cleanSlug || slugify(title, { lower: true, strict: true });
  const icon = String(form.get("icon") || "⚕️").trim();
  const image = String(form.get("image") || "/images/medical-bg.jpg").trim();
  const short_desc = String(form.get("short_desc") || "").trim();
  const full_content = String(form.get("full_content") || "").trim();
  const keywords = String(form.get("keywords") || "").trim();
  const position = Number(form.get("position") || 0);
  const published = form.get("published") ? 1 : 0;

  if (!title || !slug || !short_desc || !full_content) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  db.prepare(`
    INSERT INTO services_admin
    (title, slug, icon, image, short_desc, full_content, keywords, position, published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(title, slug, icon, image, short_desc, full_content, keywords, position, published);

  return NextResponse.json({ ok: true });
}
