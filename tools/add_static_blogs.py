from pathlib import Path
from datetime import date
import html
import json
import re
import sys

BASE = "https://revimed.site"
TODAY = date.today().isoformat()
CSS = "/_next/static/chunks/0arcz_jzxt8re.css"
LOGO = "/images/logo.png"

LANG = {
    "ro": {"blog_dir": "blog", "index": Path("public/blog/index.html"), "html_lang": "ro", "home": "Acasă", "contact": "Contact", "open": "Deschide", "prefix": ""},
    "en": {"blog_dir": "en/blog", "index": Path("public/en/blog/index.html"), "html_lang": "en", "home": "Home", "contact": "Contact", "open": "Open", "prefix": "/en"},
    "ru": {"blog_dir": "ru/blog", "index": Path("public/ru/blog/index.html"), "html_lang": "ru", "home": "Главная", "contact": "Контакты", "open": "Открыть", "prefix": "/ru"},
    "ua": {"blog_dir": "ua/blog", "index": Path("public/ua/blog/index.html"), "html_lang": "uk", "home": "Головна", "contact": "Контакт", "open": "Відкрити", "prefix": "/ua"},
}

def route(lang, slug):
    return "/" + LANG[lang]["blog_dir"] + "/" + slug

def page_template(lang, article, item):
    l = LANG[lang]
    r = route(lang, item["slug"])
    title = item["title"]
    desc = item["desc"]
    img = article["image"]
    p = l["prefix"]
    contact_url = (p + "/contact/") if p else "/contact/"

    schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": desc,
        "image": img,
        "datePublished": TODAY,
        "dateModified": TODAY,
        "author": {"@type": "Organization", "name": "Centrul Medical Revimed PLUS+"},
        "publisher": {"@type": "Organization", "name": "Centrul Medical Revimed PLUS+"},
        "mainEntityOfPage": BASE + r
    }

    return f'''<!DOCTYPE html>
<html lang="{l["html_lang"]}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{html.escape(title)} | Revimed PLUS+</title>
<meta name="description" content="{html.escape(desc)}"/>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="{BASE}{r}"/>
<meta property="og:title" content="{html.escape(title)}"/>
<meta property="og:description" content="{html.escape(desc)}"/>
<meta property="og:url" content="{BASE}{r}"/>
<meta property="og:image" content="{img}"/>
<meta property="og:type" content="article"/>
<link rel="stylesheet" href="{CSS}"/>
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
<script type="application/ld+json">{json.dumps(schema, ensure_ascii=False)}</script>
</head>
<body>
<header class="rmHeader">
  <div class="rmTop"><div class="rmShell"><span></span><span class="langs"><a href="/blog/">RO</a><a href="/en/blog/">EN</a><a href="/ru/blog/">RU</a><a href="/ua/blog/">UA</a></span></div></div>
  <nav class="rmNav rmShell">
    <a class="rmLogo" href="{p or '/'}"><img src="{LOGO}" alt="REVIMED"/></a>
    <div class="rmLinks"><a href="{p or '/'}">{html.escape(l["home"])}</a><a class="activeNav" href="{p}/blog/">Blog</a><a href="{contact_url}">{html.escape(l["contact"])}</a></div>
  </nav>
</header>
<main>
<section class="pageHero blogPostHero innerPageHero"><div class="rmShell"><p class="crumb">{html.escape(l["home"])} / Blog</p><h1>{html.escape(title)}</h1><p class="lead">{html.escape(desc)}</p></div></section>
<section class="rmSection"><div class="rmShell" style="max-width:920px">
<img src="{img}" alt="{html.escape(title)}" style="width:100%;border-radius:22px;margin-bottom:28px;max-height:420px;object-fit:cover"/>
<article class="card" style="padding:28px">
{item["body"]}
<hr style="margin:28px 0;border:none;border-top:1px solid #e5e7eb"/>
<p><b>Revimed PLUS+</b> — clinică fondată în 2005. Consultațiile și tratamentele se stabilesc individual, cu acordul pacientului.</p>
<p><a class="primaryBtn" href="{contact_url}">{html.escape(l["contact"])}</a></p>
</article>
</div></section>
</main>
<footer class="rmFooter"><div class="rmShell rmFooterGrid"><div class="footerBrand"><img src="{LOGO}" alt="REVIMED" class="footerLogo"/><p>© 2026 Centrul Medical Revimed PLUS+.</p></div><div class="footerSchedule"><h3>Program</h3><p>Str. Mircea cel Bătrân 13/2</p><p>Luni–Vineri: 09:00–15:00</p><p>022 60 50 60</p></div></div></footer>
</body>
</html>'''

