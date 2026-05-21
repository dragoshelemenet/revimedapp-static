export const dynamic = "force-dynamic";

const SITE_URL = (
 process.env.NEXT_PUBLIC_SITE_URL ||
 process.env.SITE_URL ||
 "https://revimed.site"
).replace(/\/$/, "");

const langs = [
 { code: "ro", prefix: "" },
 { code: "en", prefix: "/en" },
 { code: "ru", prefix: "/ru" },
 { code: "uk", prefix: "/ua" }
];

const routes = [
 { path: "/", priority: "1.0", freq: "weekly" },
 { path: "/despre-noi", priority: "0.8", freq: "monthly" },
 { path: "/servicii", priority: "0.95", freq: "weekly" },
 { path: "/servicii/consultatii-neurologice", priority: "0.98", freq: "weekly" },
 { path: "/servicii/consultatii-neurochirurgie", priority: "0.98", freq: "weekly" },
 { path: "/servicii/fizioterapie-si-reabilitare", priority: "0.98", freq: "weekly" },
 { path: "/servicii/diagnostic-functional", priority: "0.9", freq: "weekly" },
 { path: "/servicii/terapie-balneara", priority: "0.86", freq: "weekly" },
 { path: "/servicii/electroterapie", priority: "0.86", freq: "weekly" },
 { path: "/aplicatii", priority: "0.9", freq: "weekly" },
 { path: "/aplicatii/teste-si-instrumente", priority: "0.95", freq: "weekly" },
 { path: "/aplicatii/teste-si-instrumente/test-ayurveda-dosha", priority: "0.75", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/respiratie-terapeutica", priority: "0.75", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/screening-neurologic", priority: "0.82", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/revimed-yoga-tibetan", priority: "0.72", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata", priority: "0.82", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/test-postura-coloana", priority: "0.82", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/monitor-dureri-spate", priority: "0.82", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/test-risc-cadere-echilibru", priority: "0.82", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/planner-exercitii-zilnice", priority: "0.76", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/test-stres-somn-respiratie", priority: "0.76", freq: "monthly" },
 { path: "/aplicatii/teste-si-instrumente/pregatire-consultatie", priority: "0.82", freq: "monthly" },
 { path: "/preturi", priority: "0.9", freq: "weekly" },
 { path: "/galerie", priority: "0.75", freq: "monthly" },
 { path: "/blog", priority: "0.7", freq: "weekly" },
 { path: "/contact", priority: "0.92", freq: "weekly" },
 { path: "/termeni-si-conditii", priority: "0.3", freq: "yearly" },
 { path: "/cookies", priority: "0.3", freq: "yearly" }
];

function cleanUrl(prefix: string, path: string) {
 if (path === "/") return `${SITE_URL}${prefix || ""}` || SITE_URL;
 return `${SITE_URL}${prefix}${path}`.replace(/\/+$/, "");
}

function esc(value: string) {
 return value
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");
}

export function GET() {
 const lastmod = new Date().toISOString();

 const urls = langs.flatMap((lang) =>
  routes.map((route) => {
   const loc = cleanUrl(lang.prefix, route.path);

   const alternates = langs
    .map((alt) => {
     const href = cleanUrl(alt.prefix, route.path);
     return `<xhtml:link rel="alternate" hreflang="${alt.code}" href="${esc(href)}" />`;
    })
    .join("\n  ");

   const xDefault = cleanUrl("", route.path);

   return ` <url>
  <loc>${esc(loc)}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>${route.freq}</changefreq>
  <priority>${route.priority}</priority>
  ${alternates}
  <xhtml:link rel="alternate" hreflang="x-default" href="${esc(xDefault)}" />
 </url>`;
  })
 ).join("\n");

 const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
 xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
 xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

 return new Response(xml, {
  headers: {
   "Content-Type": "application/xml; charset=utf-8",
   "Cache-Control": "public, max-age=0, s-maxage=3600"
  }
 });
}
