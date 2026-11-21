import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/fizioterapie-chisinau",
 localized: false,
 title: "Fizioterapie Chișinău (Ciocana) — 25 Aparate Recuperare Medicală",
 description:
  "Fizioterapie și recuperare medicală în Chișinău (Ciocana) la Revimed PLUS+: 25 aparate (Electrosomn, Transair, Amplipuls SMT, Electroforeză, MDM, Solux) pentru dureri de spate și neurologie."
});

const faqs = [
 {
  q: "Ce aparate de fizioterapie aveți disponibile la Revimed PLUS+ Chișinău?",
  a: "Dispunem de 25 de aparate medicale: Amplipuls-4/5/6 (curenți SMT), electroforeză medicamentoasă, Electrosomn-3/4T/5, Transair-03/04/05 (TES), LENAR/Bi-LENAR, MDM-K/101/2000, Lampă Solux, Spectr-LC, Kandadzia LQX-2000A și DETOX Spa Bio."
 },
 {
  q: "Este necesară consultația medicului înainte de fizioterapie?",
  a: "Da. Medicul stabilește exact procedurile, intensitatea și numărul de ședințe (de obicei 5–10) în funcție de diagnostic și pentru a exclude contraindicațiile."
 }
];

export default function FizioterapieChisinauPage() {
 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: "Acasă", path: "/" },
     { name: "Servicii", path: "/servicii/" },
     { name: "Fizioterapie Chișinău", path: "/fizioterapie-chisinau/" }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "MedicalWebPage",
     name: "Fizioterapie și Recuperare Medicală Chișinău — Revimed PLUS+",
     url: absoluteUrl("/fizioterapie-chisinau/"),
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
     <p><Link href="/">Acasă</Link> / Fizioterapie Chișinău</p>
     <h1>Fizioterapie și Recuperare Medicală Chișinău (Ciocana)</h1>
     <p>
      Programe individualizate de fizioterapie, electroterapie și neurostimulare cu 25 de aparate
      medicale sub supravegherea Dr. Igor Revenco.
     </p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <h2>Principalele proceduri de fizioterapie și recuperare</h2>
     <ul>
      <li><strong>Amplipulsterapie (Amplipuls-4/5/6, SMT)</strong> — dureri lombare, cervicale, sciatică, contracturi musculare;</li>
      <li><strong>Electroforeză medicamentoasă</strong> — administrare locală neinvazivă antiinflamatoare și analgezică;</li>
      <li><strong>Electrosomn &amp; Transair TES</strong> — insomnie, migrene, stres cronic, distonie neurovegetativă;</li>
      <li><strong>Bi-LENAR &amp; MDM-2000</strong> — neurostimulare funcțională și modulare mezodiencefalică;</li>
      <li><strong>Lampă Solux &amp; Spectr-LC</strong> — proceduri termice și fototerapie infraroșie.</li>
     </ul>

     <h2>Întrebări frecvente — Fizioterapie Chișinău</h2>
     {faqs.map((f) => (
      <details key={f.q} open style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}

     <div className="rm-quick-links-bar">
      <Link href="/utilaj/" className="btn btn-outline-primary btn-sm">Vezi toate cele 25 utilaje</Link>
      <Link href="/neurolog-chisinau/" className="btn btn-outline-primary btn-sm">Neurolog Chișinău</Link>
      <Link href="/neurochirurg-chisinau/" className="btn btn-outline-primary btn-sm">Neurochirurg Chișinău</Link>
      <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Prețuri</Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">Programare: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
