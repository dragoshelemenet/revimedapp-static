import path from "node:path";
import fs from "node:fs";
import { saveFilePersistent, readTextFileSafe } from "@/lib/githubPersist";
import type { Lang } from "@/lib/i18n";

export type ManagedAppKind = "react" | "html";

export type ManagedApp = {
  id: string;
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tag: Record<Lang, string>;
  href: string;
  image: string;
  visible: boolean;
  kind: ManagedAppKind;
  htmlPath: string;
  position: number;
};

const registryPath = "data/apps.json";

const fallbackApps: ManagedApp[] = [
  {
    id: "test-ayurveda-dosha",
    slug: "test-ayurveda-dosha",
    title: {
      ro: "Ayurveda Dosha Test",
      en: "Ayurveda Dosha Test",
      ru: "Тест Ayurveda Dosha",
      ua: "Тест Ayurveda Dosha"
    },
    description: {
      ro: "Identifică orientativ profilul Vata, Pitta sau Kapha și primește recomandări educaționale.",
      en: "Identify your Vata, Pitta or Kapha tendency and receive educational recommendations.",
      ru: "Определите ориентировочный профиль Vata, Pitta или Kapha и получите образовательные рекомендации.",
      ua: "Визначте орієнтовний профіль Vata, Pitta або Kapha та отримайте освітні рекомендації."
    },
    tag: { ro: "Ayurveda", en: "Ayurveda", ru: "Ayurveda", ua: "Ayurveda" },
    href: "/aplicatii/teste-si-instrumente/test-ayurveda-dosha",
    image: "/images/medical-bg.jpg",
    visible: true,
    kind: "react",
    htmlPath: "",
    position: 1
  },
  {
    id: "respiratie-terapeutica",
    slug: "respiratie-terapeutica",
    title: {
      ro: "Respirație Terapeutică",
      en: "Therapeutic Breathing",
      ru: "Терапевтическое дыхание",
      ua: "Терапевтичне дихання"
    },
    description: {
      ro: "Exerciții ghidate de respirație pentru calm, ritm și relaxare.",
      en: "Guided breathing exercises for calm, rhythm and relaxation.",
      ru: "Управляемые дыхательные упражнения для спокойствия, ритма и расслабления.",
      ua: "Керовані дихальні вправи для спокою, ритму та розслаблення."
    },
    tag: { ro: "Respirație", en: "Breathing", ru: "Дыхание", ua: "Дихання" },
    href: "/aplicatii/teste-si-instrumente/respiratie-terapeutica",
    image: "/images/medical-bg.jpg",
    visible: true,
    kind: "react",
    htmlPath: "",
    position: 2
  },
  {
    id: "screening-neurologic",
    slug: "screening-neurologic",
    title: {
      ro: "Screening Neurologic",
      en: "Neurological Screening",
      ru: "Неврологический скрининг",
      ua: "Неврологічний скринінг"
    },
    description: {
      ro: "Chestionar educațional pentru simptome neurologice și semnale de alarmă.",
      en: "Educational questionnaire for neurological symptoms and red flags.",
      ru: "Образовательная анкета для неврологических симптомов и тревожных признаков.",
      ua: "Освітня анкета для неврологічних симптомів і тривожних ознак."
    },
    tag: { ro: "Neurologie", en: "Neurology", ru: "Неврология", ua: "Неврологія" },
    href: "/aplicatii/teste-si-instrumente/screening-neurologic",
    image: "/images/medical-bg.jpg",
    visible: true,
    kind: "react",
    htmlPath: "",
    position: 3
  }
];

function normalizeSlug(value: string) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function slugifyAppTitle(title: string) {
  return normalizeSlug(title) || `app-${Date.now()}`;
}

export function readAppsRegistry(): ManagedApp[] {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    const file = path.join(process.cwd(), registryPath);
    if (!fs.existsSync(file)) return fallbackApps;
    const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    if (!Array.isArray(parsed)) return fallbackApps;
    return parsed
      .map((app) => ({
        ...app,
        visible: app.visible !== false,
        kind: app.kind === "html" ? "html" : "react",
        position: Number(app.position || 999)
      }))
      .sort((a, b) => a.position - b.position);
  } catch {
    return fallbackApps;
  }
}

export async function saveAppsRegistry(apps: ManagedApp[], message = "Update managed apps") {
  const sorted = [...apps].sort((a, b) => a.position - b.position);
  return saveFilePersistent({
    filePath: registryPath,
    content: JSON.stringify(sorted, null, 2) + "\\n",
    message
  });
}

export function getVisibleAppsForLang(lang: Lang) {
  return readAppsRegistry()
    .filter((app) => app.visible)
    .map((app) => ({
      slug: app.slug,
      href: app.kind === "html" ? `/aplicatii/teste-si-instrumente/html/${app.slug}` : app.href,
      title: app.title[lang] || app.title.ro || app.slug,
      description: app.description[lang] || app.description.ro || "",
      tag: app.tag[lang] || app.tag.ro || "App",
      image: app.image || "/images/medical-bg.jpg",
      kind: app.kind,
      htmlPath: app.htmlPath
    }));
}

export function getManagedApp(slug: string) {
  return readAppsRegistry().find((app) => app.slug === slug);
}

export async function readHtmlApp(slug: string) {
  const app = getManagedApp(slug);
  if (!app || app.kind !== "html" || !app.htmlPath) return null;
  const html = await readTextFileSafe(app.htmlPath, "");
  if (!html) return null;
  return { app, html };
}

export function extractTitleFromHtml(html: string) {
  const source = String(html || "");
  const titleMatch = source.match(new RegExp("<title[^>]*>([\s\S]*?)</title>", "i"));
  const h1Match = source.match(new RegExp("<h1[^>]*>([\s\S]*?)</h1>", "i"));

  const stripTags = (value: string | undefined) =>
    String(value || "").replace(new RegExp("<[^>]+>", "g"), "").trim();

  const title = stripTags(titleMatch?.[1]);
  const h1 = stripTags(h1Match?.[1]);

  return title || h1 || "Aplicație nouă";
}

export function isPlainHtmlFile(filename: string, html: string) {
  const lower = filename.toLowerCase();
  if (!lower.endsWith(".html") && !lower.endsWith(".htm")) return false;
  return /<html[\\s>]/i.test(html) || /<body[\\s>]/i.test(html) || /<script[\\s>]/i.test(html);
}

export async function saveHtmlAppFile(slug: string, html: string, message: string) {
  return saveFilePersistent({
    filePath: `public/apps/${slug}/index.html`,
    content: html,
    message
  });
}
