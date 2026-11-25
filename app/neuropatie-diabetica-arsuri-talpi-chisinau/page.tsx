import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/neuropatie-diabetica-arsuri-talpi-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/neuropatie-diabetica-arsuri-talpi-chisinau/",
    ru: "/ru/diabeticheskaya-neyropatiya-zhzhenie-stop-kishinev/",
    "x-default": "/neuropatie-diabetica-arsuri-talpi-chisinau/"
  },
  title: "Neuropatie Diabetică & Arsuri în Tălpi Chișinău — Neurolog & Fizioterapie",
  description:
    "Evaluare neurologică și fizioterapie de suport pentru neuropatia diabetică (arsuri, furnicături și amorțeli în picioare) în Chișinău, Ciocana — Dr. Igor Revenco. Consultație 500 MDL, fizioterapie 100 MDL."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/neuropatie-diabetica-arsuri-talpi-chisinau"
      crumbLabel="Neuropatie Diabetică Chișinău"
      h1="Neuropatie diabetică: arsuri, furnicături și amorțeli în tălpi — neurolog și fizioterapie în Chișinău"
      lead="Evaluare neurologică periodică a nervilor periferici și proceduri blânde de ameliorare a durerii neuropate și a microcirculației la Revimed PLUS+ (Chișinău, Ciocana)."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică pentru neuropatie diabetică (Dr. Igor Revenco, 35+ ani experiență) costă 500 MDL (repetată 400 MDL), evaluarea neinvazivă AMP 117 indici — 1000 MDL, iar procedurile de suport fizioterapeutic (magnetoterapie, laser, electroterapie blândă) — 100 MDL / 30 min. Programări: 022 60 50 60."
      introParagraph="Senzația de „tălpi care ard” noaptea, furnicăturile simetrice în degetele picioarelor sau pierderea sensibilității la temperatură sunt semne clasice de polineuropatie diabetică. Baza tratamentului rămâne controlul glicemiei (HbA1c) împreună cu endocrinologul, dar consultul neurologic și fizioterapia de suport reduc semnificativ durerea nocturnă și scad riscul de complicații ale piciorului diabetic."
      symptomsHeading="Semne frecvente ale neuropatiei diabetice periferice"
      symptoms={[
        "Arsuri, înțepături sau dureri ca „șocuri electrice” în tălpi, mai intense noaptea;",
        "Amorțeală simetrică în ambele picioare (senzația că porți șosete groase chiar și desculț);",
        "Hipersensibilitate dureroasă la atingerea cearșafului pe degetele picioarelor;",
        "Scăderea echilibrului la mers pe întuneric sau pe teren denivelat;",
        "Crampe musculare nocturne în gambe asociate cu diabet zaharat tip 1 sau tip 2."
      ]}
      approachHeading="Cum sprijinim pacienții cu neuropatie diabetică la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco testează sensibilitatea vibratorie, termică, tactilă și reflexele ahiliene pentru a cuantifica gradul neuropatiei și a verifica dacă există și alți factori agravanți (ex. deficit de vitamina B12 indus de tratamentul de lungă durată cu metformină, sau stenoză lombară asociată).",
        "Alături de schema neurotrofică/analgezică prescrisă individual, ședințele de fizioterapie blândă (magnetoterapie, laserterapie, îmbunătățirea troficității periferice — 100 MDL / 30 min) ajută la reducerea arsurilor nocturne și la menținerea sensibilității."
      ]}
      equipmentHeading="Proceduri de suport vascular și neurologic"
      equipmentCards={[
        {
          slug: "rheotest",
          title: "RHEOTEST Vascular",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluare neinvazivă a circulației periferice fără durere (500 MDL)."
        },
        {
          slug: "bi-lenar",
          title: "Fizioterapie & Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Susținerea microcirculației și reducerea durerii neuropate (100 MDL / 30 min)."
        },
        {
          slug: "aparat-amp",
          title: "Analizator AMP",
          image: "/images/equipment/aparat-amp.webp",
          desc: "Screening neinvaziv general a 117 indici fără înțepături (1000 MDL)."
        }
      ]}
      customDecisionTable={{
        heading: "Ce verificăm în amorțelile picioarelor la pacienții cu diabet",
        columns: ["Factor", "De ce contează", "Analiză / Pas"],
        rows: [
          ["Hemoglobina glicată (HbA1c)", "Controlul glicemiei oprește progresia leziunii nervoase", "Monitorizare periodică cu endocrinologul"],
          ["Vitamina B12", "Metformina pe termen lung poate scădea B12 și agrava amorțeala", "Analiză serică B12 înainte de consult"],
          ["Stenoza / hernia lombară", "Poate coexista cu diabetul și amplifica durerea pe picior", "Examen neurologic complet (500 MDL)"]
        ]
      }}
      preparationChecklist={{
        heading: "Ce să aduci la consultație",
        steps: [
          "Ultimele rezultate de glicemie, HbA1c și vitamina B12 (dacă le ai).",
          "Lista completă a medicamentelor pentru diabet, tensiune și colesterol.",
          "Inspectează zilnic tălpile pentru mici răni sau bătături nedureroase."
        ]
      }}
      redFlagsNotice={{
        heading: "Consult medical urgent dacă observi:",
        items: [
          "O rană, ulcerație, roșeață caldă sau umflătură la picior (risc de infecție severă);",
          "Slăbiciune bruscă la un singur picior sau asimetrie rapidă;",
          "Căderi repetate din cauza pierderii sensibilității."
        ]
      }}
      faqs={[
        {
          q: "Se poate vindeca complet neuropatia diabetică?",
          a: "Cu cât este depistată mai devreme și glicemia este menținută stabilă, cu atât simptomele (arsuri, furnicături) se pot ameliora mai mult și progresia poate fi oprită. Corectarea deficitului asociat de B12 aduce adesea îmbunătățiri vizibile."
        },
        {
          q: "Cât costă consultația și fizioterapia la Revimed PLUS+?",
          a: "Consultația primară la Dr. Igor Revenco costă 500 MDL (repetată 400 MDL), fizioterapia de suport — 100 MDL / 30 min. Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/amorteli-picioare-polineuropatie-chisinau/", label: "Amorțeli Picioare & Polineuropatie" },
        { href: "/nevralgie-neuropatie-chisinau/", label: "Nevralgie & Neuropatie" },
        { href: "/magnitoterapie-laserterapie-chisinau/", label: "Magnetoterapie & Laser (100 MDL)" },
        { href: "/neurolog-ciocana-chisinau/", label: "Neurolog Ciocana (500 MDL)" }
      ]}
    />
  );
}
