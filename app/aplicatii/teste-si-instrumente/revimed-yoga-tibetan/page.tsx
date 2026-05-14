"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Goal = "profund" | "anx" | "somn" | "resp" | "cardio" | "digestiv" | "energie";
type Organ = "snv" | "creier" | "inima" | "plamani" | "digestiv" | "gat";
type PhaseKey = "inhale" | "hold" | "exhale" | "rest";

type Program = {
  goal: Goal;
  organ: Organ;
  inhale: number;
  hold: number;
  exhale: number;
  rest: number;
  color: string;
};

const ui = {
  ro: {
    crumb: "Teste și Instrumente / REVIMED Yoga Tibetan",
    title: "REVIMED Yoga Tibetan",
    lead: "Respirație ghidată blândă pentru relaxare, somn, sistem nervos, respirație, inimă, digestie și energie.",
    settings: "Setare program",
    goal: "Scop / patologie",
    organ: "Organ / sistem",
    duration: "Durată",
    start: "Start",
    pause: "Pauză",
    resume: "Continuă",
    reset: "Reset",
    voice: "Ghid vocal",
    sound: "Sunet tibetan",
    activeVoice: "Vocal activ",
    activeSound: "Sunet activ",
    inhale: "Inspiră",
    hold: "Ține",
    exhale: "Expiră",
    rest: "Pauză",
    easyRule: "Regulă ușoară",
    easyRuleText: "Inspiră când cercul crește, ține când cercul rămâne stabil, expiră când cercul scade.",
    session: "Sesiune",
    remaining: "Timp rămas",
    progress: "Progres",
    breath: "Ciclu respirație",
    recommendation: "Recomandare educațională",
    effects: "Efect orientativ",
    safetyTitle: "Atenție",
    safety: "Aplicația este educațională și nu înlocuiește consultația medicală. Dacă apar amețeli, durere toracică, lipsă de aer, palpitații sau stare neobișnuită, oprește exercițiul și cere sfat medical. Totul se face pe propriul risc.",
    completed: "Sesiune finalizată. Respiră natural câteva momente.",
    goals: {
      profund: "Vindecare profundă",
      anx: "Anxietate / stres",
      somn: "Insomnie / somn profund",
      resp: "Respirator / Buteyko blând",
      cardio: "Cardiovascular",
      digestiv: "Digestiv / abdomen",
      energie: "Energie / burnout"
    },
    organs: {
      snv: "Sistem nervos vegetativ",
      creier: "Creier / somn / memorie",
      inima: "Inimă / torace",
      plamani: "Plămâni / bronhii",
      digestiv: "Stomac / colon / abdomen",
      gat: "Gât / voce"
    }
  },
  en: {
    crumb: "Tests and Tools / REVIMED Tibetan Yoga",
    title: "REVIMED Tibetan Yoga",
    lead: "Gentle guided breathing for relaxation, sleep, nervous system, breathing, heart, digestion and energy.",
    settings: "Program settings",
    goal: "Goal / condition",
    organ: "Organ / system",
    duration: "Duration",
    start: "Start",
    pause: "Pause",
    resume: "Resume",
    reset: "Reset",
    voice: "Voice guide",
    sound: "Tibetan sound",
    activeVoice: "Voice on",
    activeSound: "Sound on",
    inhale: "Inhale",
    hold: "Hold",
    exhale: "Exhale",
    rest: "Rest",
    easyRule: "Easy rule",
    easyRuleText: "Inhale when the circle grows, hold when it stays stable, exhale when it becomes smaller.",
    session: "Session",
    remaining: "Remaining",
    progress: "Progress",
    breath: "Breathing cycle",
    recommendation: "Educational recommendation",
    effects: "Orientation effect",
    safetyTitle: "Attention",
    safety: "This app is educational and does not replace medical consultation. If dizziness, chest pain, shortness of breath, palpitations or unusual symptoms appear, stop the exercise and seek medical advice. Everything is done at your own risk.",
    completed: "Session completed. Breathe naturally for a few moments.",
    goals: {
      profund: "Deep recovery",
      anx: "Anxiety / stress",
      somn: "Insomnia / deep sleep",
      resp: "Respiratory / gentle Buteyko",
      cardio: "Cardiovascular",
      digestiv: "Digestive / abdomen",
      energie: "Energy / burnout"
    },
    organs: {
      snv: "Autonomic nervous system",
      creier: "Brain / sleep / memory",
      inima: "Heart / chest",
      plamani: "Lungs / bronchi",
      digestiv: "Stomach / colon / abdomen",
      gat: "Throat / voice"
    }
  },
  ru: {
    crumb: "Тесты и инструменты / REVIMED Тибетская йога",
    title: "REVIMED Тибетская йога",
    lead: "Мягкое дыхательное сопровождение для расслабления, сна, нервной системы, дыхания, сердца, пищеварения и энергии.",
    settings: "Настройка программы",
    goal: "Цель / состояние",
    organ: "Орган / система",
    duration: "Длительность",
    start: "Старт",
    pause: "Пауза",
    resume: "Продолжить",
    reset: "Сброс",
    voice: "Голосовой гид",
    sound: "Тибетский звук",
    activeVoice: "Голос включён",
    activeSound: "Звук включён",
    inhale: "Вдох",
    hold: "Задержка",
    exhale: "Выдох",
    rest: "Пауза",
    easyRule: "Простое правило",
    easyRuleText: "Вдыхайте, когда круг растёт, удерживайте, когда он стабилен, выдыхайте, когда круг уменьшается.",
    session: "Сессия",
    remaining: "Осталось",
    progress: "Прогресс",
    breath: "Дыхательный цикл",
    recommendation: "Образовательная рекомендация",
    effects: "Ориентировочный эффект",
    safetyTitle: "Внимание",
    safety: "Приложение является образовательным и не заменяет консультацию врача. При головокружении, боли в груди, нехватке воздуха, сердцебиении или необычном состоянии прекратите упражнение и обратитесь за медицинской консультацией. Всё выполняется на собственный риск.",
    completed: "Сессия завершена. Несколько мгновений дышите естественно.",
    goals: {
      profund: "Глубокое восстановление",
      anx: "Тревога / стресс",
      somn: "Бессонница / глубокий сон",
      resp: "Дыхание / мягкий Бутейко",
      cardio: "Сердечно-сосудистая система",
      digestiv: "Пищеварение / живот",
      energie: "Энергия / выгорание"
    },
    organs: {
      snv: "Вегетативная нервная система",
      creier: "Мозг / сон / память",
      inima: "Сердце / грудная клетка",
      plamani: "Лёгкие / бронхи",
      digestiv: "Желудок / кишечник / живот",
      gat: "Горло / голос"
    }
  },
  ua: {
    crumb: "Тести та інструменти / REVIMED Тибетська йога",
    title: "REVIMED Тибетська йога",
    lead: "М’яке дихальне супроводження для розслаблення, сну, нервової системи, дихання, серця, травлення та енергії.",
    settings: "Налаштування програми",
    goal: "Мета / стан",
    organ: "Орган / система",
    duration: "Тривалість",
    start: "Старт",
    pause: "Пауза",
    resume: "Продовжити",
    reset: "Скинути",
    voice: "Голосовий гід",
    sound: "Тибетський звук",
    activeVoice: "Голос увімкнено",
    activeSound: "Звук увімкнено",
    inhale: "Вдих",
    hold: "Затримка",
    exhale: "Видих",
    rest: "Пауза",
    easyRule: "Просте правило",
    easyRuleText: "Вдихайте, коли коло росте, утримуйте, коли воно стабільне, видихайте, коли коло зменшується.",
    session: "Сесія",
    remaining: "Залишилось",
    progress: "Прогрес",
    breath: "Дихальний цикл",
    recommendation: "Освітня рекомендація",
    effects: "Орієнтовний ефект",
    safetyTitle: "Увага",
    safety: "Застосунок є освітнім і не замінює консультацію лікаря. При запамороченні, болю в грудях, нестачі повітря, серцебитті або незвичному стані припиніть вправу та зверніться за медичною консультацією. Усе виконується на власний ризик.",
    completed: "Сесію завершено. Кілька моментів дихайте природно.",
    goals: {
      profund: "Глибоке відновлення",
      anx: "Тривога / стрес",
      somn: "Безсоння / глибокий сон",
      resp: "Дихання / м’який Бутейко",
      cardio: "Серцево-судинна система",
      digestiv: "Травлення / живіт",
      energie: "Енергія / вигорання"
    },
    organs: {
      snv: "Вегетативна нервова система",
      creier: "Мозок / сон / пам’ять",
      inima: "Серце / грудна клітка",
      plamani: "Легені / бронхи",
      digestiv: "Шлунок / кишківник / живіт",
      gat: "Горло / голос"
    }
  }
} as const;

