import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/nevralgie-neuropatie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/nevralgie-neuropatie-chisinau/", ru: "/ru/nevralgiya-neyropatiya-kishinev/", "x-default": "/nevralgie-neuropatie-chisinau/" },
 title: "Tratament Nevralgie & Neuropatie Chișinău — Neurolog Revimed PLUS+",
 description: "Diagnostic și tratament pentru nevralgie trigeminală, nevralgie intercostală, amorțeli și polineuropatie periferică în Chișinău la Revimed PLUS+ (Dr. Igor Revenco). 022 60 50 60."
});

export default function NevralgieNeuropatieChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/nevralgie-neuropatie-chisinau"
   crumbLabel="Nevralgie & Neuropatie"
   h1="Tratament Nevralgie & Neuropatie Periferică în Chișinău"
   lead="Evaluare neurologică de specialitate și fizioterapie analgezică pentru nevralgie de trigemen, nevralgie intercostală, amorțeli, furnicături și neuropatie diabetică."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică pentru nevralgii și neuropatii (Dr. Igor Revenco, 35+ ani) costă 500 MDL, iar procedurile analgezice țintite (Amplipuls, Electroforeză, MDM) costă 150 MDL/ședință. Programări: 022 60 50 60."
   introParagraph="Durerea de tip „curent electric” pe față (nevralgia de trigemen), durerea în piept sau coaste (nevralgia intercostală) ori amorțeala și arsura în mâini și picioare (neuropatia periferică) necesită diagnostic neurologic exact pentru a calma nervul iritat."
   symptomsHeading="Simptome care indică nevralgie sau neuropatie"
   symptoms={[
    "Dureri ascuțite, fulgerătoare pe o jumătate a feței (nevralgie de trigemen);",
    "Dureri în bandă pe coaste accentuate la respirație sau mișcare (nevralgie intercostală);",
    "Furnicături, amorțeli, senzație de arsură sau „ace” în tălpi și palme (neuropatie diabetică/periferică);",
    "Slăbiciune musculară locală sau durere care iradiază pe traseul unui nerv."
]}
   approachHeading="Tratament combinat: medicație neurotropă + fizioterapie"
   approachParagraphs={[
    "Dr. Igor Revenco identifică cauza compresiei sau inflamației nervoase și combină tratamentul neurologic specific cu fizioterapie analgezică (Electroforeză medicamentoasă, Amplipuls, Bi-LENAR, acupunctură).",
    "Intervenția precoce reduce riscul cronicizării durerii neuropate."
]}
   equipmentHeading="Aparate utile în nevralgii și neuropatii"
   equipmentCards={[
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Calmare locală a inflamației nervoase — 150 MDL."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls (SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Blocarea semnalului dureros neuropat — 150 MDL."
    },
    {
        "slug": "mdm-101",
        "title": "MDM-101",
        "image": "/images/equipment/mdm-101.webp",
        "desc": "Stimulare neuro-trofică și recuperare nervoasă."
    }
]}
   faqs={[
    {
        "q": "Cum se deosebește nevralgia intercostală de durerea de inimă?",
        "a": "Nevralgia intercostală se accentuează tipic la mișcare, aplecare sau apăsare pe coaste, dar orice durere toracică nouă trebuie evaluată medical (avem și ECG computerizat pe loc — 200 MDL)."
    }
]}
   relatedLinks={[
    {
        "href": "/blog/nevralgie-trigemen-artroza-pinten-calcanean-fizioterapie-chisinau/",
        "label": "Ghid: Nevralgie de trigemen & Fizioterapie"
    },
    {
        "href": "/blog/sindrom-tunel-carpian-neuropatii-compresive-amorteli-maini-chisinau/",
        "label": "Ghid: Sindrom de tunel carpian"
    },
    {
        "href": "/blog/periartrita-umar-inghetat-plexita-brahiala-fizioterapie-chisinau/",
        "label": "Ghid: Umăr înghețat & Plexită"
    },
    {
        "href": "/electroforeza-amplipuls-chisinau/",
        "label": "Electroforeză & Amplipuls"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (97 servicii)"
    }
]}
  />
 );
}
