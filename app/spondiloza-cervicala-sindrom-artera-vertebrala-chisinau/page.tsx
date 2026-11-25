import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/spondiloza-cervicala-sindrom-artera-vertebrala-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/spondiloza-cervicala-sindrom-artera-vertebrala-chisinau/",
    ru: "/ru/sindrom-pozvonochnoy-arterii-spondilez-kishinev/",
    "x-default": "/spondiloza-cervicala-sindrom-artera-vertebrala-chisinau/"
  },
  title: "Spondiloză Cervicală & Sindrom de Arteră Vertebrală Chișinău — RHEOTEST & Fizioterapie",
  description:
    "Diagnostic și tratament pentru spondiloza cervicală și sindromul de arteră vertebrală (dureri de ceafă, amețeli, țiuit în urechi) în Chișinău, Ciocana. Consult 500 MDL, RHEOTEST 500 MDL, fizioterapie 100 MDL."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/spondiloza-cervicala-sindrom-artera-vertebrala-chisinau"
      crumbLabel="Spondiloză Cervicală & Arteră Vertebrală Chișinău"
      h1="Spondiloză cervicală și sindrom de arteră vertebrală — evaluare RHEOTEST și fizioterapie în Chișinău"
      lead="Abordare completă pentru durerile de ceafă, amețelile la întoarcerea capului, tinitus și tulburările de vedere tranzitorii la Revimed PLUS+ (Chișinău, Ciocana)."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația pentru spondiloză cervicală și sindrom de arteră vertebrală (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL), Reoencefalografia RHEOTEST — 500 MDL, fizioterapia cervicală — 100 MDL / 30 min, iar masajul terapeutic cervical — 200 MDL. Programări: 022 60 50 60."
      introParagraph="Spondiloza cervicală și spasmul cronic al musculaturii cefei (frecvent la persoanele care lucrează la birou sau conduc mult) pot irita fibrele simpatice și circulația din teritoriul vertebro-bazilar. Rezultatul este un tablou neplăcut care combină durerea occipitală cu amețeli la rotația capului, țiuit în urechi (tinitus) și oboseală vizuală."
      symptomsHeading="Simptome frecvente ale spondilozei cervicale și sindromului vertebro-bazilar"
      symptoms={[
        "Durere surdă sau arzătoare în ceafă care urcă spre tâmple sau frunte;",
        "Amețeală și instabilitate accentuate la întoarcerea bruscă a capului sau la privitul în sus;",
        "Țiuit / vâjâit în urechi (tinitus) sau senzație de „ceață” vizuală trecătoare;",
        "Rigiditate matinală a gâtului, trosnituri cervicale și contracturi în umeri;",
        "Amorțeli ocazionale în brațe sau degete după ore la calculator."
      ]}
      approachHeading="Cum evaluăm și recuperăm zona cervicală la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco evaluează mobilitatea cervicală, semnele neurologice și fluxul vascular cerebral prin Reoencefalografie RHEOTEST (500 MDL) — o metodă neinvazivă care evidențiază influența poziției capului asupra circulației vertebro-bazilare.",
        "Programul de recuperare evită manipulările bruște riscante ale gâtului și se bazează pe fizioterapie blândă (electroforeză, magnetoterapie, laser, Amplipuls — 100 MDL / 30 min), masaj terapeutic cervical (200 MDL) și corecție ergonomică."
      ]}
      equipmentHeading="Diagnostic vascular și fizioterapie cervicală"
      equipmentCards={[
        {
          slug: "rheotest",
          title: "RHEOTEST (REG) Cervical",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluare neinvazivă a circulației vertebro-bazilare fără radiații (500 MDL)."
        },
        {
          slug: "bi-lenar",
          title: "Bi-LENAR & Fizioterapie",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Relaxarea spasmului muscular cervical și reducerea durerii occipitale (100 MDL / 30 min)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn-4Т",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Calmare neurovegetativă și somn odihnitor fără tensiune cervicală (100 MDL / 30 min)."
        }
      ]}
      customDecisionTable={{
        heading: "Spondiloză cervicală vs. BPPV (ureche internă) vs. Hernie cervicală",
        columns: ["Cauză", "Simptom dominant", "Investigație utilă"],
        rows: [
          ["Spondiloză / sindrom vertebro-bazilar", "Durere ceafă + amețeală la rotație + tinitus", "Consult neurolog + RHEOTEST (500 MDL) + Doppler vase gât"],
          ["Vertij pozițional (BPPV)", "Învârtire bruscă 20 sec când te întorci în pat", "Probe poziționale neurolog / ORL"],
          ["Hernie cervicală C5–C7", "Durere ascuțită pe braț cu amorțeală în degete", "RMN coloană cervicală + consult neurochirurg (500 MDL)"]
        ]
      }}
      preparationChecklist={{
        heading: "Ce să aduci la consult",
        steps: [
          "Radiografia/RMN-ul cervical sau Doppler-ul vaselor gâtului, dacă le-ai efectuat anterior.",
          "Valorile tensiunii arteriale măsurate acasă în ultimele zile.",
          "Evită mișcările bruște de „trosnire” a gâtului."
        ]
      }}
      redFlagsNotice={{
        heading: "Apelează imediat 112 dacă amețeala cervicală se asociază cu:",
        items: [
          "Vedere dublă bruscă, dificultate la înghițire sau vorbire neclară;",
          "Cădere bruscă fără pierdere de cunoștință („drop attack”) sau slăbiciune în braț/picior;",
          "Durere occipitală explozivă instalată brusc."
        ]
      }}
      faqs={[
        {
          q: "Este sigură „trosnirea” (manipularea bruscă) a gâtului în spondiloza cervicală?",
          a: "Nu — manipulările cervicale bruște pot irita sau leza artera vertebrală. Recomandăm evaluare medicală, fizioterapie blândă (100 MDL / 30 min), masaj terapeutic dozat (200 MDL) și exerciții ușoare."
        },
        {
          q: "Cât costă consultația și RHEOTEST-ul la Revimed PLUS+?",
          a: "Consultația primară costă 500 MDL (repetată 400 MDL), RHEOTEST — 500 MDL, fizioterapia — 100 MDL / 30 min. Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/osteocondroza-cervicala-chisinau/", label: "Osteocondroză Cervicală" },
        { href: "/reoencefalografie-chisinau/", label: "Reoencefalografie REG (500 MDL)" },
        { href: "/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau/", label: "Tinitus & Zgomote în Urechi" },
        { href: "/ameteli-vertij-chisinau/", label: "Amețeli & Vertij Chișinău" }
      ]}
    />
  );
}
