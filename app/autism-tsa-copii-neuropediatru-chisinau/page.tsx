import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/autism-tsa-copii-neuropediatru-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/autism-tsa-copii-neuropediatru-chisinau/",
    ru: "/ru/autizm-ras-u-detey-nevrolog-kishinev/",
    "x-default": "/autism-tsa-copii-neuropediatru-chisinau/"
  },
  title: "Neuropediatru Autism & TSA Copii Chișinău — Evaluare Neurologică & EEG",
  description:
    "Evaluare neuropediatrică pentru copii cu suspiciune sau diagnostic de autism (TSA) în Chișinău, Ciocana — Dr. Igor Revenco (35+ ani, studiu USMF 2024). Consultație 500 MDL, EEG 1600 MDL. Tel: 022 60 50 60."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/autism-tsa-copii-neuropediatru-chisinau"
      crumbLabel="Neuropediatru Autism & TSA Copii Chișinău"
      h1="Evaluare neuropediatrică pentru copii cu TSA (autism) și tulburări de dezvoltare în Chișinău"
      lead="Consultație neuropediatrică, EEG pediatric neinvaziv și plan medical individualizat cu Dr. Igor Revenco (35+ ani experiență, autor al studiului USMF 2024 privind terapia adjuvantă în TSA)."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neuropediatrică pentru copii cu suspiciune sau diagnostic de TSA costă 500 MDL (repetată 400 MDL), EEG 19 canale — 1600 MDL, Cartografiere creier 3D — 600 MDL, iar procedurile blânde de suport (Electrosomn / Biofeedback) — 100 MDL / 30 min. Evaluarea este realizată de Dr. Igor Revenco (35+ ani experiență, studiu publicat la USMF în 2024 pe 80 de copii cu TSA). Programări: 022 60 50 60."
      introParagraph="Când părinții observă că un copil nu răspunde la nume, evită contactul vizual, are întârziere de vorbire sau mișcări repetitive, evaluarea neurologică pediatrică este unul dintre primii pași esențiali. Diagnosticul oficial de tulburare de spectru autist (TSA) se stabilește multidisciplinar (psihiatru pediatric, psiholog clinic și neuropediatru), iar rolul neuropediatru Dr. Igor Revenco este de a evalua maturizarea sistemului nervos, de a exclude cauzele neurologice sau activitatea epileptiformă subclinică și de a construi un plan medical sigur, adaptat copilului."
      symptomsHeading="Semne pentru care părinții solicită evaluare neuropediatrică"
      symptoms={[
        "Lipsa sau reducerea contactului vizual și răspuns slab atunci când copilul este strigat pe nume;",
        "Întârziere semnificativă în apariția vorbirii, ecolalie sau pierderea unor cuvinte deja rostite;",
        "Dificultăți de interacțiune socială, joc solitar repetitiv sau sensibilitate crescută la sunete și lumini;",
        "Agitație motorie, stereotipii, tulburări de somn persistente sau episoade de iritabilitate severă;",
        "Episoade scurte de „înghețare” a privirii sau suspiciune de descărcări epileptiforme care pot încetini progresul logopedic."
      ]}
      approachHeading="Cum decurge evaluarea la Dr. Igor Revenco (Revimed PLUS+)"
      approachParagraphs={[
        "Consultația începe fără grabă, într-un mediu liniștit: Dr. Igor Revenco analizează istoricul sarcinii și nașterii, etapele de dezvoltare motorie și de limbaj, calitatea somnului, analizele anterioare și observațiile părinților sau ale logopedului/terapeutului ABA.",
        "Atunci când este indicat clinic, se recomandă investigații complet neinvazive — EEG pediatric pe 19 canale (1600 MDL) și Cartografiere 3D a activității cerebrale (600 MDL) — pentru a verifica maturizarea ritmurilor cerebrale și a exclude descărcările epileptiforme subclinice (frecvent întâlnite la o parte dintre copiii cu tulburări de limbaj și spectru autist).",
        "Planul de susținere medicală se stabilește strict individual și transparent, în completarea terapiei comportamentale, logopediei și psihologiei clinice, cu urmărire periodică a evoluției în atenție, somn, limbaj și comportament."
      ]}
      equipmentHeading="Investigații neinvazive și suport blând disponibile în clinică"
      equipmentCards={[
        {
          slug: "eeg-19-canale",
          title: "EEG Pediatric 19 Canale",
          image: "/images/equipment/eeg.webp",
          desc: "Înregistrare neinvazivă a activității cerebrale pentru excluderea descărcărilor subclinice (1600 MDL)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn & Biofeedback",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Proceduri blânde pentru somn, hiperexcitabilitate și autoreglare nervoasă, la indicația medicului (100 MDL / 30 min)."
        },
        {
          slug: "rheotest",
          title: "RHEOTEST Vascular",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluare neinvazivă a circulației cerebrale fără durere sau radiații (500 MDL)."
        }
      ]}
      customDecisionTable={{
        heading: "Cum diferențiem cauzele întârzierii de vorbire și comportamentului atipic",
        columns: ["Situație clinică", "Ce verifică prioritar medicul", "Pași recomandați"],
        rows: [
          [
            "Întârziere simplă de limbaj",
            "Contact vizual bun, indică cu degetul, înțelege comenzi simple",
            "Consult neuropediatru (500 MDL), reducerea ecranelor, logopedie"
          ],
          [
            "Suspiciune tulburare de spectru autist (TSA)",
            "Contact vizual redus, stereotipii, dificultăți de comunicare socială",
            "Evaluare multidisciplinară (neuropediatru + psihiatru pediatric + psiholog), EEG pediatric"
          ],
          [
            "Regres brusc de limbaj sau episoade de „înghețare”",
            "Suspiciune descărcări epileptiforme subclinice (ex. sindrom Landau-Kleffner)",
            "Prioritar consult neuropediatru + EEG 19 canale (1600 MDL)"
          ],
          [
            "Copilul nu reacționează la sunete sau la nume",
            "Excluderea hipoacuziei (otite recurente, lichid în urechea medie)",
            "Audiogramă / consult ORL + evaluare neuropediatrică"
          ]
        ]
      }}
      preparationChecklist={{
        heading: "Cum te pregătești pentru consultația cu copilul",
        steps: [
          "Adu fișa de dezvoltare, biletele de externare din maternitate, eventuale audiograme, EEG-uri sau evaluări psihologice/logopedice anterioare.",
          "Filmează pe telefon 1–2 clipuri scurte (20–30 sec) din mediul de acasă cu comportamentele care te îngrijorează (joc, reacții, vorbire).",
          "Ia cu tine o jucărie preferată și programează vizita când copilul este odihnit (Luni–Vineri 09:00–15:00)."
        ]
      }}
      redFlagsNotice={{
        heading: "Semnale care necesită evaluare neuropediatrică prioritară:",
        items: [
          "Pierderea bruscă a cuvintelor sau a abilităților sociale deja dobândite (regres de dezvoltare);",
          "Episoade repetate de privire fixă în gol (5–15 secunde) în care copilul nu răspunde la atingere sau strigare;",
          "Crize convulsive, pierderi de cunoștință sau tulburări acute de mers și echilibru (apelați 112 în urgență)."
        ]
      }}
      researchCitations={[
        {
          year: "2024",
          title:
            "Blocantul selectiv al receptorilor de glutamat (N-metil-D-aspartat) – în terapia adjuvantă la copiii cu tulburarea spectrului autist",
          source: "IBN · Conferința USMF, p. 457, ISSN 2345-1467",
          url: "https://ibn.idsi.md/vizualizare_articol/224130"
        }
      ]}
      faqs={[
        {
          q: "Neuropediatrul pune singur diagnosticul de autism (TSA)?",
          a: "Nu — în Republica Moldova diagnosticul oficial de TSA este multidisciplinar (psihiatru pediatric, psiholog clinic și neuropediatru). Neuropediatrul are un rol esențial: evaluează sistemul nervos, exclude cauzele neurologice sau epileptiforme (prin EEG) și stabilește planul medical de susținere a neurodezvoltării."
        },
        {
          q: "De ce este util EEG-ul la copiii cu suspiciune sau diagnostic de TSA?",
          a: "O parte dintre copiii cu tulburări de spectru autist sau întârziere severă de limbaj pot avea activitate epileptiformă subclinică (fără crize vizibile), care afectează atenția, somnul și limbajul. EEG-ul pe 19 canale (1600 MDL) este complet neinvaziv și clarifică acest aspect."
        },
        {
          q: "Terapia medicală înlocuiește logopedia sau terapia comportamentală (ABA)?",
          a: "Nu. Intervențiile psiho-educaționale (logopedie, terapie comportamentală, integrare senzorială) rămân baza recuperării. Evaluarea și suportul neuropediatric au rol complementar — susțin somnul, atenția și reglarea neurologică pentru ca terapiile educaționale să dea rezultate mai bune."
        },
        {
          q: "Cât costă consultația și cum mă programez la Dr. Igor Revenco?",
          a: "Consultația primară la neuropediatru costă 500 MDL (repetată 400 MDL). Programările se fac la 022 60 50 60 sau +373 79 422 908, Luni–Vineri 09:00–15:00, pe Str. Mircea cel Bătrân 13/2 (Ciocana)."
        }
      ]}
      relatedLinks={[
        { href: "/intarziere-vorbire-copii-neuropediatru-chisinau/", label: "Întârziere de Vorbire Copii" },
        { href: "/adhd-hiperactivitate-copii-neuropediatru-chisinau/", label: "ADHD & Hiperactivitate Copii" },
        { href: "/neuropediatru-chisinau/", label: "Neuropediatru Chișinău (500 MDL)" },
        { href: "/eeg-copii-chisinau/", label: "EEG Copii Chișinău (1600 MDL)" },
        { href: "/cartografierea-creierului-chisinau/", label: "Cartografiere Creier 3D (600 MDL)" }
      ]}
    />
  );
}
