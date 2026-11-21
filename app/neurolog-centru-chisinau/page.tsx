import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurolog-centru-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-centru-chisinau/", ru: "/ru/nevrolog-tsentr-kishinev/", "x-default": "/neurolog-centru-chisinau/" },
 title: "Neurolog & Neurochirurg Chișinău Centru — Fără Cozi | Revimed PLUS+",
 description: "Alternativă rapidă fără cozi pentru pacienții din Chișinău Centru: Dr. Igor Revenco (35+ ani, EANS) la Revimed PLUS+ — neurolog 500 MDL, neurochirurg 300 MDL, fizioterapie 150 MDL. 022 60 50 60."
});

export default function NeurologCentruChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/neurolog-centru-chisinau"
   crumbLabel="Neurolog Centru"
   h1="Neurolog & Neurochirurg pentru Chișinău Centru — Fără Cozi, Prețuri Clare"
   lead="Pentru pacienții din centrul Chișinăului care caută un medic neurolog cu 35+ ani experiență, diagnostic pe loc și recuperare medicală completă, fără aglomerație."
   directAnswer="Centrul Medical Revimed PLUS+ (Str. Mircea cel Bătrân 13/2, Chișinău, la 12–15 min de Centru) oferă consultații cu Dr. Igor Revenco (35+ ani, categorie superioară, membru EANS): neurolog 500 MDL, neurochirurg 300 MDL, EEG 1400 MDL, fizioterapie 150 MDL. Programări: 022 60 50 60."
   introParagraph="În loc să aștepți săptămâni la spitalele aglomerate din centru, la Revimed PLUS+ primești timp real de consultație, interpretare atentă a RMN-ului și acces imediat la 25 de aparate de fizioterapie."
   symptomsHeading="Ce servicii găsești pe loc"
   symptoms={[
    "Neurologie adulți & copii (500 MDL) și Neurochirurgie (300 MDL);",
    "Diagnostic EEG (1400 MDL), REG (500 MDL), AMP 117 indici (1000 MDL);",
    "Fizioterapie completă (150 MDL), masaj terapeutic (200 MDL), kinetoterapie (250 MDL)."
]}
   approachHeading="Acces facil din Centru"
   approachParagraphs={[
    "Transport direct din centrul Chișinăului spre bd. Mircea cel Bătrân 13/2, cu programări fixe Luni–Vineri 09:00–15:00."
]}
   equipmentHeading="Tehnologii clinice"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Circulație cerebrală — 500 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Stres & insomnie — 150 MDL."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls (SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Analgezie coloană — 150 MDL."
    }
]}
   faqs={[
    {
        "q": "Aveți nevoie de trimitere de la medicul de familie?",
        "a": "Nu, te poți programa direct telefonic la 022 60 50 60 fără bilet de trimitere."
    }
]}
   relatedLinks={[
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/dr-igor-revenco/",
        "label": "Dr. Igor Revenco"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (101 servicii)"
    }
]}
  />
 );
}
