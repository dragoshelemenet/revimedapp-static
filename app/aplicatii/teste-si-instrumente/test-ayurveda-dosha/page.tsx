"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Dosha = "v" | "p" | "k";
type Answer = "yes" | "no";
type QText = Record<Lang, string>;

type Question = {
  id: number;
  dosha: Dosha;
  text: QText;
};

const questions: Question[] = [
  {
    id: 1,
    dosha: "v",
    text: {
      ro: "Sunt slab(ă), cu constituție fină, iau greu în greutate.",
      en: "I am slim, with a fine constitution, and I gain weight with difficulty.",
      ru: "Я худощавый(ая), с тонким телосложением, мне трудно набрать вес.",
      ua: "Я худорлявий(а), з тонкою статурою, мені важко набрати вагу."
    }
  },
  {
    id: 2,
    dosha: "p",
    text: {
      ro: "Am constituție medie, bine definită, cu masă musculară bună.",
      en: "I have a medium, well-defined build with good muscle mass.",
      ru: "У меня среднее, хорошо сформированное телосложение, развитая мускулатура.",
      ua: "Я маю середню, добре сформовану статуру з хорошою м’язовою масою."
    }
  },
  {
    id: 3,
    dosha: "k",
    text: {
      ro: "Am constituție robustă, ușor mă îngraș și rețin lichide.",
      en: "I have a robust constitution, gain weight easily and retain fluids.",
      ru: "У меня крепкое телосложение, я легко набираю вес и задерживаю жидкость.",
      ua: "Я маю міцну статуру, легко набираю вагу та затримую рідину."
    }
  },
  {
    id: 4,
    dosha: "v",
    text: {
      ro: "Am mâinile și picioarele reci, nu suport frigul și vântul.",
      en: "My hands and feet are often cold; I do not tolerate cold and wind well.",
      ru: "У меня часто холодные руки и ноги, я плохо переношу холод и ветер.",
      ua: "У мене часто холодні руки й ноги, я погано переношу холод і вітер."
    }
  },
  {
    id: 5,
    dosha: "p",
    text: {
      ro: "Îmi este adesea cald, nu suport căldura, prefer răcoarea.",
      en: "I often feel hot, dislike heat and prefer cool environments.",
      ru: "Мне часто жарко, я не люблю жару и предпочитаю прохладу.",
      ua: "Мені часто жарко, я не люблю спеку та віддаю перевагу прохолоді."
    }
  },
  {
    id: 6,
    dosha: "k",
    text: {
      ro: "Tolerez bine frigul, iar vremea rece și umedă mă obosește.",
      en: "I tolerate cold fairly well, but cold and damp weather makes me sluggish.",
      ru: "Я сравнительно хорошо переношу холод, но сырая погода делает меня вялым.",
      ua: "Я досить добре переношу холод, але сира погода робить мене млявим(ою)."
    }
  },
  {
    id: 7,
    dosha: "v",
    text: {
      ro: "Am apetit variabil, pot să sar peste mese fără probleme.",
      en: "My appetite is variable; I can skip meals without much difficulty.",
      ru: "У меня переменный аппетит, я могу пропускать приёмы пищи без особых проблем.",
      ua: "У мене мінливий апетит, я можу пропускати прийоми їжі без особливих проблем."
    }
  },
  {
    id: 8,
    dosha: "p",
    text: {
      ro: "Am apetit puternic, devin iritabil(ă) dacă sar peste masă.",
      en: "I have a strong appetite and become irritable if I skip a meal.",
      ru: "У меня сильный аппетит, я раздражаюсь, если пропускаю еду.",
      ua: "У мене сильний апетит, я дратуюся, якщо пропускаю їжу."
    }
  },
  {
    id: 9,
    dosha: "k",
    text: {
      ro: "Am digestie lentă, greutate după mâncare, în special seara.",
      en: "My digestion is slow and I feel heavy after meals, especially in the evening.",
      ru: "У меня медленное пищеварение, тяжесть после еды, особенно вечером.",
      ua: "У мене повільне травлення, важкість після їжі, особливо ввечері."
    }
  },
  {
    id: 10,
    dosha: "v",
    text: {
      ro: "Somnul meu este ușor, cu treziri frecvente sau insomnie.",
      en: "My sleep is light, with frequent waking or insomnia.",
      ru: "У меня лёгкий сон, частые пробуждения или бессонница.",
      ua: "Мій сон легкий, із частими пробудженнями або безсонням."
    }
  },
  {
    id: 11,
    dosha: "p",
    text: {
      ro: "Somnul meu este mediu, de obicei bun, dar se tulbură la stres.",
      en: "My sleep is moderate and usually good, but stress disturbs it.",
      ru: "У меня сон средней продолжительности, обычно хороший, но портится при стрессе.",
      ua: "Мій сон середній, зазвичай добрий, але порушується при стресі."
    }
  },
  {
    id: 12,
    dosha: "k",
    text: {
      ro: "Dorm profund și mult, îmi este greu să mă trezesc dimineața.",
      en: "I sleep deeply and for a long time; waking up in the morning is difficult.",
      ru: "Я сплю глубоко и долго, мне трудно проснуться утром.",
      ua: "Я сплю глибоко й довго, мені важко прокидатися вранці."
    }
  },
  {
    id: 13,
    dosha: "v",
    text: {
      ro: "Mă mișc repede, gesticulez mult, vorbesc repede.",
      en: "I move quickly, gesture a lot and speak fast.",
      ru: "Я двигаюсь быстро, много жестикулирую и быстро говорю.",
      ua: "Я швидко рухаюся, багато жестикулюю та швидко говорю."
    }
  },
  {
    id: 14,
    dosha: "p",
    text: {
      ro: "Sunt hotărât(ă), direct(ă), uneori critic(ă) și perfecționist(ă).",
      en: "I am determined and direct, sometimes critical and perfectionistic.",
      ru: "Я решительный, прямой, иногда критичный и перфекционист.",
      ua: "Я рішучий(а), прямий(а), іноді критичний(а) і перфекціоніст(ка)."
    }
  },
  {
    id: 15,
    dosha: "k",
    text: {
      ro: "Sunt calm(ă), stabil(ă), am reacții lente și răbdare mare.",
      en: "I am calm and stable, with slow reactions and strong patience.",
      ru: "Я спокойный, стабильный, медленно реагирую, у меня много терпения.",
      ua: "Я спокійний(а), стабільний(а), повільно реагую та маю багато терпіння."
    }
  },
  {
    id: 16,
    dosha: "v",
    text: {
      ro: "Sunt adesea neliniștit(ă), îngrijorat(ă), cu multe gânduri.",
      en: "I am often restless, worried and have many thoughts at once.",
      ru: "Я часто испытываю беспокойство, тревогу, в голове много мыслей.",
      ua: "Я часто відчуваю неспокій, тривогу, у голові багато думок."
    }
  },
  {
    id: 17,
    dosha: "p",
    text: {
      ro: "Mă enervez repede, pot avea izbucniri de furie.",
      en: "I become angry quickly and may have outbursts.",
      ru: "Я быстро злюсь, у меня бывают вспышки гнева.",
      ua: "Я швидко злюся, у мене бувають спалахи гніву."
    }
  },
  {
    id: 18,
    dosha: "k",
    text: {
      ro: "De obicei nu mă enervez ușor, dar tind să devin letargic(ă).",
      en: "I do not get angry easily, but I tend to become lethargic.",
      ru: "Я редко злюсь, но склонен к вялости и пассивности.",
      ua: "Я рідко злюся, але схильний(а) до млявості та пасивності."
    }
  },
  {
    id: 19,
    dosha: "v",
    text: {
      ro: "Am pielea uscată și rece, mai ales iarna.",
      en: "My skin is dry and cold, especially in winter.",
      ru: "У меня сухая и холодная кожа, особенно зимой.",
      ua: "У мене суха й холодна шкіра, особливо взимку."
    }
  },
  {
    id: 20,
    dosha: "p",
    text: {
      ro: "Am pielea caldă, uneori înroșită, predispusă la iritații.",
      en: "My skin is warm, sometimes red and prone to irritation.",
      ru: "У меня тёплая кожа, склонная к покраснениям и раздражениям.",
      ua: "У мене тепла шкіра, іноді почервоніла та схильна до подразнень."
    }
  },
  {
    id: 21,
    dosha: "k",
    text: {
      ro: "Am pielea groasă, catifelată, uneori umedă, ten pal.",
      en: "My skin is thick, soft, sometimes moist, with a pale complexion.",
      ru: "У меня плотная, мягкая кожа, иногда влажная, с бледным оттенком.",
      ua: "У мене щільна, м’яка шкіра, іноді волога, з блідим відтінком."
    }
  },
  {
    id: 22,
    dosha: "v",
    text: {
      ro: "Învăț repede, dar uit repede.",
      en: "I learn quickly, but forget quickly.",
      ru: "Я быстро учусь, но так же быстро забываю.",
      ua: "Я швидко навчаюся, але швидко забуваю."
    }
  },
  {
    id: 23,
    dosha: "p",
    text: {
      ro: "Învăț moderat, dar îmi amintesc bine detaliile.",
      en: "I learn at a moderate pace and remember details well.",
      ru: "Я учусь в среднем темпе, но хорошо запоминаю детали.",
      ua: "Я навчаюся в середньому темпі, але добре пам’ятаю деталі."
    }
  },
  {
    id: 24,
    dosha: "k",
    text: {
      ro: "Învăț încet, dar am memorie de lungă durată.",
      en: "I learn slowly, but have long-term memory.",
      ru: "Я учусь медленно, но у меня долговременная память.",
      ua: "Я навчаюся повільно, але маю довготривалу пам’ять."
    }
  },
  {
    id: 25,
    dosha: "v",
    text: {
      ro: "Digestia mea este imprevizibilă: uneori constipație, uneori normal.",
      en: "My digestion is unpredictable: sometimes constipation, sometimes normal.",
      ru: "Моё пищеварение непредсказуемое: то запор, то нормальный стул.",
      ua: "Моє травлення непередбачуване: іноді закреп, іноді нормально."
    }
  },
  {
    id: 26,
    dosha: "p",
    text: {
      ro: "Am scaun moale sau diaree când sunt stresat(ă) sau mănânc picant.",
      en: "I may have loose stool or diarrhea when stressed or after spicy food.",
      ru: "При стрессе или острой пище у меня бывает жидкий стул / диарея.",
      ua: "При стресі або гострій їжі у мене буває рідкий стул / діарея."
    }
  },
  {
    id: 27,
    dosha: "k",
    text: {
      ro: "Am scaun rar, greu, cu tendință la constipație cronică.",
      en: "My stool is infrequent and heavy, with tendency toward chronic constipation.",
      ru: "У меня редкий, плотный стул, склонность к хроническим запорам.",
      ua: "У мене рідкий, щільний стул, схильність до хронічних закрепів."
    }
  },
  {
    id: 28,
    dosha: "v",
    text: {
      ro: "Tind să mă agit, să mă grăbesc, să încep multe lucruri deodată.",
      en: "I tend to rush, become agitated and start many things at once.",
      ru: "Я склонен(на) суетиться, спешить и начинать много дел одновременно.",
      ua: "Я схильний(а) метушитися, поспішати та починати багато справ одночасно."
    }
  },
  {
    id: 29,
    dosha: "p",
    text: {
      ro: "Îmi place competiția, provocarea, vreau să fiu cel(cea) mai bun(ă).",
      en: "I like competition and challenge, and I want to be the best.",
      ru: "Я люблю конкуренцию и вызовы, хочу быть лучшим(ей).",
      ua: "Я люблю конкуренцію та виклики, хочу бути найкращим(ою)."
    }
  },
  {
    id: 30,
    dosha: "k",
    text: {
      ro: "Prefer stabilitatea, rutina, evit schimbările bruște.",
      en: "I prefer stability and routine, and avoid sudden changes.",
      ru: "Я предпочитаю стабильность и рутину, избегаю резких изменений.",
      ua: "Я віддаю перевагу стабільності та рутині, уникаю різких змін."
    }
  },
  {
    id: 31,
    dosha: "v",
    text: {
      ro: "Simt frecvent anxietate, frică, nesiguranță fără motiv clar.",
      en: "I often feel anxiety, fear or insecurity without a clear reason.",
      ru: "Я часто испытываю тревогу, страх, неуверенность без явной причины.",
      ua: "Я часто відчуваю тривогу, страх, невпевненість без явної причини."
    }
  },
  {
    id: 32,
    dosha: "p",
    text: {
      ro: "Simt frecvent iritabilitate, critică față de mine și de alții.",
      en: "I often feel irritability and criticism toward myself and others.",
      ru: "Я часто раздражителен и критичен к себе и другим.",
      ua: "Я часто дратівливий(а) і критичний(а) до себе та інших."
    }
  },
  {
    id: 33,
    dosha: "k",
    text: {
      ro: "Simt frecvent apatie, lipsă de motivație, aș dormi sau aș mânca mai mult.",
      en: "I often feel apathy, lack of motivation, and want to sleep or eat more.",
      ru: "Я часто чувствую апатию, отсутствие мотивации, хочется больше спать и есть.",
      ua: "Я часто відчуваю апатію, відсутність мотивації, хочеться більше спати або їсти."
    }
  },
  {
    id: 34,
    dosha: "v",
    text: {
      ro: "Am o voce subțire, schimbătoare, vorbesc repede.",
      en: "My voice is thin or variable, and I speak quickly.",
      ru: "У меня тонкий, меняющийся голос, я говорю быстро.",
      ua: "У мене тонкий, мінливий голос, я говорю швидко."
    }
  },
  {
    id: 35,
    dosha: "p",
    text: {
      ro: "Am voce clară, pătrunzătoare, uneori aspră când sunt supărat(ă).",
      en: "My voice is clear and penetrating, sometimes harsh when I am upset.",
      ru: "У меня ясный, проникновенный голос, иногда резкий, когда я злюсь.",
      ua: "У мене ясний, проникливий голос, іноді різкий, коли я злюся."
    }
  },
  {
    id: 36,
    dosha: "k",
    text: {
      ro: "Am voce gravă, calmă, vorbesc încet și rar.",
      en: "My voice is deep and calm; I speak slowly and not very often.",
      ru: "У меня низкий, спокойный голос, я говорю медленно и редко.",
      ua: "У мене низький, спокійний голос, я говорю повільно й рідко."
    }
  },
  {
    id: 37,
    dosha: "v",
    text: {
      ro: "Prefer mâncărurile calde, uleioase, condimente blânde.",
      en: "I prefer warm, slightly oily foods and gentle spices.",
      ru: "Я предпочитаю тёплую приготовленную пищу с небольшим количеством масла; супы, каши, рагу.",
      ua: "Я віддаю перевагу теплій їжі з невеликою кількістю олії; супам, кашам, рагу."
    }
  },
  {
    id: 38,
    dosha: "p",
    text: {
      ro: "Prefer mâncărurile reci, salate, gust intens, picant, acru.",
      en: "I prefer cold foods, salads, intense taste, spicy and sour flavors.",
      ru: "Я люблю холодные блюда, салаты, яркий вкус, острое и кислое.",
      ua: "Я люблю холодні страви, салати, яскравий смак, гостре й кисле."
    }
  },
  {
    id: 39,
    dosha: "k",
    text: {
      ro: "Prefer mâncărurile dulci, lactate, făinoase, îmi place să gust des.",
      en: "I prefer sweets, dairy and flour-based foods, and like to snack often.",
      ru: "Я люблю сладкое, молочные продукты, мучное, люблю часто перекусывать.",
      ua: "Я люблю солодке, молочні продукти, борошняне, люблю часто перекушувати."
    }
  },
  {
    id: 40,
    dosha: "v",
    text: {
      ro: "Mă simt mai bine în mediu cald, liniștit, cu rutină.",
      en: "I feel better in a warm, calm environment with a clear routine.",
      ru: "Я чувствую себя лучше в тёплой, спокойной обстановке с понятной рутиной.",
      ua: "Я почуваюся краще в теплому, спокійному середовищі з чіткою рутиною."
    }
  }
];

