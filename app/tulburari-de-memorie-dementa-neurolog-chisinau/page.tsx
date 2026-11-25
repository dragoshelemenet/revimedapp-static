import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/tulburari-de-memorie-dementa-neurolog-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/tulburari-de-memorie-dementa-neurolog-chisinau/",
    ru: "/ru/narusheniya-pamyati-dementsiya-nevrolog-kishinev/",
    "x-default": "/tulburari-de-memorie-dementa-neurolog-chisinau/"
  },
  title: "Tulburări de Memorie & Demență Incipientă Chișinău — Neurolog & Testare Cognitivă",
  description:
    "Evaluare neurologică și testare cognitivă pentru pierderi de memorie, confuzie și demență incipientă la adulți și seniori în Chișinău, Ciocana — Dr. Igor Revenco. Consultație 500 MDL, psihodiagnostic 400 MDL."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/tulburari-de-memorie-dementa-neurolog-chisinau"
      crumbLabel="Tulburări de Memorie & Demență Chișinău"
      h1="Tulburări de memorie, atenție și evaluare demență incipientă în Chișinău"
      lead="Diferențierea cauzelor reversibile (deficit de B12, tiroidă, depresie, insomnie, tulburări vasculare) de declinul cognitiv neurodegenerativ la Revimed PLUS+."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică pentru tulburări de memorie (Dr. Igor Revenco, 35+ ani experiență) costă 500 MDL (repetată 400 MDL), evaluarea cognitivă/psihodiagnostic — 400 MDL, RHEOTEST vascular — 500 MDL, EEG 19 canale — 1600 MDL. Programări: 022 60 50 60."
      introParagraph="Uitarea numelor recente, repetarea acelorași întrebări sau dificultatea de a gestiona plățile și medicamentele îngrijorează adesea familiile seniorilor. Primul pas medical este esențial: o parte semnificativă a tulburărilor de memorie au cauze reversibile — deficit sever de vitamina B12, hipotiroidism, depresie mascată, apnee de somn sau tensiune necontrolată — care, tratate corect, redau claritatea mentală."
      symptomsHeading="Semnale că merită programată o evaluare cognitivă și neurologică"
      symptoms={[
        "Uitarea frecventă a discuțiilor recente, programărilor sau a locului obiectelor de zi cu zi;",
        "Repetarea acelorași întrebări la interval de câteva minute;",
        "Dificultăți noi la orientarea pe trasee cunoscute, la gătit sau la gestionarea facturilor;",
        "Schimbări de dispoziție, apatie, retragere socială sau suspiciune neobișnuită;",
        "Tulburări de memorie și concentrare la adulți activi după stres sever, burnout sau AVC."
      ]}
      approachHeading="Evaluarea completă la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco realizează examenul neurologic complet, screening-ul cognitiv structurat și revizuirea listei de medicamente (unele sedative sau anticolinergice pot afecta direct memoria), alături de recomandarea analizelor care exclud cauzele reversibile (B12, TSH, glicemie, ionogramă).",
        "În funcție de caz, se pot efectua RHEOTEST vascular (500 MDL), EEG 19 canale (1600 MDL) și testare neuropsihologică (400 MDL), urmate de un plan individual de susținere cognitivă și vasculară."
      ]}
      equipmentHeading="Investigații disponibile în clinică"
      equipmentCards={[
        {
          slug: "rheotest",
          title: "RHEOTEST & EEG 19 Canale",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluarea circulației cerebrale (500 MDL) și a activității electrice corticale (1600 MDL)."
        },
        {
          slug: "aparat-amp",
          title: "Analizator AMP",
          image: "/images/equipment/aparat-amp.webp",
          desc: "Screening neinvaziv a 117 indici funcționali fără prelevare de sânge (1000 MDL)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn & Suport Somn",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Îmbunătățirea calității somnului, esențial pentru consolidarea memoriei (100 MDL / 30 min)."
        }
      ]}
      customDecisionTable={{
        heading: "Uitare normală de vârstă vs. Cauze reversibile vs. Declin cognitiv",
        columns: ["Situație", "Exemple tipice", "Ce verificăm prioritar"],
        rows: [
          ["Uitare benignă", "Uiți un nume, dar îți amintești mai târziu; independență completă", "Igiena somnului, control tensiune, activitate intelectuală"],
          ["Cauze reversibile", "„Ceață mentală”, oboseală, apatie, instalare relativ rapidă", "Vitamina B12, TSH, feritină, screening depresie, revizuire medicamente"],
          ["Declin cognitiv / demență", "Repetă întrebări, se rătăcește, dificultăți cu banii/medicamentele", "Consult neurolog (500 MDL) + testare cognitivă (400 MDL) + RMN"]
        ]
      }}
      preparationChecklist={{
        heading: "Cum pregătește familia vizita",
        steps: [
          "Este ideal ca pacientul senior să fie însoțit de un membru al familiei care observă schimbările zilnice.",
          "Aduceți toate cutiile sau lista exactă a medicamentelor luate zilnic (inclusiv picături și somnifere).",
          "Aduceți analize recente (TSH, vitamina B12, glicemie) și eventuale RMN/CT cerebrale anterioare."
        ]
      }}
      redFlagsNotice={{
        heading: "Urgență medicală (112) — NU așteptați programare dacă confuzia:",
        items: [
          "Apare brusc (în câteva ore sau 1–2 zile) — poate indica AVC, infecție severă sau hipoglicemie;",
          "Se asociază cu febră, halucinații bruște, vorbire împleticită sau slăbiciune pe o parte a corpului;",
          "Urmează unei căzături sau lovituri la cap (risc de hematom subdural la seniori)."
        ]
      }}
      faqs={[
        {
          q: "Se poate încetini declinul de memorie dacă venim din timp?",
          a: "Da — identificarea și tratarea factorilor vasculari (tensiune, colesterol, diabet), corectarea deficitelor (B12, tiroidă), terapia specifică prescrisă de medic și stimularea cognitivă mențin autonomia mult mai mult timp."
        },
        {
          q: "Cât costă evaluarea memoriei la Revimed PLUS+?",
          a: "Consultația primară la Dr. Igor Revenco costă 500 MDL (repetată 400 MDL), testarea cognitivă — 400 MDL, RHEOTEST — 500 MDL. Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/evaluare-neuropsihologica-testare-cognitiva-chisinau/", label: "Evaluare Neuropsihologică (400 MDL)" },
        { href: "/boala-parkinson-tremor-chisinau/", label: "Boala Parkinson & Tremor" },
        { href: "/recuperare-dupa-avc-chisinau/", label: "Recuperare post-AVC" },
        { href: "/reoencefalografie-chisinau/", label: "Reoencefalografie REG (500 MDL)" }
      ]}
    />
  );
}
