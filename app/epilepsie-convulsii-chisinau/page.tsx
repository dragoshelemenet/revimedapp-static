import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/epilepsie-convulsii-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/epilepsie-convulsii-chisinau/", ru: "/ru/epilepsiya-kishinev/", "x-default": "/epilepsie-convulsii-chisinau/" },
 title: "Epilepsie, Convulsii & EEG Chișinău — Neurolog Dr. Igor Revenco",
 description: "Evaluare neurologică (500 MDL) și EEG (1600 MDL) pentru epilepsie, crize convulsive, pierderi de cunoștință și sincope la adulți și copii în Chișinău, Revimed PLUS+. 022 60 50 60."
});

export default function EpilepsieConvulsiiChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/epilepsie-convulsii-chisinau"
   crumbLabel="Epilepsie & EEG Chișinău"
   h1="Evaluare Epilepsie, Convulsii & Pierderi de Cunoștință în Chișinău"
   lead="Consultație neurologică și neuropediatrică de înaltă specialitate (Dr. Igor Revenco, 35+ ani) integrată cu electroencefalografie (EEG) pe loc."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), evaluarea neurologică pentru epilepsie, convulsii și sincope costă 500 MDL (Dr. Igor Revenco, 35+ ani experiență, adulți și copii), iar electroencefalografia (EEG) pe loc costă 1600 MDL. Programări: 022 60 50 60."
   introParagraph="Nu orice episod de leșin sau contracție este epilepsie — diferențierea exactă între sincope vasculare, crize epileptice și episoade non-epileptice se face prin corelarea atentă a istoricului clinic cu traseul EEG și imagistica cerebrală."
   symptomsHeading="Când este necesară evaluarea neurologică + EEG"
   symptoms={[
    "Episoade de pierdere bruscă a cunoștinței, leșin (sincope) sau „absențe” scurte;",
    "Convulsii, tresăriri musculare involuntare sau episoade nocturne neexplicate;",
    "Monitorizarea periodică a tratamentului antiepileptic la adulți și copii;",
    "Evaluare după traumatisme craniene sau accidente vasculare."
]}
   approachHeading="Obiectivele tratamentului și primul ajutor în caz de criză"
   approachParagraphs={[
    "Dr. Igor Revenco evaluează întregul dosar (EEG digital 19 canale cu analiză DSA și Brain Mapping 3D, RMN cerebral, tratamente anterioare) și ajustează schema terapeutică cu obiectivul controlului sigur al crizelor, reducerii riscului de traumatisme și păstrării unei vieți active.",
    "Primul ajutor corect dacă ești martor la o criză convulsivă (ghid medical 2026): rămâi calm și cronometrează durata crizei; protejează capul persoanei cu o haină moale și îndepărtează obiectele dure din jur; așază persoana pe o parte (poziție laterală de siguranță) imediat ce contracțiile scad; NU imobiliza forțat brațele și NU introduce niciodată linguri, degete sau obiecte în gură (nu îți poți „înghiți limba”, dar poți provoca fracturi dentare sau sufocare). Sună de urgență la 112 dacă criza durează peste 5 minute, se repetă imediat, persoana s-a rănit sau este prima criză din viață."
]}
   equipmentHeading="Investigații funcționale în clinică"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluare vasculară cerebrală — 500 MDL."
    },
    {
        "slug": "aparat-amp",
        "title": "Analizator AMP",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Screening neinvaziv 117 indici — 1000 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Electrosomn-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Doar la indicația strictă a medicului neurolog."
    }
]}
   faqs={[
    {
        "q": "Pot face atât EEG-ul, cât și consultația neurologică în aceeași clinică?",
        "a": "Da, la Revimed PLUS+ sunt disponibile atât electroencefalografia digitală pe 19 canale (1600 MDL), cât și consultația cu Dr. Igor Revenco (500 MDL)."
    },
    {
        "q": "Ce trebuie să fac dacă cineva are o criză epileptică lângă mine?",
        "a": "Cronometrează criza, protejează capul cu ceva moale, întoarce persoana pe o parte și NU îi pune nimic în gură. Dacă durează peste 5 minute sau este prima criză, apelează imediat 112."
    }
]}
   relatedLinks={[
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Chișinău (1600 MDL)"
    },
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău"
    },
    {
        "href": "/neuropediatru-chisinau/",
        "label": "Neuropediatru Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
