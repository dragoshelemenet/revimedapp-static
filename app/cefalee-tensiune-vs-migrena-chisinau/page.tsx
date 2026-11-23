import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/cefalee-tensiune-vs-migrena-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/cefalee-tensiune-vs-migrena-chisinau/", ru: "/ru/golovnaya-bol-napryazheniya-vs-migren-kishinev/", "x-default": "/cefalee-tensiune-vs-migrena-chisinau/" },
 title: "Cefalee de Tensiune vs. Migrenă vs. Durere Cervicogenă — Ghid Chișinău",
 description: "Cum deosebești cefaleea de tensiune, migrena, cefaleea cervicogenă și cefaleea de abuz de analgezice? Neurolog Chișinău (500 MDL), REG (500 MDL), Transair TES (100 MDL). 022 60 50 60."
});

export default function CefaleeTensiuneVsMigrenaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/cefalee-tensiune-vs-migrena-chisinau"
   crumbLabel="Cefalee vs. Migrenă (Ghid)"
   h1="Cefalee de Tensiune vs. Migrenă vs. Durere de Cap Cervicogenă — Diagnostic Neurologic în Chișinău"
   lead="Ghid clinic de diferențiere a celor mai frecvente 4 tipuri de dureri de cap, când sunt indicate investigațiile EEG/REG și cum reducem dependența de analgezice la Revimed PLUS+ (Ciocana)."
   directAnswer="Tratamentul durerii de cap depinde strict de tipul acesteia: ce calmează o cefalee de tensiune nu funcționează la fel în migrenă sau în durerea cervicogenă. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medicul neurolog Dr. Igor Revenco costă 500 MDL (repetată 400 MDL), reoencefalografia REG 500 MDL, EEG pe 19 canale 1600 MDL, iar procedurile preventive nefarmacologice (Transair TES, Electrosomn, acupunctură) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Una dintre cele mai frecvente greșeli ale pacienților cu dureri de cap cronice este luarea zilnică a pastilelor de durere fără un diagnostic exact — ceea ce declanșează „cefaleea prin abuz medicamentos” (durere de rebound). Identificarea tipului real de cefalee permite un tratament profilactic țintit."
   symptomsHeading="De ce este esențial diagnosticul neurologic corect în durerile de cap"
   symptoms={[
    "Dureri de cap care apar de mai mult de 4–6 ori pe lună sau necesită analgezice de peste 10 zile/lună;",
    "Durere în „bandă strânsă” în jurul frunții și cefei după lucru intens (cefalee de tensiune);",
    "Durere pulsatilă pe o jumătate a capului cu greață și sensibilitate la lumină/zgomot (migrenă);",
    "Durere care urcă din ceafă spre ochi/tâmplă odată cu înțepenirea gâtului (cefalee cervicogenă)."
]}
   approachHeading="Profilaxie modernă: reducerea frecvenței crizelor, nu doar mascarea lor"
   approachParagraphs={[
    "Dr. Igor Revenco diferențiază cefaleea primară de cauzele secundare (vasculare, sinusale, cervicale sau hipertensive), folosind la nevoie REG (500 MDL), Cartografiere cerebrală (600 MDL) sau EEG (1600 MDL).",
    "Pe lângă schema medicală profilactică, fizioterapia neuro-vasculară (Transair TES pentru stimularea sistemului antinociceptiv endogen, Electrosomn, darsonvalizare, masaj cervical și acupunctură — 100 MDL / 30 min) ajută la scăderea frecvenței și intensității episoadelor."
]}
   equipmentHeading="Diagnostic și profilaxie nefarmacologică a cefaleei"
   equipmentCards={[
    {
        "slug": "transair-01p-transair-05",
        "title": "Transair TES",
        "image": "/images/equipment/transair.webp",
        "desc": "Stimulare transcraniană pentru prevenția migrenelor și cefaleei — 100 MDL / 30 min."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG Vascular)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea tonusului arterelor cerebrale și drenajului venos — 500 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn ES-10-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Echilibrarea somnului și reducerea pragului de stres — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Tabel comparativ: Cefalee de Tensiune vs. Migrenă vs. Cervicogenă vs. Abuz analgezice",
    "columns": [
        "Tip de durere",
        "Localizare & caracter",
        "Simptome asociate",
        "Investigație & abordare"
    ],
    "rows": [
        [
            "Cefalee de tensiune",
            "Bilaterală, ca o „cască” sau presiune surdă",
            "Tensiune umeri/ceafă, fără greață severă",
            "Neurolog (500 MDL) + Electrosomn / masaj (100–200 MDL)"
        ],
        [
            "Migrenă (cu/fără aură)",
            "Unilaterală, pulsatilă, intensitate moderată–severă",
            "Greață, fotofobie, fonofobie, eventual aură vizuală",
            "REG (500 MDL) / EEG (1600 MDL) + Transair TES (100 MDL)"
        ],
        [
            "Cefalee cervicogenă",
            "Pornește din ceafă/gât spre tâmplă și orbită",
            "Limitarea rotației gâtului, spondiloză cervicală",
            "Electrospondilografie (500 MDL) + electroforeză/laser"
        ],
        [
            "Abuz medicamentos",
            "Aproape zilnică, matinală, la oprirea pastilei",
            "Consum >10–15 zile/lună de analgezice/triptani",
            "Dezescaladare ghidată medical + profilaxie nefarmacologică"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Jurnalul durerii de cap — ce notezi cu 7 zile înainte de consult",
    "steps": [
        "Notează ora debutului, durata, intensitatea (1–10) și zona exactă a durerii.",
        "Scrie ce medicamente și câte pastile ai luat la fiecare episod.",
        "Menționează factorii declanșatori posibili (somn insuficient, deshidratare, ecran, schimbare meteo, stres)."
    ]
}}
   redFlagsNotice={{
    "heading": "Când durerea de cap este o URGENȚĂ (apelați imediat 112):",
    "items": [
        "Durere de cap bruscă, explozivă („cea mai puternică din viață”, tip „lovitură de trăsnet”);",
        "Cefalee însoțită de febră mare, rigiditate a cefei, confuzie, convulsii, paralizie sau tulburare de vorbire;",
        "Durere nou apărută după un traumatism cranian sau care se agravează progresiv zi de zi."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Deschide Screeningul Neurologic orientativ (2 min) →",
    "desc": "Evaluează orientativ frecvența și semnalele asociate durerilor de cap înainte de programare:"
}}
   faqs={[
    {
        "q": "Cum știu dacă am migrenă sau cefalee de tensiune?",
        "a": "Migrena este de obicei pulsatilă, pe o parte a capului, se agravează la efort și este însoțită de greață sau sensibilitate la lumină; cefaleea de tensiune este o presiune bilaterală difuză. Diagnosticul exact se stabilește la consultația neurologică (500 MDL)."
    },
    {
        "q": "Este necesar EEG sau RMN pentru orice durere de cap?",
        "a": "Nu întotdeauna. Medicul neurolog decide la examenul clinic dacă sunt indicate REG (500 MDL), EEG (1600 MDL) sau imagistică RMN."
    }
]}
   relatedLinks={[
    { href: "/nevralgie-occipitala-arnold-durere-ceafa-chisinau/", label: "Nevralgie Occipitală Arnold" },
    { href: "/tensiune-intracraniana-simptome-neurolog-chisinau/", label: "Tensiune Intracraniană vs. Migrenă" },
    {
        "href": "/tratament-migrene-chisinau/",
        "label": "Tratament Migrene Chișinău"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn & Transair TES"
    },
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău (500 MDL)"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
