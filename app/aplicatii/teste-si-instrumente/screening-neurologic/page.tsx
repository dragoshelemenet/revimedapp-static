export const metadata = {
  title: "Screening neurologic rapid",
  description: "Instrument educațional pentru simptome neurologice și identificarea semnalelor de alarmă."
};

export default function NeuroScreeningPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Teste și Instrumente / Screening neurologic</p>
          <h1>Screening neurologic rapid</h1>
          <p className="lead">Răspunde la întrebări pentru o orientare educațională.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="card">
            <div className="question"><label><input type="checkbox" className="redFlag" /> Slăbiciune bruscă pe o parte a corpului</label></div>
            <div className="question"><label><input type="checkbox" className="redFlag" /> Tulburare bruscă de vorbire sau vedere</label></div>
            <div className="question"><label><input type="checkbox" className="redFlag" /> Cefalee bruscă, foarte intensă</label></div>
            <div className="question"><label><input type="checkbox" className="normalFlag" /> Amorțeli sau furnicături repetate</label></div>
            <div className="question"><label><input type="checkbox" className="normalFlag" /> Amețeli, dureri cervicale sau lombare</label></div>
            <button className="btn" id="screenBtn">Verifică</button>
            <div className="result" id="screenResult"></div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        document.getElementById("screenBtn").addEventListener("click", function(){
          const red = document.querySelectorAll(".redFlag:checked").length;
          const normal = document.querySelectorAll(".normalFlag:checked").length;
          const box = document.getElementById("screenResult");
          box.style.display = "block";
          if(red > 0){
            box.className = "result danger";
            box.innerHTML = "<h2>Semnale de alarmă</h2><p>Solicită asistență medicală urgentă sau sună serviciul de urgență.</p>";
          } else if(normal > 0) {
            box.className = "result ok";
            box.innerHTML = "<h2>Este recomandată o consultație</h2><p>Programează o evaluare medicală pentru clarificarea simptomelor.</p>";
          } else {
            box.className = "result ok";
            box.innerHTML = "<h2>Fără semnale marcate</h2><p>Monitorizează starea. Pentru simptome persistente, consultă medicul.</p>";
          }
        });
      ` }} />
    </>
  );
}
