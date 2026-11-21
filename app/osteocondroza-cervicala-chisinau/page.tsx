import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/osteocondroza-cervicala-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/osteocondroza-cervicala-chisinau/", ru: "/ru/osteohondroz-kishinev/", "x-default": "/osteocondroza-cervicala-chisinau/" },
 title: "Tratament Osteocondroză Cervicală & Lombară Chișinău",
 description:
  "Diagnostic și fizioterapie pentru osteocondroză cervicală, toracală și lombară în Chișinău (Ciocana) — Dr. Igor Revenco, Amplipuls SMT, electroforeză, Solux și recuperare medicală."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/osteocondroza-cervicala-chisinau"
   crumbLabel="Osteocondroză Chișinău"
   h1="Tratament Osteocondroză Cervicală și Lombară în Chișinău"
   lead="Plan complet de neurologie și fizioterapie în sectorul Ciocana pentru dureri de gât, spate, amorțeli și rigiditate articulară."
   introParagraph="Osteocondroza cervicală și lombară este una dintre cele mai frecvente cauze de durere cronică de spate, cefalee occipitală și amorțeală în brațe sau picioare. La Revimed PLUS+ Chișinău abordăm atât cauza neurologică, cât și spasmul muscular local."
   symptomsHeading="Simptome tipice ale osteocondrozei"
   symptoms={[
    "Dureri persistente de gât, umeri sau zona lombară, accentuate la statul la birou;",
    "Amețeli, cefalee în zona cefei și tensiune musculară cervicală;",
    "Amorțeli sau furnicături în degete, brațe ori picioare;",
    "Limitarea rotației gâtului sau rigiditate dimineața."
   ]}
   approachHeading="Recuperare medicală țintită în Chișinău"
   approachParagraphs={[
    "După evaluarea clinică (și analiza radiografiilor/RMN), medicul stabilește un protocol care combină proceduri antiinflamatoare locale, electroterapie SMT și recomandări practice pentru prevenirea recidivelor."
   ]}
   equipmentHeading="Proceduri pentru osteocondroză"
   equipmentCards={[
    { slug: "amplipuls-6", title: "Amplipuls-6 (SMT)", image: "/images/equipment/amplipuls-6.webp", desc: "Electroterapie digitală pentru dureri cervicale, lombare și contracturi." },
    { slug: "aparat-electroforeza-medicamentoasa", title: "Electroforeză", image: "/images/equipment/aparat-electroforeza-medicamentoasa.webp", desc: "Administrare locală blândă de substanțe terapeutice." },
    { slug: "lampa-solux", title: "Lampă Solux", image: "/images/equipment/lampa-solux.webp", desc: "Încălzire infraroșie locală pentru relaxare musculară." }
   ]}
   faqs={[
    { q: "Poate osteocondroza cervicală să dea dureri de cap și amețeli?", a: "Da, tensiunea cervicală și iritarea structurilor neurovasculare cervicale produc frecvent cefalee occipitală și amețeli." },
    { q: "Cât durează un curs de fizioterapie?", a: "De obicei 5–10 ședințe stabilite individual de medic." }
   ]}
   relatedLinks={[
    { href: "/dureri-de-spate-sciatica-chisinau/", label: "Dureri de spate & Sciatică" },
    { href: "/hernie-de-disc-chisinau/", label: "Hernie de disc Chișinău" },
    { href: "/fizioterapie-chisinau/", label: "Fizioterapie Chișinău" }
   ]}
  />
 );
}
