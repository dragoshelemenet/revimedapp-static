import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/hernie-de-disc-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/hernie-de-disc-chisinau/", ru: "/ru/gryzha-diska-kishinev/", "x-default": "/hernie-de-disc-chisinau/" },
 title: "Tratament Hernie de Disc fără Operație Chișinău | Neurochirurg",
 description:
  "Evaluare RMN și tratament conservator pentru hernie de disc lombară și cervicală în Chișinău (Ciocana) — Dr. Igor Revenco, neurochirurg membru EANS, 35+ ani experiență, fizioterapie SMT."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/hernie-de-disc-chisinau"
   crumbLabel="Hernie de disc Chișinău"
   h1="Tratament Hernie de Disc fără Operație în Chișinău"
   lead="Evaluare neurochirurgicală directă pe imaginile RMN/CT și recuperare fizioterapeutică individualizată cu Dr. Igor Revenco (membru EANS, 35+ ani experiență)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), evaluarea RMN pentru hernie de disc cu neurochirurgul Dr. Igor Revenco (membru EANS, 35+ ani experiență) costă 300 MDL (neurolog 500 MDL), fizioterapia țintită (Amplipuls, Electroforeză) costă 150 MDL/ședință, masajul terapeutic 200 MDL, iar kinetoterapia combinată 250 MDL/oră. Programări: 022 60 50 60."
   introParagraph="Diagnosticul de hernie de disc lombară, cervicală sau toracală nu înseamnă automat operație. La Centrul Medical Revimed PLUS+ din Chișinău (sectorul Ciocana), analizăm direct secțiunile RMN și examenul clinic pentru a alege cea mai sigură direcție: tratament conservator și fizioterapie țintită sau, doar când este strict necesar, recomandare chirurgicală."
   symptomsHeading="Simptome care indică necesitatea evaluării herniei de disc"
   symptoms={[
    "Durere lombară sau cervicală persistentă care se agravează la șezut ori mișcare;",
    "Durere care iradiază pe picior (sciatică) sau pe braț până în degete;",
    "Amorțeli, furnicături sau senzație de arsură pe traiectul nervului;",
    "Contractură musculară paravertebrală și limitarea mobilității;",
    "Slăbiciune musculară sau oboseală rapidă la mers."
   ]}
   approachHeading="Cum abordăm hernia de disc la Revimed PLUS+ Chișinău"
   approachParagraphs={[
    "Dr. Igor Revenco corelează fiecare milimetru de pe imaginile RMN/CT cu semnele clinice reale ale pacientului. Scopul este reducerea inflamației radiculare, relaxarea spasmului muscular și stabilizarea coloanei fără intervenții inutile.",
    "Protocolul combină, după caz și cu acordul pacientului, tratamentul medicamentos țintit cu ședințe de fizioterapie și electroterapie efectuate pe loc în clinică."
   ]}
   equipmentHeading="Aparataj medical folosit în recuperarea herniei de disc"
   equipmentCards={[
    { slug: "amplipuls-5", title: "Amplipuls-5 (SMT)", image: "/images/equipment/amplipuls-5.webp", desc: "Curenți sinusoidali modulați pentru calmarea durerii și relaxarea spasmului paravertebral." },
    { slug: "aparat-electroforeza-medicamentoasa", title: "Electroforeză medicamentoasă", image: "/images/equipment/aparat-electroforeza-medicamentoasa.webp", desc: "Administrare locală neinvazivă a substanțelor antiinflamatoare direct în zona afectată." },
    { slug: "lampa-solux", title: "Lampă Solux", image: "/images/equipment/lampa-solux.webp", desc: "Terapie termică infraroșie blândă pentru microcirculație și decontracturare." }
   ]}
   faqs={[
    { q: "Pot evita operația dacă am hernie de disc L4-L5 sau L5-S1?", a: "Da, în majoritatea cazurilor fără deficit motor sever progresiv, tratamentul conservator și fizioterapia țintită oferă ameliorare stabilă fără intervenție chirurgicală." },
    { q: "Ce trebuie să aduc la consultația pentru hernie de disc?", a: "Aduceți neapărat imaginile RMN sau CT pe CD/film (nu doar concluzia scrisă) și lista tratamentelor încercate anterior." },
    { q: "Câte ședințe de fizioterapie sunt necesare?", a: "Un curs orientativ cuprinde 5–10 ședințe stabilite individual de medic." }
   ]}
   relatedLinks={[
    { href: "/blog/recuperare-kinetoterapie-dupa-operatie-coloana-hernie-disc-chisinau/", label: "Ghid: Recuperare după operație de coloană" },
    { href: "/neurochirurg-chisinau/", label: "Neurochirurg Chișinău (500 MDL)" },
    { href: "/dureri-de-spate-sciatica-chisinau/", label: "Dureri de spate & Sciatică" },
    { href: "/fizioterapie-chisinau/", label: "Fizioterapie Chișinău (150 MDL)" }
   ]}
  />
 );
}
