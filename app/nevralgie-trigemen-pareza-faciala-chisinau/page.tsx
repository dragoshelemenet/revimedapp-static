import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/nevralgie-trigemen-pareza-faciala-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/nevralgie-trigemen-pareza-faciala-chisinau/", ru: "/ru/nevralgiya-troynichnogo-nerva-kishinev/", "x-default": "/nevralgie-trigemen-pareza-faciala-chisinau/" },
 title: "Nevralgie de Trigemen & Pareză Facială Chișinău — Tratament & Fizioterapie",
 description: "Diagnostic și recuperare pentru nevralgie de trigemen, nevrită/pareză facială și nevralgie occipitală în Chișinău (Ciocana) cu Dr. Igor Revenco. Fizioterapie 100 MDL. 022 60 50 60."
});

export default function NevralgieTrigemenParezaFacialaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/nevralgie-trigemen-pareza-faciala-chisinau"
   crumbLabel="Nevralgie Trigemen & Pareză Facială"
   h1="Tratament Nevralgie de Trigemen și Pareză (Nevrită) Facială în Chișinău"
   lead="Evaluare neurologică și neurochirurgicală specializată pentru nervii cranieni (V și VII) și fizioterapie blândă țintită la Centrul Medical Revimed PLUS+ (Ciocana)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medicul neurolog sau neurochirurg Dr. Igor Revenco (35+ ani experiență, membru EANS) costă 500 MDL (repetată 400 MDL), iar procedurile fizioterapeutice pentru nervii cranieni și periferici (electroforeză, laser, Bioptron, ultrasunete, acupunctură) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Afectarea nervului trigemen (dureri fulgerătoare în obraz, maxilar sau frunte, declanșate de masticație, vorbit ori curent de aer) și neuropatia nervului facial (pareza Bell — asimetria feței, imposibilitatea închiderii complete a ochiului) necesită diagnostic diferențial riguros și dozare extrem de atentă a fizioterapiei."
   symptomsHeading="Simptome evaluate la consultația pentru nervii cranieni"
   symptoms={[
    "Dureri paroxistice, ca un „șoc electric”, pe o jumătate a feței, maxilar sau zona oculară (nevralgie de trigemen);",
    "Slăbiciune sau asimetrie a musculaturii faciale, lăcrimare și dificultate la închiderea pleoapei (pareză facială periferică);",
    "Durere iradiată din ceafă spre creștetul capului și tâmple (nevralgie occipitală Arnold);",
    "Amorțeli faciale, hipersensibilitate cutanată sau contracturi reziduale după un episod de nevrită facială."
]}
   approachHeading="De ce contează experiența neurochirurgicală și fizioterapia fin dozată"
   approachParagraphs={[
    "Dr. Igor Revenco diferențiază nevralgia trigeminală clasică (conflict neuro-vascular pe RMN) de durerile odontogene, sinusale sau atipice și stabilește stadiul exact al parezei faciale (în faza acută stimularea electrică agresivă este evitată pentru a preveni sincineziile).",
    "În funcție de stadiu, planul poate include fototerapie polarizată Bioptron, laseroterapie, electroforeză blândă, acupunctură și masaj facial/cervical (100 MDL / 30 min)."
]}
   equipmentHeading="Aparatură pentru recuperarea nervilor cranieni și periferici"
   equipmentCards={[
    {
        "slug": "lampa-solux",
        "title": "Fototerapie Bioptron & Solux",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Lumină polarizată neinvazivă pentru reducerea edemului perineural — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Medicală",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Administrare transdermică blândă în nevralgii — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Spectr-LC (Laser Terapeutic)",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Biostimulare laser pentru regenerarea fibrelor nervoase — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă consultația și procedurile pentru nevralgie de trigemen în Chișinău?",
        "a": "Consultația primară la neurolog/neurochirurg costă 500 MDL (repetată 400 MDL), iar procedurile fizioterapeutice din lista de metode curative au tariful orientativ de 100 MDL / 30 min."
    },
    {
        "q": "Când trebuie mers de urgență la spital (112) în cazul unei asimetrii faciale?",
        "a": "Dacă asimetria feței apare brusc împreună cu slăbiciune în braț/picior sau tulburare de vorbire, poate fi semn de AVC — apelați imediat 112."
    }
]}
   relatedLinks={[
    {
        "href": "/nevralgie-neuropatie-chisinau/",
        "label": "Nevralgie & Neuropatie"
    },
    {
        "href": "/acupunctura-reflexoterapie-chisinau/",
        "label": "Acupunctură Chișinău"
    },
    {
        "href": "/magnetoterapie-laser-chisinau/",
        "label": "Laser & Bioptron (100 MDL)"
    },
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