const recommendations: Record<Lang, Record<Goal, string[]>> = {
  ro: {
    profund: ["Alege un ritm lent și confortabil.", "Nu forța retențiile. Respirația trebuie să rămână blândă.", "Ideal seara sau după o perioadă de repaus."],
    anx: ["Accent pe expir lung și calm.", "Umerii relaxați, maxilarul relaxat.", "Dacă apare disconfort, revino la respirație naturală."],
    somn: ["Lumina redusă, telefonul la distanță.", "Expirul lent pregătește corpul pentru somn.", "După sesiune evită ecranul și stimulentele."],
    resp: ["Respiră pe nas dacă este posibil.", "Nu face apnee agresivă.", "Pentru boli respiratorii, discută cu medicul."],
    cardio: ["Respirație lentă, fără efort.", "Nu ține respirația mult.", "Oprește imediat la durere toracică sau palpitații."],
    digestiv: ["Respiră abdominal, fără presiune.", "Nu practica imediat după masă grea.", "Mișcarea diafragmei trebuie să fie moale."],
    energie: ["Ritm mai clar și activ, dar fără hiperventilație.", "Folosește sesiuni scurte dimineața.", "Oprește dacă apare amețeală."]
  },
  en: {
    profund: ["Choose a slow and comfortable rhythm.", "Do not force holds. Breathing must remain gentle.", "Best in the evening or after rest."],
    anx: ["Focus on a long calm exhale.", "Relax shoulders and jaw.", "If discomfort appears, return to natural breathing."],
    somn: ["Dim light, keep the phone away.", "Slow exhalation prepares the body for sleep.", "After the session avoid screens and stimulants."],
    resp: ["Breathe through the nose if possible.", "Do not practice aggressive breath holds.", "For respiratory disease, discuss with your doctor."],
    cardio: ["Slow breathing without effort.", "Do not hold the breath for long.", "Stop immediately with chest pain or palpitations."],
    digestiv: ["Use soft abdominal breathing.", "Do not practice right after a heavy meal.", "Diaphragm movement should be gentle."],
    energie: ["Clearer active rhythm, without hyperventilation.", "Use short morning sessions.", "Stop if dizziness appears."]
  },
  ru: {
    profund: ["Выберите медленный и комфортный ритм.", "Не форсируйте задержки. Дыхание должно оставаться мягким.", "Лучше вечером или после отдыха."],
    anx: ["Акцент на длинный спокойный выдох.", "Расслабьте плечи и челюсть.", "При дискомфорте вернитесь к обычному дыханию."],
    somn: ["Приглушите свет, уберите телефон.", "Медленный выдох помогает подготовиться ко сну.", "После сессии избегайте экранов и стимуляторов."],
    resp: ["Дышите через нос, если возможно.", "Не делайте агрессивных задержек дыхания.", "При заболеваниях дыхания обсудите с врачом."],
    cardio: ["Медленное дыхание без усилий.", "Не задерживайте дыхание надолго.", "Немедленно остановитесь при боли в груди или сердцебиении."],
    digestiv: ["Мягкое брюшное дыхание.", "Не практикуйте сразу после тяжёлой еды.", "Движение диафрагмы должно быть мягким."],
    energie: ["Более активный ритм, но без гипервентиляции.", "Короткие утренние сессии.", "Остановитесь при головокружении."]
  },
  ua: {
    profund: ["Оберіть повільний і комфортний ритм.", "Не форсуйте затримки. Дихання має залишатися м’яким.", "Найкраще ввечері або після відпочинку."],
    anx: ["Акцент на довгий спокійний видих.", "Розслабте плечі та щелепу.", "При дискомфорті поверніться до природного дихання."],
    somn: ["Приглушіть світло, відкладіть телефон.", "Повільний видих готує тіло до сну.", "Після сесії уникайте екранів і стимуляторів."],
    resp: ["Дихайте носом, якщо можливо.", "Не робіть агресивних затримок дихання.", "При захворюваннях дихання обговоріть із лікарем."],
    cardio: ["Повільне дихання без зусиль.", "Не затримуйте дихання надовго.", "Негайно зупиніться при болю в грудях або серцебитті."],
    digestiv: ["М’яке черевне дихання.", "Не практикуйте одразу після важкої їжі.", "Рух діафрагми має бути м’яким."],
    energie: ["Чіткіший активний ритм, але без гіпервентиляції.", "Короткі ранкові сесії.", "Зупиніться при запамороченні."]
  }
};

