import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/terapie-ultrasunete-epicondilita-tendinita-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/terapie-ultrasunete-epicondilita-tendinita-chisinau/", ru: "/ru/ultrazvukovaya-terapiya-fonoforez-epikondilit-kishinev/", "x-default": "/terapie-ultrasunete-epicondilita-tendinita-chisinau/" },
 title: "Terapie cu Ultrasunete & Electrostimulare Chișinău — Epicondilită, Tendinită Umăr (100 MDL)",
 description: "Fizioterapie țintită cu ultrasunete (100 MDL / 30 min), electrostimulare musculară, laser și magnetoterapie pentru epicondilită („cotul tenismenului”), tendinită umăr și periartrită în Chișinău (Ciocana) — Revimed PLUS+."
});

export default function TerapieUltrasuneteEpicondilitaTendinitaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/terapie-ultrasunete-epicondilita-tendinita-chisinau"
   crumbLabel="Ultrasunete, Cot & Umăr"
   h1="Terapie cu Ultrasunete și Electrostimulare în Chișinău — Epicondilită, Tendinită și Periartrită"
   lead="Cum ajută micromasajul profund cu ultrasunete, laseroterapia și electrostimularea în durerile de cot („cotul tenismenului”), umăr dureros și slăbiciune musculară — la Revimed PLUS+ Ciocana."
   directAnswer="Terapia cu ultrasunete acționează prin unde acustice de înaltă frecvență care produc un micromasaj profund și încălzire fină la nivelul tendoanelor suprasolicitate (epicondilită, tendinită de umăr, periartrită scapulo-humerală), reducând inflamația locală și rigiditatea. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), procedurile din lista de metode curative (Terapie cu ultrasunete, Laser, Magnetoterapie, Electroforeză, Electroneurostimulare) costă 100 MDL / 30 min (cură de 5 ședințe = 500 MDL; cură de 10 ședințe = 1000 MDL), ședința dedicată de electroterapie cu ultrasunete 30 min 180 MDL, electrostimulare musculară 150 MDL/oră, iar consultația medicului 500 MDL (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Durerea ascuțită pe exteriorul cotului când ridici o cană sau strângi mâna („cotul tenismenului”), durerea de umăr care te trezește noaptea când dormi pe acea parte sau pierderea tonusului muscular după o imobilizare se cronicizează ușor dacă sunt tratate doar cu unguente aplicate superficial. Fizioterapia aparat combinată ajunge în profunzimea tendonului și grăbește reluarea mișcării."
   symptomsHeading="Afecțiuni ale tendoanelor și mușchilor unde este utilă terapia cu ultrasunete și electrostimularea"
   symptoms={[
    "Epicondilită laterală („cotul tenismenului”) și medială („cotul jucătorului de golf”) — durere la prindere, răsucire sau lucru la mouse/tastatură;",
    "Tendinita coafei rotatorilor și periartrita scapulo-humerală — durere la ridicarea brațului lateral ori la spate;",
    "Contracturi musculare profunde, cicatrici/aderențe post-traumatice și dureri tendinoase ale genunchiului sau gleznei;",
    "Slăbiciune și hipotrofie musculară după fracturi, entorse, hernie de disc sau imobilizare prelungită (indicație pentru electrostimulare)."
]}
   approachHeading="Cum combină Revimed PLUS+ ultrasunetele, laserul și electrostimularea"
   approachParagraphs={[
    "Înainte de începerea curei, medicul verifică dacă durerea de cot sau umăr provine strict dintr-o tendinită locală ori dacă este iradiată din coloana cervicală (C5–C7) — o confuzie extrem de frecventă care explică de ce unele tratamente locale nu dau rezultat. Când există indicație, se stabilește un protocol clar de 7–10 ședințe.",
    "Terapia cu ultrasunete (100 MDL / 30 min în metode curative) stimulează microcirculația și flexibilitatea fibrelor tendinoase, putând fi alternată cu laseroterapie sau magnetoterapie (100 MDL / 30 min) pentru efect antiinflamator, iar în faza de recuperare a forței cu electrostimulare musculară și kinetoterapie (250 MDL/oră)."
]}
   equipmentHeading="Aparate de fizioterapie pentru tendoane, articulații și tonus muscular"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls & Electrostimulare",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Calmare analgezică și refacerea tonusului muscular — de la 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Terapie Laser & Fototerapie",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Reducerea inflamației tendinoase și stimularea regenerării locale — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză & Ultrasunete",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Administrare locală țintită fără iritarea stomacului — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Ghid de alegere a procedurii pentru dureri de cot, umăr și mușchi",
    "columns": [
        "Problemă",
        "Manifestare tipică",
        "Proceduri potrivite",
        "Atenționări importante"
    ],
    "rows": [
        [
            "Epicondilită (cotul tenismenului / golferului)",
            "Durere pe osul exterior/interior al cotului la apucare sau tastare",
            "Ultrasunete + Laser / Electroforeză (100 MDL / 30 min)",
            "Necesită pauză de la mișcarea repetitivă declanșatoare"
        ],
        [
            "Tendinită umăr / Periartrită scapulo-humerală",
            "Durere la ridicarea brațului, durere nocturnă pe umăr",
            "Ultrasunete + Magnetoterapie + Kinetoterapie blândă",
            "Verifică și coloana cervicală C5–C6 la neurolog (500 MDL)"
        ],
        [
            "Slăbiciune musculară post-imobilizare / post-hernie",
            "Scăderea forței sau volumului muscular fără inflamație acută",
            "Electrostimulare musculară + Amplipuls + Kinetoterapie",
            "Nu se aplică la pacienți cu stimulator cardiac sau tromboflebită"
        ],
        [
            "Articulație brusc umflată, roșie, fierbinte sau ruptură",
            "Edem sever după accident, febră locală, imposibilitate de mișcare",
            "Evaluare ortopedică / ecografie musculo-scheletală prioritară",
            "Nu se fac proceduri termice sau ultrasunete înainte de diagnostic!"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Înainte de prima ședință de ultrasunete sau electrostimulare (5 reguli)",
    "steps": [
        "Adu rezultatul ecografiei musculo-scheletale, radiografiei sau RMN-ului articular/cervical (dacă ai deja) și recomandarea medicului.",
        "Poartă haine lejere care permit descoperirea facilă a umărului, cotului sau zonei tratate fără compresie.",
        "Verifică pielea din zona procedurii — să fie curată, fără creme uleioase groase și fără răni deschise sau erupții.",
        "Informează obligatoriu medicul despre eventuale implanturi metalice/tije, stimulator cardiac, sarcină sau antecedente oncologice.",
        "Respectă ritmul curei (de obicei zilnic sau la 2 zile, 5–10 ședințe) și evită suprasolicitarea tendonului în zilele de tratament."
    ]
}}
   redFlagsNotice={{
    "heading": "Când este necesară evaluare de urgență (ortopedie / 112), NU fizioterapie imediată:",
    "items": [
        "Traumatism acut cu deformare vizibilă a cotului/umărului sau suspiciune de fractură ori luxație;",
        "Articulație brusc roșie, fierbinte, foarte umflată însoțită de febră (suspiciune de artrită septică);",
        "Slăbiciune bruscă severă a brațului cu amorțeală extinsă sau durere toracică/umăr stâng cu transpirații (evaluare cardiacă 112)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata/",
    "label": "Estimează orientativ un plan de recuperare (5–10 ședințe) →",
    "desc": "Calculează rapid opțiunile de fizioterapie la tarifele orientative 2026 (100 MDL / 30 min):"
}}
   faqs={[
    {
        "q": "Câte ședințe de ultrasunete sunt necesare pentru epicondilită sau tendinita umărului?",
        "a": "De regulă, o cură orientativă cuprinde 7–10 ședințe (5 ședințe = 500 MDL, 10 ședințe = 1000 MDL la tariful de 100 MDL / 30 min din lista de metode curative), combinate la nevoie cu laseroterapie sau kinetoterapie."
    },
    {
        "q": "Este dureroasă terapia cu ultrasunete sau electrostimularea?",
        "a": "Nu. La ultrasunete pacientul simte o căldură fină, plăcută; la electrostimulare sau Amplipuls intensitatea este reglată gradual până la o vibrație/contracție confortabilă, fără durere."
    },
    {
        "q": "Se pot aplica ultrasunete dacă am tijă metalică sau proteză articulară în acea zonă?",
        "a": "Nu direct peste proteze/implanturi metalice, stimulator cardiac, zone tumorale sau în sarcină pe abdomen/lombar. Consultă și ghidul nostru complet de contraindicații ale fizioterapiei și informează medicul înainte de procedură."
    }
]}
   relatedLinks={[
    { href: "/sindrom-canal-cubital-nerv-ulnar-chisinau/", label: "Sindrom Canal Cubital (Nerv Ulnar)" },
    {
        "href": "/contraindicatii-fizioterapie-siguranta-chisinau/",
        "label": "Contraindicații Fizioterapie (Ghid)"
    },
    {
        "href": "/pinten-calcanean-artroza-chisinau/",
        "label": "Pinten Calcanean & Artroză"
    },
    {
        "href": "/electroforeza-amplipuls-chisinau/",
        "label": "Electroforeză & Amplipuls (100 MDL)"
    },
    {
        "href": "/magnetoterapie-laser-chisinau/",
        "label": "Magnetoterapie & Laser (100 MDL)"
    },
    {
        "href": "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/",
        "label": "Hernie Cervicală C5–C6"
    }
]}
  />
 );
}
