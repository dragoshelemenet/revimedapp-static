"use client";

import PageHeading from "@/components/PageHeading";
import ToolClusterFooter from "@/components/ToolClusterFooter";

import { useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

type Dosha = "vata" | "pitta" | "kapha";
type Answer = "yes" | "no";
type Question = { id: number; dosha: Dosha; ro: string; en: string; ru: string; ua: string };

const questions: Question[] = [
  { id: 1, dosha: "vata", ro: "Sunt slab(ă), cu constituție fină, iau greu în greutate.", en: "I am slim, with a fine constitution, and I gain weight with difficulty.", ru: "Я худощавый(ая), с тонким телосложением, мне трудно набрать вес.", ua: "Я худорлявий(а), з тонкою статурою, мені важко набрати вагу." },
  { id: 2, dosha: "pitta", ro: "Am constituție medie, bine definită, cu masă musculară bună.", en: "I have a medium, well-defined build with good muscle mass.", ru: "У меня среднее, хорошо сформированное телосложение, развитая мускулатура.", ua: "Я маю середню, добре сформовану статуру з хорошою м’язовою масою." },
  { id: 3, dosha: "kapha", ro: "Am constituție robustă, ușor mă îngraș și rețin lichide.", en: "I have a robust constitution, gain weight easily and retain fluids.", ru: "У меня крепкое телосложение, я легко набираю вес и задерживаю жидкость.", ua: "Я маю міцну статуру, легко набираю вагу та затримую рідину." },
  { id: 4, dosha: "vata", ro: "Am mâinile și picioarele reci, nu suport frigul și vântul.", en: "My hands and feet are often cold; I do not tolerate cold and wind well.", ru: "У меня часто холодные руки и ноги, я плохо переношу холод и ветер.", ua: "У мене часто холодні руки й ноги, я погано переношу холод і вітер." },
  { id: 5, dosha: "pitta", ro: "Îmi este adesea cald, nu suport căldura, prefer răcoarea.", en: "I often feel hot, dislike heat and prefer cool environments.", ru: "Мне часто жарко, я не люблю жару и предпочитаю прохладу.", ua: "Мені часто жарко, я не люблю спеку та віддаю перевагу прохолоді." },
  { id: 6, dosha: "kapha", ro: "Tolerez bine frigul, iar vremea rece și umedă mă obosește.", en: "I tolerate cold fairly well, but cold and damp weather makes me sluggish.", ru: "Я сравнительно хорошо переношу холод, но сырая погода делает меня вялым.", ua: "Я досить добре переношу холод, але сира погода робить мене млявим(ою)." },
  { id: 7, dosha: "vata", ro: "Am apetit variabil, pot să sar peste mese fără probleme.", en: "My appetite is variable; I can skip meals without much difficulty.", ru: "У меня переменный аппетит, я могу пропускать приёмы пищи без особых проблем.", ua: "У мене мінливий апетит, я можу пропускати прийоми їжі без особливих проблем." },
  { id: 8, dosha: "pitta", ro: "Am apetit puternic, devin iritabil(ă) dacă sar peste masă.", en: "I have a strong appetite and become irritable if I skip a meal.", ru: "У меня сильный аппетит, я раздражаюсь, если пропускаю еду.", ua: "У мене сильний апетит, я дратуюся, якщо пропускаю їжу." },
  { id: 9, dosha: "kapha", ro: "Am digestie lentă, greutate după mâncare, în special seara.", en: "My digestion is slow and I feel heavy after meals, especially in the evening.", ru: "У меня медленное пищеварение, тяжесть после еды, особенно вечером.", ua: "У мене повільне травлення, важкість після їжі, особливо ввечері." },
  { id: 10, dosha: "vata", ro: "Somnul meu este ușor, cu treziri frecvente sau insomnie.", en: "My sleep is light, with frequent waking or insomnia.", ru: "У меня лёгкий сон, частые пробуждения или бессонница.", ua: "Мій сон легкий, із частими пробудженнями або безсонням." },
  { id: 11, dosha: "pitta", ro: "Somnul meu este mediu, de obicei bun, dar se tulbură la stres.", en: "My sleep is moderate and usually good, but stress disturbs it.", ru: "У меня сон средней продолжительности, обычно хороший, но портится при стрессе.", ua: "Мій сон середній, зазвичай добрий, але порушується при стресі." },
  { id: 12, dosha: "kapha", ro: "Dorm profund și mult, îmi este greu să mă trezesc dimineața.", en: "I sleep deeply and for a long time; waking up in the morning is difficult.", ru: "Я сплю глубоко и долго, мне трудно проснуться утром.", ua: "Я сплю глибоко й довго, мені важко прокидатися вранці." },
  { id: 13, dosha: "vata", ro: "Mă mișc repede, gesticulez mult, vorbesc repede.", en: "I move quickly, gesture a lot and speak fast.", ru: "Я двигаюсь быстро, много жестикулирую и быстро говорю.", ua: "Я швидко рухаюся, багато жестикулюю та швидко говорю." },
  { id: 14, dosha: "pitta", ro: "Sunt hotărât(ă), direct(ă), uneori critic(ă) și perfecționist(ă).", en: "I am determined and direct, sometimes critical and perfectionistic.", ru: "Я решительный, прямой, иногда критичный и перфекционист.", ua: "Я рішучий(а), прямий(а), іноді критичний(а) і перфекціоніст(ка)." },
  { id: 15, dosha: "kapha", ro: "Sunt calm(ă), stabil(ă), am reacții lente și răbdare mare.", en: "I am calm and stable, with slow reactions and strong patience.", ru: "Я спокойный, стабильный, медленно реагирую, у меня много терпения.", ua: "Я спокійний(а), стабільний(а), повільно реагую та маю багато терпіння." },
  { id: 16, dosha: "vata", ro: "Sunt adesea neliniștit(ă), îngrijorat(ă), cu multe gânduri.", en: "I am often restless, worried and have many thoughts at once.", ru: "Я часто испытываю беспокойство, тревогу, в голове много мыслей.", ua: "Я часто відчуваю неспокій, тривогу, у голові багато думок." },
  { id: 17, dosha: "pitta", ro: "Mă enervez repede, pot avea izbucniri de furie.", en: "I become angry quickly and may have outbursts.", ru: "Я быстро злюсь, у меня бывают вспышки гнева.", ua: "Я швидко злюся, у мене бувають спалахи гніву." },
  { id: 18, dosha: "kapha", ro: "De obicei nu mă enervez ușor, dar tind să devin letargic(ă).", en: "I do not get angry easily, but I tend to become lethargic.", ru: "Я редко злюсь, но склонен к вялости и пассивности.", ua: "Я рідко злюся, але схильний(а) до млявості та пасивності." },
  { id: 19, dosha: "vata", ro: "Am pielea uscată și rece, mai ales iarna.", en: "My skin is dry and cold, especially in winter.", ru: "У меня сухая и холодная кожа, особенно зимой.", ua: "У мене суха й холодна шкіра, особливо взимку." },
  { id: 20, dosha: "pitta", ro: "Am pielea caldă, uneori înroșită, predispusă la iritații.", en: "My skin is warm, sometimes red and prone to irritation.", ru: "У меня тёплая кожа, склонная к покраснениям и раздражениям.", ua: "У мене тепла шкіра, іноді почервоніла та схильна до подразнень." },
  { id: 21, dosha: "kapha", ro: "Am pielea groasă, catifelată, uneori umedă, ten pal.", en: "My skin is thick, soft, sometimes moist, with a pale complexion.", ru: "У меня плотная, мягкая кожа, иногда влажная, с бледным оттенком.", ua: "У мене щільна, м’яка шкіра, іноді волога, з блідим відтінком." },
  { id: 22, dosha: "vata", ro: "Învăț repede, dar uit repede.", en: "I learn quickly, but forget quickly.", ru: "Я быстро учусь, но так же быстро забываю.", ua: "Я швидко навчаюся, але швидко забуваю." },
  { id: 23, dosha: "pitta", ro: "Învăț moderat, dar îmi amintesc bine detaliile.", en: "I learn at a moderate pace and remember details well.", ru: "Я учусь в среднем темпе, но хорошо запоминаю детали.", ua: "Я навчаюся в середньому темпі, але добре пам’ятаю деталі." },
  { id: 24, dosha: "kapha", ro: "Învăț încet, dar am memorie de lungă durată.", en: "I learn slowly, but have long-term memory.", ru: "Я учусь медленно, но у меня долговременная память.", ua: "Я навчаюся повільно, але маю довготривалу пам’ять." },
  { id: 25, dosha: "vata", ro: "Digestia mea este imprevizibilă: uneori constipație, uneori normal.", en: "My digestion is unpredictable: sometimes constipation, sometimes normal.", ru: "Моё пищеварение непредсказуемое: то запор, то нормальный стул.", ua: "Моє травлення непередбачуване: іноді закреп, іноді нормально." },
  { id: 26, dosha: "pitta", ro: "Am scaun moale sau diaree când sunt stresat(ă) sau mănânc picant.", en: "I may have loose stool or diarrhea when stressed or after spicy food.", ru: "При стрессе или острой пище у меня бывает жидкий стул / диарея.", ua: "При стресі або гострій їжі у мене буває рідкий стул / діарея." },
  { id: 27, dosha: "kapha", ro: "Am scaun rar, greu, cu tendință la constipație cronică.", en: "My stool is infrequent and heavy, with tendency toward chronic constipation.", ru: "У меня редкий, плотный стул, склонность к хроническим запорам.", ua: "У мене рідкий, щільний стул, схильність до хронічних закрепів." },
  { id: 28, dosha: "vata", ro: "Tind să mă agit, să mă grăbesc, să încep multe lucruri deodată.", en: "I tend to rush, become agitated and start many things at once.", ru: "Я склонен(на) суетиться, спешить и начинать много дел одновременно.", ua: "Я схильний(а) метушитися, поспішати та починати багато справ одночасно." },
  { id: 29, dosha: "pitta", ro: "Îmi place competiția, provocarea, vreau să fiu cel(cea) mai bun(ă).", en: "I like competition and challenge, and I want to be the best.", ru: "Я люблю конкуренцию и вызовы, хочу быть лучшим(ей).", ua: "Я люблю конкуренцію та виклики, хочу бути найкращим(ою)." },
  { id: 30, dosha: "kapha", ro: "Prefer stabilitatea, rutina, evit schimbările bruște.", en: "I prefer stability and routine, and avoid sudden changes.", ru: "Я предпочитаю стабильность и рутину, избегаю резких изменений.", ua: "Я віддаю перевагу стабільності та рутині, уникаю різких змін." },
  { id: 31, dosha: "vata", ro: "Simt frecvent anxietate, frică, nesiguranță fără motiv clar.", en: "I often feel anxiety, fear or insecurity without a clear reason.", ru: "Я часто испытываю тревогу, страх, неуверенность без явной причины.", ua: "Я часто відчуваю тривогу, страх, невпевненість без явної причини." },
  { id: 32, dosha: "pitta", ro: "Simt frecvent iritabilitate, critică față de mine și de alții.", en: "I often feel irritability and criticism toward myself and others.", ru: "Я часто раздражителен и критичен к себе и другим.", ua: "Я часто дратівливий(а) і критичний(а) до себе та інших." },
  { id: 33, dosha: "kapha", ro: "Simt frecvent apatie, lipsă de motivație, aș dormi sau aș mânca mai mult.", en: "I often feel apathy, lack of motivation, and want to sleep or eat more.", ru: "Я часто чувствую апатию, отсутствие мотивации, хочется больше спать и есть.", ua: "Я часто відчуваю апатію, відсутність мотивації, хочеться більше спати або їсти." },
  { id: 34, dosha: "vata", ro: "Am o voce subțire, schimbătoare, vorbesc repede.", en: "My voice is thin or variable, and I speak quickly.", ru: "У меня тонкий, меняющийся голос, я говорю быстро.", ua: "У мене тонкий, мінливий голос, я говорю швидко." },
  { id: 35, dosha: "pitta", ro: "Am voce clară, pătrunzătoare, uneori aspră când sunt supărat(ă).", en: "My voice is clear and penetrating, sometimes harsh when I am upset.", ru: "У меня ясный, проникновенный голос, иногда резкий, когда я злюсь.", ua: "У мене ясний, проникливий голос, іноді різкий, коли я злюся." },
  { id: 36, dosha: "kapha", ro: "Am voce gravă, calmă, vorbesc încet și rar.", en: "My voice is deep and calm; I speak slowly and not very often.", ru: "У меня низкий, спокойный голос, я говорю медленно и редко.", ua: "У мене низький, спокійний голос, я говорю повільно й рідко." },
  { id: 37, dosha: "vata", ro: "Prefer mâncărurile calde, uleioase, condimente blânde.", en: "I prefer warm, slightly oily foods and gentle spices.", ru: "Я предпочитаю тёплую приготовленную пищу с небольшим количеством масла; супы, каши, рагу.", ua: "Я віддаю перевагу теплій їжі з невеликою кількістю олії; супам, кашам, рагу." },
  { id: 38, dosha: "pitta", ro: "Prefer mâncărurile reci, salate, gust intens, picant, acru.", en: "I prefer cold foods, salads, intense taste, spicy and sour flavors.", ru: "Я люблю холодные блюда, салаты, яркий вкус, острое и кислое.", ua: "Я люблю холодні страви, салати, яскравий смак, гостре й кисле." },
  { id: 39, dosha: "kapha", ro: "Prefer mâncărurile dulci, lactate, făinoase, îmi place să gust des.", en: "I prefer sweets, dairy and flour-based foods, and like to snack often.", ru: "Я люблю сладкое, молочные продукты, мучное, люблю часто перекусывать.", ua: "Я люблю солодке, молочні продукти, борошняне, люблю часто перекушувати." },
  { id: 40, dosha: "vata", ro: "Mă simt mai bine în mediu cald, liniștit, cu rutină.", en: "I feel better in a warm, calm environment with a clear routine.", ru: "Я чувствую себя лучше в тёплой, спокойной обстановке с понятной рутиной.", ua: "Я почуваюся краще в теплому, спокійному середовищі з чіткою рутиною." }
];

const ui = {
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
    result: "Rezultat",
    restart: "Reia testul",
    print: "Tipărește",
    detected: "Tip detectat",
    scores: "Scoruri",
    protocol: "Protocol educațional",
    warningTitle: "Atenție medicală obligatorie",
    warning: "Consultarea cu medicul este obligatorie. Fitoterapia, suplimentele, panchakarma și orice recomandare se folosesc pe propriul risc. Această aplicație nu pune diagnostic, nu tratează și nu înlocuiește consultația medicală."
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
    result: "Result",
    restart: "Restart test",
    print: "Print",
    detected: "Detected type",
    scores: "Scores",
    protocol: "Educational protocol",
    warningTitle: "Medical consultation required",
    warning: "Medical consultation is mandatory. Phytotherapy, supplements, panchakarma and any recommendation are used at your own risk. This app does not diagnose, treat or replace medical consultation."
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
    result: "Результат",
    restart: "Начать заново",
    print: "Печать",
    detected: "Определённый тип",
    scores: "Баллы",
    protocol: "Образовательный протокол",
    warningTitle: "Обязательна консультация врача",
    warning: "Консультация врача обязательна. Фитотерапия, добавки, panchakarma и любые рекомендации используются на собственный риск. Приложение не ставит диагноз, не лечит и не заменяет медицинскую консультацию."
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
    result: "Результат",
    restart: "Почати знову",
    print: "Друк",
    detected: "Визначений тип",
    scores: "Бали",
    protocol: "Освітній протокол",
    warningTitle: "Обов’язкова консультація лікаря",
    warning: "Консультація лікаря обов’язкова. Фітотерапія, добавки, panchakarma та будь-які рекомендації використовуються на власний ризик. Застосунок не ставить діагноз, не лікує і не замінює медичну консультацію."
  }
} as const;

