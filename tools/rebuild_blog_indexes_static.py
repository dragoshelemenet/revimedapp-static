from pathlib import Path
import re
import html

CSS = "/_next/static/chunks/0arcz_jzxt8re.css"
LOGO = "/images/logo.png"

CONFIG = {
    "ro": {
        "index": Path("public/blog/index.html"),
        "articles_dir": Path("public/blog"),
        "href_prefix": "/blog",
        "lang": "ro",
        "title": "Blog Revimed PLUS+",
        "lead": "Articole simple și utile despre neurologie, recuperare, fizioterapie și sănătate.",
        "home": "Acasă",
        "blog": "Blog",
        "read": "Citește articolul",
        "langs": [("RO", "/blog/"), ("EN", "/en/blog/"), ("RU", "/ru/blog/"), ("UA", "/ua/blog/")],
    },
    "en": {
        "index": Path("public/en/blog/index.html"),
        "articles_dir": Path("public/en/blog"),
        "href_prefix": "/en/blog",
        "lang": "en",
        "title": "Revimed PLUS+ Blog",
        "lead": "Simple and useful articles about neurology, recovery, physiotherapy and health.",
        "home": "Home",
        "blog": "Blog",
        "read": "Read article",
        "langs": [("RO", "/blog/"), ("EN", "/en/blog/"), ("RU", "/ru/blog/"), ("UA", "/ua/blog/")],
    },
    "ru": {
        "index": Path("public/ru/blog/index.html"),
        "articles_dir": Path("public/ru/blog"),
        "href_prefix": "/ru/blog",
        "lang": "ru",
        "title": "Блог Revimed PLUS+",
        "lead": "Простые и полезные статьи о неврологии, восстановлении, физиотерапии и здоровье.",
        "home": "Главная",
        "blog": "Блог",
        "read": "Читать статью",
        "langs": [("RO", "/blog/"), ("EN", "/en/blog/"), ("RU", "/ru/blog/"), ("UA", "/ua/blog/")],
    },
    "ua": {
        "index": Path("public/ua/blog/index.html"),
        "articles_dir": Path("public/ua/blog"),
        "href_prefix": "/ua/blog",
        "lang": "uk",
        "title": "Блог Revimed PLUS+",
        "lead": "Прості та корисні статті про неврологію, відновлення, фізіотерапію та здоров’я.",
        "home": "Головна",
        "blog": "Блог",
        "read": "Читати статтю",
        "langs": [("RO", "/blog/"), ("EN", "/en/blog/"), ("RU", "/ru/blog/"), ("UA", "/ua/blog/")],
    },
}

FALLBACK_IMG = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80"

def clean_text(s):
    s = re.sub(r"<[^>]+>", " ", s or "")
    s = html.unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return s

def extract_title(s):
    # Prefer h1 from article/page.
    m = re.search(r"<h1[^>]*>(.*?)</h1>", s, flags=re.S | re.I)
    if m:
        return clean_text(m.group(1))

    m = re.search(r"<title[^>]*>(.*?)</title>", s, flags=re.S | re.I)
    if m:
        title = clean_text(m.group(1))
        title = re.sub(r"\s*\|\s*Revimed.*$", "", title).strip()
        return title

    return "Articol Revimed PLUS+"

def extract_desc(s):
    m = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']', s, flags=re.I)
    if m:
        return html.unescape(m.group(1)).strip()

    m = re.search(r"<p[^>]*>(.*?)</p>", s, flags=re.S | re.I)
    if m:
        desc = clean_text(m.group(1))
        return desc[:180] + ("..." if len(desc) > 180 else "")

    return ""

def extract_img(s):
    # Prefer visible article/card image, then OG image.
    m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', s, flags=re.I)
    if m:
        return html.unescape(m.group(1)).strip()

    m = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']', s, flags=re.I)
    if m:
        return html.unescape(m.group(1)).strip()

    return FALLBACK_IMG

def collect_articles(cfg):
    articles = []
    for page in sorted(cfg["articles_dir"].glob("*/index.html")):
        slug = page.parent.name
        if slug == "blog":
            continue

        s = page.read_text(encoding="utf-8", errors="ignore")
        title = extract_title(s)
        desc = extract_desc(s)
        img = extract_img(s)

        href = f"{cfg['href_prefix']}/{slug}/"
        mtime = page.stat().st_mtime

        articles.append({
            "href": href,
            "title": title,
            "desc": desc,
            "img": img,
            "mtime": mtime,
        })

    # newest first, but old pages still included
    articles.sort(key=lambda x: x["mtime"], reverse=True)
    return articles

