"use client";

import { useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Cat = "red" | "motor" | "sensory" | "pain" | "balance" | "cognitive" | "spine" | "autonomic";
type Q = { id: string; cat: Cat; points: number; ro: string; en: string; ru: string; ua: string };

const questions: Q[] = [
  { id: "face", cat: "red", points: 100, ro: "Slăbiciune bruscă pe o parte a feței, brațului sau piciorului", en: "Sudden weakness on one side of the face, arm or leg", ru: "Внезапная слабость с одной стороны лица, руки или ноги", ua: "Раптова слабкість з одного боку обличчя, руки або ноги" },
  { id: "speech", cat: "red", points: 100, ro: "Tulburare bruscă de vorbire, confuzie sau vedere dublă", en: "Sudden speech difficulty, confusion or double vision", ru: "Внезапное нарушение речи, спутанность или двоение", ua: "Раптове порушення мовлення, сплутаність або двоїння" },
  { id: "headache", cat: "red", points: 100, ro: "Cea mai puternică durere de cap din viață, apărută brusc", en: "The worst headache of your life, appearing suddenly", ru: "Самая сильная головная боль в жизни, возникшая внезапно", ua: "Найсильніший головний біль у житті, що з’явився раптово" },
  { id: "seizure", cat: "red", points: 100, ro: "Criză convulsivă, pierdere de conștiență sau leșin inexplicabil", en: "Seizure, loss of consciousness or unexplained fainting", ru: "Судороги, потеря сознания или необъяснимый обморок", ua: "Судоми, втрата свідомості або незрозуміла непритомність" },
  { id: "bladder", cat: "red", points: 100, ro: "Pierdere de control urinar/fecal sau amorțeală în zona intimă", en: "Loss of bladder/bowel control or numbness in the intimate area", ru: "Потеря контроля мочи/стула или онемение в интимной зоне", ua: "Втрата контролю сечі/калу або оніміння в інтимній зоні" },

  { id: "weakness", cat: "motor", points: 4, ro: "Slăbiciune progresivă în brațe sau picioare", en: "Progressive weakness in arms or legs", ru: "Прогрессирующая слабость в руках или ногах", ua: "Прогресуюча слабкість у руках або ногах" },
  { id: "objects", cat: "motor", points: 3, ro: "Scăpați obiecte din mână sau aveți dificultăți la nasturi/scris", en: "Dropping objects or difficulty with buttons/writing", ru: "Роняете предметы или трудно застегивать пуговицы/писать", ua: "Випускаєте предмети або важко застібати ґудзики/писати" },
  { id: "foot", cat: "motor", points: 4, ro: "Piciorul se agață de podea sau mersul devine dificil", en: "Foot catches on the floor or walking becomes difficult", ru: "Стопа цепляется за пол или ходьба становится трудной", ua: "Стопа зачіпається за підлогу або ходьба ускладнюється" },

  { id: "numb", cat: "sensory", points: 3, ro: "Amorțeli, furnicături sau arsură în mâini/picioare", en: "Numbness, tingling or burning in hands/feet", ru: "Онемение, покалывание или жжение в руках/ногах", ua: "Оніміння, поколювання або печіння в руках/ногах" },
  { id: "oneside", cat: "sensory", points: 4, ro: "Amorțeală predominant pe o singură parte a corpului", en: "Numbness mainly on one side of the body", ru: "Онемение преимущественно с одной стороны тела", ua: "Оніміння переважно з одного боку тіла" },

  { id: "neck", cat: "spine", points: 3, ro: "Durere cervicală cu iradiere în braț", en: "Neck pain radiating into the arm", ru: "Боль в шее с отдачей в руку", ua: "Біль у шиї з віддачею в руку" },
  { id: "lowback", cat: "spine", points: 3, ro: "Durere lombară cu iradiere în picior", en: "Low back pain radiating into the leg", ru: "Боль в пояснице с отдачей в ногу", ua: "Біль у попереку з віддачею в ногу" },

  { id: "dizzy", cat: "balance", points: 2, ro: "Amețeli, instabilitate sau pierderea echilibrului", en: "Dizziness, instability or loss of balance", ru: "Головокружение, неустойчивость или потеря равновесия", ua: "Запаморочення, нестійкість або втрата рівноваги" },
  { id: "falls", cat: "balance", points: 4, ro: "Căderi repetate sau mers nesigur", en: "Repeated falls or unstable walking", ru: "Повторные падения или неустойчивая ходьба", ua: "Повторні падіння або нестійка ходьба" },
  { id: "tremor", cat: "balance", points: 2, ro: "Tremor, rigiditate sau încetinirea mișcărilor", en: "Tremor, stiffness or slowing of movements", ru: "Тремор, скованность или замедление движений", ua: "Тремор, скутість або уповільнення рухів" },

  { id: "memory", cat: "cognitive", points: 2, ro: "Probleme de memorie, atenție sau orientare", en: "Memory, attention or orientation problems", ru: "Проблемы памяти, внимания или ориентации", ua: "Проблеми пам’яті, уваги або орієнтації" },
  { id: "sleep", cat: "cognitive", points: 1, ro: "Somn foarte slab, oboseală mentală sau anxietate persistentă", en: "Very poor sleep, mental fatigue or persistent anxiety", ru: "Очень плохой сон, умственная усталость или постоянная тревога", ua: "Дуже поганий сон, розумова втома або постійна тривога" },

  { id: "pulse", cat: "autonomic", points: 2, ro: "Palpitații, transpirații sau tensiune instabilă", en: "Palpitations, sweating or unstable blood pressure", ru: "Сердцебиение, потливость или нестабильное давление", ua: "Серцебиття, пітливість або нестабільний тиск" }
];

const dict: Record<Lang, any> = {
  ro: {
    crumb: "Teste și Instrumente / Screening neurologic",
    title: "Screening Neurologic",
    lead: "Instrument educațional pentru simptome neurologice, semnale de alarmă și prioritate orientativă.",
    quick: "Date rapide",
    quickText: "Completează informațiile de bază, apoi răspunde la întrebări.",
    age: "Vârsta",
    duration: "Simptome apărute de",
    hours: "Ore / brusc",
    days: "Zile",
    weeks: "Săptămâni",
    months: "Luni sau mai mult",
    evolution: "Evoluție",
    stable: "Stabil",
    worse: "Se agravează",
    better: "Se ameliorează",
    variable: "Fluctuant",
    questionnaire: "Chestionar",
    no: "Nu",
    mild: "Ușor",
    moderate: "Moderat",
    severe: "Sever",
    generate: "Generează rezultat",
    reset: "Resetare",
    print: "Tipărește rezultat",
    result: "Rezultat",
    score: "Scor",
    redFlags: "Semnale de alarmă",
    low: "Risc orientativ scăzut",
    mediumRisk: "Risc orientativ moderat",
    high: "Risc orientativ ridicat",
    urgent: "Semnale de alarmă neurologică",
    lowAdvice: "Monitorizați simptomele. Dacă persistă sau se agravează, programați o consultație.",
    medAdvice: "Programați o evaluare medicală pentru clarificarea simptomelor.",
    highAdvice: "Consultația neurologică este recomandată cât mai curând.",
    urgentAdvice: "Solicitați asistență medicală urgentă. Nu așteptați programare obișnuită.",
    dominant: "Domenii predominante",
    disclaimer: "Acest instrument este educațional, nu pune diagnostic și nu înlocuiește medicul. Totul se folosește pe propriul risc.",
    red: "Alarmă",
    motor: "Motor",
    sensory: "Sensibilitate",
    pain: "Durere",
    balance: "Echilibru",
    cognitive: "Cognitiv",
    spine: "Coloană",
    autonomic: "Vegetativ"
  },
  en: {
    crumb: "Tests and Tools / Neurological screening",
    title: "Neurological Screening",
    lead: "Educational tool for neurological symptoms, red flags and orientation priority.",
    quick: "Quick data",
    quickText: "Fill in the basic information, then answer the questions.",
    age: "Age",
    duration: "Symptoms started",
    hours: "Hours / sudden",
    days: "Days",
    weeks: "Weeks",
    months: "Months or more",
    evolution: "Evolution",
    stable: "Stable",
    worse: "Worsening",
    better: "Improving",
    variable: "Variable",
    questionnaire: "Questionnaire",
    no: "No",
    mild: "Mild",
    moderate: "Moderate",
    severe: "Severe",
    generate: "Generate result",
    reset: "Reset",
    print: "Print result",
    result: "Result",
    score: "Score",
    redFlags: "Red flags",
    low: "Low orientation risk",
    mediumRisk: "Moderate orientation risk",
    high: "High orientation risk",
    urgent: "Neurological red flags",
    lowAdvice: "Monitor symptoms. If they persist or worsen, schedule a consultation.",
    medAdvice: "Schedule a medical evaluation to clarify symptoms.",
    highAdvice: "Neurological consultation is recommended as soon as possible.",
    urgentAdvice: "Seek urgent medical help. Do not wait for a regular appointment.",
    dominant: "Main areas",
    disclaimer: "This tool is educational, does not diagnose and does not replace a doctor. Everything is used at your own risk.",
    red: "Red flag",
    motor: "Motor",
    sensory: "Sensory",
    pain: "Pain",
    balance: "Balance",
    cognitive: "Cognitive",
    spine: "Spine",
    autonomic: "Autonomic"
  },
  ru: {
    crumb: "Тесты и инструменты / Неврологический скрининг",
    title: "Неврологический скрининг",
    lead: "Образовательный инструмент для неврологических симптомов, тревожных признаков и ориентировочного приоритета.",
    quick: "Краткие данные",
    quickText: "Заполните основную информацию, затем ответьте на вопросы.",
    age: "Возраст",
    duration: "Симптомы появились",
    hours: "Часы / внезапно",
    days: "Дни",
    weeks: "Недели",
    months: "Месяцы или больше",
    evolution: "Динамика",
    stable: "Стабильно",
    worse: "Ухудшается",
    better: "Улучшается",
    variable: "Колеблется",
    questionnaire: "Анкета",
    no: "Нет",
    mild: "Легко",
    moderate: "Умеренно",
    severe: "Сильно",
    generate: "Сформировать результат",
    reset: "Сброс",
    print: "Печать результата",
    result: "Результат",
    score: "Баллы",
    redFlags: "Тревожные признаки",
    low: "Низкий ориентировочный риск",
    mediumRisk: "Умеренный ориентировочный риск",
    high: "Высокий ориентировочный риск",
    urgent: "Неврологические тревожные признаки",
    lowAdvice: "Наблюдайте симптомы. Если они сохраняются или ухудшаются, запишитесь на консультацию.",
    medAdvice: "Запишитесь на медицинскую оценку для уточнения симптомов.",
    highAdvice: "Консультация невролога рекомендуется как можно скорее.",
    urgentAdvice: "Обратитесь за срочной медицинской помощью. Не ждите обычной записи.",
    dominant: "Основные области",
    disclaimer: "Инструмент образовательный, не ставит диагноз и не заменяет врача. Всё используется на собственный риск.",
    red: "Тревога",
    motor: "Моторика",
    sensory: "Чувствительность",
    pain: "Боль",
    balance: "Равновесие",
    cognitive: "Когнитивно",
    spine: "Позвоночник",
    autonomic: "Вегетативно"
  },
  ua: {
    crumb: "Тести та інструменти / Неврологічний скринінг",
    title: "Неврологічний скринінг",
    lead: "Освітній інструмент для неврологічних симптомів, тривожних ознак і орієнтовного пріоритету.",
    quick: "Короткі дані",
    quickText: "Заповніть основну інформацію, потім дайте відповіді на питання.",
    age: "Вік",
    duration: "Симптоми з’явилися",
    hours: "Години / раптово",
    days: "Дні",
    weeks: "Тижні",
    months: "Місяці або більше",
    evolution: "Динаміка",
    stable: "Стабільно",
    worse: "Погіршується",
    better: "Покращується",
    variable: "Коливається",
    questionnaire: "Анкета",
    no: "Ні",
    mild: "Легко",
    moderate: "Помірно",
    severe: "Сильно",
    generate: "Сформувати результат",
    reset: "Скинути",
    print: "Друк результату",
    result: "Результат",
    score: "Бали",
    redFlags: "Тривожні ознаки",
    low: "Низький орієнтовний ризик",
    mediumRisk: "Помірний орієнтовний ризик",
    high: "Високий орієнтовний ризик",
    urgent: "Неврологічні тривожні ознаки",
    lowAdvice: "Спостерігайте симптоми. Якщо вони зберігаються або погіршуються, запишіться на консультацію.",
    medAdvice: "Запишіться на медичну оцінку для уточнення симптомів.",
    highAdvice: "Консультація невролога рекомендована якнайшвидше.",
    urgentAdvice: "Зверніться по термінову медичну допомогу. Не чекайте звичайного запису.",
    dominant: "Основні сфери",
    disclaimer: "Інструмент освітній, не ставить діагноз і не замінює лікаря. Усе використовується на власний ризик.",
    red: "Тривога",
    motor: "Моторика",
    sensory: "Чутливість",
    pain: "Біль",
    balance: "Рівновага",
    cognitive: "Когнітивно",
    spine: "Хребет",
    autonomic: "Вегетативно"
  }
};

function useLang(): Lang {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : "ro";
}

export default function NeuroScreeningPage() {
  const lang = useLang();
  const t = dict[lang];
  const resultRef = useRef<HTMLElement | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [age, setAge] = useState("");
  const [duration, setDuration] = useState("days");
  const [evolution, setEvolution] = useState("stable");
  const [show, setShow] = useState(false);

  const result = useMemo(() => {
    let total = 0;
    let redFlags = 0;
    const cats: Record<Cat, number> = { red: 0, motor: 0, sensory: 0, pain: 0, balance: 0, cognitive: 0, spine: 0, autonomic: 0 };

    questions.forEach((q) => {
      const value = answers[q.id] || 0;
      if (!value) return;
      if (q.cat === "red") redFlags += 1;
      else {
        const score = q.points * value;
        total += score;
        cats[q.cat] += score;
      }
    });

    if (duration === "hours") total += 4;
    if (evolution === "worse") total += 4;

    let title = t.low;
    let advice = t.lowAdvice;
    let className = "low";

    if (redFlags > 0) {
      title = t.urgent;
      advice = t.urgentAdvice;
      className = "urgent";
    } else if (total >= 18) {
      title = t.high;
      advice = t.highAdvice;
      className = "high";
    } else if (total >= 8) {
      title = t.mediumRisk;
      advice = t.medAdvice;
      className = "medium";
    }

    const sorted = Object.entries(cats).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]);

    return { total, redFlags, title, advice, className, sorted };
  }, [answers, duration, evolution, t]);

  function generate() {
    setShow(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{t.crumb}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="rmSection neuroScreenSection">
        <div className="rmShell neuroCleanLayout">
          <section className="neuroQuickTop">
            <div>
              <h2>{t.quick}</h2>
              <p>{t.quickText}</p>
            </div>

            <div className="neuroQuickGrid">
              <label>{t.age}<input value={age} onChange={(e) => setAge(e.target.value)} placeholder="45" /></label>
              <label>
                {t.duration}
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                  <option value="hours">{t.hours}</option>
                  <option value="days">{t.days}</option>
                  <option value="weeks">{t.weeks}</option>
                  <option value="months">{t.months}</option>
                </select>
              </label>
              <label>
                {t.evolution}
                <select value={evolution} onChange={(e) => setEvolution(e.target.value)}>
                  <option value="stable">{t.stable}</option>
                  <option value="worse">{t.worse}</option>
                  <option value="better">{t.better}</option>
                  <option value="variable">{t.variable}</option>
                </select>
              </label>
            </div>

            <div className="medicalRiskBox cleanRiskBox"><b>Important</b><p>{t.disclaimer}</p></div>
          </section>

          <main className="neuroMain">
            <div className="neuroIntro">
              <h2>{t.questionnaire}</h2>
            </div>

            <div className="neuroQuestions">
              {questions.map((q) => (
                <article className={q.cat === "red" ? "neuroQuestion redFlagQ" : "neuroQuestion"} key={q.id}>
                  <div>
                    <span>{t[q.cat]}</span>
                    <h3>{q[lang]}</h3>
                  </div>
                  <div className="answerScale">
                    {[0, 1, 2, 3].map((v) => (
                      <label key={v}>
                        <input
                          type="radio"
                          name={q.id}
                          checked={(answers[q.id] || 0) === v}
                          onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: v }))}
                        />
                        {[t.no, t.mild, t.moderate, t.severe][v]}
                      </label>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="bottomGenerateBox">
              <button className="blueBtn" onClick={generate}>{t.generate}</button>
              <button className="softBtn" onClick={() => { setAnswers({}); setShow(false); }}>{t.reset}</button>
            </div>

            {show && (
              <section ref={resultRef} className={`neuroResult ${result.className}`}>
                <div className="resultTopLine">
                  <h2>{result.title}</h2>
                  <button className="softBtn printBtn" onClick={() => window.print()}>{t.print}</button>
                </div>

                <p className="scoreLine">{t.score}: <b>{result.total}</b> · {t.redFlags}: <b>{result.redFlags}</b></p>
                <p>{result.advice}</p>

                {result.sorted.length > 0 && (
                  <>
                    <h3>{t.dominant}</h3>
                    <div className="categoryBars">
                      {result.sorted.map(([cat, score]) => (
                        <div className="catBar" key={cat}>
                          <span>{t[cat]}</span>
                          <div><i style={{ width: `${Math.min(100, Number(score) * 6)}%` }} /></div>
                          <b>{score}</b>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="zeroLiability">{t.disclaimer}</div>
              </section>
            )}
          </main>
        </div>
      </section>
    </>
  );
}
