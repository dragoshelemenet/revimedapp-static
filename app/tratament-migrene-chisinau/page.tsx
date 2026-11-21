import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/tratament-migrene-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/tratament-migrene-chisinau/", ru: "/ru/lechenie-migreni-kishinev/", "x-default": "/tratament-migrene-chisinau/" },
 title: "Tratament Migrene & Dureri de Cap Chișinău | Neurolog Ciocana",
 description:
  "Diagnostic și tratament individual pentru migrene, dureri de cap, amețeli și vertij în Chișinău (Ciocana) — Dr. Igor Revenco, neurolog 35+ ani, RHEOTEST, Electrosomn și Transair TES."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/tratament-migrene-chisinau"
   crumbLabel="Tratament migrene Chișinău"
   h1="Tratament Migrene, Dureri de Cap și Amețeli în Chișinău"
   lead="Evaluare neurologică completă, reografie vasculară neinvazivă RHEOTEST și proceduri blânde (Electrosomn, Transair TES) la Revimed PLUS+ Ciocana."
   introParagraph="Cefaleea recurentă, migrenele cu sau fără aură și episoadele de amețeală afectează productivitatea și calitatea somnului. La Revimed PLUS+ Chișinău identificăm cauza reală — vasculară, cervicală, neurovegetativă sau mixtă — și construim un plan personalizat, nu doar analgezice temporare."
   symptomsHeading="Când merită să consulți neurologul pentru migrene și amețeli"
   symptoms={[
    "Dureri de cap pulsatile pe o jumătate a capului, cu sensibilitate la lumină sau zgomot;",
    "Cefalee de tensiune la sfârșitul zilei sau asociată cu dureri cervicale;",
    "Amețeli, senzație de vertij, instabilitate la mers sau zgomote în urechi;",
    "Tulburări de somn, oboseală cronică și stres neurovegetativ;",
    "Nevoia tot mai frecventă de analgezice fără ameliorare pe termen lung."
   ]}
   approachHeading="Diagnostic funcțional și terapii nemedicamentoase blânde"
   approachParagraphs={[
    "Consultația neurologică cu Dr. Igor Revenco poate fi completată pe loc cu reografia vasculară cerebrală RHEOTEST, o investigație neinvazivă care oferă informații utile despre tonusul vascular cerebral.",
    "Pentru reducerea frecvenței și intensității crizelor, mulți pacienți aleg combinarea recomandărilor medicale cu Electrosomn, Transair TES și modulare mezodiencefalică (MDM)."
   ]}
   equipmentHeading="Tehnologii folosite în migrene, vertij și stres"
   equipmentCards={[
    { slug: "rheotest", title: "RHEOTEST", image: "/images/equipment/rheotest.webp", desc: "Diagnostic vascular funcțional neinvaziv pentru circulația cerebrală și periferică." },
    { slug: "transair-01p-transair-05", title: "Transair TES", image: "/images/equipment/transair.webp", desc: "Stimulare transcraniană pentru activarea mecanismelor naturale analgezice și anti-stres." },
    { slug: "electrosomn-5-es-10-5", title: "Electrosomn-5", image: "/images/equipment/electrosomn-5-es-10-5.webp", desc: "Terapie neurotropă blândă pentru relaxare, migrene și normalizarea somnului." }
   ]}
   faqs={[
    { q: "Se poate reduce frecvența migrenelor fără exces de medicamente?", a: "Da. Identificarea factorilor declanșatori, corectarea componentei cervicale și procedurile neinvazive (Transair TES, Electrosomn, MDM) ajută mulți pacienți să reducă dependența de analgezice." },
    { q: "Este dureroasă reografia RHEOTEST?", a: "Nu, este complet neinvazivă și nedureroasă." }
   ]}
   relatedLinks={[
    { href: "/neurolog-chisinau/", label: "Neurolog Chișinău" },
    { href: "/electrosomn-chisinau/", label: "Electrosomn Chișinău" },
    { href: "/preturi/", label: "Prețuri consultații" }
   ]}
  />
 );
}
