import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/nevralgie-intercostala-durere-omoplati-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/nevralgie-intercostala-durere-omoplati-chisinau/", ru: "/ru/mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev/", "x-default": "/nevralgie-intercostala-durere-omoplati-chisinau/" },
 title: "Nevralgie Intercostală & Durere între Omoplați — Inimă vs. Coloană | Chișinău",
 description: "Cum deosebești nevralgia intercostală stângă și durerea între omoplați de o urgență cardiacă? ECG (200 MDL), Neurolog (500 MDL), Electrospondilografie (500 MDL) și fizioterapie (100 MDL) în Chișinău. 022 60 50 60."
});

export default function NevralgieIntercostalaDurereOmoplatiChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/nevralgie-intercostala-durere-omoplati-chisinau"
   crumbLabel="Nevralgie Intercostală & Omoplați"
   h1="Nevralgie Intercostală și Durere între Omoplați — Cum Deosebești Coloana de Inimă (Ghid Chișinău)"
   lead="Evaluare neurologică diferențială, ECG computerizat pe loc (200 MDL), electrospondilografie toracală (500 MDL) și fizioterapie de decompresie la Revimed PLUS+ (Ciocana)."
   directAnswer="Durerea ascuțită sub coaste pe stânga sau între omoplați care se accentuează la inspir profund, tuse ori răsucirea trunchiului provine adesea din iritația unui nerv intercostal sau din osteocondroza toracală — însă orice durere toracică nouă impune mai întâi excluderea unei cauze cardiace. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), ECG computerizat costă 200 MDL, consultația la medicul neurolog Dr. Igor Revenco 500 MDL (repetată 400 MDL), electrospondilografia 500 MDL, iar procedurile fizioterapeutice 100 MDL / 30 min (tarife orientative). În durere toracică acută de tip constrictiv apelați imediat 112. Programări ambulatorii: 022 60 50 60."
   introParagraph="Nervii intercostali pornesc din segmentele toracale ale coloanei vertebrale (T1–T12) și înconjoară cutia toracică de-a lungul coastelor. Contractura paravertebrală între omoplați, o protruzie toracală, un curent de aer rece sau reactivarea virală (zona zoster) pot declanșa o durere vie „în centură” sau sub sânul stâng, frecvent confundată cu o problemă cardiacă."
   symptomsHeading="Indicii clinice tipice pentru nevralgia intercostală și dorsalgie"
   symptoms={[
    "Durere înțepătoare sau ca o arsură de-a lungul unui spațiu intercostal, precis localizabilă cu degetul;",
    "Agravare clară la inspir adânc, strănut, tuse, râs sau aplecarea/răsucirea trunchiului;",
    "Puncte dureroase la palparea coloanei toracale între omoplați sau la apăsarea pe spațiul dintre coaste;",
    "Durere care persistă ore sau zile la rând cu variații legate de poziția spatelui."
]}
   approachHeading="Excluderea cauzei cardiace (ECG) și deblocarea segmentului toracal"
   approachParagraphs={[
    "Regula de siguranță la Revimed PLUS+: în orice durere toracică stângă, mai întâi verificăm profilul cardiovascular (ECG computerizat — 200 MDL) și inspectăm pielea (pentru a nu rata veziculele incipiente de herpes zoster).",
    "Odată confirmată originea vertebrogenă/neurologică, Dr. Igor Revenco (35+ ani experiență) stabilește tratamentul medicamentos și cursul de fizioterapie blândă pe coloana toracală: electroforeză, Amplipuls, laseroterapie, magnetoterapie, Bioptron sau acupunctură (100 MDL / 30 min) plus masaj medical decontracturant (200 MDL)."
]}
   equipmentHeading="Diagnostic și fizioterapie pentru coloana toracală"
   equipmentCards={[
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Intercostală",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Reducerea inflamației perineurale fără afectarea stomacului — 100 MDL / 30 min."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls-5 (Curenți SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Relaxarea spasmului muscular între omoplați — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Laser & Bioptron",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Terapie neinvazivă pe traiectul nervului intercostal — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Diagnostic diferențial: Nevralgie intercostală vs. Inimă vs. Coloană toracală vs. Zona Zoster",
    "columns": [
        "Cauză posibilă",
        "Caracterul durerii",
        "Ce o modifică",
        "Acțiune recomandată"
    ],
    "rows": [
        [
            "Nevralgie intercostală",
            "Ascuțită, înțepătoare, în linie pe o coastă",
            "Crește la inspir, tuse, răsucire, apăsare locală",
            "ECG (200 MDL) + Neurolog (500 MDL) + fizioterapie (100 MDL)"
        ],
        [
            "Urgență cardiacă (angină / infarct)",
            "Apăsare/gheară retrosternală difuză, iradiază în braț/mandibulă",
            "Apare la efort/emoție, cu transpirații reci și lipsă de aer",
            "APELAȚI IMEDIAT 112 (nu așteptați programare ambulatorie)"
        ],
        [
            "Osteocondroză toracală (omoplați)",
            "Durere surdă/arsură între omoplați, rigiditate",
            "Crește la stat prelungit la birou, scade la întindere",
            "Electrospondilografie (500 MDL) + masaj/Amplipuls"
        ],
        [
            "Herpes Zoster (debut)",
            "Arsură intensă pe o singură parte a toracelui",
            "După 2–4 zile apar vezicule cutanate pe traiectul nervului",
            "Evaluare medicală rapidă (tratament antiviral precoce)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Ce verifici înainte de consultația ambulatorie pentru durerea toracală",
    "steps": [
        "Asigură-te că nu există semne de urgență cardiacă sau pulmonară acută (dacă ai dubii, sună mai întâi la 112).",
        "Adu orice ECG recent, radiografie toracică sau RMN de coloană toracală.",
        "Observă dacă pielea din zona dureroasă are roșeață, sensibilitate extremă la atingerea tricoului sau mici vezicule."
    ]
}}
   redFlagsNotice={{
    "heading": "ATENȚIE — Semne de urgență cardiacă/pulmonară (APELAȚI 112 IMEDIAT):",
    "items": [
        "Durere sau presiune în centrul pieptului care durează peste 5–10 minute, iradiază în brațul stâng, gât, maxilar sau spate;",
        "Durere toracică însoțită de transpirații reci, greață, amețeală severă, paloare sau lipsă bruscă de aer;",
        "Durere bruscă în piept asociată cu tuse cu sânge ori umflarea asimetrică a unui picior."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/monitor-dureri-spate/",
    "label": "Evaluează durerea dorsală în Monitorul de Spate (2 min) →",
    "desc": "Notează orientativ profilul durerii dintre omoplați înainte de vizita la medic:"
}}
   faqs={[
    {
        "q": "Cum știu dacă înțepătura pe stânga e nevralgie intercostală sau inimă?",
        "a": "Nevralgia intercostală se accentuează tipic la inspir profund, mișcare și apăsare pe coastă; durerea cardiacă este difuză, constrictivă și legată de efort. Totuși, singura verificare sigură este evaluarea medicală cu ECG (200 MDL), iar în durere acută severă — apelul la 112."
    },
    {
        "q": "Cât costă evaluarea completă pentru durere între omoplați la Revimed PLUS+?",
        "a": "Consultația neurologică primară costă 500 MDL, ECG computerizat 200 MDL, electrospondilografia 500 MDL, iar procedurile de fizioterapie 100 MDL / 30 min (tarife orientative)."
    }
]}
   relatedLinks={[
    {
        "href": "/ecografie-ecg-chisinau/",
        "label": "ECG & Ecografie (200–250 MDL)"
    },
    {
        "href": "/nevralgie-neuropatie-chisinau/",
        "label": "Nevralgie & Neuropatie"
    },
    {
        "href": "/electrospondilografie-chisinau/",
        "label": "Electrospondilografie (500 MDL)"
    },
    {
        "href": "/distonie-neurovegetativa-chisinau/",
        "label": "Distonie Neurovegetativă"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
