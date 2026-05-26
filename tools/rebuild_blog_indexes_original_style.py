from pathlib import Path
import re
import html

CSS = "/_next/static/chunks/0arcz_jzxt8re.css"
LOGO = "/images/logo.png"
HERO_BG = "/images/clinic-hero.jpg"

FALLBACKS = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1400&q=80",
]

CONFIG = {
    "ro": {
        "index": Path("public/blog/index.html"),
        "dir": Path("public/blog"),
        "prefix": "/blog",
        "lang": "ro",
        "title": "Blog Revimed PLUS+",
        "lead": "Articole simple și utile despre neurologie, recuperare, fizioterapie și sănătate.",
        "home": "Acasă",
        "about": "Despre Noi",
        "services": "Servicii",
        "apps": "Aplicații",
        "equipment": "Utilaj",
        "prices": "Prețuri",
        "gallery": "Galerie",
        "read": "Citește",
    },
    "en": {
        "index": Path("public/en/blog/index.html"),
        "dir": Path("public/en/blog"),
        "prefix": "/en/blog",
        "lang": "en",
        "title": "Revimed PLUS+ Blog",
        "lead": "Simple and useful articles about neurology, recovery, physiotherapy and health.",
        "home": "Home",
        "about": "About Us",
        "services": "Services",
        "apps": "Apps",
        "equipment": "Equipment",
        "prices": "Prices",
        "gallery": "Gallery",
        "read": "Open",
    },
    "ru": {
        "index": Path("public/ru/blog/index.html"),
        "dir": Path("public/ru/blog"),
        "prefix": "/ru/blog",
        "lang": "ru",
        "title": "Блог Revimed PLUS+",
        "lead": "Простые статьи о неврологии, восстановлении, физиотерапии и здоровье.",
        "home": "Главная",
        "about": "О нас",
        "services": "Услуги",
        "apps": "Приложения",
        "equipment": "Оборудование",
        "prices": "Цены",
        "gallery": "Галерея",
        "read": "Открыть",
    },
    "ua": {
        "index": Path("public/ua/blog/index.html"),
        "dir": Path("public/ua/blog"),
        "prefix": "/ua/blog",
        "lang": "uk",
        "title": "Блог Revimed PLUS+",
        "lead": "Прості статті про неврологію, відновлення, фізіотерапію та здоров’я.",
        "home": "Головна",
        "about": "Про нас",
        "services": "Послуги",
        "apps": "Додатки",
        "equipment": "Обладнання",
        "prices": "Ціни",
        "gallery": "Галерея",
        "read": "Відкрити",
    },
}

def clean(x):
    x = re.sub(r"<script\b.*?</script>", " ", x or "", flags=re.S|re.I)
    x = re.sub(r"<style\b.*?</style>", " ", x, flags=re.S|re.I)
    x = re.sub(r"<[^>]+>", " ", x)
    x = html.unescape(x)
    return re.sub(r"\s+", " ", x).strip()

def title_of(s):
    m = re.search(r"<h1[^>]*>(.*?)</h1>", s, flags=re.S|re.I)
    if m:
        return clean(m.group(1))
    m = re.search(r"<title[^>]*>(.*?)</title>", s, flags=re.S|re.I)
    if m:
        return clean(m.group(1)).split("|")[0].strip()
    return "Articol Revimed PLUS+"

def desc_of(s):
    m = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']', s, flags=re.I)
    if m:
        return html.unescape(m.group(1)).strip()

    article = re.search(r"<article\b.*?</article>", s, flags=re.S|re.I)
    area = article.group(0) if article else s

    for m in re.finditer(r"<p[^>]*>(.*?)</p>", area, flags=re.S|re.I):
        t = clean(m.group(1))
        bad = ["Ascultă", "Viteză", "Revimed PLUS+ —", "Contact", "Număr clinică"]
        if len(t) > 70 and not any(b in t for b in bad):
            return t[:170] + ("..." if len(t) > 170 else "")
    return ""

def bad_img(src):
    x = src.lower()
    return any(b in x for b in ["logo", "favicon", "apple-touch", "android-chrome", "revimed"])

def img_of(s, i):
    # Prefer article/hero image, ignore logo.
    patterns = [
        r'<div[^>]+class=["\'][^"\']*(?:articleHeroMedia|blogHero|heroMedia)[^"\']*["\'][^>]*>.*?<img[^>]+src=["\']([^"\']+)["\']',
        r'<article\b.*?<img[^>]+src=["\']([^"\']+)["\']',
        r'<main\b.*?<img[^>]+src=["\']([^"\']+)["\']',
    ]
    for pat in patterns:
        for m in re.finditer(pat, s, flags=re.S|re.I):
            src = html.unescape(m.group(1)).strip()
            if src and not bad_img(src):
                return src

    for m in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\']', s, flags=re.I):
        src = html.unescape(m.group(1)).strip()
        if src and not bad_img(src):
            return src

    return FALLBACKS[i % len(FALLBACKS)]

def collect(cfg):
    items = []
    for i, page in enumerate(sorted(cfg["dir"].glob("*/index.html"))):
        slug = page.parent.name
        if slug == "blog":
            continue
        s = page.read_text(encoding="utf-8", errors="ignore")
        items.append({
            "href": f"{cfg['prefix']}/{slug}/",
            "title": title_of(s),
            "desc": desc_of(s),
            "img": img_of(s, i),
            "mtime": page.stat().st_mtime,
        })
    items.sort(key=lambda x: x["mtime"], reverse=True)
    return items

