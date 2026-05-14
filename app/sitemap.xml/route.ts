import { NextResponse } from "next/server";
import { getPublishedPosts, getPublishedServicesAdmin } from "@/lib/db";
import { services, site, tools } from "@/lib/site";
import { languages, withLang, type Lang } from "@/lib/i18n";
import "@/lib/content";

export const dynamic = "force-dynamic";

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
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
  const urls: string[] = [];

  const basePages = [
    { loc: "/", priority: "1.0", changefreq: "weekly", image: site.image, title: site.name, caption: site.description },
    { loc: "/despre-noi", priority: "0.8", changefreq: "monthly", image: site.image, title: "Despre Revimed PLUS+", caption: site.description },
    { loc: "/servicii", priority: "0.95", changefreq: "weekly", image: site.image, title: "Servicii medicale", caption: "Servicii medicale Revimed PLUS+ în Chișinău." },
    { loc: "/aplicatii", priority: "0.9", changefreq: "weekly", image: site.image, title: "Aplicații medicale", caption: "Aplicații digitale educaționale pentru pacienți." },
    { loc: "/aplicatii/teste-si-instrumente", priority: "0.95", changefreq: "weekly", image: site.image, title: "Teste și Instrumente", caption: "Teste și instrumente medicale digitale." },
    { loc: "/blog", priority: "0.9", changefreq: "daily", image: site.image, title: "Blog medical", caption: "Articole medicale Revimed PLUS+." },
    { loc: "/preturi", priority: "0.75", changefreq: "monthly", image: site.image, title: "Prețuri", caption: "Prețuri servicii Revimed PLUS+." },
    { loc: "/galerie", priority: "0.75", changefreq: "monthly", image: site.image, title: "Galerie", caption: "Galerie foto Revimed PLUS+." },
    { loc: "/video-uri", priority: "0.7", changefreq: "monthly", image: site.image, title: "Video-uri", caption: "Video-uri Revimed PLUS+." },
    { loc: "/contact", priority: "0.9", changefreq: "monthly", image: site.image, title: "Contact", caption: site.address },
    { loc: "/termeni-si-conditii", priority: "0.35", changefreq: "yearly", image: site.image, title: "Termeni și Condiții", caption: "Termeni de utilizare Revimed PLUS+." },
    { loc: "/cookies", priority: "0.35", changefreq: "yearly", image: site.image, title: "Cookies", caption: "Politica de cookies Revimed PLUS+." }
  ];

  for (const page of basePages) {
    urls.push(urlEntry({
      loc: page.loc,
      priority: page.priority,
      changefreq: page.changefreq,
      image: page.image,
      imageTitle: page.title,
      imageCaption: page.caption
    }));
  }

  for (const tool of tools) {
    urls.push(urlEntry({
      loc: tool.href,
      priority: "0.92",
      changefreq: "weekly",
      image: tool.image,
      imageTitle: tool.title,
      imageCaption: tool.description
    }));
  }

  for (const lang of languages) {
    const langCode = lang as Lang;

    if (langCode !== "ro") {
      for (const page of basePages.filter((p) => !["/termeni-si-conditii", "/cookies"].includes(p.loc))) {
        urls.push(urlEntry({
          loc: withLang(page.loc, langCode),
          priority: page.priority,
          changefreq: page.changefreq,
          image: page.image,
          imageTitle: `${page.title} ${langCode.toUpperCase()}`,
          imageCaption: page.caption
        }));
      }

      for (const tool of tools) {
        urls.push(urlEntry({
          loc: withLang(tool.href, langCode),
          priority: "0.9",
          changefreq: "weekly",
          image: tool.image,
          imageTitle: `${tool.title} ${langCode.toUpperCase()}`,
          imageCaption: tool.description
        }));
      }
    }

    const dbServices = getPublishedServicesAdmin(langCode);
    for (const service of dbServices) {
      urls.push(urlEntry({
        loc: withLang(`/servicii/${service.slug}`, langCode),
        lastmod: new Date(service.edited_at || service.created_at).toISOString(),
        priority: "0.98",
        changefreq: "weekly",
        image: service.image,
        imageTitle: service.title,
        imageCaption: service.short_desc
      }));
    }

    const posts = getPublishedPosts(langCode);
    for (const post of posts) {
      urls.push(urlEntry({
        loc: withLang(`/blog/${post.slug}`, langCode),
        lastmod: new Date(post.edited_at || post.created_at).toISOString(),
        priority: "0.86",
        changefreq: "monthly",
        image: post.image,
        imageTitle: post.title,
        imageCaption: post.excerpt
      }));
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
}
