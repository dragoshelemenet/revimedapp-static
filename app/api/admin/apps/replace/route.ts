import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getManagedApp, isPlainHtmlFile, saveHtmlAppFile } from "@/lib/appsRegistry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
 const admin = await requireAdmin();
 if (!admin) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

 const form = await req.formData();
 const id = String(form.get("id") || "");
 const file = form.get("file");

 const app = getManagedApp(id);

 if (!app) {
  return NextResponse.json({ ok: false, error: "Aplicația nu există." }, { status: 404 });
 }

 if (app.kind !== "html") {
  return NextResponse.json(
   {
    ok: false,
    error: "Nu poți înlocui fișierul acestei aplicații din admin pentru că nu este HTML simplu. Este aplicație React/Next/Node și trebuie modificată din cod."
   },
   { status: 400 }
  );
 }

 if (!(file instanceof File)) {
  return NextResponse.json({ ok: false, error: "Nu ai încărcat niciun fișier." }, { status: 400 });
 }

 const html = await file.text();

 if (!isPlainHtmlFile(file.name, html)) {
  return NextResponse.json(
   {
    ok: false,
    error: "Fișier nesuportat. Înlocuirea acceptă doar fișiere .html/.htm."
   },
   { status: 400 }
  );
 }

 const saved = await saveHtmlAppFile(app.slug, html, `Replace HTML app file: ${app.slug}`);

 if (!saved.ok) {
  return NextResponse.json({ ok: false, error: saved.error || "Nu s-a salvat fișierul." }, { status: 500 });
 }

 return NextResponse.json({
  ok: true,
  message: "A fost schimbat fișierul cu succes. Aplicația e înlocuită cu noua versiune."
 });
}
