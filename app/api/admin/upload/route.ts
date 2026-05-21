import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import path from "node:path";
import fs from "node:fs/promises";

export const runtime = "nodejs";

function safeName(name: string) {
 const ext = path.extname(name).toLowerCase();
 const base = path.basename(name, ext).toLowerCase().replace(/[^a-z0-9-_]+/g, "-").replace(/-+/g, "-");
 return `${base || "file"}-${Date.now()}${ext}`;
}

export async function POST(req: Request) {
 const admin = await requireAdmin();
 if (!admin) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

 const form = await req.formData();
 const file = form.get("file");

 if (!(file instanceof File)) {
  return NextResponse.json({ ok: false, error: "No file" }, { status: 400 });
 }

 if (!file.type.startsWith("image/")) {
  return NextResponse.json({ ok: false, error: "Only images allowed" }, { status: 400 });
 }

 const max = 5 * 1024 * 1024;
 if (file.size > max) {
  return NextResponse.json({ ok: false, error: "Max 5MB" }, { status: 400 });
 }

 const uploadsDir = path.join(process.cwd(), "public", "uploads");
 await fs.mkdir(uploadsDir, { recursive: true });

 const filename = safeName(file.name);
 const bytes = Buffer.from(await file.arrayBuffer());
 await fs.writeFile(path.join(uploadsDir, filename), bytes);

 return NextResponse.json({ ok: true, url: `/uploads/${filename}` });
}
