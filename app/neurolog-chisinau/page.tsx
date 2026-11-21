import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurolog-chisinau",
 localized: false,
 title: "Neurolog Chișinău (Ciocana) — Adulți & Copii | Dr. Igor Revenco",
 description:
  "Consultație la medic neurolog în Chișinău (Ciocana) — Dr. Igor Revenco, 35+ ani experiență, adulți și neuropediatrie. Migrene, vertij, neuropatii, hernie de disc, insomnie. Programări: 022 60 50 60."
});

const faqs = [
 {
  q: "Unde pot face o consultație la neurolog în Chișinău fără cozi lungi?",
  a: "La Centrul Medical Revimed PLUS+ din sectorul Ciocana (Str. Mircea cel Bătrân 13/2, Chișinău), programările se fac direct telefonic la 022 60 50 60 sau +373 79 422 908, de luni până vineri, 09:00–15:00."
 },
 {
  q: "Consultați atât adulți, cât și copii (neuropediatru Chișinău)?",
  a: "Da. Dr. Igor Revenco are competență și peste 35 de ani de practică clinică în neurologie pentru adulți, neurochirurgie și neurologie pediatrică."
 },
 {
  q: "Ce investigații pot face pe loc în clinică?",
  a: "Pe lângă consultația neurologică, în clinică sunt disponibile reografia vasculară neinvazivă RHEOTEST, analizatorul spectral AMP și 25 de aparate de fizioterapie și neurostimulare."
 }
];

export default function NeurologChisinauPage() {
 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: "Acasă", path: "/" },
     { name: "Servicii", path: "/servicii/" },
     { name: "Neurolog Chișinău", path: "/neurolog-chisinau/" }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "MedicalWebPage",
     name: "Neurolog Chișinău — Centrul Medical Revimed PLUS+",
     url: absoluteUrl("/neurolog-chisinau/"),
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
     <p><Link href="/">Acasă</Link> / Neurolog Chișinău</p>
     <h1>Neurolog Chișinău — Consultații Neurologice Adulți &amp; Copii</h1>
     <p>
      Evaluare neurologică completă în Chișinău (Ciocana) cu Dr. Igor Revenco — medic de categorie
      superioară cu 35+ ani experiență clinică, diagnostic funcțional și recuperare medicală în
      aceeași clinică.
     </p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <h2>Când este recomandat consultul la medicul neurolog</h2>
     <ul>
      <li>Dureri de cap frecvente, migrene, cefalee de tensiune și nevralgii faciale;</li>
      <li>Amețeli, vertij, zgomote în urechi și tulburări de echilibru sau mers;</li>
      <li>Amorțeli, furnicături în mâini sau picioare, slăbiciune musculară și neuropatii;</li>
      <li>Dureri cervicale, lombare, sciatică și simptome asociate herniei de disc;</li>
      <li>Insomnie, stres cronic, distonie neurovegetativă și epuizare nervoasă;</li>
      <li>Recuperare după AVC, traumatisme și neurologie pediatrică (neuropediatrie).</li>
     </ul>

     <h2>Dr. Igor Revenco — 35+ ani experiență în neurologie și neurochirurgie</h2>
     <p>
      Fiecare pacient primește o evaluare atentă, corelarea simptomelor cu investigațiile existente
      (RMN, CT, Doppler, EEG) și un plan individualizat, explicat clar și aplicat cu acordul
      pacientului — combinând, după caz, tratamentul clasic cu fizioterapia și neurostimularea
      blândă (Electrosomn, Transair, Bi-LENAR, Amplipuls SMT).
     </p>

     <h2>Întrebări frecvente — Neurolog Chișinău</h2>
     {faqs.map((f) => (
      <details key={f.q} open style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}

     <div className="rm-quick-links-bar">
      <Link href="/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">Profil Dr. Igor Revenco</Link>
      <Link href="/neurochirurg-chisinau/" className="btn btn-outline-primary btn-sm">Neurochirurg Chișinău</Link>
      <Link href="/fizioterapie-chisinau/" className="btn btn-outline-primary btn-sm">Fizioterapie Chișinău</Link>
      <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Prețuri (101 servicii)</Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">Programare: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
