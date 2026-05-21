"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Goal = "stress" | "sleep" | "resp" | "heart" | "digest" | "energy";
type Phase = "inhale" | "hold" | "exhale" | "rest";

const ui = {
 ro: {
  crumb: "Teste și Instrumente / Yoga Tibetană",
  title: "REVIMED Yoga Tibetan",
  lead: "Respirație ghidată educațională pentru relaxare, somn, stres, respirație, inimă, digestie și energie.",
  setup: "Setare program",
  goal: "Scop",
  duration: "Durată",
  voice: "Ghid vocal",
  sound: "Sunet tibetan",
  start: "Start",
  pause: "Pauză",
  resume: "Continuă",
  reset: "Reset",
  remaining: "Timp rămas",
  progress: "Progres",
  inhale: "Inspiră",
  hold: "Ține",
  exhale: "Expiră",
  rest: "Pauză",
  cycle: "Ciclu",
  how: "Cum se practică",
  howText: "Inspiră când cercul crește, ține când rămâne stabil, expiră când cercul scade. Nu forța respirația.",
  recommendation: "Recomandări",
  warningTitle: "Atenție medicală",
  warning: "Aplicația este educațională și nu înlocuiește consultația medicală. Dacă apar amețeli, durere toracică, lipsă de aer, palpitații sau stare neobișnuită, oprește exercițiul. Totul se face pe propriul risc.",
  done: "Sesiune finalizată. Respiră natural câteva momente.",
  goals: {
   stress: "Stres / anxietate",
   sleep: "Somn / relaxare seara",
   resp: "Respirație / plămâni",
   heart: "Inimă / torace",
   digest: "Digestie / abdomen",
   energy: "Energie / claritate"
  },
  recs: {
   stress: ["Expirul mai lung ajută la calmarea ritmului.", "Relaxează umerii și maxilarul.", "Revino la respirație naturală dacă apare disconfort."],
   sleep: ["Practică seara, cu lumină redusă.", "Nu forța retențiile.", "După sesiune evită ecranul câteva minute."],
   resp: ["Respiră pe nas dacă poți.", "Păstrează ritmul blând.", "În boli respiratorii, discută cu medicul."],
   heart: ["Respirație lentă, fără efort.", "Nu ține respirația mult.", "Oprește la durere toracică sau palpitații."],
   digest: ["Respiră abdominal, moale.", "Nu practica imediat după masă grea.", "Lasă abdomenul relaxat."],
   energy: ["Sesiuni scurte dimineața.", "Ritm clar, dar fără hiperventilație.", "Oprește dacă apare amețeală."]
  }
 },
 en: {
  crumb: "Tests and Tools / Tibetan Yoga",
  title: "REVIMED Tibetan Yoga",
  lead: "Educational guided breathing for relaxation, sleep, stress, breathing, heart, digestion and energy.",
  setup: "Program setup",
  goal: "Goal",
  duration: "Duration",
  voice: "Voice guide",
  sound: "Tibetan sound",
  start: "Start",
  pause: "Pause",
  resume: "Resume",
  reset: "Reset",
  remaining: "Remaining",
  progress: "Progress",
  inhale: "Inhale",
  hold: "Hold",
  exhale: "Exhale",
  rest: "Rest",
  cycle: "Cycle",
  how: "How to practice",
  howText: "Inhale when the circle grows, hold when it stays stable, exhale when it becomes smaller. Do not force breathing.",
  recommendation: "Recommendations",
  warningTitle: "Medical attention",
  warning: "This app is educational and does not replace medical consultation. If dizziness, chest pain, shortness of breath, palpitations or unusual symptoms appear, stop the exercise. Everything is done at your own risk.",
  done: "Session completed. Breathe naturally for a few moments.",
  goals: {
   stress: "Stress / anxiety",
   sleep: "Sleep / evening relaxation",
   resp: "Breathing / lungs",
   heart: "Heart / chest",
   digest: "Digestion / abdomen",
   energy: "Energy / clarity"
  },
  recs: {
   stress: ["A longer exhale supports calm rhythm.", "Relax shoulders and jaw.", "Return to natural breathing if discomfort appears."],
   sleep: ["Practice in the evening with dim light.", "Do not force breath holds.", "After the session avoid screens for a few minutes."],
   resp: ["Breathe through the nose if possible.", "Keep the rhythm gentle.", "For respiratory conditions, discuss with a doctor."],
   heart: ["Slow breathing without effort.", "Do not hold your breath for long.", "Stop with chest pain or palpitations."],
   digest: ["Use soft abdominal breathing.", "Do not practice right after a heavy meal.", "Keep the abdomen relaxed."],
   energy: ["Use short morning sessions.", "Clear rhythm, but no hyperventilation.", "Stop if dizziness appears."]
  }
 },
 ru: {
  crumb: "Тесты и инструменты / Тибетская йога",
  title: "REVIMED Тибетская йога",
  lead: "Образовательное дыхательное сопровождение для расслабления, сна, стресса, дыхания, сердца, пищеварения и энергии.",
  setup: "Настройка программы",
  goal: "Цель",
  duration: "Длительность",
  voice: "Голосовой гид",
  sound: "Тибетский звук",
  start: "Старт",
  pause: "Пауза",
  resume: "Продолжить",
  reset: "Сброс",
  remaining: "Осталось",
  progress: "Прогресс",
  inhale: "Вдох",
  hold: "Задержка",
  exhale: "Выдох",
  rest: "Пауза",
  cycle: "Цикл",
  how: "Как практиковать",
  howText: "Вдыхайте, когда круг растёт, удерживайте, когда он стабилен, выдыхайте, когда круг уменьшается. Не форсируйте дыхание.",
  recommendation: "Рекомендации",
  warningTitle: "Медицинское внимание",
  warning: "Приложение является образовательным и не заменяет консультацию врача. При головокружении, боли в груди, нехватке воздуха, сердцебиении или необычном состоянии прекратите упражнение. Всё выполняется на собственный риск.",
  done: "Сессия завершена. Несколько мгновений дышите естественно.",
  goals: {
   stress: "Стресс / тревога",
   sleep: "Сон / вечернее расслабление",
   resp: "Дыхание / лёгкие",
   heart: "Сердце / грудная клетка",
   digest: "Пищеварение / живот",
   energy: "Энергия / ясность"
  },
  recs: {
   stress: ["Более длинный выдох помогает успокоить ритм.", "Расслабьте плечи и челюсть.", "При дискомфорте вернитесь к естественному дыханию."],
   sleep: ["Практикуйте вечером при приглушённом свете.", "Не форсируйте задержки.", "После сессии избегайте экранов несколько минут."],
   resp: ["Дышите через нос, если возможно.", "Сохраняйте мягкий ритм.", "При заболеваниях дыхания обсудите с врачом."],
   heart: ["Медленное дыхание без усилия.", "Не задерживайте дыхание надолго.", "Остановитесь при боли в груди или сердцебиении."],
   digest: ["Мягкое брюшное дыхание.", "Не практикуйте сразу после тяжёлой еды.", "Держите живот расслабленным."],
   energy: ["Короткие утренние сессии.", "Чёткий ритм, но без гипервентиляции.", "Остановитесь при головокружении."]
  }
 },
 ua: {
  crumb: "Тести та інструменти / Тибетська йога",
  title: "REVIMED Тибетська йога",
  lead: "Освітній дихальний супровід для розслаблення, сну, стресу, дихання, серця, травлення та енергії.",
  setup: "Налаштування програми",
  goal: "Мета",
  duration: "Тривалість",
  voice: "Голосовий гід",
  sound: "Тибетський звук",
  start: "Старт",
  pause: "Пауза",
  resume: "Продовжити",
  reset: "Скинути",
  remaining: "Залишилось",
  progress: "Прогрес",
  inhale: "Вдих",
  hold: "Затримка",
  exhale: "Видих",
  rest: "Пауза",
  cycle: "Цикл",
  how: "Як практикувати",
  howText: "Вдихайте, коли коло росте, утримуйте, коли воно стабільне, видихайте, коли коло зменшується. Не форсуйте дихання.",
  recommendation: "Рекомендації",
  warningTitle: "Медична увага",
  warning: "Застосунок є освітнім і не замінює консультацію лікаря. При запамороченні, болю в грудях, нестачі повітря, серцебитті або незвичному стані припиніть вправу. Усе виконується на власний ризик.",
  done: "Сесію завершено. Кілька моментів дихайте природно.",
  goals: {
   stress: "Стрес / тривога",
   sleep: "Сон / вечірнє розслаблення",
   resp: "Дихання / легені",
   heart: "Серце / грудна клітка",
   digest: "Травлення / живіт",
   energy: "Енергія / ясність"
  },
  recs: {
   stress: ["Довший видих допомагає заспокоїти ритм.", "Розслабте плечі та щелепу.", "При дискомфорті поверніться до природного дихання."],
   sleep: ["Практикуйте ввечері при приглушеному світлі.", "Не форсуйте затримки.", "Після сесії уникайте екранів кілька хвилин."],
   resp: ["Дихайте носом, якщо можливо.", "Зберігайте м’який ритм.", "При захворюваннях дихання обговоріть із лікарем."],
   heart: ["Повільне дихання без зусиль.", "Не затримуйте дихання надовго.", "Зупиніться при болю в грудях або серцебитті."],
   digest: ["М’яке черевне дихання.", "Не практикуйте одразу після важкої їжі.", "Тримайте живіт розслабленим."],
   energy: ["Короткі ранкові сесії.", "Чіткий ритм, але без гіпервентиляції.", "Зупиніться при запамороченні."]
  }
 }
} as const;