const ui: Record<Lang, any> = {
  ro: {
    crumb: "Teste și Instrumente / Ayurveda Dosha",
    title: "Ayurveda Dosha Test",
    lead: "Test educațional Vata–Pitta–Kapha cu 40 de întrebări, progres pas cu pas și protocol orientativ.",
    question: "Întrebarea",
    of: "din",
    yes: "Da",
    no: "Nu",
    back: "Înapoi",
    next: "Următoarea",
    finish: "Vezi rezultatul",
    restart: "Reia testul",
    change: "Schimbă răspunsul",
    answered: "Răspuns selectat. Se trece la următoarea întrebare.",
    resultTitle: "Rezultat Ayurveda Dosha",
    detected: "Tip detectat",
    scores: "Scoruri",
    protocol: "Protocol educațional",
    print: "Tipărește",
    disclaimerTitle: "Atenție medicală obligatorie",
    disclaimer: "Consultarea cu medicul este obligatorie. Fitoterapia, suplimentele, panchakarma și orice recomandare se folosesc pe propriul risc. Această aplicație nu pune diagnostic, nu tratează și nu înlocuiește consultația medicală.",
    noAnswer: "Completează toate întrebările pentru rezultat."
  },
  en: {
    crumb: "Tests and Tools / Ayurveda Dosha",
    title: "Ayurveda Dosha Test",
    lead: "Educational Vata–Pitta–Kapha test with 40 questions, step-by-step progress and orientation protocol.",
    question: "Question",
    of: "of",
    yes: "Yes",
    no: "No",
    back: "Back",
    next: "Next",
    finish: "See result",
    restart: "Restart test",
    change: "Change answer",
    answered: "Answer selected. Moving to the next question.",
    resultTitle: "Ayurveda Dosha Result",
    detected: "Detected type",
    scores: "Scores",
    protocol: "Educational protocol",
    print: "Print",
    disclaimerTitle: "Medical attention required",
    disclaimer: "Medical consultation is mandatory. Phytotherapy, supplements, panchakarma and any recommendation are used at your own risk. This app does not diagnose, treat or replace medical consultation.",
    noAnswer: "Complete all questions to see the result."
  },
  ru: {
    crumb: "Тесты и инструменты / Ayurveda Dosha",
    title: "Тест Ayurveda Dosha",
    lead: "Образовательный тест Vata–Pitta–Kapha из 40 вопросов с пошаговым прогрессом и ориентировочным протоколом.",
    question: "Вопрос",
    of: "из",
    yes: "Да",
    no: "Нет",
    back: "Назад",
    next: "Следующий",
    finish: "Показать результат",
    restart: "Начать заново",
    change: "Изменить ответ",
    answered: "Ответ выбран. Переходим к следующему вопросу.",
    resultTitle: "Результат Ayurveda Dosha",
    detected: "Определённый тип",
    scores: "Баллы",
    protocol: "Образовательный протокол",
    print: "Печать",
    disclaimerTitle: "Обязательна консультация врача",
    disclaimer: "Консультация врача обязательна. Фитотерапия, добавки, panchakarma и любые рекомендации используются на собственный риск. Приложение не ставит диагноз, не лечит и не заменяет медицинскую консультацию.",
    noAnswer: "Ответьте на все вопросы, чтобы увидеть результат."
  },
  ua: {
    crumb: "Тести та інструменти / Ayurveda Dosha",
    title: "Тест Ayurveda Dosha",
    lead: "Освітній тест Vata–Pitta–Kapha з 40 питаннями, покроковим прогресом і орієнтовним протоколом.",
    question: "Питання",
    of: "з",
    yes: "Так",
    no: "Ні",
    back: "Назад",
    next: "Наступне",
    finish: "Показати результат",
    restart: "Почати знову",
    change: "Змінити відповідь",
    answered: "Відповідь вибрано. Переходимо до наступного питання.",
    resultTitle: "Результат Ayurveda Dosha",
    detected: "Визначений тип",
    scores: "Бали",
    protocol: "Освітній протокол",
    print: "Друк",
    disclaimerTitle: "Обов’язкова консультація лікаря",
    disclaimer: "Консультація лікаря обов’язкова. Фітотерапія, добавки, panchakarma та будь-які рекомендації використовуються на власний ризик. Застосунок не ставить діагноз, не лікує і не замінює медичну консультацію.",
    noAnswer: "Дайте відповіді на всі питання, щоб побачити результат."
  }
};

