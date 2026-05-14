"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Dosha = "vata" | "pitta" | "kapha";
type Question = { id: string; dosha: Dosha; ro: string; en: string; ru: string; ua: string };

const questions: Question[] = [
  { id: "dry", dosha: "vata", ro: "Piele uscată, mâini/picioare reci sau sensibilitate la frig", en: "Dry skin, cold hands/feet or sensitivity to cold", ru: "Сухая кожа, холодные руки/ноги или чувствительность к холоду", ua: "Суха шкіра, холодні руки/ноги або чутливість до холоду" },
  { id: "fast", dosha: "vata", ro: "Gândire rapidă, schimbătoare, tendință spre anxietate", en: "Fast, changing thoughts and tendency toward anxiety", ru: "Быстрые, изменчивые мысли и склонность к тревоге", ua: "Швидкі, мінливі думки та схильність до тривоги" },
  { id: "sleep", dosha: "vata", ro: "Somn ușor, treziri dese sau insomnie", en: "Light sleep, frequent waking or insomnia", ru: "Поверхностный сон, частые пробуждения или бессонница", ua: "Поверхневий сон, часті пробудження або безсоння" },
  { id: "digest-v", dosha: "vata", ro: "Digestie variabilă, balonare sau constipație", en: "Variable digestion, bloating or constipation", ru: "Нестабильное пищеварение, вздутие или запор", ua: "Нестабільне травлення, здуття або закреп" },

  { id: "heat", dosha: "pitta", ro: "Căldură corporală, transpirații sau intoleranță la căldură", en: "Body heat, sweating or heat intolerance", ru: "Ощущение жара, потливость или непереносимость жары", ua: "Відчуття жару, пітливість або непереносимість спеки" },
  { id: "sharp", dosha: "pitta", ro: "Minte analitică, perfecționism sau iritabilitate", en: "Analytical mind, perfectionism or irritability", ru: "Аналитический ум, перфекционизм или раздражительность", ua: "Аналітичний розум, перфекціонізм або дратівливість" },
  { id: "acid", dosha: "pitta", ro: "Aciditate, reflux, foame puternică sau inflamații", en: "Acidity, reflux, strong hunger or inflammation", ru: "Кислотность, рефлюкс, сильный голод или воспаления", ua: "Кислотність, рефлюкс, сильний голод або запалення" },
  { id: "skin", dosha: "pitta", ro: "Roșeață, piele sensibilă sau tendință la erupții", en: "Redness, sensitive skin or tendency to rashes", ru: "Покраснение, чувствительная кожа или склонность к высыпаниям", ua: "Почервоніння, чутлива шкіра або схильність до висипів" },

  { id: "heavy", dosha: "kapha", ro: "Senzație de greutate, retenție de apă sau metabolism lent", en: "Feeling of heaviness, water retention or slow metabolism", ru: "Ощущение тяжести, задержка воды или медленный обмен", ua: "Відчуття важкості, затримка води або повільний обмін" },
  { id: "calm", dosha: "kapha", ro: "Fire calmă, răbdătoare, dar uneori greu de motivat", en: "Calm, patient nature, sometimes hard to motivate", ru: "Спокойный, терпеливый характер, иногда трудно мотивироваться", ua: "Спокійний, терплячий характер, іноді важко мотивуватися" },
  { id: "mucus", dosha: "kapha", ro: "Mucus, congestie, somnolență sau energie lentă", en: "Mucus, congestion, sleepiness or slow energy", ru: "Слизь, заложенность, сонливость или медленная энергия", ua: "Слиз, закладеність, сонливість або повільна енергія" },
  { id: "stable", dosha: "kapha", ro: "Constituție mai stabilă, rezistență bună, dar tendință la stagnare", en: "Stable constitution, good endurance, but tendency to stagnation", ru: "Стабильная конституция, хорошая выносливость, но склонность к застою", ua: "Стабільна конституція, добра витривалість, але схильність до застою" }
];

