import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/cookies",
 localized: false,
 title: "Cookies și Confidențialitate",
 description: "Politica de cookies și confidențialitate pentru site-ul Centrului Medical Revimed PLUS+ Chișinău."
});

export default function CookiesPage() {
 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: "Acasă", path: "/" },
     { name: "Cookies și Confidențialitate", path: "/cookies/" }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "WebPage",
     name: "Cookies și Confidențialitate",
     url: absoluteUrl("/cookies/"),
     publisher: { "@id": `${siteUrl}/#medical-clinic` }
    }}
   />
   <PageHeading>
    <div>
     <p className="crumb">Acasă / Cookies</p>
     <h1>Cookies și Confidențialitate</h1>
     <p className="lead">Informații transparente despre cookies, date personale și confidențialitate.</p>
    </div>
   </PageHeading>

   <section className="rmSection legalSection">
    <article className="rmShell legalCard" data-glass-card>
     <h2>1. Date personale</h2>
     <p>
      Site-ul Revimed PLUS+ nu colectează și nu prelucrează date personale prin formulare publice
      în versiunea actuală. Nu există conturi publice pentru pacienți și nu se solicită introducerea
      datelor personale direct pe site.
     </p>

     <h2>2. Google Analytics și tracking</h2>
     <p>
      Site-ul nu este conectat la Google Analytics, Meta Pixel sau alte instrumente de tracking
      publicitar. Navigarea rămâne privată, fără profilare comercială.
     </p>

     <h2>3. Cookies și preferințe locale</h2>
     <p>
      Site-ul nu folosește cookies de marketing sau analiză. Preferințele de afișare (precum selecția
      valutei pe pagina Prețuri sau starea elementelor interactive) funcționează exclusiv local în
      browserul dumneavoastră, fără a fi transmise către servere terțe.
     </p>

     <h2>4. Conținut extern</h2>
     <p>
      Site-ul poate afișa la cererea utilizatorului conținut extern precum hărți Google Maps sau
      video-uri YouTube. Aceste servicii aparțin unor terți și aplică propriile politici de
      confidențialitate atunci când alegeți să le deschideți.
     </p>

     <h2>5. Modificări</h2>
     <p>
      Această pagină poate fi actualizată dacă site-ul va introduce formulare, programări online
      sau alte funcționalități care implică prelucrarea datelor.
     </p>

     <h2>6. Responsabilitate medicală</h2>
     <p>
      Conținutul site-ului are rol informativ și educațional. Site-ul nu înlocuiește consultația
      medicală și nu oferă diagnostic sau tratament online.
     </p>

     <h2>7. Contact</h2>
     <p>
      Pentru întrebări despre confidențialitate sau cookies, contactați Centrul Medical Revimed PLUS+.
     </p>

     <div className="rm-quick-links-bar">
      <Link href="/termeni-si-conditii/" className="btn btn-outline-primary btn-sm">
       Termeni și Condiții
      </Link>
      <Link href="/intrebari/" className="btn btn-outline-primary btn-sm">
       Întrebări frecvente
      </Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">
       Contact
      </Link>
     </div>
    </article>
   </section>
  </>
 );
}
