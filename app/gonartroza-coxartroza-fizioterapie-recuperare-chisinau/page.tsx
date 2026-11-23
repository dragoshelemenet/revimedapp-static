import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/gonartroza-coxartroza-fizioterapie-recuperare-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/gonartroza-coxartroza-fizioterapie-recuperare-chisinau/", ru: "/ru/gonartroz-koksartroz-fizioterapiya-kishinev/", "x-default": "/gonartroza-coxartroza-fizioterapie-recuperare-chisinau/" },
 title: "Gonartroză, Coxartroză & Recuperare Genunchi/Șold Chișinău — Fizioterapie (100 MDL)",
 description: "Fizioterapie pentru gonartroză (genunchi), coxartroză (șold) și recuperare după artroscopie în Chișinău (Ciocana) — Magnetoterapie, Laser, Ultrasunete (100 MDL / 30 min), Nămol Saki (150 MDL), Kinetoterapie (250 MDL)."
});

export default function GonartrozaCoxartrozaFizioterapieRecuperareChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/gonartroza-coxartroza-fizioterapie-recuperare-chisinau"
   crumbLabel="Gonartroză & Coxartroză"
   h1="Gonartroză, Coxartroză și Recuperare Genunchi / Șold în Chișinău — Fizioterapie și Kinetoterapie"
   lead="Cum reducem durerea articulară la urcat scări, rigiditatea matinală și cum pregătim/recuperăm genunchiul sau șoldul după artroscopie — cu reguli stricte de siguranță pentru proteze la Revimed PLUS+."
   directAnswer="În gonartroza (artroza genunchiului) și coxartroza (artroza șoldului) de stadiu I–II, fizioterapia combinată cu kinetoterapia de descărcare încetinește pierderea mobilității și reduce dependența de antiinflamatoare orale. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), procedurile aparat din lista de metode curative (Magnetoterapie, Terapie Laser, Ultrasunete, Amplipuls, Electroforeză) costă 100 MDL / 30 min (cură 10 ședințe = 1000 MDL), băile curative cu nămol din Saki 150 MDL/sesiune, masajul terapeutic 200 MDL, iar recuperarea post-operatorie 60 min / kinetoterapia 220–250 MDL (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Durerea de genunchi la coborâtul scărilor, pocniturile articulare sau durerea în zona inghinală la încălțare determină mulți pacienți să reducă complet mișcarea — ceea ce slăbește musculatura stabilizatoare (cvadriceps, fesieri) și accelerează uzura cartilajului. Cheia este calmarea durerii prin fizioterapie blândă urmată de mișcare dozată fără impact."
   symptomsHeading="Când este recomandat un program de fizioterapie și recuperare articulară"
   symptoms={[
    "Gonartroză stadiul I–II: durere la primii pași dimineața, la urcat/coborât scări sau la ridicarea de pe scaun;",
    "Coxartroză stadiul I–II: durere profundă în zona inghinală sau lateral pe șold, limitarea rotației și dificultate la încălțat;",
    "Recuperare după artroscopie de genunchi (menisc, ligamente), entorse sau imobilizări prelungite, după acordul medicului ortoped;",
    "Diferențierea durerii reale de genunchi/șold de durerea iradiată din coloana lombară (L3–L5) — evaluată de neurolog/neurochirurg (500 MDL)."
]}
   approachHeading="Protocol combinat de calmare articulară și reguli de siguranță după protezare"
   approachParagraphs={[
    "În fazele neacute fără colecție lichidiană fierbinte, alternăm Magnetoterapia și Laseroterapia (efect antiinflamator și de microcirculație) cu Ultrasunete sau Electroforeză (100 MDL / 30 min) și, la indicație, aplicații/băi cu nămol terapeutic din Saki (150 MDL). Odată scăzută durerea, kinetoterapia (250 MDL) întărește mușchii care „preiau” greutatea de pe articulație.",
    "Regulă strictă de siguranță la Revimed PLUS+: pacienților cu proteză metalică de șold sau genunchi NU li se aplică ultrasunete, curenți electrici sau căldură profundă direct peste implantul metalic — recuperarea post-protezare se bazează pe kinetoterapie progresivă, reeducarea mersului și masaj blând periarticular cu avizul ortopedului."
]}
   equipmentHeading="Proceduri fizioterapeutice și balneare pentru articulații"
   equipmentCards={[
    {
        "slug": "spectr-lc",
        "title": "Laser & Magnetoterapie",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Reducerea inflamației periarticulare și a rigidității matinale — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză & Ultrasunete",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Efect local țintit fără iritarea stomacului (fără implanturi metalice în zonă) — 100 MDL / 30 min."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls & Electrostimulare",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Calmare analgezică și tonifierea cvadricepsului slăbit — de la 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Ghid pe stadii pentru genunchi și șold — ce funcționează și ce este contraindicat",
    "columns": [
        "Situație",
        "Obiectiv principal",
        "Metode potrivite Revimed PLUS+",
        "Restricții importante"
    ],
    "rows": [
        [
            "Gonartroză / Coxartroză stadiul I–II",
            "Reducerea durerii + întărirea musculaturii",
            "Magnet + Laser + Ultrasunete (100 MDL) + Nămol Saki (150 MDL) + Kineto (250 MDL)",
            "Fără sărituri/genuflexiuni profunde dureroase; controlul greutății"
        ],
        [
            "Stadiul III (durere la repaus / deformare)",
            "Ameliorare simptomatică & evaluare ortopedică",
            "Laser / Magnet blând (100 MDL) + exerciții izometrice fără încărcare",
            "Evaluare la ortoped pentru opțiunile terapeutice pe termen lung"
        ],
        [
            "Recuperare după artroscopie / protezare",
            "Recâștigarea flexiei/extensiei și a mersului corect",
            "Reabilitare post-operatorie 60 min (220 MDL) + Kinetoterapie (250 MDL)",
            "FĂRĂ ultrasunete/curenți/căldură direct peste proteza metalică!"
        ],
        [
            "Genunchi brusc umflat, fierbinte, blocat",
            "Diagnostic ortopedic / reumatologic rapid",
            "Evaluare medicală prioritară + ecografie / puncție dacă e indicată",
            "NU se aplică căldură, nămol sau fizioterapie în inflamație acută!"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 pași utili înainte de cura de recuperare pentru genunchi sau șold",
    "steps": [
        "Adu radiografia sau RMN-ul articular (și scrisoarea medicului ortoped dacă ai avut artroscopie sau protezare).",
        "Poartă pantaloni lejeri / șort care permit accesul ușor la genunchi sau șold fără compresie.",
        "Informează obligatoriu personalul despre orice implant metalic, proteză, stimulator cardiac sau varice severe cu tromboflebită.",
        "Folosește încălțăminte cu talpă amortizantă (nu tocuri sau talpă complet rigidă) pe durata recuperării.",
        "Urmează consecvent cura de 7–10 ședințe pentru efect cumulativ durabil."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale care necesită evaluare medicală de urgență (ortopedie / 112):",
    "items": [
        "Genunchi sau șold brusc roșu, fierbinte, foarte umflat asociat cu febră (suspiciune de artrită septică);",
        "Imposibilitate bruscă de a pune piciorul în pământ după o cădere sau blocaj mecanic complet al genunchiului;",
        "Gambă brusc umflată, tare și dureroasă după o intervenție ortopedică (suspiciune de tromboză venoasă profundă — sună 112!)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata/",
    "label": "Estimează orientativ un curs de 5–10 ședințe de recuperare →",
    "desc": "Calculează costul orientativ al procedurilor de fizioterapie și kinetoterapie (tarife 2026):"
}}
   faqs={[
    {
        "q": "Reface fizioterapia cartilajul deja uzat în gonartroză?",
        "a": "Onest: nicio fizioterapie nu „crește la loc” cartilajul pierdut în stadiile avansate. Rolul real al fizioterapiei (100 MDL / 30 min) și kinetoterapiei (250 MDL) este reducerea inflamației, calmarea durerii, lubrifierea articulară prin mișcare și întărirea mușchilor care protejează articulația."
    },
    {
        "q": "Cât costă un curs de 10 ședințe de magnetoterapie sau laser pentru genunchi?",
        "a": "La tariful orientativ de 100 MDL / 30 min din categoria Echipamente și metode curative, 5 ședințe costă 500 MDL, iar 10 ședințe costă 1000 MDL."
    }
]}
   relatedLinks={[
    {
        "href": "/pinten-calcanean-artroza-chisinau/",
        "label": "Pinten Calcanean & Artroză"
    },
    {
        "href": "/terapie-ultrasunete-epicondilita-tendinita-chisinau/",
        "label": "Ultrasunete — Cot & Umăr (100 MDL)"
    },
    {
        "href": "/contraindicatii-fizioterapie-siguranta-chisinau/",
        "label": "Contraindicații Fizioterapie"
    },
    {
        "href": "/camera-salina-bai-namol-chisinau/",
        "label": "Băi cu Nămol Saki (150 MDL)"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie (250 MDL)"
    }
]}
  />
 );
}