const labels = {
  ro: { vata: "VATA", pitta: "PITTA", kapha: "KAPHA", mixed: "Tip mixt" },
  en: { vata: "VATA", pitta: "PITTA", kapha: "KAPHA", mixed: "Mixed type" },
  ru: { vata: "ВАТА", pitta: "ПИТТА", kapha: "КАПХА", mixed: "Смешанный тип" },
  ua: { vata: "ВАТА", pitta: "ПІТТА", kapha: "КАПХА", mixed: "Змішаний тип" }
} as const;

const protocolText: Record<Lang, Record<Dosha, { title: string; items: string[] }>> = {
  ro: {
    vata: { title: "VATA – stabilizare, încălzire, rutină", items: ["Somn regulat, mese la ore fixe, mediu cald și liniștit.", "Mâncăruri calde, ușor uleioase: supe, terciuri, tocănițe.", "Plante adaptogene (ex. Ashwagandha) — exclusiv la indicația și în doza stabilită de medicul fitoterapeut (contraindicații: sarcină, alăptare, afecțiuni tiroidiene, diabet, sedative).", "Fitoterapie digestivă blândă (ex. Triphala) — doar cu avizul medicului specialist.", "Abhyanga/Basti/Panchakarma doar sub supraveghere medicală."] },
    pitta: { title: "PITTA – răcorire, calm, reducerea inflamației", items: ["Evitați supraîncălzirea, soarele excesiv, competiția și stresul intens.", "Alimente răcoritoare, legume verzi, fructe dulci; reduceți picantul, alcoolul și prăjelile.", "Plante fitoterapeutice (ex. Guduchi) — exclusiv la recomandarea medicului (precauție în boli autoimune, diabet, sarcină și tratamente imunosupresoare).", "Suport fitoterapeutic digestiv — doar după consult medical (precauție la sensibilitate gastrointestinală).", "Virechana/Panchakarma doar în centre specializate."] },
    kapha: { title: "KAPHA – activare, drenaj, stimulare metabolică", items: ["Mișcare regulată, evitare somn de zi, program activ.", "Alimente ușoare, calde, uscate; reduceți zahărul, lactatele grase, făinoasele și gustările dese.", "Condimente și extracte calde (ex. Trikatu) — doar cu acordul medicului; contraindicate în gastrită, ulcer sau reflux gastroesofagian.", "Extracte fitoterapeutice metabolice (ex. Guggulu) — doar la prescripția medicului (evitați în sarcină, alăptare și tratamente hepatice/tiroidiene).", "Vamana/Panchakarma doar cu supraveghere medicală obligatorie."] }
  },
  en: {
    vata: { title: "VATA – stabilization, warmth, routine", items: ["Regular sleep, fixed meals, warm and calm environment.", "Warm, slightly oily meals: soups, porridges, stews.", "Adaptogenic herbs (e.g., Ashwagandha) — strictly as prescribed by a physician (avoid in pregnancy/breastfeeding; caution with sedatives, thyroid, and diabetes medication).", "Gentle digestive phytotherapy (e.g., Triphala) — only under medical guidance.", "Abhyanga/Basti/Panchakarma only under medical supervision."] },
    pitta: { title: "PITTA – cooling, calm, inflammation balance", items: ["Avoid overheating, excessive sun, competition and intense stress.", "Cooling foods, green vegetables, sweet fruits; reduce spicy food, alcohol and fried foods.", "Herbal support (e.g., Guduchi) — only upon physician recommendation (caution in autoimmune conditions, diabetes, pregnancy).", "Digestive herbal support — only after medical consultation.", "Virechana/Panchakarma only in specialized centers."] },
    kapha: { title: "KAPHA – activation, drainage, metabolic stimulation", items: ["Regular movement, avoid daytime sleep, active schedule.", "Light, warm, dry foods; reduce sugar, heavy dairy, flour-based foods and frequent snacking.", "Warming herbal blends (e.g., Trikatu) — only with medical advice; contraindicated in gastritis, ulcer, or severe reflux.", "Metabolic herbal extracts (e.g., Guggulu) — strictly under medical supervision (avoid in pregnancy/breastfeeding and liver/thyroid medication).", "Vamana/Panchakarma only with mandatory medical supervision."] }
  },
  ru: {
    vata: { title: "ВАТА – стабилизация, тепло, режим", items: ["Регулярный сон, питание по времени, тёплая и спокойная среда.", "Тёплая, слегка маслянистая еда: супы, каши, рагу.", "Адаптогенные фитопрепараты (напр., Ashwagandha) — исключительно по назначению врача-фитотерапевта с учётом противопоказаний.", "Мягкая фитотерапия (напр., Triphala) — только по рекомендации врача.", "Abhyanga/Basti/Panchakarma только под медицинским наблюдением."] },
    pitta: { title: "ПИТТА – охлаждение, спокойствие, баланс воспаления", items: ["Избегайте перегрева, чрезмерного солнца, конкуренции и сильного стресса.", "Охлаждающие продукты, зелёные овощи, сладкие фрукты; снизить острое, алкоголь и жареное.", "Фитоподдержка (напр., Guduchi) — только после консультации врача (осторожно при аутоиммунных заболеваниях, диабете, беременности).", "Фитоподдержка пищеварения — только по согласованию с врачом.", "Virechana/Panchakarma только в специализированных центрах."] },
    kapha: { title: "КАПХА – активация, дренаж, стимуляция обмена", items: ["Регулярное движение, избегать дневного сна, активный режим.", "Лёгкая, тёплая, сухая пища; снизить сахар, жирные молочные продукты, мучное и частые перекусы.", "Согревающие фитосборы (напр., Trikatu) — только по рекомендации врача; противопоказаны при гастрите, язве и рефлюксе.", "Метаболические фитоэкстракты (напр., Guggulu) — строго по назначению врача.", "Vamana/Panchakarma только под обязательным медицинским наблюдением."] }
  },
  ua: {
    vata: { title: "ВАТА – стабілізація, тепло, режим", items: ["Регулярний сон, їжа в один час, тепле й спокійне середовище.", "Тепла, трохи олійна їжа: супи, каші, рагу.", "Адаптогенні фітопрепарати (напр., Ashwagandha) — виключно за призначенням лікаря-фітотерапевта з урахуванням протипоказань.", "М’яка фітотерапія (напр., Triphala) — тільки за рекомендацією лікаря.", "Abhyanga/Basti/Panchakarma тільки під медичним наглядом."] },
    pitta: { title: "ПІТТА – охолодження, спокій, баланс запалення", items: ["Уникайте перегріву, надмірного сонця, конкуренції та сильного стресу.", "Охолоджувальні продукти, зелені овочі, солодкі фрукти; зменшити гостре, алкоголь і смажене.", "Фітопідтримка (напр., Guduchi) — тільки після консультації лікаря.", "Фітопідтримка травлення — тільки за погодженням із лікарем.", "Virechana/Panchakarma тільки у спеціалізованих центрах."] },
    kapha: { title: "КАПХА – активація, дренаж, стимуляція обміну", items: ["Регулярний рух, уникати денного сну, активний режим.", "Легка, тепла, суха їжа; зменшити цукор, жирні молочні продукти, борошняне та часті перекуси.", "Зігрівальні фітозбори (напр., Trikatu) — тільки за рекомендацією лікаря; протипоказані при гастриті, виразці та рефлюксі.", "Метаболічні фітоекстракти (напр., Guggulu) — суворо за призначенням лікаря.", "Vamana/Panchakarma тільки під обов’язковим медичним наглядом."] }
  }
};

