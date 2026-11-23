import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/distonie-neurovegetativa-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/distonie-neurovegetativa-chisinau/", ru: "/ru/vsd-distoniya-kishinev/", "x-default": "/distonie-neurovegetativa-chisinau/" },
 title: "Distonie Neurovegetativă (DNV) Chișinău — Testare RUNO (500 MDL)",
 description: "Diagnostic și recuperare pentru distonie neurovegetativă (DNV) în Chișinău (Ciocana) la Revimed PLUS+. Neurolog 500 MDL, Termalgometrie RUNO 500 MDL, Electrosomn 100 MDL. 022 60 50 60."
});

export default function DistonieNeurovegetativaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/distonie-neurovegetativa-chisinau"
   crumbLabel="Distonie Neurovegetativă (DNV)"
   h1="Distonie Neurovegetativă (DNV) în Chișinău — Diagnostic Vegetativ RUNO și Echilibrare"
   lead="Evaluare neurologică diferențială și testarea computerizată a sistemului nervos vegetativ (Termalgometrie RUNO) la Centrul Medical Revimed PLUS+ (Ciocana), sub coordonarea Dr. Igor Revenco."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medic neurolog costă 500 MDL (repetată 400 MDL), testarea computerizată a sistemului nervos vegetativ prin Termalgometrie RUNO costă 500 MDL, ECG computerizată 200 MDL, iar procedurile de neuro-reglare (Electrosomn, Transair TES, Biofeedback) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Distonia neurovegetativă (dezechilibrul dintre ramura simpatică și cea parasimpatică a sistemului nervos autonom) provoacă simptome fizice reale — palpitații, nod în gât, amețeli, oscilații de tensiune, transpirații reci și epuizare — chiar și atunci când analizele uzuale sunt în limite normale."
   symptomsHeading="Manifestări frecvente ale dezechilibrului neuro-vegetativ"
   symptoms={[
    "Palpitații, fluctuații ale tensiunii arteriale și senzație de lipsă de aer fără cauză pulmonară;",
    "Amețeli, senzație de „ceață mentală”, intoleranță la căldură sau mâini și picioare reci;",
    "Oboseală matinală, somn superficial, tresăriri și hipersensibilitate la stres sau schimbări meteo;",
    "Disconfort toracic atipic sau tensiune cervicală persistentă (după excluderea urgențelor cardiace)."
]}
   approachHeading="Obiectivarea tonusului vegetativ prin Termalgometrie RUNO (500 MDL)"
   approachParagraphs={[
    "La Revimed PLUS+, evaluarea nu se bazează doar pe chestionare: sistemul de Termalgometrie RUNO măsoară cu feedback computerizat reactivitatea sistemului nervos vegetativ, completat la nevoie de ECG computerizată (200 MDL), Reoencefalografie REG (500 MDL) sau EEG (1600 MDL).",
    "Planul de recuperare urmărește restabilirea echilibrului vagal prin Electrosomn, Transair TES, biofeedback pentru controlul stresului, masaj de relaxare și acupunctură (100 MDL / 30 min). În caz de durere acută în piept sau urgență cardiacă, apelați imediat 112."
]}
   equipmentHeading="Tehnologii pentru echilibrarea sistemului nervos autonom"
   equipmentCards={[
    {
        "slug": "transair-01p-transair-05",
        "title": "Transair TES & Biofeedback",
        "image": "/images/equipment/transair.webp",
        "desc": "Reglare centrală a tonusului simpato-parasimpatic — 100 MDL / 30 min."
    },
    {
        "slug": "electrosomn-4t",
        "title": "Electrosomn-4T / ES-10-5",
        "image": "/images/equipment/electrosomn-4t.webp",
        "desc": "Reducerea hiperexcitabilității vegetative și refacerea somnului — 100 MDL / 30 min."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG) & RUNO",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea tonusului vascular cerebral (500 MDL) și vegetativ RUNO (500 MDL)."
    }
]}
   faqs={[
    {
        "q": "Ce este Termalgometria RUNO și cât costă?",
        "a": "Termalgometria RUNO este o testare neinvazivă cu feedback computerizat a sistemului nervos vegetativ, disponibilă în lista de Diagnostic Funcțional la tariful orientativ de 500 MDL."
    },
    {
        "q": "Cum se tratează distonia neurovegetativă la Revimed PLUS+?",
        "a": "După excluderea patologiilor organice la consultația neurologică (500 MDL), medicul combină recomandările medicale cu proceduri fizioterapeutice de reglare vegetativă (100 MDL / 30 min)."
    }
]}
   relatedLinks={[
    { href: "/spasmofilie-crize-hiperexcitabilitate-chisinau/", label: "Spasmofilie & Hiperexcitabilitate" },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn Chișinău"
    },
    {
        "href": "/ameteli-vertij-chisinau/",
        "label": "Amețeli & Vertij"
    },
    {
        "href": "/ecografie-ecg-chisinau/",
        "label": "ECG & Ecografie (200–250 MDL)"
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
