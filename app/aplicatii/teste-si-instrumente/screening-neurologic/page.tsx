"use client";

import { useMemo, useRef, useState } from "react";

type Question = {
  id: string;
  category: "red" | "motor" | "sensory" | "pain" | "balance" | "cognitive" | "spine" | "autonomic";
  points: number;
  text: string;
  helper: string;
};

const questions: Question[] = [
  {
    id: "face_arm_speech",
    category: "red",
    points: 100,
    text: "Slăbiciune bruscă pe o parte a feței, brațului sau piciorului",
    helper: "Poate fi semn de accident vascular cerebral."
  },
  {
    id: "speech",
    category: "red",
    points: 100,
    text: "Tulburare bruscă de vorbire, confuzie sau imposibilitatea de a formula cuvinte",
    helper: "Semn de alarmă neurologic major."
  },
  {
    id: "vision",
    category: "red",
    points: 100,
    text: "Pierderea bruscă a vederii sau vedere dublă instalată brusc",
    helper: "Necesită evaluare urgentă."
  },
  {
    id: "worst_headache",
    category: "red",
    points: 100,
    text: "Cea mai puternică durere de cap din viață, apărută brusc",
    helper: "Poate indica o urgență neurologică."
  },
  {
    id: "seizure",
    category: "red",
    points: 100,
    text: "Criză convulsivă, pierdere de conștiență sau episod de leșin inexplicabil",
    helper: "Necesită evaluare medicală rapidă."
  },
  {
    id: "fever_neck",
    category: "red",
    points: 100,
    text: "Durere de cap cu febră, gât înțepenit, erupții sau confuzie",
    helper: "Poate fi infecție sau inflamație severă."
  },
  {
    id: "trauma",
    category: "red",
    points: 100,
    text: "Simptome neurologice după traumatism la cap, cădere sau accident",
    helper: "Necesită excluderea complicațiilor."
  },
  {
    id: "bladder_saddle",
    category: "red",
    points: 100,
    text: "Pierdere de control urinar/fecal sau amorțeală în zona intimă",
    helper: "Poate fi compresie severă de nervi."
  },

  {
    id: "weakness_progressive",
    category: "motor",
    points: 4,
    text: "Slăbiciune progresivă în brațe sau picioare",
    helper: "Important dacă se agravează în zile/săptămâni."
  },
  {
    id: "drop_objects",
    category: "motor",
    points: 3,
    text: "Scăpați obiecte din mână sau aveți dificultăți la nasturi/scris",
    helper: "Poate sugera afectare motorie sau nervoasă."
  },
  {
    id: "foot_drop",
    category: "motor",
    points: 4,
    text: "Piciorul se agață de podea, mers dificil sau senzație de picior căzut",
    helper: "Poate sugera afectare de nerv/rădăcină nervoasă."
  },

  {
    id: "numbness",
    category: "sensory",
    points: 3,
    text: "Amorțeli, furnicături sau arsură în mâini/picioare",
    helper: "Poate fi neuropatie, radiculopatie sau altă cauză neurologică."
  },
  {
    id: "one_side_numb",
    category: "sensory",
    points: 4,
    text: "Amorțeală predominant pe o singură parte a corpului",
    helper: "Necesită atenție, mai ales dacă este nouă."
  },
  {
    id: "night_paresthesia",
    category: "sensory",
    points: 2,
    text: "Furnicături noaptea sau la poziții fixe",
    helper: "Poate apărea în compresii nervoase."
  },

  {
    id: "headache_recurrent",
    category: "pain",
    points: 3,
    text: "Dureri de cap repetate, mai intense sau diferite față de trecut",
    helper: "Contează schimbarea caracterului durerii."
  },
  {
    id: "neck_arm",
    category: "spine",
    points: 3,
    text: "Durere cervicală cu iradiere în braț",
    helper: "Poate sugera afectare cervicală/radiculară."
  },
  {
    id: "lowback_leg",
    category: "spine",
    points: 3,
    text: "Durere lombară cu iradiere în picior",
    helper: "Poate sugera sciatică/radiculopatie."
  },
  {
    id: "walking_pain",
    category: "spine",
    points: 3,
    text: "Durere sau slăbiciune la mers care se ameliorează la aplecare/șezut",
    helper: "Poate fi asociată cu stenoză spinală."
  },

  {
    id: "dizziness",
    category: "balance",
    points: 2,
    text: "Amețeli, instabilitate sau senzație că vă pierdeți echilibrul",
    helper: "Poate avea cauze neurologice, vestibulare sau circulatorii."
  },
  {
    id: "falls",
    category: "balance",
    points: 4,
    text: "Căderi repetate sau mers nesigur",
    helper: "Necesită evaluare dacă se repetă."
  },
  {
    id: "tremor",
    category: "balance",
    points: 2,
    text: "Tremor, rigiditate sau încetinirea mișcărilor",
    helper: "Poate necesita evaluare neurologică."
  },

  {
    id: "memory",
    category: "cognitive",
    points: 2,
    text: "Probleme de memorie, atenție sau orientare care afectează viața zilnică",
    helper: "Mai important dacă familia observă schimbarea."
  },
  {
    id: "mood_sleep",
    category: "cognitive",
    points: 1,
    text: "Somn foarte slab, anxietate, oboseală mentală sau iritabilitate persistentă",
    helper: "Poate agrava simptomele neurologice."
  },

  {
    id: "sweating_pulse",
    category: "autonomic",
    points: 2,
    text: "Palpitații, transpirații, intoleranță la căldură/frig sau tensiune instabilă",
    helper: "Poate implica sistemul nervos vegetativ sau alte cauze."
  },
  {
    id: "digestive_neuro",
    category: "autonomic",
    points: 1,
    text: "Constipație, probleme digestive sau urinare apărute împreună cu simptome neurologice",
    helper: "Contează asocierea cu amorțeli/slăbiciune/durere."
  }
];