const doshaLabel: Record<Lang, Record<Dosha | "vpk" | "vp" | "vk" | "pk", string>> = {
  ro: { v: "VATA", p: "PITTA", k: "KAPHA", vp: "VATA–PITTA", vk: "VATA–KAPHA", pk: "PITTA–KAPHA", vpk: "VATA–PITTA–KAPHA" },
  en: { v: "VATA", p: "PITTA", k: "KAPHA", vp: "VATA–PITTA", vk: "VATA–KAPHA", pk: "PITTA–KAPHA", vpk: "VATA–PITTA–KAPHA" },
  ru: { v: "ВАТА", p: "ПИТТА", k: "КАПХА", vp: "ВАТА–ПИТТА", vk: "ВАТА–КАПХА", pk: "ПИТТА–КАПХА", vpk: "ВАТА–ПИТТА–КАПХА" },
  ua: { v: "ВАТА", p: "ПІТТА", k: "КАПХА", vp: "ВАТА–ПІТТА", vk: "ВАТА–КАПХА", pk: "ПІТТА–КАПХА", vpk: "ВАТА–ПІТТА–КАПХА" }
};

const protocols: Record<Lang, Record<Dosha, { title: string; sections: { h: string; items: string[] }[] }>> = {
  ro: {
    v: {
      title: "VATA – stabilizare, încălzire, rutină",
      sections: [
        { h: "Principii", items: ["Somn regulat, mese la ore fixe, mediu cald și liniștit.", "Evitați frigul, vântul, suprasolicitarea și mesele reci."] },
        { h: "Alimentație", items: ["Mâncăruri calde, ușor uleioase: supe, terciuri, tocănițe.", "Gusturi utile: dulce, acru, sărat; condimente blânde."] },
        { h: "Fitoterapie orientativă", items: ["Ashwagandha: extract 300–600 mg/zi sau pulbere 3–6 g/zi. Evitați în sarcină/alăptare; atenție cu sedative, tiroidă, diabet, imunosupresoare.", "Triphala: 1–3 g/zi seara; la doze mari poate da crampe/scaun moale și poate modifica absorbția medicamentelor.", "Ulei de susan extern: masaj 10–20 min, dacă nu există alergie la susan sau leziuni pe piele."] },
        { h: "Proceduri", items: ["Abhyanga și rutine de relaxare. Basti/Panchakarma doar în clinică și cu supraveghere medicală."] }
      ]
    },
    p: {
      title: "PITTA – răcorire, calm, reducerea inflamației",
      sections: [
        { h: "Principii", items: ["Evitați supraîncălzirea, expunerea lungă la soare și competiția excesivă.", "Pauze regulate, hidratare și tehnici de relaxare."] },
        { h: "Alimentație", items: ["Alimente răcoritoare, legume verzi, fructe dulci.", "Reduceți picantul, alcoolul, prăjelile și excesul de acru."] },
        { h: "Fitoterapie orientativă", items: ["Guduchi: extract 300–500 mg/zi sau pulbere 1–3 g/zi. Atenție în boli autoimune, diabet, sarcină și tratamente imunosupresoare.", "Triphala: 1–3 g/zi seara, cu precauție la diaree/deshidratare."] },
        { h: "Proceduri", items: ["Virechana/Panchakarma doar după evaluare medicală, în centre specializate."] }
      ]
    },
    k: {
      title: "KAPHA – activare, drenaj, stimulare metabolică",
      sections: [
        { h: "Principii", items: ["Mișcare regulată, evitarea somnului de zi, program activ.", "Reduceți stagnarea, rutina prea sedentară și mesele grele."] },
        { h: "Alimentație", items: ["Alimente ușoare, calde, uscate; gusturi picant, amar, astringent.", "Reduceți zahărul, lactatele grase, făinoasele și gustările dese."] },
        { h: "Fitoterapie orientativă", items: ["Trikatu: 0.5–3 g/zi sau 250–500 mg de 1–2 ori/zi. Contraindicat la ulcer/reflux sever/Pitta crescut; piperina poate interacționa cu multe medicamente.", "Guggulu: 500–1000 mg/zi în 2–3 prize. Evitați în sarcină/alăptare; atenție cu medicamente hepatice și tiroidiene."] },
        { h: "Proceduri", items: ["Vamana/Panchakarma doar în clinică specializată și cu supraveghere medicală obligatorie."] }
      ]
    }
  },
  en: {
    v: {
      title: "VATA – stabilization, warmth, routine",
      sections: [
        { h: "Principles", items: ["Regular sleep, fixed meal times, warm and calm environment.", "Avoid cold, wind, overstimulation and cold meals."] },
        { h: "Nutrition", items: ["Warm, slightly oily meals: soups, porridges, stews.", "Useful tastes: sweet, sour, salty; gentle spices."] },
        { h: "Educational phytotherapy", items: ["Ashwagandha: extract 300–600 mg/day or powder 3–6 g/day. Avoid in pregnancy/breastfeeding; caution with sedatives, thyroid, diabetes and immunosuppressive medication.", "Triphala: 1–3 g/day in the evening; higher doses may cause cramps/loose stool and may alter oral drug absorption.", "Sesame oil externally: massage 10–20 min if there is no sesame allergy or open skin lesion."] },
        { h: "Procedures", items: ["Abhyanga and relaxation routines. Basti/Panchakarma only in a clinic under medical supervision."] }
      ]
    },
    p: {
      title: "PITTA – cooling, calm, inflammation balance",
      sections: [
        { h: "Principles", items: ["Avoid overheating, long sun exposure and excessive competition.", "Regular pauses, hydration and relaxation practices."] },
        { h: "Nutrition", items: ["Cooling foods, green vegetables, sweet fruits.", "Reduce spicy food, alcohol, fried foods and excess sour taste."] },
        { h: "Educational phytotherapy", items: ["Guduchi: extract 300–500 mg/day or powder 1–3 g/day. Caution in autoimmune disease, diabetes, pregnancy and immunosuppressive medication.", "Triphala: 1–3 g/day in the evening, with caution in diarrhea/dehydration."] },
        { h: "Procedures", items: ["Virechana/Panchakarma only after medical evaluation in specialized centers."] }
      ]
    },
    k: {
      title: "KAPHA – activation, drainage, metabolic stimulation",
      sections: [
        { h: "Principles", items: ["Regular movement, avoid daytime sleep, maintain an active schedule.", "Reduce stagnation, sedentary routine and heavy meals."] },
        { h: "Nutrition", items: ["Light, warm, dry foods; spicy, bitter and astringent tastes.", "Reduce sugar, heavy dairy, flour-based foods and frequent snacking."] },
        { h: "Educational phytotherapy", items: ["Trikatu: 0.5–3 g/day or 250–500 mg 1–2 times/day. Contraindicated in ulcer/severe reflux/high Pitta; piperine may interact with many medications.", "Guggulu: 500–1000 mg/day in 2–3 doses. Avoid in pregnancy/breastfeeding; caution with liver and thyroid medications."] },
        { h: "Procedures", items: ["Vamana/Panchakarma only in a specialized clinic under mandatory medical supervision."] }
      ]
    }
  },
  ru: {
    v: {
      title: "ВАТА – стабилизация, тепло, режим",
      sections: [
        { h: "Принципы", items: ["Регулярный сон, приёмы пищи по времени, тёплая и спокойная среда.", "Избегайте холода, ветра, перегрузки и холодной еды."] },
        { h: "Питание", items: ["Тёплая, слегка маслянистая еда: супы, каши, рагу.", "Полезные вкусы: сладкий, кислый, солёный; мягкие специи."] },
        { h: "Фитотерапия ориентировочно", items: ["Ashwagandha: экстракт 300–600 мг/день или порошок 3–6 г/день. Избегать при беременности/лактации; осторожно с седативными, препаратами щитовидной железы, диабета и иммуносупрессорами.", "Triphala: 1–3 г/день вечером; большие дозы могут вызвать спазмы/жидкий стул и изменить всасывание лекарств.", "Кунжутное масло наружно: массаж 10–20 мин при отсутствии аллергии на кунжут и повреждений кожи."] },
        { h: "Процедуры", items: ["Abhyanga и расслабляющие рутины. Basti/Panchakarma только в клинике под медицинским наблюдением."] }
      ]
    },
    p: {
      title: "ПИТТА – охлаждение, спокойствие, баланс воспаления",
      sections: [
        { h: "Принципы", items: ["Избегайте перегрева, длительного солнца и чрезмерной конкуренции.", "Регулярные паузы, гидратация и практики расслабления."] },
        { h: "Питание", items: ["Охлаждающие продукты, зелёные овощи, сладкие фрукты.", "Снизить острое, алкоголь, жареное и избыток кислого вкуса."] },
        { h: "Фитотерапия ориентировочно", items: ["Guduchi: экстракт 300–500 мг/день или порошок 1–3 г/день. Осторожно при аутоиммунных болезнях, диабете, беременности и иммуносупрессорах.", "Triphala: 1–3 г/день вечером, осторожно при диарее/обезвоживании."] },
        { h: "Процедуры", items: ["Virechana/Panchakarma только после медицинской оценки в специализированных центрах."] }
      ]
    },
    k: {
      title: "КАПХА – активация, дренаж, стимуляция обмена",
      sections: [
        { h: "Принципы", items: ["Регулярное движение, избегать дневного сна, активный режим.", "Снизить застой, сидячую рутину и тяжёлую пищу."] },
        { h: "Питание", items: ["Лёгкая, тёплая, сухая пища; острый, горький, вяжущий вкусы.", "Снизить сахар, жирные молочные продукты, мучное и частые перекусы."] },
        { h: "Фитотерапия ориентировочно", items: ["Trikatu: 0.5–3 г/день или 250–500 мг 1–2 раза/день. Противопоказан при язве/тяжёлом рефлюксе/высокой Pitta; пиперин может взаимодействовать со многими лекарствами.", "Guggulu: 500–1000 мг/день в 2–3 приёма. Избегать при беременности/лактации; осторожно с печёночными и тиреоидными препаратами."] },
        { h: "Процедуры", items: ["Vamana/Panchakarma только в специализированной клинике под обязательным медицинским наблюдением."] }
      ]
    }
  },
  ua: {
    v: {
      title: "ВАТА – стабілізація, тепло, режим",
      sections: [
        { h: "Принципи", items: ["Регулярний сон, прийоми їжі в один час, тепле й спокійне середовище.", "Уникайте холоду, вітру, перевантаження та холодної їжі."] },
        { h: "Харчування", items: ["Тепла, трохи олійна їжа: супи, каші, рагу.", "Корисні смаки: солодкий, кислий, солоний; м’які спеції."] },
        { h: "Фітотерапія орієнтовно", items: ["Ashwagandha: екстракт 300–600 мг/день або порошок 3–6 г/день. Уникати при вагітності/лактації; обережно із седативними, препаратами щитоподібної залози, діабету та імуносупресорами.", "Triphala: 1–3 г/день увечері; великі дози можуть спричинити спазми/рідкий стул і змінити всмоктування ліків.", "Кунжутна олія зовнішньо: масаж 10–20 хв за відсутності алергії на кунжут і пошкоджень шкіри."] },
        { h: "Процедури", items: ["Abhyanga та релаксаційні рутини. Basti/Panchakarma тільки в клініці під медичним наглядом."] }
      ]
    },
    p: {
      title: "ПІТТА – охолодження, спокій, баланс запалення",
      sections: [
        { h: "Принципи", items: ["Уникайте перегріву, тривалого сонця та надмірної конкуренції.", "Регулярні паузи, гідратація та практики розслаблення."] },
        { h: "Харчування", items: ["Охолоджувальні продукти, зелені овочі, солодкі фрукти.", "Зменшити гостре, алкоголь, смажене та надлишок кислого смаку."] },
        { h: "Фітотерапія орієнтовно", items: ["Guduchi: екстракт 300–500 мг/день або порошок 1–3 г/день. Обережно при аутоімунних хворобах, діабеті, вагітності та імуносупресорах.", "Triphala: 1–3 г/день увечері, обережно при діареї/зневодненні."] },
        { h: "Процедури", items: ["Virechana/Panchakarma тільки після медичної оцінки у спеціалізованих центрах."] }
      ]
    },
    k: {
      title: "КАПХА – активація, дренаж, стимуляція обміну",
      sections: [
        { h: "Принципи", items: ["Регулярний рух, уникати денного сну, активний режим.", "Зменшити застій, сидячу рутину та важку їжу."] },
        { h: "Харчування", items: ["Легка, тепла, суха їжа; гострий, гіркий, в’яжучий смаки.", "Зменшити цукор, жирні молочні продукти, борошняне та часті перекуси."] },
        { h: "Фітотерапія орієнтовно", items: ["Trikatu: 0.5–3 г/день або 250–500 мг 1–2 рази/день. Протипоказаний при виразці/тяжкому рефлюксі/високій Pitta; піперин може взаємодіяти з багатьма ліками.", "Guggulu: 500–1000 мг/день у 2–3 прийоми. Уникати при вагітності/лактації; обережно з печінковими та тиреоїдними препаратами."] },
        { h: "Процедури", items: ["Vamana/Panchakarma тільки у спеціалізованій клініці під обов’язковим медичним наглядом."] }
      ]
    }
  }
};

