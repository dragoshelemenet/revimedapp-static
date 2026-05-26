from pathlib import Path
import re

STYLE = """
<style id="REVIMED_EQUIPMENT_AUDIO_DETAIL_STYLE">
.equipmentSeoDetail{
  margin-top:30px!important;
  padding:34px!important;
  border-radius:24px!important;
  background:#f8fafc!important;
  border:1px solid #e5e7eb!important;
  box-shadow:0 12px 32px rgba(15,23,42,.06)!important;
}
.equipmentSeoDetail h2{
  font-size:34px!important;
  line-height:1.22!important;
  margin:0 0 18px!important;
  color:#0f172a!important;
}
.equipmentSeoDetail h3{
  font-size:26px!important;
  line-height:1.3!important;
  margin:30px 0 12px!important;
  color:#0f172a!important;
}
.equipmentSeoDetail p,
.equipmentSeoDetail li{
  font-size:21px!important;
  line-height:1.75!important;
  color:#334155!important;
}
.equipmentSeoDetail ul{
  padding-left:26px!important;
}
.equipmentAudioBox{
  margin:0 0 24px!important;
  padding:14px!important;
  border-radius:20px!important;
  background:rgba(15,23,42,.06)!important;
  border:1px solid #e2e8f0!important;
}
.equipmentAudioGrid{
  display:grid!important;
  grid-template-columns:1fr!important;
  gap:10px!important;
}
.equipmentReadBtn{
  width:100%!important;
  border:0!important;
  border-radius:16px!important;
  padding:16px 18px!important;
  font-size:20px!important;
  font-weight:900!important;
  cursor:pointer!important;
  background:#d71920!important;
  color:#fff!important;
}
.equipmentVoicePanel{
  display:grid!important;
  grid-template-columns:1fr auto 1fr!important;
  gap:10px!important;
  align-items:center!important;
}
.equipmentVoiceBtn{
  border-radius:13px!important;
  padding:12px 10px!important;
  font-size:15px!important;
  font-weight:900!important;
  cursor:pointer!important;
  background:#fff!important;
  color:#0f172a!important;
  border:1px solid #cbd5e1!important;
}
.equipmentRateBadge{
  min-width:86px!important;
  padding:10px!important;
  border-radius:14px!important;
  text-align:center!important;
  background:#fff!important;
  border:1px solid #cbd5e1!important;
  color:#0f172a!important;
}
.equipmentRateBadge span{
  display:block!important;
  font-size:12px!important;
}
.equipmentRateLabel{
  display:block!important;
  font-size:22px!important;
  font-weight:950!important;
  line-height:1!important;
  color:#d71920!important;
}
@media(max-width:760px){
  .equipmentSeoDetail{
    padding:24px!important;
  }
  .equipmentSeoDetail h2{
    font-size:28px!important;
  }
  .equipmentSeoDetail h3{
    font-size:23px!important;
  }
  .equipmentSeoDetail p,
  .equipmentSeoDetail li{
    font-size:19px!important;
    line-height:1.7!important;
  }
  .equipmentVoicePanel{
    grid-template-columns:1fr!important;
  }
  .equipmentRateBadge{
    width:100%!important;
  }
}
</style>
"""