const dict: Record<Lang, any> = {
  ro: {
    crumb: "Teste și Instrumente / Ayurveda Dosha",
    title: "Test Ayurveda Dosha",
    lead: "Chestionar educațional pentru orientarea profilului Vata, Pitta sau Kapha.",
    intro: "Bifează cât de mult se potrivește fiecare afirmație.",
    no: "Nu",
    little: "Puțin",
    medium: "Moderat",
    much: "Mult",
    generate: "Generează rezultat",
    reset: "Resetare",
    result: "Rezultat",
    dominant: "Dosha dominantă",
    vata: "Vata",
    pitta: "Pitta",
    kapha: "Kapha",
    vataText: "Vata este asociată cu mișcare, sistem nervos, uscăciune, variabilitate și sensibilitate la stres.",
    pittaText: "Pitta este asociată cu căldură, digestie, intensitate, analiză și tendință spre inflamație.",
    kaphaText: "Kapha este asociată cu stabilitate, structură, retenție, calm și tendință spre stagnare.",
    recTitle: "Recomandări educaționale",
    vataRec: "Rutina stabilă, somnul regulat, căldura, mâncarea caldă și reducerea stimulilor pot ajuta orientativ.",
    pittaRec: "Răcirea, pauzele, hidratarea, reducerea supraîncălzirii și abordarea calmă pot ajuta orientativ.",
    kaphaRec: "Mișcarea regulată, alimentele mai ușoare, rutina activă și stimularea blândă pot ajuta orientativ.",
    disclaimer: "Consultarea cu medicul este obligatorie. Fitoterapia, suplimentele și orice recomandare se folosesc pe propriul risc. Aplicația nu înlocuiește consultația, diagnosticul sau tratamentul medical."
  },
  en: {
    crumb: "Tests and Tools / Ayurveda Dosha",
    title: "Ayurveda Dosha Test",
    lead: "Educational questionnaire for orientation toward Vata, Pitta or Kapha profile.",
    intro: "Select how much each statement matches you.",
    no: "No",
    little: "A little",
    medium: "Moderate",
    much: "A lot",
    generate: "Generate result",
    reset: "Reset",
    result: "Result",
    dominant: "Dominant dosha",
    vata: "Vata",
    pitta: "Pitta",
    kapha: "Kapha",
    vataText: "Vata is associated with movement, nervous system, dryness, variability and sensitivity to stress.",
    pittaText: "Pitta is associated with heat, digestion, intensity, analysis and tendency toward inflammation.",
    kaphaText: "Kapha is associated with stability, structure, retention, calmness and tendency toward stagnation.",
    recTitle: "Educational recommendations",
    vataRec: "Stable routine, regular sleep, warmth, warm meals and reducing overstimulation may be helpful.",
    pittaRec: "Cooling, pauses, hydration, avoiding overheating and a calmer approach may be helpful.",
    kaphaRec: "Regular movement, lighter meals, active routine and gentle stimulation may be helpful.",
    disclaimer: "Medical consultation is mandatory. Phytotherapy, supplements and any recommendation are used at your own risk. This app does not replace medical consultation, diagnosis or treatment."
  },
  ru: {
    crumb: "Тесты и инструменты / Ayurveda Dosha",
    title: "Тест Ayurveda Dosha",
    lead: "Образовательная анкета для ориентировочного профиля Vata, Pitta или Kapha.",
    intro: "Отметьте, насколько каждое утверждение вам подходит.",
    no: "Нет",
    little: "Немного",
    medium: "Умеренно",
    much: "Сильно",
    generate: "Сформировать результат",
    reset: "Сброс",
    result: "Результат",
    dominant: "Доминирующая dosha",
    vata: "Vata",
    pitta: "Pitta",
    kapha: "Kapha",
    vataText: "Vata связана с движением, нервной системой, сухостью, изменчивостью и чувствительностью к стрессу.",
    pittaText: "Pitta связана с теплом, пищеварением, интенсивностью, анализом и склонностью к воспалению.",
    kaphaText: "Kapha связана со стабильностью, структурой, задержкой, спокойствием и склонностью к застою.",
    recTitle: "Образовательные рекомендации",
    vataRec: "Стабильный режим, регулярный сон, тепло, теплая еда и снижение стимуляции могут быть полезны.",
    pittaRec: "Охлаждение, паузы, гидратация, избегание перегрева и спокойный подход могут быть полезны.",
    kaphaRec: "Регулярное движение, более легкое питание, активный режим и мягкая стимуляция могут быть полезны.",
    disclaimer: "Консультация врача обязательна. Фитотерапия, добавки и любые рекомендации используются на собственный риск. Приложение не заменяет консультацию, диагноз или лечение."
  },
  ua: {
    crumb: "Тести та інструменти / Ayurveda Dosha",
    title: "Тест Ayurveda Dosha",
    lead: "Освітня анкета для орієнтовного профілю Vata, Pitta або Kapha.",
    intro: "Відмітьте, наскільки кожне твердження вам підходить.",
    no: "Ні",
    little: "Трохи",
    medium: "Помірно",
    much: "Сильно",
    generate: "Сформувати результат",
    reset: "Скинути",
    result: "Результат",
    dominant: "Домінуюча dosha",
    vata: "Vata",
    pitta: "Pitta",
    kapha: "Kapha",
    vataText: "Vata пов’язана з рухом, нервовою системою, сухістю, мінливістю та чутливістю до стресу.",
    pittaText: "Pitta пов’язана з теплом, травленням, інтенсивністю, аналізом і схильністю до запалення.",
    kaphaText: "Kapha пов’язана зі стабільністю, структурою, затримкою, спокоєм і схильністю до застою.",
    recTitle: "Освітні рекомендації",
    vataRec: "Стабільний режим, регулярний сон, тепло, тепла їжа та зменшення стимуляції можуть бути корисними.",
    pittaRec: "Охолодження, паузи, гідратація, уникання перегріву та спокійніший підхід можуть бути корисними.",
    kaphaRec: "Регулярний рух, легше харчування, активний режим і м’яка стимуляція можуть бути корисними.",
    disclaimer: "Консультація лікаря обов’язкова. Фітотерапія, добавки та будь-які рекомендації використовуються на власний ризик. Застосунок не замінює консультацію, діагноз або лікування."
  }
};

