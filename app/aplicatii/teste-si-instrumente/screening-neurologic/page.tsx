"use client";

import { useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Severity = 0 | 1 | 2 | 3;
type Category = "alarm" | "motor" | "sensory" | "cognitive" | "balance" | "pain" | "vegetative";

type Question = {
  id: number;
  category: Category;
  alarm?: boolean;
  ro: string;
  en: string;
  ru: string;
  ua: string;
  hint: Record<Lang, string>;
};

const questions: Question[] = [
  {
    id: 1,
    category: "alarm",
    alarm: true,
    ro: "Slăbiciune bruscă pe o parte a feței, brațului sau piciorului",
    en: "Sudden weakness on one side of the face, arm or leg",
    ru: "Внезапная слабость одной стороны лица, руки или ноги",
    ua: "Раптова слабкість однієї сторони обличчя, руки або ноги",
    hint: {
      ro: "Poate fi semn de accident vascular cerebral.",
      en: "May be a sign of stroke.",
      ru: "Может быть признаком инсульта.",
      ua: "Може бути ознакою інсульту."
    }
  },
  {
    id: 2,
    category: "alarm",
    alarm: true,
    ro: "Tulburare bruscă de vorbire, confuzie sau imposibilitatea de a formula cuvinte",
    en: "Sudden speech difficulty, confusion or inability to form words",
    ru: "Внезапное нарушение речи, спутанность или невозможность сформулировать слова",
    ua: "Раптове порушення мовлення, сплутаність або неможливість сформулювати слова",
    hint: {
      ro: "Semnal neurologic major.",
      en: "Major neurological warning sign.",
      ru: "Серьёзный неврологический тревожный признак.",
      ua: "Серйозна неврологічна тривожна ознака."
    }
  },
  {
    id: 3,
    category: "alarm",
    alarm: true,
    ro: "Pierderea bruscă a vederii sau vedere dublă instalată brusc",
    en: "Sudden vision loss or sudden double vision",
    ru: "Внезапная потеря зрения или внезапное двоение",
    ua: "Раптова втрата зору або раптове двоїння",
    hint: {
      ro: "Necesită evaluare urgentă.",
      en: "Requires urgent evaluation.",
      ru: "Требует срочной оценки.",
      ua: "Потребує термінової оцінки."
    }
  },
  {
    id: 4,
    category: "alarm",
    alarm: true,
    ro: "Cea mai puternică durere de cap din viață sau durere apărută brusc",
    en: "The worst headache of your life or sudden severe headache",
    ru: "Самая сильная головная боль в жизни или внезапная сильная боль",
    ua: "Найсильніший головний біль у житті або раптовий сильний біль",
    hint: {
      ro: "Poate necesita ajutor medical imediat.",
      en: "May require immediate medical help.",
      ru: "Может требовать немедленной медицинской помощи.",
      ua: "Може потребувати негайної медичної допомоги."
    }
  },
  {
    id: 5,
    category: "alarm",
    alarm: true,
    ro: "Convulsii, pierdere de cunoștință sau leșin neexplicat",
    en: "Seizures, loss of consciousness or unexplained fainting",
    ru: "Судороги, потеря сознания или необъяснимый обморок",
    ua: "Судоми, втрата свідомості або незрозуміле непритомнення",
    hint: {
      ro: "Semnal de alarmă.",
      en: "Warning sign.",
      ru: "Тревожный признак.",
      ua: "Тривожна ознака."
    }
  },
  {
    id: 6,
    category: "motor",
    ro: "Slăbiciune progresivă în brațe sau picioare",
    en: "Progressive weakness in arms or legs",
    ru: "Постепенно нарастающая слабость в руках или ногах",
    ua: "Поступово наростаюча слабкість у руках або ногах",
    hint: {
      ro: "Important dacă se agravează în timp.",
      en: "Important if it worsens over time.",
      ru: "Важно, если ухудшается со временем.",
      ua: "Важливо, якщо погіршується з часом."
    }
  },
  {
    id: 7,
    category: "sensory",
    ro: "Amorțeală, furnicături sau arsură în membre",
    en: "Numbness, tingling or burning in limbs",
    ru: "Онемение, покалывание или жжение в конечностях",
    ua: "Оніміння, поколювання або печіння в кінцівках",
    hint: {
      ro: "Poate fi legat de nervi periferici, coloană sau circulație.",
      en: "May relate to peripheral nerves, spine or circulation.",
      ru: "Может быть связано с периферическими нервами, позвоночником или кровообращением.",
      ua: "Може бути пов’язано з периферичними нервами, хребтом або кровообігом."
    }
  },
  {
    id: 8,
    category: "balance",
    ro: "Amețeală, pierdere de echilibru sau mers nesigur",
    en: "Dizziness, loss of balance or unsteady walking",
    ru: "Головокружение, потеря равновесия или неустойчивая походка",
    ua: "Запаморочення, втрата рівноваги або нестійка хода",
    hint: {
      ro: "Mai important dacă apare brusc sau cu alte simptome.",
      en: "More important if sudden or combined with other symptoms.",
      ru: "Особенно важно, если появилось внезапно или вместе с другими симптомами.",
      ua: "Особливо важливо, якщо з’явилось раптово або з іншими симптомами."
    }
  },
  {
    id: 9,
    category: "pain",
    ro: "Dureri de cap repetate, mai intense sau diferite de obicei",
    en: "Repeated headaches that are stronger or different than usual",
    ru: "Повторяющиеся головные боли, сильнее или необычные по характеру",
    ua: "Повторні головні болі, сильніші або незвичні за характером",
    hint: {
      ro: "Urmăriți schimbarea tiparului durerii.",
      en: "Track change in headache pattern.",
      ru: "Следите за изменением характера боли.",
      ua: "Стежте за зміною характеру болю."
    }
  },
  {
    id: 10,
    category: "pain",
    ro: "Durere cervicală sau lombară cu iradiere în braț/picior",
    en: "Neck or low back pain radiating to arm/leg",
    ru: "Боль в шее или пояснице с отдачей в руку/ногу",
    ua: "Біль у шиї або попереку з віддачею в руку/ногу",
    hint: {
      ro: "Poate sugera iritație radiculară.",
      en: "May suggest nerve root irritation.",
      ru: "Может указывать на раздражение нервного корешка.",
      ua: "Може вказувати на подразнення нервового корінця."
    }
  },
  {
    id: 11,
    category: "cognitive",
    ro: "Probleme de memorie, atenție sau orientare",
    en: "Memory, attention or orientation problems",
    ru: "Проблемы с памятью, вниманием или ориентацией",
    ua: "Проблеми з пам’яттю, увагою або орієнтацією",
    hint: {
      ro: "Important dacă afectează viața zilnică.",
      en: "Important if it affects daily life.",
      ru: "Важно, если влияет на повседневную жизнь.",
      ua: "Важливо, якщо впливає на щоденне життя."
    }
  },
  {
    id: 12,
    category: "motor",
    ro: "Tremor, mișcări involuntare sau rigiditate",
    en: "Tremor, involuntary movements or stiffness",
    ru: "Тремор, непроизвольные движения или скованность",
    ua: "Тремор, мимовільні рухи або скутість",
    hint: {
      ro: "Poate necesita evaluare neurologică.",
      en: "May require neurological evaluation.",
      ru: "Может требовать неврологической оценки.",
      ua: "Може потребувати неврологічної оцінки."
    }
  },
  {
    id: 13,
    category: "vegetative",
    ro: "Tulburări de somn, oboseală intensă sau epuizare neurologică",
    en: "Sleep disturbance, intense fatigue or neurological exhaustion",
    ru: "Нарушения сна, сильная усталость или неврологическое истощение",
    ua: "Порушення сну, сильна втома або неврологічне виснаження",
    hint: {
      ro: "Poate agrava simptomele neurologice.",
      en: "May worsen neurological symptoms.",
      ru: "Может усиливать неврологические симптомы.",
      ua: "Може посилювати неврологічні симптоми."
    }
  },
  {
    id: 14,
    category: "vegetative",
    ro: "Tulburări urinare/intestinale noi asociate cu dureri de spate sau slăbiciune",
    en: "New urinary/bowel problems associated with back pain or weakness",
    ru: "Новые нарушения мочеиспускания/кишечника с болью в спине или слабостью",
    ua: "Нові порушення сечовипускання/кишківника з болем у спині або слабкістю",
    hint: {
      ro: "Dacă apare brusc, poate fi urgență.",
      en: "If sudden, it may be urgent.",
      ru: "Если появилось внезапно, может быть неотложным состоянием.",
      ua: "Якщо з’явилось раптово, може бути невідкладним станом."
    }
  },
  {
    id: 15,
    category: "balance",
    ro: "Căderi repetate sau pierderea coordonării fine",
    en: "Repeated falls or loss of fine coordination",
    ru: "Повторные падения или потеря тонкой координации",
    ua: "Повторні падіння або втрата тонкої координації",
    hint: {
      ro: "Urmăriți frecvența și contextul.",
      en: "Track frequency and context.",
      ru: "Отслеживайте частоту и обстоятельства.",
      ua: "Відстежуйте частоту та обставини."
    }
  }
];

const ui = {
  ro: {
    crumb: "Teste și Instrumente / Screening Neurologic",
    title: "Screening neurologic rapid",
    lead: "Instrument educațional pentru simptome neurologice, semnale de alarmă și orientare preliminară.",
    question: "Întrebarea",
    of: "din",
    no: "Nu",
    mild: "Ușor",
    moderate: "Moderat",
    severe: "Sever",
    back: "Înapoi",
    next: "Următoarea",
    result: "Rezultat",
    restart: "Reia screeningul",
    print: "Tipărește",
    score: "Scor orientativ",
    urgent: "Semnale de alarmă",
    recommendation: "Recomandare",
    lowTitle: "Risc orientativ scăzut",
    lowText: "Simptomele marcate nu indică un semnal major în acest chestionar. Monitorizează evoluția și discută cu medicul dacă persistă.",
    mediumTitle: "Risc orientativ moderat",
    mediumText: "Este recomandată o consultație neurologică programată pentru evaluare clinică, mai ales dacă simptomele persistă sau se repetă.",
    highTitle: "Risc orientativ crescut",
    highText: "Este recomandată evaluare medicală cât mai curând. Dacă simptomele sunt recente, intense sau se agravează, solicită ajutor medical urgent.",
    emergencyTitle: "Atenție: posibilă urgență",
    emergencyText: "Ai marcat semnale de alarmă. Dacă simptomele sunt bruște, severe sau recente, sună la serviciul de urgență sau mergi imediat la medic.",
    disclaimer: "Acest instrument este educațional. Nu pune diagnostic, nu tratează și nu înlocuiește consultația cu medicul. Tot ce citești sau aplici se face pe propriul risc."
  },
  en: {
    crumb: "Tests and Tools / Neurological Screening",
    title: "Rapid neurological screening",
    lead: "Educational tool for neurological symptoms, red flags and preliminary orientation.",
    question: "Question",
    of: "of",
    no: "No",
    mild: "Mild",
    moderate: "Moderate",
    severe: "Severe",
    back: "Back",
    next: "Next",
    result: "Result",
    restart: "Restart screening",
    print: "Print",
    score: "Orientation score",
    urgent: "Red flags",
    recommendation: "Recommendation",
    lowTitle: "Low orientation risk",
    lowText: "The selected symptoms do not indicate a major warning sign in this questionnaire. Monitor evolution and discuss with a doctor if they persist.",
    mediumTitle: "Moderate orientation risk",
    mediumText: "A scheduled neurological consultation is recommended, especially if symptoms persist or repeat.",
    highTitle: "Increased orientation risk",
    highText: "Medical evaluation is recommended as soon as possible. If symptoms are recent, intense or worsening, seek urgent medical help.",
    emergencyTitle: "Attention: possible emergency",
    emergencyText: "You selected red flags. If symptoms are sudden, severe or recent, call emergency services or seek immediate medical care.",
    disclaimer: "This tool is educational. It does not diagnose, treat or replace medical consultation. Everything you read or apply is at your own risk."
  },
  ru: {
    crumb: "Тесты и инструменты / Неврологический скрининг",
    title: "Быстрый неврологический скрининг",
    lead: "Образовательный инструмент для неврологических симптомов, тревожных признаков и предварительной ориентации.",
    question: "Вопрос",
    of: "из",
    no: "Нет",
    mild: "Лёгко",
    moderate: "Умеренно",
    severe: "Сильно",
    back: "Назад",
    next: "Следующий",
    result: "Результат",
    restart: "Начать заново",
    print: "Печать",
    score: "Ориентировочный балл",
    urgent: "Тревожные признаки",
    recommendation: "Рекомендация",
    lowTitle: "Низкий ориентировочный риск",
    lowText: "Отмеченные симптомы не указывают на серьёзный тревожный признак в этой анкете. Наблюдайте динамику и обратитесь к врачу, если симптомы сохраняются.",
    mediumTitle: "Умеренный ориентировочный риск",
    mediumText: "Рекомендуется плановая консультация невролога, особенно если симптомы сохраняются или повторяются.",
    highTitle: "Повышенный ориентировочный риск",
    highText: "Рекомендуется медицинская оценка как можно скорее. Если симптомы новые, интенсивные или ухудшаются, обратитесь за срочной медицинской помощью.",
    emergencyTitle: "Внимание: возможная неотложная ситуация",
    emergencyText: "Вы отметили тревожные признаки. Если симптомы внезапные, сильные или недавние, вызовите скорую помощь или срочно обратитесь к врачу.",
    disclaimer: "Этот инструмент образовательный. Он не ставит диагноз, не лечит и не заменяет консультацию врача. Всё, что вы читаете или применяете, делается на собственный риск."
  },
  ua: {
    crumb: "Тести та інструменти / Неврологічний скринінг",
    title: "Швидкий неврологічний скринінг",
    lead: "Освітній інструмент для неврологічних симптомів, тривожних ознак і попередньої орієнтації.",
    question: "Питання",
    of: "з",
    no: "Ні",
    mild: "Легко",
    moderate: "Помірно",
    severe: "Сильно",
    back: "Назад",
    next: "Наступне",
    result: "Результат",
    restart: "Почати знову",
    print: "Друк",
    score: "Орієнтовний бал",
    urgent: "Тривожні ознаки",
    recommendation: "Рекомендація",
    lowTitle: "Низький орієнтовний ризик",
    lowText: "Позначені симптоми не вказують на серйозну тривожну ознаку в цій анкеті. Спостерігайте динаміку та зверніться до лікаря, якщо симптоми зберігаються.",
    mediumTitle: "Помірний орієнтовний ризик",
    mediumText: "Рекомендована планова консультація невролога, особливо якщо симптоми зберігаються або повторюються.",
    highTitle: "Підвищений орієнтовний ризик",
    highText: "Рекомендована медична оцінка якомога швидше. Якщо симптоми нові, інтенсивні або погіршуються, зверніться по термінову медичну допомогу.",
    emergencyTitle: "Увага: можлива невідкладна ситуація",
    emergencyText: "Ви позначили тривожні ознаки. Якщо симптоми раптові, сильні або нещодавні, викличте швидку допомогу або терміново зверніться до лікаря.",
    disclaimer: "Цей інструмент освітній. Він не ставить діагноз, не лікує і не замінює консультацію лікаря. Усе, що ви читаєте або застосовуєте, робиться на власний ризик."
  }
} as const;

function getLang(pathname: string): Lang {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : "ro";
}

function compute(answers: Record<number, Severity>) {
  let score = 0;
  let alarms = 0;
  const categories: Record<Category, number> = {
    alarm: 0,
    motor: 0,
    sensory: 0,
    cognitive: 0,
    balance: 0,
    pain: 0,
    vegetative: 0
  };

  for (const q of questions) {
    const value = answers[q.id] || 0;
    score += value * (q.alarm ? 4 : 2);
    categories[q.category] += value;
    if (q.alarm && value >= 1) alarms += 1;
  }

  let level: "low" | "medium" | "high" | "emergency" = "low";
  if (alarms >= 1 || score >= 34) level = "emergency";
  else if (score >= 22) level = "high";
  else if (score >= 10) level = "medium";

  return { score, alarms, categories, level };
}

export default function NeuroScreeningPage() {
  const lang = getLang(usePathname());
  const t = ui[lang];
  const resultRef = useRef<HTMLDivElement | null>(null);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Severity>>({});
  const [showResult, setShowResult] = useState(false);

  const question = questions[Math.min(step, questions.length - 1)];
  const answeredCount = Object.keys(answers).length;
  const progress = showResult ? 100 : Math.round((answeredCount / questions.length) * 100);
  const result = useMemo(() => compute(answers), [answers]);

  const levelTitle =
    result.level === "emergency" ? t.emergencyTitle :
    result.level === "high" ? t.highTitle :
    result.level === "medium" ? t.mediumTitle :
    t.lowTitle;

  const levelText =
    result.level === "emergency" ? t.emergencyText :
    result.level === "high" ? t.highText :
    result.level === "medium" ? t.mediumText :
    t.lowText;

  function choose(value: Severity) {
    const q = question;
    if (!q) return;

    const next = { ...answers, [q.id]: value };
    setAnswers(next);

    window.setTimeout(() => {
      if (step >= questions.length - 1) {
        setShowResult(true);
        window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      } else {
        setStep((prev) => prev + 1);
      }
    }, 120);
  }

  function goBack() {
    setShowResult(false);
    setStep((prev) => Math.max(0, prev - 1));
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setShowResult(false);
  }

  const options: { value: Severity; label: string }[] = [
    { value: 0, label: t.no },
    { value: 1, label: t.mild },
    { value: 2, label: t.moderate },
    { value: 3, label: t.severe }
  ];

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{t.crumb}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="rmSection neuroWizardSection">
        <div className="rmShell neuroWizardShell">
          <div className="neuroProgressCard">
            <div className="neuroProgressTop">
              <span>{showResult ? t.result : `${t.question} ${step + 1} ${t.of} ${questions.length}`}</span>
              <b>{progress}%</b>
            </div>
            <div className="neuroProgressBar">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>

          {!showResult && question && (
            <article className={question.alarm ? "neuroStepCard alarm" : "neuroStepCard"}>
              <div className="neuroStepBadge">
                {question.alarm ? t.urgent : question.category}
              </div>

              <h2>{question[lang]}</h2>
              <p>{question.hint[lang]}</p>

              <div className="neuroAnswerGrid">
                {options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={answers[question.id] === option.value ? "selected" : ""}
                    onClick={() => choose(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="neuroWizardActions">
                <button className="softBtn" type="button" disabled={step === 0} onClick={goBack}>
                  {t.back}
                </button>
                <button className="softBtn" type="button" onClick={() => step < questions.length - 1 ? setStep(step + 1) : setShowResult(true)}>
                  {step < questions.length - 1 ? t.next : t.result}
                </button>
              </div>
            </article>
          )}

          {showResult && (
            <article className="neuroResultWizard" ref={resultRef}>
              <div className={`neuroResultHead ${result.level}`}>
                <div>
                  <span>{t.recommendation}</span>
                  <h2>{levelTitle}</h2>
                  <p>{levelText}</p>
                </div>
                <button className="softBtn" type="button" onClick={() => window.print()}>
                  {t.print}
                </button>
              </div>

              <div className="neuroResultStats">
                <article>
                  <span>{t.score}</span>
                  <b>{result.score}</b>
                </article>
                <article>
                  <span>{t.urgent}</span>
                  <b>{result.alarms}</b>
                </article>
                <article>
                  <span>{t.question}</span>
                  <b>{answeredCount}/{questions.length}</b>
                </article>
              </div>

              <div className="neuroCategoryGrid">
                {Object.entries(result.categories).map(([key, value]) => (
                  <article key={key}>
                    <span>{key}</span>
                    <div><i style={{ width: `${Math.min(100, value * 18)}%` }} /></div>
                    <b>{value}</b>
                  </article>
                ))}
              </div>

              <div className="neuroRiskBox">
                <b>{t.recommendation}</b>
                <p>{t.disclaimer}</p>
              </div>

              <div className="neuroWizardActions bottom">
                <button className="softBtn" type="button" onClick={goBack}>
                  {t.back}
                </button>
                <button className="blueBtn" type="button" onClick={restart}>
                  {t.restart}
                </button>
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
