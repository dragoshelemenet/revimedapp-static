import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/psihoterapeut-stres-anxietate-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/psihoterapeut-stres-anxietate-chisinau/", ru: "/ru/psihoterapevt-kishinev/", "x-default": "/psihoterapeut-stres-anxietate-chisinau/" },
 title: "Psihoterapeut Chișinău (300 MDL) — Stres, Anxietate & Distonie",
 description: "Consultație psihoterapeut în Chișinău (Ciocana) la Revimed PLUS+ — 300 MDL + testări psihodiagnostice computerizate (200 MDL) și terapie Electrosomn (150 MDL). 022 60 50 60."
});

export default function PsihoterapeutStresAnxietateChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/psihoterapeut-stres-anxietate-chisinau"
   crumbLabel="Psihoterapeut Chișinău"
   h1="Psihoterapeut în Chișinău — Stres Cronic, Anxietate, Burnout & Insomnie"
   lead="Sprijin psihoterapeutic confidențial în Chișinău (Ciocana), combinat la nevoie cu evaluare neurologică, testări computerizate și neurostimulare relaxantă."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația de psihoterapie costă 300 MDL, testările psihodiagnostice computerizate (MMPI, Luscher, Sondy) costă 200 MDL, iar terapia neinvazivă Electrosomn pentru stres și somn costă 150 MDL/oră. Programări: 022 60 50 60."
   introParagraph="Anxietatea, atacurile de panică, epuizarea profesională (burnout) și distonia neurovegetativă au adesea atât o componentă emoțională, cât și una fizică. La Revimed PLUS+ abordăm ambele laturi integrat."
   symptomsHeading="Când este utilă o consultație la psihoterapeut"
   symptoms={[
    "Anxietate persistentă, atacuri de panică, palpitații pe fond de stres;",
    "Insomnie, gânduri intruzive seara și oboseală emoțională (burnout);",
    "Distonie neurovegetativă și simptome psihosomatice (nod în gât, tensiune);",
    "Dificultăți de adaptare după perioade solicitante sau traume."
]}
   approachHeading="Avantajul clinicii: psihoterapie + diagnostic + neurostimulare"
   approachParagraphs={[
    "Pe lângă ședința de psihoterapie (300 MDL), clinica oferă testări psihodiagnostice computerizate validate (MMPI, Luscher, Sondy — 200 MDL) și proceduri blânde de relaxare a sistemului nervos (Electrosomn, Transair TES — 150 MDL).",
    "Dacă există și simptome fizice (amețeli, migrene), evaluarea poate fi corelată cu consultul neurologic al Dr. Igor Revenco."
]}
   equipmentHeading="Terapii blânde complementare pentru sistemul nervos"
   equipmentCards={[
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Calmează sistemul nervos și reface somnul — 150 MDL/oră."
    },
    {
        "slug": "transair-01p-transair-05",
        "title": "Transair TES",
        "image": "/images/equipment/transair.webp",
        "desc": "Stimulare transcraniană pentru eliberare de endorfine și anti-stres."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Echilibrare neurovegetativă neinvazivă."
    }
]}
   faqs={[
    {
        "q": "Cât costă consultația la psihoterapeut în Chișinău la Revimed PLUS+?",
        "a": "Consultația la psihoterapeut costă 300 MDL, iar testările psihodiagnostice computerizate (MMPI, Luscher, Sondy) costă 200 MDL."
    },
    {
        "q": "Sunt confidențiale ședințele?",
        "a": "Da, toate consultațiile și rezultatele testărilor sunt 100% confidențiale."
    }
]}
   relatedLinks={[
    {
        "href": "/blog/endorfine-serotonina-dopamina-stres-depresie-transair-tes-chisinau/",
        "label": "Ghid: Endorfine, Serotonină & Transair TES"
    },
    {
        "href": "/blog/distonie-neurovegetativa-depresie-mascata-dureri-piept-chisinau/",
        "label": "Ghid: Distonie (DNV) & Depresie mascată"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Terapia Electrosomn (150 MDL)"
    },
    {
        "href": "/insomnie-tratament-chisinau/",
        "label": "Tratament Insomnie"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (101 servicii)"
    }
]}
  />
 );
}
