import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const form = await req.formData();
  const category = String(form.get("category") || "General").trim();
  const service = String(form.get("service") || "").trim();
  const price = String(form.get("price") || "").trim();
  const note = String(form.get("note") || "").trim();
  const position = Number(form.get("position") || 0);
  const published = form.get("published") ? 1 : 0;

  if (!service || !price) return NextResponse.json({ ok: false }, { status: 400 });

  db.prepare(`
    INSERT INTO prices (category, service, price, note, position, published)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(category, service, price, note, position, published);

  return NextResponse.json({ ok: true });
}
