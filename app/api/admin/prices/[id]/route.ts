import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await ctx.params;
  const form = await req.formData();

  const category = String(form.get("category") || "General").trim();
  const service = String(form.get("service") || "").trim();
  const price = String(form.get("price") || "").trim();
  const note = String(form.get("note") || "").trim();
  const position = Number(form.get("position") || 0);
  const published = form.get("published") ? 1 : 0;

  db.prepare(`
    UPDATE prices
    SET category=?, service=?, price=?, note=?, position=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(category, service, price, note, position, published, id);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await ctx.params;
  db.prepare("DELETE FROM prices WHERE id=?").run(id);
  return NextResponse.json({ ok: true });
}
