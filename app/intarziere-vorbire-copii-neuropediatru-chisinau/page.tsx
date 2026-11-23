import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/intarziere-vorbire-copii-neuropediatru-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/intarziere-vorbire-copii-neuropediatru-chisinau/", ru: "/ru/zaderzhka-rechi-u-rebenka-nevrolog-kishinev/", "x-default": "/intarziere-vorbire-copii-neuropediatru-chisinau/" },
 title: "Întârziere de Vorbire la Copii Chișinău — Neuropediatru, EEG & Cartografiere",
 description: "Când este necesar neuropediatrul și EEG-ul în întârzierea de vorbire (ZRR) la copii în Chișinău — repere pe vârste, Dr. Igor Revenco (500 MDL), EEG pediatric (1600 MDL), Cartografiere (600 MDL)."
});

export default function IntarziereVorbireCopiiNeuropediatruChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/intarziere-vorbire-copii-neuropediatru-chisinau"
   crumbLabel="Întârziere de Vorbire Copii"
   h1="Întârziere de Vorbire la Copii în Chișinău — Evaluare Neuropediatrică și Rolul EEG"
   lead="Repere clare de limbaj de la 1 la 5 ani, de ce nu trebuie să aștepți pasiv „lasă că o să vorbească”, când este util EEG-ul pediatric și cum colaborează neuropediatrul cu logopedul și audiologul."
   directAnswer="Evaluarea neuropediatrică timpurie în întârzierea de vorbire ajută la verificarea maturizării sistemului nervos central, excluderea descărcărilor subclinice pe EEG și ghidarea corectă spre logopedie și control audiologic. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neuropediatrul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), EEG pediatric 19 canale 1600 MDL, Cartografierea creierului 600 MDL, iar procedurile blânde de suport neuro-reglator (Electrosomn pediatric, Bi-LENAR) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Unul dintre cele mai frecvente mituri care întârzie intervenția eficientă este sfatul „așteptați până la 3–4 ani, că băieții vorbesc mai târziu”. Perioada 1,5–4 ani are cea mai mare neuroplasticitate pentru dezvoltarea limbajului: o evaluare calmă la timp oferă părinților claritate și un traseu multidisciplinar concret (neuropediatru + verificare auz + logoped)."
   symptomsHeading="Semne că este momentul pentru o evaluare neuropediatrică a limbajului"
   symptoms={[
    "La 15–18 luni copilul nu arată cu degetul spre obiecte de interes, nu răspunde constant la nume sau nu folosește gesturi de comunicare;",
    "La 2 ani folosește foarte puține cuvinte cu sens (sub 20–50) și nu combină două cuvinte simple („mama apă”, „tata pa”);",
    "La 3 ani nu construiește propoziții scurte, vorbește greu de înțeles pentru persoanele din afara familiei sau pare că nu înțelege cerințe simple;",
    "Există regres (pierderea unor cuvinte pe care copilul le spunea deja), somn agitat, hiperexcitabilitate sau episoade scurte de „privire în gol”."
]}
   approachHeading="De ce recomandă neuropediatrul EEG și o abordare multidisciplinară"
   approachParagraphs={[
    "Dr. Igor Revenco evaluează dezvoltarea neuro-motorie, înțelegerea limbajului receptiv, contactul vizual, istoricul perinatal și expunerea la ecrane. Când există indicație clinică, se efectuează EEG pediatric 19 canale (1600 MDL) și/sau Cartografierea creierului (600 MDL) pentru a analiza maturizarea bioelectrică a zonelor corticale implicate în limbaj și a exclude activitatea epileptiformă subclinică ce poate încetini achiziția vorbirii.",
    "Recomandarea corectă include întotdeauna verificarea auzului (ORL/audiologie, deoarece chiar o hipoacuzie ușoară după otite repetate întârzie vorbirea) și lucrul consecvent cu logopedul. Ca suport complementar blând pentru copii agitați sau cu tulburări de somn, medicul poate recomanda Electrosomn pediatric sau Bi-LENAR (100 MDL / 30 min)."
]}
   equipmentHeading="Diagnostic neinvaziv și suport neuro-pediatric blând"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "EEG Pediatric 19 Canale & Cartografiere",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea neinvazivă a maturizării corticale — EEG 1600 MDL, Cartografiere 600 MDL."
    },
    {
        "slug": "electrosomn-4t",
        "title": "Electrosomn Pediatric",
        "image": "/images/equipment/electrosomn-4t.webp",
        "desc": "Îmbunătățirea calității somnului și a capacității de concentrare la indicația medicului — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Reducerea tensiunii emoționale și a hiperexcitabilității diurne — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Repere orientative de vorbire pe vârste și evaluarea recomandată",
    "columns": [
        "Vârsta copilului",
        "Semnale de atenție",
        "Ce trebuie verificat prioritar",
        "Pași recomandați"
    ],
    "rows": [
        [
            "12–18 luni",
            "Nu gângurește variat, nu arată cu degetul, nu reacționează constant la nume",
            "Auzul (ORL/audiologie) + comunicare non-verbală",
            "Consult pediatru / ORL + Neuropediatru (500 MDL)"
        ],
        [
            "2 ani (24 luni)",
            "Sub 20–50 cuvinte clare, lipsesc combinațiile de 2 cuvinte, expunere mare la ecrane",
            "Înțelegerea comenzilor simple + dezvoltare neuro-motorie",
            "Neuropediatru (500 MDL) + stop ecrane + stimulare logopedică"
        ],
        [
            "3 ani (36 luni)",
            "Lipsesc propozițiile simple (3 cuvinte), vorbire greu inteligibilă, frustrare la comunicare",
            "Maturizare corticală, auz, aparat articulator",
            "Neuropediatru (500 MDL) + EEG pediatric (1600 MDL) + Logoped"
        ],
        [
            "4–5+ ani",
            "Dificultăți de pronunție, atenție, ritm (bâlbâială) sau regres al limbajului",
            "Funcție bioelectrică corticală + somn + evaluare psihopedagogică",
            "Neuropediatru + EEG (1600 MDL) + Cartografiere (600 MDL) + Logoped"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Cum pregătești consultația neuropediatrică pentru întârzierea de vorbire (5 pași)",
    "steps": [
        "Filmează acasă 2–3 clipuri scurte (30–60 sec) în care copilul se joacă, interacționează cu tine și încearcă să comunice — în cabinet mulți copii sunt timizi.",
        "Adu fișa medicală de la naștere, eventuale ecografii transfontanelare anterioare și istoricul otitelor/infecțiilor ORL.",
        "Notează pe o foaie toate cuvintele, silabele constante și gesturile pe care copilul le folosește frecvent, plus numărul de ore zilnice la ecrane (TV/telefon).",
        "Dacă este programat EEG pediatric (1600 MDL), spală părul copilului cu o seară înainte (fără uleiuri/balsam) și adu jucăria sau cartea lui preferată.",
        "Programează vizita într-un interval în care copilul este odihnit și mâncat (Luni–Vineri 09:00–15:00) pentru o evaluare cât mai naturală."
    ]
}}
   redFlagsNotice={{
    "heading": "Situații care necesită evaluare neuropediatrică fără amânare:",
    "items": [
        "Regres brusc al vorbirii sau pierderea unor abilități de comunicare pe care copilul le stăpânea deja (la orice vârstă);",
        "Lipsa completă de reacție la sunete puternice sau la propriul nume (necesită prioritar testare audiologică);",
        "Episoade scurte de „înghețare” / privire fixă în gol în care copilul nu răspunde când este strigat sau atins;",
        "Asocierea întârzierii de vorbire cu dificultăți de înghițire, mers instabil sau convulsii."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata/",
    "label": "Estimează orientativ pașii de evaluare și recuperare →",
    "desc": "Pregătește întrebările principale pentru discuția cu neuropediatrul Dr. Igor Revenco:"
}}
   faqs={[
    {
        "q": "Dacă copilul de 2,5 ani nu vorbește încă, este obligatoriu să fie autism?",
        "a": "Nu. Întârzierea de vorbire poate avea cauze multiple: expunere excesivă la ecrane, hipoacuzie după otite, întârziere simplă de limbaj expresiv, particularități motorii orale sau neurodezvoltare. Evaluarea neuropediatrică (500 MDL) împreună cu audiologul și logopedul clarifică exact cauza."
    },
    {
        "q": "De ce se recomandă uneori EEG la un copil care nu are convulsii?",
        "a": "EEG pediatric (1600 MDL) este complet neinvaziv și ajută neuropediatrul să verifice maturizarea activității electrice cerebrale și să excludă descărcările epileptiforme subclinice (care nu produc convulsii vizibile, dar pot afecta ariile limbajului și atenției)."
    },
    {
        "q": "Înlocuiește consultația la neuropediatru ședințele cu logopedul?",
        "a": "Nu — cele două se completează reciproc. Neuropediatrul stabilește cauza medicală, exclude factorii neurologici și susține maturizarea sistemului nervos, iar logopedul lucrează direct pe dezvoltarea practică a vorbirii și pronunției."
    }
]}
   relatedLinks={[
    { href: "/adhd-hiperactivitate-copii-neuropediatru-chisinau/", label: "ADHD & Hiperactivitate Copii" },
    {
        "href": "/neuropediatru-chisinau/",
        "label": "Neuropediatru Chișinău (500 MDL)"
    },
    {
        "href": "/eeg-copii-chisinau/",
        "label": "EEG Copii Chișinău (1600 MDL)"
    },
    {
        "href": "/ticuri-nervoase-balbaiala-copii-chisinau/",
        "label": "Ticuri & Logonevroză Copii"
    },
    {
        "href": "/convulsii-febrile-copii-eeg-neuropediatru-chisinau/",
        "label": "Convulsii Febrile & EEG Copii"
    },
    {
        "href": "/cartografierea-creierului-chisinau/",
        "label": "Cartografiere Creier (600 MDL)"
    }
]}
  />
 );
}
