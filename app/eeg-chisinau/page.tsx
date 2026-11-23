import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/eeg-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/eeg-chisinau/", ru: "/ru/eeg-kishinev/", "x-default": "/eeg-chisinau/" },
 title: "EEG Chișinău (1600 MDL) — Electroencefalografie Adulți & Copii",
 description: "Electroencefalografie (EEG) în Chișinău (Ciocana) la Revimed PLUS+ — 1600 MDL, cu interpretare neurologică de Dr. Igor Revenco (35+ ani). Migrene, epilepsie, insomnie, amețeli. 022 60 50 60."
});

export default function EegChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/eeg-chisinau"
   crumbLabel="EEG Chișinău"
   h1="Electroencefalografie (EEG) în Chișinău — Adulți și Copii"
   lead="Investigație EEG neinvazivă în Chișinău (Ciocana) cu interpretare clinică integrată de Dr. Igor Revenco (35+ ani experiență în neurologie și neuropediatrie)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), electroencefalografia (EEG) costă 1600 MDL, cartografierea cerebrală computerizată 600 MDL, iar consultația primară la medic neurolog (Dr. Igor Revenco, 35+ ani) costă 500 MDL. Procedura este neinvazivă și nedureroasă. Programări: 022 60 50 60."
   introParagraph="Electroencefalografia (EEG) la Revimed PLUS+ utilizează un sistem digital pe 19 canale (sistemul internațional 10–20 cu electrozi Fastclip, rată de eșantionare 1000 Hz, filtru 300 Hz), cu probe funcționale (hiperventilație și foto-fonostimulare), analiză spectrală DSA pentru studiul epilepsiei și Brain Mapping 3D (cartografiere cerebrală tridimensională pentru localizarea focarelor). Rezultatul este corelat direct cu examinarea neurologică a Dr. Igor Revenco."
   symptomsHeading="Când este recomandată o investigație EEG (19 canale + Brain Mapping 3D)"
   symptoms={[
    "Episoade de pierdere a cunoștinței, sincope, convulsii sau suspiciune de epilepsie (evaluare cu analiză DSA și localizare 3D a focarelor);",
    "Migrene severe, cefalee frecventă și tulburări de somn (insomnie, treziri nocturne, parasomnii);",
    "Amețeli, vertij, tulburări de memorie, atenție sau concentrare;",
    "Evaluare după traumatisme cranio-cerebrale, neuroinfecții sau accident vascular cerebral (AVC);",
    "Monitorizare neuropediatrică la copii (ticuri nervoase, hiperexcitabilitate, întârzieri de dezvoltare, dezadaptare școlară)."
]}
   approachHeading="Avantajul EEG 19 canale la Revimed PLUS+ (Chișinău, Ciocana)"
   approachParagraphs={[
    "Nu primești doar o foaie cu grafice greu de înțeles: Dr. Igor Revenco (medic de categorie superioară, doctor în neurochirurgie USMF, membru EANS, 35+ ani experiență) interpretează traseul EEG pe 19 canale, răspunsul la foto-fonostimulare și harta Brain Mapping 3D în contextul simptomelor tale reale.",
    "La nevoie, investigația poate fi completată pe loc cu reoencefalografie vasculară (REG — 500 MDL), cartografiere cerebrală computerizată (600 MDL), screening neinvaziv AMP (1000 MDL) sau program personalizat de recuperare."
]}
   equipmentHeading="Diagnostic funcțional disponibil în clinică"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Analizator AMP (117 indici)",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Evaluare neinvazivă a 117 parametri clinici fără înțepături — 1000 MDL."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (Reografie)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea circulației cerebrale și periferice (REG — 500 MDL)."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Neurostimulare blândă pentru somn și echilibru nervos — 150 MDL."
    }
]}
   faqs={[
    {
        "q": "Cât costă un EEG în Chișinău la Revimed PLUS+?",
        "a": "Electroencefalografia (EEG) costă 1600 MDL, iar cartografierea cerebrală computerizată 600 MDL. Consultația primară la neurolog costă 500 MDL."
    },
    {
        "q": "Cum mă pregătesc pentru EEG?",
        "a": "Spală părul înainte de examinare fără gel/fixativ, evită cafeaua și energizantele cu 6 ore înainte și continuă medicația prescrisă dacă medicul nu a indicat altfel."
    },
    {
        "q": "Este sigur EEG-ul pentru copii?",
        "a": "Da, EEG este 100% neinvaziv, fără radiații și complet nedureros, fiind potrivit atât pentru copii, cât și pentru adulți."
    }
]}
   relatedLinks={[
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/neuropediatru-chisinau/",
        "label": "Neuropediatru Chișinău"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie (REG)"
    },
    {
        "href": "/diagnostic-amp-chisinau/",
        "label": "Diagnostic AMP 117 indici"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
