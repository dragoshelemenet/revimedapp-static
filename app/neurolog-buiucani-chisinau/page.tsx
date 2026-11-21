import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurolog-buiucani-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-buiucani-chisinau/", ru: "/ru/nevrolog-buyukany-kishinev/", "x-default": "/neurolog-buiucani-chisinau/" },
 title: "Neurolog pentru Pacienții din Buiucani, Chișinău (500 MDL) — Revimed PLUS+",
 description: "Consultație neurolog (500 MDL), neurochirurg (300 MDL), EEG (1400 MDL) și 25 aparate de fizioterapie la Revimed PLUS+ Chișinău — Dr. Igor Revenco, 35+ ani experiență. 022 60 50 60."
});

export default function NeurologBuiucaniChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/neurolog-buiucani-chisinau"
   crumbLabel="Neurolog Buiucani"
   h1="Neurolog, Neurochirurg & Fizioterapie pentru Pacienții din Buiucani, Chișinău"
   lead="Evaluare neurologică completă și recuperare medicală cu 25 de aparate fizioterapeutice la Revimed PLUS+ — soluție completă într-o singură clinică din Chișinău."
   directAnswer="Pacienții din Buiucani beneficiază la Centrul Medical Revimed PLUS+ (Str. Mircea cel Bătrân 13/2, Chișinău) de consultații neurologice (500 MDL) și neurochirurgicale (300 MDL) cu Dr. Igor Revenco (35+ ani experiență, membru EANS), plus EEG (1400 MDL) și fizioterapie (150 MDL). Programări: 022 60 50 60."
   introParagraph="Pentru cazurile complexe de coloană, migrene cronice, amețeli sau recuperare post-AVC, pacienții din Buiucani aleg experiența clinică de peste 35 de ani a Dr. Igor Revenco și baza de 25 de aparate de fizioterapie din Revimed PLUS+."
   symptomsHeading="Ce poți rezolva într-o singură vizită"
   symptoms={[
    "Interpretare RMN/CT coloană și creier + plan conservator de recuperare;",
    "Consultație adulți & copii (neuropediatrie);",
    "Diagnostic funcțional (EEG, REG, AMP 117 indici) și fizioterapie (de la 150 MDL)."
]}
   approachHeading="Programare rapidă fără timp pierdut"
   approachParagraphs={[
    "Programările se fac telefonic la 022 60 50 60 sau +373 79 422 908 (Luni–Vineri 09:00–15:00).",
    "Primești plan clar de tratament și prețuri transparente din prima zi."
]}
   equipmentHeading="Aparatura clinicii"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Analizator AMP",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "117 indici neinvaziv — 1000 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Insomnie și stres — 150 MDL."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls (SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Dureri de spate — 150 MDL."
    }
]}
   faqs={[
    {
        "q": "Cât costă consultația la neurolog și neurochirurg?",
        "a": "Neurolog primar: 500 MDL (repetat 400 MDL); neurochirurg: 300 MDL."
    }
]}
   relatedLinks={[
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (101 servicii)"
    }
]}
  />
 );
}
