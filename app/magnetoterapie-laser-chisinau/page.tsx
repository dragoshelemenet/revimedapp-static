import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/magnetoterapie-laser-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/magnetoterapie-laser-chisinau/", ru: "/ru/magnitoterapiya-lazer-kishinev/", "x-default": "/magnetoterapie-laser-chisinau/" },
 title: "Magnetoterapie, Laseroterapie & Bioptron Chișinău (100 MDL / 30 min)",
 description: "Magnetoterapie, terapie cu laser, fototerapie Bioptron și ultrasunete în Chișinău (Ciocana) la Revimed PLUS+ — 100 MDL / 30 min. Dureri articulare, coloană, recuperare. 022 60 50 60."
});

export default function MagnetoterapieLaserChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/magnetoterapie-laser-chisinau"
   crumbLabel="Magnetoterapie & Laser Chișinău"
   h1="Magnetoterapie, Terapie cu Laser și Fototerapie Bioptron în Chișinău — 100 MDL / 30 min"
   lead="Proceduri fizioterapeutice neinvazive pentru reducerea inflamației, stimularea microcirculației și recuperarea coloanei și articulațiilor la Centrul Medical Revimed PLUS+ (Ciocana)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), ședințele de magnetoterapie, terapie cu laser, fototerapie Bioptron, fotocataliză magnetică și terapie cu ultrasunete din secțiunea echipamente și metode curative au tariful orientativ de 100 MDL / 30 min, iar consultația primară la medic specialist costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60."
   introParagraph="Combinația dintre câmpul magnetic de joasă frecvență (magnetoterapie), radiația laser terapeutică / fototerapia polarizată (Spectr-LC, Bioptron, Lampa Solux) și ultrasunete este utilizată în recuperarea medicală pentru efectul trofic, decontracturant și de susținere a regenerării tisulare."
   symptomsHeading="Indicații uzuale stabilite de medicul specialist"
   symptoms={[
    "Artroze (gonartroză, coxartroză, artroză sacroiliacă), artrite și dureri articulare;",
    "Osteocondroză cervicală și lombară, hernie de disc, spondiloză și radiculopatii;",
    "Tendinite, periartrită scapulo-humerală (umăr înghețat), sindrom de tunel carpian și pinten calcanean;",
    "Recuperare post-traumatică, post-operatorie și neuropatii periferice."
]}
   approachHeading="Protocol fizioterapeutic personalizat și verificarea contraindicațiilor"
   approachParagraphs={[
    "Fiecare pacient este evaluat inițial pentru stabilirea parametrilor (frecvență, durată, număr de ședințe) și excluderea contraindicațiilor (stimulator cardiac / pacemaker, sarcină, afecțiuni oncologice active, stări febrile sau tulburări severe de coagulare).",
    "La Revimed PLUS+ procedurile pot fi asociate în aceeași vizită cu electroforeză, Amplipuls, acupunctură sau masaj terapeutic. Informațiile au caracter orientativ și nu înlocuiesc consultația medicală."
]}
   equipmentHeading="Echipamente utilizate în clinică"
   equipmentCards={[
    {
        "slug": "spectr-lc",
        "title": "Spectr-LC (Laser & Fotocataliză)",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Terapie fotomagnetică și laser pentru inflamații și dureri — 100 MDL / 30 min."
    },
    {
        "slug": "lampa-solux",
        "title": "Fototerapie Solux & Bioptron",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Fototerapie cu lumină polarizată și infraroșu terapeutic — 100 MDL / 30 min."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Recuperare Fizioterapeutică",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Combinare cu vibromasaj și electroterapie — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă o ședință de magnetoterapie sau laseroterapie?",
        "a": "În secțiunea Echipamente și metode curative, magnetoterapia, terapia cu laser, fototerapia Bioptron și fotocataliza magnetică au tariful orientativ de 100 MDL / 30 min."
    },
    {
        "q": "Sunt dureroase procedurile de magnetoterapie și laser?",
        "a": "Nu, sunt complet nedureroase și neinvazive, pacientul simțind cel mult o ușoară încălzire locală confortabilă."
    }
]}
   relatedLinks={[
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/electroforeza-amplipuls-chisinau/",
        "label": "Electroforeză & Amplipuls"
    },
    {
        "href": "/dureri-de-spate-sciatica-chisinau/",
        "label": "Dureri de Spate & Sciatică"
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
