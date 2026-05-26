from pathlib import Path
import re

FAVICON_LINKS = """
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<meta name="theme-color" content="#ffffff"/>
"""

STYLE = """
<style id="REVIMED_BLOG_ACCESSIBILITY_FINAL">
.articleHeroMedia{position:relative!important;max-width:920px!important;margin:0 auto 12px auto!important;border-radius:22px!important;overflow:hidden!important}
.articleHeroMedia>img{display:block!important;width:100%!important;max-height:420px!important;object-fit:cover!important;border-radius:22px!important}
.articleToolsOverlay{position:absolute!important;left:18px!important;right:18px!important;bottom:18px!important;z-index:5!important}
.articleToolsBox{width:100%!important;margin:0!important;padding:14px!important;border-radius:22px!important;background:rgba(15,23,42,.52)!important;border:1px solid rgba(255,255,255,.25)!important;backdrop-filter:blur(20px) saturate(1.3)!important;-webkit-backdrop-filter:blur(20px) saturate(1.3)!important;box-shadow:0 10px 32px rgba(15,23,42,.28)!important}
.articleToolsGrid{display:grid!important;grid-template-columns:1fr!important;gap:10px!important}
.readAloudBtn{width:100%!important;border:0!important;border-radius:16px!important;padding:15px 18px!important;font-size:19px!important;font-weight:900!important;cursor:pointer!important;background:#d71920!important;color:#fff!important}
.articleVoicePanel{display:grid!important;grid-template-columns:1fr auto 1fr!important;align-items:center!important;gap:10px!important}
.articleSmallBtn{border-radius:13px!important;padding:12px 10px!important;font-size:14px!important;font-weight:900!important;cursor:pointer!important;background:rgba(255,255,255,.9)!important;color:#0f172a!important;border:1px solid rgba(255,255,255,.55)!important;min-height:44px!important}
.voiceRateBadge{min-width:86px!important;padding:10px!important;border-radius:14px!important;text-align:center!important;background:rgba(255,255,255,.18)!important;border:1px solid rgba(255,255,255,.24)!important;color:#fff!important}
.voiceRateBadge span{display:block!important;font-size:12px!important;font-weight:700!important}
.voiceRateLabel{display:block!important;font-size:22px!important;font-weight:950!important;line-height:1!important}

article.revimedBlogArticle{display:block!important;width:100%!important;max-width:920px!important;margin:0 auto!important;padding:48px!important;border-radius:22px!important;box-sizing:border-box!important}
article.revimedBlogArticle,article.revimedBlogArticle p,article.revimedBlogArticle li{font-size:23px!important;line-height:1.74!important;color:#334155!important;letter-spacing:.01em!important}
article.revimedBlogArticle h2,article.revimedBlogArticle h3{font-size:30px!important;line-height:1.28!important;margin-top:34px!important;margin-bottom:14px!important;color:#0f172a!important}
article.revimedBlogArticle b,article.revimedBlogArticle strong,article.revimedBlogArticle a{font-size:inherit!important}

.revimedArticleIntro{font-weight:900!important;color:#0f172a!important;background:#f1f5f9!important;border-left:5px solid #d71920!important;padding:16px 18px!important;border-radius:14px!important;margin-bottom:24px!important}

@media(max-width:760px){
  .articleHeroMedia{margin-left:12px!important;margin-right:12px!important}
  .articleToolsOverlay{left:10px!important;right:10px!important;bottom:10px!important}
  .articleVoicePanel{grid-template-columns:1fr!important}
  .readAloudBtn{font-size:16px!important;padding:13px 12px!important}
  .articleSmallBtn{font-size:13px!important;min-height:40px!important}
  .voiceRateBadge{width:100%!important}
  article.revimedBlogArticle{max-width:calc(100% - 24px)!important;padding:28px!important}
  article.revimedBlogArticle,article.revimedBlogArticle p,article.revimedBlogArticle li{font-size:20px!important;line-height:1.7!important}
  article.revimedBlogArticle h2,article.revimedBlogArticle h3{font-size:26px!important;line-height:1.28!important}
}
</style>
"""

