export const metadata = {
  title: "Galerie",
  description: "Galerie foto Revimed PLUS+."
};

export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Acasă / Galerie</p>
          <h1>Galerie</h1>
          <p className="lead">Spațiu dedicat imaginilor centrului medical.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid3">
          <div className="card"><div className="blogImage" /><h2>Cabinet medical</h2></div>
          <div className="card"><div className="blogImage" /><h2>Reabilitare</h2></div>
          <div className="card"><div className="blogImage" /><h2>Proceduri</h2></div>
        </div>
      </section>
    </>
  );
}
