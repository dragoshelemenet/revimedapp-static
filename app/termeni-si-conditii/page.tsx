export const metadata = {
  title: "Termeni și Condiții",
  description: "Termeni și condiții pentru utilizarea site-ului Revimed PLUS+."
};

export default function TermsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Termeni și Condiții</p>
          <h1>Termeni și Condiții</h1>
          <p className="lead">Reguli generale pentru utilizarea site-ului și a instrumentelor educaționale Revimed PLUS+.</p>
        </div>
      </section>

      <section className="rmSection legalSection">
        <article className="rmShell legalCard">
          <h2>1. Informații generale</h2>
          <p>
            Site-ul Revimed PLUS+ oferă informații generale despre servicii medicale, contact, prețuri,
            galerie, articole de blog și instrumente educaționale pentru pacienți.
          </p>

          <h2>2. Nu înlocuiește consultația medicală</h2>
          <p>
            Informațiile de pe site, inclusiv testele, aplicațiile, recomandările educaționale,
            conținutul despre fitoterapie, respirație, Ayurveda sau screening, nu înlocuiesc consultația
            cu medicul, diagnosticul medical, tratamentul sau recomandările personalizate ale unui specialist.
          </p>
          <p>
            Pentru orice simptom, tratament, doză, plantă, supliment, procedură sau decizie medicală,
            consultarea cu medicul este obligatorie.
          </p>

          <h2>3. Utilizare pe propriul risc</h2>
          <p>
            Orice acțiune realizată pe baza informațiilor educaționale de pe site, fără consult medical,
            se face pe propriul risc al utilizatorului. Revimed PLUS+ nu recomandă automedicația.
          </p>

          <h2>4. Fitoterapie și suplimente</h2>
          <p>
            Orice mențiune despre plante, suplimente, doze orientative sau protocoale educaționale are
            scop informativ. Pot exista contraindicații, interacțiuni medicamentoase sau riscuri pentru
            persoane cu boli cronice, sarcină, alăptare, tratamente anticoagulante, antidiabetice,
            tiroidiene, sedative, hepatice, renale sau alte tratamente.
          </p>

          <h2>5. Prețuri și informații</h2>
          <p>
            Prețurile și informațiile afișate pot fi actualizate. Pentru confirmare, programare și detalii
            exacte, contactați direct centrul medical.
          </p>

          <h2>6. Drepturi de autor</h2>
          <p>
            Textele, imaginile, structura site-ului și elementele vizuale aparțin Revimed PLUS+ sau sunt
            utilizate în scop de prezentare a centrului. Copierea neautorizată nu este permisă.
          </p>

          <h2>7. Contact</h2>
          <p>
            Pentru întrebări despre site sau servicii, utilizați pagina de contact.
          </p>
        </article>
      </section>
    </>
  );
}
