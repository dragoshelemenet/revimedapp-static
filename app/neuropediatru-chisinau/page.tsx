import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neuropediatru-chisinau",
 localized: false,
 alternatesLanguages: {
  ro: "/neuropediatru-chisinau/",
  ru: "/ru/detskiy-nevrolog-kishinev/",
  "x-default": "/neuropediatru-chisinau/"
 },
 title: "Neuropediatru Chișinău (Neurolog Copii): Dr. Igor Revenco",
 description:
  "Consultație la neuropediatru (neurolog pentru copii) în Chișinău, Ciocana (500 MDL): Dr. Igor Revenco, 35+ ani experiență, doctor USMF. Somn, vorbire, cefalee, ticuri, ADHD, autism și EEG copii."
});

export default function NeuropediatruChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/neuropediatru-chisinau/"
   crumbLabel="Neuropediatru Chișinău"
   h1="Neuropediatru Chișinău: Consultații Neurologice pentru Copii"
   lead="Evaluare blândă, empatică și individualizată de neurologie pediatrică cu Dr. Igor Revenco (35+ ani experiență clinică, fost neurochirurg pediatric la Spitalul „V. Ignatenco”, doctor în științe medicale USMF) în Chișinău, sectorul Ciocana."
   directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația de neurologie pediatrică (neuropediatru) costă 500 MDL (repetată: 400 MDL) și este realizată de Dr. Igor Revenco (35+ ani experiență, autor al monografiei USMF 2022 și studiilor IBN 2023-2024 în neuropediatrie). În aceeași clinică sunt disponibile investigații neinvazive pentru copii (EEG 19 canale 1600 MDL, Cartografiere 3D 600 MDL, EHO-EG 350 MDL) și proceduri blânde de fizioterapie (100 MDL / 30 min). Programări: 022 60 50 60."
   introParagraph="Dezvoltarea sistemului nervos la copii și adolescenți necesită o evaluare calmă, fără grabă și fără supramedicație inutilă. La Revimed PLUS+, părinții primesc explicații clare despre somn, limbaj, atenție, ticuri, cefalee și opțiunile neinvazive de diagnostic și recuperare."
   symptomsHeading="Când este util un consult la neuropediatru"
   symptoms={[
    "Întârzieri în dezvoltarea vorbirii (întârziere psiho-verbală), dificultăți de pronunție sau balbism (logonevroză)",
    "Tulburări persistente de somn, treziri nocturne frecvente, pavor nocturn, somnambulism sau enurezis nocturn",
    "Dureri de cap (cefalee, migrene) la copii și adolescenți, oboseală școlară accentuată sau amețeli",
    "Ticuri motorii/vocale, clipit excesiv, anxietate, hiperactivitate (ADHD) sau dificultăți de concentrare",
    "Evaluare și urmărire în tulburări de spectru autist (TSA) și convulsii febrile cu necesitate de EEG",
    "Monitorizare neurologică după traumatisme craniocerebrale (comoții) sau la recomandarea pediatrului"
   ]}
   approachHeading="Abordare neuropediatrică blândă, bazată pe cercetare USMF și acordul părinților"
   approachParagraphs={[
    "Dr. Igor Revenco îmbină experiența de peste 35 de ani în neuropediatrie și neurochirurgie pediatrică (inclusiv 13 ani la Spitalul Clinic Municipal de Copii „V. Ignatenco”) cu cercetarea clinică publicată la USMF „Nicolae Testemițanu” (monografie 2022 despre traumatismul craniocerebral la copii și studiu clinic IBN 2024 pe 80 de copii cu TSA).",
    "Consultația se desfășoară într-un ritm calm, fără grabă. Atunci când situația permite în siguranță, planul prioritizează metode blânde: igiena somnului, diagnostic funcțional nedureros (EEG 19 canale, EHO-EG), proceduri de relaxare (Electrosomn adaptat vârstei: 100 MDL / 30 min), kinetoterapie și colaborare cu logopedul/psihologul."
   ]}
   equipmentHeading="Diagnostic neinvaziv și fizioterapie blândă pentru copii"
   equipmentCards={[
    {
     slug: "rheotest",
     title: "EEG Pediatric 19 Canale & RHEOTEST",
     desc: "Investigații funcționale complet neinvazive și nedureroase pentru evaluarea activității electrice cerebrale și a circulației.",
     image: "/images/equipment/rheotest.webp"
    },
    {
     slug: "electrosomn-4t",
     title: "Electrosomn-4T (Protocol Blând)",
     desc: "Terapie de relaxare a sistemului nervos central pentru ticuri, hiperexcitabilitate, logonevroză și somn agitat (100 MDL / 30 min).",
     image: "/images/equipment/electrosomn-4t.webp"
    },
    {
     slug: "aparat-amp",
     title: "Analizator Neinvaziv AMP (117 indici)",
     desc: "Screening rapid fără înțepături și fără recoltare de sânge, bine tolerat de copii și adolescenți.",
     image: "/images/equipment/aparat-amp.webp"
    }
   ]}
   faqs={[
    {
     q: "De la ce vârstă poate fi evaluat copilul la neuropediatru în Chișinău?",
     a: "Evaluările neuropediatrice acoperă copiii mici, preșcolarii, școlarii și adolescenții: pentru somn, vorbire, dureri de cap, ticuri, atenție, coordonare, convulsii febrile sau monitorizare după traumatisme."
    },
    {
     q: "Se poate efectua EEG pentru copii în aceeași clinică?",
     a: "Da. La Revimed PLUS+ efectuăm electroencefalografie (EEG 19 canale, 1600 MDL) și cartografiere cerebrală 3D (600 MDL) în condiții calme, prietenoase pentru copil, cu interpretare directă de către Dr. Igor Revenco."
    },
    {
     q: "Cât costă consultația la neuropediatru și fizioterapia pentru copii?",
     a: "Consultația primară costă 500 MDL, iar controlul repetat 400 MDL. Ședințele blânde de fizioterapie (ex. Electrosomn) costă 100 MDL / 30 min."
    },
    {
     q: "Cum mă programez la neuropediatru la Revimed PLUS+ Ciocana?",
     a: "Programările se fac telefonic la 022 60 50 60 sau +373 79 422 908, Luni - Vineri între 09:00 și 15:00. Adresa: Str. Mircea cel Bătrân 13/2, Chișinău."
    }
   ]}
   relatedLinks={[
    { href: "/eeg-copii-chisinau/", label: "EEG Copii Chișinău (1600 MDL)" },
    { href: "/intarziere-vorbire-copii-neuropediatru-chisinau/", label: "Întârziere de Vorbire" },
    { href: "/ticuri-nervoase-balbaiala-copii-chisinau/", label: "Ticuri & Logonevroză Copii" },
    { href: "/adhd-hiperactivitate-copii-neuropediatru-chisinau/", label: "ADHD & Hiperactivitate" },
    { href: "/autism-tsa-copii-neuropediatru-chisinau/", label: "Autism (TSA) Neuropediatru" },
    { href: "/tulburari-de-somn-copii-neuropediatru-chisinau/", label: "Tulburări de Somn Copii" }
   ]}
  />
 );
}
