import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
 extractTitleFromHtml,
 isPlainHtmlFile,
 readAppsRegistry,
 saveAppsRegistry,
 saveHtmlAppFile,
 slugifyAppTitle,
 type ManagedApp
} from "@/lib/appsRegistry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clean(value: FormDataEntryValue | null) {
 return String(value || "").trim();
}

export async function POST(req: Request) {
 const admin = await requireAdmin();
 if (!admin) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

 const form = await req.formData();
 const file = form.get("file");

 if (!(file instanceof File)) {
  return NextResponse.json({ ok: false, error: "Nu ai încărcat niciun fișier." }, { status: 400 });
 }

 const html = await file.text();

 if (!isPlainHtmlFile(file.name, html)) {
  return NextResponse.json(
   {
    ok: false,
    error: "Fișierul nu este suportat. Poți încărca doar aplicații simple HTML (.html/.htm). Pentru aplicații Node/React/Next trebuie modificare în cod."
   },
   { status: 400 }
  );
 }

 const titleRo = clean(form.get("titleRo")) || extractTitleFromHtml(html);
 const slug = slugifyAppTitle(clean(form.get("slug")) || titleRo);
 const apps = readAppsRegistry();

 if (apps.some((app) => app.slug === slug)) {
  return NextResponse.json({ ok: false, error: "Există deja o aplicație cu acest slug." }, { status: 409 });
 }

 const htmlPath = `public/apps/${slug}/index.html`;

 const app: ManagedApp = {
  id: slug,
  slug,
  title: {
   ro: titleRo,
   en: clean(form.get("titleEn")) || titleRo,
   ru: clean(form.get("titleRu")) || titleRo,
   ua: clean(form.get("titleUa")) || titleRo
  },
  description: {
   ro: clean(form.get("descriptionRo")) || "Aplicație HTML educațională.",
   en: clean(form.get("descriptionEn")) || clean(form.get("descriptionRo")) || "Educational HTML app.",
   ru: clean(form.get("descriptionRu")) || clean(form.get("descriptionRo")) || "Образовательное HTML-приложение.",
   ua: clean(form.get("descriptionUa")) || clean(form.get("descriptionRo")) || "Освітній HTML-застосунок."
  },
  tag: {
   ro: clean(form.get("tagRo")) || "Aplicație",
   en: clean(form.get("tagEn")) || "App",
   ru: clean(form.get("tagRu")) || "Приложение",
   ua: clean(form.get("tagUa")) || "Застосунок"
  },
  href: `/aplicatii/teste-si-instrumente/html/${slug}`,
  image: clean(form.get("image")) || "/images/medical-bg.jpg",
  visible: true,
  kind: "html",
  htmlPath,
  position: apps.length + 1
 };

 const savedHtml = await saveHtmlAppFile(slug, html, `Add HTML app file: ${slug}`);
 if (!savedHtml.ok) return NextResponse.json({ ok: false, error: savedHtml.error || "HTML save failed" }, { status: 500 });

 const savedRegistry = await saveAppsRegistry([...apps, app], `Add managed HTML app: ${slug}`);
 if (!savedRegistry.ok) return NextResponse.json({ ok: false, error: savedRegistry.error || "Registry save failed" }, { status: 500 });

 return NextResponse.json({
  ok: true,
  message: "Aplicația HTML a fost adăugată cu succes.",
  app
 });
}
