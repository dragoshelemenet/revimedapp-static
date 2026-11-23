import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/oboseala-cronica-burnout-biofeedback-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/oboseala-cronica-burnout-biofeedback-chisinau/", ru: "/ru/hronicheskaya-ustalost-vygoranie-biofidbek-kishinev/", "x-default": "/oboseala-cronica-burnout-biofeedback-chisinau/" },
 title: "Oboseală Cronică, Burnout & Biofeedback Chișinău — Neurolog, RUNO & AVS (100 MDL)",
 description: "Cum abordează neurologul oboseala cronică, epuizarea nervoasă și burnout-ul în Chișinău — Dr. Igor Revenco (500 MDL), test vegetativ RUNO (500 MDL), Biofeedback, AVS alfa-beta-theta și Electrosomn (100 MDL / 30 min)."
});

export default function ObosealaCronicaBurnoutBiofeedbackChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/oboseala-cronica-burnout-biofeedback-chisinau"
   crumbLabel="Oboseală Cronică & Biofeedback"
   h1="Oboseală Cronică, Burnout și Biofeedback în Chișinău — Evaluare Neuro-Vegetativă"
   lead="Când odihna de weekend nu te mai reface: diferențierea epuizării neuro-vegetative de cauzele endocrine/anemice și protocolul nefarmacologic cu RUNO, Biofeedback, stimulare AVS și Electrosomn."
   directAnswer="Epuizarea nervoasă, burnout-ul și sindromul de oboseală cronică reflectă dereglarea prelungită a sistemului nervos autonom și a calității somnului, necesitând mai întâi excluderea cauzelor organice (tiroidă, anemie, carențe) prin analize de sânge și consult neurologic. La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neurologul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), testarea vegetativă RUNO 500 MDL, iar procedurile nefarmacologice de autoreglare (Biofeedback pentru controlul stresului, stimulare audio-video AVS alfa-beta-theta, Electrosomn, Bi-LENAR) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Te trezești la fel de obosit ca seara, ai „ceață mentală”, îți pierzi răbdarea ușor și simți că nici concediul nu îți mai încarcă bateriile? În epuizarea neuro-vegetativă prelungită, sistemul nervos simpatic rămâne blocat în modul de alertă continuă. Abordarea corectă combină evaluarea medicală (excluderea cauzelor ascunse) cu tehnici obiective de reechilibrare precum Biofeedback, stimularea AVS și Electrosomn."
   symptomsHeading="Semne tipice de epuizare neuro-vegetativă și burnout"
   symptoms={[
    "Oboseală profundă persistentă de săptămâni sau luni care nu dispare după somnul de noapte;",
    "„Ceață mentală” (scăderea memoriei de lucru, dificultate de concentrare, oboseală rapidă la citit/calculator);",
    "Somn fragmentat (adoarme greu sau se trezește la 3–4 dimineața cu mintea agitată), dureri de cap de tensiune și umeri încordați;",
    "Palpitații la stres minor, intoleranță la zgomot/lumină, iritabilitate și scăderea energiei fizice."
]}
   approachHeading="Protocol integrat fără automedicație haotică: RUNO + Biofeedback + AVS + Electrosomn"
   approachParagraphs={[
    "Dr. Igor Revenco începe cu evaluarea neurologică completă (500 MDL) și verificarea contextului clinic (recomandând analizele de sânge esențiale — hemoleucogramă, feritină, TSH, vitamina D, glicemie — pentru a exclude anemia sau disfuncțiile tiroidiene, cu îndrumare spre medicul de familie/endocrinolog dacă este cazul). Pentru evaluarea obiectivă a dezechilibrului vegetativ se poate efectua Termalgometria RUNO (500 MDL).",
    "În planul de refacere nefarmacologică (fără dependență medicamentoasă), Revimed PLUS+ oferă metode rare în Chișinău la tariful orientativ de 100 MDL / 30 min: Biofeedback pentru controlul stresului (antrenarea conștientă a relaxării autonome), stimulare cerebrală audio-video AVS cu unde alfa/beta/theta, Electrosomn și Bi-LENAR pentru refacerea arhitecturii somnului."
]}
   equipmentHeading="Tehnologii nefarmacologice de recuperare neuro-vegetativă (100 MDL / 30 min)"
   equipmentCards={[
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn & Biofeedback",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Refacerea somnului profund și antrenamentul controlului stresului — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR & Stimulare AVS",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Stimulare audio-video (alfa/beta/theta) și reducerea hiperreactivității la stres — 100 MDL / 30 min."
    },
    {
        "slug": "transair-01p-transair-05",
        "title": "Transair (TES-terapie)",
        "image": "/images/equipment/transair.webp",
        "desc": "Susținerea echilibrului endorfinic și reducerea cefaleei de tensiune — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Diferențiere clinică: Oboseală simplă vs. Burnout vs. Oboseală cronică vs. Cauze endocrine",
    "columns": [
        "Stare",
        "Durată & tipar",
        "Ce o diferențiază",
        "Pașii medicali corecți"
    ],
    "rows": [
        [
            "Oboseală trecătoare de suprasolicitare",
            "Zile – 2 săptămâni",
            "Dispare clar după câteva nopți de somn bun și pauză reală",
            "Igiena somnului, pauze de ecrane, hidratare și mișcare moderată"
        ],
        [
            "Burnout / epuizare neuro-vegetativă",
            "Săptămâni – luni, legată de stres cronic",
            "Somn neodihnitor, încordare musculară, iritabilitate, „ceață mentală”",
            "Neurolog (500 MDL) + RUNO (500 MDL) + Biofeedback / AVS / Electrosomn (100 MDL)"
        ],
        [
            "Sindrom de oboseală cronică (>6 luni)",
            "Peste 6 luni, agravare după efort minim",
            "Oboseală severă post-efort, tulburări cognitive și de somn persistente",
            "Excludere cauze organice + evaluare neuropsihologică + recuperare blândă dozată"
        ],
        [
            "Cauză endocrină, anemică sau cardiacă",
            "Progresivă, uneori cu paloare, căderea părului, frig sau puls rapid",
            "Confirmare prin analize de sânge (TSH, feritină, hemoglobină, vit. D) + ECG",
            "Analize laborator + ECG (200 MDL) + medic de familie / endocrinolog"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 pași utili înainte de consultul pentru oboseală cronică și Biofeedback",
    "steps": [
        "Dacă ai analize recente (hemoleucogramă, feritină, TSH, glicemie, vitamina D), adu-le la consultație pentru a economisi timp.",
        "Notează timp de 5 zile ora de culcare, trezirile nocturne, numărul de cafele/energizante și momentele de cădere bruscă a energiei.",
        "În ziua testului vegetativ RUNO (500 MDL) sau a ședinței de Biofeedback (100 MDL), evită cafeaua tare și energizantele cu 3–4 ore înainte.",
        "Oprește ecranele luminoase cu 60 de minute înainte de culcare — lumina albastră blochează melatonina naturală.",
        "Nu lua suplimente stimulante sau sedative în combinații necontrolate fără avizul medicului."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale de alarmă care necesită investigație medicală prioritară (sau 112):",
    "items": [
        "Oboseală severă însoțită de lipsă de aer la efort mic, durere în piept, leșin sau bătăi cardiace foarte neregulate (112);",
        "Scădere neintenționată semnificativă în greutate, febră prelungită sau transpirații nocturne abundente;",
        "Slăbiciune musculară progresivă reală (dificultate la urcat scări sau ridicarea obiectelor), vedere dublă ori tulburări de înghițire."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/respiratie-terapeutica/",
    "label": "Încearcă exercițiul ghidat de Respirație & Relaxare (3 min) →",
    "desc": "Un prim pas practic de auto-reglare a sistemului nervos autonom pe care îl aprofundezi prin Biofeedback:"
}}
   faqs={[
    {
        "q": "Ce este stimularea cerebrală audio-video AVS (alfa, beta, theta) și Biofeedback-ul?",
        "a": "Biofeedback-ul (100 MDL / 30 min) antrenează capacitatea organismului de a reduce tensiunea autonomă, iar stimularea AVS (100 MDL / 30 min) folosește impulsuri blânde audio-vizuale ritmice pentru a ghida creierul din starea de suprasolicitare spre ritmuri relaxante alfa/theta."
    },
    {
        "q": "Înlocuiește screening-ul funcțional AMP analizele de sânge pentru anemie sau tiroidă?",
        "a": "Nu. Screening-ul neinvaziv AMP (1000 MDL) oferă o evaluare funcțională complementară, dar analizele clasice de laborator din sânge (hemoleucogramă, feritină, TSH) rămân standardul obligatoriu pentru diagnosticul anemiei sau al bolilor tiroidiene."
    },
    {
        "q": "Câte ședințe de Biofeedback, AVS sau Electrosomn se recomandă în burnout?",
        "a": "În funcție de gradul de epuizare și de somn, medicul neurolog recomandă frecvent un curs orientativ de 5–10 ședințe (500–1000 MDL la tariful de 100 MDL / 30 min), adaptat individual."
    }
]}
   relatedLinks={[
    {
        "href": "/distonie-neurovegetativa-chisinau/",
        "label": "Distonie Neurovegetativă & RUNO (500 MDL)"
    },
    {
        "href": "/insomnie-tratament-chisinau/",
        "label": "Tratament Insomnie & Electrosomn"
    },
    {
        "href": "/evaluare-neuropsihologica-testare-cognitiva-chisinau/",
        "label": "Evaluare Neuropsihologică & MMPI"
    },
    {
        "href": "/spasmofilie-crize-hiperexcitabilitate-chisinau/",
        "label": "Spasmofilie & Hiperexcitabilitate"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