SCRIPT = """
<script id="REVIMED_EQUIPMENT_AUDIO_DETAIL_SCRIPT">
(function(){
  var RATE_KEY="revimedEquipmentVoiceRate";
  var DEFAULT_RATE=.9,MIN_RATE=.6,MAX_RATE=1.35;
  var chunks=[],currentIndex=0,activeButton=null,isReading=false,ignoreCancelEnd=false,resumeTimer=null;

  function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
  function cleanText(text){return(text||"").replace(/\\s+/g," ").trim()}
  function getBox(){return document.querySelector(".equipmentSeoDetail")}
  function getRate(){try{var s=parseFloat(localStorage.getItem(RATE_KEY)||DEFAULT_RATE);if(!isNaN(s))return clamp(s,MIN_RATE,MAX_RATE)}catch(e){}return DEFAULT_RATE}
  function setRate(rate){
    rate=Math.round(clamp(rate,MIN_RATE,MAX_RATE)*100)/100;
    try{localStorage.setItem(RATE_KEY,String(rate))}catch(e){}
    var label=document.querySelector(".equipmentRateLabel");
    if(label)label.textContent=Math.round(rate*100)+"%";
    return rate;
  }
  function splitIntoChunks(text){
    var c=cleanText(text);if(!c)return[];
    var pieces=c.match(/[^.!?;:]+[.!?;:]?|[^.!?;:]+$/g)||[c],out=[];
    pieces.forEach(function(piece){
      piece=cleanText(piece);if(!piece)return;
      if(piece.length<=160){out.push(piece)}
      else{
        var words=piece.split(" "),buf="";
        words.forEach(function(w){
          if((buf+" "+w).trim().length>135){if(buf)out.push(buf.trim());buf=w}
          else{buf+=" "+w}
        });
        if(buf.trim())out.push(buf.trim());
      }
    });
    return out;
  }
  function buildChunks(){
    var box=getBox();if(!box)return[];
    var nodes=box.querySelectorAll("h2,h3,p,li"),arr=[];
    nodes.forEach(function(n){
      if(n.closest(".equipmentAudioBox"))return;
      var text=cleanText(n.innerText||n.textContent||"");
      splitIntoChunks(text).forEach(function(c){arr.push(c)});
    });
    return arr;
  }
  function pickVoice(lang){
    var voices=window.speechSynthesis.getVoices()||[];
    if(!voices.length)return null;
    var shortLang=lang.split("-")[0].toLowerCase();
    return voices.find(v=>(v.lang||"").toLowerCase()===lang.toLowerCase())||voices.find(v=>(v.lang||"").toLowerCase().startsWith(shortLang))||null;
  }
  function setButton(reading){
    var btn=activeButton||document.querySelector(".equipmentReadBtn");if(!btn)return;
    btn.innerHTML=reading?btn.dataset.stopText:btn.dataset.startText;
  }
  function speakCurrent(){
    if(!("speechSynthesis"in window))return;
    if(!isReading)return;
    if(!chunks.length||currentIndex>=chunks.length){
      isReading=false;currentIndex=0;setButton(false);return;
    }
    var btn=activeButton||document.querySelector(".equipmentReadBtn");
    var lang=btn?.dataset.lang||"ro-RO";
    var u=new SpeechSynthesisUtterance(chunks[currentIndex]);
    u.lang=lang;u.rate=getRate();u.pitch=1;
    var voice=pickVoice(lang);if(voice)u.voice=voice;
    u.onend=function(){if(ignoreCancelEnd)return;if(!isReading)return;currentIndex+=1;speakCurrent()};
    u.onerror=function(){if(ignoreCancelEnd)return;isReading=false;setButton(false)};
    window.speechSynthesis.speak(u);
  }
  function start(btn){
    if(!("speechSynthesis"in window)){alert("Browserul tău nu suportă citirea vocală.");return}
    activeButton=btn;chunks=buildChunks();currentIndex=0;isReading=true;ignoreCancelEnd=false;
    window.speechSynthesis.cancel();setButton(true);setTimeout(speakCurrent,80);
  }
  function stop(){
    isReading=false;ignoreCancelEnd=true;window.speechSynthesis.cancel();setButton(false);
    setTimeout(function(){ignoreCancelEnd=false},120);
  }
  function updateSpeed(delta){
    setRate(getRate()+delta);
    if(!isReading)return;
    clearTimeout(resumeTimer);
    ignoreCancelEnd=true;
    window.speechSynthesis.cancel();
    resumeTimer=setTimeout(function(){ignoreCancelEnd=false;if(isReading)speakCurrent()},120);
  }
  document.addEventListener("click",function(e){
    var read=e.target.closest(".equipmentReadBtn");
    if(read){if(isReading||window.speechSynthesis.speaking)stop();else start(read);return}
    if(e.target.closest("[data-equipment-voice='slower']")){updateSpeed(-.08);return}
    if(e.target.closest("[data-equipment-voice='faster']")){updateSpeed(.08);return}
  });
  window.addEventListener("beforeunload",function(){if("speechSynthesis"in window)window.speechSynthesis.cancel()});
  setRate(getRate());
  if("speechSynthesis"in window){window.speechSynthesis.onvoiceschanged=function(){}}
})();
</script>
"""