function useLang(): Lang {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : "ro";
}

export default function AyurvedaPage() {
  const lang = useLang();
  const t = dict[lang];
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [show, setShow] = useState(false);

  const scores = useMemo(() => {
    const s: Record<Dosha, number> = { vata: 0, pitta: 0, kapha: 0 };
    questions.forEach((q) => {
      s[q.dosha] += answers[q.id] || 0;
    });
    return s;
  }, [answers]);

  const dominant = useMemo(() => {
    return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "vata") as Dosha;
  }, [scores]);

  const resultText = t[`${dominant}Text`];
  const recText = t[`${dominant}Rec`];

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{t.crumb}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="rmSection ayurSection">
        <div className="rmShell ayurLayout">
          <div className="adminCard">
            <h2>{t.intro}</h2>
            <div className="ayurQuestions">
              {questions.map((q) => (
                <article className="ayurQuestion" key={q.id}>
                  <h3>{q[lang]}</h3>
                  <div className="answerScale">
                    {[0, 1, 2, 3].map((v) => (
                      <label key={v}>
                        <input
                          type="radio"
                          name={q.id}
                          checked={(answers[q.id] || 0) === v}
                          onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: v }))}
                        />
                        {[t.no, t.little, t.medium, t.much][v]}
                      </label>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="bottomGenerateBox">
              <button className="blueBtn" onClick={() => setShow(true)}>{t.generate}</button>
              <button className="softBtn" onClick={() => { setAnswers({}); setShow(false); }}>{t.reset}</button>
            </div>
          </div>

          {show && (
            <aside className="adminCard ayurResult">
              <h2>{t.result}</h2>
              <p>{t.dominant}: <b>{t[dominant]}</b></p>

              <div className="doshaBars">
                {(["vata", "pitta", "kapha"] as Dosha[]).map((d) => (
                  <div className="catBar" key={d}>
                    <span>{t[d]}</span>
                    <div><i style={{ width: `${Math.min(100, scores[d] * 12)}%` }} /></div>
                    <b>{scores[d]}</b>
                  </div>
                ))}
              </div>

              <h3>{t[dominant]}</h3>
              <p>{resultText}</p>

              <h3>{t.recTitle}</h3>
              <p>{recText}</p>

              <div className="noteBox">{t.disclaimer}</div>
            </aside>
          )}
        </div>
      </section>
    </>
  );
}
