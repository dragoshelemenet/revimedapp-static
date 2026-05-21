"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Area = "spate" | "gat" | "umar" | "genunchi" | "sold" | "neurologic";
type Goal = "durere" | "mobilitate" | "forta" | "mers" | "postura";
type Phase = "calm" | "mobilizare" | "forta" | "functie";

const ui = {
 ro: {
  crumb: "Teste și Instrumente / Recuperare",
  title: "Calculator Recuperare Personalizată",
  lead: "Instrument educațional pentru orientare în recuperare. Alege simptomele și primești un plan simplu pe etape.",
  setup: "Date rapide",
  area: "Zona principală",
  pain: "Durere",
  mobility: "Mobilitate",
  goal: "Obiectiv",
  days: "De când durează?",
  generate: "Generează plan",
  reset: "Resetare",
  result: "Plan educațional orientativ",
  stage: "Etapă recomandată",
  daily: "Ce poți face zilnic",
  avoid: "Ce e mai bine să eviți",
  contact: "Când contactezi medicul",
  print: "Tipărește",
  disclaimer: "Acest instrument este educațional și nu pune diagnostic. Pentru durere severă, traumă, amorțeală progresivă, slăbiciune, febră sau pierderea controlului urinar/fecal, contactează urgent medicul.",
  areas: {
   spate: "Spate / lombar",
   gat: "Gât / cervical",
   umar: "Umăr / braț",
   genunchi: "Genunchi",
   sold: "Șold / bazin",
   neurologic: "Neurologic / mers"
  },
  goals: {
   durere: "Scăderea durerii",
   mobilitate: "Mobilitate",
   forta: "Forță",
   mers: "Mers și echilibru",
   postura: "Postură"
  },
  daysOptions: ["1–3 zile", "4–14 zile", "2–6 săptămâni", "peste 6 săptămâni"]
 },
 en: {
  crumb: "Tests and Tools / Recovery",
  title: "Personalized Recovery Planner",
  lead: "Educational recovery orientation tool. Choose symptoms and receive a simple step-by-step plan.",
  setup: "Quick data",
  area: "Main area",
  pain: "Pain",
  mobility: "Mobility",
  goal: "Goal",
  days: "How long?",
  generate: "Generate plan",
  reset: "Reset",
  result: "Educational orientation plan",
  stage: "Recommended stage",
  daily: "What to do daily",
  avoid: "What to avoid",
  contact: "When to contact a doctor",
  print: "Print",
  disclaimer: "This tool is educational and does not diagnose. For severe pain, trauma, progressive numbness, weakness, fever or loss of bladder/bowel control, contact a doctor urgently.",
  areas: {
   spate: "Back / lower back",
   gat: "Neck / cervical",
   umar: "Shoulder / arm",
   genunchi: "Knee",
   sold: "Hip / pelvis",
   neurologic: "Neurological / walking"
  },
  goals: {
   durere: "Pain reduction",
   mobilitate: "Mobility",
   forta: "Strength",
   mers: "Walking and balance",
   postura: "Posture"
  },
  daysOptions: ["1–3 days", "4–14 days", "2–6 weeks", "over 6 weeks"]
 },
 ru: {
  crumb: "Тесты и инструменты / Восстановление",
  title: "План восстановления",
  lead: "Образовательный инструмент для ориентировочного плана восстановления по этапам.",
  setup: "Быстрые данные",
  area: "Основная зона",
  pain: "Боль",
  mobility: "Подвижность",
  goal: "Цель",
  days: "Как давно?",
  generate: "Создать план",
  reset: "Сброс",
  result: "Ориентировочный образовательный план",
  stage: "Рекомендуемый этап",
  daily: "Что делать ежедневно",
  avoid: "Чего избегать",
  contact: "Когда обратиться к врачу",
  print: "Печать",
  disclaimer: "Инструмент образовательный и не ставит диагноз. При сильной боли, травме, нарастающем онемении, слабости, температуре или нарушении контроля мочеиспускания/стула срочно обратитесь к врачу.",
  areas: {
   spate: "Спина / поясница",
   gat: "Шея / шейный отдел",
   umar: "Плечо / рука",
   genunchi: "Колено",
   sold: "Таз / бедро",
   neurologic: "Неврология / ходьба"
  },
  goals: {
   durere: "Снижение боли",
   mobilitate: "Подвижность",
   forta: "Сила",
   mers: "Ходьба и равновесие",
   postura: "Осанка"
  },
  daysOptions: ["1–3 дня", "4–14 дней", "2–6 недель", "более 6 недель"]
 },
 ua: {
  crumb: "Тести та інструменти / Відновлення",
  title: "План відновлення",
  lead: "Освітній інструмент для орієнтовного плану відновлення по етапах.",
  setup: "Швидкі дані",
  area: "Основна зона",
  pain: "Біль",
  mobility: "Рухливість",
  goal: "Мета",
  days: "Як давно?",
  generate: "Створити план",
  reset: "Скинути",
  result: "Орієнтовний освітній план",
  stage: "Рекомендований етап",
  daily: "Що робити щодня",
  avoid: "Чого уникати",
  contact: "Коли звернутися до лікаря",
  print: "Друк",
  disclaimer: "Інструмент освітній і не встановлює діагноз. При сильному болю, травмі, прогресуючому онімінні, слабкості, температурі або порушенні контролю сечі/калу терміново зверніться до лікаря.",
  areas: {
   spate: "Спина / поперек",
   gat: "Шия / шийний відділ",
   umar: "Плече / рука",
   genunchi: "Коліно",
   sold: "Таз / стегно",
   neurologic: "Неврологія / хода"
  },
  goals: {
   durere: "Зменшення болю",
   mobilitate: "Рухливість",
   forta: "Сила",
   mers: "Хода і рівновага",
   postura: "Постава"
  },
  daysOptions: ["1–3 дні", "4–14 днів", "2–6 тижнів", "понад 6 тижнів"]
 }
} as const;

