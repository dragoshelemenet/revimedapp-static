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
  const group_key = String(form.get("group_key") || `price_${Date.now()}`).trim();
  const category = String(form.get("category") || "General").trim();
  const service = String(form.get("service") || "").trim();
  const price = String(form.get("price") || "").trim();
  const note = String(form.get("note") || "").trim();
  const position = Number(form.get("position") || 0);
  const published = form.get("published") ? 1 : 0;

  if (!service || !price) return NextResponse.json({ ok: false }, { status: 400 });

  db.prepare(`
    INSERT INTO prices (group_key, lang, category, service, price, note, position, published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(group_key, lang, category, service, price, note, position, published);

  db.prepare("UPDATE prices SET price=? WHERE group_key=?").run(price, group_key);

  return NextResponse.json({ ok: true });
}
