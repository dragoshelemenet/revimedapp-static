"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type ToolSlug =
  | "test-postura-coloana"
  | "monitor-dureri-spate"
  | "test-risc-cadere-echilibru"
  | "planner-exercitii-zilnice"
  | "test-stres-somn-respiratie"
  | "pregatire-consultatie";

type Answer = 0 | 1 | 2 | 3;

type Question = {
  ro: string;
  en: string;
  ru: string;
  ua: string;
};

type ToolConfig = {
  slug: ToolSlug;
  icon: string;
  tag: Record<Lang, string>;
  title: Record<Lang, string>;
  lead: Record<Lang, string>;
  questions: Question[];
  low: Record<Lang, string>;
  medium: Record<Lang, string>;
  high: Record<Lang, string>;
  tips: Record<Lang, string[]>;
};

const common = {
  ro: {
    next: "Următoarea",
    back: "Înapoi",
    result: "Rezultat orientativ",
    restart: "Începe din nou",
    print: "Tipărește",
    progress: "Progres",
    choose: "Alege răspunsul",
    answers: ["Nu", "Rar", "Des", "Foarte des"],
    score: "Scor",
    recommendation: "Recomandări",
    contact: "Pentru interpretare corectă și plan personalizat, programează o consultație la Revimed PLUS+.",
    disclaimer: "Instrument educațional. Nu pune diagnostic și nu înlocuiește consultația medicului."
  },
  en: {
    next: "Next",
    back: "Back",
    result: "Orientation result",
    restart: "Start again",
    print: "Print",
    progress: "Progress",
    choose: "Choose an answer",
    answers: ["No", "Rarely", "Often", "Very often"],
    score: "Score",
    recommendation: "Recommendations",
    contact: "For proper interpretation and a personalized plan, schedule a consultation at Revimed PLUS+.",
    disclaimer: "Educational tool. It does not diagnose and does not replace medical consultation."
  },
  ru: {
    next: "Далее",
    back: "Назад",
    result: "Ориентировочный результат",
    restart: "Начать заново",
    print: "Печать",
    progress: "Прогресс",
    choose: "Выберите ответ",
    answers: ["Нет", "Редко", "Часто", "Очень часто"],
    score: "Балл",
    recommendation: "Рекомендации",
    contact: "Для правильной интерпретации и индивидуального плана запишитесь на консультацию в Revimed PLUS+.",
    disclaimer: "Образовательный инструмент. Не ставит диагноз и не заменяет консультацию врача."
  },
  ua: {
    next: "Далі",
    back: "Назад",
    result: "Орієнтовний результат",
    restart: "Почати знову",
    print: "Друк",
    progress: "Прогрес",
    choose: "Оберіть відповідь",
    answers: ["Ні", "Рідко", "Часто", "Дуже часто"],
    score: "Бал",
    recommendation: "Рекомендації",
    contact: "Для правильної інтерпретації та індивідуального плану запишіться на консультацію в Revimed PLUS+.",
    disclaimer: "Освітній інструмент. Не встановлює діагноз і не замінює консультацію лікаря."
  }
} as const;

