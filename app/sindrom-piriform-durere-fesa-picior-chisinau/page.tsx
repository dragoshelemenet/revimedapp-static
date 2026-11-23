import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/sindrom-piriform-durere-fesa-picior-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/sindrom-piriform-durere-fesa-picior-chisinau/", ru: "/ru/sindrom-grushevidnoy-myshtsy-bol-yagoditsa-kishinev/", "x-default": "/sindrom-piriform-durere-fesa-picior-chisinau/" },
 title: "Sindrom Piriform Chișinău — Durere în Fesă care Coboară pe Picior | Neurolog & Fizioterapie",
 description: "Cum deosebești sindromul piriform (compresia musculară a nervului sciatic) de hernia de disc L4–S1 în Chișinău — Neurolog Dr. Igor Revenco (500 MDL), fizioterapie (100 MDL / 30 min), masaj (200 MDL), kinetoterapie (250 MDL)."
});

export default function SindromPiriformDurereFesaPiciorChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/sindrom-piriform-durere-fesa-picior-chisinau"
   crumbLabel="Sindrom Piriform"
   h1="Sindrom Piriform în Chișinău — Durere Adânc în Fesă cu Iradiere pe Picior (vs. Hernie de Disc)"
   lead="De ce durerea de tip sciatic care se agravează când stai pe scaun sau conduci nu este întotdeauna o hernie operabilă — evaluare clinică și recuperare țintită la Revimed PLUS+."
   directAnswer="Sindromul piriform apare atunci când mușchiul piriform (situat adânc în fesă) intră în spasm și comprimă nervul sciatic, provocând durere fesieră profundă care iradiază pe spatele coapsei și se accentuează tipic la șezut prelungit sau la volan. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), diferențierea clinică față de hernia de disc lombară este realizată de neurologul-neurochirurg Dr. Igor Revenco (500 MDL primară / 400 MDL repetată) + Electrospondilografie (500 MDL), iar recuperarea conservatoare combină fizioterapia aparat (Ultrasunete, Laser, Amplipuls, Magnetoterapie — 100 MDL / 30 min), masajul terapeutic 60 min (200 MDL) și kinetoterapia (250 MDL; tarife orientative). Programări: 022 60 50 60."
   introParagraph="Mulți pacienți cu durere înțepătoare în mijlocul fesei care coboară spre coapsă primesc un RMN lombar cu o mică protruzie incidentală și se tem de operație, deși sursa principală a iritației nervului sciatic este spasmul mușchiului piriform (frecvent la șoferi, programatori și persoane care stau ore întregi pe scaun). Diferențierea clinică exactă schimbă complet strategia de recuperare."
   symptomsHeading="Semne clasice ale sindromului piriform"
   symptoms={[
    "Durere surdă sau ascuțită localizată profund în centrul fesei, sensibilă la apăsare directă pe punctul fesier;",
    "Iradiere pe partea posterioară a coapsei (uneori până la genunchi sau gambă), asemănătoare sciaticii, dar cu durere lombară redusă sau absentă;",
    "Agravare evidentă după 15–30 de minute de stat pe scaun tare, la volan, urcat scări ori ridicarea din poziție șezândă;",
    "Disconfort la încrucișarea picioarelor sau la rotația internă a șoldului, ameliorat parțial la mers ușor sau întindere pe spate."
]}
   approachHeading="Cum abordăm sindromul piriform la Revimed PLUS+ (fără stretching agresiv)"
   approachParagraphs={[
    "Dr. Igor Revenco efectuează testele clinice diferențiale (evaluarea reflexelor, a forței piciorului și a manevrelor de tensionare piriformă vs. radiculară) și, la nevoie, Electrospondilografie computerizată (500 MDL) pentru a verifica implicarea segmentelor lombare L4–S1.",
    "Odată confirmată componenta musculară, planul conservator relaxează profund mușchiul piriform și calmează inflamația din jurul nervului sciatic: Ultrasunete, Laser, Amplipuls sau Magnetoterapie (100 MDL / 30 min — 5 ședințe = 500 MDL), masaj terapeutic miorelaxant (200 MDL / 60 min) și kinetoterapie progresivă blândă (250 MDL) — evitând întinderile forțate care irită și mai tare nervul."
]}
   equipmentHeading="Proceduri țintite pentru relaxarea mușchiului piriform și a nervului sciatic"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls-5 (Curenți analgezici)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Relaxează spasmul muscular profund și scade durerea sciatică — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Laser & Magnetoterapie",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Calmează inflamația perineurală în profunzimea fesei — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză & Ultrasunete",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Îmbunătățirea microcirculației și a elasticității musculare — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Tabel diferențial: Sindrom Piriform vs. Hernie L4–S1 vs. Sacroiliită vs. Șold",
    "columns": [
        "Cauză",
        "Unde doare cel mai tare",
        "Ce agravează durerea",
        "Evaluare & plan"
    ],
    "rows": [
        [
            "Sindrom piriform",
            "Adânc în mijlocul fesei → spatele coapsei (rar cu durere puternică de mijloc)",
            "Stat prelungit pe scaun, condus, portofel în buzunarul din spate, scări",
            "Neurolog (500 MDL) + Fizioterapie (100 MDL) + Masaj (200 MDL) + Kineto"
        ],
        [
            "Hernie de disc L4–L5 / L5–S1",
            "Zona lombară + iradiere clară pe gambă/talpă/degete, uneori amorțeală",
            "Tuse, strănut, aplecare în față, ridicarea greutăților",
            "Neurochirurg (500 MDL) + RMN lombar + recuperare conservatoare țintită"
        ],
        [
            "Disfuncție / inflamație sacro-iliacă",
            "Un lateral jos al spatelui (la „gropița” sacrală), redoare matinală",
            "Ridicarea din pat, stat pe un singur picior, rotirea bazinului",
            "Evaluare neurologică/reumatologică + fizioterapie antiinflamatoare"
        ],
        [
            "Coxartroză / Bursită șold",
            "Zona inghinală sau lateral pe osul șoldului (trohanter)",
            "Mers prelungit, dormit pe partea dureroasă, încălțat",
            "Evaluare ortopedică + ultrasunete / magnetoterapie (100 MDL)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 reguli zilnice imediate dacă suspectezi sindrom piriform",
    "steps": [
        "Scoate definitiv portofelul, telefonul sau cheile din buzunarul din spate al pantalonilor când stai jos sau conduci.",
        "Ridică-te la fiecare 30–40 de minute de lucru la birou sau condus pentru 2 minute de mers ușor.",
        "Evită masajul agresiv cu mingea de tenis/lacrosse direct pe nervul sciatic inflamat — poate agrava paresteziile.",
        "Adu la consultație eventualul RMN lombar sau de șold pentru a corela imaginile cu examenul clinic real.",
        "Poartă încălțăminte cu susținere bună (inegalitatea posturii sau tocurile înalte suprasolicită bazinul)."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale de alarmă neurochirurgicale — sună IMEDIAT la 112 / Urgență:",
    "items": [
        "Pierderea controlului vezicii urinare sau intestinale, ori amorțeală în zona perineală („în șa” — sindrom coadă de cal);",
        "Slăbiciune bruscă severă a piciorului („picior căzut” — nu poți ridica vârful labei piciorului);",
        "Durere fesieră însoțită de febră mare, frisoane sau traumatism major recent (cădere de la înălțime / accident)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/monitor-dureri-spate/",
    "label": "Folosește Monitorul Durerilor de Spate & Sciatică →",
    "desc": "Notează traseul exact al durerii și pozițiile declanșatoare înainte de consultație:"
}}
   faqs={[
    {
        "q": "Se vede sindromul piriform pe RMN-ul de coloană lombară?",
        "a": "De obicei nu — RMN-ul lombar analizează vertebrele și discurile (ajutând la excluderea herniei), în timp ce sindromul piriform se stabilește în principal prin examenul clinic neurologic specializat (500 MDL)."
    },
    {
        "q": "Câte ședințe de fizioterapie și masaj sunt necesare în sindromul piriform?",
        "a": "În funcție de vechimea spasmului, se recomandă orientativ 5–10 ședințe de fizioterapie aparat (100 MDL / 30 min → 500–1000 MDL) asociate cu masaj terapeutic (200 MDL) și exerciții corecte de kinetoterapie (250 MDL)."
    },
    {
        "q": "Pot face exerciții de pe internet pentru sindromul piriform în faza dureroasă?",
        "a": "Întinderile forțate în plină inflamație pot tensiona suplimentar nervul sciatic. Este mult mai sigur ca medicul să confirme întâi că nu este o hernie acută și să dozeze corect procedurile de relaxare și mișcarea."
    }
]}
   relatedLinks={[
    {
        "href": "/dureri-de-spate-sciatica-chisinau/",
        "label": "Dureri de Spate & Sciatică"
    },
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de Disc fără Operație"
    },
    {
        "href": "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/",
        "label": "Ghid RMN L4–L5 / L5–S1"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic (200 MDL)"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie (250 MDL)"
    }
]}
  />
 );
}
