import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { readAppsRegistry, saveAppsRegistry, type ManagedApp } from "@/lib/appsRegistry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  return NextResponse.json({ ok: true, apps: readAppsRegistry() });
}

export async function PUT(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const apps = readAppsRegistry();

  const next = apps.map((app) => {
    if (app.id !== body.id) return app;

    const updated: ManagedApp = {
      ...app,
      visible: Boolean(body.visible),
      position: Number(body.position || app.position || 999),
      image: String(body.image || app.image || "/images/medical-bg.jpg"),
      title: {
        ro: String(body.title?.ro || app.title.ro || app.slug),
        en: String(body.title?.en || body.title?.ro || app.title.en || app.title.ro || app.slug),
        ru: String(body.title?.ru || body.title?.ro || app.title.ru || app.title.ro || app.slug),
        ua: String(body.title?.ua || body.title?.ro || app.title.ua || app.title.ro || app.slug)
      },
      description: {
        ro: String(body.description?.ro || app.description.ro || ""),
        en: String(body.description?.en || body.description?.ro || app.description.en || app.description.ro || ""),
        ru: String(body.description?.ru || body.description?.ro || app.description.ru || app.description.ro || ""),
        ua: String(body.description?.ua || body.description?.ro || app.description.ua || app.description.ro || "")
      },
      tag: {
        ro: String(body.tag?.ro || app.tag.ro || "App"),
        en: String(body.tag?.en || body.tag?.ro || app.tag.en || app.tag.ro || "App"),
        ru: String(body.tag?.ru || body.tag?.ro || app.tag.ru || app.tag.ro || "App"),
        ua: String(body.tag?.ua || body.tag?.ro || app.tag.ua || app.tag.ro || "App")
      }
    };

    return updated;
  });

  const saved = await saveAppsRegistry(next, `Update app settings: ${body.id}`);
  return NextResponse.json({ ok: saved.ok, saved });
}