def card(article, read_text):
    return f'''
<a class="blogStaticCard" href="{html.escape(article["href"])}">
  <img src="{html.escape(article["img"])}" alt="{html.escape(article["title"])}" loading="lazy"/>
  <div class="blogStaticBody">
    <h2>{html.escape(article["title"])}</h2>
    <p>{html.escape(article["desc"])}</p>
    <span>{html.escape(read_text)} →</span>
  </div>
</a>'''

def page_html(cfg, articles):
    lang_links = "".join(
        f'<a class="{"langActive" if href == cfg["href_prefix"] + "/" else ""}" href="{href}">{label}</a>'
        for label, href in cfg["langs"]
    )

    cards = "\n".join(card(a, cfg["read"]) for a in articles)

    return f'''<!DOCTYPE html>
<html lang="{cfg["lang"]}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{html.escape(cfg["title"])} | Revimed PLUS+</title>
<meta name="description" content="{html.escape(cfg["lead"])}"/>
<link rel="stylesheet" href="{CSS}"/>
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<meta name="theme-color" content="#ffffff"/>
<style id="REVIMED_STATIC_BLOG_INDEX_STYLE">
.blogIndexHero{{
  padding:58px 0 34px;
  background:linear-gradient(135deg,#eef7fc,#ffffff);
}}
.blogIndexHero .langs a{{
  margin-left:8px;
  font-weight:800;
}}
.blogIndexHero h1{{
  margin:18px 0 12px;
  font-size:46px;
  line-height:1.1;
  color:#0f172a;
}}
.blogIndexHero p{{
  max-width:760px;
  font-size:20px;
  line-height:1.6;
  color:#475569;
}}
.blogStaticGrid{{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:22px;
}}
.blogStaticCard{{
  display:block;
  overflow:hidden;
  border-radius:24px;
  background:#fff;
  border:1px solid #e2e8f0;
  box-shadow:0 12px 32px rgba(15,23,42,.07);
  text-decoration:none;
  color:inherit;
}}
.blogStaticCard img{{
  display:block;
  width:100%;
  height:210px;
  object-fit:cover;
}}
.blogStaticBody{{
  padding:22px;
}}
.blogStaticBody h2{{
  margin:0 0 10px;
  font-size:23px;
  line-height:1.25;
  color:#0f172a;
}}
.blogStaticBody p{{
  margin:0 0 16px;
  font-size:17px;
  line-height:1.55;
  color:#475569;
}}
.blogStaticBody span{{
  color:#d71920;
  font-weight:900;
}}
@media(max-width:900px){{
  .blogStaticGrid{{grid-template-columns:1fr 1fr}}
}}
@media(max-width:640px){{
  .blogIndexHero h1{{font-size:36px}}
  .blogStaticGrid{{grid-template-columns:1fr}}
}}
</style>
</head>
<body>
<header class="rmHeader">
  <div class="rmTop"><div class="rmShell"><span></span><span class="langs">{lang_links}</span></div></div>
  <nav class="rmNav rmShell">
    <a class="rmLogo" aria-label="Centrul Medical Revimed PLUS+" href="/"><img src="{LOGO}" alt="REVIMED"/></a>
    <div class="rmLinks">
      <a href="/">{html.escape(cfg["home"])}</a>
      <a class="activeNav" href="{cfg["href_prefix"]}/">{html.escape(cfg["blog"])}</a>
      <a href="/contact/">Contact</a>
    </div>
  </nav>
</header>

<main>
  <section class="blogIndexHero">
    <div class="rmShell">
      <p class="breadcrumbs">{html.escape(cfg["home"])} / {html.escape(cfg["blog"])}</p>
      <h1>{html.escape(cfg["title"])}</h1>
      <p>{html.escape(cfg["lead"])}</p>
    </div>
  </section>

  <section class="rmSection">
    <div class="rmShell blogStaticGrid">
      {cards}
    </div>
  </section>
</main>

<footer class="rmFooter">
  <div class="rmShell rmFooterGrid">
    <div class="footerBrand">
      <img src="{LOGO}" alt="REVIMED" class="footerLogo"/>
      <p>© 2026 Centrul Medical Revimed PLUS+.</p>
    </div>
    <div class="footerSchedule">
      <h3>Program de lucru:</h3>
      <p>Str. Mircea cel Bătrân 13/2</p>
      <p>Luni–Vineri: 09:00–15:00</p>
      <p>022 60 50 60</p>
    </div>
  </div>
</footer>
</body>
</html>
'''

for key, cfg in CONFIG.items():
    articles = collect_articles(cfg)
    if not articles:
        print("WARNING: no articles for", key)
        continue

    cfg["index"].parent.mkdir(parents=True, exist_ok=True)
    cfg["index"].write_text(page_html(cfg, articles), encoding="utf-8")
    print(f"rebuilt {cfg['index']} with {len(articles)} static article cards")
