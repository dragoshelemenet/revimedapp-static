import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/torticolis-gat-intepenit-fizioterapie-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/torticolis-gat-intepenit-fizioterapie-chisinau/",
    ru: "/ru/krivosheya-zaklinilo-sheyu-nevrolog-kishinev/",
    "x-default": "/torticolis-gat-intepenit-fizioterapie-chisinau/"
  },
  title: "Torticolis & Gât Înțepenit (Blocaj Cervical) Chișinău — Neurolog & Fizioterapie",
  description:
    "Tratament sigur pentru torticolis acut și gât înțepenit dimineața (blocaj cervical) în Chișinău, Ciocana — Dr. Igor Revenco. Consult 500 MDL, fizioterapie 100 MDL / 30 min, masaj 200 MDL."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/torticolis-gat-intepenit-fizioterapie-chisinau"
      crumbLabel="Torticolis & Gât Înțepenit Chișinău"
      h1="Torticolis acut și gât înțepenit — deblocare cervicală sigură în Chișinău"
      lead="Evaluare neurologică rapidă și fizioterapie blândă de decontracturare pentru blocajul cervical dimineața sau după curent, fără manipulări riscante."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică pentru torticolis și blocaj cervical (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL), fizioterapia de relaxare musculară (Amplipuls, electroforeză, magnetoterapie, laser) — 100 MDL / 30 min, iar masajul terapeutic cervical — 200 MDL. Programări: 022 60 50 60."
      introParagraph="Te trezești dimineața și nu mai poți întoarce capul într-o parte din cauza unei dureri ascuțite în gât și umăr? Torticolisul acut muscular apare frecvent după o poziție vicioasă în somn, curent rece sau ore îndelungate la calculator. Deblocarea corectă cu fizioterapie blândă reduce spasmul în 2–4 zile și previne iritarea rădăcinilor cervicale."
      symptomsHeading="Cum recunoști torticolisul acut muscular"
      symptoms={[
        "Blocaj brusc al rotației capului spre stânga sau dreapta, apărut dimineața sau după curent;",
        "Durere ascuțită unilaterală în gât care coboară spre omoplat sau umăr;",
        "Poziție înclinată antalgică a capului și contractură fermă la atingere;",
        "Cefalee occipitală asociată tensiunii musculare cervicale;",
        "Recurență frecventă a blocajelor cervicale la persoanele cu muncă de birou."
      ]}
      approachHeading="Tratament sigur fără „trosnirea” riscantă a gâtului"
      approachParagraphs={[
        "Dr. Igor Revenco exclude compresia radiculară cervicală sau cauzele infecțioase și stabilește un plan rapid de relaxare musculară și control al inflamației.",
        "Ședințele de fizioterapie (Amplipuls, electroforeză, magnetoterapie, Bi-LENAR — 100 MDL / 30 min) relaxează fibrele contractate în siguranță, iar după calmarea durerii acute masajul terapeutic (200 MDL) și ajustarea pernei previn recidiva."
      ]}
      equipmentHeading="Proceduri blânde de decontracturare cervicală"
      equipmentCards={[
        {
          slug: "bi-lenar",
          title: "Fizioterapie & Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Relaxare musculară cervicală și reducerea durerii acute (100 MDL / 30 min)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn & Relaxare",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Diminuarea tensiunii neurovegetative și somn fără durere (100 MDL / 30 min)."
        },
        {
          slug: "rheotest",
          title: "RHEOTEST Cervical",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluarea circulației cerebrale dacă blocajul se însoțește de amețeli (500 MDL)."
        }
      ]}
      customDecisionTable={{
        heading: "Torticolis muscular simplu vs. Radiculopatie cervicală vs. Urgență",
        columns: ["Situație", "Cum se manifestă", "Ce facem"],
        rows: [
          ["Torticolis muscular", "Durere locală la întoarcerea capului, fără amorțeli în degete", "Consult (500 MDL) + fizioterapie blândă (100 MDL) + repaus relativ"],
          ["Radiculopatie / hernie cervicală", "Durere electrică pe braț + furnicături/slăbiciune în degete", "Consult neurochirurg + RMN coloană cervicală"],
          ["Redoare de ceafă cu febră", "Febră mare + durere intensă de cap + fotofobie", "Urgență 112 (excludere meningită)"]
        ]
      }}
      preparationChecklist={{
        heading: "Până ajungi la consult",
        steps: [
          "Nu forța rotația gâtului și nu lăsa pe nimeni să îți „trosnească” coloana cervicală.",
          "Menține zona caldă moderat (eșarfă) și evită curentul de aer.",
          "Notează dacă ai și amorțeli în braț sau febră."
        ]
      }}
      redFlagsNotice={{
        heading: "Sună imediat la 112 dacă gâtul înțepenit se însoțește de:",
        items: [
          "Febră mare, durere severă de cap, vărsături sau intoleranță la lumină;",
          "Traumatism recent (accident auto, lovitură la cap/gât);",
          "Slăbiciune bruscă în braț/picior sau dificultate la înghițire/vorbire."
        ]
      }}
      faqs={[
        {
          q: "Cât durează de obicei un torticolis acut?",
          a: "Cu tratament corect și fizioterapie blândă (100 MDL / 30 min), mobilitatea revine în mare parte în 2–5 zile."
        },
        {
          q: "Cât costă consultația și fizioterapia la Revimed PLUS+?",
          a: "Consultația primară costă 500 MDL (repetată 400 MDL), fizioterapia — 100 MDL / 30 min, masajul terapeutic — 200 MDL. Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/osteocondroza-cervicala-chisinau/", label: "Osteocondroză Cervicală" },
        { href: "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/", label: "Hernie Cervicală C5–C6" },
        { href: "/electroforeza-amplipuls-chisinau/", label: "Electroforeză & Amplipuls (100 MDL)" },
        { href: "/masaj-terapeutic-chisinau/", label: "Masaj Terapeutic (200 MDL)" }
      ]}
    />
  );
}