function getLang(pathname: string): Lang {
 const first = pathname.split("/").filter(Boolean)[0];
 return isLang(first) ? first : "ro";
}

function stageFrom(pain: number, mobility: number, goal: Goal): Phase {
 if (pain >= 7 || mobility <= 3) return "calm";
 if (pain >= 4 || mobility <= 5) return "mobilizare";
 if (goal === "forta" || goal === "postura") return "forta";
 return "functie";
}

const stageLabels: Record<Lang, Record<Phase, string>> = {
 ro: { calm: "Calmare și protecție", mobilizare: "Mobilizare blândă", forta: "Forță controlată", functie: "Funcție și revenire" },
 en: { calm: "Calm and protection", mobilizare: "Gentle mobility", forta: "Controlled strength", functie: "Function and return" },
 ru: { calm: "Снижение нагрузки", mobilizare: "Мягкая мобилизация", forta: "Контролируемая сила", functie: "Функция и возвращение" },
 ua: { calm: "Зниження навантаження", mobilizare: "М’яка мобілізація", forta: "Контрольована сила", functie: "Функція і повернення" }
};

const planText: Record<Lang, Record<Phase, { daily: string[]; avoid: string[]; contact: string[] }>> = {
 ro: {
  calm: {
   daily: ["Mișcare scurtă și blândă de 3–5 ori pe zi.", "Respirație lentă și relaxarea musculaturii.", "Poziții confortabile, fără repaus complet prelungit."],
   avoid: ["Exerciții dureroase sau forțate.", "Ridicări grele și mișcări bruște.", "Statul complet nemișcat multe ore."],
   contact: ["Durere severă sau în creștere.", "Slăbiciune, amorțeală progresivă.", "Durere după traumă sau febră."]
  },
  mobilizare: {
   daily: ["Mobilizări ușoare în amplitudine confortabilă.", "Plimbări scurte dacă sunt tolerate.", "Exerciții de control și postură 5–10 minute."],
   avoid: ["Întinderi agresive.", "Sărituri, alergare sau efort intens.", "Creșterea rapidă a volumului."]
  ,
   contact: ["Simptomele nu se reduc în 7–14 zile.", "Durerea coboară pe membru sau amorțeala crește.", "Apare instabilitate sau pierdere de forță."]
  },
  forta: {
   daily: ["Exerciții cu rezistență mică, progresiv.", "Control lent al mișcării, fără compensări.", "Pauză între serii și monitorizarea durerii."],
   avoid: ["Greutăți mari fără evaluare.", "Durere peste 5/10 în timpul exercițiului.", "Tehnică grăbită sau necontrolată."],
   contact: ["Durerea crește după fiecare antrenament.", "Apare slăbiciune nouă.", "Nu poți progresa fără simptome."]
  },
  functie: {
   daily: ["Exerciții apropiate de activitățile zilnice.", "Mers, echilibru și coordonare.", "Creștere treptată a duratei și intensității."],
   avoid: ["Revenire bruscă la efort maxim.", "Ignorarea oboselii sau durerii persistente.", "Program fără zile de recuperare."],
   contact: ["Simptomele revin la activități normale.", "Ai nevoie de plan individualizat.", "Există teamă de mișcare sau instabilitate."]
  }
 },
 en: {
  calm: { daily: ["Short gentle movement 3–5 times daily.", "Slow breathing and muscle relaxation.", "Comfortable positions, avoiding prolonged complete rest."], avoid: ["Painful or forced exercises.", "Heavy lifting and sudden movements.", "Staying completely still for many hours."], contact: ["Severe or increasing pain.", "Progressive weakness or numbness.", "Pain after trauma or fever."] },
  mobilizare: { daily: ["Gentle mobility in a comfortable range.", "Short walks if tolerated.", "Control and posture exercises for 5–10 minutes."], avoid: ["Aggressive stretching.", "Jumping, running or intense effort.", "Rapidly increasing volume."], contact: ["Symptoms do not improve in 7–14 days.", "Pain travels down the limb or numbness increases.", "Instability or loss of strength appears."] },
  forta: { daily: ["Low-resistance progressive exercises.", "Slow movement control without compensation.", "Rest between sets and monitor pain."], avoid: ["Heavy loads without assessment.", "Pain above 5/10 during exercise.", "Rushed or uncontrolled technique."], contact: ["Pain increases after every session.", "New weakness appears.", "You cannot progress without symptoms."] },
  functie: { daily: ["Exercises close to daily activities.", "Walking, balance and coordination.", "Gradual increase in duration and intensity."], avoid: ["Sudden return to maximum effort.", "Ignoring fatigue or persistent pain.", "No recovery days."], contact: ["Symptoms return during normal activity.", "You need an individualized plan.", "Fear of movement or instability exists."] }
 },
 ru: {
  calm: { daily: ["Короткие мягкие движения 3–5 раз в день.", "Медленное дыхание и расслабление мышц.", "Удобные положения без длительного полного покоя."], avoid: ["Болезненные или силовые упражнения.", "Тяжелые подъемы и резкие движения.", "Полная неподвижность много часов."], contact: ["Сильная или нарастающая боль.", "Прогрессирующая слабость или онемение.", "Боль после травмы или температура."] },
  mobilizare: { daily: ["Мягкая мобилизация в комфортной амплитуде.", "Короткие прогулки при переносимости.", "Упражнения контроля и осанки 5–10 минут."], avoid: ["Агрессивная растяжка.", "Прыжки, бег или интенсивная нагрузка.", "Резкое увеличение объема."], contact: ["Нет улучшения за 7–14 дней.", "Боль спускается в конечность или онемение растет.", "Появляется нестабильность или потеря силы."] },
  forta: { daily: ["Упражнения с малым сопротивлением, постепенно.", "Медленный контроль движения без компенсаций.", "Отдых между подходами и контроль боли."], avoid: ["Большие веса без оценки.", "Боль выше 5/10 во время упражнений.", "Поспешная или неконтролируемая техника."], contact: ["Боль растет после каждой тренировки.", "Появляется новая слабость.", "Невозможно прогрессировать без симптомов."] },
  functie: { daily: ["Упражнения, близкие к бытовым действиям.", "Ходьба, равновесие и координация.", "Постепенное увеличение длительности и интенсивности."], avoid: ["Резкое возвращение к максимальной нагрузке.", "Игнорирование усталости или стойкой боли.", "Отсутствие дней восстановления."], contact: ["Симптомы возвращаются при обычной активности.", "Нужен индивидуальный план.", "Есть страх движения или нестабильность."] }
 },
 ua: {
  calm: { daily: ["Короткі м’які рухи 3–5 разів на день.", "Повільне дихання і розслаблення м’язів.", "Зручні положення без тривалого повного спокою."], avoid: ["Болючі або силові вправи.", "Важкі підйоми та різкі рухи.", "Повна нерухомість багато годин."], contact: ["Сильний або наростаючий біль.", "Прогресуюча слабкість або оніміння.", "Біль після травми або температура."] },
  mobilizare: { daily: ["М’яка мобілізація в комфортній амплітуді.", "Короткі прогулянки при переносимості.", "Вправи контролю і постави 5–10 хвилин."], avoid: ["Агресивне розтягування.", "Стрибки, біг або інтенсивне навантаження.", "Різке збільшення обсягу."], contact: ["Немає покращення за 7–14 днів.", "Біль спускається в кінцівку або оніміння зростає.", "З’являється нестабільність або втрата сили."] },
  forta: { daily: ["Вправи з малим опором, поступово.", "Повільний контроль руху без компенсацій.", "Відпочинок між підходами і контроль болю."], avoid: ["Великі ваги без оцінки.", "Біль понад 5/10 під час вправ.", "Поспішна або неконтрольована техніка."], contact: ["Біль зростає після кожного тренування.", "З’являється нова слабкість.", "Неможливо прогресувати без симптомів."] },
  functie: { daily: ["Вправи, близькі до щоденних дій.", "Хода, рівновага і координація.", "Поступове збільшення тривалості та інтенсивності."], avoid: ["Різке повернення до максимальної нагрузки.", "Ігнорування втоми або стійкого болю.", "Відсутність днів відновлення."], contact: ["Симптоми повертаються при звичайній активності.", "Потрібен індивідуальний план.", "Є страх руху або нестабільність."] }
 }
};

