import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/ecografie-ecg-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/ecografie-ecg-chisinau/", ru: "/ru/uzi-ekg-kishinev/", "x-default": "/ecografie-ecg-chisinau/" },
 title: "Ecografie Organe Interne (250 MDL) & ECG (200 MDL) în Chișinău",
 description: "Examinare cu ultrasunete a organelor interne (250 MDL), ECG computerizată (200 MDL) și EHO-Encefalografie (250 MDL) în Chișinău (Ciocana) la Revimed PLUS+. 022 60 50 60."
});

export default function EcografieEcgChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/ecografie-ecg-chisinau"
   crumbLabel="Ecografie & ECG Chișinău"
   h1="Examinare cu Ultrasunete (250 MDL), ECG Computerizată (200 MDL) și EHO-Encefalografie în Chișinău"
   lead="Investigații rapide și neinvazive de diagnostic funcțional în sectorul Ciocana (Str. Mircea cel Bătrân 13/2) pentru completarea evaluării clinice."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), examinarea electrocardiografică ECG computerizată are tariful orientativ de 200 MDL, examinarea cu ultrasunete a organelor interne 250 MDL, examinarea EHO-Encefalografie 250 MDL, iar termalgometria RUNO (testarea sistemului nervos vegetativ) 500 MDL. Programări: 022 60 50 60."
   introParagraph="Atunci când pacientul prezintă amețeli, palpitații, dureri toracice atipice, hipertensiune arterială sau oboseală cronică, corelarea examenului neurologic cu un ECG computerizat, o evaluare a sistemului nervos vegetativ (RUNO) și o ecografie a organelor interne ajută la diferențierea cauzelor somatice de cele neuro-vegetative."
   symptomsHeading="Investigații rapide din categoria Diagnostic Funcțional"
   symptoms={[
    "Examinare electrocardiografică ECG computerizată — 200 MDL;",
    "Examinarea cu ultrasunete a organelor interne — 250 MDL;",
    "Examinare EHO-Encefalografie (ecografie cerebrală de orientare) — 250 MDL;",
    "Termalgometrie RUNO (testarea cu feedback computerizat a sistemului nervos vegetativ) — 500 MDL."
]}
   approachHeading="Diagnostic integrat pe loc în sectorul Ciocana"
   approachParagraphs={[
    "Investigațiile pot fi completate în aceeași clinică cu reoencefalografia vasculară REG (500 MDL), electrospondilografia coloanei (500 MDL), analizatorul neinvaziv AMP 117 indici (1000 MDL) sau EEG pe 19 canale (1600 MDL).",
    "Toate tarifele și serviciile afișate pe site au caracter orientativ și se confirmă telefonic la recepția clinicii (022 60 50 60). În caz de durere acută în piept sau urgență cardiovasculară, apelați imediat 112."
]}
   equipmentHeading="Sisteme de diagnostic funcțional"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Analizator Neinvaziv AMP (117 indici)",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Evaluare metabolică, hemodinamică și cardiorespiratorie — 1000 MDL."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG & Reovasografie)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea circulației cerebrale și periferice — 500 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Recuperare Neuro-Vegetativă",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Proceduri fizioterapeutice de echilibrare — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă un ECG și o ecografie a organelor interne la Revimed PLUS+?",
        "a": "În lista orientativă de prețuri, ECG computerizată este 200 MDL, iar examinarea cu ultrasunete a organelor interne este 250 MDL."
    },
    {
        "q": "Cum mă programez pentru investigații?",
        "a": "Programările și confirmarea disponibilității se fac telefonic la 022 60 50 60 sau +373 79 422 908 (Luni–Vineri, 09:00–15:00)."
    }
]}
   relatedLinks={[
    {
        "href": "/diagnostic-amp-chisinau/",
        "label": "Diagnostic AMP (1000 MDL)"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/electrospondilografie-chisinau/",
        "label": "Electrospondilografie (500 MDL)"
    },
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Chișinău (1600 MDL)"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
