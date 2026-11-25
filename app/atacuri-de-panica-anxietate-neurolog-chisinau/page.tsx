import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/atacuri-de-panica-anxietate-neurolog-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/atacuri-de-panica-anxietate-neurolog-chisinau/",
    ru: "/ru/panicheskie-ataki-trevoga-nevrolog-kishinev/",
    "x-default": "/atacuri-de-panica-anxietate-neurolog-chisinau/"
  },
  title: "Atacuri de Panică & Anxietate Chișinău — Neurolog & Metode Fără Dependență",
  description:
    "Evaluare neurologică pentru atacuri de panică, palpitații, lipsă de aer și anxietate în Chișinău, Ciocana — Dr. Igor Revenco. Consultație 500 MDL, Electrosomn / Transair / Biofeedback 100 MDL / 30 min."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/atacuri-de-panica-anxietate-neurolog-chisinau"
      crumbLabel="Atacuri de Panică & Anxietate Chișinău"
      h1="Atacuri de panică, anxietate și hiperexcitabilitate neurovegetativă în Chișinău"
      lead="Excluderea cauzelor organice, înțelegerea mecanismului neurovegetativ și metode blânde de echilibrare fără dependență la Revimed PLUS+ (sectorul Ciocana)."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică pentru atacuri de panică și anxietate (Dr. Igor Revenco, 35+ ani experiență) costă 500 MDL (repetată 400 MDL), evaluarea neinvazivă AMP 117 indici — 1000 MDL, iar procedurile blânde de reglare nervoasă (Electrosomn, Transair TES, Biofeedback) — 100 MDL / 30 min. Programări: 022 60 50 60."
      introParagraph="Un atac de panică lovește brusc cu bătăi rapide ale inimii, nod în gât, senzație de lipsă de aer, amețeală, transpirații reci și teama intensă că „se întâmplă ceva grav”. După ce cardiologul sau urgența confirmă că inima este sănătoasă, mulți pacienți rămân blocați în frica de următorul episod. Evaluarea neurologică și reglarea sistemului nervos autonom ajută la întreruperea acestui cerc vicios."
      symptomsHeading="Simptome neurovegetative frecvente în atacurile de panică"
      symptoms={[
        "Palpitații bruște, senzație de strângere în piept sau „nod în gât” (fără leziune cardiacă);",
        "Lipsă de aer, hiperventilație, furnicături în degete sau în jurul buzelor;",
        "Amețeală, senzație de „irealitate”, tremur interior sau valuri de căldură/frig;",
        "Treziri nocturne cu anxietate și teama constantă de a ieși singur sau de a conduce;",
        "Oboseală cronică și tensiune musculară cervicală după episoade repetate."
      ]}
      approachHeading="Cum abordăm atacurile de panică la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco evaluează istoricul complet, analizele tiroidiene/cardiace aduse de pacient și profilul neurovegetativ, explicând clar de ce apar simptomele fizice (descărcare bruscă de adrenalină, nu pericol cardiac iminent).",
        "Pe lângă recomandările medicale individualizate și tehnicile de respirație controlată, clinica dispune de metode nefarmacologice blânde care calmează hiperactivarea sistemului nervos simpatic: Electrosomn, Transair (stimulare transcraniană TES), Biofeedback și stimulare audio-vizuală (100 MDL / 30 min)."
      ]}
      equipmentHeading="Proceduri blânde de echilibrare neurovegetativă"
      equipmentCards={[
        {
          slug: "electrosomn-4t",
          title: "Electrosomn-4Т",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Calmare neurovegetativă și îmbunătățirea calității somnului fără sedative (100 MDL / 30 min)."
        },
        {
          slug: "bi-lenar",
          title: "Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Reducerea tensiunii emoționale și a hiperexcitabilității simpaticului (100 MDL / 30 min)."
        },
        {
          slug: "aparat-amp",
          title: "Analizator AMP",
          image: "/images/equipment/aparat-amp.webp",
          desc: "Evaluare neinvazivă a 117 indici funcționali fără înțepături (1000 MDL)."
        }
      ]}
      customDecisionTable={{
        heading: "Atac de panică vs. Urgență cardiacă / metabolică",
        columns: ["Criteriu", "Tipic pentru atac de panică", "Necesită urgență 112 / cardiolog"],
        rows: [
          ["Durată și vârf", "Atinge vârful în 5–10 min, apoi scade treptat în 20–30 min", "Durere toracică constrictivă continuă, agravată la efort"],
          ["Context", "Apare și în repaus, stres, spații aglomerate sau noaptea", "Iradiere spre brațul stâng/mandibulă, transpirații profuze, leșin"],
          ["Analize utile", "EKG normal, TSH, feritină, glicemie în limite", "EKG modificat, troponină, tensiune severă necontrolată"]
        ]
      }}
      preparationChecklist={{
        heading: "Ce merită să aduci la consultație",
        steps: [
          "Un EKG recent și analize de bază (TSH, hemoleucogramă, feritină, magneziu), dacă le ai deja făcute.",
          "Lista medicamentelor, suplimentelor și a consumului zilnic de cafea / energizante.",
          "Notează frecvența episoadelor și situațiile în care apar cel mai des."
        ]
      }}
      redFlagsNotice={{
        heading: "Apelează 112 la primul episod sever de durere în piept sau dacă apar:",
        items: [
          "Durere toracică strângătoare care iradiază în braț, spate sau maxilar;",
          "Pierdere de cunoștință (leșin real), buze cianotice sau dificultate severă de respirație;",
          "Gânduri de autovătămare sau stare de confuzie acută."
        ]
      }}
      interactiveTool={{
        href: "/aplicatii/teste-si-instrumente/respiratie-terapeutica/",
        label: "Încearcă exercițiul ghidat de Respirație Terapeutică (3 min) →",
        desc: "Tehnică simplă de respirație lentă care reduce rapid hiperventilația și pulsul:"
      }}
      faqs={[
        {
          q: "Pot muri în timpul unui atac de panică?",
          a: "Nu — deși senzațiile fizice (tahicardie, lipsă de aer, amețeală) sunt extrem de intense, atacul de panică este o descărcare temporară de adrenalină și trece de la sine în 15–30 de minute. Totuși, la primul episod sever este corect să excluzi medical cauzele cardiace și tiroidiene."
        },
        {
          q: "Se pot trata atacurile de panică fără sedative care dau dependență?",
          a: "Da. O abordare corectă combină evaluarea medicală, igiena somnului, reducerea stimulentelor, tehnici de respirație/autoreglare și proceduri blânde (Electrosomn, Transair, Biofeedback — 100 MDL / 30 min), evitând automedicația cu tranchilizante."
        },
        {
          q: "Cât costă consultația la Revimed PLUS+?",
          a: "Consultația primară costă 500 MDL (repetată 400 MDL), iar ședințele de Electrosomn / Biofeedback costă 100 MDL / 30 min. Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/distonie-neurovegetativa-chisinau/", label: "Distonie Neurovegetativă (DNV)" },
        { href: "/insomnie-tratament-chisinau/", label: "Tratament Insomnie" },
        { href: "/oboseala-cronica-burnout-biofeedback-chisinau/", label: "Oboseală Cronică & Biofeedback" },
        { href: "/electrosomn-chisinau/", label: "Electrosomn (100 MDL / 30 min)" }
      ]}
    />
  );
}