DETAIL = """
<!-- GPT_EQUIPMENT_DETAIL_START -->
<section class="equipmentSeoDetail">
  <div class="equipmentAudioBox">
    <div class="equipmentAudioGrid">
      <button type="button" class="equipmentReadBtn" data-lang="ro-RO" data-start-text="🔊 Ascultă descrierea utilajului" data-stop-text="⏹ Oprește citirea">🔊 Ascultă descrierea utilajului</button>
      <div class="equipmentVoicePanel">
        <button type="button" class="equipmentVoiceBtn" data-equipment-voice="slower">− Mai lent</button>
        <div class="equipmentRateBadge"><span>Viteză</span><b class="equipmentRateLabel">90%</b></div>
        <button type="button" class="equipmentVoiceBtn" data-equipment-voice="faster">+ Mai rapid</button>
      </div>
    </div>
  </div>

  <h2>Diagnostic expres în Chișinău: Aparat AMP pentru evaluare rapidă și orientare funcțională</h2>

  <p><b>Pe scurt:</b> Aparatul AMP este folosit ca instrument de diagnostic expres / evaluare rapidă, neinvazivă, pentru a oferi medicului o imagine orientativă asupra stării pacientului. La Revimed PLUS+ din Chișinău, un astfel de utilaj nu este prezentat ca înlocuitor pentru analizele clasice de laborator, ci ca o metodă de orientare inițială, utilă în discuția dintre medic și pacient.</p>

  <h3>Ce este Diagnostic expres / Aparat AMP?</h3>
  <p>În practica medicală, mulți pacienți vin cu simptome amestecate: oboseală, amețeli, dureri de cap, tensiune în corp, somn prost, anxietate, slăbiciune, dureri de spate sau senzația că organismul „nu mai funcționează normal”. În astfel de situații, medicul are nevoie să înțeleagă rapid direcția posibilă a problemei.</p>
  <p>Aparatul AMP este prezentat ca un sistem de evaluare expres, orientat spre obținerea unor informații rapide despre starea funcțională a organismului. În limbaj simplu, el poate ajuta medicul să vadă anumite indicii și să decidă mai corect ce urmează: consultație neurologică, fizioterapie, recuperare, regim, analize clasice sau investigații suplimentare.</p>

  <h3>De ce poate fi util pentru pacienții din Chișinău și Moldova?</h3>
  <p>Mulți oameni din Chișinău caută o clinică unde să poată primi rapid o direcție clară, fără să piardă săptămâni între cabinete. Diagnostic expres poate fi util mai ales când pacientul nu știe de unde să înceapă: neurolog, terapeut, fizioterapie, analize, recuperare sau tratament pentru stres și oboseală.</p>
  <p>În Moldova, pacienții ajung des la medic abia când simptomele se repetă. Un aparat de evaluare rapidă poate fi o metodă bună de pornire, dar numai dacă rezultatul este interpretat responsabil. La Revimed PLUS+, interpretarea nu se face mecanic. Medicul discută cu pacientul, întreabă despre simptome, somn, stres, durere, tratamente anterioare și stil de viață.</p>

  <h3>Ce înseamnă „analizator spectral” pe înțelesul pacientului?</h3>
  <p>Termenul „spectral” poate suna complicat. În general, metodele spectrale analizează semnale sau modele fizice pentru a obține informații despre o probă sau despre o stare funcțională. În medicină și știință există metode spectrale foarte serioase, cum ar fi spectroscopia sau spectrometria, dar fiecare aparat concret trebuie înțeles în limitele lui.</p>
  <p>De aceea, pentru Aparatul AMP, formularea corectă este: poate oferi date orientative, utile medicului în context clinic. Nu trebuie spus că aparatul „vede tot”, „pune toate diagnosticele” sau „înlocuiește laboratorul”. Aceasta ar fi o exagerare. Un rezultat are valoare doar când este corelat cu omul real din fața medicului.</p>

  <h3>Când poate avea sens această evaluare?</h3>
  <ul>
    <li>când pacientul are oboseală persistentă și nu știe de unde vine;</li>
    <li>când există amețeli, tensiune nervoasă, dureri de cap sau somn slab;</li>
    <li>când pacientul simte slăbiciune, lipsă de energie sau recuperare lentă;</li>
    <li>când există mai multe simptome mici care împreună deranjează viața de zi cu zi;</li>
    <li>când medicul vrea o orientare rapidă înainte de a recomanda pașii următori;</li>
    <li>când pacientul dorește o abordare individuală, nu o schemă standard pentru toată lumea.</li>
  </ul>

  <h3>Ce nu trebuie să aștepți de la acest aparat?</h3>
  <p>Este foarte important să fim sinceri. Diagnostic expres nu trebuie folosit pentru a promite că în câteva minute se află toate bolile. Dacă pacientul are dureri puternice, febră, scădere bruscă în greutate, leșin, simptome neurologice noi, probleme cardiace, sângerări sau alte semne serioase, este nevoie de consult medical complet și, uneori, investigații urgente.</p>
  <p>Aparatul AMP poate ajuta la orientare, dar nu anulează medicina clasică. Analizele de sânge, imagistica, ECG-ul, consultațiile de specialitate și alte investigații rămân importante atunci când medicul le consideră necesare.</p>

  <h3>Cum se integrează în abordarea Revimed PLUS+?</h3>
  <p>Revimed PLUS+ este o clinică fondată în 2005, cu activitate în Chișinău, Moldova. Medicul nostru are peste 35 de ani de experiență în domeniu, iar tratamentul este ales individual pentru fiecare pacient. Asta înseamnă că nu se pornește de la ideea „același tratament pentru toți”.</p>
  <p>Unii pacienți se simt mai bine cu fizioterapie, proceduri blânde, somn mai bun, reducerea stresului și recuperare graduală. Alții au nevoie de medicamente. Uneori este nevoie de combinație. Dacă pacientul preferă o direcție mai naturistă sau mai blândă și situația permite, medicul poate ține cont de asta. Dacă este nevoie de tratament medical clasic, se explică de ce.</p>

  <h3>De ce contează acordul pacientului?</h3>
  <p>Un pacient nu vine doar cu un simptom. Vine cu frici, buget, experiențe anterioare, preferințe și întrebări. De aceea, la Revimed PLUS+, planul se discută. Pacientul trebuie să înțeleagă ce se face, de ce se face și ce alternative există.</p>
  <p>Diagnostic expres poate fi o etapă de început în această discuție. Poate ajuta la clarificare, dar decizia medicală se ia responsabil, cu acordul pacientului și în funcție de siguranță.</p>

  <h3>Pentru ce caută oamenii această pagină?</h3>
  <p>Dacă ai căutat „diagnostic expres Chișinău”, „evaluare rapidă organism Moldova”, „analizator spectral Chișinău”, „clinică diagnostic rapid Chișinău” sau „Aparat AMP Moldova”, probabil vrei să înțelegi dacă această metodă îți poate fi utilă. Răspunsul corect este: poate fi utilă ca punct de pornire, mai ales dacă este interpretată de un medic cu experiență și nu ca un rezultat izolat.</p>

  <h3>Concluzie</h3>
  <p>Aparatul AMP pentru diagnostic expres poate fi un instrument util în evaluarea inițială, mai ales pentru pacienții cu simptome generale, oboseală, stres, amețeli sau neclaritate privind direcția medicală. La Revimed PLUS+ Chișinău, accentul este pe explicație simplă, abordare individuală și folosirea responsabilă a utilajului, fără promisiuni exagerate.</p>
</section>
<!-- GPT_EQUIPMENT_DETAIL_END -->
"""

