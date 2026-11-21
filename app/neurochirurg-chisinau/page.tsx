import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurochirurg-chisinau",
 localized: false,
 title: "Neurochirurg Chișinău (Ciocana) — Evaluare RMN & Hernie de Disc",
 description:
  "Consultație la medic neurochirurg în Chișinău — Dr. Igor Revenco (doctor în neurochirurgie, membru EANS, 35+ ani experiență). Evaluare RMN/CT hernie de disc, sciatică și tratament conservator."
});

const faqs = [
 {
  q: "Trebuie să vin cu RMN-ul pe CD sau ajunge foaia cu concluzia?",
  a: "Aduceți obligatoriu imaginile RMN/CT pe CD sau film. Neurochirurgul analizează direct secțiunile imagistice în corelație cu examenul neurologic clinic."
 },
 {
  q: "Se poate trata hernia de disc fără operație?",
  a: "Da, în numeroase cazuri fără deficit motor sever, tratamentul conservator țintit și fizioterapia medicală oferă ameliorare stabilă fără intervenție chirurgicală."
 }
];

export default function NeurochirurgChisinauPage() {
 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: "Acasă", path: "/" },
     { name: "Servicii", path: "/servicii/" },
     { name: "Neurochirurg Chișinău", path: "/neurochirurg-chisinau/" }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "MedicalWebPage",
     name: "Neurochirurg Chișinău — Dr. Igor Revenco | Revimed PLUS+",
     url: absoluteUrl("/neurochirurg-chisinau/"),
     about: { "@id": `${siteUrl}/#medical-clinic` },
     reviewedBy: { "@id": `${siteUrl}/dr-igor-revenco/#physician` }
    }}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
     }))
    }}
   />
   <PageHeading>
    <div>
     <p><Link href="/">Acasă</Link> / Neurochirurg Chișinău</p>
     <h1>Neurochirurg Chișinău — Evaluare Hernie de Disc &amp; Coloană</h1>
     <p>
      Opinie neurochirurgicală obiectivă și analiză directă a imaginilor RMN/CT cu Dr. Igor
      Revenco — doctor în neurochirurgie (USMF) și membru al Asociației Europene de Neurochirurgie
      (EANS).
     </p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <h2>Patologii evaluate la consultația de neurochirurgie</h2>
     <ul>
      <li>Hernie de disc lombară, cervicală și toracală, protruzii discale;</li>
      <li>Sciatică, dureri radiculare care coboară pe picior sau braț;</li>
      <li>Stenoză de canal spinal și compresii nervoase cu amorțeli sau slăbiciune;</li>
      <li>A doua opinie neurochirurgicală: tratament conservator vs. indicație chirurgicală;</li>
      <li>Monitorizare și recuperare medicală după intervenții pe coloană.</li>
     </ul>

     <h2>Tratament conservator și fizioterapie în aceeași clinică</h2>
     <p>
      Atunci când operația nu este necesară, pacientul poate începe direct în clinica Revimed PLUS+
      (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2) programul personalizat de recuperare cu
      Amplipuls SMT, electroforeză medicamentoasă, terapie infraroșie Solux și neurostimulare.
     </p>

     <h2>Întrebări frecvente — Neurochirurg Chișinău</h2>
     {faqs.map((f) => (
      <details key={f.q} open style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}

     <div className="rm-quick-links-bar">
      <Link href="/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">Profil Dr. Igor Revenco</Link>
      <Link href="/neurolog-chisinau/" className="btn btn-outline-primary btn-sm">Neurolog Chișinău</Link>
      <Link href="/fizioterapie-chisinau/" className="btn btn-outline-primary btn-sm">Fizioterapie Chișinău</Link>
      <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Prețuri</Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">Programare: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
