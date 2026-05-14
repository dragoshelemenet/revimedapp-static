import { NextResponse } from "next/server";
import slugify from "slugify";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await ctx.params;
  const form = await req.formData();

  const title = String(form.get("title") || "").trim();
  const cleanSlug = String(form.get("slug") || "").trim();
  const slug = cleanSlug || slugify(title, { lower: true, strict: true });
  const excerpt = String(form.get("excerpt") || "").trim();
  const content = String(form.get("content") || "").trim();
  const image = String(form.get("image") || "/images/blog-default.jpg").trim();
  const keywords = String(form.get("keywords") || "").trim();
  const published = form.get("published") ? 1 : 0;

  db.prepare(`
    UPDATE posts
    SET title=?, slug=?, excerpt=?, content=?, image=?, keywords=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(title, slug, excerpt, content, image, keywords, published, id);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await ctx.params;
  db.prepare("DELETE FROM posts WHERE id=?").run(id);
  return NextResponse.json({ ok: true });
}
