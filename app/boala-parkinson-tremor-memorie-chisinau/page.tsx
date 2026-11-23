import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/boala-parkinson-tremor-memorie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/boala-parkinson-tremor-memorie-chisinau/", ru: "/ru/bolezn-parkinsona-tremor-kishinev/", "x-default": "/boala-parkinson-tremor-memorie-chisinau/" },
 title: "Boala Parkinson, Tremor & Tulburări de Memorie Chișinău — Neurolog",
 description: "Consultație neurologică (500 MDL), testare cognitivă și recuperare neuro-motorie pentru boala Parkinson, tremor esențial și tulburări de memorie în Chișinău — Dr. Igor Revenco. 022 60 50 60."
});

export default function BoalaParkinsonTremorMemorieChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/boala-parkinson-tremor-memorie-chisinau"
   crumbLabel="Parkinson, Tremor & Memorie"
   h1="Evaluare Neurologică și Recuperare în Boala Parkinson, Tremor și Tulburări de Memorie în Chișinău"
   lead="Monitorizare neurologică cu Dr. Igor Revenco (35+ ani experiență), diagnostic cerebral/vascular (EEG, REG), evaluare neuropsihologică și recuperare a echilibrului și mersului."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medicul neurolog Dr. Igor Revenco costă 500 MDL (repetată 400 MDL), reoencefalografia vasculară (REG) 500 MDL, evaluarea funcțională neuropsihologică 700 MDL, testarea cognitivă avansată 800 MDL, iar procedurile de recuperare neuro-motorie 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Tremorul mâinilor în repaus sau la mișcare, încetinirea mișcărilor (bradikinezie), rigiditatea musculară, mersul cu pași mici și scăderea progresivă a memoriei necesită diagnostic diferențial precis între boala Parkinson, tremorul esențial, encefalopatia vasculară și deficitele metabolice."
   symptomsHeading="Simptome pentru care recomandăm consultația neurologică"
   symptoms={[
    "Tremor al mâinilor, capului sau vocii (în repaus ori la ținerea obiectelor);",
    "Lentoare în mișcări, rigiditate musculară, instabilitate posturală și tendință la dezechilibrare;",
    "Tulburări de memorie recentă, orientare, concentrare sau somn agitat la vârstnici;",
    "Nevoia unui program regulat de recuperare a echilibrului, coordonării și circulației cerebrale."
]}
   approachHeading="Monitorizare clinică, testare cognitivă și recuperare a echilibrului"
   approachParagraphs={[
    "Dr. Igor Revenco evaluează schema de tratament neurologic, starea vasculară cerebrală (REG — 500 MDL), activitatea corticală (EEG — 1600 MDL / Cartografiere — 600 MDL) și funcțiile cognitive (evaluare neuropsihologică — 700 MDL).",
    "Pe lângă terapia medicamentoasă de bază, programele de reabilitare echilibrată și coordonată (250 MDL), masajul de detensionare musculară și neurostimularea blândă (100 MDL / 30 min) susțin autonomia zilnică a pacientului."
]}
   equipmentHeading="Diagnostic cerebral și recuperare neuro-motorie"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG) & EEG",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea circulației cerebrale (500 MDL) și a ritmurilor corticale."
    },
    {
        "slug": "mdm-2000",
        "title": "MDM-2000 & Transair",
        "image": "/images/equipment/mdm-2000.webp",
        "desc": "Suport neuro-regulator complementar pentru somn și tonus — 100 MDL / 30 min."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Relaxare Musculară & Echilibru",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Reducerea rigidității musculare și stimulare plantară — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cum se diferențiază boala Parkinson de tremorul esențial?",
        "a": "Diferențierea se face la examenul clinic neurologic detaliat (500 MDL), analizând caracterul tremorului (de repaus vs. de acțiune), bradikinezia, rigiditatea și istoricul familial."
    },
    {
        "q": "Oferiți testare a memoriei și funcțiilor cognitive?",
        "a": "Da, în lista de Diagnostic Funcțional sunt disponibile Evaluarea funcțională neuropsihologică (700 MDL) și Testarea cognitivă avansată (800 MDL)."
    }
]}
   relatedLinks={[
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/cartografierea-creierului-chisinau/",
        "label": "Cartografiere Creier (600 MDL)"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/reabilitare-medicala-neurologica-chisinau/",
        "label": "Reabilitare Neurologică"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
