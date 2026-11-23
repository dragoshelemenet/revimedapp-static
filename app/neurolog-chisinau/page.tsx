import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurolog-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-chisinau/", ru: "/ru/nevrolog-kishinev/", "x-default": "/neurolog-chisinau/" },
 title: "Neurolog Chișinău (500 MDL) — Adulți & Copii | Dr. Igor Revenco",
 description:
  "Consultație la medic neurolog în Chișinău (Ciocana) — Dr. Igor Revenco, 35+ ani experiență, adulți și neuropediatrie (500 MDL). EEG, REG, AMP, fizioterapie. Programări: 022 60 50 60."
});

const faqs = [
 {
  q: "Cât costă o consultație la medic neurolog în Chișinău la Revimed PLUS+?",
  a: "Consultația primară la medic neurolog (adulți sau copii) costă 500 MDL, iar consultația repetată 400 MDL. Consultația la medic neurochirurg (a doua opinie pe RMN/CT pentru hernie de disc) costă 300 MDL."
 },
 {
  q: "Unde pot face o consultație la neurolog în Chișinău fără cozi lungi?",
  a: "La Centrul Medical Revimed PLUS+ din sectorul Ciocana (Str. Mircea cel Bătrân 13/2, MD-2044, Chișinău). Programările se fac direct telefonic la 022 60 50 60 sau WhatsApp +373 79 422 908, de luni până vineri, 09:00–15:00, fără bilet de trimitere."
 },
 {
  q: "Consultați atât adulți, cât și copii (neuropediatru Chișinău)?",
  a: "Da. Dr. Igor Revenco are peste 35 de ani de practică clinică în neurologie pentru adulți, neurochirurgie și neurologie pediatrică (neuropediatrie)."
 },
 {
  q: "Ce investigații neurologice pot face pe loc în aceeași zi?",
  a: "În clinică sunt disponibile electroencefalografia (EEG — 1600 MDL), cartografierea cerebrală (600 MDL), reoencefalografia vasculară (REG — 500 MDL), electrospondilografia (800 MDL), analizatorul neinvaziv Biopromin AMP-Tech (117 indici — 1000 MDL) și 25 de aparate de fizioterapie (150 MDL/ședință)."
 },
 {
  q: "Ce trebuie să aduc la prima consultație neurologică?",
  a: "Dacă aveți deja investigații anterioare (RMN, CT pe disc/film, EEG, Doppler vase cerebrale, analize de sânge sau lista medicamentelor luate în ultimele luni), aduceți-le cu dumneavoastră. Dacă nu aveți investigații, medicul stabilește exact ce este necesar după examinarea clinică."
 },
 {
  q: "Este ușor de ajuns din Rîșcani, Botanica, Buiucani sau Centru?",
  a: "Da. Clinica se află pe bd. Mircea cel Bătrân 13/2 (Ciocana), la 7–10 minute de Rîșcani (prin str. Alecu Russo) și 12–15 minute de Centru, cu acces direct la troleibuze, autobuze și locuri de parcare în apropiere."
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
     datePublished: "2026-11-21",
     dateModified: "2026-11-22",
     lastReviewed: "2026-11-22",
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
      Evaluare neurologică completă în Chișinău cu Dr. Igor Revenco — medic de categorie
      superioară cu 35+ ani experiență clinică, diagnostic funcțional pe loc (EEG, REG, AMP)
      și 25 de aparate de fizioterapie în aceeași clinică.
     </p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <div className="rm-trust-banner">
      <div className="rm-trust-banner-meta">
       <strong>Dr. Igor Revenco</strong> · Categorie superioară · Doctor în neurochirurgie USMF · Membru EANS · 35+ ani
      </div>
      <div className="rm-trust-banner-actions">
       <a href="tel:022605060" className="btn btn-primary btn-sm">Sună: 022 60 50 60</a>
       <a href="https://wa.me/37379422908" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-whatsapp-soft">WhatsApp</a>
       <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Toate prețurile (101)</Link>
      </div>
     </div>

     <div className="rm-kpi-strip" aria-label="Indicatori cheie neurologie Chișinău">
      <div className="rm-kpi-card">
       <strong>500 / 400 MDL</strong>
       <span>Neurolog primară / repetată</span>
      </div>
      <div className="rm-kpi-card">
       <strong>300 MDL</strong>
       <span>Neurochirurg (RMN/CT)</span>
      </div>
      <div className="rm-kpi-card">
       <strong>150 MDL · 25</strong>
       <span>Fizioterapie · aparate medicale</span>
      </div>
     </div>

     <aside className="rm-citable-summary" aria-label="Pe scurt — date cheie și prețuri">
      <div className="rm-citable-summary-head">
       <span className="rm-citable-pill">Pe scurt — date cheie și prețuri 2026</span>
       <span className="rm-citable-date">Actualizat medical: Noiembrie 2026</span>
      </div>
      <p style={{ margin: 0 }}>
       La Centrul Medical Revimed PLUS+ din Chișinău (sectorul Ciocana, Str. Mircea cel Bătrân 13/2),
       consultația primară la medic neurolog costă <strong>500 MDL</strong>, iar consultația repetată{" "}
       <strong>400 MDL</strong>. Evaluarea este realizată de <strong>Dr. Igor Revenco</strong> (35+ ani experiență,
       categorie superioară, membru EANS), cu diagnostic funcțional pe loc (EEG 1600 MDL, REG 500 MDL, AMP 1000 MDL)
       și fizioterapie (150 MDL/ședință) în aceeași clinică. Programări fără trimitere: <strong>022 60 50 60</strong>.
      </p>
     </aside>

     <h2>Când este recomandat consultul la medicul neurolog</h2>
     <p>
      Multe afecțiuni neurologice debutează discret — cu dureri de cap repetate, amorțeli ocazionale sau tulburări de somn —
      dar devin dificil de tratat dacă sunt amânate luni de zile. Evaluarea timpurie la un neurolog cu experiență clinică
      scurtează semnificativ durata recuperării și previne cronicizarea durerii.
     </p>
     <ul>
      <li><strong>Cefalee și migrene</strong>: dureri de cap frecvente, migrene cu sau fără aură, cefalee de tensiune și nevralgii faciale (trigemen);</li>
      <li><strong>Amețeli și tulburări de echilibru</strong>: vertij, senzație de instabilitate la mers, zgomote în urechi (tinitus) și tulburări de circulație cerebrală;</li>
      <li><strong>Dureri de coloană și compresii nervoase</strong>: dureri cervicale, lombare, sciatică, hernie de disc, protuzii și osteocondroză;</li>
      <li><strong>Simptome senzitive și motorii</strong>: amorțeli, furnicături sau arsuri în mâini și picioare, slăbiciune musculară, polineuropatii;</li>
      <li><strong>Somn, stres și sistem nervos vegetativ</strong>: insomnie cronică, epuizare nervoasă (burnout), distonie neurovegetativă și anxietate somatică;</li>
      <li><strong>Epilepsie, sincope și recuperare</strong>: pierderi de cunoștință, convulsii, recuperare după AVC sau traumatisme craniene și <Link href="/neuropediatru-chisinau/">neurologie pediatrică</Link>.</li>
     </ul>

     <h2>Cum decurge pas cu pas consultația cu Dr. Igor Revenco</h2>
     <p>
      Spre deosebire de consultațiile grăbite de 10 minute, evaluarea neurologică la Revimed PLUS+ este structurată astfel
      încât să pleci cu un diagnostic clar și un plan concret, pe care îl înțelegi pe deplin:
     </p>
     <ol>
      <li><strong>Anamneza detaliată și analiza dosarului</strong>: medicul ascultă istoricul simptomelor și examinează personal imaginile RMN/CT (de pe CD sau film), EEG sau analizele anterioare.</li>
      <li><strong>Examenul neurologic complet</strong>: verificarea reflexelor, sensibilității, forței musculare, echilibrului, coordonării și nervilor cranieni.</li>
      <li><strong>Diagnostic funcțional țintit (doar ce este necesar)</strong>: dacă este util, poți efectua pe loc EEG, reoencefalografie (REG), cartografiere cerebrală sau screening neinvaziv AMP (117 indici).</li>
      <li><strong>Plan personalizat de tratament</strong>: schemă medicamentoasă precisă combinată, după caz, cu proceduri de fizioterapie (Electrosomn, Transair TES, Amplipuls, Electroforeză, masaj terapeutic sau kinetoterapie).</li>
     </ol>

     <h2>Tarife transparente 2026 — Neurologie &amp; Investigații pe loc</h2>
     <div className="rm-decision-table-wrap">
      <table className="rm-decision-table">
       <thead>
        <tr>
         <th>Serviciu medical</th>
         <th>Preț oficial (MDL)</th>
         <th>Detalii / Utilizare</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td><strong>Consultație primară neurolog</strong></td>
         <td><strong>500 MDL</strong></td>
         <td>Adulți &amp; copii (Dr. Igor Revenco, 35+ ani)</td>
        </tr>
        <tr>
         <td>Consultație repetată neurolog</td>
         <td>400 MDL</td>
         <td>Control evoluție și ajustare protocol</td>
        </tr>
        <tr>
         <td><strong>Consultație neurochirurg</strong></td>
         <td><strong>300 MDL</strong></td>
         <td>Evaluare RMN/CT, hernie de disc, a doua opinie</td>
        </tr>
        <tr>
         <td><Link href="/eeg-chisinau/">Electroencefalografie (EEG)</Link></td>
         <td>1600 MDL</td>
         <td>Activitate electrică cerebrală (adulți &amp; copii)</td>
        </tr>
        <tr>
         <td><Link href="/diagnostic-amp-chisinau/">Analizator neinvaziv AMP</Link></td>
         <td>1000 MDL</td>
         <td>117 indici clinici fără recoltare de sânge</td>
        </tr>
        <tr>
         <td><Link href="/reoencefalografie-chisinau/">Reoencefalografie (REG)</Link></td>
         <td>500 MDL</td>
         <td>Evaluarea circulației cerebrale (RHEOTEST)</td>
        </tr>
        <tr>
         <td><Link href="/fizioterapie-chisinau/">Fizioterapie / Electrosomn / Amplipuls</Link></td>
         <td>150 MDL</td>
         <td>25 aparate medicale în clinică</td>
        </tr>
       </tbody>
      </table>
     </div>

     <h2>Neurolog vs. Neurochirurg — pe care să îl alegi?</h2>
     <p>
      Avantajul major la Revimed PLUS+ este că <strong>Dr. Igor Revenco are dublă competență — neurologie și neurochirurgie</strong>{" "}
      (doctor în neurochirurgie USMF, membru al Asociației Europene de Neurochirurgie — EANS). Nu trebuie să faci drumuri între
      doi medici cu păreri contradictorii: dacă ai o <Link href="/hernie-de-disc-chisinau/">hernie de disc</Link> sau o stenoză de canal
      vertebral, primești într-o singură consultație atât evaluarea conservatoare (tratament + fizioterapie), cât și verdictul
      obiectiv dacă există sau nu indicație reală de operație.
     </p>

     <h2>Acces rapid din toate sectoarele Chișinăului</h2>
     <p>
      Centrul Medical Revimed PLUS+ este situat în sectorul <strong>Ciocana, Str. Mircea cel Bătrân 13/2 (MD-2044)</strong>.
      Pacienții din <strong>Rîșcani</strong> ajung în 7–10 minute pe str. Alecu Russo, iar cei din <strong>Centru, Botanica și Buiucani</strong>{" "}
      au legături directe cu troleibuze și autobuze, evitând aglomerația și listele lungi de așteptare din spitalele mari.
      Programul de lucru este <strong>Luni–Vineri, 09:00–15:00</strong>.
     </p>

     <h2>Întrebări frecvente — Neurolog Chișinău</h2>
     {faqs.map((f) => (
      <details className="rm-faq-glass-item">
       <summary>{f.q}</summary>
       <p>{f.a}</p>
      </details>
     ))}

     <div className="rm-quick-links-bar" style={{ marginTop: 20 }}>
      <Link href="/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">Dr. Igor Revenco</Link>
      <Link href="/neurochirurg-chisinau/" className="btn btn-outline-primary btn-sm">Neurochirurg (500 MDL)</Link>
      <Link href="/fizioterapie-chisinau/" className="btn btn-outline-primary btn-sm">Fizioterapie (150 MDL)</Link>
      <Link href="/eeg-chisinau/" className="btn btn-outline-primary btn-sm">EEG Chișinău (1600 MDL)</Link>
      <Link href="/preturi/" className="btn btn-outline-primary btn-sm">Prețuri (96 servicii)</Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">Programare: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
