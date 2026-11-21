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
   introParagraph="Analizatorul neinvaziv AMP (Biopromin AMP-Tech) utilizează 5 senzori termici aplicați extern pe puncte biologic active (gât, axilă, abdomen) pentru a estima rapid echilibrul hemodinamic, metabolic, enzimatic și al sistemului nervos."
   symptomsHeading="Când este util screeningul neinvaziv AMP"
   symptoms={[
    "Evaluare generală rapidă fără ace și fără disconfort (ideal și pentru copii sau pacienți cu teamă de ace);",
    "Oboseală cronică, tulburări de circulație, fluctuații de tensiune și stres prelungit;",
    "Monitorizarea evoluției organismului pe parcursul unui curs de recuperare sau fizioterapie;",
    "Screening orientativ integrat cu consultația neurologică (Dr. Igor Revenco)."
]}
   approachHeading="Cum decurge procedura AMP la Revimed PLUS+"
   approachParagraphs={[
    "Procedura durează aproximativ 10–15 minute, este 100% nedureroasă și generează raportul complet al celor 117 indici pe loc.",
    "Medicul explică valorile relevante și, dacă este necesar, recomandă investigații țintite (EEG, REG, analize de laborator clasice) sau plan de recuperare."
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
