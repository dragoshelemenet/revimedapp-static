import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/reabilitare-medicala-neurologica-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/reabilitare-medicala-neurologica-chisinau/", ru: "/ru/meditsinskaya-reabilitatsiya-kishinev/", "x-default": "/reabilitare-medicala-neurologica-chisinau/" },
 title: "Centru de Reabilitare Medicală & Neurologică Chișinău — Revimed PLUS+",
 description: "Reabilitare medicală și neurologică ambulatorie în Chișinău (Ciocana) la Revimed PLUS+. 25 aparate, programe neuro-motorii (100 MDL / 30 min), kinetoterapie și masaj. 022 60 50 60."
});

export default function ReabilitareMedicalaNeurologicaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/reabilitare-medicala-neurologica-chisinau"
   crumbLabel="Reabilitare Medicală Chișinău"
   h1="Centru de Reabilitare Medicală și Neurologică în Chișinău — Revimed PLUS+"
   lead="Recuperare medicală ambulatorie integrată (neurologie, neurochirurgie, fizioterapie pe 25 aparate, kinetoterapie și masaj terapeutic) sub coordonarea Dr. Igor Revenco."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), evaluarea inițială la medic neurolog sau neurochirurg costă 500 MDL (repetată 400 MDL), procedurile din categoria echipamente și metode curative (programe de reabilitare neuro-motorie, reabilitare cu tehnologie avansată, electroforeză, Amplipuls, laser, Electrosomn) costă 100 MDL / 30 min, iar reabilitarea post-operatorie 60 min — 220 MDL (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Reabilitarea medicală eficientă nu se rezumă la o singură procedură izolată: combină diagnosticul clinic și funcțional (EEG, REG, Electrospondilografie, AMP 117 indici) cu secvențierea corectă a electroterapiei, masajului medical și kinetoterapiei adaptate toleranței pacientului."
   symptomsHeading="Direcții principale ale centrului nostru de recuperare"
   symptoms={[
    "Reabilitare neurologică și neuro-motorie după AVC, traumatisme cranio-cerebrale și pareze;",
    "Recuperare vertebrală în hernie de disc, protruzii, stenoză, sciatică, osteocondroză și scolioză;",
    "Reabilitare post-operatorie după intervenții pe coloană sau traumatisme musculo-scheletale (60 min — 220 MDL);",
    "Reabilitare pentru tulburări de echilibru și coordonare (250 MDL) și recuperarea nervilor periferici."
]}
   approachHeading="Plan de recuperare condus de medic, pe etape clare"
   approachParagraphs={[
    "Dr. Igor Revenco (35+ ani experiență, doctor în neurochirurgie USMF, membru EANS) stabilește etapele cursului: 1) controlul durerii și inflamației, 2) refacerea mobilității și conducerii nervoase, 3) stabilizarea musculară prin kinetoterapie.",
    "Toate procedurile au loc în aceeași clinică din sectorul Ciocana (Str. Mircea cel Bătrân 13/2). Rezultatele recuperării depind de diagnosticul individual și aderența la program."
]}
   equipmentHeading="Baza tehnologică de reabilitare (25 dispozitive)"
   equipmentCards={[
    {
        "slug": "amplipuls-6",
        "title": "Electroterapie & Amplipuls",
        "image": "/images/equipment/amplipuls-6.webp",
        "desc": "Stimulare neuromusculară și analgezie segmentară — 100 MDL / 30 min."
    },
    {
        "slug": "mdm-2000",
        "title": "MDM-2000 & Transair TES",
        "image": "/images/equipment/mdm-2000.webp",
        "desc": "Neuromodulare centrală pentru recuperare neuro-motorie — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Laser & Magnetoterapie",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Biostimulare tisulară și recuperare articulară — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Oferiți internare sau doar reabilitare ambulatorie?",
        "a": "Centrul Medical Revimed PLUS+ oferă reabilitare medicală și neurologică în regim ambulatoriu (Luni–Vineri, 09:00–15:00), cu programare telefonică la 022 60 50 60."
    },
    {
        "q": "Cât costă un curs de recuperare medicală?",
        "a": "Costul depinde de numărul și tipul procedurilor stabilite la consultația inițială (500 MDL). Procedurile din lista de metode curative au tariful orientativ de 100 MDL / 30 min."
    }
]}
   relatedLinks={[
    {
        "href": "/recuperare-dupa-avc-chisinau/",
        "label": "Recuperare după AVC"
    },
    {
        "href": "/recuperare-postoperatorie-coloana-chisinau/",
        "label": "Recuperare Post-Operatorie"
    },
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
