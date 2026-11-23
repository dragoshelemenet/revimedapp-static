import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/contraindicatii-fizioterapie-siguranta-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/contraindicatii-fizioterapie-siguranta-chisinau/", ru: "/ru/protivopokazaniya-k-fizioterapii-kishinev/", "x-default": "/contraindicatii-fizioterapie-siguranta-chisinau/" },
 title: "Contraindicații Fizioterapie (Laser, Magnet, Ultrasunete, Electroforeză) — Ghid Chișinău",
 description: "Ghid complet de siguranță și contraindicații absolute/relative în fizioterapie (pacemaker, implanturi metalice, sarcină, oncologie, epilepsie) — Centrul Medical Revimed PLUS+ Chișinău."
});

export default function ContraindicatiiFizioterapieSigurantaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/contraindicatii-fizioterapie-siguranta-chisinau"
   crumbLabel="Contraindicații Fizioterapie"
   h1="Contraindicații Fizioterapie: Laser, Ultrasunete, Magnetoterapie, Electroforeză și Implanturi (Ghid Clinic)"
   lead="Când este sigură fizioterapia, ce proceduri sunt interzise în pacemaker, sarcină, afecțiuni oncologice sau tije metalice și de ce triajul medicului este obligatoriu la Revimed PLUS+."
   directAnswer="Fizioterapia este sigură și bine tolerată doar atunci când sunt excluse contraindicațiile absolute (stimulator cardiac/pacemaker pentru electroterapie și magnetoterapie, tumori maligne active, febră, tromboflebită acută, sângerări active). La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), fiecare curs de proceduri (100 MDL / 30 min) începe cu verificarea istoricului medical de către specialist (consultație primară 500 MDL, repetată 400 MDL). Programări: 022 60 50 60."
   introParagraph="Una dintre cele mai frecvente întrebări ale pacienților din Moldova este: „Pot face laser, ultrasunete sau electroforeză dacă am un implant metalic, noduli tiroidieni, hipertensiune sau antecedente oncologice?”. Răspunsul responsabil nu este niciodată „da la toți”, ci o selecție medicală strictă pentru fiecare agent fizic în parte."
   symptomsHeading="Contraindicații generale absolute pentru majoritatea procedurilor de fizioterapie"
   symptoms={[
    "Afecțiuni oncologice active sau suspiciune de neoplazie neinvestigată (Revimed PLUS+ NU tratează boli oncologice);",
    "Stări febrile acute, infecții sistemice active, tuberculoză activă și procese purulente locale;",
    "Tromboflebită acută, tromboză venoasă profundă și tulburări severe de coagulare sau sângerări;",
    "Insuficiență cardiacă, respiratorie sau hipertensiune arterială severă necontrolată (decompensată)."
]}
   approachHeading="De ce triajul medicului face diferența în siguranța recuperării"
   approachParagraphs={[
    "Prezența unei contraindicații pentru UN aparat (de exemplu, implant metalic în coloană unde nu se aplică curenți profunzi sau căldură intensă peste metal) nu înseamnă întotdeauna că pacientul nu poate face nicio formă de recuperare — uneori medicul poate alege kinetoterapie blândă sau proceduri compatibile la distanță.",
    "Toate informațiile din acest ghid au scop pur educațional și orientativ; decizia finală aparține exclusiv medicului în urma evaluării clinice directe."
]}
   equipmentHeading="Proceduri efectuate sub supraveghere medicală la Revimed PLUS+"
   equipmentCards={[
    {
        "slug": "lampa-solux",
        "title": "Fototerapie Bioptron & Solux",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Lumină polarizată neinvazivă — 100 MDL / 30 min (cu verificarea contraindicațiilor)."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Medicală",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Dozată individual după verificarea alergiilor și pielii — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Laser & Magnetoterapie",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Exclusă în pacemaker și oncologie — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Matrice de siguranță: contraindicații pe fiecare tip de procedură fizioterapeutică",
    "columns": [
        "Tip procedură",
        "Contraindicații absolute cheie",
        "Precauții speciale",
        "Observație clinică"
    ],
    "rows": [
        [
            "Electroterapie (Amplipuls, Electroforeză)",
            "Pacemaker, defibrilator implantat, leziuni cutanate pe zonă",
            "Alergii la medicamentul aplicat, implant metalic pe traseu",
            "Nu se aplică trans-toracic sau pe sinusul carotidian"
        ],
        [
            "Magnetoterapie",
            "Pacemaker, pompe de insulină, oncologie activă, sarcină",
            "Hipotensiune arterială marcată, epilepsie necontrolată",
            "Se îndepărtează ceasuri și carduri magnetice"
        ],
        [
            "Laseroterapie / Bioptron",
            "Tumori maligne, aplicare directă pe globul ocular, fotosensibilitate",
            "Glanda tiroidă (nu se iradiază direct), tatuaje/nevi pigmentari",
            "Ochelari de protecție obligatorii la laser"
        ],
        [
            "Ultrasunete terapeutice",
            "Oncologie, sarcină (abdomen/lombar), tromboză, zone de creștere la copii",
            "Nu se aplică direct peste inimă, ochi, creier sau ciment/implant",
            "Necesită gel de contact și mișcare continuă"
        ],
        [
            "Electrosomn / Transair TES",
            "Implanturi metalice/electronice craniene, epilepsie necontrolată, infecții oculare",
            "Hipotensiune severă, dermatită pe frunte/pleoape",
            "Se prescrie individual după consult neurologic (500 MDL)"
        ],
        [
            "Băi calde cu nămol / Saună",
            "Hipertensiune necontrolată, cardiopatie severă, sarcină, febră, varice severe",
            "Afecțiuni tiroidiene (hipertiroidie), dermatite acute",
            "Durată și temperatură strict adaptate"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Lista celor 4 lucruri pe care trebuie să le spui obligatoriu medicului înainte de fizioterapie",
    "steps": [
        "Dacă ai stimulator cardiac (pacemaker), stent, proteză articulară, șuruburi/plăci metalice sau dispozitiv intrauterin metalic.",
        "Dacă ești însărcinată, alăptezi sau ai avut vreodată o afecțiune oncologică, tiroidiană ori epilepsie.",
        "Dacă iei anticoagulante, ai tulburări de coagulare sau alergii medicamentoase/cutanate.",
        "Dacă ai febră, răceală acută, tensiune foarte mare sau răni deschise în ziua procedurii."
    ]
}}
   redFlagsNotice={{
    "heading": "Clarificare medicală și legală importantă:",
    "items": [
        "Acest tabel are caracter exclusiv informativ și nu înlocuiește avizul medicului. Nu efectuați niciodată proceduri fizioterapeutice fără evaluare medicală prealabilă; în orice urgență acută apelați 112."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata/",
    "label": "Explorează Calculatorul de Recuperare Personalizată →",
    "desc": "După ce cunoști regulile de siguranță, poți explora orientativ direcțiile de recuperare:"
}}
   faqs={[
    {
        "q": "Se poate face fizioterapie dacă am avut cancer în trecut?",
        "a": "În afecțiunile oncologice active fizioterapia este contraindicată, iar în antecedentele oncologice în remisie orice procedură se discută strict cu medicul oncolog curant (cu aviz scris). Revimed PLUS+ nu oferă tratament oncologic."
    },
    {
        "q": "Pot face fizioterapie dacă am tije sau șuruburi metalice în coloană sau genunchi?",
        "a": "Curenții profunzi și căldura intensă peste zona cu metal sunt evitate, însă medicul poate selecta proceduri compatibile (kinetoterapie, masaj, proceduri la distanță) în urma consultației."
    }
]}
   relatedLinks={[
    { href: "/dureri-spate-sciatica-sarcina-chisinau/", label: "Spate & Sciatică în Sarcină" },
    { href: "/terapie-ultrasunete-epicondilita-tendinita-chisinau/", label: "Ultrasunete & Electrostimulare" },
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/magnetoterapie-laser-chisinau/",
        "label": "Magnetoterapie & Laser"
    },
    {
        "href": "/electroforeza-amplipuls-chisinau/",
        "label": "Electroforeză & Amplipuls"
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