export default function RecoveryPlannerPage() {
 const lang = getLang(usePathname());
 const t = ui[lang];

 const [area, setArea] = useState<Area>("spate");
 const [pain, setPain] = useState(4);
 const [mobility, setMobility] = useState(6);
 const [goal, setGoal] = useState<Goal>("mobilitate");
 const [days, setDays] = useState(1);
 const [show, setShow] = useState(false);

 const phase = useMemo(() => stageFrom(pain, mobility, goal), [pain, mobility, goal]);
 const plan = planText[lang][phase];
 const score = Math.max(10, Math.min(100, Math.round((10 - pain) * 5 + mobility * 4 + (days <= 1 ? 15 : days === 2 ? 8 : 3))));

 return (
  <>
   <section className="pageHero">
    <div className="rmShell">
     <p className="crumb">{t.crumb}</p>
     <h1>{t.title}</h1>
     <p className="lead">{t.lead}</p>
    </div>
   </section>

   <section className="rmSection recoveryApp">
    <div className="rmShell recoveryGrid">
     <aside className="recoveryPanel">
      <span className="miniBadge">{t.setup}</span>

      <label>{t.area}
       <select value={area} onChange={(e) => setArea(e.target.value as Area)}>
        {(Object.keys(t.areas) as Area[]).map((key) => <option key={key} value={key}>{t.areas[key]}</option>)}
       </select>
      </label>

      <label>{t.goal}
       <select value={goal} onChange={(e) => setGoal(e.target.value as Goal)}>
        {(Object.keys(t.goals) as Goal[]).map((key) => <option key={key} value={key}>{t.goals[key]}</option>)}
       </select>
      </label>

      <label>{t.days}
       <select value={days} onChange={(e) => setDays(Number(e.target.value))}>
        {t.daysOptions.map((x, idx) => <option key={x} value={idx}>{x}</option>)}
       </select>
      </label>

      <div className="rangeBox">
       <b>{t.pain}: {pain}/10</b>
       <input type="range" min="0" max="10" value={pain} onChange={(e) => setPain(Number(e.target.value))} />
      </div>

      <div className="rangeBox">
       <b>{t.mobility}: {mobility}/10</b>
       <input type="range" min="0" max="10" value={mobility} onChange={(e) => setMobility(Number(e.target.value))} />
      </div>

      <button className="blueBtn" type="button" onClick={() => setShow(true)}>{t.generate}</button>
      <button className="softBtn" type="button" onClick={() => { setPain(4); setMobility(6); setGoal("mobilitate"); setArea("spate"); setDays(1); setShow(false); }}>{t.reset}</button>
     </aside>

     <main className="recoveryResult">
      {!show ? (
       <div className="emptyResult">
        <img src="https://img.icons8.com/ios-filled/80/0b8fd8/physiotherapy.png" alt="" />
        <h2>{t.result}</h2>
        <p>{t.lead}</p>
       </div>
      ) : (
       <>
        <div className="recoveryHeroCard">
         <div>
          <span className="miniBadge">{t.result}</span>
          <h2>{stageLabels[lang][phase]}</h2>
          <p>{t.areas[area]} · {t.goals[goal]}</p>
         </div>
         <div className="recoveryScore">
          <small>Score</small>
          <b>{score}%</b>
         </div>
        </div>

        <div className="recoveryCards">
         <article>
          <h3>{t.daily}</h3>
          <ul>{plan.daily.map((x) => <li key={x}>{x}</li>)}</ul>
         </article>
         <article>
          <h3>{t.avoid}</h3>
          <ul>{plan.avoid.map((x) => <li key={x}>{x}</li>)}</ul>
         </article>
         <article className="warningCard">
          <h3>{t.contact}</h3>
          <ul>{plan.contact.map((x) => <li key={x}>{x}</li>)}</ul>
         </article>
        </div>

        <div className="recoveryDisclaimer">
         <b>REVIMED PLUS+</b>
         <p>{t.disclaimer}</p>
         <button className="softBtn" type="button" onClick={() => window.print()}>{t.print}</button>
        </div>
       </>
      )}
     </main>
    </div>
   </section>
  </>
 );
}
