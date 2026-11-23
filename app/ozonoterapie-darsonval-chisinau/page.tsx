import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/ozonoterapie-darsonval-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/ozonoterapie-darsonval-chisinau/", ru: "/ru/ozonoterapiya-darsonval-kishinev/", "x-default": "/ozonoterapie-darsonval-chisinau/" },
 title: "Ozonoterapie și Darsonvalizare în Chișinău — 100 MDL / 30 min",
 description: "Ozonoterapie, Darsonvalizare, Vitafon și proceduri fizioterapeutice complementare în Chișinău (Ciocana) la Revimed PLUS+ — 100 MDL / 30 min. Programări: 022 60 50 60."
});

export default function OzonoterapieDarsonvalChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/ozonoterapie-darsonval-chisinau"
   crumbLabel="Ozonoterapie & Darsonval"
   h1="Ozonoterapie, Darsonvalizare și Terapii Fizice Complementare în Chișinău — 100 MDL / 30 min"
   lead="Proceduri fizioterapeutice și complementare pentru susținerea microcirculației periferice, tonusului tisular și relaxării neuro-vegetative la Centrul Medical Revimed PLUS+ (Ciocana)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), ozonoterapia, darsonvalizarea, vibrofonoterapia Vitafon și celelalte proceduri din categoria echipamente și metode curative au tariful orientativ de 100 MDL / 30 min, iar consultația primară cu medicul specialist costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60."
   introParagraph="În cadrul programelor individualizate de recuperare, medicul poate asocia fizioterapia clasică cu darsonvalizarea (curenți de înaltă frecvență și tensiune cu efect trofic și microcirculator local), ozonoterapia, vibrofonoterapia Vitafon sau aeroionoterapia."
   symptomsHeading="În ce situații pot fi incluse în planul complementar"
   symptoms={[
    "Tulburări ale microcirculației periferice, senzație de mâini/picioare reci și tensiune musculară locală;",
    "Nevralgii periferice, cefalee de tensiune și oboseală cronică;",
    "Susținerea troficității tegumentare și a relaxării generale în programele de recuperare;",
    "Completarea cursurilor de masaj terapeutic, acupunctură și electroterapie."
]}
   approachHeading="Siguranță medicală și indicație individuală"
   approachParagraphs={[
    "Orice procedură complementară se efectuează doar după evaluarea medicală și verificarea contraindicațiilor (tulburări de coagulare, hipertiroidie decompensată, pacemaker, sarcină, intoleranță individuală sau afecțiuni acute).",
    "Aceste proceduri au rol de suport complementar și wellness clinic, nu înlocuiesc tratamentul medical de bază și sunt furnizate conform disponibilității din clinică."
]}
   equipmentHeading="Dispozitive complementare în clinică"
   equipmentCards={[
    {
        "slug": "detox-spa-bio",
        "title": "Suport Fizioterapeutic & Wellness",
        "image": "/images/equipment/detox-spa-bio.webp",
        "desc": "Proceduri complementare de relaxare și suport — 100 MDL / 30 min."
    },
    {
        "slug": "lampa-solux",
        "title": "Fototerapie & Darsonvalizare",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Stimulare microcirculatorie și fototerapie locală — 100 MDL / 30 min."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Vibromasaj & Vitafon",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Vibrofonoterapie și masaj mecanic de relaxare — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă o ședință de ozonoterapie sau darsonvalizare?",
        "a": "Tariful orientativ în lista de Echipamente și metode curative este de 100 MDL / 30 min."
    },
    {
        "q": "Este necesară consultația medicului înainte?",
        "a": "Da, consultația medicală (500 MDL primară) este recomandată pentru a stabili indicația corectă și a exclude contraindicațiile."
    }
]}
   relatedLinks={[
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/magnetoterapie-laser-chisinau/",
        "label": "Magnetoterapie & Laser"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic"
    },
    {
        "href": "/acupunctura-reflexoterapie-chisinau/",
        "label": "Acupunctură Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