const configs: Record<ToolSlug, ToolConfig> = {
  "test-postura-coloana": {
    slug: "test-postura-coloana",
    icon: "https://img.icons8.com/ios-filled/80/0b8fd8/spine.png",
    tag: { ro: "Coloană", en: "Spine", ru: "Позвоночник", ua: "Хребет" },
    title: {
      ro: "Test Postură și Coloană",
      en: "Posture and Spine Test",
      ru: "Тест осанки и позвоночника",
      ua: "Тест постави та хребта"
    },
    lead: {
      ro: "Verifică orientativ postura, obiceiurile de lucru, durerile cervicale/lombare și semnalele care pot necesita evaluare.",
      en: "Check posture, work habits, neck/lower back pain and signs that may require assessment.",
      ru: "Ориентировочная оценка осанки, привычек работы, боли в шее/пояснице и признаков для консультации.",
      ua: "Орієнтовна оцінка постави, робочих звичок, болю в шиї/попереку та ознак для консультації."
    },
    questions: [
      { ro: "Stai mult timp pe scaun fără pauze?", en: "Do you sit for long periods without breaks?", ru: "Вы долго сидите без перерывов?", ua: "Ви довго сидите без перерв?" },
      { ro: "Ai dureri cervicale sau lombare repetate?", en: "Do you have repeated neck or lower back pain?", ru: "Есть повторяющаяся боль в шее или пояснице?", ua: "Є повторюваний біль у шиї або попереку?" },
      { ro: "Simți umerii ridicați sau capul proiectat înainte?", en: "Do your shoulders feel raised or your head forward?", ru: "Плечи напряжены или голова подана вперед?", ua: "Плечі напружені або голова подана вперед?" },
      { ro: "Ai amorțeli, furnicături sau durere pe braț/picior?", en: "Do you have numbness, tingling or pain down an arm/leg?", ru: "Есть онемение, покалывание или боль в руке/ноге?", ua: "Є оніміння, поколювання або біль у руці/нозі?" },
      { ro: "Durerea crește la efort, stat jos sau ridicare?", en: "Does pain increase with effort, sitting or lifting?", ru: "Боль усиливается при нагрузке, сидении или подъеме?", ua: "Біль посилюється при навантаженні, сидінні або підйомі?" },
      { ro: "Ai avut episoade în care spatele se blochează?", en: "Have you had episodes where your back locks up?", ru: "Были эпизоды блокировки спины?", ua: "Були епізоди блокування спини?" }
    ],
    low: { ro: "Risc postural redus", en: "Low posture risk", ru: "Низкий постуральный риск", ua: "Низький постуральний ризик" },
    medium: { ro: "Risc postural moderat", en: "Moderate posture risk", ru: "Умеренный постуральный риск", ua: "Помірний постуральний ризик" },
    high: { ro: "Risc crescut pentru coloană", en: "Higher spine-related risk", ru: "Повышенный риск для позвоночника", ua: "Підвищений ризик для хребта" },
    tips: {
      ro: ["Fă pauze scurte la 30–45 minute.", "Lucrează mobilitatea cervicală și toracică blând.", "Dacă apar amorțeli sau slăbiciune, programează evaluare."],
      en: ["Take short breaks every 30–45 minutes.", "Work gently on neck and thoracic mobility.", "If numbness or weakness appears, schedule an assessment."],
      ru: ["Делайте короткие перерывы каждые 30–45 минут.", "Мягко работайте с подвижностью шеи и грудного отдела.", "При онемении или слабости запишитесь на оценку."],
      ua: ["Робіть короткі перерви кожні 30–45 хвилин.", "М’яко працюйте з рухливістю шиї та грудного відділу.", "При онімінні або слабкості запишіться на оцінку."]
    }
  },

  "monitor-dureri-spate": {
    slug: "monitor-dureri-spate",
    icon: "https://img.icons8.com/ios-filled/80/0b8fd8/back-pain.png",
    tag: { ro: "Durere", en: "Pain", ru: "Боль", ua: "Біль" },
    title: {
      ro: "Monitor Dureri de Spate",
      en: "Back Pain Monitor",
      ru: "Монитор боли в спине",
      ua: "Монітор болю в спині"
    },
    lead: {
      ro: "Construiește un rezumat util pentru consultație: intensitate, factori care agravează, limitări și semnale de alarmă.",
      en: "Build a useful consultation summary: intensity, aggravating factors, limitations and red flags.",
      ru: "Сформируйте полезное резюме для консультации: интенсивность, факторы ухудшения, ограничения и тревожные признаки.",
      ua: "Сформуйте корисне резюме для консультації: інтенсивність, фактори погіршення, обмеження та тривожні ознаки."
    },
    questions: [
      { ro: "Durerea este peste 5/10 în majoritatea zilelor?", en: "Is pain above 5/10 most days?", ru: "Боль выше 5/10 в большинстве дней?", ua: "Біль понад 5/10 у більшість днів?" },
      { ro: "Durerea coboară pe picior sau apare amorțeală?", en: "Does pain go down the leg or numbness appear?", ru: "Боль спускается в ногу или появляется онемение?", ua: "Біль спускається в ногу або з’являється оніміння?" },
      { ro: "Statul jos agravează clar simptomele?", en: "Does sitting clearly worsen symptoms?", ru: "Сидение явно усиливает симптомы?", ua: "Сидіння явно посилює симптоми?" },
      { ro: "Ridicatul, aplecatul sau tusea cresc durerea?", en: "Do lifting, bending or coughing increase pain?", ru: "Подъем, наклон или кашель усиливают боль?", ua: "Підйом, нахил або кашель посилюють біль?" },
      { ro: "Durerea îți limitează mersul sau somnul?", en: "Does pain limit walking or sleep?", ru: "Боль ограничивает ходьбу или сон?", ua: "Біль обмежує ходу або сон?" },
      { ro: "Ai avut traumă recentă sau scădere inexplicabilă în greutate?", en: "Recent trauma or unexplained weight loss?", ru: "Была недавняя травма или необъяснимая потеря веса?", ua: "Була недавня травма або незрозуміла втрата ваги?" }
    ],
    low: { ro: "Durere ușoară monitorizabilă", en: "Mild pain to monitor", ru: "Легкая боль для наблюдения", ua: "Легкий біль для спостереження" },
    medium: { ro: "Durere cu impact funcțional", en: "Pain with functional impact", ru: "Боль с функциональным влиянием", ua: "Біль з функціональним впливом" },
    high: { ro: "Durere cu semnale importante", en: "Pain with important warning signs", ru: "Боль с важными признаками", ua: "Біль з важливими ознаками" },
    tips: {
      ro: ["Notează zilnic durerea 0–10 și ce o agravează.", "Evită repausul complet prelungit.", "Vino cu rezumatul la consultație pentru plan clar."],
      en: ["Track pain 0–10 and triggers daily.", "Avoid prolonged complete rest.", "Bring the summary to consultation for a clear plan."],
      ru: ["Ежедневно отмечайте боль 0–10 и триггеры.", "Избегайте длительного полного покоя.", "Принесите резюме на консультацию."],
      ua: ["Щодня відмічайте біль 0–10 і тригери.", "Уникайте тривалого повного спокою.", "Принесіть резюме на консультацію."]
    }
  },

  "test-risc-cadere-echilibru": {
    slug: "test-risc-cadere-echilibru",
    icon: "https://img.icons8.com/ios-filled/80/0b8fd8/walking.png",
    tag: { ro: "Echilibru", en: "Balance", ru: "Равновесие", ua: "Рівновага" },
    title: {
      ro: "Test Risc Cădere / Echilibru",
      en: "Fall Risk / Balance Test",
      ru: "Тест риска падения / равновесия",
      ua: "Тест ризику падіння / рівноваги"
    },
    lead: {
      ro: "Evaluează orientativ mersul, instabilitatea, amețeala, căderile și nevoia de recuperare pentru echilibru.",
      en: "Orientatively assess walking, instability, dizziness, falls and need for balance recovery.",
      ru: "Оценка ходьбы, нестабильности, головокружения, падений и необходимости восстановления равновесия.",
      ua: "Оцінка ходи, нестабільності, запаморочення, падінь і потреби у відновленні рівноваги."
    },
    questions: [
      { ro: "Ai avut căderi în ultimele 6 luni?", en: "Have you fallen in the last 6 months?", ru: "Были падения за последние 6 месяцев?", ua: "Були падіння за останні 6 місяців?" },
      { ro: "Te simți nesigur la mers sau la întoarcere?", en: "Do you feel unstable while walking or turning?", ru: "Есть неустойчивость при ходьбе или повороте?", ua: "Є нестійкість при ходьбі або повороті?" },
      { ro: "Ai amețeli la ridicare sau schimbarea poziției?", en: "Dizziness when standing or changing position?", ru: "Головокружение при вставании или смене положения?", ua: "Запаморочення при вставанні або зміні положення?" },
      { ro: "Ai nevoie să te ții de pereți/mobilier?", en: "Do you need to hold walls or furniture?", ru: "Нужно держаться за стены или мебель?", ua: "Потрібно триматися за стіни або меблі?" },
      { ro: "Ai slăbiciune în picioare sau pași mici?", en: "Leg weakness or short steps?", ru: "Слабость в ногах или мелкие шаги?", ua: "Слабкість у ногах або дрібні кроки?" },
      { ro: "Eviți ieșirile de teamă să nu cazi?", en: "Do you avoid going out due to fear of falling?", ru: "Избегаете выходов из-за страха падения?", ua: "Уникаєте виходів через страх падіння?" }
    ],
    low: { ro: "Risc redus", en: "Low risk", ru: "Низкий риск", ua: "Низький ризик" },
    medium: { ro: "Risc moderat", en: "Moderate risk", ru: "Умеренный риск", ua: "Помірний ризик" },
    high: { ro: "Risc crescut de cădere", en: "High fall risk", ru: "Высокий риск падения", ua: "Високий ризик падіння" },
    tips: {
      ro: ["Începe exerciții de echilibru doar în siguranță.", "Verifică încălțămintea și obstacolele din casă.", "Pentru căderi repetate, programează evaluare neurologică/recuperare."],
      en: ["Start balance exercises only safely.", "Check footwear and home obstacles.", "For repeated falls, schedule neurological/recovery assessment."],
      ru: ["Начинайте упражнения на равновесие только безопасно.", "Проверьте обувь и препятствия дома.", "При повторных падениях нужна консультация."],
      ua: ["Починайте вправи на рівновагу лише безпечно.", "Перевірте взуття і перешкоди вдома.", "При повторних падіннях потрібна консультація."]
    }
  },

  "planner-exercitii-zilnice": {
    slug: "planner-exercitii-zilnice",
    icon: "https://img.icons8.com/ios-filled/80/0b8fd8/exercise.png",
    tag: { ro: "Exerciții", en: "Exercises", ru: "Упражнения", ua: "Вправи" },
    title: {
      ro: "Planner Exerciții Zilnice",
      en: "Daily Exercise Planner",
      ru: "Планер ежедневных упражнений",
      ua: "Планер щоденних вправ"
    },
    lead: {
      ro: "Alege scopul și nivelul de dificultate pentru o rutină educațională de 5–10 minute.",
      en: "Choose goal and difficulty for a 5–10 minute educational routine.",
      ru: "Выберите цель и сложность для образовательной рутины на 5–10 минут.",
      ua: "Оберіть мету та складність для освітньої рутини на 5–10 хвилин."
    },
    questions: [
      { ro: "Ai durere când te miști?", en: "Do you have pain when moving?", ru: "Есть боль при движении?", ua: "Є біль при русі?" },
      { ro: "Ai rigiditate dimineața?", en: "Morning stiffness?", ru: "Утренняя скованность?", ua: "Ранкова скутість?" },
      { ro: "Obosești rapid la exerciții?", en: "Do you tire quickly during exercises?", ru: "Быстро устаете при упражнениях?", ua: "Швидко втомлюєтесь під час вправ?" },
      { ro: "Ai probleme de echilibru?", en: "Balance problems?", ru: "Проблемы равновесия?", ua: "Проблеми рівноваги?" },
      { ro: "Ai nevoie de exerciții foarte blânde?", en: "Do you need very gentle exercises?", ru: "Нужны очень мягкие упражнения?", ua: "Потрібні дуже м’які вправи?" }
    ],
    low: { ro: "Rutină ușoară", en: "Easy routine", ru: "Легкая рутина", ua: "Легка рутина" },
    medium: { ro: "Rutină moderată", en: "Moderate routine", ru: "Умеренная рутина", ua: "Помірна рутина" },
    high: { ro: "Rutină foarte blândă", en: "Very gentle routine", ru: "Очень мягкая рутина", ua: "Дуже м’яка рутина" },
    tips: {
      ro: ["Începe cu 5 minute și crește treptat.", "Durerea nu trebuie să crească peste 5/10.", "Oprește exercițiul dacă apare amețeală sau slăbiciune."],
      en: ["Start with 5 minutes and progress gradually.", "Pain should not rise above 5/10.", "Stop if dizziness or weakness appears."],
      ru: ["Начните с 5 минут и увеличивайте постепенно.", "Боль не должна быть выше 5/10.", "Остановитесь при головокружении или слабости."],
      ua: ["Почніть з 5 хвилин і збільшуйте поступово.", "Біль не має бути вище 5/10.", "Зупиніться при запамороченні або слабкості."]
    }
  },

  "test-stres-somn-respiratie": {
    slug: "test-stres-somn-respiratie",
    icon: "https://img.icons8.com/ios-filled/80/0b8fd8/lungs.png",
    tag: { ro: "Somn", en: "Sleep", ru: "Сон", ua: "Сон" },
    title: {
      ro: "Test Stres, Somn și Respirație",
      en: "Stress, Sleep and Breathing Test",
      ru: "Тест стреса, сна и дыхания",
      ua: "Тест стресу, сну та дихання"
    },
    lead: {
      ro: "Verifică orientativ stresul, calitatea somnului, respirația și nivelul de tensiune corporală.",
      en: "Check stress, sleep quality, breathing and body tension.",
      ru: "Оценка стресса, качества сна, дыхания и телесного напряжения.",
      ua: "Оцінка стресу, якості сну, дихання і тілесного напруження."
    },
    questions: [
      { ro: "Adormi greu sau te trezești des?", en: "Hard to fall asleep or frequent waking?", ru: "Трудно заснуть или частые пробуждения?", ua: "Важко заснути або часті пробудження?" },
      { ro: "Simți respirația superficială sau tensionată?", en: "Shallow or tense breathing?", ru: "Поверхностное или напряженное дыхание?", ua: "Поверхневе або напружене дихання?" },
      { ro: "Ai tensiune în gât, umeri sau piept?", en: "Tension in neck, shoulders or chest?", ru: "Напряжение в шее, плечах или груди?", ua: "Напруження в шиї, плечах або грудях?" },
      { ro: "Te simți obosit chiar după somn?", en: "Tired even after sleep?", ru: "Усталость даже после сна?", ua: "Втома навіть після сну?" },
      { ro: "Stresul îți agravează durerea sau simptomele?", en: "Does stress worsen pain or symptoms?", ru: "Стресс усиливает боль или симптомы?", ua: "Стрес посилює біль або симптоми?" },
      { ro: "Ai palpitații, neliniște sau senzație de lipsă de aer?", en: "Palpitations, restlessness or air hunger?", ru: "Сердцебиение, тревога или нехватка воздуха?", ua: "Серцебиття, тривога або нестача повітря?" }
    ],
    low: { ro: "Stres respirator redus", en: "Low stress load", ru: "Низкая нагрузка стресса", ua: "Низьке навантаження стресу" },
    medium: { ro: "Stres și somn afectate moderat", en: "Moderate stress/sleep impact", ru: "Умеренное влияние стресса/сна", ua: "Помірний вплив стресу/сну" },
    high: { ro: "Stres, somn sau respirație afectate important", en: "Important stress, sleep or breathing impact", ru: "Значимое влияние стресса, сна или дыхания", ua: "Значний вплив стресу, сну або дихання" },
    tips: {
      ro: ["Încearcă 3–5 minute de respirație lentă.", "Evită ecranele înainte de somn.", "Dacă apar dureri toracice sau lipsă severă de aer, cere ajutor medical."],
      en: ["Try 3–5 minutes of slow breathing.", "Avoid screens before sleep.", "If chest pain or severe air hunger appears, seek medical help."],
      ru: ["Попробуйте 3–5 минут медленного дыхания.", "Избегайте экранов перед сном.", "При боли в груди или сильной нехватке воздуха обратитесь за помощью."],
      ua: ["Спробуйте 3–5 хвилин повільного дихання.", "Уникайте екранів перед сном.", "При болю в грудях або сильній нестачі повітря зверніться по допомогу."]
    }
  },

  "pregatire-consultatie": {
    slug: "pregatire-consultatie",
    icon: "https://img.icons8.com/ios-filled/80/0b8fd8/clipboard.png",
    tag: { ro: "Consultație", en: "Consultation", ru: "Консультация", ua: "Консультація" },
    title: {
      ro: "Pregătire pentru Consultație",
      en: "Consultation Preparation",
      ru: "Подготовка к консультации",
      ua: "Підготовка до консультації"
    },
    lead: {
      ro: "Răspunde la câteva întrebări și primești un rezumat util pentru medic.",
      en: "Answer a few questions and receive a useful summary for the doctor.",
      ru: "Ответьте на вопросы и получите полезное резюме для врача.",
      ua: "Дайте відповіді на питання й отримайте корисне резюме для лікаря."
    },
    questions: [
      { ro: "Simptomele durează de peste 2 săptămâni?", en: "Symptoms for more than 2 weeks?", ru: "Симптомы более 2 недель?", ua: "Симптоми понад 2 тижні?" },
      { ro: "Ai investigații anterioare: RMN, CT, analize?", en: "Do you have previous MRI, CT or tests?", ru: "Есть предыдущие МРТ, КТ или анализы?", ua: "Є попередні МРТ, КТ або аналізи?" },
      { ro: "Ai tratamente sau medicamente folosite recent?", en: "Recent treatments or medication?", ru: "Недавнее лечение или лекарства?", ua: "Нещодавнє лікування або ліки?" },
      { ro: "Simptomele afectează somnul, mersul sau munca?", en: "Symptoms affect sleep, walking or work?", ru: "Симптомы влияют на сон, ходьбу или работу?", ua: "Симптоми впливають на сон, ходу або роботу?" },
      { ro: "Există amorțeală, slăbiciune sau amețeală?", en: "Numbness, weakness or dizziness?", ru: "Онемение, слабость или головокружение?", ua: "Оніміння, слабкість або запаморочення?" },
      { ro: "Ai întrebări clare pentru medic?", en: "Do you have clear questions for the doctor?", ru: "Есть четкие вопросы врачу?", ua: "Є чіткі питання до лікаря?" }
    ],
    low: { ro: "Pregătire simplă", en: "Simple preparation", ru: "Простая подготовка", ua: "Проста підготовка" },
    medium: { ro: "Consultație cu informații importante", en: "Consultation with important information", ru: "Консультация с важной информацией", ua: "Консультація з важливою інформацією" },
    high: { ro: "Consultație recomandată cât mai curând", en: "Consultation recommended soon", ru: "Консультация рекомендована в ближайшее время", ua: "Консультація рекомендована найближчим часом" },
    tips: {
      ro: ["Adu investigațiile și lista medicamentelor.", "Notează când a început problema și ce o agravează.", "Pregătește 3 întrebări principale pentru medic."],
      en: ["Bring investigations and medication list.", "Write when the problem started and what worsens it.", "Prepare 3 main questions for the doctor."],
      ru: ["Принесите обследования и список лекарств.", "Запишите когда началась проблема и что ухудшает.", "Подготовьте 3 главных вопроса врачу."],
      ua: ["Принесіть обстеження та список ліків.", "Запишіть коли почалась проблема і що погіршує.", "Підготуйте 3 головні питання лікарю."]
    }
  }
};

