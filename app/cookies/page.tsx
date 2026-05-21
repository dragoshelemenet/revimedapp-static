export const metadata = {
 title: "Cookies și Confidențialitate",
 description: "Politica de cookies și confidențialitate pentru site-ul Revimed PLUS+."
};

export default function CookiesPage() {
 return (
  <>
   <section className="pageHero forceImageHero innerHeroImage">
    <div className="rmShell">
     <p className="crumb">Acasă / Cookies</p>
     <h1>Cookies și Confidențialitate</h1>
     <p className="lead">Informații despre cookies, date personale și confidențialitate.</p>
    </div>
   </section>

   <section className="rmSection legalSection">
    <article className="rmShell legalCard">
     <h2>1. Date personale</h2>
     <p>
      Site-ul Revimed PLUS+ nu colectează și nu prelucrează date personale prin formulare publice
      în versiunea actuală. Nu există conturi publice pentru pacienți și nu se solicită introducerea
      datelor personale direct pe site.
     </p>

     <h2>2. Google Analytics și tracking</h2>
     <p>
      Site-ul nu este conectat la Google Analytics, Meta Pixel sau alte instrumente de tracking
      publicitar în versiunea actuală.
     </p>

     <h2>3. Cookies</h2>
     <p>
      Site-ul nu folosește cookies de marketing sau analiză. Pot exista doar cookies tehnice necesare
      pentru funcționarea administrării interne, de exemplu sesiunea de autentificare pentru panoul
      de administrare. Acestea nu sunt folosite pentru publicitate sau profilare.
     </p>

     <h2>4. Conținut extern</h2>
     <p>
      Site-ul poate afișa conținut extern precum hărți Google Maps sau video-uri YouTube. Aceste
      servicii aparțin unor terți și pot aplica propriile politici de confidențialitate atunci când
      utilizatorul interacționează cu ele.
     </p>

     <h2>5. Admin</h2>
     <p>
      Panoul de administrare este destinat doar persoanelor autorizate. Datele folosite pentru login
      sunt strict pentru acces intern la administrarea site-ului.
     </p>

     <h2>6. Modificări</h2>
     <p>
      Această pagină poate fi actualizată dacă site-ul va introduce formulare, programări online,
      analytics sau alte funcționalități care implică prelucrarea datelor.
     </p>

     <h2>7. Responsabilitate medicală</h2>
     <p>
      Conținutul site-ului este educațional. Orice informație citită sau folosită de pe site este utilizată
      pe propriul risc. Site-ul nu înlocuiește consultația medicală și nu oferă diagnostic sau tratament online.
     </p>

     <h2>8. Contact</h2>
     <p>
      Pentru întrebări despre confidențialitate sau cookies, contactați Centrul Medical Revimed PLUS+.
     </p>
    </article>
   </section>
  </>
 );
}
