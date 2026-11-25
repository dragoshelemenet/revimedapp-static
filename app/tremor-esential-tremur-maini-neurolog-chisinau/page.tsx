import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/tremor-esential-tremur-maini-neurolog-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/tremor-esential-tremur-maini-neurolog-chisinau/",
    ru: "/ru/essentsialnyy-tremor-drozh-v-rukah-nevrolog-kishinev/",
    "x-default": "/tremor-esential-tremur-maini-neurolog-chisinau/"
  },
  title: "Tremor Esențial & Tremur Mâini Chișinău — Evaluare Neurologică Dr. Igor Revenco",
  description:
    "Consultație neurologică pentru tremurul mâinilor și tremor esențial în Chișinău, Ciocana — diferențiere față de Parkinson, tiroidă și stres. Dr. Igor Revenco (35+ ani). Consultație 500 MDL. Tel: 022 60 50 60."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/tremor-esential-tremur-maini-neurolog-chisinau"
      crumbLabel="Tremor Esențial & Tremur Mâini Chișinău"
      h1="Tremurul mâinilor și tremorul esențial — evaluare neurologică în Chișinău"
      lead="Nu orice tremur al mâinilor înseamnă boala Parkinson. Evaluare clinică clară pentru diferențierea tremorului esențial, tiroidian, medicamentos sau parkinsonian la Revimed PLUS+."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică pentru tremurul mâinilor (Dr. Igor Revenco, 35+ ani experiență) costă 500 MDL (repetată 400 MDL), RHEOTEST vascular — 500 MDL, iar procedurile blânde de calmare neurovegetativă (Electrosomn / Biofeedback) — 100 MDL / 30 min. Programări: 022 60 50 60."
      introParagraph="Tremurul mâinilor atunci când ții o ceașcă de cafea, semnezi un document sau folosești lingura este unul dintre cele mai frecvente motive de îngrijorare la adulți și seniori. De cele mai multe ori, cauza este tremorul esențial benign, hipertiroidismul, stresul sau reacția la anumite medicamente — nu boala Parkinson. Examenul neurologic diferențiază exact tipul de tremor chiar din prima consultație."
      symptomsHeading="Situații pentru care merită evaluat tremurul la neurolog"
      symptoms={[
        "Tremur al ambelor mâini mai accentuat în acțiune (când bei apă, scrii sau ții obiecte);",
        "Tremur ușor al capului („da-da” / „nu-nu”) sau al vocii, adesea prezent și la părinți/rude;",
        "Tremur apărut pe o singură mână în repaus (când mâna stă relaxată pe genunchi);",
        "Tremur fin al degetelor asociat cu palpitații, scădere în greutate sau anxietate;",
        "Agravarea tremurului după cofeină, lipsă de somn, efort fizic sau anumite medicamente."
      ]}
      approachHeading="Cum stabilim cauza exactă la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco efectuează probe clinice specifice (tremor de repaus vs. postural vs. intențional, testul spiralei, tonus muscular și viteza mișcărilor fine) pentru a separa clar tremorul esențial de sindromul parkinsonian sau cerebelos.",
        "Se verifică cauzele reversibile (TSH/tiroidă, glicemie, magneziu, efecte adverse medicamentoase) și se stabilește un plan terapeutic adaptat vieții de zi cu zi, completat la nevoie de fizioterapie blândă și tehnici de reducere a hiperexcitabilității (Biofeedback, Electrosomn — 100 MDL / 30 min)."
      ]}
      equipmentHeading="Investigații și suport disponibile în clinică"
      equipmentCards={[
        {
          slug: "rheotest",
          title: "RHEOTEST Vascular",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluarea neinvazivă a circulației cerebrale fără radiații (500 MDL)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn & Biofeedback",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Reducerea componentei de stres și hiperexcitabilitate care agravează tremorul (100 MDL / 30 min)."
        },
        {
          slug: "aparat-amp",
          title: "Analizator AMP",
          image: "/images/equipment/aparat-amp.webp",
          desc: "Evaluare rapidă a 117 indici funcționali fără prelevare de sânge (1000 MDL)."
        }
      ]}
      customDecisionTable={{
        heading: "Tremor esențial vs. Tremor în boala Parkinson vs. Tiroidian",
        columns: ["Caracteristică", "Tremor esențial", "Boala Parkinson", "Tremor fiziologic / tiroidian"],
        rows: [
          ["Când apare", "În acțiune (ceașcă, scris, mâini întinse)", "În repaus (mâna relaxată pe genunchi)", "Fin, rapid, accentuat la stres/cafea"],
          ["Simetrie", "De obicei ambele mâini", "Debutează frecvent pe o singură parte", "Ambele mâini simetric"],
          ["Alte semne", "Istoric familial frecvent; fără rigiditate", "Lentoare a mișcărilor, rigiditate, mers mărunt", "Palpitații, transpirații, TSH modificat"]
        ]
      }}
      preparationChecklist={{
        heading: "Cum te pregătești de consult",
        steps: [
          "Adu lista exactă a tuturor medicamentelor luate zilnic (inclusiv spray-uri de astm, antidepresive sau hormoni tiroidieni).",
          "Dacă ai analize recente (TSH, glicemie, ionogramă), adu-le cu tine.",
          "Evită cafeaua tare cu 3–4 ore înainte de consult pentru o evaluare obiectivă."
        ]
      }}
      redFlagsNotice={{
        heading: "Solicită evaluare rapidă dacă tremurul se însoțește de:",
        items: [
          "Slăbiciune bruscă, tulburări de vorbire sau mers brusc instabil (112);",
          "Căderi repetate, rigiditate accentuată sau dificultăți la înghițire;",
          "Scădere rapidă în greutate cu puls accelerat în repaus."
        ]
      }}
      faqs={[
        {
          q: "Dacă îmi tremură mâinile când beau apă, am Parkinson?",
          a: "Cel mai probabil nu — tremurul care apare în acțiune (când ții ceașca sau scrii) la ambele mâini este tipic pentru tremorul esențial benign sau cauze metabolice/stres. Tremorul din Parkinson apare clasic în repaus și se însoțește de lentoare și rigiditate."
        },
        {
          q: "Ce analize sunt utile înainte de consultație?",
          a: "Cele mai utile sunt TSH (tiroida), glicemia, hemoleucograma și lista completă a medicamentelor luate curent."
        },
        {
          q: "Cât costă consultația neurologică la Revimed PLUS+?",
          a: "Consultația primară la Dr. Igor Revenco costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60 (Str. Mircea cel Bătrân 13/2, Ciocana)."
        }
      ]}
      relatedLinks={[
        { href: "/boala-parkinson-tremor-memorie-chisinau/", label: "Boala Parkinson & Tremor" },
        { href: "/distonie-neurovegetativa-chisinau/", label: "Distonie Neurovegetativă" },
        { href: "/neurolog-ciocana-chisinau/", label: "Neurolog Ciocana (500 MDL)" },
        { href: "/reoencefalografie-chisinau/", label: "Reoencefalografie REG (500 MDL)" }
      ]}
    />
  );
}
