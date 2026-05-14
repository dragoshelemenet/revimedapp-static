import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { isLang } from "@/lib/i18n";
import "@/lib/content";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await ctx.params;
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

  db.prepare(`
    UPDATE content_blocks
    SET lang=?, page_key=?, block_key=?, title=?, text=?, image=?, position=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(lang, page_key, block_key, title, text, image, position, published, id);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await ctx.params;
  db.prepare("DELETE FROM content_blocks WHERE id=?").run(id);

  return NextResponse.json({ ok: true });
}