function getLang(pathname: string): Lang {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : "ro";
}

export default function RevimedSmartTool({ slug }: { slug: ToolSlug }) {
  const lang = getLang(usePathname());
  const cfg = configs[slug];
  const text = common[lang];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(Array(cfg.questions.length).fill(0));
  const [done, setDone] = useState(false);

  const score = useMemo(() => answers.reduce<number>((sum, item) => sum + Number(item), 0), [answers]);
  const max = cfg.questions.length * 3;
  const percent = Math.round((score / max) * 100);

  const resultLabel = percent < 34 ? cfg.low[lang] : percent < 67 ? cfg.medium[lang] : cfg.high[lang];
  const progress = done ? 100 : Math.round(((step + 1) / cfg.questions.length) * 100);

  function select(value: Answer) {
    const copy = [...answers];
    copy[step] = value;
    setAnswers(copy);
    if (step < cfg.questions.length - 1) setStep(step + 1);
    else setDone(true);
  }

  return (
    <>
      <section className="pageHero smartToolHero">
        <div className="rmShell">
          <p className="crumb">REVIMED PLUS+ / {cfg.tag[lang]}</p>
          <h1>{cfg.title[lang]}</h1>
          <p className="lead">{cfg.lead[lang]}</p>
        </div>
      </section>

      <section className="rmSection smartToolSection">
        <div className="rmShell smartToolWrap">
          <div className="smartProgress">
            <span>{text.progress}</span>
            <b>{progress}%</b>
            <div><i style={{ width: `${progress}%` }} /></div>
          </div>

          {!done ? (
            <article className="smartQuestion">
              <img src={cfg.icon} alt="" />
              <span className="miniBadge">{step + 1} / {cfg.questions.length}</span>
              <h2>{cfg.questions[step][lang]}</h2>
              <p>{text.choose}</p>

              <div className="smartAnswers">
                {text.answers.map((label, idx) => (
                  <button key={label} type="button" onClick={() => select(idx as Answer)}>
                    <b>{label}</b>
                    <small>{idx}/3</small>
                  </button>
                ))}
              </div>

              <div className="smartNav">
                <button className="softBtn" type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
                  {text.back}
                </button>
              </div>
            </article>
          ) : (
            <article className="smartResult">
              <div className="smartResultTop">
                <div>
                  <span className="miniBadge">{text.result}</span>
                  <h2>{resultLabel}</h2>
                  <p>{text.score}: {score}/{max} · {percent}%</p>
                </div>
                <img src={cfg.icon} alt="" />
              </div>

              <div className="smartTips">
                <h3>{text.recommendation}</h3>
                <ul>
                  {cfg.tips[lang].map((tip) => <li key={tip}>{tip}</li>)}
                </ul>
              </div>

              <div className="smartNotice">
                <p>{text.contact}</p>
                <small>{text.disclaimer}</small>
              </div>

              <div className="smartActions">
                <button className="blueBtn" type="button" onClick={() => window.print()}>{text.print}</button>
                <button className="softBtn" type="button" onClick={() => { setStep(0); setAnswers(Array(cfg.questions.length).fill(0)); setDone(false); }}>
                  {text.restart}
                </button>
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
