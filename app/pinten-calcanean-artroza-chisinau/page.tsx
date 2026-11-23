import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/pinten-calcanean-artroza-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/pinten-calcanean-artroza-chisinau/", ru: "/ru/pyatochnaya-shpora-artroz-kishinev/", "x-default": "/pinten-calcanean-artroza-chisinau/" },
 title: "Pinten Calcanean, Artroză & Umăr Înghețat Chișinău — Fizioterapie 100 MDL",
 description: "Fizioterapie țintită pentru pinten calcanean (fasciită plantară), artroză genunchi/șold și periartrită scapulo-humerală în Chișinău (Ciocana) — 100 MDL / 30 min. 022 60 50 60."
});

export default function PintenCalcaneanArtrozaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/pinten-calcanean-artroza-chisinau"
   crumbLabel="Pinten Calcanean & Artroză"
   h1="Fizioterapie pentru Pinten Calcanean, Artroze și Periartrită (Umăr Înghețat) în Chișinău"
   lead="Terapie cu ultrasunete, laser, electroforeză antiinflamatoare, magnetoterapie și băi cu nămol Saki la Centrul Medical Revimed PLUS+ (Ciocana) — proceduri de la 100 MDL / 30 min."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), procedurile fizioterapeutice țintite pentru pinten calcanean, gonartroză, artroză sacroiliacă și periartrită scapulo-humerală (ultrasunete, laser, magnetoterapie, electroforeză, Amplipuls, stimulare plantară) au tariful orientativ de 100 MDL / 30 min, iar consultația primară costă 500 MDL. Programări: 022 60 50 60."
   introParagraph="Durerea ascuțită în călcâi la primii pași dimineața (fasciită plantară / pinten calcanean), redoarea genunchilor în gonartroză și limitarea dureroasă a ridicării brațului (periartrită scapulo-humerală / umăr înghețat) răspund foarte bine la combinația de fizioterapie locală neinvazivă și kinetoterapie blândă."
   symptomsHeading="Afecțiuni articulare și tendinoase adresate prin fizioterapie"
   symptoms={[
    "Durere înțepătoare în călcâi la primii pași sau după stat prelungit în picioare (pinten calcanean / fasciită plantară);",
    "Durere și limitarea mișcării umărului, inclusiv durere nocturnă pe partea afectată (umăr înghețat / plexită brahială);",
    "Gonartroză, coxartroză, artroză sacroiliacă și inflamații tendinoase (epicondilită, tendinită ahileană);",
    "Redoare matinală articulară și edem local cronic (după excluderea fracturilor sau artritelor septice)."
]}
   approachHeading="Sinergia dintre ultrasunete, laser, electroforeză și nămol Saki"
   approachParagraphs={[
    "Terapia cu ultrasunete și fonoforeza înmoaie țesutul fibros din fascia plantară, laseroterapia (Spectr-LC) și magnetoterapia stimulează microcirculația articulară, iar electroforeza administrează substanța antiinflamatoare direct în zona dureroasă (100 MDL / 30 min).",
    "La recomandarea medicului, cursul poate fi completat cu băi curative cu nămol din Saki (150 MDL/sesiune), masaj plantar vibro-infraroșu și acupunctură."
]}
   equipmentHeading="Aparatură pentru pinten calcanean și articulații"
   equipmentCards={[
    {
        "slug": "spectr-lc",
        "title": "Spectr-LC (Laser & Magnet)",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Terapie cu laser și fotocataliză magnetică articulară — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză & Ultrasunete",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Terapie locală pentru fasciită plantară și periartrită — 100 MDL / 30 min."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls-5 & Masaj Plantar",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Analgezie locală și relaxare miofascială — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă procedurile pentru pinten calcanean sau artroză la Revimed PLUS+?",
        "a": "Procedurile din lista de Echipamente și metode curative (ultrasunete, laser, electroforeză, magnetoterapie, Amplipuls) au tariful orientativ de 100 MDL / 30 min."
    },
    {
        "q": "Câte ședințe sunt necesare de obicei?",
        "a": "Numărul ședințelor (uzual 7–10 proceduri) se stabilește individual de către medic în funcție de vechimea inflamației și răspunsul local."
    }
]}
   relatedLinks={[
    { href: "/gonartroza-coxartroza-fizioterapie-recuperare-chisinau/", label: "Gonartroză & Coxartroză (100 MDL)" },
    { href: "/terapie-ultrasunete-epicondilita-tendinita-chisinau/", label: "Ultrasunete — Cot & Umăr (100 MDL)" },
    {
        "href": "/magnetoterapie-laser-chisinau/",
        "label": "Magnetoterapie & Laser"
    },
    {
        "href": "/electroforeza-amplipuls-chisinau/",
        "label": "Electroforeză & Amplipuls"
    },
    {
        "href": "/camera-salina-bai-namol-chisinau/",
        "label": "Băi cu Nămol Saki (150 MDL)"
    },
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
