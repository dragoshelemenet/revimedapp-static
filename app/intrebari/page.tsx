import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Întrebări frecvente | Revimed PLUS+",
  description: "Întrebări frecvente despre consultații, tratament individual, fizioterapie, neurologie, neurochirurgie și Revimed PLUS+ Chișinău.",
};

const faqs = [
  ["Trebuie să știu exact la ce medic să merg?", "Nu neapărat. Mulți pacienți vin cu simptome amestecate: dureri de cap, amețeli, amorțeli, dureri cervicale, lombare, oboseală sau tensiune nervoasă. Medicul discută cazul și stabilește ce direcție are sens."],
  ["Tratamentul este același pentru toți pacienții?", "Nu. Tratamentul se alege individual. Contează simptomele, vârsta, istoricul medical, stilul de viață, reacțiile la tratamente anterioare și preferințele pacientului."],
  ["Pot alege o variantă mai blândă sau mai naturistă?", "Dacă situația permite și este sigur pentru pacient, da. Medicul poate lua în calcul metode mai blânde, fizioterapie, recuperare, proceduri sau recomandări de regim. În unele cazuri medicamentele sau investigațiile sunt necesare."],
  ["Totul se face cu acordul pacientului?", "Da. Planul trebuie explicat clar. Pacientul trebuie să înțeleagă ce se propune, de ce se propune și ce alternative există. Tratamentul se face cu acordul pacientului."],
  ["Când este important să nu amân consultația?", "Dacă apar slăbiciune bruscă, tulburări de vorbire, asimetrie facială, pierderea stării de conștiență, durere puternică apărută brusc, amorțeli accentuate sau probleme de mers, este importantă evaluarea medicală rapidă."],
  ["Cu ce se ocupă Revimed PLUS+?", "Clinica este orientată spre neurologie, neurochirurgie, fizioterapie, recuperare, diagnostic funcțional și proceduri medicale complementare."],
];

export default function QuestionsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pageHero servicesNewHero">
          <div className="rmShell">
            <p className="breadcrumbs">Acasă / Întrebări</p>
            <h1>Întrebări frecvente</h1>
            <p>Răspunsuri simple despre consultații, tratament individual, fizioterapie, recuperare, neurologie, neurochirurgie și modul în care lucrăm la Revimed PLUS+.</p>
          </div>
        </section>

        <section className="rmSection servicesNewSection">
          <div className="rmShell">
            <article className="servicesNewDetailCard">
              <span className="servicesNewBadge">Revimed PLUS+</span>
              <h2>Pe scurt</h2>
              <p className="servicesNewLead">
                Revimed PLUS+ activează de peste 20 de ani în Chișinău. Dr. Igor Revenco are peste 35 de ani de experiență. Tratamentul se alege individual, iar pacientul este informat și își dă acordul pentru planul propus.
              </p>
            </article>

            <div className="servicesNewGrid" style={{ marginTop: 24 }}>
              {faqs.map(([title, text]) => (
                <article className="servicesNewCard" key={title}>
                  <span className="servicesNewBadge">Întrebare</span>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
