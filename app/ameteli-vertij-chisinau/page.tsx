import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/ameteli-vertij-chisinau",
 localized: false,
 title: "Tratament Amețeli & Vertij Chișinău — Neurolog & RHEOTEST",
 description:
  "Evaluare neurologică pentru amețeli, vertij și tulburări de echilibru în Chișinău (Ciocana) — Dr. Igor Revenco, 35+ ani experiență, reografie vasculară RHEOTEST și tratament individual."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/ameteli-vertij-chisinau"
   crumbLabel="Amețeli & Vertij Chișinău"
   h1="Diagnostic și Tratament Amețeli și Vertij în Chișinău"
   lead="Evaluare neurologică atentă și reografie vasculară cerebrală RHEOTEST pe loc la Centrul Medical Revimed PLUS+ (Ciocana)."
   introParagraph="Amețelile recurente, senzația că se învârte camera (vertij) și instabilitatea la mers au frecvent cauze neurologice, vasculare cerebrale sau cervicale. Identificarea cauzei exacte permite un tratament sigur și eficient."
   symptomsHeading="Simptome care necesită evaluare neurologică"
   symptoms={[
    "Episoade de vertij la schimbarea poziției capului sau la ridicare;",
    "Instabilitate la mers, dezechilibru sau senzație de plutire;",
    "Amețeli însoțite de dureri cervicale, cefalee sau țiuit în urechi;",
    "Tulburări de vedere tranzitorii sau slăbiciune bruscă (urgență)."
   ]}
   approachHeading="Evaluare vasculară și recuperare neurologică"
   approachParagraphs={[
    "Dr. Igor Revenco îmbină examenul neurologic clinic cu reografia vasculară neinvazivă RHEOTEST pentru a evalua circulația cerebrală, urmată de un plan personalizat medicamentos și fizioterapeutic."
   ]}
   equipmentHeading="Aparataj folosit în diagnosticul și recuperarea vertijului"
   equipmentCards={[
    { slug: "rheotest", title: "RHEOTEST", image: "/images/equipment/rheotest.webp", desc: "Reoencefalografie neinvazivă pentru evaluarea circulației cerebrale." },
    { slug: "transair-01p-transair-05", title: "Transair TES", image: "/images/equipment/transair.webp", desc: "Reglare neurovegetativă și reducerea stresului asociat vertijului." },
    { slug: "amplipuls-5", title: "Amplipuls-5", image: "/images/equipment/amplipuls-5.webp", desc: "Relaxarea contracturilor cervicale care pot întreține amețelile." }
   ]}
   faqs={[
    { q: "Poate coloana cervicală să provoace amețeli?", a: "Da, contracturile cervicale severe și modificările discale cervicale pot contribui la amețeli și cefalee occipitală." },
    { q: "Cum mă programez pentru consultație și RHEOTEST?", a: "Sunați la 022 60 50 60 sau +373 79 422 908, Luni–Vineri 09:00–15:00." }
   ]}
   relatedLinks={[
    { href: "/neurolog-chisinau/", label: "Neurolog Chișinău" },
    { href: "/tratament-migrene-chisinau/", label: "Migrene Chișinău" },
    { href: "/osteocondroza-cervicala-chisinau/", label: "Osteocondroză cervicală" }
   ]}
  />
 );
}