const organEffects: Record<Lang, Record<Organ, string>> = {
  ro: {
    snv: "Orientare către reglarea sistemului nervos vegetativ și reducerea tensiunii.",
    creier: "Sprijin educațional pentru liniștire, somn și atenție.",
    inima: "Ritm calm, fără forțare, pentru relaxarea toracelui.",
    plamani: "Respirație nazală blândă și expir controlat.",
    digestiv: "Respirație diafragmatică moale pentru relaxarea abdomenului.",
    gat: "Relaxarea gâtului, vocii și respirației superioare."
  },
  en: {
    snv: "Orientation toward autonomic nervous system regulation and reduced tension.",
    creier: "Educational support for calm, sleep and attention.",
    inima: "Calm rhythm without force for chest relaxation.",
    plamani: "Gentle nasal breathing and controlled exhale.",
    digestiv: "Soft diaphragmatic breathing for abdominal relaxation.",
    gat: "Relaxation of throat, voice and upper breathing."
  },
  ru: {
    snv: "Ориентация на регуляцию вегетативной нервной системы и снижение напряжения.",
    creier: "Образовательная поддержка для спокойствия, сна и внимания.",
    inima: "Спокойный ритм без усилий для расслабления грудной клетки.",
    plamani: "Мягкое носовое дыхание и контролируемый выдох.",
    digestiv: "Мягкое диафрагмальное дыхание для расслабления живота.",
    gat: "Расслабление горла, голоса и верхнего дыхания."
  },
  ua: {
    snv: "Орієнтація на регуляцію вегетативної нервової системи та зниження напруги.",
    creier: "Освітня підтримка для спокою, сну та уваги.",
    inima: "Спокійний ритм без зусиль для розслаблення грудної клітки.",
    plamani: "М’яке носове дихання та контрольований видих.",
    digestiv: "М’яке діафрагмальне дихання для розслаблення живота.",
    gat: "Розслаблення горла, голосу та верхнього дихання."
  }
};