const categoryLabels: Record<Question["category"], string> = {
  red: "Semnale de alarmă",
  motor: "Motor",
  sensory: "Sensibilitate",
  pain: "Cefalee / durere",
  balance: "Echilibru / mișcare",
  cognitive: "Cognitiv / somn",
  spine: "Coloană / radicular",
  autonomic: "Sistem vegetativ"
};

export default function NeuroScreeningPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [age, setAge] = useState("");
  const [duration, setDuration] = useState("zile");
  const [progression, setProgression] = useState("stabil");
  const [show, setShow] = useState(false);
  const resultRef = useRef<HTMLElement | null>(null);

  const result = useMemo(() => {
    let total = 0;
    let redFlags = 0;

    const categories: Record<string, number> = {};

    for (const q of questions) {
      const value = answers[q.id] || 0;
      if (!value) continue;

      if (q.category === "red") {
        redFlags += 1;
      } else {
        const weighted = q.points * value;
        total += weighted;
        categories[q.category] = (categories[q.category] || 0) + weighted;
      }
    }

    if (progression === "agravare") total += 4;
    if (duration === "ore") total += 4;
    if (duration === "luni") total += 1;

    const sortedCategories = Object.entries(categories).sort((a, b) => b[1] - a[1]);

    let level = "scăzut";
    let title = "Risc orientativ scăzut";
    let advice = "Monitorizați simptomele. Dacă persistă sau se agravează, programați o consultație.";
    let className = "low";

    if (redFlags > 0) {
      level = "urgent";
      title = "Semnale de alarmă neurologică";
      advice = "Solicitați asistență medicală urgentă sau sunați serviciul de urgență. Nu așteptați programare obișnuită.";
      className = "urgent";
    } else if (total >= 18) {
      level = "ridicat";
      title = "Risc orientativ ridicat";
      advice = "Este recomandată o consultație neurologică cât mai curând, mai ales dacă simptomele se agravează.";
      className = "high";
    } else if (total >= 8) {
      level = "moderat";
      title = "Risc orientativ moderat";
      advice = "Programați o evaluare medicală pentru clarificarea simptomelor și pașii următori.";
      className = "medium";
    }

    return { total, redFlags, sortedCategories, level, title, advice, className };
  }, [answers, duration, progression]);

  function setAnswer(id: string, value: number) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function generateResult() {
    setShow(true);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function reset() {
    setAnswers({});
    setAge("");
    setDuration("zile");
    setProgression("stabil");
    setShow(false);
  }

  const answered = Object.values(answers).filter(Boolean).length;

  return (
    <>
      <section className="pageHero neuroHero">
        <div className="rmShell">
          <p className="crumb">Teste și Instrumente / Screening neurologic</p>
          <h1>Screening Neurologic Revimed</h1>
          <p className="lead">
            Instrument educațional pentru orientarea simptomelor neurologice, semnale de alarmă și nivel de prioritate.
          </p>
        </div>
      </section>

      <section className="rmSection neuroScreenSection">
        <div className="rmShell neuroCleanLayout">
          <section className="neuroQuickTop">
            <div>
              <h2>Date rapide</h2>
              <p>Completează informațiile de bază, apoi răspunde la întrebări. Rezultatul apare la final.</p>
            </div>

            <div className="neuroQuickGrid">
              <label>
                Vârsta
                <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="ex: 45" />
              </label>

              <label>
                Simptome apărute de
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                  <option value="ore">Ore / brusc</option>
                  <option value="zile">Zile</option>
                  <option value="saptamani">Săptămâni</option>
                  <option value="luni">Luni sau mai mult</option>
                </select>
              </label>

              <label>
                Evoluție
                <select value={progression} onChange={(e) => setProgression(e.target.value)}>
                  <option value="stabil">Stabil</option>
                  <option value="agravare">Se agravează</option>
                  <option value="ameliorare">Se ameliorează</option>
                  <option value="fluctuant">Fluctuant</option>
                </select>
              </label>
            </div>

            <div className="medicalRiskBox cleanRiskBox">
              <b>Important</b>
              <p>
                Acest instrument nu pune diagnostic. Informațiile sunt educaționale și se folosesc pe propriul risc.
                Pentru simptome medicale, consultația cu medicul este obligatorie.
              </p>
            </div>
          </section>

          <main className="neuroMain">
            <div className="neuroIntro">
              <h2>Chestionar</h2>
              <p>
                Pentru fiecare simptom, alege intensitatea. Dacă ai semnale de alarmă, nu continua autoevaluarea:
                solicită ajutor medical urgent.
              </p>
            </div>

            <div className="neuroQuestions">
              {questions.map((q) => (
                <article className={q.category === "red" ? "neuroQuestion redFlagQ" : "neuroQuestion"} key={q.id}>
                  <div>
                    <span>{categoryLabels[q.category]}</span>
                    <h3>{q.text}</h3>
                    <p>{q.helper}</p>
                  </div>

                  <div className="answerScale">
                    <label>
                      <input
                        type="radio"
                        name={q.id}
                        checked={(answers[q.id] || 0) === 0}
                        onChange={() => setAnswer(q.id, 0)}
                      />
                      Nu
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={q.id}
                        checked={(answers[q.id] || 0) === 1}
                        onChange={() => setAnswer(q.id, 1)}
                      />
                      Ușor
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={q.id}
                        checked={(answers[q.id] || 0) === 2}
                        onChange={() => setAnswer(q.id, 2)}
                      />
                      Moderat
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={q.id}
                        checked={(answers[q.id] || 0) === 3}
                        onChange={() => setAnswer(q.id, 3)}
                      />
                      Sever
                    </label>
                  </div>
                </article>
              ))}
            </div>

            <div className="bottomGenerateBox">
              <button className="blueBtn" onClick={generateResult}>Generează rezultat</button>
              <button className="softBtn" onClick={reset}>Resetare</button>
              <p>Rezultatul apare imediat mai jos după apăsarea butonului.</p>
            </div>

            {show && (
              <section ref={resultRef} className={`neuroResult ${result.className}`}>
                <div className="resultTopLine">
                  <h2>{result.title}</h2>
                  <button className="softBtn printBtn" onClick={() => window.print()}>Tipărește rezultat</button>
                </div>
                <p className="scoreLine">
                  Scor: <b>{result.total}</b> · Semnale de alarmă: <b>{result.redFlags}</b> · Nivel: <b>{result.level}</b>
                </p>
                <p>{result.advice}</p>

                {result.sortedCategories.length > 0 && (
                  <>
                    <h3>Domenii predominante</h3>
                    <div className="categoryBars">
                      {result.sortedCategories.slice(0, 5).map(([cat, score]) => (
                        <div className="catBar" key={cat}>
                          <span>{categoryLabels[cat as Question["category"]]}</span>
                          <div><i style={{ width: `${Math.min(100, Number(score) * 6)}%` }} /></div>
                          <b>{score}</b>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <h3>Ce să pregătiți pentru consultație</h3>
                <ul>
                  <li>Când au început simptomele și cum evoluează.</li>
                  <li>Medicamentele actuale și bolile cunoscute.</li>
                  <li>Investigații anterioare: RMN, CT, EEG, EMG, analize.</li>
                  <li>Factori declanșatori: traumă, stres, efort, febră, infecție.</li>
                </ul>

                <div className="zeroLiability">
                  <b>Zero responsabilitate medicală:</b> Acest rezultat este educațional, nu este diagnostic, nu este tratament
                  și nu înlocuiește consultația cu medicul. Tot ce este citit sau folosit din această aplicație se face pe
                  propriul risc. Pentru orice simptom, consultarea cu medicul este obligatorie.
                </div>
              </section>
            )}
          </main>
        </div>
      </section>
    </>
  );
}
