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
  const group_key = String(form.get("group_key") || "").trim();
  const category = String(form.get("category") || "General").trim();
  const service = String(form.get("service") || "").trim();
  const price = String(form.get("price") || "").trim();
  const note = String(form.get("note") || "").trim();
  const position = Number(form.get("position") || 0);
  const published = form.get("published") ? 1 : 0;

  db.prepare(`
    UPDATE prices
    SET lang=?, group_key=?, category=?, service=?, price=?, note=?, position=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(lang, group_key, category, service, price, note, position, published, id);

  if (group_key) db.prepare("UPDATE prices SET price=? WHERE group_key=?").run(price, group_key);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });
  const { id } = await ctx.params;
  db.prepare("DELETE FROM prices WHERE id=?").run(id);
  return NextResponse.json({ ok: true });
}
