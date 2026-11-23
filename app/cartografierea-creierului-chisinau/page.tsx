import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/cartografierea-creierului-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/cartografierea-creierului-chisinau/", ru: "/ru/kartirovanie-mozga-kishinev/", "x-default": "/cartografierea-creierului-chisinau/" },
 title: "Cartografierea Creierului Chișinău (600 MDL) — Brain Mapping & Neuroenergometrie",
 description: "Cartografierea creierului computerizată și examinare neuroenergometrică în Chișinău (Ciocana) la Revimed PLUS+ — 600 MDL. Interpretare Dr. Igor Revenco. 022 60 50 60."
});

export default function CartografiereaCreieruluiChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/cartografierea-creierului-chisinau"
   crumbLabel="Cartografierea Creierului (600 MDL)"
   h1="Cartografierea Creierului Computerizată și Examinare Neuroenergometrică în Chișinău — 600 MDL"
   lead="Analiză topografică vizuală a activității bioelectrice și a metabolismului energetic cerebral în Chișinău (Ciocana), interpretată de Dr. Igor Revenco (35+ ani experiență)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), cartografierea creierului computerizată / examinarea neuroenergometrică are tariful orientativ de 600 MDL, electroencefalografia (EEG) completă 1600 MDL, reoencefalografia (REG) 500 MDL, iar consultația primară la neurolog costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60."
   introParagraph="Cartografierea cerebrală computerizată (Brain Mapping / neuroenergometrie) transformă semnalele bioelectrice și potențialele lente ale scoarței cerebrale în hărți topografice color 2D/3D, evidențiind distribuția ritmurilor alfa, beta, theta și delta și zonele de suprasolicitare sau hipoactivitate funcțională."
   symptomsHeading="În ce situații este recomandată cartografierea cerebrală (600 MDL)"
   symptoms={[
    "Evaluarea topografică a asimetriilor funcționale în migrene, cefalee cronică și amețeli;",
    "Monitorizarea recuperării funcționale după accident vascular cerebral (AVC) sau traumatisme cranio-cerebrale;",
    "Tulburări de concentrare, epuizare cognitivă, insomnie și stres neuro-vegetativ prelungit;",
    "Evaluarea maturizării funcționale corticale la copii cu ticuri, logonevroză sau dificultăți de atenție."
]}
   approachHeading="Complementaritate cu EEG pe 19 canale și Reoencefalografia REG"
   approachParagraphs={[
    "În timp ce EEG-ul clasic (1600 MDL) analizează undă cu undă graful paroxistic, cartografierea computerizată (600 MDL) oferă o sinteză cantitativă și vizuală ușor de urmărit în dinamică înainte și după cursul de neurorecuperare.",
    "Dr. Igor Revenco corelează harta cerebrală cu tabloul clinic pentru a calibra frecvențele procedurilor de neurostimulare (AVS stimulare audio-video alfa/beta/theta, Electrosomn, MDM — 100 MDL / 30 min)."
]}
   equipmentHeading="Diagnostic neurofiziologic și stimulare ghidată"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "Diagnostic Cerebral & Vascular",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Cartografiere cerebrală (600 MDL), REG (500 MDL) și EEG (1600 MDL)."
    },
    {
        "slug": "mdm-101",
        "title": "MDM-101 / MDM-2000",
        "image": "/images/equipment/mdm-101.webp",
        "desc": "Modulare mezodiencefalică ghidată neurofiziologic — 100 MDL / 30 min."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "AVS & Electrosomn",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Stimulare cerebrală audio-video cu ritmuri alfa, beta, theta — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă cartografierea creierului computerizată la Revimed PLUS+?",
        "a": "În lista oficială de Diagnostic Funcțional, Cartografierea creierului computerizată / Examinarea neuroenergometrică are tariful orientativ de 600 MDL."
    },
    {
        "q": "Este o procedură neinvazivă?",
        "a": "Da, este complet neinvazivă, fără radiații și nedureroasă, realizată cu senzori de suprafață."
    }
]}
   relatedLinks={[
    { href: "/evaluare-neuropsihologica-testare-cognitiva-chisinau/", label: "Testare Cognitivă & MMPI" },
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Chișinău (1600 MDL)"
    },
    {
        "href": "/eeg-copii-chisinau/",
        "label": "EEG Copii Chișinău"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
