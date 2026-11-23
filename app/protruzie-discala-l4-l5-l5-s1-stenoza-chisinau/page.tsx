import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/", ru: "/ru/protruziya-diska-l4-l5-l5-s1-stenoz-kishinev/", "x-default": "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/" },
 title: "Protruzie Discală L4–L5 / L5–S1, Hernie Schmorl & Stenoză — Ghid RMN Chișinău",
 description: "Ce înseamnă pe RMN protruzia L4–L5, L5–S1, hernia Schmorl sau stenoza de canal lombar? Evaluare neurochirurgicală (500 MDL) și fizioterapie (100 MDL / 30 min) în Chișinău. 022 60 50 60."
});

export default function ProtruzieDiscalaL4L5L5S1StenozaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau"
   crumbLabel="Protruzie L4–L5 / L5–S1 & Stenoză"
   h1="Protruzie Discală L4–L5 / L5–S1, Hernie Schmorl și Stenoză Spinală — Ghid RMN & Fizioterapie în Chișinău"
   lead="Cum citești corect termenii de pe rezultatul RMN, când este sigur tratamentul conservator și ce proceduri de fizioterapie ajută la fiecare segment — explicat de Dr. Igor Revenco (neurochirurg, membru EANS)."
   directAnswer="Majoritatea protruziilor discale L4–L5 sau L5–S1 și a herniilor Schmorl nu necesită operație. La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), analiza directă a imaginilor RMN cu neurochirurgul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), electrospondilografia funcțională 500 MDL, iar procedurile de fizioterapie țintită (electroforeză, Amplipuls, laser, magnetoterapie) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Mulți pacienți se sperie când citesc pe foaia de RMN formule precum „protruzie discală circumferentială L4–L5 de 4 mm”, „hernie median-paramediană L5–S1”, „noduli Schmorl” sau „stenoză relativă de canal vertebral”. Decizia medicală corectă nu se ia niciodată doar după milimetrii de pe foaie, ci corelând secțiunile RMN cu reflexele, sensibilitatea și forța musculară la examenul clinic."
   symptomsHeading="Diferența dintre afectarea L4–L5, L5–S1 și stenoza lombară"
   symptoms={[
    "Segmentul L4–L5 (rădăcina L5): durere și amorțeală pe partea laterală a gambei spre degetul mare, uneori slăbiciune la ridicarea vârfului piciorului;",
    "Segmentul L5–S1 (rădăcina S1): durere pe partea posterioară a coapsei și gambei până în călcâi sau marginea externă a tălpii (sciatică clasică);",
    "Stenoza de canal lombar: durere sau greutate în ambele picioare după 100–300 m de mers, care cedează când te apleci în față sau te așezi (claudicație neurogenă);",
    "Hernia (nodulul) Schmorl: invaginare verticală a discului în corpul vertebral, adesea descoperire întâmplătoare ce rareori comprimă nervii singură."
]}
   approachHeading="Protocolul conservator pe etape (fără mobilizări agresive)"
   approachParagraphs={[
    "În faza dureroasă acută (inflamație radiculară), masajul energic sau tracțiunile forțate pot agrava edemul nervului; prioritatea este decompresia blândă prin electroforeză medicală, curenți Amplipuls-5/6, laseroterapie (Spectr-LC) și magnetoterapie (100 MDL / 30 min).",
    "După calmarea iritației radiculare, Dr. Igor Revenco introduce treptat masajul terapeutic (200 MDL) și kinetoterapia de stabilizare a musculaturii profunde lombare (250 MDL/oră) pentru a preveni progresia protruziei."
]}
   equipmentHeading="Aparatura utilizată pentru protruzii și stenoză"
   equipmentCards={[
    {
        "slug": "amplipuls-6",
        "title": "Amplipuls-6 (Curenți SMT)",
        "image": "/images/equipment/amplipuls-6.webp",
        "desc": "Reducerea durerii radiculare L4–L5 / L5–S1 și a spasmului muscular — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Medicală",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Terapie locală antiinflamatoare la nivelul segmentului afectat — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Spectr-LC (Laser & Magnet)",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Biostimulare și reducerea edemului periradicular — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Tabel comparativ: ce înseamnă fiecare termen de pe RMN-ul coloanei",
    "columns": [
        "Termen RMN",
        "Ce se întâmplă anatomic",
        "Abordare uzuală",
        "Când reevaluăm chirurgical"
    ],
    "rows": [
        [
            "Protruzie discală (2–4 mm)",
            "Inelul fibros bombează fără ruptură completă",
            "Tratament conservator: fizioterapie 100 MDL + kinetoterapie",
            "Doar dacă apare deficit motor progresiv"
        ],
        [
            "Hernie extruzivă (L4–L5 / L5–S1)",
            "Nucleul pulpos depășește inelul spre canal",
            "Evaluare neurochirurg (500 MDL) + decompresie conservatoare ghidată",
            "Durere refractară >6–8 săpt. sau pareză"
        ],
        [
            "Hernie (nodul) Schmorl",
            "Protruzie verticală în platoul vertebral (nu spre măduvă)",
            "Monitorizare posturală, kinetoterapie și fizioterapie la durere",
            "Aproape niciodată indicație chirurgicală"
        ],
        [
            "Stenoză de canal vertebral",
            "Îngustarea canalului prin discuri + ligamente + artroză",
            "Evaluare mers, fizioterapie blândă + exerciții în flexie",
            "Claudicație severă sau compresie medulară"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Cum te pregătești pentru consultația de analiză RMN (4 pași simpli)",
    "steps": [
        "Adu CD-ul / stick-ul / linkul DICOM al RMN-ului (nu doar concluzia scrisă pe hârtie) — neurochirurgul vizualizează direct secțiunile sagitale și axiale.",
        "Notează exact pe unde coboară durerea sau amorțeala (fată/spate/lateral pe picior) și ce poziție o calmează.",
        "Adu lista medicamentelor (antiinflamatoare, miorelaxante) luate în ultimele 30 de zile și eventuale intervenții anterioare.",
        "Menționează medicului orice contraindicație de fizioterapie (pacemaker, implanturi metalice, sarcină, tulburări de coagulare)."
    ]
}}
   redFlagsNotice={{
    "heading": "Semne de alarmă neurochirurgicală — apelați imediat 112 / Urgențe:",
    "items": [
        "Pierderea controlului vezicii urinare sau al intestinului, ori amorțeală în zona perineală („în șa” — sindrom de coadă de cal);",
        "Slăbiciune bruscă și severă a piciorului (imposibilitatea de a ridica laba piciorului — „picior căzut”);",
        "Durere dorsală apărută după un traumatism major sau însoțită de febră mare."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/monitor-dureri-spate/",
    "label": "Deschide Monitorul de Dureri de Spate (gratuit, 2 min) →",
    "desc": "Înainte de consultație, poți completa gratuit instrumentul nostru educațional de evaluare orientativă a durerilor de spate:"
}}
   faqs={[
    {
        "q": "Se resoarbe o protruzie discală L4–L5 sau L5–S1 fără operație?",
        "a": "Cu decompresie conservatoare corectă, controlul inflamației (fizioterapie 100 MDL / 30 min) și stabilizare musculară, simptomele cedează în marea majoritate a cazurilor, iar unele hernii suferă chiar resorbție parțială în timp."
    },
    {
        "q": "Este periculoasă hernia Schmorl găsită pe RMN?",
        "a": "De regulă, nodulii Schmorl mici sunt modificări cronice ale platourilor vertebrale și nu comprimă rădăcinile nervoase; medicul neurochirurg (500 MDL) verifică dacă durerea are o altă sursă asociată."
    }
]}
   relatedLinks={[
    { href: "/spondilolistezis-alunecare-vertebra-neurochirurg-chisinau/", label: "Spondilolistezis (Alunecare Vertebră)" },
    { href: "/sindrom-piriform-durere-fesa-picior-chisinau/", label: "Sindrom Piriform (Durere Fesă)" },
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de Disc Chișinău"
    },
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău (500 MDL)"
    },
    {
        "href": "/electrospondilografie-chisinau/",
        "label": "Electrospondilografie (500 MDL)"
    },
    {
        "href": "/recuperare-postoperatorie-coloana-chisinau/",
        "label": "Recuperare Post-Operatorie"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
