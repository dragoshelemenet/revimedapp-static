import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/fizioterapie-ciocana-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/fizioterapie-ciocana-chisinau/", ru: "/ru/fizioterapiya-chekany-kishinev/", "x-default": "/fizioterapie-ciocana-chisinau/" },
 title: "Fizioterapie, Kinetoterapie & Masaj Ciocana (Chișinău) — de la 100 MDL",
 description: "Centru de fizioterapie, kinetoterapie, masaj terapeutic și acupunctură în sectorul Ciocana (Chișinău, bd. Mircea cel Bătrân 13/2) — Revimed PLUS+. Proceduri 100 MDL / 30 min. 022 60 50 60."
});

export default function FizioterapieCiocanaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/fizioterapie-ciocana-chisinau"
   crumbLabel="Fizioterapie Ciocana"
   h1="Fizioterapie, Kinetoterapie și Masaj Terapeutic în Sectorul Ciocana, Chișinău"
   lead="25 de aparate de fizioterapie și recuperare medicală chiar pe bulevardul Mircea cel Bătrân 13/2 (Ciocana), sub coordonarea Dr. Igor Revenco (35+ ani experiență)."
   directAnswer="Centrul Medical Revimed PLUS+ este situat în sectorul Ciocana, Chișinău (Str. Mircea cel Bătrân 13/2, MD-2044). Cele 43 de proceduri din categoria echipamente și metode curative (electroforeză, Amplipuls, magnetoterapie, laser, Electrosomn, ultrasunete, Bioptron, JAD-masaj) au tariful orientativ de 100 MDL / 30 min, iar consultația primară la specialist costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60."
   introParagraph="Locuitorii din sectorul Ciocana (și sectoarele învecinate Rîșcani, Botanica, Centru) beneficiază într-un singur loc de consultație neurologică/neurochirurgicală, diagnostic funcțional (EEG, REG, AMP, Electrospondilografie) și bază completă de fizioterapie fără drumuri suplimentare prin oraș."
   symptomsHeading="Proceduri disponibile la sediul nostru din Ciocana"
   symptoms={[
    "Electroterapie și neurostimulare: Electroforeză, Amplipuls-4/5/6, Electrosomn, Transair TES, MDM (100 MDL / 30 min);",
    "Magnetoterapie, terapie cu laser, fototerapie Bioptron, ultrasunete și Darsonvalizare (100 MDL / 30 min);",
    "Masaj general / terapeutic, pat cu pietre de jad, vibromasaj KDJ, Vitafon și kinetoterapie;",
    "Acupunctură corporală și auriculară, reflexoterapie, peșteră de sare (100 MDL/oră) și băi cu nămol Saki (150 MDL)."
]}
   approachHeading="Acces rapid cu transportul public în Ciocana (Str. Mircea cel Bătrân 13/2)"
   approachParagraphs={[
    "Clinica este amplasată direct la bulevardul Mircea cel Bătrân 13/2 (lângă stațiile de troleibuz 12, 13, 23, 24, 26, autobuz 5, 23 și microbuz 113, 191), cu program de luni până vineri între 09:00 și 15:00.",
    "Toate procedurile se efectuează pe baza planului individual stabilit de medic. Informațiile și tarifele de pe site au caracter orientativ."
]}
   equipmentHeading="Dotarea bazei de fizioterapie din Ciocana"
   equipmentCards={[
    {
        "slug": "amplipuls-6",
        "title": "Amplipuls-6 & Electroforeză",
        "image": "/images/equipment/amplipuls-6.webp",
        "desc": "Recuperare pentru dureri de spate, sciatică și articulații — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Spectr-LC (Laser & Magnet)",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Terapie cu laser și fotocataliză magnetică în Ciocana — 100 MDL / 30 min."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Vibromasaj & Pat cu Jad",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Relaxare musculară paravertebrală și stimulare plantară — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Unde exact în Ciocana se află Revimed PLUS+?",
        "a": "Ne aflăm pe Str. Mircea cel Bătrân 13/2, MD-2044, sectorul Ciocana, Chișinău. Telefon recepție: 022 60 50 60 / +373 79 422 908."
    },
    {
        "q": "Cât costă procedurile de fizioterapie la filiala din Ciocana?",
        "a": "Procedurile din categoria Echipamente și metode curative au tariful orientativ de 100 MDL / 30 min."
    }
]}
   relatedLinks={[
    {
        "href": "/neurolog-ciocana-chisinau/",
        "label": "Neurolog Ciocana"
    },
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie Chișinău"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
