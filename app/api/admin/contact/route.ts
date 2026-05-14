import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { isLang } from "@/lib/i18n";
import "@/lib/content";

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 401 });

  const form = await req.formData();
  const langRaw = String(form.get("lang") || "ro");
  const lang = isLang(langRaw) ? langRaw : "ro";

  const fixed_phone = String(form.get("fixed_phone") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const phone_alt = String(form.get("phone_alt") || "").trim();
  const email = String(form.get("email") || "").trim();
  const address = String(form.get("address") || "").trim();
  const hours_week = String(form.get("hours_week") || "").trim();
  const hours_weekend = String(form.get("hours_weekend") || "").trim();
  const bus = String(form.get("bus") || "").trim();
  const trolleybus = String(form.get("trolleybus") || "").trim();
  const tram = String(form.get("tram") || "").trim();
  const image_one = String(form.get("image_one") || "").trim();
  const image_two = String(form.get("image_two") || "").trim();
  const map_link = String(form.get("map_link") || "").trim();
  const map_embed = String(form.get("map_embed") || "").trim();

  db.prepare(`
    INSERT INTO contact_content
    (lang, fixed_phone, phone, phone_alt, email, address, hours_week, hours_weekend, bus, trolleybus, tram, image_one, image_two, map_link, map_embed)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(lang) DO UPDATE SET
      fixed_phone=excluded.fixed_phone,
      phone=excluded.phone,
      phone_alt=excluded.phone_alt,
      email=excluded.email,
      address=excluded.address,
      hours_week=excluded.hours_week,
      hours_weekend=excluded.hours_weekend,
      bus=excluded.bus,
      trolleybus=excluded.trolleybus,
      tram=excluded.tram,
      image_one=excluded.image_one,
      image_two=excluded.image_two,
      map_link=excluded.map_link,
      map_embed=excluded.map_embed,
      edited_at=CURRENT_TIMESTAMP
  `).run(
    lang,
    fixed_phone,
    phone,
    phone_alt,
    email,
    address,
    hours_week,
    hours_weekend,
    bus,
    trolleybus,
    tram,
    image_one,
    image_two,
    map_link,
    map_embed
  );

  return NextResponse.json({ ok: true });
}
