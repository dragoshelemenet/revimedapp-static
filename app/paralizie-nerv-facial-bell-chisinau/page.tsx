import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/paralizie-nerv-facial-bell-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/paralizie-nerv-facial-bell-chisinau/",
    ru: "/ru/nevrit-litsevogo-nerva-paralich-bella-kishinev/",
    "x-default": "/paralizie-nerv-facial-bell-chisinau/"
  },
  title: "Paralizie Nerv Facial (Bell) Chișinău — Neurolog & Recuperare Fizioterapie",
  description:
    "Evaluare neurologică și recuperare în paralizia nervului facial (Bell / nevrită facială) în Chișinău, Ciocana — Dr. Igor Revenco (35+ ani). Consultație 500 MDL, fizioterapie 100 MDL / 30 min. Tel: 022 60 50 60."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/paralizie-nerv-facial-bell-chisinau"
      crumbLabel="Paralizie Nerv Facial (Bell) Chișinău"
      h1="Paralizia nervului facial (Bell) și nevrita facială — diagnostic și recuperare în Chișinău"
      lead="Diferențierea rapidă între paralizia periferică (Bell) și AVC, urmată de tratament medicamentos corect și recuperare fizioterapeutică blândă în Chișinău, sectorul Ciocana."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică pentru paralizia nervului facial (Dr. Igor Revenco, 35+ ani experiență) costă 500 MDL (repetată 400 MDL), iar ședințele de fizioterapie de recuperare facială (laser, magnetoterapie, proceduri blânde la indicația medicului) costă 100 MDL / 30 min. Programări: 022 60 50 60."
      introParagraph="Paralizia periferică a nervului facial (paralizia Bell) debutează de obicei brusc, în 24–48 de ore, adesea după curent rece sau o infecție virală: un colț al gurii coboară, ochiul de pe aceeași parte nu se mai închide complet, iar fruntea nu se mai poate încrunta. Evaluarea neurologică din primele 72 de ore este esențială — atât pentru a exclude un accident vascular cerebral (AVC), cât și pentru a începe la timp tratamentul antiinflamator și protecția corneei."
      symptomsHeading="Semne tipice ale nevritei / paraliziei nervului facial"
      symptoms={[
        "Asimetrie bruscă a unei jumătăți a feței — colțul gurii tras spre partea sănătoasă;",
        "Imposibilitatea de a închide complet ochiul (lagoftalmie) și lăcrimare sau uscăciune oculară;",
        "Ștergerea ridurilor de pe frunte pe partea afectată și dificultate la zâmbet sau pronunție;",
        "Durere ușoară în spatele urechii, sensibilitate crescută la sunete sau diminuarea gustului;",
        "Recuperare incompletă sau contracturi reziduale după un episod mai vechi de paralizie facială."
      ]}
      approachHeading="Cum abordăm recuperarea nervului facial la Revimed PLUS+"
      approachParagraphs={[
        "În primele zile, prioritatea absolută este examenul neurologic complet (pentru a confirma forma periferică și a exclude cauzele centrale sau otice/herpetice), schema antiinflamatoare prescrisă individual și protecția mecanică a ochiului (lacrimi artificiale, pansament nocturn).",
        "După stabilizarea fazei acute, recuperarea structurată include gimnastică facială dozată (fără suprasolicitare, pentru a preveni sincineziile), fizioterapie blândă (magnetoterapie, laserterapie — 100 MDL / 30 min) și masaj ușor, adaptate exact evoluției nervului."
      ]}
      equipmentHeading="Metode de evaluare și recuperare blândă"
      equipmentCards={[
        {
          slug: "rheotest",
          title: "RHEOTEST Vascular",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluarea circulației cerebrale și periferice fără durere (500 MDL)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn & Relaxare",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Susținerea somnului și reducerea stresului în perioada de recuperare (100 MDL / 30 min)."
        },
        {
          slug: "bi-lenar",
          title: "Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Reglare neurovegetativă blândă în faza de recuperare (100 MDL / 30 min)."
        }
      ]}
      customDecisionTable={{
        heading: "Paralizie facială periferică (Bell) vs. Accident Vascular Cerebral (AVC)",
        columns: ["Semn clinic", "Paralizie Bell (periferică)", "Suspiciune AVC (urgență 112)"],
        rows: [
          ["Fruntea (ridicarea sprâncenei)", "Afectată (nu se poate încrunta pe acea parte)", "De obicei păstrată (doar partea inferioară a feței cade)"],
          ["Forța în mână și picior", "Normală", "Slăbiciune sau amorțeală la braț/picior"],
          ["Vorbirea și echilibrul", "Doar ușoară dificultate la pronunția buzelor", "Vorbire neclară, confuzie, amețeală bruscă"],
          ["Ce faci imediat", "Consult neurologic în primele 24–72 de ore", "Apelează imediat 112"]
        ]
      }}
      preparationChecklist={{
        heading: "Ce să faci până ajungi la consult",
        steps: [
          "Protejează ochiul care nu se închide complet cu picături lubrifiante (lacrimi artificiale) și evită curentul direct.",
          "Notează ora exactă a debutului și dacă ai avut recent durere de ureche, erupții veziculare sau viroză.",
          "Nu începe electrostimulare agresivă a feței din proprie inițiativă — în faza greșită poate favoriza contracturi."
        ]
      }}
      redFlagsNotice={{
        heading: "Sună imediat la 112 dacă asimetria feței se însoțește de:",
        items: [
          "Slăbiciune sau amorțeală la o mână ori un picior;",
          "Vorbire împleticită, confuzie, vedere dublă sau pierdere bruscă de echilibru;",
          "Erupție dureroasă cu vezicule în ureche (suspiciune sindrom Ramsay Hunt — necesită tratament antiviral rapid)."
        ]
      }}
      faqs={[
        {
          q: "În cât timp se recuperează de obicei paralizia Bell?",
          a: "Majoritatea pacienților încep să observe mișcări de revenire în 2–3 săptămâni, iar recuperarea completă apare de regulă în 1–3 luni, mai ales când tratamentul antiinflamator este început în primele 72 de ore."
        },
        {
          q: "Este bună electrostimularea puternică în primele zile de paralizie facială?",
          a: "Nu — stimularea electrică agresivă precoce poate crește riscul de contracturi și sincinezii (mișcări involuntare asociate). Fizioterapia și exercițiile faciale se dozează strict la indicația neurologului."
        },
        {
          q: "Cât costă consultația și recuperarea la Revimed PLUS+?",
          a: "Consultația primară la Dr. Igor Revenco costă 500 MDL (repetată 400 MDL), iar procedurile fizioterapeutice de suport costă 100 MDL / 30 min. Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/nevralgie-neuropatie-chisinau/", label: "Nevralgie & Neuropatie" },
        { href: "/recuperare-dupa-avc-chisinau/", label: "Recuperare post-AVC" },
        { href: "/fizioterapie-chisinau/", label: "Fizioterapie Chișinău (100 MDL)" },
        { href: "/neurolog-ciocana-chisinau/", label: "Neurolog Ciocana" }
      ]}
    />
  );
}
