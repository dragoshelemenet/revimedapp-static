import Link from "next/link";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import FaqInteractive, { type FaqEntry } from "@/components/FaqInteractive";
import PageHeading from "@/components/PageHeading";
import { JsonLd, breadcrumbJsonLd, makeMetadata } from "@/lib/seo";
import { RO_CLINICAL_PAGES } from "@/lib/topicClusterLinks";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/intrebari",
 localized: true,
 title: "Întrebări frecvente | Revimed PLUS+",
 description:
  "Întrebări frecvente despre consultații, programări, prețuri, tratament individual, fizioterapie, neurologie, neurochirurgie și neuropediatrie la Revimed PLUS+ Chișinău."
});

const faqs: FaqEntry[] = [
 {
  id: "ce-medic",
  category: "consultatii",
  question: "Trebuie să știu exact la ce medic să merg?",
  answer:
   "Nu neapărat. Mulți pacienți vin cu simptome amestecate: dureri de cap, amețeli, amorțeli, dureri cervicale, lombare, oboseală sau tensiune nervoasă. Medicul discută cazul și stabilește ce direcție are sens."
 },
 {
  id: "tratament-individual",
  category: "consultatii",
  question: "Tratamentul este același pentru toți pacienții?",
  answer:
   "Nu. Tratamentul se alege individual. Contează simptomele, vârsta, istoricul medical, stilul de viață, reacțiile la tratamente anterioare și preferințele pacientului."
 },
 {
  id: "varianta-blanda",
  category: "consultatii",
  question: "Pot alege o variantă mai blândă sau mai naturistă?",
  answer:
   "Dacă situația permite și este sigur pentru pacient, da. Medicul poate lua în calcul metode mai blânde, fizioterapie, recuperare, proceduri sau recomandări de regim. În unele cazuri medicamentele sau investigațiile sunt necesare."
 },
 {
  id: "acord-pacient",
  category: "consultatii",
  question: "Totul se face cu acordul pacientului?",
  answer:
   "Da. Planul trebuie explicat clar. Pacientul trebuie să înțeleagă ce se propune, de ce se propune și ce alternative există. Tratamentul se face cu acordul pacientului."
 },
 {
  id: "urgente-simptome",
  category: "consultatii",
  question: "Când este important să nu amân consultația?",
  answer:
   "Dacă apar slăbiciune bruscă, tulburări de vorbire, asimetrie facială, pierderea stării de conștiență, durere puternică apărută brusc, amorțeli accentuate sau probleme de mers, este importantă evaluarea medicală rapidă."
 },
 {
  id: "ce-acte-aduc",
  category: "consultatii",
  question: "Ce documente sau analize este bine să aduc la prima consultație?",
  answer:
   "Dacă aveți investigații anterioare (RMN, CT, radiografii, EEG, analize de sânge, extrase medicale sau lista medicamentelor luate recent), luați-le cu dumneavoastră: ajută medicul să vadă tabloul complet fără a repeta investigații inutile."
 },
 {
  id: "programare-orar",
  category: "programari",
  question: "Cum mă pot programa la consultație și care este programul de lucru?",
  answer:
   "Programările se fac telefonic la 022 60 50 60 sau +373 79 422 908. Clinica activează de luni până vineri, între 09:00 și 15:00."
 },
 {
  id: "preturi-valute",
  category: "programari",
  question: "Unde pot vedea lista de prețuri și se poate calcula în altă valută?",
  answer:
   "Lista orientativă cu toate cele 96 servicii medicale este disponibilă pe pagina Prețuri, unde există căutare instant și convertor rapid în MDL, EUR, RON, USD și UAH. Prețurile pot fi actualizate la recepție."
 },
 {
  id: "adresa-transport",
  category: "programari",
  question: "Unde se află Centrul Medical Revimed PLUS+ și cum ajung cu transportul public?",
  answer:
   "Clinica se află în Chișinău, sectorul Ciocana, pe Str. Mircea cel Bătrân 13/2, MD-2044, cu acces direct pe bd. Mircea cel Bătrân: troleibuzele 12, 13, 23, 24, 26, autobuzele 5, 23 și microbuzele 113, 191. Harta interactivă este disponibilă pe pagina Contact."
 },
 {
  id: "specialitati-clinica",
  category: "clinica",
  question: "Cu ce se ocupă Revimed PLUS+?",
  answer:
   "Clinica este orientată spre neurologie, neurochirurgie, neuropediatrie, fizioterapie, recuperare medicală, diagnostic funcțional și proceduri medicale complementare cu aparataj modern (25 de dispozitive)."
 },
 {
  id: "neuropediatrie-copii",
  category: "clinica",
  question: "Se oferă consultații și pentru copii (neuropediatrie)?",
  answer:
   "Da. Dr. Igor Revenco are specializare și experiență clinică de peste 35 de ani în neurologie, neurochirurgie și neurologie pediatrică, fiind medic de categorie superioară și membru EANS."
 },
 {
  id: "limbi-vorbite",
  category: "clinica",
  question: "În ce limbi au loc consultațiile la Revimed PLUS+?",
  answer:
   "Consultațiile și comunicarea cu pacienții pot avea loc în română, rusă, engleză și ucraineană."
 }
];

