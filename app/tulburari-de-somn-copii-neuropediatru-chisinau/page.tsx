import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/tulburari-de-somn-copii-neuropediatru-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/tulburari-de-somn-copii-neuropediatru-chisinau/",
    ru: "/ru/narusheniya-sna-u-detey-nevrolog-kishinev/",
    "x-default": "/tulburari-de-somn-copii-neuropediatru-chisinau/"
  },
  title: "Tulburări de Somn la Copii & Pavor Nocturn Chișinău — Neuropediatru",
  description:
    "Consult neuropediatric pentru somn agitat, treziri nocturne, pavor nocturn și somnambulism la copii în Chișinău, Ciocana — Dr. Igor Revenco (Medic Neuropediatru). Consultație 500 MDL, EEG 1600 MDL."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/tulburari-de-somn-copii-neuropediatru-chisinau"
      crumbLabel="Tulburări de Somn la Copii Chișinău"
      h1="Tulburări de somn la copii: treziri nocturne, pavor nocturn și somn agitat — neuropediatru Chișinău"
      lead="Evaluare neuropediatrică blândă cu Dr. Igor Revenco (Medic Neuropediatru, Neurochirurg consultant, 35+ ani experiență) pentru a diferenția parasomniile benigne de epilepsia nocturnă."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neuropediatrică pentru tulburări de somn la copii (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL), EEG pediatric 19 canale — 1600 MDL, iar procedurile blânde de reglare a somnului (Electrosomn pediatric / Bi-LENAR) — 100 MDL / 30 min. Programări: 022 60 50 60."
      introParagraph="Trezirile bruște cu plâns intens, țipete în somn (pavor nocturn), mersul prin casă în somn sau dificultatea cronică de adormire îngrijorează pe bună dreptate părinții. În majoritatea cazurilor este vorba despre parasomnii benigne ale maturizării sistemului nervos sau suprastimulare seara, dar evaluarea neuropediatrică clarifică rapid dacă sunt necesare măsuri de igienă a somnului sau un EEG pentru excluderea crizelor nocturne."
      symptomsHeading="Semne pentru care părinții apelează la neuropediatru"
      symptoms={[
        "Episoade de pavor nocturn (copilul se ridică brusc, țipă, pare speriat, dar nu recunoaște părinții și nu își amintește dimineața);",
        "Somnambulism (mers în somn), vorbit intens în somn sau mișcări bruște repetitive ale picioarelor;",
        "Dificultate cronică de adormire (>45–60 min) sau treziri frecvente urmate de iritabilitate ziua;",
        "Sforăit puternic, respirație pe gură sau transpirație abundentă nocturnă (necesită și evaluare ORL);",
        "Episoade nocturne stereotipe (aceleași mișcări de fiecare dată) care ridică suspiciunea de crize epileptice de somn."
      ]}
      approachHeading="Cum evaluăm somnul copilului la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco analizează tiparul somnului (ora apariției episoadelor, durata, comportamentul copilului, filmări scurte făcute de părinți), nivelul de expunere la ecrane și eventualele carențe (ex. feritină scăzută în somnul agitat).",
        "Când episoadele sunt stereotipe sau foarte frecvente, EEG-ul pediatric pe 19 canale (1600 MDL) exclude activitatea epileptiformă nocturnă. Pentru copiii cu hiperexcitabilitate și adormire dificilă, se pot folosi metode blânde fără sedative (Electrosomn pediatric — 100 MDL / 30 min) și o rutină clară de seară."
      ]}
      equipmentHeading="Investigații și suport blând pentru copii"
      equipmentCards={[
        {
          slug: "rheotest",
          title: "EEG Pediatric 19 Canale",
          image: "/images/equipment/rheotest.webp",
          desc: "Excluderea neinvazivă a activității epileptiforme nocturne la indicația medicului (1600 MDL)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn Pediatric",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Reglare blândă a ritmului somn-veghe fără medicamente sedative (100 MDL / 30 min)."
        },
        {
          slug: "bi-lenar",
          title: "Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Calmare neurovegetativă pentru copiii cu agitație vesperală (100 MDL / 30 min)."
        }
      ]}
      customDecisionTable={{
        heading: "Pavor nocturn vs. Coșmar vs. Suspiciune criză nocturnă",
        columns: ["Caracteristică", "Pavor nocturn", "Coșmar", "Suspiciune criză nocturnă"],
        rows: [
          ["Când apare", "Primele 1–3 ore după adormire (somn profund)", "A doua jumătate a nopții (somn REM)", "Oricând, adesea de mai multe ori pe noapte"],
          ["Reacție la părinți", "Nu răspunde, pare treaz dar doarme; nu își amintește dimineața", "Se trezește complet, caută consolare și povestește visul", "Mișcări rigide/ritmice identice de fiecare dată"],
          ["Ce facem", "Nu îl trezim brusc; consult neuropediatru dacă sunt frecvente", "Liniștire, reducere ecrane și stres înainte de culcare", "Consult neuropediatru + EEG 19 canale (1600 MDL)"]
        ]
      }}
      preparationChecklist={{
        heading: "Ce ajută enorm la consultație",
        steps: [
          "Dacă poți, filmează 20–30 de secunde cu telefonul un episod nocturn tipic — este extrem de util medicului.",
          "Notează ora de culcare, ora episoadelor și câte ore de ecrane are copilul pe zi.",
          "Adu analize recente (hemoleucogramă, feritină) dacă le aveți deja."
        ]
      }}
      redFlagsNotice={{
        heading: "Solicită evaluare rapidă dacă episoadele nocturne includ:",
        items: [
          "Mișcări convulsive ritmice, încleștare a maxilarului, devierea ochilor sau pierdere de urină în somn;",
          "Pauze vizibile de respirație (apnee) sau colorare albăstruie a buzelor;",
          "Somnolență severă diurnă sau regres brusc la școală/grădiniță."
        ]
      }}
      faqs={[
        {
          q: "Trebuie să trezesc copilul când are pavor nocturn?",
          a: "Nu — trezirea bruscă îi prelungește confuzia și agitația. Asigură-te doar că nu se poate lovi, vorbește-i calm și lasă episodul să treacă (de obicei 5–10 minute)."
        },
        {
          q: "Se dau somnifere copiilor cu tulburări de somn?",
          a: "Nu — prima linie la copii este întotdeauna igiena somnului, eliminarea ecranelor cu 1–2 ore înainte de culcare, excluderea cauzelor medicale (ORL, deficit de fier, parazitoze) și metode blânde nefarmacologice."
        },
        {
          q: "Cât costă consultația neuropediatrică la Revimed PLUS+?",
          a: "Consultația primară la Dr. Igor Revenco costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/neuropediatru-chisinau/", label: "Neuropediatru Chișinău (500 MDL)" },
        { href: "/eeg-copii-chisinau/", label: "EEG Copii Chișinău (1600 MDL)" },
        { href: "/enurezis-nocturn-copii-neuropediatru-chisinau/", label: "Enurezis Nocturn Copii" },
        { href: "/dureri-de-cap-copii-neuropediatru-chisinau/", label: "Dureri de Cap la Copii" }
      ]}
    />
  );
}