function useLang(): Lang {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : "ro";
}

function detectType(scores: Record<Dosha, number>) {
  const arr = (Object.entries(scores) as [Dosha, number][]).sort((a, b) => b[1] - a[1]);
  const max = arr[0][1];
  const near = arr.filter(([, value]) => value >= max - 1);

  if (near.length >= 3) return "vpk";
  if (near.length === 2) return near.map(([key]) => key).sort().join("") as "vp" | "vk" | "pk";
  return near[0][0];
}

function typeParts(type: Dosha | "vp" | "vk" | "pk" | "vpk"): Dosha[] {
  if (type === "vpk") return ["v", "p", "k"];
  if (type === "vp") return ["v", "p"];
  if (type === "vk") return ["v", "k"];
  if (type === "pk") return ["p", "k"];
  return [type];
}

export default function AyurvedaDoshaWizard() {
  const lang = useLang();
  const t = ui[lang];
  const topRef = useRef<HTMLDivElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [done, setDone] = useState(false);

  const question = questions[current];
  const answeredCount = Object.keys(answers).length;
  const progress = done ? 100 : Math.round((answeredCount / questions.length) * 100);

  const scores = useMemo(() => {
    const next: Record<Dosha, number> = { v: 0, p: 0, k: 0 };

    questions.forEach((q) => {
      if (answers[q.id] === "yes") next[q.dosha] += 1;
    });

    return next;
  }, [answers]);

  const detected = useMemo(() => detectType(scores), [scores]);

  useEffect(() => {
    if (!done) topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [current, done]);

  function answer(value: Answer) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));

    window.setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
      } else {
        setDone(true);
        window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      }
    }, 180);
  }

  function goBack() {
    setDone(false);
    setCurrent((prev) => Math.max(0, prev - 1));
  }

  function restart() {
    setAnswers({});
    setCurrent(0);
    setDone(false);
  }

  const parts = typeParts(detected);

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{t.crumb}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="rmSection ayurWizardSection" ref={topRef}>
        <div className="rmShell ayurWizardShell">
          <div className="ayurProgressCard">
            <div className="ayurProgressTop">
              <span>
                {done ? t.resultTitle : `${t.question} ${current + 1} ${t.of} ${questions.length}`}
              </span>
              <b>{progress}%</b>
            </div>
            <div className="ayurProgressBar">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>

          {!done && (
            <article className="ayurStepCard">
              <div className="ayurStepBadge">
                {question.dosha === "v" ? "Vata" : question.dosha === "p" ? "Pitta" : "Kapha"}
              </div>

              <h2>{question.text[lang]}</h2>

              <div className="ayurAnswerGrid">
                <button
                  className={answers[question.id] === "yes" ? "selected" : ""}
                  onClick={() => answer("yes")}
                  type="button"
                >
                  {t.yes}
                </button>
                <button
                  className={answers[question.id] === "no" ? "selected" : ""}
                  onClick={() => answer("no")}
                  type="button"
                >
                  {t.no}
                </button>
              </div>

              {answers[question.id] && <p className="ayurSelectedHint">{t.answered}</p>}

              <div className="ayurWizardActions">
                <button className="softBtn" type="button" onClick={goBack} disabled={current === 0}>
                  {t.back}
                </button>
                <button
                  className="softBtn"
                  type="button"
                  onClick={() => {
                    if (current < questions.length - 1) setCurrent((prev) => prev + 1);
                    else setDone(true);
                  }}
                >
                  {current < questions.length - 1 ? t.next : t.finish}
                </button>
              </div>
            </article>
          )}

          {done && (
            <article className="ayurResultWizard" ref={resultRef}>
              <div className="ayurResultHead">
                <div>
                  <span>{t.detected}</span>
                  <h2>{doshaLabel[lang][detected]}</h2>
                </div>
                <button className="softBtn" type="button" onClick={() => window.print()}>
                  {t.print}
                </button>
              </div>

              <div className="ayurScoreGrid">
                {(["v", "p", "k"] as Dosha[]).map((d) => (
                  <div className="ayurScoreItem" key={d}>
                    <b>{doshaLabel[lang][d]}</b>
                    <div>
                      <i style={{ width: `${Math.min(100, scores[d] * 9)}%` }} />
                    </div>
                    <strong>{scores[d]}</strong>
                  </div>
                ))}
              </div>

              <h3>{t.protocol}</h3>

              <div className="ayurProtocolGrid">
                {parts.map((part) => {
                  const protocol = protocols[lang][part];
                  return (
                    <section className="ayurProtocolCard" key={part}>
                      <h4>{protocol.title}</h4>
                      {protocol.sections.map((section) => (
                        <div className="ayurProtocolSection" key={section.h}>
                          <h5>{section.h}</h5>
                          <ul>
                            {section.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>
                  );
                })}
              </div>

              <div className="ayurRiskBox">
                <b>{t.disclaimerTitle}</b>
                <p>{t.disclaimer}</p>
              </div>

              <div className="ayurWizardActions bottom">
                <button className="softBtn" type="button" onClick={() => { setDone(false); setCurrent(Math.max(0, questions.length - 1)); }}>
                  {t.change}
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
