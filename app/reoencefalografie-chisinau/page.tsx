import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/reoencefalografie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/reoencefalografie-chisinau/", ru: "/ru/reoentsefalografiya-kishinev/", "x-default": "/reoencefalografie-chisinau/" },
 title: "Reoencefalografie (REG) Chișinău (500 MDL) — Circulație Cerebrală",
 description: "Reoencefalografie (REG) neinvazivă în Chișinău (Ciocana) cu RHEOTEST — 500 MDL. Evaluarea vaselor cerebrale în amețeli, migrene, tinitus și hipertensiune. 022 60 50 60."
});

export default function ReoencefalografieChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/reoencefalografie-chisinau"
   crumbLabel="Reoencefalografie Chișinău"
   h1="Reoencefalografie (REG) în Chișinău — Evaluarea Circulației Cerebrale"
   lead="Investigație vasculară cerebrală neinvazivă cu sistemul RHEOTEST în Chișinău (Ciocana) pentru amețeli, migrene, zgomote în urechi și insuficiență circulatorie."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), reoencefalografia (REG) costă 500 MDL, iar consultația neurologică cu Dr. Igor Revenco (35+ ani experiență) costă 500 MDL. Examinarea este neinvazivă, rapidă și nedureroasă. Programări: 022 60 50 60."
   introParagraph="Reoencefalografia (REG) evaluează tonusul vascular, elasticitatea arterelor cerebrale și drenajul venos, oferind medicului neurolog informații valoroase în cefalee vasculară, vertij, osteocondroză cervicală și recuperare post-AVC."
   symptomsHeading="Când se recomandă reoencefalografia (REG)"
   symptoms={[
    "Amețeli, vertij, senzație de instabilitate sau „cap greu”;",
    "Dureri de cap pulsatile, migrene și zgomote în urechi (tinitus);",
    "Osteocondroză cervicală cu suspiciune de afectare a circulației vertebro-bazilare;",
    "Hipertensiune arterială, distonie neurovegetativă și tulburări de memorie."
]}
   approachHeading="Diagnostic vascular integrat cu tratament"
   approachParagraphs={[
    "Examinarea REG pe aparatul RHEOTEST durează ~15 minute, fără radiații și fără substanță de contrast.",
    "Pe baza rezultatului, Dr. Igor Revenco stabilește schema personalizată de tratament medicamentos și/sau fizioterapie vasculară (Electrosomn, Transair, Electroforeză — 150 MDL)."
]}
   equipmentHeading="Aparatura clinică utilizată"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Reoencefalografie și reovasografie computerizată — 500 MDL."
    },
    {
        "slug": "transair-01p-transair-05",
        "title": "Transair TES",
        "image": "/images/equipment/transair.webp",
        "desc": "Stimulare transcraniană pentru echilibru vascular și migrene."
    },
    {
        "slug": "aparat-amp",
        "title": "Analizator AMP",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Evaluare neinvazivă 117 indici — 1000 MDL."
    }
]}
   faqs={[
    {
        "q": "Cât costă reoencefalografia (REG) în Chișinău?",
        "a": "Reoencefalografia costă 500 MDL la Centrul Medical Revimed PLUS+."
    },
    {
        "q": "Este dureroasă investigația REG?",
        "a": "Nu, este complet nedureroasă și neinvazivă, realizată cu electrozi de suprafață."
    }
]}
   relatedLinks={[
    {
        "href": "/ameteli-vertij-chisinau/",
        "label": "Amețeli & Vertij Chișinău"
    },
    {
        "href": "/tratament-migrene-chisinau/",
        "label": "Tratament Migrene"
    },
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Chișinău"
    },
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (97 servicii)"
    }
]}
  />
 );
}
