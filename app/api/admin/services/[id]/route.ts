import { NextResponse } from "next/server";
import slugify from "slugify";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { isLang } from "@/lib/i18n";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await ctx.params;
  const form = await req.formData();

  const langRaw = String(form.get("lang") || "ro");
  const lang = isLang(langRaw) ? langRaw : "ro";
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

  db.prepare(`
    UPDATE services_admin
    SET lang=?, title=?, slug=?, icon=?, image=?, short_desc=?, full_content=?, keywords=?, position=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(lang, title, slug, icon, image, short_desc, full_content, keywords, position, published, id);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });
  const { id } = await ctx.params;
  db.prepare("DELETE FROM services_admin WHERE id=?").run(id);
  return NextResponse.json({ ok: true });
}