const programs: Record<Goal, { inhale: number; hold: number; exhale: number; rest: number; color: string }> = {
 stress: { inhale: 4, hold: 1, exhale: 7, rest: 2, color: "#0b8fd8" },
 sleep: { inhale: 4, hold: 2, exhale: 8, rest: 3, color: "#2563eb" },
 resp: { inhale: 3, hold: 2, exhale: 5, rest: 2, color: "#0891b2" },
 heart: { inhale: 4, hold: 1, exhale: 6, rest: 2, color: "#0b8fd8" },
 digest: { inhale: 5, hold: 1, exhale: 6, rest: 2, color: "#10b981" },
 energy: { inhale: 4, hold: 1, exhale: 4, rest: 1, color: "#f59e0b" }
};

function getLang(pathname: string): Lang {
 const first = pathname.split("/").filter(Boolean)[0];
 return isLang(first) ? first : "ro";
}

function formatTime(value: number) {
 const m = Math.floor(value / 60);
 const s = value % 60;
 return `${m}:${String(s).padStart(2, "0")}`;
}

export default function RevimedYogaTibetanPage() {

 function stopYogaAudioOnExit() {
  try {
   const ctx = audioRef.current as any;
   if (ctx?.state && ctx.state !== "closed") {
    ctx.close?.().catch?.(() => {});
   }
  } catch {}

  try {
   oscRef.current?.stop?.();
  } catch {}

  try {
   document.querySelectorAll("audio").forEach((node) => {
    node.pause();
    node.currentTime = 0;
   });
  } catch {}
 }

 useEffect(() => {
  const stop = () => stopYogaAudioOnExit();

  window.addEventListener("pagehide", stop);
  window.addEventListener("beforeunload", stop);

  const onClick = (event: MouseEvent) => {
   const target = event.target as HTMLElement | null;
   const link = target?.closest?.("a");
   if (link) stopYogaAudioOnExit();
  };

  document.addEventListener("click", onClick, true);

  return () => {
   stopYogaAudioOnExit();
   window.removeEventListener("pagehide", stop);
   window.removeEventListener("beforeunload", stop);
   document.removeEventListener("click", onClick, true);
  };
 }, []);

 const lang = getLang(usePathname());
 const t = ui[lang];

 const [goal, setGoal] = useState<Goal>("stress");
 const [duration, setDuration] = useState(300);
 const [elapsed, setElapsed] = useState(0);
 const [phaseElapsed, setPhaseElapsed] = useState(0);
 const [running, setRunning] = useState(false);
 const [voiceOn, setVoiceOn] = useState(false);
 const [soundOn, setSoundOn] = useState(false);
 const [completed, setCompleted] = useState(false);

 const audioRef = useRef<AudioContext | null>(null);
 const oscRef = useRef<OscillatorNode | null>(null);
 const gainRef = useRef<GainNode | null>(null);
 const spokenRef = useRef("");

 const program = programs[goal];
 const cycle = program.inhale + program.hold + program.exhale + program.rest;
 const pos = phaseElapsed % cycle;

 const phaseData = useMemo(() => {
  if (pos < program.inhale) return { phase: "inhale" as Phase, total: program.inhale, at: pos };
  if (pos < program.inhale + program.hold) return { phase: "hold" as Phase, total: program.hold, at: pos - program.inhale };
  if (pos < program.inhale + program.hold + program.exhale) return { phase: "exhale" as Phase, total: program.exhale, at: pos - program.inhale - program.hold };
  return { phase: "rest" as Phase, total: program.rest, at: pos - program.inhale - program.hold - program.exhale };
 }, [pos, program]);

 const phaseLabel = t[phaseData.phase];
 const remaining = Math.max(0, duration - elapsed);
 const progress = Math.min(100, Math.round((elapsed / duration) * 100));
 const phaseProgress = Math.min(100, Math.round((phaseData.at / Math.max(1, phaseData.total)) * 100));
 const phaseRemaining = Math.max(1, phaseData.total - phaseData.at);

 useEffect(() => {
  if (!running) return;

  const id = window.setInterval(() => {
   setElapsed((prev) => {
    if (prev + 1 >= duration) {
     setRunning(false);
     setCompleted(true);
     stopSound();
     return duration;
    }
    return prev + 1;
   });
   setPhaseElapsed((prev) => prev + 1);
  }, 1000);

  return () => window.clearInterval(id);
 }, [running, duration]);

 useEffect(() => {
  if (!running || !voiceOn || phaseData.at !== 0) return;
  const text = phaseLabel;
  if (spokenRef.current === text + elapsed) return;
  spokenRef.current = text + elapsed;

  if ("speechSynthesis" in window) {
   window.speechSynthesis.cancel();
   const utterance = new SpeechSynthesisUtterance(text);
   utterance.lang = lang === "ro" ? "ro-RO" : lang === "ru" ? "ru-RU" : lang === "ua" ? "uk-UA" : "en-US";
   utterance.rate = 0.82;
   utterance.pitch = 0.9;
   window.speechSynthesis.speak(utterance);
  }
 }, [running, voiceOn, phaseData.at, phaseLabel, elapsed, lang]);

 useEffect(() => {
  if (!soundOn || !running) return;
  updateSound(phaseData.phase);
 }, [soundOn, running, phaseData.phase]);

 function startSound() {
  if (typeof window === "undefined") return;

  if (!audioRef.current) audioRef.current = new AudioContext();
  const ctx = audioRef.current;
  if (ctx.state === "suspended") ctx.resume();

  stopSound();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.value = 174;
  gain.gain.value = 0.025;

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();

  oscRef.current = osc;
  gainRef.current = gain;
 }

 function updateSound(phase: Phase) {
  if (!audioRef.current || !oscRef.current || !gainRef.current) startSound();

  const ctx = audioRef.current;
  const osc = oscRef.current;
  const gain = gainRef.current;
  if (!ctx || !osc || !gain) return;

  const frequency = phase === "inhale" ? 174 : phase === "hold" ? 285 : phase === "exhale" ? 136.1 : 110;
  osc.frequency.setTargetAtTime(frequency, ctx.currentTime, 0.18);
  gain.gain.setTargetAtTime(phase === "rest" ? 0.014 : 0.025, ctx.currentTime, 0.18);
 }

 function stopSound() {
  try {
   oscRef.current?.stop();
   oscRef.current?.disconnect();
   gainRef.current?.disconnect();
  } catch {}
  oscRef.current = null;
  gainRef.current = null;
 }

 function start() {
  setCompleted(false);
  setRunning(true);
  if (soundOn) startSound();
 }

 function pause() {
  setRunning(false);
  stopSound();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
 }

 function reset() {
  pause();
  setElapsed(0);
  setPhaseElapsed(0);
  setCompleted(false);
  spokenRef.current = "";
 }

 const scale = phaseData.phase === "inhale" || phaseData.phase === "hold" ? 1.12 : phaseData.phase === "exhale" ? 0.74 : 0.68;

 return (
  <>
   <section className="pageHero forceImageHero">
    <div className="rmShell">
     <p className="crumb">{t.crumb}</p>
     <h1>{t.title}</h1>
     <p className="lead">{t.lead}</p>
    </div>
   </section>

   <section className="rmSection yogaV2Section">
    <div className="rmShell yogaV2Shell">
     <div className="yogaV2Grid">
      <aside className="yogaV2Panel yogaV2Settings">
       <div className="yogaV2Head">
        <span>REVIMED</span>
        <h2>{t.setup}</h2>
       </div>

       <label>
        {t.goal}
        <select value={goal} onChange={(e) => { setGoal(e.target.value as Goal); reset(); }}>
         {(Object.keys(t.goals) as Goal[]).map((key) => (
          <option value={key} key={key}>{t.goals[key]}</option>
         ))}
        </select>
       </label>

       <label>
        {t.duration}
        <select value={duration} onChange={(e) => { setDuration(Number(e.target.value)); reset(); }}>
         <option value={180}>3 min</option>
         <option value={300}>5 min</option>
         <option value={600}>10 min</option>
         <option value={900}>15 min</option>
        </select>
       </label>

       <div className="yogaV2Buttons">
        {!running ? (
         <button className="blueBtn" type="button" onClick={start}>
          {elapsed > 0 ? t.resume : t.start}
         </button>
        ) : (
         <button className="softBtn" type="button" onClick={pause}>{t.pause}</button>
        )}
        <button className="softBtn" type="button" onClick={reset}>{t.reset}</button>
       </div>

       <div className="yogaV2Toggles">
        <button type="button" className={voiceOn ? "active" : ""} onClick={() => setVoiceOn((v) => !v)}>
         <img src="https://img.icons8.com/ios-filled/50/0b8fd8/speaker.png" alt="" />
         {t.voice}
        </button>
        <button type="button" className={soundOn ? "active" : ""} onClick={() => {
         setSoundOn((v) => {
          const next = !v;
          if (next && running) startSound();
          if (!next) stopSound();
          return next;
         });
        }}>
         <img src="https://img.icons8.com/ios-filled/50/0b8fd8/musical-notes.png" alt="" />
         {t.sound}
        </button>
       </div>

       <div className="yogaV2InfoBox">
        <b>{t.how}</b>
        <p>{t.howText}</p>
       </div>
      </aside>

      <main className="yogaV2Panel yogaV2Practice">
       <div className="yogaV2Top">
        <div>
         <span>{t.cycle}</span>
         <h2>{t.goals[goal]}</h2>
        </div>
        <div className="yogaV2Time">
         <small>{t.remaining}</small>
         <b>{formatTime(remaining)}</b>
        </div>
       </div>

       <div className="yogaV2Progress">
        <i style={{ width: `${progress}%` }} />
       </div>

       <div className="yogaV2Stage">
        <div className={`yogaV2Orb ${phaseData.phase}`} style={{ transform: `scale(${scale})`, borderColor: program.color }}>
         <div className="yogaV2Core">
          <span>{phaseLabel}</span>
          <b>{phaseRemaining}</b>
         </div>
        </div>
       </div>

       <div className="yogaV2PhaseBar">
        <i style={{ width: `${phaseProgress}%`, background: program.color }} />
       </div>

       <div className="yogaV2Cycle">
        <article className={phaseData.phase === "inhale" ? "active" : ""}><b>{program.inhale}s</b><span>{t.inhale}</span></article>
        <article className={phaseData.phase === "hold" ? "active" : ""}><b>{program.hold}s</b><span>{t.hold}</span></article>
        <article className={phaseData.phase === "exhale" ? "active" : ""}><b>{program.exhale}s</b><span>{t.exhale}</span></article>
        <article className={phaseData.phase === "rest" ? "active" : ""}><b>{program.rest}s</b><span>{t.rest}</span></article>
       </div>

       {completed && <div className="yogaV2Done">{t.done}</div>}
      </main>

      <aside className="yogaV2Panel yogaV2Recommendations">
       <div className="yogaV2Head">
        <span>{t.recommendation}</span>
        <h2>{t.goals[goal]}</h2>
       </div>

       <ul>
        {t.recs[goal].map((item) => (
         <li key={item}>{item}</li>
        ))}
       </ul>

       <div className="yogaV2Warning">
        <b>{t.warningTitle}</b>
        <p>{t.warning}</p>
       </div>
      </aside>
     </div>
    </div>
   </section>
  </>
 );
}