def card(a, read):
    return f'''
<a class="card blogCard" href="{html.escape(a["href"])}">
  <img src="{html.escape(a["img"])}" alt="{html.escape(a["title"])}" loading="lazy"/>
  <div class="blogCardBody">
    <h2>{html.escape(a["title"])}</h2>
    <p>{html.escape(a["desc"])}</p>
    <span>{html.escape(read)} →</span>
  </div>
</a>'''

def render(cfg, items):
    cards = "\n".join(card(a, cfg["read"]) for a in items)

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
<style id="REVIMED_BLOG_INDEX_ORIGINAL_STYLE">
.blogHero{{
  position:relative;
  min-height:260px;
  display:flex;
  align-items:center;
  background:
    linear-gradient(90deg,rgba(2,18,38,.88),rgba(2,18,38,.62)),
    url("{HERO_BG}") center/cover no-repeat;
  color:#fff;
}}
.blogHero .rmShell{{padding:54px 0}}
.blogHero .breadcrumbs{{font-size:15px;font-weight:800;margin:0 0 12px;color:#fff}}
.blogHero h1{{font-size:48px;line-height:1.05;margin:0 0 12px;color:#fff}}
.blogHero p{{font-size:20px;line-height:1.5;margin:0;max-width:720px;color:#fff}}
.blogIndexWrap{{padding:46px 0 70px}}
.blogGridFix{{
  display:grid!important;
  grid-template-columns:repeat(3,minmax(0,1fr))!important;
  gap:24px!important;
}}
.blogCard{{
  overflow:hidden!important;
  border-radius:18px!important;
  border:1px solid #dbe7f0!important;
  background:#fff!important;
  box-shadow:0 10px 28px rgba(15,23,42,.06)!important;
  text-decoration:none!important;
  color:inherit!important;
}}
.blogCard img{{
  display:block!important;
  width:100%!important;
  height:190px!important;
  object-fit:cover!important;
  background:#e2e8f0!important;
}}
.blogCardBody{{padding:22px!important}}
.blogCardBody h2{{
  margin:0 0 10px!important;
  font-size:22px!important;
  line-height:1.22!important;
  color:#0f172a!important;
}}
.blogCardBody p{{
  margin:0 0 16px!important;
  font-size:17px!important;
  line-height:1.55!important;
  color:#64748b!important;
}}
.blogCardBody span{{
  display:inline-block!important;
  color:#0b8ed0!important;
  font-size:15px!important;
  font-weight:950!important;
  padding:7px 12px!important;
  border-radius:999px!important;
  background:#eef8fd!important;
}}
@media(max-width:900px){{
  .blogGridFix{{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
}}
@media(max-width:640px){{
  .blogHero h1{{font-size:36px}}
  .blogHero p{{font-size:17px}}
  .blogGridFix{{grid-template-columns:1fr!important}}
}}
</style>
</head>
<body>
<header class="rmHeader">
  <div class="rmTop">
    <div class="rmShell">
      <span></span>
      <span class="langs"><a href="/blog/">RO</a> <a href="/en/blog/">EN</a> <a href="/ru/blog/">RU</a> <a href="/ua/blog/">UA</a></span>
    </div>
  </div>
  <nav class="rmNav rmShell">
    <a class="rmLogo" href="/"><img src="{LOGO}" alt="REVIMED"/></a>
    <div class="rmLinks">
      <a href="/">{html.escape(cfg["home"])}</a>
      <a href="/despre-noi/">{html.escape(cfg["about"])}</a>
      <a href="/servicii/">{html.escape(cfg["services"])}</a>
      <a href="/aplicatii/">{html.escape(cfg["apps"])}</a>
      <a href="/utilaj/">{html.escape(cfg["equipment"])}</a>
      <a href="/preturi/">{html.escape(cfg["prices"])}</a>
      <a href="/galerie/">{html.escape(cfg["gallery"])}</a>
      <a class="activeNav" href="{cfg["prefix"]}/">Blog</a>
      <a href="/contact/">Contact</a>
    </div>
  </nav>
</header>

<main>
  <section class="blogHero">
    <div class="rmShell">
      <p class="breadcrumbs">{html.escape(cfg["home"])} / Blog</p>
      <h1>{html.escape(cfg["title"])}</h1>
      <p>{html.escape(cfg["lead"])}</p>
    </div>
  </section>

  <section class="blogIndexWrap">
    <div class="rmShell blogGridFix">
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
    <div>
      <h3>Urmăriți-ne</h3>
      <p>Facebook</p>
    </div>
  </div>
</footer>

<script>
/* Force normal browser navigation to avoid mixed old client-rendered blog index */
document.addEventListener("click", function(e){{
  var a = e.target.closest("a[href$='/blog/'], a[href='/blog'], a[href='/en/blog/'], a[href='/ru/blog/'], a[href='/ua/blog/']");
  if(!a) return;
  e.preventDefault();
  window.location.href = a.getAttribute("href");
}});
</script>
</body>
</html>
'''

for cfg in CONFIG.values():
    items = collect(cfg)
    cfg["index"].write_text(render(cfg, items), encoding="utf-8")
    print("rebuilt", cfg["index"], "cards:", len(items))
