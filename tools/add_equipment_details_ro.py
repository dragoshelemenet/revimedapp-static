from pathlib import Path
import re
import html

DETAILS = [
{
"keys": ["Diagnostic expres", "Aparat AMP", "Analizator spectral"],
"title": "Diagnostic expres / Aparat AMP",
"body": """
<p><b>Pe scurt:</b> acest echipament este prezentat ca un sistem de evaluare rapidă, neinvazivă, folosit pentru orientare funcțională inițială, nu ca înlocuitor pentru analizele clasice de laborator.</p>
<p>Aparatele de tip analizator expres sunt folosite în unele cabinete pentru a obține rapid indicatori orientativi despre starea organismului. Ideea este ca medicul să poată vedea mai repede direcția posibilă a problemei și să decidă dacă pacientul are nevoie de investigații suplimentare, analize clasice, consultație neurologică sau proceduri de recuperare.</p>
<p>La Revimed PLUS+, un astfel de aparat nu trebuie înțeles ca „diagnostic magic”. Rezultatul are valoare doar împreună cu discuția cu pacientul, simptomele, istoricul medical și examinarea medicului. Dacă există semne importante sau simptome care se repetă, medicul poate recomanda metode confirmatoare.</p>
<p><b>Pentru pacient:</b> procedura este utilă mai ales când omul vrea o evaluare rapidă și o direcție de pornire. Totuși, deciziile serioase de tratament se iau individual, cu acordul pacientului și în funcție de ce este sigur pentru cazul lui.</p>
"""
},
{
"keys": ["Electrosomn-4T"],
"title": "Electrosomn-4T",
"body": """
<p><b>Pe scurt:</b> Electrosomn-4T este un aparat portabil pentru proceduri de electrosomn, o metodă fizioterapeutică ce folosește impulsuri electrice slabe, aplicate controlat, cu scop de relaxare neurovegetativă.</p>
<p>Electrosomnul este o metodă folosită în spațiul medical est-european pentru pacienți cu tensiune nervoasă, dereglări de somn, oboseală, stres, excitabilitate crescută sau perioade de suprasolicitare. Procedura nu trebuie înțeleasă ca somn forțat. Mai corect, ea urmărește o stare de liniștire, reducere a excitabilității și relaxare a sistemului nervos.</p>
<p>În practică, pacientul stă relaxat, iar parametrii sunt reglați de personalul medical. Senzațiile pot fi foarte fine sau aproape absente. Procedura se indică individual, mai ales la persoane care au simptome funcționale, anxietate, somn prost sau oboseală nervoasă.</p>
<p><b>Important:</b> nu se aplică la întâmplare. Medicul verifică starea pacientului, tensiunea, contraindicațiile și decide dacă metoda este potrivită sau dacă sunt necesare alte investigații ori tratament.</p>
"""
},
{
"keys": ["Electrosomn-5", "ES-10-5"],
"title": "Electrosomn-5 / ES-10-5",
"body": """
<p><b>Pe scurt:</b> Electrosomn-5 / ES-10-5 este un aparat portabil pentru electrosomn, folosit în proceduri de reglare și relaxare a sistemului nervos prin impulsuri electrice de intensitate mică.</p>
<p>Acest tip de aparat se folosește în fizioterapie pentru pacienți cu stres, oboseală, somn superficial, iritabilitate, tensiune nervoasă sau perioade în care sistemul nervos pare „suprasolicitat”. Scopul este să ajute corpul să intre într-o stare mai calmă, fără a forța pacientul și fără a înlocui tratamentul medical acolo unde acesta este necesar.</p>
<p>Procedura se face de obicei într-un mediu liniștit. Medicul sau personalul medical alege parametrii potriviți. Pentru unii pacienți, electrosomnul poate fi o metodă blândă, mai ales când se dorește reducerea tensiunii și îmbunătățirea relaxării.</p>
<p><b>La Revimed PLUS+:</b> metoda se discută cu pacientul. Dacă pacientul preferă o abordare mai blândă și cazul permite, medicul poate include procedura într-un plan individual, singură sau împreună cu alte metode.</p>
"""
},
{
"keys": ["Electrosomn-3"],
"title": "Electrosomn-3",
"body": """
<p><b>Pe scurt:</b> Electrosomn-3 este un aparat staționar pentru electrosomn, conceput pentru proceduri în cabinet, inclusiv pentru mai mulți pacienți simultan, în funcție de configurație.</p>
<p>Față de variantele portabile, un aparat staționar este gândit pentru utilizare organizată în cabinetul de fizioterapie. Electrosomnul este folosit pentru relaxare neurovegetativă, reducerea tensiunii nervoase, sprijin în tulburări funcționale de somn și în perioade de stres sau suprasolicitare.</p>
<p>Pacientul nu trebuie să simtă durere. Procedura trebuie să fie calmă și controlată. Parametrii se aleg individual, iar personalul urmărește reacția pacientului. Unii pacienți se relaxează profund, alții simt doar o liniștire treptată.</p>
<p><b>Important:</b> aparatul nu este o soluție universală. Dacă pacientul are amețeli puternice, leșin, simptome neurologice noi, durere toracică sau alte semne alarmante, este nevoie de evaluare medicală, nu doar procedură fizioterapeutică.</p>
"""
},
{
"keys": ["Etrans-1"],
"title": "Etrans-1",
"body": """
<p><b>Pe scurt:</b> Etrans-1 este un aparat pentru electroanalgezie / electrotranchilizare transcraniană, adică proceduri cu impulsuri electrice slabe aplicate transcranian, sub control medical.</p>
<p>Procedurile transcraniene de acest tip sunt folosite în unele direcții de fizioterapie pentru reglarea durerii, reducerea tensiunii nervoase și susținerea relaxării. Termenul de electroanalgezie înseamnă că metoda este orientată spre controlul durerii prin influențarea mecanismelor nervoase, nu prin anestezie clasică.</p>
<p>Pacientul trebuie evaluat înainte. Medicul decide dacă procedura este potrivită, mai ales dacă există hipertensiune, epilepsie, traumatisme, implanturi electrice, afecțiuni neurologice sau alte riscuri.</p>
<p><b>La Revimed PLUS+:</b> procedura poate fi inclusă într-un plan individual pentru durere, stres, tensiune sau recuperare, dar numai dacă medicul consideră că este sigură și utilă pentru pacient.</p>
"""
},
{
"keys": ["Etrans-2"],
"title": "Etrans-2",
"body": """
<p><b>Pe scurt:</b> Etrans-2 este un aparat pentru proceduri transcraniene de tip electroanalgezie și electrotranchilizare, folosit în fizioterapie pentru influențarea blândă a sistemului nervos.</p>
<p>Acest tip de procedură urmărește reducerea excitabilității, reglarea reacției la durere și inducerea unei stări de calm. Este important de înțeles că aparatul nu „oprește” cauza bolii, ci poate ajuta organismul să gestioneze mai bine durerea, tensiunea și răspunsul neurovegetativ.</p>
<p>În practică, se folosesc electrozi și parametri setați de specialist. Pacientul nu trebuie să simtă durere. Dacă apar disconfort, amețeală, neliniște sau senzații neobișnuite, procedura se oprește și se reevaluează.</p>
<p><b>Recomandare:</b> procedura nu se face fără consultație. Este o metodă care trebuie integrată într-un plan medical, nu aleasă singură doar pentru că „pare blândă”.</p>
"""
},
{
"keys": ["Etrans-3"],
"title": "Etrans-3",
"body": """
<p><b>Pe scurt:</b> Etrans-3 este un aparat pentru electroanalgezie transcraniană, folosit în proceduri fizioterapeutice orientate spre durere, tensiune nervoasă și reglare funcțională.</p>
<p>Electroanalgezia transcraniană se bazează pe impulsuri electrice slabe aplicate prin electrozi, cu scopul de a influența mecanismele de control al durerii și starea de excitabilitate a sistemului nervos. Pentru pacient, metoda poate fi percepută ca o procedură calmă, fără durere, dar cu nevoie de supraveghere medicală.</p>
<p>Nu orice pacient este potrivit pentru proceduri transcraniene. De aceea, medicul verifică simptomele, istoricul, tensiunea, medicația și posibilele contraindicații.</p>
<p><b>Scopul corect:</b> nu promitem vindecare rapidă, ci folosirea aparatului ca parte dintr-un plan individual, unde pot intra fizioterapie, recuperare, regim, tratament medicamentos sau metode mai blânde, în funcție de caz.</p>
"""
},
{
"keys": ["Transair-01P", "Transair-05"],
"title": "Transair-01P / Transair-05",
"body": """
<p><b>Pe scurt:</b> Transair-01P / Transair-05 face parte din gama aparatelor Transair pentru stimulare electrică transcraniană, folosită în fizioterapie pentru influențarea mecanismelor nervoase de reglare.</p>
<p>Metoda Transair este legată de direcția TES / stimulare electrică transcraniană. În literatura rusă, aceste aparate sunt asociate cu proceduri orientate spre analgezie, reducerea stresului, susținerea somnului și reglarea stării psiho-vegetative.</p>
<p>Pacientul nu trebuie să privească procedura ca pe o soluție universală. Ea poate fi utilă la anumite persoane, dar necesită selecție medicală. Sunt importante tensiunea, istoricul neurologic, existența convulsiilor, implanturilor, afecțiunilor cardiace sau altor riscuri.</p>
<p><b>La Revimed PLUS+:</b> medicul poate folosi această direcție când pacientul are durere, oboseală nervoasă, somn prost, stres sau simptome funcționale, dar numai în cadrul unui plan discutat și acceptat de pacient.</p>
"""
},
{
"keys": ["Transair-01S", "Transair-04"],
"title": "Transair-01S / Transair-04",
"body": """
<p><b>Pe scurt:</b> Transair-01S / Transair-04 este un aparat pentru proceduri transcraniene de stimulare electrică, folosit în fizioterapie în scop de reglare neurofuncțională.</p>
<p>Dispozitivele Transair au fost dezvoltate pentru stimulare transcraniană cu parametri specifici. În practică, astfel de proceduri sunt folosite pentru influențarea durerii, stării de tensiune, oboselii, somnului și reacției organismului la stres.</p>
<p>Procedura trebuie să fie individualizată. Un pacient poate avea nevoie de abordare blândă, altul de combinație cu fizioterapie, iar altul de tratament medicamentos. Aparatul nu înlocuiește evaluarea medicală.</p>
<p><b>Siguranță:</b> procedurile transcraniene nu se fac la pacienți cu contraindicații importante fără acord medical. Medicul stabilește dacă metoda are sens pentru cazul concret.</p>
"""
},
{
"keys": ["Transair-03"],
"title": "Transair-01S / Transair-03",
"body": """
<p><b>Pe scurt:</b> Transair-01S / Transair-03 este un aparat din gama Transair pentru stimulare electrică transcraniană, folosit în proceduri de fizioterapie și reglare funcțională.</p>
<p>Prin aplicarea controlată a impulsurilor, metoda urmărește influențarea unor mecanisme ale sistemului nervos implicate în durere, stres, somn și echilibru neurovegetativ. Pentru pacient, procedura trebuie să fie calmă, fără durere și supravegheată.</p>
<p>Nu este o metodă pe care pacientul o alege singur. Medicul trebuie să înțeleagă cauza simptomelor: durere cronică, anxietate, epuizare, probleme de somn, tensiune musculară sau alte cauze.</p>
<p><b>Utilizare corectă:</b> aparatul poate fi parte dintr-un plan mai larg, alături de fizioterapie, exerciții, regim și tratament medical dacă este necesar.</p>
"""
},
{
"keys": ["LENAR"],
"title": "LENAR",
"body": """
<p><b>Pe scurt:</b> LENAR este un echipament de neurostimulare folosit în proceduri funcționale, orientate spre reglarea activității sistemului nervos și susținerea recuperării.</p>
<p>Aparatele de tip LENAR sunt asociate cu proceduri de stimulare blândă, unde scopul nu este „forțarea” organismului, ci susținerea mecanismelor de reglare. Ele pot fi folosite în contexte de stres, tulburări funcționale, durere, recuperare și dezechilibru neurovegetativ, în funcție de indicația medicului.</p>
<p>Pacientul trebuie să înțeleagă că neurostimularea nu este același lucru cu un medicament și nici nu înlocuiește investigațiile când acestea sunt necesare. Uneori ajută metodele blânde, alteori este nevoie de tratament clasic sau combinație.</p>
<p><b>La Revimed PLUS+:</b> medicul alege procedura în funcție de simptome, toleranță, preferințele pacientului și siguranță.</p>
"""
},
{
"keys": ["Bi-LENAR"],
"title": "Bi-LENAR",
"body": """
<p><b>Pe scurt:</b> Bi-LENAR este un echipament din gama LENAR, utilizat pentru proceduri funcționale de neurostimulare și reglare.</p>
<p>Acest tip de aparat este folosit în abordări unde sistemul nervos are nevoie de susținere: oboseală, stres, tensiune, dureri funcționale, recuperare după perioade de suprasolicitare sau simptome care se repetă fără o cauză simplă.</p>
<p>Procedura trebuie privită ca o parte dintr-un plan, nu ca tratament unic pentru orice problemă. Medicul poate combina neurostimularea cu fizioterapie, regim, exerciții sau medicamente, dacă situația o cere.</p>
<p><b>Pentru pacient:</b> avantajul este caracterul blând și posibilitatea de adaptare. Totuși, orice procedură trebuie discutată și acceptată, mai ales dacă pacientul are frici, sensibilitate crescută sau reacționează puternic la proceduri.</p>
"""
},
{
"keys": ["MDM-K"],
"title": "MDM-K",
"body": """
<p><b>Pe scurt:</b> MDM-K este un aparat compact pentru modulare mezodiencefalică, o metodă transcraniană cu impulsuri electrice slabe, folosită în fizioterapie pentru reglare neurofuncțională.</p>
<p>MDM înseamnă modulare mezodiencefalică. Metoda este descrisă în literatura rusă ca influențare a sistemului nervos central prin curenți slabi, cu parametri specifici. Se folosește ca procedură de susținere în diferite programe de recuperare și reglare funcțională.</p>
<p>În cabinet, procedura se aplică numai după evaluare. Medicul verifică dacă pacientul are contraindicații, ce simptome are și ce scop urmărește: durere, recuperare, stres, somn, oboseală sau echilibru neurovegetativ.</p>
<p><b>Important:</b> aparatul este un instrument, nu un diagnostic. Rezultatul depinde de alegerea corectă a pacientului și de integrarea procedurii într-un plan individual.</p>
"""
},
{
"keys": ["MDM-101"],
"title": "MDM-101",
"body": """
<p><b>Pe scurt:</b> MDM-101 este un aparat pentru modulare mezodiencefalică, utilizat în proceduri transcraniene de reglare funcțională, inclusiv în cabinet pentru mai mulți pacienți, în funcție de configurație.</p>
<p>Modularea mezodiencefalică este folosită în unele sisteme de fizioterapie pentru influențarea răspunsului neurovegetativ, durerii, stresului și proceselor de recuperare. Procedura se bazează pe curent slab aplicat controlat, nu pe stimulare dură.</p>
<p>Pacientul poate simți ușoare senzații locale sau aproape nimic. Parametrii trebuie reglați de personalul medical. Dacă pacientul are disconfort, anxietate sau reacții neobișnuite, procedura se ajustează sau se oprește.</p>
<p><b>La Revimed PLUS+:</b> MDM-101 poate fi folosit ca parte dintr-o abordare individuală, mai ales când pacientul caută o metodă mai blândă, dar numai dacă medicul consideră că este potrivit.</p>
"""
},
{
"keys": ["MDM-2000"],
"title": "MDM-2000",
"body": """
<p><b>Pe scurt:</b> MDM-2000 este un complex computerizat pentru modulare mezodiencefalică, folosit pentru proceduri transcraniene cu parametri controlați.</p>
<p>Față de aparatele compacte, un complex computerizat permite de obicei o reglare mai organizată a parametrilor și urmărirea procedurii. Scopul MDM este reglarea funcțională prin curenți slabi, cu aplicare transcraniană.</p>
<p>În practică, MDM poate fi inclus în programe de recuperare, reducere a tensiunii, susținerea adaptării organismului la stres și managementul unor simptome funcționale. Totuși, indicația trebuie decisă medical.</p>
<p><b>Pentru pacient:</b> procedura nu este aleasă pentru că aparatul este „mai modern”, ci pentru că medicul consideră că se potrivește simptomelor, siguranței și obiectivelor pacientului.</p>
"""
},
{
"keys": ["Amplipuls-4"],
"title": "Amplipuls-4",
"body": """
<p><b>Pe scurt:</b> Amplipuls-4 este un aparat pentru amplipulsterapie, metodă de electroterapie bazată pe curenți modulați folosiți în fizioterapie pentru durere, mușchi și recuperare.</p>
<p>Amplipulsterapia este cunoscută în fizioterapia est-europeană prin utilizarea curenților sinusoidali modulați. Procedura poate fi aplicată local sau, în anumite protocoale, în direcții speciale, inclusiv pentru influențarea durerii și relaxarea musculaturii.</p>
<p>Pacientul poate simți vibrații, pulsații sau furnicături controlate. Intensitatea trebuie să fie suportabilă, fără durere. Procedura este utilă mai ales când există dureri musculare, tensiune, spasm, recuperare după suprasolicitare sau nevoie de stimulare blândă.</p>
<p><b>Important:</b> parametrii se aleg individual. La persoanele cu pacemaker, epilepsie, tumori, sarcină sau afecțiuni acute, medicul decide cu atenție dacă procedura este permisă.</p>
"""
},
{
"keys": ["Amplipuls-5"],
"title": "Amplipuls-5",
"body": """
<p><b>Pe scurt:</b> Amplipuls-5 este un aparat pentru proceduri de amplipulsterapie, folosit în fizioterapie pentru durere, contracturi, tonus muscular și recuperare.</p>
<p>Prin curenți modulați, aparatul poate produce o stimulare ritmică a țesuturilor. În funcție de setări, procedura poate fi orientată spre calmarea durerii, relaxarea musculaturii sau stimulare funcțională.</p>
<p>Este o metodă frecvent folosită în probleme de coloană, dureri musculare, tensiune cervicală/lombară, recuperare și rigiditate. Totuși, alegerea zonei și intensității se face numai după evaluare.</p>
<p><b>La Revimed PLUS+:</b> amplipulsterapia poate fi combinată cu masaj, exerciții, fizioterapie și recomandări de regim, pentru ca efectul să nu fie doar temporar.</p>
"""
},
{
"keys": ["Amplipuls-6"],
"title": "Amplipuls-6",
"body": """
<p><b>Pe scurt:</b> Amplipuls-6 este un aparat de amplipulsterapie pentru proceduri cu curenți modulați, folosit în recuperare și fizioterapie.</p>
<p>Acest tip de aparat permite stimulare controlată a zonelor dureroase sau tensionate. Pacientul simte de obicei pulsații sau furnicături, iar intensitatea se crește treptat, doar până la nivel confortabil.</p>
<p>Amplipulsterapia poate fi utilă în dureri de spate, dureri cervicale, contracturi musculare, recuperare după perioade de imobilizare sau suprasolicitare. Nu înlocuiește diagnosticul, dar poate reduce disconfortul și ajuta pacientul să înceapă recuperarea.</p>
<p><b>Important:</b> rezultatul depinde de cauză. Dacă durerea vine de la compresie nervoasă severă, inflamație acută sau altă problemă serioasă, medicul poate recomanda investigații și tratament suplimentar.</p>
"""
},
{
"keys": ["Kandadzia", "Kang Da Jia", "LQX-2000A"],
"title": "Kandadzia / Kang Da Jia / LQX-2000A",
"body": """
<p><b>Pe scurt:</b> Kandadzia / Kang Da Jia / LQX-2000A este un aparat de vibromasaj și stimulare reflexă, folosit pentru relaxare musculară, stimularea zonelor reflexogene și susținerea circulației locale.</p>
<p>Vibromasajul poate ajuta la reducerea senzației de tensiune, rigiditate și oboseală musculară. Prin stimulare ritmică, pacientul poate simți relaxare locală și încălzire ușoară a zonei lucrate.</p>
<p>Masajul reflex nu trebuie prezentat ca tratament pentru orice boală. Mai corect, este o procedură de suport: poate ajuta pacientul să se relaxeze, să tolereze mai bine recuperarea și să reducă tensiunea din corp.</p>
<p><b>Utilizare corectă:</b> medicul decide zonele și intensitatea. Nu se aplică peste inflamații acute, tromboze suspecte, răni, zone dureroase inexplicabile sau fără evaluare când există simptome neurologice importante.</p>
"""
},
{
"keys": ["electroforeză medicamentoasă", "electroforeza medicamentoasa", "electroforeză"],
"title": "Aparat pentru electroforeză medicamentoasă",
"body": """
<p><b>Pe scurt:</b> electroforeza medicamentoasă este o metodă de fizioterapie prin care un medicament ionizat este introdus local prin piele cu ajutorul unui curent electric slab.</p>
<p>Scopul nu este să înlocuiască tratamentul general, ci să livreze local o substanță recomandată de medic. Curentul ajută ionii să pătrundă superficial în țesuturi, unde pot forma un fel de depozit local și pot acționa treptat.</p>
<p>Procedura se folosește în unele probleme dureroase, inflamatorii sau funcționale, în funcție de medicamentul ales. Pacientul poate simți furnicături ușoare sub electrozi. Nu trebuie să apară arsură sau durere.</p>
<p><b>Important:</b> se face doar cu substanțe indicate medical. Alergiile, pielea iritată, rănile, pacemakerul, sarcina și alte probleme pot schimba decizia medicului.</p>
"""
},
{
"keys": ["Spectr-LC", "Spectr-LС", "Спектр"],
"title": "Spectr-LC",
"body": """
<p><b>Pe scurt:</b> Spectr-LC este un aparat pentru iradiere infraroșie, folosit în proceduri de fizioterapie cu efect termic local.</p>
<p>Infraroșul produce încălzire superficială și poate susține relaxarea musculară, microcirculația locală și reducerea rigidității. Este o procedură simplă, dar trebuie dozată corect.</p>
<p>Pacientul simte căldură. Aceasta trebuie să fie plăcută, nu arzătoare. Procedura poate fi utilă în tensiuni musculare, contracturi, dureri cronice ușoare sau înainte de alte proceduri de recuperare.</p>
<p><b>Atenție:</b> nu se aplică peste inflamații acute, febră, tumori, zone cu sensibilitate redusă, tulburări circulatorii severe sau la pacienți care nu simt bine căldura.</p>
"""
},
{
"keys": ["Lampă Solux", "Solux"],
"title": "Lampă Solux",
"body": """
<p><b>Pe scurt:</b> lampa Solux este un echipament pentru proceduri termice cu lumină și căldură, folosit pentru încălzire locală controlată.</p>
<p>Solux este cunoscută în fizioterapie ca metodă de termoterapie. Căldura poate relaxa musculatura, poate crește local circulația și poate pregăti țesuturile pentru masaj, exerciții sau alte proceduri.</p>
<p>Procedura este plăcută pentru mulți pacienți, dar nu este potrivită în orice situație. Dacă durerea este acută, zona este roșie, umflată sau inflamată, căldura poate agrava simptomele.</p>
<p><b>La Revimed PLUS+:</b> lampa se folosește doar când medicul consideră că efectul termic este potrivit pentru problema pacientului.</p>
"""
},
{
"keys": ["DETOX Spa Bio"],
"title": "DETOX Spa Bio",
"body": """
<p><b>Pe scurt:</b> DETOX Spa Bio este un sistem de baie ionică pentru picioare, prezentat ca procedură de curățare/detoxifiere. Din punct de vedere medical, trebuie explicat prudent: dovezile serioase nu confirmă că astfel de aparate scot toxinele din organism prin apă.</p>
<p>Schimbarea culorii apei apare de multe ori din reacții electrochimice, săruri, impurități și coroziunea elementelor metalice, nu neapărat din „toxine” eliminate de corp. De aceea, la Revimed PLUS+ această procedură trebuie privită ca metodă complementară de relaxare, nu ca tratament principal.</p>
<p>Poate fi plăcută pentru pacienți care au stres, oboseală, picioare tensionate sau doresc o procedură blândă. Dar nu trebuie folosită ca înlocuitor pentru consult, analize sau tratament atunci când există simptome serioase.</p>
<p><b>Atenție:</b> nu este recomandată peste răni, infecții, iritații, neuropatie severă fără sensibilitate, probleme circulatorii importante sau fără acord medical la pacienți fragili.</p>
"""
},
{
"keys": ["SPA SY-F088", "DETOX BIO-178"],
"title": "SPA SY-F088 / DETOX BIO-178",
"body": """
<p><b>Pe scurt:</b> SPA SY-F088 / DETOX BIO-178 este un sistem de baie ionică pentru picioare, folosit ca procedură complementară de relaxare și îngrijire, nu ca metodă medicală dovedită de eliminare a toxinelor.</p>
<p>Aceste aparate sunt promovate frecvent ca „detox”, dar trebuie explicat onest: schimbarea culorii apei nu dovedește că toxinele au fost eliminate. În multe cazuri culoarea apare prin reacții ale apei, sărurilor și componentelor aparatului.</p>
<p>Procedura poate avea valoare de confort: pacientul stă, se relaxează, picioarele sunt în apă caldă, iar experiența poate reduce tensiunea și stresul. Acesta este un beneficiu real pentru unii pacienți, dar nu trebuie transformat într-o promisiune medicală falsă.</p>
<p><b>Recomandare:</b> pentru probleme neurologice, dureri, amorțeli, oboseală severă sau simptome repetate, pacientul are nevoie de evaluare medicală, nu doar proceduri de detox.</p>
"""
}
]

