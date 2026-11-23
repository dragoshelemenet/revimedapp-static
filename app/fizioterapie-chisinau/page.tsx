import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/fizioterapie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/fizioterapie-chisinau/", ru: "/ru/fizioterapiya-kishinev/", "x-default": "/fizioterapie-chisinau/" },
 title: "Fizioterapie Chișinău (150 MDL) — 25 Aparate Medicale | Revimed PLUS+",
 description:
  "Fizioterapie și recuperare medicală în Chișinău (Ciocana) — 150 MDL/ședință pe 25 aparate medicale: Electrosomn, Transair TES, Amplipuls, Electroforeză, masaj (200 MDL). 022 60 50 60."
});

const faqs = [
 {
  q: "Cât costă o ședință de fizioterapie în Chișinău la Revimed PLUS+?",
  a: "O ședință de fizioterapie (30 min), Electrosomn, Amplipuls (SMT) sau Electroforeză costă 150 MDL — un curs de 5 ședințe costă 750 MDL, iar 10 ședințe 1500 MDL. Masajul terapeutic (60 min) costă 200 MDL, iar tratamentul combinat electroterapie + kinetoterapie 250 MDL/oră."
 },
 {
  q: "Câte aparate de fizioterapie aveți în clinică?",
  a: "Clinica dispune de 25 de aparate medicale de fizioterapie, electroterapie, neurostimulare și diagnostic funcțional (Electrosomn-3/4T/5, Transair TES, Bi-LENAR, Amplipuls-4/5/6, Electroforeză, MDM-101/2000/K, Lampa Solux, vibromasaj Kang Da Jia)."
 },
 {
  q: "Pot veni la fizioterapie cu recomandare de la alt medic?",
  a: "Da. Puteți efectua procedurile prescrise de medicul dumneavoastră curant sau puteți programa o evaluare inițială cu Dr. Igor Revenco (500 MDL neurolog / 500 MDL neurochirurg) pentru stabilirea protocolului optim."
 },
 {
  q: "Este eficientă fizioterapia în hernia de disc și sciatică?",
  a: "Da. În majoritatea herniilor de disc fără deficit motor sever, combinația dintre Amplipuls (SMT), electroforeză antiinflamatoare, masaj terapeutic adaptat și kinetoterapie reduce durerea și inflamația radiculară fără operație."
 },
 {
  q: "Câte ședințe durează un curs obișnuit de fizioterapie?",
  a: "În funcție de diagnostic și vechimea simptomelor, un curs standard cuprinde între 5 și 10 ședințe, efectuate zilnic sau la două zile, în intervalul Luni–Vineri, 09:00–15:00."
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
     datePublished: "2026-11-21",
     dateModified: "2026-11-22",
     lastReviewed: "2026-11-22",
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
     <h1>Fizioterapie &amp; Recuperare Medicală în Chișinău (25 Aparate)</h1>
     <p>
      Electroterapie, neurostimulare (Electrosomn, Transair TES, Bi-LENAR), curenți Amplipuls (SMT),
      electroforeză medicamentoasă, masaj terapeutic și kinetoterapie sub supraveghere medicală în Ciocana.
     </p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <div className="rm-trust-banner">
      <div className="rm-trust-banner-meta">
       <strong>25 Aparate Medicale</strong> · Coordonare Dr. Igor Revenco (35+ ani) · Luni–Vineri 09:00–15:00 · Ciocana
      </div>
      <div className="rm-trust-banner-actions">
       <a href="tel:022605060" className="btn btn-primary btn-sm">Sună: 022 60 50 60</a>
       <a href="https://wa.me/37379422908" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-whatsapp-soft">WhatsApp</a>
       <Link href="/utilaj/" className="btn btn-outline-primary btn-sm">Vezi cele 25 aparate</Link>
      </div>
     </div>

     <aside className="rm-citable-summary" aria-label="Pe scurt — date cheie și prețuri fizioterapie">
      <div className="rm-citable-summary-head">
       <span className="rm-citable-pill">Pe scurt — prețuri oficiale 2026</span>
       <span className="rm-citable-date">Actualizat medical: Noiembrie 2026</span>
      </div>
      <p style={{ margin: 0 }}>
       La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), o ședință de{" "}
       <strong>fizioterapie (30 min), Electrosomn, Amplipuls sau Electroforeză costă 150 MDL</strong>, fizioterapia manuală
       (45 min) <strong>180 MDL</strong>, masajul terapeutic (60 min) <strong>200 MDL</strong>, iar tratamentul combinat
       electroterapie + kinetoterapie <strong>250 MDL/oră</strong>. Clinica dispune de 25 de aparate medicale. Programări:{" "}
       <strong>022 60 50 60</strong>.
      </p>
     </aside>

     <h2>Cost transparent pe curs (2026) — de 2–3× mai accesibil decât media pieței</h2>
     <div className="rm-price-advantage-grid">
      <div className="rm-price-adv-card">
       <span className="rm-adv-tag">Ședință individuală</span>
       <strong>150 MDL</strong>
       <span>Fizioterapie 30 min · Electrosomn · Amplipuls · Electroforeză (față de 300–550 MDL media pieței)</span>
      </div>
      <div className="rm-price-adv-card">
       <span className="rm-adv-tag">Curs 5 ședințe</span>
       <strong>750 MDL</strong>
       <span>Ideal pentru episoade acute de durere lombară, cervicală, stres sau insomnie</span>
      </div>
      <div className="rm-price-adv-card">
       <span className="rm-adv-tag">Curs 10 ședințe</span>
       <strong>1500 MDL</strong>
       <span>Protocol complet de recuperare (hernie de disc, post-AVC, nevralgii) · Masaj 60 min: 200 MDL</span>
      </div>
     </div>

     <h2>Cele 3 direcții majore de fizioterapie la Revimed PLUS+</h2>
     <p>
      Baza noastră de <Link href="/utilaj/">25 de aparate medicale</Link> acoperă atât recuperarea coloanei și a articulațiilor,
      cât și echilibrarea sistemului nervos fără sedative:
     </p>
     <ul>
      <li>
       <strong>1. Dureri de spate, hernie de disc, sciatică și articulații</strong>: curenți sinusoidali modulați{" "}
       <Link href="/electroforeza-amplipuls-chisinau/">Amplipuls-4, Amplipuls-5 și Amplipuls-6 (SMT)</Link>,{" "}
       <strong>electroforeză medicamentoasă</strong> (introducere locală antiinflamatoare fără agresarea stomacului),{" "}
       <strong>Lampa Solux</strong> (infraroșu), <Link href="/masaj-terapeutic-chisinau/">masaj terapeutic (200 MDL)</Link> și{" "}
       <Link href="/kinetoterapie-chisinau/">kinetoterapie (250 MDL/oră)</Link>.
      </li>
      <li>
       <strong>2. Somn, stres cronic, migrene și distonie neurovegetativă</strong>:{" "}
       <Link href="/electrosomn-chisinau/">Electrosomn-3, Electrosomn-4T și Electrosomn-5</Link>, stimulare transcraniană{" "}
       <strong>Transair TES</strong> (stimularea endorfinelor naturale), <strong>Bi-LENAR</strong> și terapie mezodiencefalică{" "}
       <strong>MDM-101 / MDM-2000</strong>.
      </li>
      <li>
       <strong>3. Recuperare neurologică, nevralgii și circulație</strong>: protocoale combinate post-AVC, neuropatii periferice,
       vibromasaj terapeutic (Kang Da Jia), pat cu pietre de jad și terapii balneare (masaj cu nămol 300 MDL).
      </li>
     </ul>

     <h2>Lista rapidă de proceduri și prețuri 2026</h2>
     <div className="rm-decision-table-wrap">
      <table className="rm-decision-table">
       <thead>
        <tr>
         <th>Procedură de recuperare</th>
         <th>Preț (MDL)</th>
         <th>Indicație principală</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td><strong>Ședință fizioterapie (30 min)</strong></td>
         <td><strong>150 MDL</strong></td>
         <td>Dureri musculare, articulare, coloană</td>
        </tr>
        <tr>
         <td><strong>Electrosomn / Amplipuls / Electroforeză</strong></td>
         <td><strong>150 MDL/oră</strong></td>
         <td>Insomnie, stres, hernie de disc, nevralgii</td>
        </tr>
        <tr>
         <td>Fizioterapie manuală (45 min)</td>
         <td>180 MDL</td>
         <td>Mobilizare articulară și decontracturare</td>
        </tr>
        <tr>
         <td><strong>Masaj terapeutic (60 min)</strong></td>
         <td><strong>200 MDL</strong></td>
         <td>Osteocondroză, contracturi cervicale/lombare</td>
        </tr>
        <tr>
         <td>Electroterapie + Kinetoterapie combinată</td>
         <td>250 MDL/oră</td>
         <td>Recuperare completă coloană &amp; post-AVC</td>
        </tr>
        <tr>
         <td>Masaj cu nămol terapeutic (60 min)</td>
         <td>300 MDL</td>
         <td>Artroze, dureri articulare cronice</td>
        </tr>
       </tbody>
      </table>
     </div>

     <h2>Indicații și contraindicații generale ale fizioterapiei</h2>
     <p>
      Procedurile fizioterapeutice sunt sigure și foarte eficiente atunci când sunt alese corect de medic. Înainte de începerea oricărui curs, verificăm întotdeauna absența contraindicațiilor:
     </p>
     <ul>
      <li><strong>Indicații principale:</strong> hernie și protruzie de disc, sciatică, osteocondroză cervicală și lombară, nevralgii (inclusiv trigemen) și plexite, periartrită scapulo-humerală („umăr înghețat”), artroze sacroiliace, pinten calcanean, insomnie, migrene, stres cronic, recuperare post-AVC și după operații de coloană.</li>
      <li><strong>Contraindicații generale (când se amână sau se adaptează procedura):</strong> stimulator cardiac (pacemaker) sau implanturi electronice active (pentru curenți și magnetoterapie), stări febrile și infecții acute, tumori maligne active, hemoragii sau tromboflebită acută, insuficiență cardiacă/respiratorie decompensată, epilepsie necontrolată, leziuni cutanate deschise pe zona electrozilor și sarcină (pentru procedurile pe zona abdomino-pelvină).</li>
     </ul>

     <h2>Întrebări frecvente — Fizioterapie Chișinău</h2>
     {faqs.map((f) => (
      <details className="rm-faq-glass-item">
       <summary>{f.q}</summary>
       <p>{f.a}</p>
      </details>
     ))}

     <div className="rm-quick-links-bar" style={{ marginTop: 20 }}>
      <Link href="/utilaj/" className="btn btn-outline-primary btn-sm">Catalog 25 aparate</Link>
      <Link href="/electrosomn-chisinau/" className="btn btn-outline-primary btn-sm">Electrosomn (150 MDL)</Link>
      <Link href="/electroforeza-amplipuls-chisinau/" className="btn btn-outline-primary btn-sm">Electroforeză &amp; Amplipuls</Link>
      <Link href="/masaj-terapeutic-chisinau/" className="btn btn-outline-primary btn-sm">Masaj (200 MDL)</Link>
      <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Prețuri (96 servicii)</Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">Programare: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
