import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/eeg-copii-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/eeg-copii-chisinau/", ru: "/ru/eeg-detyam-kishinev/", "x-default": "/eeg-copii-chisinau/" },
 title: "EEG Copii Chișinău (1600 MDL) — Electroencefalogramă Pediatrică",
 description: "Electroencefalogramă (EEG) pentru copii în Chișinău (Ciocana) la Revimed PLUS+ — 1600 MDL, interpretată de neuropediatrul Dr. Igor Revenco (35+ ani). 022 60 50 60."
});

export default function EegCopiiChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/eeg-copii-chisinau"
   crumbLabel="EEG Copii Chișinău"
   h1="Electroencefalogramă (EEG) pentru Copii în Chișinău — 1600 MDL"
   lead="Investigație EEG digitală pe 19 canale (cu Brain Mapping 3D) pentru copii și adolescenți, interpretată de medicul neuropediatru Dr. Igor Revenco (35+ ani experiență)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), electroencefalografia (EEG) pentru copii are tariful orientativ de 1600 MDL, cartografierea cerebrală computerizată 600 MDL, EHO-encefalografia 250 MDL, iar consultația primară la neuropediatru (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60."
   introParagraph="În neurologia pediatrică, electroencefalograma (EEG) este investigația de bază, complet neinvazivă și fără radiații, pentru evaluarea maturizării bioelectrice a creierului la copii cu ticuri, bâlbâială (logonevroză), tulburări de somn, crize febrile sau dificultăți de atenție."
   symptomsHeading="Când recomandă neuropediatrul un EEG la copil"
   symptoms={[
    "Episoade convulsive, crize febrile, tresăriri în somn sau momente de „absență” (privire fixă);",
    "Ticuri nervoase (clipit des, grimase), bâlbâială (logonevroză) și întârzieri de vorbire;",
    "Tulburări de somn, pavor nocturn, agitație, deficit de atenție (ADHD) sau dificultăți școlare;",
    "Dureri de cap frecvente, amețeli sau monitorizare după traumatisme craniene ușoare."
]}
   approachHeading="Examinare blândă, adaptată vârstei copilului"
   approachParagraphs={[
    "Înregistrarea EEG la copii se desfășoară într-o atmosferă calmă, cu cască moale și electrozi Fastclip (sistemul 10–20), fără durere și fără înțepături.",
    "Dr. Igor Revenco interpretează traseul EEG împreună cu examenul clinic neuropediatric și poate recomanda, când este indicat, terapii blânde nefarmacologice (Electrosomn, Bi-LENAR, AVS — 100 MDL / 30 min)."
]}
   equipmentHeading="Diagnostic și neuroterapie pediatrică"
   equipmentCards={[
    {
        "slug": "electrosomn-4t",
        "title": "Electrosomn Pediatric",
        "image": "/images/equipment/electrosomn-4t.webp",
        "desc": "Terapie blândă pentru somn, ticuri și logonevroză la copii — 100 MDL / 30 min."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea circulației cerebrale la copii și adolescenți — 500 MDL."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Relaxare neuro-vegetativă în hiperactivitate și stres școlar — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă un EEG pentru copii în Chișinău?",
        "a": "Tariful orientativ pentru electroencefalografie (EEG) la Revimed PLUS+ este 1600 MDL, iar consultația primară la neuropediatru este 500 MDL."
    },
    {
        "q": "Cum pregătesc copilul pentru EEG?",
        "a": "Părul copilului trebuie să fie curat (fără uleiuri sau fixativ), copilul să fie hrănit ușor și liniștit; pentru copiii mici este utilă o jucărie preferată."
    }
]}
   relatedLinks={[
    { href: "/intarziere-vorbire-copii-neuropediatru-chisinau/", label: "Întârziere de Vorbire & EEG" },
    {
        "href": "/neuropediatru-chisinau/",
        "label": "Neuropediatru Chișinău"
    },
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Adulți & Copii"
    },
    {
        "href": "/epilepsie-convulsii-chisinau/",
        "label": "Epilepsie & Convulsii"
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
