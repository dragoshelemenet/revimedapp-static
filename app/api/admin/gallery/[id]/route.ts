import { NextResponse } from "next/server";
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
  const image = String(form.get("image") || "").trim();
  const title = String(form.get("title") || "").trim();
  const alt = String(form.get("alt") || title).trim();
  const position = Number(form.get("position") || 0);
  const published = form.get("published") ? 1 : 0;

  db.prepare(`
    UPDATE gallery_items
    SET lang=?, image=?, title=?, alt=?, position=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(lang, image, title, alt, position, published, id);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await ctx.params;
  db.prepare("DELETE FROM gallery_items WHERE id=?").run(id);

  return NextResponse.json({ ok: true });
}
