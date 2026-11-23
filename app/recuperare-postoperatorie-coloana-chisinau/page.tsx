import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/recuperare-postoperatorie-coloana-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/recuperare-postoperatorie-coloana-chisinau/", ru: "/ru/reabilitatsiya-posle-operatsii-pozvonochnika-kishinev/", "x-default": "/recuperare-postoperatorie-coloana-chisinau/" },
 title: "Recuperare Post-Operatorie Coloană & Hernie Chișinău — Neurochirurg",
 description: "Reabilitare post-operatorie după operație de hernie de disc sau traumatisme vertebrale în Chișinău (Ciocana) sub controlul neurochirurgului Dr. Igor Revenco. 022 60 50 60."
});

export default function RecuperarePostoperatorieColoanaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/recuperare-postoperatorie-coloana-chisinau"
   crumbLabel="Recuperare Post-Operatorie Coloană"
   h1="Recuperare Post-Operatorie după Operația de Coloană (Hernie de Disc) în Chișinău"
   lead="Protocol sigur de reabilitare post-operatorie supravegheat de neurochirurgul Dr. Igor Revenco (membru EANS, 35+ ani experiență) pentru prevenirea recidivelor și a fibrozei epidurale."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), evaluarea neurochirurgicală post-operatorie (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL), ședința de reabilitare post-operatorie 60 min costă 220 MDL, procedurile fizioterapeutice de recuperare (electroforeză, magnetoterapie, laser, electroneurostimulare) costă 100 MDL / 30 min, iar masajul terapeutic 200 MDL (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Succesul unei microdiscectomii sau intervenții de decompresie vertebrală depinde în mare măsură de primele 3–6 luni de recuperare: refacerea progresivă a conducerii nervoase, prevenirea aderențelor cicatriceale și reconstrucția stabilității musculare lombare sau cervicale."
   symptomsHeading="Obiectivele recuperării după operația pe coloană"
   symptoms={[
    "Reducerea durerii reziduale, a amorțelilor pe picior/braț și a slăbiciunii musculare post-compresie;",
    "Prevenirea fibrozei și a rigidității paravertebrale prin fizioterapie fin dozată (fără mobilizări bruște);",
    "Reeducarea corectă a mersului, șezutului și ridicării greutăților pentru prevenirea recidivei herniei;",
    "Evaluare neurochirurgicală directă pe RMN-ul de control și monitorizare prin electrospondilografie (500 MDL)."
]}
   approachHeading="Siguranță absolută — protocol adaptat tipului de intervenție"
   approachParagraphs={[
    "Dr. Igor Revenco analizează biletul de externare, tipul intervenției (microdiscectomie, laminectomie, stabilizare cu implant) și timpul scurs de la operație, respectând strict contraindicațiile legate de implanturile metalice (evitând procedurile termice profunde sau curenții nepotriviți peste metal).",
    "Recuperarea combină fizioterapia permisă (laser, Bioptron, electroforeză blândă, electroneurostimulare pe mușchii slăbiți — 100 MDL / 30 min) cu ședințe de reabilitare post-operatorie și kinetoterapie progresivă."
]}
   equipmentHeading="Tehnologii utilizate în recuperarea post-operatorie"
   equipmentCards={[
    {
        "slug": "lampa-solux",
        "title": "Fototerapie Bioptron & Laser",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Susținerea vindecării tisulare și reducerea edemului local — 100 MDL / 30 min."
    },
    {
        "slug": "amplipuls-5",
        "title": "Electroneurostimulare Periferică",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Recuperarea forței musculare în pareze radiculare (ex. picior căzut) — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Medicală",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Prevenirea aderențelor și reducerea inflamației — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "La cât timp după operația de hernie de disc pot începe recuperarea?",
        "a": "Momentul exact depinde de tipul intervenției și de recomandarea chirurgului (uzual la 3–6 săptămâni după vindecarea plăgii); stabilim planul sigur la consultația neurochirurgicală (500 MDL)."
    },
    {
        "q": "Se poate face fizioterapie dacă am șuruburi/implant metalic în coloană?",
        "a": "Da, însă doar anumite proceduri selectate de medic (se exclud procedurile incompatibile cu metalul), de aceea evaluarea prealabilă de către neurochirurg este esențială."
    }
]}
   relatedLinks={[
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău"
    },
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de Disc Chișinău"
    },
    {
        "href": "/reabilitare-medicala-neurologica-chisinau/",
        "label": "Centru de Reabilitare"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie (LFK)"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