SCRIPT = """
<script id="REVIMED_BLOG_ACCESSIBILITY_SCRIPT">
(function(){
  var RATE_KEY="revimedVoiceRate",DEFAULT_RATE=.9,MIN_RATE=.6,MAX_RATE=1.35;
  var chunks=[],currentIndex=0,activeButton=null,isReading=false,ignoreCancelEnd=false,resumeTimer=null;
  function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
  function getArticle(){return document.querySelector("article")}
  function cleanText(text){return(text||"").replace(/\\s+/g," ").trim()}
  function makeTextReadable(){var a=getArticle();if(a)a.classList.add("revimedBlogArticle")}
  function getRate(){try{var s=parseFloat(localStorage.getItem(RATE_KEY)||DEFAULT_RATE);if(!isNaN(s))return clamp(s,MIN_RATE,MAX_RATE)}catch(e){}return DEFAULT_RATE}
  function setRate(rate){rate=Math.round(clamp(rate,MIN_RATE,MAX_RATE)*100)/100;try{localStorage.setItem(RATE_KEY,String(rate))}catch(e){}var l=document.querySelector(".voiceRateLabel");if(l)l.textContent=Math.round(rate*100)+"%";return rate}
  function splitIntoChunks(text){var c=cleanText(text);if(!c)return[];var pieces=c.match(/[^.!?;:]+[.!?;:]?|[^.!?;:]+$/g)||[c],out=[];pieces.forEach(function(piece){piece=cleanText(piece);if(!piece)return;if(piece.length<=160){out.push(piece)}else{var words=piece.split(" "),buf="";words.forEach(function(w){if((buf+" "+w).trim().length>135){if(buf)out.push(buf.trim());buf=w}else{buf+=" "+w}});if(buf.trim())out.push(buf.trim())}});return out}
  function buildChunks(){var a=getArticle();if(!a)return[];var nodes=a.querySelectorAll("h2,h3,p,li"),arr=[];nodes.forEach(function(n){var text=cleanText(n.innerText||n.textContent||"");if(!text)return;if(text.includes("Revimed PLUS+ — clinică fondată"))return;splitIntoChunks(text).forEach(function(c){arr.push(c)})});if(!arr.length)arr=splitIntoChunks(a.innerText||a.textContent||"");return arr}
  function pickVoice(lang){var voices=window.speechSynthesis.getVoices()||[];if(!voices.length)return null;var shortLang=lang.split("-")[0].toLowerCase();return voices.find(v=>(v.lang||"").toLowerCase()===lang.toLowerCase())||voices.find(v=>(v.lang||"").toLowerCase().startsWith(shortLang))||null}
  function setButtonReading(reading){var btn=activeButton||document.querySelector(".readAloudBtn");if(!btn)return;btn.innerHTML=reading?btn.dataset.stopText:btn.dataset.startText;btn.dataset.playing=reading?"1":"0"}
  function speakCurrent(){if(!("speechSynthesis"in window))return;if(!isReading)return;if(!chunks.length||currentIndex>=chunks.length){isReading=false;currentIndex=0;setButtonReading(false);return}var btn=activeButton||document.querySelector(".readAloudBtn");var lang=btn?.dataset.lang||document.documentElement.lang||"ro-RO";var u=new SpeechSynthesisUtterance(chunks[currentIndex]);u.lang=lang;u.rate=getRate();u.pitch=1;var voice=pickVoice(lang);if(voice)u.voice=voice;u.onend=function(){if(ignoreCancelEnd)return;if(!isReading)return;currentIndex+=1;speakCurrent()};u.onerror=function(){if(ignoreCancelEnd)return;isReading=false;setButtonReading(false)};window.speechSynthesis.speak(u)}
  function startReading(btn){if(!("speechSynthesis"in window)){alert(btn.dataset.unsupported||"Text-to-speech is not supported in this browser.");return}activeButton=btn;chunks=buildChunks();currentIndex=0;isReading=true;ignoreCancelEnd=false;window.speechSynthesis.cancel();setButtonReading(true);setTimeout(speakCurrent,80)}
  function stopReading(){isReading=false;ignoreCancelEnd=true;window.speechSynthesis.cancel();setButtonReading(false);setTimeout(function(){ignoreCancelEnd=false},120)}
  function updateSpeedAndContinue(delta){setRate(getRate()+delta);if(!isReading)return;clearTimeout(resumeTimer);ignoreCancelEnd=true;window.speechSynthesis.cancel();resumeTimer=setTimeout(function(){ignoreCancelEnd=false;if(isReading)speakCurrent()},120)}
  document.addEventListener("click",function(e){var readBtn=e.target.closest(".readAloudBtn");if(readBtn){if(isReading||window.speechSynthesis.speaking)stopReading();else startReading(readBtn);return}if(e.target.closest("[data-voice-speed='slower']")){updateSpeedAndContinue(-.08);return}if(e.target.closest("[data-voice-speed='faster']")){updateSpeedAndContinue(.08);return}});
  window.addEventListener("beforeunload",function(){if("speechSynthesis"in window)window.speechSynthesis.cancel()});
  makeTextReadable();setRate(getRate());if("speechSynthesis"in window){window.speechSynthesis.onvoiceschanged=function(){}}
})();
</script>
"""

