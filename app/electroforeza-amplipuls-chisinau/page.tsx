import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/electroforeza-amplipuls-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/electroforeza-amplipuls-chisinau/", ru: "/ru/elektroforez-amplipuls-kishinev/", "x-default": "/electroforeza-amplipuls-chisinau/" },
 title: "Electroforeză & Amplipuls (SMT) Chișinău (150 MDL) — Revimed PLUS+",
 description: "Electroforeză medicală și terapie cu curenți Amplipuls (SMT) în Chișinău (Ciocana) — 150 MDL/oră la Revimed PLUS+. Dureri de spate, hernie de disc, nevralgii, articulații. 022 60 50 60."
});

export default function ElectroforezaAmplipulsChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/electroforeza-amplipuls-chisinau"
   crumbLabel="Electroforeză & Amplipuls"
   h1="Electroforeză Medicală & Terapie Amplipuls (SMT) în Chișinău"
   lead="Proceduri fizioterapeutice țintite antiinflamatoare și analgezice în Chișinău (Ciocana) pentru dureri de coloană, hernie de disc, nevralgii și recuperare articulară."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), electroforeza medicală și terapia cu curenți Amplipuls (SMT) costă 150 MDL/oră. Clinica dispune de aparatele Amplipuls-4, Amplipuls-5, Amplipuls-6 și electroforeză medicamentoasă. Programări: 022 60 50 60."
   introParagraph="Electroforeza introduce substanțe active direct în zona dureroasă prin curent galvanic blând (ocolind stomacul), iar curenții sinusoidali modulați Amplipuls (SMT) calmează rapid durerea, reduc edemul și relaxează spasmele musculare."
   symptomsHeading="Indicații principale pentru Electroforeză și Amplipuls"
   symptoms={[
    "Hernie de disc, osteocondroză cervicală/lombară și sciatică;",
    "Nevralgii, nevrite, radiculopatii și dureri articulare (artroză, periartrită);",
    "Contracturi musculare dureroase și recuperare post-traumatică;",
    "Alternativă blândă pentru pacienții care nu tolerează antiinflamatoarele orale."
]}
   approachHeading="Tratament precis, sub îndrumare medicală"
   approachParagraphs={[
    "Dispunem de 3 generații de aparate Amplipuls (4, 5 și 6) și echipament dedicat de electroforeză medicamentoasă, permițând ajustarea fină a parametrilor pentru fiecare pacient.",
    "Procedurile (150 MDL) pot fi efectuate pe baza recomandării medicului tău sau după consultația cu Dr. Igor Revenco."
]}
   equipmentHeading="Aparatura clinică utilizată"
   equipmentCards={[
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Medicamentoasă",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Administrare locală nedureroasă — 150 MDL/oră."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls-5 (SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Curenți analgezici și decontracturanți — 150 MDL/oră."
    },
    {
        "slug": "amplipuls-6",
        "title": "Amplipuls-6",
        "image": "/images/equipment/amplipuls-6.webp",
        "desc": "Recuperare neuromusculară și articulară."
    }
]}
   faqs={[
    {
        "q": "Cât costă o ședință de electroforeză sau Amplipuls în Chișinău?",
        "a": "Atât electroforeza medicală, cât și terapia cu Amplipuls costă 150 MDL/oră la Revimed PLUS+."
    },
    {
        "q": "Pot face electroforeză cu trimitere de la alt medic?",
        "a": "Da, acceptăm recomandări medicale existente sau putem stabili protocolul pe loc cu medicul clinicii."
    }
]}
   relatedLinks={[
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de disc"
    },
    {
        "href": "/dureri-de-spate-sciatica-chisinau/",
        "label": "Dureri de spate & sciatică"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (101 servicii)"
    }
]}
  />
 );
}
