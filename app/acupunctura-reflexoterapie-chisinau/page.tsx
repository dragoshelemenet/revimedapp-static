import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/acupunctura-reflexoterapie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/acupunctura-reflexoterapie-chisinau/", ru: "/ru/igloukalyvanie-kishinev/", "x-default": "/acupunctura-reflexoterapie-chisinau/" },
 title: "Acupunctură & Reflexoterapie Chișinău (400 MDL) — Revimed PLUS+",
 description: "Acupunctură medicală (consultație 400 MDL) și reflexoterapie (500 MDL) în Chișinău (Ciocana) la Revimed PLUS+. Dureri de spate, migrene, nevralgii, stres și insomnie. 022 60 50 60."
});

export default function AcupuncturaReflexoterapieChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/acupunctura-reflexoterapie-chisinau"
   crumbLabel="Acupunctură Chișinău"
   h1="Acupunctură & Reflexoterapie Medicală în Chișinău (Ciocana)"
   lead="Terapie integrativă cu bază neurologică în Chișinău pentru dureri cronice, nevralgii, migrene, stres și recuperare funcțională."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medic acupuncturist costă 400 MDL (repetată 350 MDL), iar consultația la medic reflexolog costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60."
   introParagraph="Din perspectivă neurofiziologică modernă, acupunctura și reflexoterapia medicală acționează pe trei niveluri complementare: local (ameliorarea microcirculației și reducerea spasmului miofascial), segmentar-medular (mecanismul de control al porții durerii — „gate control”) și central (stimularea secreției proprii de endorfine, enkefaline și serotonină pentru echilibrarea sistemului nervos vegetativ)."
   symptomsHeading="Indicații frecvente pentru acupunctură și reflexoterapie"
   symptoms={[
    "Dureri lombare, cervicale, sciatică, sindrom de tunel carpian și nevralgii faciale sau intercostale;",
    "Migrene, cefalee de tensiune și tulburări de somn (insomnie);",
    "Stres prelungit, anxietate, distonie neurovegetativă și epuizare cronică;",
    "Recuperare complementară după pareze faciale (nevrită de nerv facial), neuropatii și AVC."
]}
   approachHeading="Medicină integrativă și modulație mezodiencefalică (MDM) în condiții sigure"
   approachParagraphs={[
    "La Revimed PLUS+, acupunctura și reflexoterapia completează diagnosticul neurologic și pot fi asociate cu fizioterapie (Electrosomn, Transair TES, Amplipuls — 150 MDL) sau Modulație Mezodiencefalică (aparatele MDM-101, MDM-2000-1 și MDM-K), care reglează centrii adaptativi ai hipotalamusului și sistemului neuro-endocrin.",
    "Se folosesc exclusiv ace sterile de unică folosință și protocoale personalizate adaptate diagnosticului clinic."
]}
   equipmentHeading="Terapii complementare din clinică"
   equipmentCards={[
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Relaxare nervoasă profundă — 150 MDL/oră."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Electrostimulare neurovegetativă blândă."
    },
    {
        "slug": "mdm-101",
        "title": "MDM-101",
        "image": "/images/equipment/mdm-101.webp",
        "desc": "Terapie mezodiencefalică pentru echilibru și imunitate."
    }
]}
   faqs={[
    {
        "q": "Cât costă acupunctura și reflexoterapia în Chișinău la Revimed PLUS+?",
        "a": "Consultația primară la medic acupuncturist costă 400 MDL (repetată 350 MDL), iar la medic reflexolog 500 MDL (repetată 400 MDL)."
    },
    {
        "q": "Este dureroasă ședința de acupunctură?",
        "a": "Acele medicale sunt extrem de fine; majoritatea pacienților simt doar o ușoară înțepătură inițială urmată de o senzație plăcută de relaxare."
    }
]}
   relatedLinks={[
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/tratament-migrene-chisinau/",
        "label": "Tratament Migrene"
    },
    {
        "href": "/insomnie-tratament-chisinau/",
        "label": "Tratament Insomnie"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (97 servicii)"
    }
]}
  />
 );
}
