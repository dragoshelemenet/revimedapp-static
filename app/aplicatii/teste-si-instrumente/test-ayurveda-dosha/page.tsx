export const metadata = {
  title: "Test Ayurveda Dosha",
  description: "Test educațional Vata, Pitta și Kapha cu scor automat și recomandări generale pentru pacient."
};

const questions = [
  ["Sunt slab(ă), cu constituție fină, iau greu în greutate.", "v"],
  ["Am constituție medie, bine definită, cu masă musculară bună.", "p"],
  ["Am constituție robustă, mă îngraș ușor și rețin lichide.", "k"],
  ["Am mâinile și picioarele reci, nu suport frigul și vântul.", "v"],
  ["Îmi este adesea cald și prefer răcoarea.", "p"],
  ["Digestia mea este lentă, cu greutate după masă.", "k"],
  ["Somnul meu este ușor, cu treziri frecvente.", "v"],
  ["Mă enervez repede și pot deveni critic(ă).", "p"],
  ["Sunt calm(ă), stabil(ă), dar uneori letargic(ă).", "k"],
  ["Învăț repede, dar uit repede.", "v"],
  ["Învăț moderat și țin minte detalii.", "p"],
  ["Învăț încet, dar am memorie de lungă durată.", "k"]
];

export default function DoshaPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Teste și Instrumente / Ayurveda Dosha</p>
          <h1>Test Ayurveda Dosha</h1>
          <p className="lead">Chestionar educațional cu scor Vata, Pitta și Kapha.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="card">
            <div id="doshaTest">
              {questions.map(([text, type], index) => (
                <div className="question" key={index}>
                  <p><b>{index + 1}.</b> {text}</p>
                  <label><input type="radio" name={`q${index}`} value={type} /> Da</label>
                  <label><input type="radio" name={`q${index}`} value="none" /> Nu</label>
                </div>
              ))}
              <button className="btn" id="calcDosha" type="button">Calculează</button>
              <div className="result" id="doshaResult"></div>
            </div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        document.getElementById("calcDosha").addEventListener("click", function(){
          const scores = {v:0,p:0,k:0};
          document.querySelectorAll("#doshaTest input:checked").forEach(function(input){
            if(scores[input.value] !== undefined) scores[input.value]++;
          });
          const names = {v:"Vata",p:"Pitta",k:"Kapha"};
          const top = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
          const box = document.getElementById("doshaResult");
          box.style.display = "block";
          box.innerHTML = "<h2>Rezultat dominant: " + names[top[0]] + "</h2><p>Scor Vata: " + scores.v + " · Pitta: " + scores.p + " · Kapha: " + scores.k + "</p><p>Acest rezultat este educațional și nu înlocuiește consultația medicală.</p>";
        });
      ` }} />
    </>
  );
}