TEXTS = {
    "ro": ["ro-RO", "🔊 Ascultă articolul", "⏹ Oprește citirea", "− Mai lent", "+ Mai rapid", "Viteză", "Browserul tău nu suportă citirea vocală.", "Pe scurt: articolul explică simplu ce poate însemna problema, când merită să fii atent și ce pași poți face mai departe."],
    "en": ["en-US", "🔊 Listen to article", "⏹ Stop reading", "− Slower", "+ Faster", "Speed", "Your browser does not support text-to-speech.", "In short: this article explains in simple language what the problem may mean, when to pay attention and what steps can help next."],
    "ru": ["ru-RU", "🔊 Прослушать статью", "⏹ Остановить чтение", "− Медленнее", "+ Быстрее", "Скорость", "Ваш браузер не поддерживает чтение текста.", "Коротко: статья простыми словами объясняет, что может означать проблема, когда стоит быть внимательнее и что делать дальше."],
    "ua": ["uk-UA", "🔊 Прослухати статтю", "⏹ Зупинити читання", "− Повільніше", "+ Швидше", "Швидкість", "Ваш браузер не підтримує читання тексту.", "Коротко: стаття простими словами пояснює, що може означати проблема, коли варто бути уважнішим і що робити далі."]
}

def lang_for_path(path: Path):
    s = str(path)
    if "/public/en/blog/" in s:
        return "en"
    if "/public/ru/blog/" in s:
        return "ru"
    if "/public/ua/blog/" in s:
        return "ua"
    return "ro"

def overlay(lang):
    t = TEXTS[lang]
    return f'''
<div class="articleToolsOverlay">
  <div class="articleToolsBox">
    <div class="articleToolsGrid">
      <button type="button" class="readAloudBtn" data-lang="{t[0]}" data-start-text="{t[1]}" data-stop-text="{t[2]}" data-unsupported="{t[6]}">{t[1]}</button>
      <div class="articleVoicePanel">
        <button type="button" class="articleSmallBtn" data-voice-speed="slower">{t[3]}</button>
        <div class="voiceRateBadge"><span>{t[5]}</span><b class="voiceRateLabel">90%</b></div>
        <button type="button" class="articleSmallBtn" data-voice-speed="faster">{t[4]}</button>
      </div>
    </div>
  </div>
</div>
'''

changed = []

