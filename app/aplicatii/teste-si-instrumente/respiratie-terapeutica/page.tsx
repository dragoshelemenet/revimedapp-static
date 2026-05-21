"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Pattern = {
 key: string;
 inhale: number;
 hold1: number;
 exhale: number;
 hold2: number;
};

const patterns: Pattern[] = [
 { key: "box", inhale: 4, hold1: 4, exhale: 4, hold2: 4 },
 { key: "478", inhale: 4, hold1: 7, exhale: 8, hold2: 0 },
 { key: "coherence", inhale: 5, hold1: 0, exhale: 5, hold2: 0 }
];

const dict: Record<Lang, any> = {
 ro: {
  crumb: "Teste și Instrumente / Respirație terapeutică",
  title: "Respirație Terapeutică",
  lead: "Exerciții ghidate de respirație pentru calm, ritm, concentrare și relaxare.",
  choose: "Alege protocolul",
  start: "Start",
  pause: "Pauză",
  reset: "Resetare",
  inhale: "Inspiră",
  hold: "Ține",
  exhale: "Expiră",
  rest: "Pauză",
  cycle: "Ciclu",
  seconds: "secunde",
  box: "Respirație box 4-4-4-4",
  boxDesc: "Protocol echilibrat pentru calm, focus și stabilizare.",
  "478": "Respirație 4-7-8",
  "478Desc": "Protocol lent pentru relaxare și reducerea tensiunii.",
  coherence: "Coerență 5-5",
  coherenceDesc: "Ritm simplu pentru calm și reglare vegetativă.",
  infoTitle: "Cum se folosește",
  info: "Stai comod, respiră pe nas dacă poți și nu forța. Oprește exercițiul dacă apare amețeală, durere, lipsă de aer sau disconfort.",
  warning: "Această aplicație este educațională și nu înlocuiește consultația medicală. Folosirea se face pe propriul risc."
 },
 en: {
  crumb: "Tests and Tools / Therapeutic breathing",
  title: "Therapeutic Breathing",
  lead: "Guided breathing exercises for calm, rhythm, focus and relaxation.",
  choose: "Choose protocol",
  start: "Start",
  pause: "Pause",
  reset: "Reset",
  inhale: "Inhale",
  hold: "Hold",
  exhale: "Exhale",
  rest: "Rest",
  cycle: "Cycle",
  seconds: "seconds",
  box: "Box breathing 4-4-4-4",
  boxDesc: "Balanced protocol for calm, focus and stabilization.",
  "478": "4-7-8 breathing",
  "478Desc": "Slow protocol for relaxation and tension reduction.",
  coherence: "Coherence 5-5",
  coherenceDesc: "Simple rhythm for calm and autonomic regulation.",
  infoTitle: "How to use",
  info: "Sit comfortably, breathe through the nose if possible and do not force it. Stop if dizziness, pain, shortness of breath or discomfort appears.",
  warning: "This app is educational and does not replace medical consultation. Use it at your own risk."
 },
 ru: {
  crumb: "Тесты и инструменты / Терапевтическое дыхание",
  title: "Терапевтическое дыхание",
  lead: "Управляемые дыхательные упражнения для спокойствия, ритма, концентрации и расслабления.",
  choose: "Выберите протокол",
  start: "Старт",
  pause: "Пауза",
  reset: "Сброс",
  inhale: "Вдох",
  hold: "Задержка",
  exhale: "Выдох",
  rest: "Пауза",
  cycle: "Цикл",
  seconds: "секунд",
  box: "Box breathing 4-4-4-4",
  boxDesc: "Сбалансированный протокол для спокойствия, фокуса и стабилизации.",
  "478": "Дыхание 4-7-8",
  "478Desc": "Медленный протокол для расслабления и снижения напряжения.",
  coherence: "Когерентность 5-5",
  coherenceDesc: "Простой ритм для спокойствия и вегетативной регуляции.",
  infoTitle: "Как использовать",
  info: "Сядьте удобно, дышите через нос, если возможно, и не форсируйте дыхание. Остановитесь при головокружении, боли, нехватке воздуха или дискомфорте.",
  warning: "Это приложение образовательное и не заменяет консультацию врача. Использование — на собственный риск."
 },
 ua: {
  crumb: "Тести та інструменти / Терапевтичне дихання",
  title: "Терапевтичне дихання",
  lead: "Керовані дихальні вправи для спокою, ритму, концентрації та розслаблення.",
  choose: "Оберіть протокол",
  start: "Старт",
  pause: "Пауза",
  reset: "Скинути",
  inhale: "Вдих",
  hold: "Затримка",
  exhale: "Видих",
  rest: "Пауза",
  cycle: "Цикл",
  seconds: "секунд",
  box: "Box breathing 4-4-4-4",
  boxDesc: "Збалансований протокол для спокою, фокусу та стабілізації.",
  "478": "Дихання 4-7-8",
  "478Desc": "Повільний протокол для розслаблення та зменшення напруги.",
  coherence: "Когерентність 5-5",
  coherenceDesc: "Простий ритм для спокою та вегетативної регуляції.",
  infoTitle: "Як використовувати",
  info: "Сядьте зручно, дихайте через ніс, якщо можете, і не форсуйте. Зупиніться при запамороченні, болю, нестачі повітря або дискомфорті.",
  warning: "Цей застосунок освітній і не замінює консультацію лікаря. Використання — на власний ризик."
 }
};