export default function QuestionsPage() {
 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: "Acasă", path: "/" },
     { name: "Întrebări", path: "/intrebari/" }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
     }))
    }}
   />
   <PageHeading>
    <div>
     <p>Acasă / Întrebări</p>
     <h1>Întrebări frecvente</h1>
     <p>
      Răspunsuri clare despre consultații, programări, prețuri, tratament individual, fizioterapie,
      neurologie, neurochirurgie și modul în care lucrăm la Revimed PLUS+.
     </p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <aside className="rm-citable-summary" style={{ marginBottom: 18 }}>
     <div className="rm-citable-summary-head">
      <span className="rm-citable-pill">Ghid Pacient & FAQ Oficial · Revimed PLUS+ Chișinău</span>
      <span className="rm-citable-date">12 Întrebări esențiale · Tarife 2026</span>
     </div>
     <p style={{ margin: 0 }}>
      Întrebări frecvente și răspunsuri clinice oficiale pentru pacienții Centrului Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2, Luni - Vineri 09:00 - 15:00): consultația primară de neurologie, neurochirurgie sau neuropediatrie cu Dr. Igor Revenco (35+ ani experiență, doctor în neurochirurgie USMF, membru EANS) costă 500 MDL (control repetat: 400 MDL); diagnosticul funcțional include EEG 19 canale (1600 MDL), Cartografiere 3D (600 MDL), REG RHEOTEST (500 MDL), EHO-EG (350 MDL), ESG (350 MDL) și AMP 117 indici (1600 MDL); ședințele de fizioterapie pe 25 de aparate costă 100 MDL / 30 min. Programări: 022 60 50 60.
     </p>
    </aside>
    <ReadingCard>
     <h2>Pe scurt</h2>
     <p>
      Revimed PLUS+ activează de peste 20 de ani în Chișinău. Dr. Igor Revenco are peste 35 de ani
      de experiență. Tratamentul se alege individual, iar pacientul este informat și își dă acordul
      pentru planul propus.
     </p>
     <div className="rm-quick-links-bar">
      <Link href="/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">
       Dr. Igor Revenco
      </Link>
      <Link href="/servicii/" className="btn btn-outline-primary btn-sm">
       Servicii
      </Link>
      <Link href="/preturi/" className="btn btn-outline-primary btn-sm">
       Prețuri
      </Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">
       Programare & Contact
      </Link>
     </div>
    </ReadingCard>

    <FaqInteractive items={faqs} />

    <ReadingCard>
     <h2>Când este indicat consultul la Revimed PLUS+ vs. Când este necesară urgența 112</h2>
     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14, marginTop: 10 }}>
      <div style={{ padding: "14px 16px", borderRadius: 14, background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
       <strong style={{ display: "block", color: "#065f46", marginBottom: 6 }}>✓ Potrivit pentru ambulatoriul Revimed PLUS+</strong>
       <p style={{ margin: 0, fontSize: "0.93rem" }}>
        Dureri de spate, cervicalgie, sciatică și hernii/protruzii discale fără paralizie acută; migrene, cefalee, amețeli, vertij și tinitus; tulburări de somn, anxietate, distonie neurovegetativă; evaluări neuropediatrice (întârziere de vorbire, ticuri, ADHD, EEG copii); a doua opinie neurochirurgicală și recuperare post-AVC sau post-operatorie.
       </p>
      </div>
      <div style={{ padding: "14px 16px", borderRadius: 14, background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.25)" }}>
       <strong style={{ display: "block", color: "#991b1b", marginBottom: 6 }}>⚠ Urgență medicală spitalicească (Apelați 112)</strong>
       <p style={{ margin: 0, fontSize: "0.93rem" }}>
        Slăbiciune sau paralizie instalată brusc pe o jumătate a corpului, asimetrie facială, tulburare bruscă de vorbire (semne FAST de AVC acut), pierderea conștienței, criză convulsivă activă, traumatism cranian sever recent sau sindrom coadă de cal cu retenție acută de urină.
       </p>
      </div>
     </div>
    </ReadingCard>

    <ReadingCard>
     <h2>Ghiduri clinice și consultații frecvente în Chișinău</h2>
     <div className="rm-quick-links-bar" style={{ marginTop: 10 }}>
      {RO_CLINICAL_PAGES.slice(0, 24).map((cp) => (
       <Link key={cp.href} href={cp.href} className="btn btn-outline-primary btn-sm">
        {cp.label}
       </Link>
      ))}
      <Link href="/utilaj/" className="btn btn-outline-primary btn-sm">Aparate Medicale (25)</Link>
      <Link href="/blog/" className="btn btn-outline-primary btn-sm">Articole Medicale (132)</Link>
      <Link href="/aplicatii/" className="btn btn-outline-primary btn-sm">Teste Interactive (11)</Link>
     </div>
    </ReadingCard>

    <div className="sr-only" aria-hidden="true">
     {faqs.map((f) => (
      <section key={f.id}>
       <h3>{f.question}</h3>
       <p>{f.answer}</p>
      </section>
     ))}
    </div>
   </ContentSection>
  </>
 );
}
