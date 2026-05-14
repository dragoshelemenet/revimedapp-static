import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/db";
import { services, site, tools } from "@/lib/site";

export const dynamic = "force-dynamic";

function esc(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function urlEntry({
  loc,
  lastmod,
  priority,
  changefreq,
  image,
  imageTitle,
  imageCaption
}: {
  loc: string;
  lastmod?: string;
  priority: string;
  changefreq: string;
  image?: string;
  imageTitle?: string;
  imageCaption?: string;
}) {
  const imageXml = image
    ? `
    <image:image>
      <image:loc>${esc(new URL(image, site.url).toString())}</image:loc>
      <image:title>${esc(imageTitle || "")}</image:title>
      <image:caption>${esc(imageCaption || "")}</image:caption>
    </image:image>`
    : "";

  return `
  <url>
    <loc>${esc(new URL(loc, site.url).toString())}</loc>
    <lastmod>${lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${imageXml}
  </url>`;
}

export async function GET() {
  const posts = getPublishedPosts();

  const staticPages = [
    { loc: "/", priority: "1.0", changefreq: "weekly", image: site.image, title: site.name, caption: site.description },
    { loc: "/despre-noi", priority: "0.8", changefreq: "monthly", image: site.image, title: "Despre Revimed PLUS+", caption: site.description },
    { loc: "/servicii", priority: "0.95", changefreq: "weekly", image: site.image, title: "Servicii medicale", caption: "Servicii medicale Revimed PLUS+ în Chișinău." },
    { loc: "/aplicatii", priority: "0.9", changefreq: "weekly", image: site.image, title: "Aplicații medicale", caption: "Aplicații digitale educaționale pentru pacienți." },
    { loc: "/aplicatii/teste-si-instrumente", priority: "0.95", changefreq: "weekly", image: site.image, title: "Teste și Instrumente", caption: "Teste și instrumente medicale digitale." },
    { loc: "/blog", priority: "0.9", changefreq: "daily", image: site.image, title: "Blog medical", caption: "Articole medicale Revimed PLUS+." },
    { loc: "/preturi", priority: "0.75", changefreq: "monthly", image: site.image, title: "Prețuri", caption: "Prețuri servicii Revimed PLUS+." },
    { loc: "/galerie", priority: "0.55", changefreq: "monthly", image: site.image, title: "Galerie", caption: "Galerie Revimed PLUS+." },
    { loc: "/contact", priority: "0.9", changefreq: "monthly", image: site.image, title: "Contact", caption: site.address }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages.map((p) => urlEntry({
  loc: p.loc,
  priority: p.priority,
  changefreq: p.changefreq,
  image: p.image,
  imageTitle: p.title,
  imageCaption: p.caption
})).join("")}
${services.map((s) => urlEntry({
  loc: `/servicii/${s.slug}`,
  priority: "0.98",
  changefreq: "weekly",
  image: s.image,
  imageTitle: s.title,
  imageCaption: s.description
})).join("")}
${tools.map((t) => urlEntry({
  loc: t.href,
  priority: "0.92",
  changefreq: "weekly",
  image: t.image,
  imageTitle: t.title,
  imageCaption: t.description
})).join("")}
${posts.map((p) => urlEntry({
  loc: `/blog/${p.slug}`,
  lastmod: new Date(p.edited_at || p.created_at).toISOString(),
  priority: "0.86",
  changefreq: "monthly",
  image: p.image,
  imageTitle: p.title,
  imageCaption: p.excerpt
})).join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
}