function useLang(): Lang {
 const pathname = usePathname();
 const first = pathname.split("/").filter(Boolean)[0];
 return isLang(first) ? first : "ro";
}

export default function BreathingPage() {
 const lang = useLang();
 const t = dict[lang];
 const [selected, setSelected] = useState("box");
 const [running, setRunning] = useState(false);
 const [phaseIndex, setPhaseIndex] = useState(0);
 const [phaseLeft, setPhaseLeft] = useState(4);
 const [cycle, setCycle] = useState(1);

 const pattern = useMemo(() => patterns.find((p) => p.key === selected) || patterns[0], [selected]);

 const phases = useMemo(() => {
  return [
   { label: t.inhale, seconds: pattern.inhale },
   { label: t.hold, seconds: pattern.hold1 },
   { label: t.exhale, seconds: pattern.exhale },
   { label: t.rest, seconds: pattern.hold2 }
  ].filter((p) => p.seconds > 0);
 }, [pattern, t]);

 useEffect(() => {
  setPhaseIndex(0);
  setPhaseLeft(phases[0]?.seconds || 4);
  setCycle(1);
  setRunning(false);
 }, [selected, phases]);

 useEffect(() => {
  if (!running) return;

  const timer = setInterval(() => {
   setPhaseLeft((left) => {
    if (left > 1) return left - 1;

    setPhaseIndex((idx) => {
     const next = idx + 1;
     if (next >= phases.length) {
      setCycle((c) => c + 1);
      setPhaseLeft(phases[0].seconds);
      return 0;
     }

     setPhaseLeft(phases[next].seconds);
     return next;
    });

    return left;
   });
  }, 1000);

  return () => clearInterval(timer);
 }, [running, phases]);

 const phase = phases[phaseIndex] || phases[0];
 const progress = phase ? Math.round(((phase.seconds - phaseLeft) / phase.seconds) * 100) : 0;

 return (
  <>
   <section className="pageHero">
    <div className="rmShell">
     <p className="crumb">{t.crumb}</p>
     <h1>{t.title}</h1>
     <p className="lead">{t.lead}</p>
    </div>
   </section>

   <section className="rmSection breathSection">
    <div className="rmShell breathLayout">
     <aside className="breathPanel">
      <h2>{t.choose}</h2>
      <div className="breathOptions">
       {patterns.map((p) => (
        <button
         key={p.key}
         className={selected === p.key ? "active" : ""}
         onClick={() => setSelected(p.key)}
        >
         <b>{t[p.key]}</b>
         <span>{t[`${p.key}Desc`]}</span>
        </button>
       ))}
      </div>

      <div className="noteBox">{t.warning}</div>
     </aside>

     <main className="breathMain">
      <div className="breathCircleWrap">
       <div className={`breathCircle ${running ? "running" : ""}`}>
        <span>{phase?.label}</span>
        <strong>{phaseLeft}</strong>
        <small>{t.seconds}</small>
       </div>
      </div>

      <div className="breathProgress">
       <div style={{ width: `${progress}%` }} />
      </div>

      <div className="breathControls">
       <button className="blueBtn" onClick={() => setRunning((v) => !v)}>
        {running ? t.pause : t.start}
       </button>
       <button
        className="softBtn"
        onClick={() => {
         setRunning(false);
         setPhaseIndex(0);
         setPhaseLeft(phases[0]?.seconds || 4);
         setCycle(1);
        }}
       >
        {t.reset}
       </button>
      </div>

      <div className="breathStats">
       <span>{t.cycle}: <b>{cycle}</b></span>
       <span>{t.choose}: <b>{t[selected]}</b></span>
      </div>

      <article className="adminCard breathInfo">
       <h2>{t.infoTitle}</h2>
       <p>{t.info}</p>
      </article>
     </main>
    </div>
   </section>
  </>
 );
}