def normalize(s):
    return s.lower().replace("ă","a").replace("â","a").replace("î","i").replace("ș","s").replace("ş","s").replace("ț","t").replace("ţ","t")

KEYS = [
    "Diagnostic expres",
    "Aparat AMP",
    "Analizator spectral",
    "formulei sanguine",
]

changed = []

for p in Path("public").glob("**/utilaj/**/index.html"):
    rel = p.relative_to("public")

    # skip utilaj listing page
    if rel.parts[-2] == "utilaj":
        continue

    s = p.read_text(encoding="utf-8", errors="ignore")
    text = normalize(re.sub("<[^>]+>", " ", s))

    if not any(normalize(k) in text for k in KEYS):
        continue

    # remove previous AMP block/style/script if re-run
    s = re.sub(r'<style id="REVIMED_EQUIPMENT_AUDIO_DETAIL_STYLE">.*?</style>\s*', "", s, flags=re.S)
    s = re.sub(r'<script id="REVIMED_EQUIPMENT_AUDIO_DETAIL_SCRIPT">.*?</script>\s*', "", s, flags=re.S)
    s = re.sub(r"<!-- GPT_EQUIPMENT_DETAIL_START -->.*?<!-- GPT_EQUIPMENT_DETAIL_END -->", "", s, flags=re.S)

    if "</head>" in s:
        s = s.replace("</head>", STYLE + "\n</head>", 1)

    if "</article>" in s:
        s = s.replace("</article>", DETAIL + "\n</article>", 1)
    elif "</main>" in s:
        s = s.replace("</main>", DETAIL + "\n</main>", 1)
    else:
        s += DETAIL

    if "</body>" in s:
        s = s.replace("</body>", SCRIPT + "\n</body>", 1)
    else:
        s += SCRIPT

    p.write_text(s, encoding="utf-8")
    changed.append(str(p))

print("Updated AMP equipment pages:", len(changed))
for x in changed:
    print(x)

if not changed:
    raise SystemExit("No AMP page matched. Send the exact utilaj page URL/slug.")
