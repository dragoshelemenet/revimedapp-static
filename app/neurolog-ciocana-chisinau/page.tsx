import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurolog-ciocana-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-ciocana-chisinau/", ru: "/ru/nevrolog-chekany-kishinev/", "x-default": "/neurolog-ciocana-chisinau/" },
 title: "Neurolog Ciocana Chișinău — Str. Mircea cel Bătrân 13/2",
 description:
  "Clinică de neurologie, neurochirurgie, neuropediatrie și fizioterapie în sectorul Ciocana, Chișinău — Str. Mircea cel Bătrân 13/2. Dr. Igor Revenco, 35+ ani experiență. Programări: 022 60 50 60."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/neurolog-ciocana-chisinau"
   crumbLabel="Neurolog Ciocana Chișinău"
   h1="Neurolog și Fizioterapie în Sectorul Ciocana, Chișinău"
   lead="Centrul Medical Revimed PLUS+ pe bd./Str. Mircea cel Bătrân 13/2 — aproape de casă, cu acces rapid la transport public și 25 de aparate de recuperare."
   introParagraph="Locuiești în Ciocana, Rîșcani sau Poșta Veche și cauți un medic neurolog, neurochirurg sau centru de fizioterapie cu experiență solidă? Revimed PLUS+ activează de peste 20 de ani pe Str. Mircea cel Bătrân 13/2, Chișinău (MD-2044), sub conducerea Dr. Igor Revenco."
   symptomsHeading="Servicii medicale disponibile în Ciocana, Chișinău"
   symptoms={[
    "Consultații neurologice pentru adulți și copii (neuropediatrie);",
    "Consultații neurochirurgie — evaluare RMN/CT, hernie de disc, coloană;",
    "Fizioterapie și electroterapie (Amplipuls SMT, electroforeză, Solux, Spectr-LC);",
    "Terapii blânde de neurostimulare (Electrosomn, Transair TES, Bi-LENAR, MDM);",
    "Diagnostic funcțional neinvaziv pe loc (RHEOTEST vascular, analizator AMP)."
   ]}
   approachHeading="Acces rapid din Ciocana și tot Chișinăul"
   approachParagraphs={[
    "Clinica se află chiar pe Str. Mircea cel Bătrân 13/2, cu acces direct prin troleibuze, autobuze și microbuze. Program de lucru: Luni–Vineri, 09:00–15:00."
   ]}
   equipmentHeading="Echipamente disponibile pe loc în Ciocana"
   equipmentCards={[
    { slug: "aparat-amp", title: "Analizator AMP", image: "/images/equipment/aparat-amp.webp", desc: "Evaluare expres neinvazivă a formulei sanguine și parametrilor metabolici." },
    { slug: "electrosomn-3", title: "Electrosomn-3", image: "/images/equipment/electrosomn-3.webp", desc: "Terapie prin electrosomn pentru stres, somn și reglare neurovegetativă." },
    { slug: "amplipuls-5", title: "Amplipuls-5", image: "/images/equipment/amplipuls-5.webp", desc: "Fizioterapie SMT pentru dureri de spate, articulații și recuperare musculară." }
   ]}
   faqs={[
    { q: "Care este adresa exactă a clinicii din Ciocana?", a: "Str. Mircea cel Bătrân 13/2, MD-2044, sectorul Ciocana, Chișinău. Harta interactivă este disponibilă pe pagina Contact." },
    { q: "Cum mă programez telefonic?", a: "Sunați la 022 60 50 60 sau +373 79 422 908, Luni–Vineri 09:00–15:00." }
   ]}
   relatedLinks={[
    { href: "/neurolog-chisinau/", label: "Neurolog Chișinău" },
    { href: "/neurochirurg-chisinau/", label: "Neurochirurg Chișinău" },
    { href: "/fizioterapie-chisinau/", label: "Fizioterapie Chișinău" }
   ]}
  />
 );
}
