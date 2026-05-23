import { getPublishedPosts } from "@/lib/db";
import { equipmentItems } from "@/lib/equipment";

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
  "/utilaj",
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

type PostLike = {
  lang?: string;
  slug?: string;
  edited_at?: string | null;
  created_at?: string | null;
};

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function withLang(lang: string, path: string) {
  return lang === "ro" ? `${SITE}${path}` : `${SITE}/${lang}${path}`;
}

function safeDate(value?: string | null) {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function urlNode(url: string, lastmod?: string | null, priority = "0.80", changefreq = "weekly") {
  return [
    "  <url>",
    `    <loc>${xmlEscape(url)}</loc>`,
    `    <lastmod>${xmlEscape(safeDate(lastmod))}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

function collectPosts() {
  const all: PostLike[] = [];

  for (const lang of langs) {
    try {
      const rows = (getPublishedPosts as any)(lang);
      if (Array.isArray(rows)) {
        for (const row of rows) all.push({ ...row, lang: row?.lang || lang });
      }
    } catch {}
  }

  try {
    const rows = (getPublishedPosts as any)();
    if (Array.isArray(rows)) {
      for (const row of rows) all.push(row);
    }
  } catch {}

  return all.filter((post) => post && post.slug);
}

export async function GET() {
  const urls: string[] = [];

  for (const lang of langs) {
    for (const path of staticPaths) {
      const priority =
        path === "" ? "1.00" :
        path === "/contact" ? "0.92" :
        path === "/servicii" || path === "/preturi" ? "0.90" :
        path.startsWith("/servicii/") ? "0.86" :
        path === "/blog" ? "0.75" :
        path === "/termeni-si-conditii" || path === "/cookies" ? "0.30" :
        "0.80";

      const changefreq =
        path === "/termeni-si-conditii" || path === "/cookies"
          ? "yearly"
          : path === "/blog"
            ? "weekly"
            : "monthly";

      urls.push(urlNode(withLang(lang, path), undefined, priority, changefreq));
    }
  }

  for (const lang of langs) {
    for (const item of equipmentItems) {
      urls.push(urlNode(withLang(lang, `/utilaj/${item.slug}`), undefined, "0.70", "monthly"));
    }
  }

  const seen = new Set<string>();

  for (const post of collectPosts()) {
    const lang = langs.includes(post.lang as any) ? String(post.lang) : "ro";
    const slug = String(post.slug || "").trim();
    if (!slug) continue;

    const url = withLang(lang, `/blog/${slug}`);
    if (seen.has(url)) continue;
    seen.add(url);

    urls.push(urlNode(url, post.edited_at || post.created_at, "0.72", "monthly"));
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