def normalize(s):
    return s.lower().replace("ă","a").replace("â","a").replace("î","i").replace("ș","s").replace("ş","s").replace("ț","t").replace("ţ","t")

def build_block(item):
    return f"""
<!-- GPT_EQUIPMENT_DETAIL_START -->
<section class="equipmentDeepDetail" style="margin-top:28px;padding:26px;border-radius:22px;background:#f8fafc;border:1px solid #e5e7eb">
  <h2 style="font-size:30px;line-height:1.25;margin:0 0 16px;color:#0f172a">Descriere detaliată: {html.escape(item['title'])}</h2>
  <div style="font-size:20px;line-height:1.75;color:#334155">
    {item['body']}
  </div>
</section>
<!-- GPT_EQUIPMENT_DETAIL_END -->
"""

changed = []
matched = []

for p in Path("public").glob("**/utilaj/**/index.html"):
    s = p.read_text(encoding="utf-8", errors="ignore")
    original = s
    text = normalize(re.sub("<[^>]+>", " ", s))

    # skip utilaj index/listing pages
    rel = p.relative_to("public")
    if rel.parts[-2] == "utilaj":
        continue

    found = None
    for item in DETAILS:
        if any(normalize(k) in text for k in item["keys"]):
            found = item
            break

    if not found:
        continue

    s = re.sub(r"<!-- GPT_EQUIPMENT_DETAIL_START -->.*?<!-- GPT_EQUIPMENT_DETAIL_END -->", "", s, flags=re.S)
    block = build_block(found)

    if "</article>" in s:
        s = s.replace("</article>", block + "\n</article>", 1)
    elif "</main>" in s:
        s = s.replace("</main>", block + "\n</main>", 1)
    else:
        s += block

    if s != original:
        p.write_text(s, encoding="utf-8")
        changed.append(str(p))
        matched.append(found["title"])

print("Updated equipment pages:", len(changed))
for page, title in zip(changed, matched):
    print(title, "=>", page)

missing = []
all_text = ""
for p in Path("public").glob("**/utilaj/**/index.html"):
    all_text += normalize(re.sub("<[^>]+>", " ", p.read_text(encoding="utf-8", errors="ignore"))) + "\n"

for item in DETAILS:
    if item["title"] not in matched:
        missing.append(item["title"])

print("\\nNot matched automatically:", len(missing))
for m in missing:
    print("-", m)
