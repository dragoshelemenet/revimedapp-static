import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurolog-riscani-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-riscani-chisinau/", ru: "/ru/nevrolog-ryshkanovka-kishinev/", "x-default": "/neurolog-riscani-chisinau/" },
 title: "Neurolog lângă Rîșcani, Chișinău (500 MDL) — Dr. Igor Revenco",
 description: "Cauți medic neurolog în sectorul Rîșcani, Chișinău? Centrul Medical Revimed PLUS+ (la 7–10 min, Str. Mircea cel Bătrân 13/2): neurolog 500 MDL, neurochirurg 300 MDL, EEG & 25 aparate fizioterapie. 022 60 50 60."
});

export default function NeurologRiscaniChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/neurolog-riscani-chisinau"
   crumbLabel="Neurolog Rîșcani"
   h1="Neurolog lângă Rîșcani, Chișinău — Consultații & Fizioterapie la 7–10 Minute"
   lead="Pentru pacienții din sectorul Rîșcani (bd. Moscova, str. Alecu Russo, Kiev), Centrul Medical Revimed PLUS+ din Ciocana oferă acces rapid la neurologie, neurochirurgie, EEG și 25 de aparate de fizioterapie."
   directAnswer="Pacienții din sectorul Rîșcani ajung în 7–10 minute la Centrul Medical Revimed PLUS+ (Str. Mircea cel Bătrân 13/2, Ciocana, Chișinău). Consultația primară la medic neurolog (Dr. Igor Revenco, 35+ ani experiență, membru EANS) costă 500 MDL, neurochirurg 300 MDL, EEG 1400 MDL, iar fizioterapia 150 MDL. Programări: 022 60 50 60."
   introParagraph="De pe bulevardul Moscova sau strada Alecu Russo (Rîșcani), ajungi direct pe Str. Mircea cel Bătrân 13/2 fără aglomerația din centrul orașului. Într-o singură clinică ai atât evaluarea medicului neurolog/neurochirurg, cât și investigațiile funcționale și procedurile de recuperare."
   symptomsHeading="Servicii medicale solicitate de pacienții din Rîșcani"
   symptoms={[
    "Consultații neurologie adulți și neuropediatrie (500 MDL primară / 400 MDL repetată);",
    "A doua opinie neurochirurgicală pe RMN/CT pentru hernie de disc (300 MDL);",
    "Diagnostic funcțional pe loc: EEG (1400 MDL), REG (500 MDL), AMP 117 indici (1000 MDL);",
    "Fizioterapie, Electrosomn, Amplipuls, Electroforeză (150 MDL) și masaj terapeutic (200 MDL)."
]}
   approachHeading="Acces rapid din Rîșcani spre Revimed PLUS+"
   approachParagraphs={[
    "Accesul din Rîșcani spre Ciocana este direct prin str. Alecu Russo și bd. Mircea cel Bătrân, atât cu mașina personală (7–10 minute), cât și cu transportul public (troleibuze și autobuze directe).",
    "Programările telefonice la 022 60 50 60 îți economisesc timpul — vii la ora stabilită, fără cozi lungi."
]}
   equipmentHeading="Tehnologie disponibilă în clinică"
   equipmentCards={[
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Terapie neinvazivă pentru somn și stres — 150 MDL."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls (SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Calmarea durerilor de spate și sciaticii — 150 MDL."
    },
    {
        "slug": "aparat-amp",
        "title": "Analizator AMP",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "117 indici clinici fără înțepături — 1000 MDL."
    }
]}
   faqs={[
    {
        "q": "Cât faci din Rîșcani până la Revimed PLUS+?",
        "a": "De pe bd. Moscova / str. Alecu Russo ajungi în 7–10 minute cu mașina sau transportul direct pe bd. Mircea cel Bătrân 13/2."
    },
    {
        "q": "Cât costă consultația la neurolog?",
        "a": "Consultația primară la Dr. Igor Revenco costă 500 MDL, iar consultația repetată 400 MDL."
    }
]}
   relatedLinks={[
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/neurolog-ciocana-chisinau/",
        "label": "Neurolog Ciocana"
    },
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (101 servicii)"
    }
]}
  />
 );
}