function getLang(pathname: string): Lang {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : "ro";
}

function makeProgram(goal: Goal, organ: Organ): Program {
  const base: Record<Goal, Omit<Program, "goal" | "organ" | "color">> = {
    profund: { inhale: 4, hold: 2, exhale: 6, rest: 2 },
    anx: { inhale: 4, hold: 1, exhale: 7, rest: 2 },
    somn: { inhale: 4, hold: 2, exhale: 8, rest: 3 },
    resp: { inhale: 3, hold: 2, exhale: 5, rest: 2 },
    cardio: { inhale: 4, hold: 1, exhale: 6, rest: 2 },
    digestiv: { inhale: 5, hold: 1, exhale: 6, rest: 2 },
    energie: { inhale: 4, hold: 1, exhale: 4, rest: 1 }
  };

  const colors: Record<Goal, string> = {
    profund: "#159ae8",
    anx: "#0ea5e9",
    somn: "#2563eb",
    resp: "#0891b2",
    cardio: "#0b8fd8",
    digestiv: "#10b981",
    energie: "#f59e0b"
  };

  return { goal, organ, color: colors[goal], ...base[goal] };
}

function formatTime(total: number) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function RevimedYogaTibetanV2() {
  const lang = getLang(usePathname());
  const t = ui[lang];

  const [goal, setGoal] = useState<Goal>("anx");
  const [organ, setOrgan] = useState<Organ>("snv");
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
  const lastSpokenRef = useRef("");

  const program = useMemo(() => makeProgram(goal, organ), [goal, organ]);
  const cycle = program.inhale + program.hold + program.exhale + program.rest;
  const cyclePosition = phaseElapsed % cycle;

  let phase: PhaseKey = "inhale";
  let phaseTotal = program.inhale;
  let phaseTime = cyclePosition;

  if (cyclePosition < program.inhale) {
    phase = "inhale";
    phaseTotal = program.inhale;
    phaseTime = cyclePosition;
  } else if (cyclePosition < program.inhale + program.hold) {
    phase = "hold";
    phaseTotal = program.hold;
    phaseTime = cyclePosition - program.inhale;
  } else if (cyclePosition < program.inhale + program.hold + program.exhale) {
    phase = "exhale";
    phaseTotal = program.exhale;
    phaseTime = cyclePosition - program.inhale - program.hold;
  } else {
    phase = "rest";
    phaseTotal = program.rest;
    phaseTime = cyclePosition - program.inhale - program.hold - program.exhale;
  }

  const phaseRemaining = Math.max(1, phaseTotal - phaseTime);
  const sessionProgress = Math.min(100, Math.round((elapsed / duration) * 100));
  const phaseProgress = Math.min(100, Math.round((phaseTime / Math.max(1, phaseTotal)) * 100));
  const remaining = Math.max(0, duration - elapsed);

  const phaseLabel = t[phase];
  const recs = recommendations[lang][goal];

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
    if (!running || !voiceOn) return;
    const text = `${phaseLabel}. ${phaseRemaining}`;
    if (lastSpokenRef.current === text) return;
    lastSpokenRef.current = text;

    if ("speechSynthesis" in window && phaseTime === 0) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phaseLabel);
      utterance.lang = lang === "ro" ? "ro-RO" : lang === "ru" ? "ru-RU" : lang === "ua" ? "uk-UA" : "en-US";
      utterance.rate = 0.82;
      utterance.pitch = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  }, [phase, phaseLabel, phaseRemaining, phaseTime, running, voiceOn, lang]);

  useEffect(() => {
    if (!soundOn || !running) return;
    updateSound(phase);
  }, [phase, soundOn, running]);

  function startSound() {
    if (typeof window === "undefined") return;
    if (!audioRef.current) {
      audioRef.current = new AudioContext();
    }

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

  function updateSound(nextPhase: PhaseKey) {
    if (!oscRef.current || !gainRef.current || !audioRef.current) startSound();
    const ctx = audioRef.current;
    const osc = oscRef.current;
    const gain = gainRef.current;
    if (!ctx || !osc || !gain) return;

    const frequency = nextPhase === "inhale" ? 174 : nextPhase === "hold" ? 285 : nextPhase === "exhale" ? 136.1 : 110;
    osc.frequency.setTargetAtTime(frequency, ctx.currentTime, 0.2);
    gain.gain.setTargetAtTime(nextPhase === "rest" ? 0.015 : 0.025, ctx.currentTime, 0.2);
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
    lastSpokenRef.current = "";
  }

  function toggleSound() {
    setSoundOn((prev) => {
      const next = !prev;
      if (next && running) startSound();
      else stopSound();
      return next;
    });
  }

  const circleClass = `yogaBreathOrb ${phase}`;
  const phaseScale = phase === "inhale" || phase === "hold" ? 1.12 : phase === "exhale" ? 0.74 : 0.68;

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{t.crumb}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="rmSection yogaV2Section">
        <div className="rmShell yogaV2Shell">
          <div className="yogaV2Grid">
            <aside className="yogaPanel yogaSettings">
              <div className="yogaPanelHead">
                <span>REVIMED</span>
                <h2>{t.settings}</h2>
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
                {t.organ}
                <select value={organ} onChange={(e) => { setOrgan(e.target.value as Organ); reset(); }}>
                  {(Object.keys(t.organs) as Organ[]).map((key) => (
                    <option value={key} key={key}>{t.organs[key]}</option>
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

              <div className="yogaButtonGrid">
                {!running ? (
                  <button className="blueBtn" type="button" onClick={start}>{elapsed > 0 ? t.resume : t.start}</button>
                ) : (
                  <button className="softBtn" type="button" onClick={pause}>{t.pause}</button>
                )}
                <button className="softBtn dangerLite" type="button" onClick={reset}>{t.reset}</button>
              </div>

              <div className="yogaToggleGrid">
                <button type="button" className={voiceOn ? "active" : ""} onClick={() => setVoiceOn((v) => !v)}>
                  <img src="https://img.icons8.com/ios-filled/50/0b8fd8/speaker.png" alt="" />
                  {voiceOn ? t.activeVoice : t.voice}
                </button>
                <button type="button" className={soundOn ? "active" : ""} onClick={toggleSound}>
                  <img src="https://img.icons8.com/ios-filled/50/0b8fd8/singing-bowl.png" alt="" />
                  {soundOn ? t.activeSound : t.sound}
                </button>
              </div>

              <div className="yogaRule">
                <b>{t.easyRule}</b>
                <p>{t.easyRuleText}</p>
              </div>
            </aside>

            <main className="yogaPanel yogaPractice">
              <div className="yogaPracticeTop">
                <div>
                  <span>{t.session}</span>
                  <h2>{t.goals[goal]}</h2>
                  <p>{t.organs[organ]}</p>
                </div>
                <div className="yogaTimePill">
                  <small>{t.remaining}</small>
                  <b>{formatTime(remaining)}</b>
                </div>
              </div>

              <div className="yogaProgressLine">
                <i style={{ width: `${sessionProgress}%` }} />
              </div>

              <div className="yogaBreathStage">
                <div className={circleClass} style={{ transform: `scale(${phaseScale})`, borderColor: program.color }}>
                  <div className="yogaOrbCore">
                    <span>{phaseLabel}</span>
                    <b>{phaseRemaining}</b>
                  </div>
                </div>
              </div>

              <div className="yogaPhaseBar">
                <i style={{ width: `${phaseProgress}%`, background: program.color }} />
              </div>

              <div className="yogaCycle">
                <article className={phase === "inhale" ? "active" : ""}><b>{program.inhale}s</b><span>{t.inhale}</span></article>
                <article className={phase === "hold" ? "active" : ""}><b>{program.hold}s</b><span>{t.hold}</span></article>
                <article className={phase === "exhale" ? "active" : ""}><b>{program.exhale}s</b><span>{t.exhale}</span></article>
                <article className={phase === "rest" ? "active" : ""}><b>{program.rest}s</b><span>{t.rest}</span></article>
              </div>

              {completed && <div className="yogaCompleted">{t.completed}</div>}
            </main>

            <aside className="yogaPanel yogaInfo">
              <div className="yogaPanelHead">
                <span>{t.recommendation}</span>
                <h2>{t.effects}</h2>
              </div>

              <div className="yogaEffect">
                <img src="https://img.icons8.com/ios-filled/50/0b8fd8/lungs.png" alt="" />
                <p>{organEffects[lang][organ]}</p>
              </div>

              <ul className="yogaRecList">
                {recs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="yogaSafety">
                <b>{t.safetyTitle}</b>
                <p>{t.safety}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
