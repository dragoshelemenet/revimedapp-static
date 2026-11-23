import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/ticuri-nervoase-balbaiala-copii-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/ticuri-nervoase-balbaiala-copii-chisinau/", ru: "/ru/nervnye-tiki-zaikanie-detyam-kishinev/", "x-default": "/ticuri-nervoase-balbaiala-copii-chisinau/" },
 title: "Ticuri Nervoase & Bâlbâială (Logonevroză) Copii Chișinău — Neuropediatru",
 description: "Evaluare neuropediatrică, EEG (1600 MDL) și terapie blândă prin Electrosomn (100 MDL) pentru ticuri nervoase, bâlbâială (logonevroză) și ADHD la copii în Chișinău. 022 60 50 60."
});

export default function TicuriNervoaseBalbaialaCopiiChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/ticuri-nervoase-balbaiala-copii-chisinau"
   crumbLabel="Ticuri & Logonevroză Copii"
   h1="Ticuri Nervoase, Bâlbâială (Logonevroză) și Tulburări de Atenție la Copii în Chișinău"
   lead="Abordare neuropediatrică calmă și empatică cu Dr. Igor Revenco (35+ ani experiență): diagnostic EEG pe 19 canale și terapii fizice blânde pentru liniștirea sistemului nervos al copilului."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medicul neuropediatru Dr. Igor Revenco costă 500 MDL (repetată 400 MDL), electroencefalografia (EEG) pediatrică 1600 MDL, cartografierea cerebrală 600 MDL, iar procedurile blânde de neuro-relaxare (Electrosomn, Bi-LENAR, AVS) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Ticurile motorii sau vocale (clipit frecvent, ridicarea umerilor, dregerea vocii), bâlbâiala apărută după o sperietură sau suprasolicitare (logonevroză) și agitația cu deficit de atenție la școlari reflectă adesea o hiperexcitabilitate a structurilor subcorticale pe un creier aflat în plină maturizare."
   symptomsHeading="Când este indicat consultul neuropediatric"
   symptoms={[
    "Clipit des, grimase faciale, mișcări involuntare ale gâtului/umerilor sau ticuri vocale;",
    "Blocaje în vorbire, repetarea silabelor (bâlbâială / logonevroză) accentuate de emoții;",
    "Somn agitat, treziri nocturne, enurezis nocturn sau anxietate de adaptare la grădiniță/școală;",
    "Dificultăți de concentrare, oboseală rapidă la teme și hiperactivitate motorie."
]}
   approachHeading="Diagnostic EEG fără durere și echilibrare fără sedare excesivă"
   approachParagraphs={[
    "Primul pas este diferențierea ticurilor funcționale de activitatea epileptiformă prin examen neuropediatric și, când este indicat, EEG pe 19 canale (1600 MDL) și cartografiere cerebrală (600 MDL).",
    "Pe lângă recomandările pentru familie și igiena somnului/ecranelor, la Revimed PLUS+ utilizăm proceduri fizioterapeutice neinvazive foarte bine tolerate de copii (Electrosomn, Bi-LENAR, Instructor Visus computerizat, baie salină — 100 MDL)."
]}
   equipmentHeading="Dispozitive blânde utilizate în neuropediatrie"
   equipmentCards={[
    {
        "slug": "electrosomn-4t",
        "title": "Electrosomn Pediatric",
        "image": "/images/equipment/electrosomn-4t.webp",
        "desc": "Reducerea hiperexcitabilității în ticuri și logonevroză — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Echilibrare neuro-vegetativă blândă pentru școlari — 100 MDL / 30 min."
    },
    {
        "slug": "rheotest",
        "title": "Diagnostic EEG & REG Copii",
        "image": "/images/equipment/rheotest.webp",
        "desc": "EEG 19 canale (1600 MDL), Cartografiere (600 MDL) și REG (500 MDL)."
    }
]}
   faqs={[
    {
        "q": "Trec ticurile nervoase la copii fără medicamente puternice?",
        "a": "În multe cazuri, reducerea suprastimulării, regimul corect și procedurile blânde de neuro-reglare (Electrosomn — 100 MDL / 30 min) sub îndrumarea neuropediatrului duc la remiterea treptată a ticurilor."
    },
    {
        "q": "De la ce vârstă poate fi consultat copilul?",
        "a": "Dr. Igor Revenco evaluează copii de toate vârstele (consultație primară 500 MDL, repetată 400 MDL)."
    }
]}
   relatedLinks={[
    {
        "href": "/neuropediatru-chisinau/",
        "label": "Neuropediatru Chișinău"
    },
    {
        "href": "/eeg-copii-chisinau/",
        "label": "EEG Copii (1600 MDL)"
    },
    {
        "href": "/cartografierea-creierului-chisinau/",
        "label": "Cartografiere Creier (600 MDL)"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn (100 MDL)"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
