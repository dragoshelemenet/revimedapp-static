import type { MetadataRoute } from "next";
import { getDb } from "@/lib/db";

const SITE = "https://revimed.site";

const langs = ["ro", "en", "ru", "ua"] as const;

const staticPaths = [
  "",
  "/despre-noi",
  "/servicii",
  "/servicii/consultatii-neurologice",
  "/servicii/consultatii-neurochirurgie",
  "/servicii/fizioterapie-si-reabilitare",
  "/servicii/diagnostic-functional",
  "/servicii/terapie-balneara",
  "/servicii/electroterapie",
  "/aplicatii",
  "/aplicatii/teste-si-instrumente",
  "/aplicatii/teste-si-instrumente/test-ayurveda-dosha",
  "/aplicatii/teste-si-instrumente/respiratie-terapeutica",
  "/aplicatii/teste-si-instrumente/screening-neurologic",
  "/aplicatii/teste-si-instrumente/revimed-yoga-tibetan",
  "/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata",
  "/aplicatii/teste-si-instrumente/test-postura-coloana",
  "/aplicatii/teste-si-instrumente/monitor-dureri-spate",
  "/aplicatii/teste-si-instrumente/test-risc-cadere-echilibru",
  "/aplicatii/teste-si-instrumente/planner-exercitii-zilnice",
  "/aplicatii/teste-si-instrumente/test-stres-somn-respiratie",
  "/aplicatii/teste-si-instrumente/pregatire-consultatie",
  "/preturi",
  "/galerie",
  "/blog",
  "/contact",
  "/termeni-si-conditii",
  "/cookies",
];

type BlogRow = {
  lang: string;
  slug: string;
  edited_at?: string | null;
  created_at?: string | null;
};

function withLang(lang: string, path: string) {
  if (lang === "ro") return `${SITE}${path || ""}`;
  return `${SITE}/${lang}${path || ""}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    for (const path of staticPaths) {
      const priority =
        path === "" ? 1 :
        path === "/servicii" ? 0.95 :
        path.startsWith("/servicii/") ? 0.9 :
        path === "/contact" ? 0.92 :
        path === "/preturi" ? 0.9 :
        path === "/blog" ? 0.75 :
        path === "/termeni-si-conditii" || path === "/cookies" ? 0.3 :
        0.8;

      const changeFrequency =
        path === "/termeni-si-conditii" || path === "/cookies"
          ? "yearly"
          : path === "/despre-noi" || path === "/galerie"
            ? "monthly"
            : "weekly";

      pages.push({
        url: withLang(lang, path),
        lastModified: now,
        changeFrequency,
        priority,
      });
    }
  }

  try {
    const db = getDb();
    const posts = db
      .prepare(
        `
        SELECT lang, slug, edited_at, created_at
        FROM posts
        WHERE published = 1
          AND slug IS NOT NULL
          AND slug != ''
        ORDER BY lang, slug
        `
      )
      .all() as BlogRow[];

    for (const post of posts) {
      const lang = langs.includes(post.lang as any) ? post.lang : "ro";
      const dateValue = post.edited_at || post.created_at;
      const lastModified = dateValue ? new Date(dateValue) : now;

      pages.push({
        url: withLang(lang, `/blog/${post.slug}`),
        lastModified: Number.isNaN(lastModified.getTime()) ? now : lastModified,
        changeFrequency: "monthly",
        priority: 0.72,
      });
    }
  } catch {
    // Keep static sitemap working even if DB is unavailable during build.
  }

  const unique = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const item of pages) unique.set(item.url, item);

  return Array.from(unique.values());
}
