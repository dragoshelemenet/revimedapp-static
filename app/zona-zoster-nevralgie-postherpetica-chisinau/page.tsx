import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/zona-zoster-nevralgie-postherpetica-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/zona-zoster-nevralgie-postherpetica-chisinau/", ru: "/ru/postgerpeticheskaya-nevralgiya-lishay-kishinev/", "x-default": "/zona-zoster-nevralgie-postherpetica-chisinau/" },
 title: "Zonă Zoster & Nevralgie Postherpetică Chișinău — Neurolog, Laser & Bioptron",
 description: "Durere arzătoare persistentă pe traseul nervului după Zona Zoster (nevralgie postherpetică) în Chișinău — Neurolog Dr. Igor Revenco (500 MDL), Laser, Bioptron, Magnetoterapie & Electrosomn (100 MDL / 30 min)."
});

export default function ZonaZosterNevralgiePostherpeticaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/zona-zoster-nevralgie-postherpetica-chisinau"
   crumbLabel="Nevralgie Postherpetică"
   h1="Zonă Zoster și Nevralgie Postherpetică în Chișinău — Gestionarea Durerii Neuropatice"
   lead="De ce continuă arsura și durerea intensă luni întregi după ce erupția a dispărut, ce rol are tratamentul neurologic precoce și când devin utile laserul, Bioptron și magnetoterapia."
   directAnswer="Nevralgia postherpetică este o durere neuropatică arzătoare sau înțepătoare care persistă pe traseul unui nerv (frecvent toracic/intercostal sau facial) după vindecarea erupției de Zonă Zoster, deoarece inflamația virală a afectat fibrele nervoase. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neurologul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), iar după vindecarea completă a leziunilor cutanate, procedurile fizioterapeutice blânde (Terapie Laser, Fototerapie Bioptron, Magnetoterapie, Electrosomn — 100 MDL / 30 min, tarife orientative) sprijină regenerarea nervoasă și somnul. Programări: 022 60 50 60."
   introParagraph="Un semn tipic al nevralgiei postherpetice este alodinia: până și atingerea ușoară a cămășii sau a cearșafului pe pielea unde a fost erupția declanșează o arsură greu de suportat. Analgezicele clasice de farmacie rar calmează durerea neuropatică — intervenția coordonată de medicul neurolog este esențială pentru controlul durerii și protejarea calității somnului."
   symptomsHeading="Simptome care indică nevralgia postherpetică"
   symptoms={[
    "Durere arzătoare, lancinantă sau „ca niște ace fierbinți” pe o bandă unilaterală (torace, spate, lombar ori față) după dispariția crustelor de Zonă Zoster;",
    "Alodinie — hipersensibilitate extremă la atingerea hainelor, a apei calde sau a curentului ușor de aer;",
    "Amorțeală parțială amestecată cu mâncărime profundă și durere mai intensă seara și noaptea;",
    "Insomnie severă, oboseală și epuizare nervoasă cauzate de durerea nocturnă persistentă."
]}
   approachHeading="Abordare neurologică + fizioterapie blândă (strict după vindecarea pielii)"
   approachParagraphs={[
    "Dr. Igor Revenco evaluează teritoriul nervos afectat, intensitatea durerii neuropatice și istoricul tratamentului antiviral inițial, stabilind un plan medical individualizat pentru calmarea fibrelor nervoase hiperexcitate (nu prin automedicație cu antiinflamatoare uzuale).",
    "Important pentru siguranță: fizioterapia locală NU se aplică peste vezicule deschise sau în faza infecțioasă activă. Odată ce pielea s-a epitelizat complet, procedurile neinvazive precum Terapia Laser, Fototerapia Bioptron, Magnetoterapia (pentru microcirculație și troficitate nervoasă) și Electrosomnul (pentru somnul afectat de durere) — la tariful orientativ de 100 MDL / 30 min — oferă un suport valoros în recuperare."
]}
   equipmentHeading="Suport fizioterapeutic post-erupție pentru regenerare nervoasă și somn"
   equipmentCards={[
    {
        "slug": "spectr-lc",
        "title": "Terapie Laser & Bioptron",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Stimularea microcirculației și calmarea receptorilor dureroși după vindecarea pielii — 100 MDL / 30 min."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn & Transair",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Refacerea somnului fragmentat de durerea nocturnă și modularea durerii — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Reducerea stresului și a epuizării neuro-vegetative asociate durerii cronice — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Etapele Zonei Zoster și conduita medicală corectă în fiecare fază",
    "columns": [
        "Faza",
        "Ce se observă",
        "Prioritate medicală",
        "Rolul fizioterapiei"
    ],
    "rows": [
        [
            "Faza acută eruptivă (primele 72 ore)",
            "Vezicule dureroase pe o jumătate de corp, arsură, uneori febră",
            "Consult medical RAPID pentru tratament antiviral în fereastra de 72h!",
            "NU se face fizioterapie locală peste erupția activă/vezicule"
        ],
        [
            "Zonă Zoster oftalmică (frunte, nas, pleoapă)",
            "Erupție sau durere lângă ochi, ochi roșu, vedere încețoșată",
            "URGENȚĂ oftalmologică & neurologică (112 / spital) — risc ocular!",
            "Contraindicată fizioterapia în faza acută"
        ],
        [
            "Faza subacută (1–3 luni după erupție)",
            "Pielea este vindecată, dar persistă arsuri, junghiuri și alodinie",
            "Consult Neurolog Dr. Igor Revenco (500 MDL) pentru terapie neuropatică",
            "Laser / Bioptron / Magnetoterapie blândă (100 MDL / 30 min)"
        ],
        [
            "Nevralgie postherpetică cronică (>3 luni)",
            "Durere cronică nocturnă, tulburări de somn, epuizare",
            "Management neurologic personalizat pe termen mediu",
            "Cure combinate Laser + Magnetoterapie + Electrosomn (100 MDL)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 sfaturi practice de confort și pregătire pentru consultul neurologic",
    "steps": [
        "Notează data exactă când a apărut erupția și dacă ai urmat tratament antiviral în primele 72 de ore.",
        "Poartă haine lejere din bumbac 100% moale, fără cusături aspre pe zona sensibilă.",
        "Adu lista tuturor medicamentelor și unguentelor încercate deja (și reacția lor) pentru ca neurologul să ajusteze precis schema.",
        "Evită aplicarea de comprese fierbinți, alcool sau unguente iritante pe zona cu hiperalgezie.",
        "Ține un scurt scor zilnic al durerii (0–10) ziua vs. noaptea pentru a urmări eficiența tratamentului."
    ]
}}
   redFlagsNotice={{
    "heading": "Urgență medicală în Zona Zoster — apelează IMEDIAT 112 / spital:",
    "items": [
        "Erupție pe frunte, vârful nasului sau pleoapă, durere oculară ori scăderea vederii (Zonă Zoster oftalmică);",
        "Slăbiciune facială bruscă (paralizie de nerv facial), scădere bruscă de auz sau vertij intens (sindrom Ramsay Hunt);",
        "Febră mare, confuzie, durere de cap severă cu ceafă rigidă sau erupție extinsă la persoane cu imunitate foarte scăzută."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Completează Screening-ul Neurologic Orientativ →",
    "desc": "Documentează intensitatea durerii neuropatice și impactul asupra somnului:"
}}
   faqs={[
    {
        "q": "Când pot începe ședințele de laser sau Bioptron după Zona Zoster?",
        "a": "Numai după ce veziculele s-au uscat complet și pielea este vindecată, cu acordul medicului neurolog (500 MDL), pentru a evita iritarea cutanată și a maximiza efectul de regenerare nervoasă (100 MDL / 30 min)."
    },
    {
        "q": "Mai sunt contagios dacă am nevralgie postherpetică, dar erupția a dispărut?",
        "a": "Nu — odată ce toate veziculele s-au transformat în cruste și s-au vindecat complet, persoana nu mai este contagioasă; durerea rămasă este exclusiv de natură nervoasă."
    }
]}
   relatedLinks={[
    {
        "href": "/nevralgie-intercostala-durere-omoplati-chisinau/",
        "label": "Nevralgie Intercostală Chișinău"
    },
    {
        "href": "/nevralgie-neuropatie-chisinau/",
        "label": "Nevralgie & Neuropatie"
    },
    {
        "href": "/nevralgie-trigemen-pareza-faciala-chisinau/",
        "label": "Nevralgie Trigemen & Facial"
    },
    {
        "href": "/magnetoterapie-laser-chisinau/",
        "label": "Laser & Bioptron (100 MDL)"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn (100 MDL / 30 min)"
    }
]}
  />
 );
}
