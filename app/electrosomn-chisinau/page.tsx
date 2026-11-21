import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/electrosomn-chisinau",
 localized: false,
 title: "Electrosomn & Transair TES Chișinău — Insomnie, Stres & Migrene",
 description:
  "Terapie prin Electrosomn (Electrosomn-3, 4T, 5) și stimulare transcraniană Transair TES în Chișinău la Revimed PLUS+. Proceduri blânde pentru insomnie, stres, migrene și distonie."
});

const faqs = [
 {
  q: "Este dureroasă procedura de Electrosomn sau Transair TES?",
  a: "Nu. Impulsurile electrice sunt de intensitate foarte mică și joasă frecvență, percepute ca o senzație blândă și relaxantă sub supraveghere medicală."
 },
 {
  q: "Câte ședințe de Electrosomn sunt recomandate?",
  a: "De regulă un curs cuprinde 5–10 ședințe stabilite individual de medic după evaluarea clinică."
 }
];

export default function ElectrosomnChisinauPage() {
 return (
  <>
   <JsonLd data={breadcrumbJsonLd([{ name: "Acasă", path: "/" }, { name: "Utilaj", path: "/utilaj/" }, { name: "Electrosomn Chișinău", path: "/electrosomn-chisinau/" }])} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalWebPage",
     datePublished: "2026-11-21",
     dateModified: "2026-11-21",
     lastReviewed: "2026-11-21", name: "Electrosomn și Transair TES Chișinău — Revimed PLUS+", url: absoluteUrl("/electrosomn-chisinau/"), about: { "@id": `${siteUrl}/#medical-clinic` }, reviewedBy: { "@id": `${siteUrl}/dr-igor-revenco/#physician` } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "VideoObject",
     name: "Terapia Electrosomn în Chișinău (150 MDL) — Tratament Insomnie, Stres & Migrene | Revimed PLUS+",
     description: "Prezentarea aparatului fizioterapeutic Electrosomn-5 (ES-10-5) la Centrul Medical Revimed PLUS+ din Chișinău (Ciocana): indicații, cum decurge ședința, Dr. Igor Revenco și prețuri 2026.",
     thumbnailUrl: absoluteUrl("/images/equipment/electrosomn-5-es-10-5.webp"),
     uploadDate: "2026-11-21T20:43:00+02:00",
     duration: "PT2M4S",
     contentUrl: "https://www.youtube.com/watch?v=6GGtiONz4pE",
     embedUrl: "https://www.youtube.com/embed/6GGtiONz4pE",
     publisher: { "@id": `${siteUrl}/#medical-clinic` }
    }}
   />
   <PageHeading>
    <div>
     <p><Link href="/">Acasă</Link> / Electrosomn Chișinău</p>
     <h1>Electrosomn &amp; Transair TES în Chișinău — Terapie Blândă pentru Somn și Stres</h1>
     <p>Proceduri neinvazive de neurostimulare și relaxare a sistemului nervos central cu aparataj clinic dedicat (Electrosomn-3/4T/5, Transair, Bi-LENAR, MDM).</p>
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
      <p style={{ margin: 0 }}>Terapia Electrosomn la Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2) costă 150 MDL/oră și se efectuează pe aparate medicale dedicate (Electrosomn-4T, Electrosomn-5, Transair TES, Bi-LENAR) după evaluare neurologică (500 MDL) cu Dr. Igor Revenco. Procedura este neinvazivă și recomandată pentru insomnie, stres cronic, migrene și distonie neurovegetativă. Programări: 022 60 50 60.</p>
     </aside>
     <h2>Prezentare video — Aparatul Electrosomn-5 la Revimed PLUS+ Chișinău</h2>
     <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 18, overflow: "hidden", marginBottom: 22, border: "1px solid rgba(11, 143, 216, 0.22)" }}>
      <iframe
       src="https://www.youtube.com/embed/6GGtiONz4pE"
       title="Terapia Electrosomn în Chișinău (150 MDL) — Revimed PLUS+"
       loading="lazy"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowFullScreen
       style={{ width: "100%", height: "100%", border: 0 }}
      />
     </div>
     <h2>Indicații frecvente pentru Electrosomn și stimulare transcraniană</h2>
     <ul>
      <li>Insomnie funcțională, adormire dificilă și somn superficial;</li>
      <li>Stres cronic, suprasolicitare nervoasă și epuizare (burnout);</li>
      <li>Migrene, cefalee de tensiune și distonie neurovegetativă;</li>
      <li>Recuperare neurologică blândă în completarea planului stabilit de medic.</li>
     </ul>
     <h2>Întrebări frecvente — Electrosomn Chișinău</h2>
     {faqs.map((f) => (
      <details key={f.q} open style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}
     <div className="rm-quick-links-bar">
      <Link href="/utilaj/electrosomn-3/" className="btn btn-outline-primary btn-sm">Electrosomn-3</Link>
      <Link href="/utilaj/transair-01p-transair-05/" className="btn btn-outline-primary btn-sm">Transair TES</Link>
      <Link href="/fizioterapie-chisinau/" className="btn btn-outline-primary btn-sm">Fizioterapie Chișinău</Link>
      <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Prețuri</Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">Programare: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