function getLang(pathname: string): Lang {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : "ro";
}

function calculateResult(answers: Record<number, Answer>) {
  const scores: Record<Dosha, number> = { vata: 0, pitta: 0, kapha: 0 };

  for (const q of questions) {
    if (answers[q.id] === "yes") scores[q.dosha] += 1;
  }

  const ordered = (Object.entries(scores) as [Dosha, number][]).sort((a, b) => b[1] - a[1]);
  const max = ordered[0]?.[1] || 0;
  const main = ordered.filter(([, value]) => value >= max - 1 && value > 0).map(([key]) => key);

  return {
    scores,
    main: main.length ? main : [ordered[0]?.[0] || "vata"]
  };
}

export default function AyurvedaDoshaPage() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const t = ui[lang];
  const resultRef = useRef<HTMLDivElement | null>(null);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[Math.min(step, questions.length - 1)];
  const answeredCount = Object.keys(answers).length;
  const progress = showResult ? 100 : Math.round((answeredCount / questions.length) * 100);

  const result = useMemo(() => calculateResult(answers), [answers]);

  function choose(value: Answer) {
    const q = currentQuestion;
    if (!q) return;

    const nextAnswers = { ...answers, [q.id]: value };
    setAnswers(nextAnswers);

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

  const resultTitle = result.main.length > 1
    ? `${labels[lang].mixed}: ${result.main.map((d) => labels[lang][d]).join("–")}`
    : labels[lang][result.main[0]];

  return (
    <>
      <PageHeading>
        <div>
          <p className="crumb">{t.crumb}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </PageHeading>

      <section className="rmSection ayurWizardSection">
        <div className="rmShell ayurWizardShell">
          <div className="ayurProgressCard">
            <div className="ayurProgressTop">
              <span>{showResult ? t.result : `${t.question} ${step + 1} ${t.of} ${questions.length}`}</span>
              <b>{progress}%</b>
            </div>
            <div className="ayurProgressBar">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>

          {!showResult && currentQuestion && (
            <article className="ayurStepCard">
              <div className="ayurStepBadge">{labels[lang][currentQuestion.dosha]}</div>
              <h2>{currentQuestion[lang]}</h2>

              <div className="ayurAnswerGrid">
                <button type="button" className={answers[currentQuestion.id] === "yes" ? "selected" : ""} onClick={() => choose("yes")}>
                  {t.yes}
                </button>
                <button type="button" className={answers[currentQuestion.id] === "no" ? "selected" : ""} onClick={() => choose("no")}>
                  {t.no}
                </button>
              </div>

              <div className="ayurWizardActions">
                <button className="softBtn" type="button" disabled={step === 0} onClick={goBack}>{t.back}</button>
                <button className="softBtn" type="button" onClick={() => step < questions.length - 1 ? setStep(step + 1) : setShowResult(true)}>
                  {step < questions.length - 1 ? t.next : t.result}
                </button>
              </div>
            </article>
          )}

          {showResult && (
            <article className="ayurResultWizard" ref={resultRef}>
              <div className="ayurResultHead">
                <div>
                  <span>{t.detected}</span>
                  <h2>{resultTitle}</h2>
                </div>
                <button className="softBtn" type="button" onClick={() => window.print()}>{t.print}</button>
              </div>

              <h3>{t.scores}</h3>
              <div className="ayurScoreGrid">
                {(["vata", "pitta", "kapha"] as Dosha[]).map((dosha) => (
                  <div className="ayurScoreItem" key={dosha}>
                    <b>{labels[lang][dosha]}</b>
                    <div><i style={{ width: `${Math.min(100, result.scores[dosha] * 8)}%` }} /></div>
                    <strong>{result.scores[dosha]}</strong>
                  </div>
                ))}
              </div>

              <h3>{t.protocol}</h3>
              <div className="ayurProtocolGrid">
                {result.main.map((dosha) => (
                  <section className="ayurProtocolCard" key={dosha}>
                    <h4>{protocolText[lang][dosha].title}</h4>
                    <ul>
                      {protocolText[lang][dosha].items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="ayurRiskBox">
                <b>{t.warningTitle}</b>
                <p>{t.warning}</p>
              </div>

              <div className="ayurWizardActions bottom">
                <button className="softBtn" type="button" onClick={goBack}>{t.back}</button>
                <button className="blueBtn" type="button" onClick={restart}>{t.restart}</button>
              </div>
            </article>
          )}
        </div>
      </section>
          <ToolClusterFooter slug="test-ayurveda-dosha" lang={lang} title={t.title} description={t.lead} />
    </>
  );
}
