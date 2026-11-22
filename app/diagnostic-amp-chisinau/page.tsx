import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/diagnostic-amp-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/diagnostic-amp-chisinau/", ru: "/ru/diagnostika-amp-kishinev/", "x-default": "/diagnostic-amp-chisinau/" },
 title: "Diagnostic Neinvaziv AMP Chișinău (117 Indici · 1000 MDL)",
 description: "Examinare neinvazivă Biopromin AMP-Tech (117 indici clinici fără recoltare de sânge) în Chișinău la Revimed PLUS+ — 1000 MDL. Rezultat pe loc. Programări: 022 60 50 60."
});

export default function DiagnosticAmpChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/diagnostic-amp-chisinau"
   crumbLabel="Diagnostic AMP Chișinău"
   h1="Diagnostic Neinvaziv AMP în Chișinău — 117 Indici Clinici Fără Înțepături"
   lead="Screening funcțional rapid cu analizatorul Biopromin AMP-Tech în Chișinău (Ciocana): evaluează 117 parametri metabolici, cardiovasculari și neurologici fără recoltare de sânge."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), examinarea neinvazivă cu aparatul Biopromin AMP-Tech (117 indici clinici, fără înțepături) costă 1000 MDL și oferă rezultatul pe loc, urmat de interpretare medicală. Programări: 022 60 50 60."
   introParagraph="Dezvoltat pe baza metodei acad. dr. A.V. Malykhin (programul USPIH), analizatorul neinvaziv Biopromin AMP-Tech utilizează 5 senzori termici cu microprocesor aplicați extern pe puncte biologic active (bifurcația arterei carotide dreapta și stânga — 2 puncte, zona axilară dreapta și stânga — 2 puncte, zona ombilicală — 1 punct). În 180–720 secunde (3–12 minute), aparatul evaluează 117 parametri clinici (inclusiv 67 parametri metabolici, schimbul electrolitic K, Na, Ca, Mg, consumul de oxigen cerebral și miocardic, hemodinamica și funcția enzimatică) fără nicio înțepătură."
   symptomsHeading="Când este util screeningul neinvaziv AMP (117 parametri)"
   symptoms={[
    "Evaluare generală rapidă fără ace și fără recoltare de sânge (ideal pentru copii, vârstnici sau pacienți cu teamă de ace);",
    "Oboseală cronică, tulburări de circulație cerebrală, fluctuații de tensiune, amețeli și stres prelungit;",
    "Verificarea orientativă a schimbului electrolitic (K, Na, Ca, Mg), a oxigenării țesutului cerebral și a densității osoase orientative după nivelul de calciu plasmatic;",
    "Monitorizarea evoluției organismului înainte și după un curs de recuperare sau fizioterapie la Revimed PLUS+;",
    "Screening funcțional integrat cu consultația neurologică (Dr. Igor Revenco — 500 MDL)."
]}
   approachHeading="Cum decurge procedura AMP pe 5 puncte biologic active"
   approachParagraphs={[
    "Pacientul se află în repaus, iar cei 5 senzori externi sunt fixați pe bifurcațiile carotidiene, axile și regiunea ombilicală. Măsurarea durează între 180 și 720 secunde, este 100% nedureroasă și generează raportul complet al celor 117 indici pe loc.",
    "Medicul interpretează corelațiile hemodinamice, metabolice și neurovegetative și, acolo unde apar abateri, recomandă investigații țintite (EEG 19 canale — 1400 MDL, REG — 500 MDL, analize de laborator clasice) sau un protocol personalizat de recuperare."
]}
   equipmentHeading="Tehnologia de diagnostic funcțional din clinică"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Biopromin AMP-Tech",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "117 indici clinici neinvaziv, rezultat pe loc — 1000 MDL."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Reografie vasculară cerebrală și periferică — 500 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Recuperare vegetativă și somn — 150 MDL/oră."
    }
]}
   faqs={[
    {
        "q": "Cât costă examinarea AMP (117 indici) în Chișinău?",
        "a": "Examinarea neinvazivă Biopromin AMP-Tech cu 117 indici clinici costă 1000 MDL la Centrul Medical Revimed PLUS+."
    },
    {
        "q": "Înlocuiește AMP analizele clasice de sânge în urgențe?",
        "a": "AMP este un instrument rapid de screening funcțional orientativ; în afecțiuni acute sau pentru confirmări specifice, medicul recomandă complementar investigații de laborator sau imagistică."
    }
]}
   relatedLinks={[
    {
        "href": "/utilaj/aparat-amp/",
        "label": "Fișa aparatului AMP"
    },
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Chișinău"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie (REG)"
    },
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (101 servicii)"
    }
]}
  />
 );
}
