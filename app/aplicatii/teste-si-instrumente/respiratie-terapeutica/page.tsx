export const metadata = {
  title: "Respirație terapeutică ghidată",
  description: "Timer vizual pentru respirație ghidată, relaxare, somn, anxietate și reglarea sistemului nervos vegetativ."
};

export default function BreathingPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Teste și Instrumente / Respirație terapeutică</p>
          <h1>Respirație terapeutică ghidată</h1>
          <p className="lead">Inspiră când cercul crește, expiră când cercul scade.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="card breathBox">
            <label>Program</label>
            <select id="breathMode">
              <option value="4,2,6">Relaxare 4-2-6</option>
              <option value="4,4,4">Echilibru 4-4-4</option>
              <option value="3,2,5">Blând 3-2-5</option>
            </select>
            <div className="breathCircle" id="breathCircle">
              <span id="breathText">Start</span>
            </div>
            <p className="timer" id="breathTimer">00</p>
            <button className="btn" id="breathStart">Pornește</button>
            <p className="muted">Oprește exercițiul dacă apare disconfort, amețeală sau durere.</p>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        let active = false;
        const circle = document.getElementById("breathCircle");
        const text = document.getElementById("breathText");
        const timer = document.getElementById("breathTimer");
        const mode = document.getElementById("breathMode");
        const btn = document.getElementById("breathStart");

        function wait(ms){ return new Promise(r=>setTimeout(r,ms)); }
        async function phase(name, cls, sec){
          circle.className = "breathCircle " + cls;
          text.textContent = name;
          for(let i=sec;i>=1 && active;i--){
            timer.textContent = String(i).padStart(2,"0");
            await wait(1000);
          }
        }
        async function loop(){
          active = true;
          btn.textContent = "Oprește";
          while(active){
            const [a,b,c] = mode.value.split(",").map(Number);
            await phase("Inspiră", "inhale", a);
            await phase("Ține", "hold", b);
            await phase("Expiră", "exhale", c);
          }
          circle.className = "breathCircle";
          text.textContent = "Start";
          timer.textContent = "00";
          btn.textContent = "Pornește";
        }
        btn.addEventListener("click", () => active ? active = false : loop());
      ` }} />
    </>
  );
}
