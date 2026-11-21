import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurolog-botanica-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-botanica-chisinau/", ru: "/ru/nevrolog-botanika-kishinev/", "x-default": "/neurolog-botanica-chisinau/" },
 title: "Neurolog accesibil din Botanica, Chișinău (500 MDL) — Revimed PLUS+",
 description: "Cauți medic neurolog sau fizioterapie din sectorul Botanica, Chișinău? Centrul Medical Revimed PLUS+ (Dr. Igor Revenco, 35+ ani): neurolog 500 MDL, neurochirurg 300 MDL, 25 aparate fizioterapie. 022 60 50 60."
});

export default function NeurologBotanicaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/neurolog-botanica-chisinau"
   crumbLabel="Neurolog Botanica"
   h1="Neurolog & Recuperare Medicală pentru Pacienții din Botanica, Chișinău"
   lead="Consultații neurologice, a doua opinie neurochirurgicală, EEG și 25 de aparate de fizioterapie într-o clinică dedicată cu peste 35 de ani de experiență clinică."
   directAnswer="Pacienții din sectorul Botanica aleg Centrul Medical Revimed PLUS+ (Str. Mircea cel Bătrân 13/2, Chișinău) pentru experiența de 35+ ani a Dr. Igor Revenco și prețurile transparente: neurolog 500 MDL, neurochirurg 300 MDL, fizioterapie / Electrosomn 150 MDL, masaj 200 MDL. Programări: 022 60 50 60."
   introParagraph="Mulți pacienți din Botanica vin la Revimed PLUS+ pentru că găsesc sub același acoperiș atât un neurolog și neurochirurg cu experiență (Dr. Igor Revenco, membru EANS), cât și o bază completă de 25 de aparate de fizioterapie și diagnostic neinvaziv."
   symptomsHeading="De ce vin pacienții din Botanica la Revimed PLUS+"
   symptoms={[
    "Evaluare RMN/CT pentru hernie de disc și sciatică fără recomandări pripite de operație;",
    "Tratament integrat pentru migrene, amețeli, insomnie și stres cronic;",
    "Tarife accesibile față de clinicile mari: neurochirurg 300 MDL, fizioterapie 150 MDL;",
    "Programare directă telefonică, fără liste de așteptare de săptămâni."
]}
   approachHeading="Acces din Botanica spre Revimed PLUS+"
   approachParagraphs={[
    "Clinica este situată pe Str. Mircea cel Bătrân 13/2 (Ciocana), cu acces direct cu transportul public (troleibuze și autobuze pe traseul Botanica–Ciocana) și parcare în apropiere.",
    "Sună la 022 60 50 60 pentru programare în intervalul Luni–Vineri, 09:00–15:00."
]}
   equipmentHeading="Aparatură clinică disponibilă pe loc"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls (SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Electroterapie analgezică pentru spate — 150 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Terapie fără somnifere — 150 MDL."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Circulație cerebrală neinvaziv — 500 MDL."
    }
]}
   faqs={[
    {
        "q": "Pot face consultația și fizioterapia în aceeași zi?",
        "a": "Da, după evaluarea medicului, multe proceduri (Electrosomn, Amplipuls, Electroforeză, REG) pot începe chiar din aceeași zi."
    }
]}
   relatedLinks={[
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de disc"
    },
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (101 servicii)"
    }
]}
  />
 );
}
