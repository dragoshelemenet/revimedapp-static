import Link from "next/link";
import { ContentSection, ReadingCard, Question } from "@/components/ContentLayout";

import PageHeading from "@/components/PageHeading";
import { JsonLd, breadcrumbJsonLd, makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({ lang: "ro", path: "/intrebari", localized: false,
  title: "Întrebări frecvente | Revimed PLUS+",
  description: "Întrebări frecvente despre consultații, programări, prețuri, tratament individual, fizioterapie, neurologie, neurochirurgie și Revimed PLUS+ Chișinău.",
});

const faqs = [
  ["Trebuie să știu exact la ce medic să merg?", "Nu neapărat. Mulți pacienți vin cu simptome amestecate: dureri de cap, amețeli, amorțeli, dureri cervicale, lombare, oboseală sau tensiune nervoasă. Medicul discută cazul și stabilește ce direcție are sens."],
  ["Tratamentul este același pentru toți pacienții?", "Nu. Tratamentul se alege individual. Contează simptomele, vârsta, istoricul medical, stilul de viață, reacțiile la tratamente anterioare și preferințele pacientului."],
  ["Pot alege o variantă mai blândă sau mai naturistă?", "Dacă situația permite și este sigur pentru pacient, da. Medicul poate lua în calcul metode mai blânde, fizioterapie, recuperare, proceduri sau recomandări de regim. În unele cazuri medicamentele sau investigațiile sunt necesare."],
  ["Totul se face cu acordul pacientului?", "Da. Planul trebuie explicat clar. Pacientul trebuie să înțeleagă ce se propune, de ce se propune și ce alternative există. Tratamentul se face cu acordul pacientului."],
  ["Când este important să nu amân consultația?", "Dacă apar slăbiciune bruscă, tulburări de vorbire, asimetrie facială, pierderea stării de conștiență, durere puternică apărută brusc, amorțeli accentuate sau probleme de mers, este importantă evaluarea medicală rapidă."],
  ["Cu ce se ocupă Revimed PLUS+?", "Clinica este orientată spre neurologie, neurochirurgie, neuropediatrie, fizioterapie, recuperare, diagnostic funcțional și proceduri medicale complementare."],
  ["Cum mă pot programa la consultație și care este programul de lucru?", "Programările se fac telefonic la 022 60 50 60 sau +373 79 422 908. Clinica activează de luni până vineri, între 09:00 și 15:00."],
  ["Unde se află Centrul Medical Revimed PLUS+?", "Clinica se află în Chișinău, sectorul Ciocana, pe Str. Mircea cel Bătrân 13/2, MD-2044, cu acces facil prin transport public (autobuze, troleibuze și microbuze pe bd. Mircea cel Bătrân)."],
  ["Se oferă consultații și pentru copii (neuropediatrie)?", "Da. Dr. Igor Revenco are specializare și experiență clinică de peste 35 de ani în neurologie, neurochirurgie și neurologie pediatrică."],
  ["Unde pot vedea lista de prețuri și se poate calcula în altă valută?", "Lista orientativă cu toate cele 101 servicii medicale este disponibilă pe pagina Prețuri, unde există și un convertor rapid în MDL, EUR, RON, USD și UAH."]
];

export default function QuestionsPage() {
 return <>
  <JsonLd data={breadcrumbJsonLd([
   { name: "Acasă", path: "/" },
   { name: "Întrebări", path: "/intrebari/" }
  ])} />
  <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} />
  <PageHeading><div><p>Acasă / Întrebări</p><h1>Întrebări frecvente</h1><p>Răspunsuri simple despre consultații, programări, prețuri, tratament individual, fizioterapie, neurologie și modul în care lucrăm la Revimed PLUS+.</p></div></PageHeading>
  <ContentSection narrow>
   <ReadingCard>
    <h2>Pe scurt</h2>
    <p>Revimed PLUS+ activează de peste 20 de ani în Chișinău. Dr. Igor Revenco are peste 35 de ani de experiență. Tratamentul se alege individual, iar pacientul este informat și își dă acordul pentru planul propus.</p>
    <div className="rm-quick-links-bar">
     <Link href="/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">Dr. Igor Revenco</Link>
     <Link href="/servicii/" className="btn btn-outline-primary btn-sm">Servicii</Link>
     <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Prețuri</Link>
     <Link href="/contact/" className="btn btn-primary btn-sm">Programare & Contact</Link>
    </div>
   </ReadingCard>
   {faqs.map(([question, answer]) => <Question key={question} title={question}><p>{answer}</p></Question>)}
  </ContentSection>
 </>;
}
