import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/cookies",
 localized: true,
 title: "Cookies și Confidențialitate",
 description: "Politica de cookies și protecția datelor cu caracter personal conform Legii nr. 133/2011 pentru site-ul Centrului Medical Revimed PLUS+ Chișinău."
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
     speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".rm-citable-summary"] },
     publisher: { "@id": `${siteUrl}/#medical-clinic` }
    }}
   />
   <PageHeading>
    <div>
     <p className="crumb">Acasă / Cookies și Confidențialitate</p>
     <h1>Cookies și Confidențialitate</h1>
     <p className="lead">
      Informații transparente privind protecția datelor personale (Legea nr. 133/2011 RM), cookies și conținutul extern.
     </p>
    </div>
   </PageHeading>

   <section className="rmSection legalSection">
    <article className="rmShell legalCard" data-glass-card>
     <aside className="rm-citable-summary" style={{ marginBottom: 20 }}>
      <div className="rm-citable-summary-head">
       <span className="rm-citable-pill">Pe scurt · Confidențialitate &amp; Cookies Revimed PLUS+</span>
       <span className="rm-citable-date">Legea nr. 133/2011 RM · Zero tracking</span>
      </div>
      <p style={{ margin: 0 }}>
       Site-ul revimed.site (S.R.L. „REVIMED PLUS”, IDNO 1011600011964, Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2) este o platformă statică informativă fără Google Analytics, fără Meta Pixel și fără cookies de publicitate. Testele interactive rulează strict local în browser. Contact confidențialitate: 022 60 50 60.
      </p>
     </aside>
     <h2>1. Protecția datelor cu caracter personal (Legea nr. 133/2011)</h2>
     <p>
      Site-ul <strong>revimed.site</strong> este o platformă statică de prezentare și <strong>nu colectează, nu
      stochează și nu prelucrează date cu caracter personal</strong> prin formulare online, conturi de utilizator sau
      sisteme de programare automată. Răspunsurile introduse în testele educaționale din secțiunea Aplicații sunt
      calculate exclusiv local în browserul dumneavoastră și nu sunt transmise către niciun server.
     </p>
     <p>
      În cazul în care contactați Centrul Medical Revimed PLUS+ telefonic sau fizic la recepție, prelucrarea datelor
      dumneavoastră se realizează exclusiv în cadrul clinicii, în conformitate cu <strong>Legea nr. 133/2011 privind
      protecția datelor cu caracter personal</strong> a Republicii Moldova.
     </p>

     <h2>2. Consimțământ prealabil (Opt-In) pentru Analiză &amp; Campanii (Google / Meta)</h2>
     <p>
      În mod implicit, la accesarea site-ului, orice modul de analiză statistică sau măsurare a campaniilor publicitare
      (Google Analytics 4 / Google Consent Mode v2 / Meta Pixel) este <strong>dezactivat (denied)</strong>. Aceste
      module se activează exclusiv dacă apăsați explicit butonul <strong>„Acceptă”</strong> din bara de consimțământ.
      Dacă alegeți <strong>„Doar Necesare”</strong>, nu se încarcă niciun cookie de marketing sau statistică terță.
     </p>

     <h2>3. Stocare tehnică locală și cookies</h2>
     <p>
      Site-ul nu setează cookies proprii de marketing sau analiză. Preferințele tehnice de interfață (precum selecția
      valutei pe pagina Prețuri sau starea elementelor interactive) funcționează strict local pe dispozitivul
      dumneavoastră și pot fi șterse oricând din setările browserului.
     </p>

     <h2>4. Conținut extern (YouTube Privacy-Enhanced &amp; Google Maps)</h2>
     <p>
      Anumite pagini pot integra materiale video YouTube în modul de confidențialitate sporită
      (<code>youtube-nocookie.com</code>) sau linkuri către Google Maps
      și Facebook. La redarea unui video sau la accesarea resurselor externe, aceste platforme terțe pot aplica
      propriile politici de confidențialitate. Revimed PLUS+ nu controlează și nu își asumă răspunderea pentru
      prelucrările efectuate de terți.
     </p>

     <h2>5. Operatorul de date, drepturile utilizatorului și contact</h2>
     <p>
      Operatorul datelor prelucrate în cadrul activității medicale la sediul clinicii este <strong>S.R.L. „REVIMED PLUS”</strong>
      (IDNO <strong>1011600011964</strong>, mun. Chișinău, sect. Ciocana, bd. Mircea cel Bătrân nr. 13/2, administrator:
      Dr. Igor Revenco). Conform Legii nr. 133/2011, beneficiați de dreptul la informare, acces, intervenție, opoziție
      și ștergere în legătură cu datele prelucrate de clinică. Pentru solicitări privind confidențialitatea, ne puteți
      contacta la <strong>022 60 50 60</strong> sau direct la sediul clinicii.
     </p>

     <h2>6. Limitarea răspunderii medicale și actualizări</h2>
     <p>
      Conținutul site-ului are rol pur informativ și nu înlocuiește consultația medicală. Prezenta politică poate fi
      actualizată periodic fără notificare prealabilă.
     </p>

     <hr style={{ margin: "24px 0", opacity: 0.2 }} />

     <h2>Политика конфиденциальности и Cookies (RU)</h2>
     <p>
      Сайт <strong>revimed.site</strong> не собирает персональные данные через онлайн-формы, не использует Google
      Analytics, рекламные трекеры или маркетинговые cookies. Интерактивные тесты работают исключительно локально в
      вашем браузере. Встроенные видео используют режим повышенной конфиденциальности (<code>youtube-nocookie.com</code>).
      По вопросам защиты персональных данных (Закон РМ № 133/2011) обращайтесь по тел. <strong>022 60 50 60</strong>.
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