for p in Path("public").glob("**/blog/**/index.html"):
    rel = p.relative_to("public")

    # skip blog index pages
    if rel.parts[-2] == "blog":
        continue

    s = p.read_text(encoding="utf-8", errors="ignore")
    if "<article" not in s:
        continue

    lang = lang_for_path(p)
    t = TEXTS[lang]

    # favicon: remove old icon/manifest/theme lines and re-add full set
    s = re.sub(r'<link[^>]+rel=["\'][^"\']*(?:icon|shortcut icon|apple-touch-icon|manifest)[^"\']*["\'][^>]*>\s*', '', s, flags=re.I)
    s = re.sub(r'<meta[^>]+name=["\']theme-color["\'][^>]*>\s*', '', s, flags=re.I)

    # remove old accessibility styles/scripts/helpers
    for sid in [
        "REVIMED_BLOG_ACCESSIBILITY_FINAL",
        "REVIMED_BLOG_ACCESSIBILITY_SCRIPT",
        "REVIMED_BLOG_TEXT_SIZE_FINAL",
        "REVIMED_FORCE_BIG_BLOG_TEXT",
        "REVIMED_INLINE_BIG_TEXT_HELPER",
        "REVIMED_BLOG_GAP_FIX"
    ]:
        s = re.sub(rf'<style id="{sid}">.*?</style>\s*', '', s, flags=re.S)
        s = re.sub(rf'<script id="{sid}">.*?</script>\s*', '', s, flags=re.S)

    s = re.sub(r"<style>\s*\.readAloudBox.*?</style>", "", s, flags=re.S)
    s = re.sub(r"<style>\s*\.articleToolsBox.*?</style>", "", s, flags=re.S)
    s = re.sub(r"<style>\s*\.articleHeroMedia.*?</style>", "", s, flags=re.S)
    s = re.sub(r"<script>\s*\(function\(\)\{.*?speechSynthesis.*?</script>", "", s, flags=re.S)

    # remove old blocks/leftovers
    s = re.sub(r"<div class=\"articleToolsOverlay\">.*?</div>\s*</div>\s*</div>", "", s, flags=re.S)
    s = re.sub(r"<div class=\"articleToolsOverlay\">.*?</div>", "", s, flags=re.S)
    s = re.sub(r"<div class=\"articleToolsBox\">.*?</div>", "", s, flags=re.S)
    s = re.sub(r"<div class=\"readAloudBox\">.*?</div>", "", s, flags=re.S)
    s = re.sub(r"<button[^>]*data-voice-speed=[\"'](?:slower|faster)[\"'][^>]*>.*?</button>\s*", "", s, flags=re.S)
    s = re.sub(r"<button[^>]*data-text-size=[\"'][^\"']+[\"'][^>]*>.*?</button>\s*", "", s, flags=re.S)
    s = re.sub(r"<div class=\"voiceRateBadge\">.*?</div>\s*", "", s, flags=re.S)
    s = re.sub(r"<p class=\"articleToolsHint\">.*?</p>\s*", "", s, flags=re.S)
    s = re.sub(r"<p class=\"articleVoiceHint\">.*?</p>\s*", "", s, flags=re.S)

    # remove previous auto intros and add fresh intro
    s = re.sub(r'<p[^>]*class="revimedArticleIntro"[^>]*>.*?</p>\s*', '', s, flags=re.S)
    intro = f'<p class="revimedArticleIntro">{t[7]}</p>\n'

    # unwrap old/broken image wrappers
    s = re.sub(r"<div class=\"articleHeroMedia\">\s*(<img[^>]+>)\s*</div>", r"\1", s, flags=re.S)
    s = re.sub(r"<div class=\"articleHeroMedia\">\s*(<img[^>]+>)", r"\1", s, flags=re.S)
    s = re.sub(r"</div>\s*</div>\s*(?=<article)", "", s, count=1, flags=re.S)

    # clean old inline oversized text attempts
    s = re.sub(r'font-size:\s*\d+px!important;?', '', s)
    s = re.sub(r'line-height:\s*[\d.]+!important;?', '', s)

    # add favicon + accessibility final CSS late in head
    s = s.replace("</head>", FAVICON_LINKS + STYLE + "\n</head>", 1)

    # overlay on first image
    img_pattern = r'(<img[^>]+alt="[^"]*"[^>]*style="[^"]*object-fit:cover[^"]*"[^>]*/?>)'
    if re.search(img_pattern, s, flags=re.S):
        s = re.sub(img_pattern, r'<div class="articleHeroMedia">\1' + overlay(lang) + r'</div>', s, count=1, flags=re.S)
    else:
        s = re.sub(r"(<article\b[^>]*>)", overlay(lang) + r"\1", s, count=1)

    # article class
    s = re.sub(r'\s*(revimedBlogArticle|revimedBigBlogText|articleReadableText)\s*', ' ', s)
    if re.search(r'<article[^>]*class="', s):
        s = re.sub(r'<article([^>]*class=")([^"]*)"', r'<article\1\2 revimedBlogArticle"', s, count=1)
    else:
        s = re.sub(r'<article', r'<article class="revimedBlogArticle"', s, count=1)

    # centered layout inline
    if re.search(r'<article[^>]*style="', s):
        s = re.sub(
            r'(<article[^>]*style=")([^"]*)"',
            r'\1\2;max-width:920px!important;margin:0 auto!important;padding:48px!important;"',
            s,
            count=1
        )
    else:
        s = re.sub(
            r'(<article[^>]*)>',
            r'\1 style="max-width:920px!important;margin:0 auto!important;padding:48px!important;">',
            s,
            count=1
        )

    # intro at start of article
    s = re.sub(r'(<article\b[^>]*>)', r'\1\n' + intro, s, count=1)

    # script at bottom
    s = s.replace("</body>", SCRIPT + "\n</body>", 1)

    p.write_text(s, encoding="utf-8")
    changed.append(str(p))

print("Repaired blog articles:", len(changed))
for x in changed:
    print(x)
