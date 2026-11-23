import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/fitoterapeut-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/fitoterapeut-chisinau/", ru: "/ru/fitoterapevt-kishinev/", "x-default": "/fitoterapeut-chisinau/" },
 title: "Medic Fitoterapeut în Chișinău (500 MDL) — Fitoterapie & Naturoterapie",
 description: "Consultație cu medic fitoterapeut în Chișinău (Ciocana) la Revimed PLUS+ — 500 MDL, plus fizioterapie și naturoterapie (100 MDL / 30 min). Programări: 022 60 50 60."
});

export default function FitoterapeutChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/fitoterapeut-chisinau"
   crumbLabel="Fitoterapeut Chișinău"
   h1="Consultație cu Medic Fitoterapeut și Naturoterapie în Chișinău — 500 MDL"
   lead="Abordare medicală integrativă în Chișinău (Ciocana): fitoterapie ghidată de medic, verificare riguroasă a interacțiunilor medicamentoase și asociere cu fizioterapie blândă."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară cu medicul fitoterapeut are tariful orientativ de 500 MDL, iar ședințele de Fizioterapie + Naturoterapie costă 100 MDL / 30 min. Programări: 022 60 50 60."
   introParagraph="Spre deosebire de utilizarea empirică a plantelor sau suplimentelor de pe internet, consultația cu medicul fitoterapeut într-o clinică medicală pornește de la diagnosticul clinic, istoricul pacientului și verificarea contraindicațiilor și a interacțiunilor cu medicația alopată."
   symptomsHeading="Când poate fi utilă o consultație de fitoterapie medicală"
   symptoms={[
    "Suport complementar în tulburări funcționale de somn, stres cronic și oboseală neuro-vegetativă;",
    "Dorința pacientului de a integra metode blânde, fitoterapeutice și fizioterapeutice, sub supraveghere medicală;",
    "Verificarea siguranței suplimentelor sau plantelor la pacienți care urmează deja tratamente cronice;",
    "Asocierea cu acupunctură (500 MDL consultația), reflexoterapie și fizioterapie (100 MDL / 30 min)."
]}
   approachHeading="Prudență medicală și respectarea contraindicațiilor"
   approachParagraphs={[
    "Plantele medicinale și extractele fitoterapeutice au principii active reale și pot interacționa cu anticoagulante, antidiabetice, antihipertensive, medicație tiroidiană sau sedative, fiind contraindicate în anumite afecțiuni hepatice, renale ori în sarcină și alăptare.",
    "De aceea, la Revimed PLUS+ orice recomandare fitoterapeutică se stabilește exclusiv la consultația medicală, fără automedicație și fără a întrerupe tratamentele de bază prescrise."
]}
   equipmentHeading="Integrare cu fizioterapie și diagnostic neinvaziv"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Analizator Neinvaziv AMP",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Evaluare orientativă a 117 parametri metabolici și funcționali — 1000 MDL."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn & Relaxare",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Terapie nefarmacologică pentru somn și sistemul nervos — 100 MDL / 30 min."
    },
    {
        "slug": "detox-spa-bio",
        "title": "Fizioterapie + Naturoterapie",
        "image": "/images/equipment/detox-spa-bio.webp",
        "desc": "Proceduri combinate de suport și recuperare — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă consultația la medicul fitoterapeut în Chișinău?",
        "a": "Tariful orientativ pentru consultația primară cu medicul fitoterapeut la Revimed PLUS+ este de 500 MDL."
    },
    {
        "q": "Pot lua plante medicinale împreună cu tratamentul meu obișnuit?",
        "a": "Doar cu avizul medicului, după verificarea interacțiunilor medicamentoase și a contraindicațiilor individuale."
    }
]}
   relatedLinks={[
    {
        "href": "/acupunctura-reflexoterapie-chisinau/",
        "label": "Acupunctură & Reflexolog"
    },
    {
        "href": "/diagnostic-amp-chisinau/",
        "label": "Diagnostic AMP 117 indici"
    },
    {
        "href": "/camera-salina-bai-namol-chisinau/",
        "label": "Cameră Salină & Băi Saki"
    },
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
