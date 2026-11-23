import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neuropediatru-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/neuropediatru-chisinau/", ru: "/ru/detskiy-nevrolog-kishinev/", "x-default": "/neuropediatru-chisinau/" },
 title: "Neuropediatru Chișinău (Neurolog Copii) — Dr. Igor Revenco",
 description:
  "Consultație la neuropediatru (neurolog pentru copii) în Chișinău, Ciocana — Dr. Igor Revenco, 35+ ani experiență. Somn, vorbire, cefalee, ticuri, tonus și dezvoltare neurologică."
});

const faqs = [
 {
  q: "De la ce vârstă poate fi evaluat copilul la neuropediatru în Chișinău?",
  a: "Evaluările neuropediatrice acoperă atât copiii mici, cât și preșcolarii și adolescenții — pentru somn, dureri de cap, ticuri, vorbire, atenție, coordonare sau monitorizare după traumatisme."
 },
 {
  q: "Cum mă programez la neuropediatru la Revimed PLUS+ Ciocana?",
  a: "Sunați la 022 60 50 60 sau +373 79 422 908, de luni până vineri între 09:00 și 15:00. Adresa: Str. Mircea cel Bătrân 13/2, Chișinău."
 }
];

export default function NeuropediatruChisinauPage() {
 return (
  <>
   <JsonLd data={breadcrumbJsonLd([{ name: "Acasă", path: "/" }, { name: "Neuropediatru Chișinău", path: "/neuropediatru-chisinau/" }])} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalWebPage",
     datePublished: "2026-11-21",
     dateModified: "2026-11-21",
     lastReviewed: "2026-11-21", name: "Neuropediatru Chișinău — Revimed PLUS+", url: absoluteUrl("/neuropediatru-chisinau/"), about: { "@id": `${siteUrl}/#medical-clinic` }, reviewedBy: { "@id": `${siteUrl}/dr-igor-revenco/#physician` } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
   <PageHeading>
    <div>
     <p><Link href="/">Acasă</Link> / Neuropediatru Chișinău</p>
     <h1>Neuropediatru Chișinău — Consultații Neurologice pentru Copii</h1>
     <p>Evaluare blândă și individualizată de neurologie pediatrică cu Dr. Igor Revenco (35+ ani experiență clinică) în Chișinău, sectorul Ciocana.</p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <aside
      aria-label="Pe scurt — date cheie și prețuri"
      style={{
       padding: "14px 18px",
       marginBottom: 18,
       borderRadius: 16,
       background: "rgba(240, 248, 255, 0.85)",
       borderLeft: "4px solid #0b8fd8",
       fontSize: 14.5,
       lineHeight: 1.58,
       color: "#0b2545"
      }}
     >
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 6, fontSize: 12.5, fontWeight: 700, color: "#075f9e" }}>
       <span>Pe scurt — date cheie și prețuri</span>
       <span>Actualizat medical: Noiembrie 2026</span>
      </div>
      <p style={{ margin: 0 }}>La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația de neurologie pediatrică (neuropediatru) costă 500 MDL (repetată 400 MDL) și este realizată de Dr. Igor Revenco (35+ ani experiență). Sunt disponibile și investigații neinvazive (EEG 1600 MDL, AMP 1000 MDL) și proceduri blânde de fizioterapie (150 MDL). Programări: 022 60 50 60.</p>
     </aside>
     <h2>Când este util un consult la neuropediatru</h2>
     <ul>
      <li>Tulburări persistente de somn, treziri nocturne frecvente sau coșmaruri;</li>
      <li>Dureri de cap la copii și adolescenți, oboseală școlară accentuată;</li>
      <li>Întârzieri în dezvoltarea vorbirii, coordonării sau echilibrului;</li>
      <li>Ticuri motorii/vocale, clipit excesiv, anxietate sau dificultăți de concentrare;</li>
      <li>Monitorizare neurologică după traumatisme sau recomandări din partea pediatrului.</li>
     </ul>
     <h2>Întrebări frecvente — Neuropediatrie Chișinău</h2>
     {faqs.map((f) => (
      <details style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}
     <div className="rm-quick-links-bar">
      <Link href="/blog/ticuri-nervoase-hiperexcitabilitate-dezadaptare-scolara-copii-chisinau/" className="btn btn-outline-primary btn-sm">Ghid: Ticuri &amp; Dezadaptare Școlară</Link>
      <Link href="/blog/logonevroza-balbaiala-adhd-anxietate-copii-eeg-electrosomn-chisinau/" className="btn btn-outline-primary btn-sm">Ghid: Logonevroză &amp; ADHD</Link>
      <Link href="/eeg-chisinau/" className="btn btn-outline-primary btn-sm">EEG Copii (1600 MDL)</Link>
      <Link href="/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">Dr. Igor Revenco</Link>
      <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Prețuri</Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">Programare: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