def make_card(lang, article, item, batch_id):
    return f'''
        <a class="card blogCard seoBlogCard" data-batch="{html.escape(batch_id)}" href="{route(lang, item["slug"])}/">
          <div class="blogImage" style="background-image:url({article["image"]})"></div>
          <h2>{html.escape(item["title"])}</h2>
          <p>{html.escape(item["desc"])}</p>
          <b>{html.escape(LANG[lang]["open"])} →</b>
        </a>'''

def insert_cards_preserve_old(lang, cards_html, batch_id):
    p = LANG[lang]["index"]
    s = p.read_text(encoding="utf-8", errors="ignore")

    start = f"<!-- SEO_BATCH_{batch_id}_START -->"
    end = f"<!-- SEO_BATCH_{batch_id}_END -->"
    s = re.sub(re.escape(start) + r".*?" + re.escape(end), "", s, flags=re.S)

    marker = '<div class="rmShell grid3">'
    if marker not in s:
        raise SystemExit(f"Missing blog grid marker in {p}. Stop: do not overwrite old cards.")

    s = s.replace(marker, marker + start + cards_html + end, 1)
    p.write_text(s, encoding="utf-8")

def regenerate_sitemap():
    routes = {"/"}
    bad_parts = {"404", "_not-found", "not-found"}
    for p in Path("public").rglob("*.html"):
        rel = p.relative_to("public")
        if any(part in bad_parts for part in rel.parts) or p.name == "404.html":
            continue
        if p.name == "index.html":
            r = "/" + str(rel.parent).replace("\\", "/")
            if r == "/.":
                r = "/"
        else:
            r = "/" + str(rel.with_suffix("")).replace("\\", "/")
        r = r.replace("//", "/")
        if not (r.startswith("/out") or r.startswith("/public")):
            routes.add(r)

    urls = []
    for r in sorted(routes):
        loc = BASE if r == "/" else BASE + r
        urls.append(f"""  <url>
    <loc>{html.escape(loc)}</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>{"daily" if r == "/" else "weekly"}</changefreq>
    <priority>{"1.0" if r == "/" else "0.8"}</priority>
  </url>""")

    sitemap = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
""" + "\\n".join(urls) + """
</urlset>
"""
    Path("sitemap.xml").write_text(sitemap, encoding="utf-8")
    Path("public/sitemap.xml").write_text(sitemap, encoding="utf-8")
    return len(routes)

def main():
    if len(sys.argv) != 3:
        raise SystemExit("Usage: python3 tools/add_static_blogs.py batchN /tmp/batchN_articles.json")

    batch_id = sys.argv[1]
    data_path = Path(sys.argv[2])
    articles = json.loads(data_path.read_text(encoding="utf-8"))

    for article in articles:
        if "image" not in article or "items" not in article:
            raise SystemExit("Each article needs image and items.")
        for lang in LANG:
            if lang not in article["items"]:
                raise SystemExit(f"Missing language: {lang}")
            for field in ["slug", "title", "desc", "body"]:
                if field not in article["items"][lang]:
                    raise SystemExit(f"Missing {field} in {lang}")

    created = []
    for article in articles:
        for lang, item in article["items"].items():
            d = Path("public") / LANG[lang]["blog_dir"] / item["slug"]
            d.mkdir(parents=True, exist_ok=True)
            target = d / "index.html"
            target.write_text(page_template(lang, article, item), encoding="utf-8")
            created.append(str(target))

    for lang in LANG:
        cards = ""
        for article in articles:
            cards += make_card(lang, article, article["items"][lang], batch_id)
        insert_cards_preserve_old(lang, cards, batch_id)

    count = regenerate_sitemap()

    for lang in LANG:
        s = LANG[lang]["index"].read_text(encoding="utf-8", errors="ignore")
        for article in articles:
            slug = article["items"][lang]["slug"]
            if slug not in s:
                raise SystemExit(f"Missing card in {LANG[lang]['index']}: {slug}")

    print("OK: pages created, old blog cards preserved, new cards inserted first, sitemap updated.")
    print("Sitemap URLs:", count)
    for p in created:
        print(p)

if __name__ == "__main__":
    main()
