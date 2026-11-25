import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/dureri-de-cap-copii-neuropediatru-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/dureri-de-cap-copii-neuropediatru-chisinau/",
    ru: "/ru/golovnye-boli-u-detey-nevrolog-kishinev/",
    "x-default": "/dureri-de-cap-copii-neuropediatru-chisinau/"
  },
  title: "Dureri de Cap la Copii Chișinău — Medic Neuropediatru Dr. Igor Revenco",
  description:
    "Evaluare neuropediatrică pentru dureri de cap și migrene la copii și adolescenți în Chișinău, Ciocana — Dr. Igor Revenco (Medic Neuropediatru, 35+ ani). Consultație 500 MDL, EEG 1600 MDL, RHEOTEST 500 MDL."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/dureri-de-cap-copii-neuropediatru-chisinau"
      crumbLabel="Dureri de Cap la Copii Chișinău"
      h1="Dureri de cap și migrene la copii și adolescenți — consult neuropediatric în Chișinău"
      lead="Identificarea cauzei reale a cefaleei școlare, migrenei pediatrice sau oboselii cronice la Dr. Igor Revenco (Medic Neuropediatru, Neurochirurg consultant, 35+ ani experiență)."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neuropediatrică pentru dureri de cap la copii (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL), RHEOTEST neinvaziv — 500 MDL, EEG pediatric 19 canale — 1600 MDL, iar procedurile blânde de relaxare (Electrosomn / Biofeedback) — 100 MDL / 30 min. Programări: 022 60 50 60."
      introParagraph="Durerile de cap repetate la școlari și adolescenți sunt frecvent puse pe seama oboselii sau a orelor lungi la telefon, dar merită o evaluare neuropediatrică atentă. Cele mai des întâlnite cauze sunt cefaleea de tensiune (stres școlar, postură, somn insuficient), migrena pediatrică, tulburările de vedere necorectate sau sinuzitele — iar rolul medicului este să excludă rapid semnele de hipertensiune intracraniană și să reducă recurența episoadelor fără exces de calmante."
      symptomsHeading="Când este recomandat consultul neuropediatric la copil"
      symptoms={[
        "Dureri de cap care apar de mai mult de 1–2 ori pe săptămână sau obligă copilul să lipsească de la școală;",
        "Cefalee pulsatilă însoțită de greață, sensibilitate la lumină/sunete sau nevoia de a se întinde la întuneric;",
        "Dureri de cap apărute spre seară după ecrane, teme sau în perioade de teste și stres emoțional;",
        "Cefalee persistentă apărută după o lovitură la cap sau o viroză;",
        "Asocierea durerilor de cap cu tulburări de somn, amețeli sau scăderea atenției."
      ]}
      approachHeading="Evaluarea blândă la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco examinează complet copilul (reflexe, echilibru, coordonare, tonus cervical, tensiune arterială), analizează jurnalul episoadelor și discută cu părinții factorii declanșatori din rutina zilnică (somn, hidratare, ecrane, postură).",
        "Când există indicație clinică, se pot efectua investigații complet nedureroase — RHEOTEST vascular (500 MDL) sau EEG pediatric 19 canale (1600 MDL) — și se stabilește un plan blând, sigur, care evită abuzul de analgezice."
      ]}
      equipmentHeading="Investigații nedureroase pentru copii"
      equipmentCards={[
        {
          slug: "rheotest",
          title: "RHEOTEST & EEG Pediatric",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluare vasculară fără durere (500 MDL) și EEG 19 canale la indicația medicului (1600 MDL)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn Pediatric",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Reglarea somnului și reducerea cefaleei de tensiune fără medicamente (100 MDL / 30 min)."
        },
        {
          slug: "bi-lenar",
          title: "Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Calmare neurovegetativă blândă în perioadele de suprasolicitare școlară (100 MDL / 30 min)."
        }
      ]}
      customDecisionTable={{
        heading: "Cefalee de tensiune vs. Migrenă pediatrică vs. Semne de alarmă",
        columns: ["Tip cefalee", "Cum o descrie copilul", "Pas recomandat"],
        rows: [
          ["Cefalee de tensiune", "Presiune ușoară-moderată pe frunte/tâmple, seara după școală", "Consult neuropediatru (500 MDL), igienă somn/ecrane, postură"],
          ["Migrenă pediatrică", "Durere pulsatilă cu greață, fotofobie; se calmează după somn", "Consult neuropediatru + jurnal cefalee + plan preventiv"],
          ["Semne de alarmă (112)", "Trezește copilul din somn, vărsături matinale în jet, vedere dublă", "Evaluare medicală de urgență (112)"]
        ]
      }}
      preparationChecklist={{
        heading: "Ce să pregătești înainte de vizită",
        steps: [
          "Notează pe telefon în ultimele 2 săptămâni: ora durerii, durata, dacă a avut greață și ce a calmat-o.",
          "Verifică dacă copilul poartă ochelari sau a făcut recent un control oftalmologic.",
          "Adu biletele de externare sau investigațiile anterioare, dacă există."
        ]
      }}
      redFlagsNotice={{
        heading: "Mergeți de urgență (112) dacă durerea de cap a copilului:",
        items: [
          "Îl trezește frecvent din somn sau este cea mai puternică dimineața, însoțită de vărsături;",
          "Apare brusc și extrem de intens (sau imediat după un traumatism cranian);",
          "Se asociază cu febră mare, ceafă înțepenită, somnolență accentuată, vedere dublă ori mers instabil."
        ]
      }}
      faqs={[
        {
          q: "Este obligatoriu RMN-ul cerebral la orice copil cu dureri de cap?",
          a: "Nu — în majoritatea cazurilor de cefalee de tensiune sau migrenă tipică, examenul neurologic complet este normal și nu necesită RMN imediat. Medicul indică imagistică doar dacă apar semne neurologice de alarmă."
        },
        {
          q: "Pot da copilului ibuprofen de fiecare dată când îl doare capul?",
          a: "Administrarea ocazională conform greutății este utilă, dar folosirea frecventă (peste 2–3 ori pe săptămână) poate întreține cefaleea de abuz medicamentos. Este mai sigur să identificăm și să prevenim cauza."
        },
        {
          q: "Cât costă consultația neuropediatrică la Revimed PLUS+?",
          a: "Consultația primară la Dr. Igor Revenco costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60 (Luni–Vineri 09:00–15:00)."
        }
      ]}
      relatedLinks={[
        { href: "/neuropediatru-chisinau/", label: "Neuropediatru Chișinău (500 MDL)" },
        { href: "/eeg-copii-chisinau/", label: "EEG Copii Chișinău (1600 MDL)" },
        { href: "/tensiune-intracraniana-simptome-neurolog-chisinau/", label: "Tensiune Intracraniană" },
        { href: "/recuperare-comotie-cerebrala-traumatism-chisinau/", label: "Recuperare Comoție Cerebrală" }
      ]}
    />
  );
}
