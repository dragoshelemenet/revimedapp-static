const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(process.cwd(), "data", "revimed.sqlite"));

const dictionary = {
  en: {
    "Consultații Neurologice": "Neurological Consultations",
    "Consultații Neurochirurgie": "Neurosurgery Consultations",
    "Fizioterapie și Reabilitare": "Physiotherapy and Rehabilitation",
    "Diagnostic Funcțional": "Functional Diagnostics",
    "Terapie Balneară": "Balneotherapy",
    "Electroterapie": "Electrotherapy",

    "Consultație primară cu neurolog": "Initial neurological consultation",
    "Consultație repetată cu neurolog": "Follow-up neurological consultation",
    "Electroencefalografie (EEG)": "Electroencephalography (EEG)",
    "Electromiografie (EMG)": "Electromyography (EMG)",
    "Imagistică IRM": "MRI imaging",
    "Tomografie CT": "CT scan",
    "Stimulare magnetică transcraniană (TMS)": "Transcranial magnetic stimulation (TMS)",

    "Consultație primară cu chirurg": "Initial surgical consultation",
    "Consultație repetată cu chirurg": "Follow-up surgical consultation",
    "Planificare pre-operatorie": "Pre-operative planning",
    "Consultație post-operatorie": "Post-operative consultation",
    "Evaluare imagistică pre-chirurgicală": "Pre-surgical imaging evaluation",
    "Consultare multidisciplinară": "Multidisciplinary consultation",

    "Ședință de fizioterapie (30 min)": "Physiotherapy session (30 min)",
    "Masaj terapeutic (60 min)": "Therapeutic massage (60 min)",
    "Electroterapie combinată": "Combined electrotherapy",
    "Fizioterapie manuală (45 min)": "Manual physiotherapy (45 min)",
    "Reabilitare post-operatorie (60 min)": "Post-operative rehabilitation (60 min)",
    "Programe personalizate de exerciții": "Personalized exercise programs",
    "Reabilitare echilibrată și coordonată": "Balance and coordination rehabilitation",

    "Teste funcționale neurologice": "Neurological functional tests",
    "Evaluări cognitive": "Cognitive assessments",
    "Teste de reacție și coordonare": "Reaction and coordination tests",
    "Evaluare completă a sistemului motor": "Complete motor system assessment",

    "Băi curative cu nămol": "Therapeutic mud baths",
    "Hidroterapie": "Hydrotherapy",
    "Sauna terapeutică": "Therapeutic sauna",
    "Masaj cu nămol (60 min)": "Mud massage (60 min)",
    "Terapie cu vitamine și minerale": "Vitamin and mineral therapy",
    "Tratament combinat hidroterapie + masaj": "Combined hydrotherapy + massage treatment",

    "Electrostimulare musculară": "Muscle electrostimulation",
    "Electroneurostimulare": "Electroneurostimulation",
    "Terapie cu ultrasunete (30 min)": "Ultrasound therapy (30 min)",
    "Terapie cu curenți alternanți": "Alternating current therapy",
    "Terapie cu curenți continui": "Direct current therapy",

    "Evaluare neurologică inițială": "Initial neurological evaluation",
    "Consultație de control": "Follow-up consultation",
    "Evaluarea activității electrice cerebrale": "Assessment of brain electrical activity",
    "Evaluarea nervilor și mușchilor": "Assessment of nerves and muscles",
    "Investigație imagistică": "Imaging investigation",
    "Procedură specializată": "Specialized procedure",
    "Evaluare inițială": "Initial evaluation",
    "Recomandări și planificare": "Recommendations and planning",
    "Evaluare după intervenție": "Post-procedure evaluation",
    "Analiză imagistică": "Imaging analysis",
    "Evaluare complexă": "Complex evaluation",
    "Ședință individuală": "Individual session",
    "Masaj terapeutic": "Therapeutic massage",
    "Procedură combinată": "Combined procedure",
    "Terapie manuală": "Manual therapy",
    "Recuperare postoperatorie": "Post-operative recovery",
    "Program individual": "Individual program",
    "Echilibru și coordonare": "Balance and coordination",
    "Diagnostic funcțional": "Functional diagnostics",
    "Diagnostic nervi și mușchi": "Nerve and muscle diagnostics",
    "Evaluare funcțională": "Functional evaluation",
    "Evaluare funcții cognitive": "Cognitive function assessment",
    "Evaluare coordonare": "Coordination assessment",
    "Evaluare motorie": "Motor evaluation",
    "Tratament balnear": "Balneotherapy treatment",
    "Terapie cu apă": "Water therapy",
    "Saună terapeutică": "Therapeutic sauna",
    "Masaj balnear": "Balneotherapy massage",
    "Terapie complementară": "Complementary therapy",
    "Tratament combinat": "Combined treatment",
    "Activare musculară": "Muscle activation",
    "Stimulare nervoasă": "Nerve stimulation",
    "Ultrasunete terapeutice": "Therapeutic ultrasound",
    "Curent alternativ": "Alternating current",
    "Curent continuu": "Direct current"
  },

  ru: {
    "Consultații Neurologice": "Неврологические консультации",
    "Consultații Neurochirurgie": "Консультации нейрохирурга",
    "Fizioterapie și Reabilitare": "Физиотерапия и реабилитация",
    "Diagnostic Funcțional": "Функциональная диагностика",
    "Terapie Balneară": "Бальнеотерапия",
    "Electroterapie": "Электротерапия",

    "Consultație primară cu neurolog": "Первичная консультация невролога",
    "Consultație repetată cu neurolog": "Повторная консультация невролога",
    "Electroencefalografie (EEG)": "Электроэнцефалография (ЭЭГ)",
    "Electromiografie (EMG)": "Электромиография (ЭМГ)",
    "Imagistică IRM": "МРТ-исследование",
    "Tomografie CT": "КТ-исследование",
    "Stimulare magnetică transcraniană (TMS)": "Транскраниальная магнитная стимуляция (ТМС)",

    "Consultație primară cu chirurg": "Первичная консультация хирурга",
    "Consultație repetată cu chirurg": "Повторная консультация хирурга",
    "Planificare pre-operatorie": "Предоперационное планирование",
    "Consultație post-operatorie": "Послеоперационная консультация",
    "Evaluare imagistică pre-chirurgicală": "Предоперационная оценка снимков",
    "Consultare multidisciplinară": "Мультидисциплинарная консультация",

    "Ședință de fizioterapie (30 min)": "Сеанс физиотерапии (30 мин)",
    "Masaj terapeutic (60 min)": "Лечебный массаж (60 мин)",
    "Electroterapie combinată": "Комбинированная электротерапия",
    "Fizioterapie manuală (45 min)": "Мануальная физиотерапия (45 мин)",
    "Reabilitare post-operatorie (60 min)": "Послеоперационная реабилитация (60 мин)",
    "Programe personalizate de exerciții": "Индивидуальные программы упражнений",
    "Reabilitare echilibrată și coordonată": "Реабилитация равновесия и координации",

    "Teste funcționale neurologice": "Неврологические функциональные тесты",
    "Evaluări cognitive": "Когнитивная оценка",
    "Teste de reacție și coordonare": "Тесты реакции и координации",
    "Evaluare completă a sistemului motor": "Полная оценка двигательной системы",

    "Băi curative cu nămol": "Лечебные грязевые ванны",
    "Hidroterapie": "Гидротерапия",
    "Sauna terapeutică": "Терапевтическая сауна",
    "Masaj cu nămol (60 min)": "Грязевой массаж (60 мин)",
    "Terapie cu vitamine și minerale": "Терапия витаминами и минералами",
    "Tratament combinat hidroterapie + masaj": "Комбинированное лечение: гидротерапия + массаж",

    "Electrostimulare musculară": "Электростимуляция мышц",
    "Electroneurostimulare": "Электронейростимуляция",
    "Terapie cu ultrasunete (30 min)": "Ультразвуковая терапия (30 мин)",
    "Terapie cu curenți alternanți": "Терапия переменными токами",
    "Terapie cu curenți continui": "Терапия постоянными токами",

    "Evaluare neurologică inițială": "Первичная неврологическая оценка",
    "Consultație de control": "Контрольная консультация",
    "Evaluarea activității electrice cerebrale": "Оценка электрической активности мозга",
    "Evaluarea nervilor și mușchilor": "Оценка нервов и мышц",
    "Investigație imagistică": "Визуализационное исследование",
    "Procedură specializată": "Специализированная процедура",
    "Evaluare inițială": "Первичная оценка",
    "Recomandări și planificare": "Рекомендации и планирование",
    "Evaluare după intervenție": "Оценка после вмешательства",
    "Analiză imagistică": "Анализ снимков",
    "Evaluare complexă": "Комплексная оценка",
    "Ședință individuală": "Индивидуальный сеанс",
    "Masaj terapeutic": "Лечебный массаж",
    "Procedură combinată": "Комбинированная процедура",
    "Terapie manuală": "Мануальная терапия",
    "Recuperare postoperatorie": "Послеоперационное восстановление",
    "Program individual": "Индивидуальная программа",
    "Echilibru și coordonare": "Равновесие и координация",
    "Diagnostic funcțional": "Функциональная диагностика",
    "Diagnostic nervi și mușchi": "Диагностика нервов и мышц",
    "Evaluare funcțională": "Функциональная оценка",
    "Evaluare funcții cognitive": "Оценка когнитивных функций",
    "Evaluare coordonare": "Оценка координации",
    "Evaluare motorie": "Двигательная оценка",
    "Tratament balnear": "Бальнеологическое лечение",
    "Terapie cu apă": "Водная терапия",
    "Saună terapeutică": "Терапевтическая сауна",
    "Masaj balnear": "Бальнеологический массаж",
    "Terapie complementară": "Дополнительная терапия",
    "Tratament combinat": "Комбинированное лечение",
    "Activare musculară": "Активация мышц",
    "Stimulare nervoasă": "Стимуляция нервов",
    "Ultrasunete terapeutice": "Терапевтический ультразвук",
    "Curent alternativ": "Переменный ток",
    "Curent continuu": "Постоянный ток"
  },

  ua: {
    "Consultații Neurologice": "Неврологічні консультації",
    "Consultații Neurochirurgie": "Консультації нейрохірурга",
    "Fizioterapie și Reabilitare": "Фізіотерапія та реабілітація",
    "Diagnostic Funcțional": "Функціональна діагностика",
    "Terapie Balneară": "Бальнеотерапія",
    "Electroterapie": "Електротерапія",

    "Consultație primară cu neurolog": "Первинна консультація невролога",
    "Consultație repetată cu neurolog": "Повторна консультація невролога",
    "Electroencefalografie (EEG)": "Електроенцефалографія (ЕЕГ)",
    "Electromiografie (EMG)": "Електроміографія (ЕМГ)",
    "Imagistică IRM": "МРТ-дослідження",
    "Tomografie CT": "КТ-дослідження",
    "Stimulare magnetică transcraniană (TMS)": "Транскраніальна магнітна стимуляція (ТМС)",

    "Consultație primară cu chirurg": "Первинна консультація хірурга",
    "Consultație repetată cu chirurg": "Повторна консультація хірурга",
    "Planificare pre-operatorie": "Передопераційне планування",
    "Consultație post-operatorie": "Післяопераційна консультація",
    "Evaluare imagistică pre-chirurgicală": "Передопераційна оцінка знімків",
    "Consultare multidisciplinară": "Мультидисциплінарна консультація",

    "Ședință de fizioterapie (30 min)": "Сеанс фізіотерапії (30 хв)",
    "Masaj terapeutic (60 min)": "Лікувальний масаж (60 хв)",
    "Electroterapie combinată": "Комбінована електротерапія",
    "Fizioterapie manuală (45 min)": "Мануальна фізіотерапія (45 хв)",
    "Reabilitare post-operatorie (60 min)": "Післяопераційна реабілітація (60 хв)",
    "Programe personalizate de exerciții": "Індивідуальні програми вправ",
    "Reabilitare echilibrată și coordonată": "Реабілітація рівноваги та координації",

    "Teste funcționale neurologice": "Неврологічні функціональні тести",
    "Evaluări cognitive": "Когнітивні оцінювання",
    "Teste de reacție și coordonare": "Тести реакції та координації",
    "Evaluare completă a sistemului motor": "Повна оцінка рухової системи",

    "Băi curative cu nămol": "Лікувальні грязьові ванни",
    "Hidroterapie": "Гідротерапія",
    "Sauna terapeutică": "Терапевтична сауна",
    "Masaj cu nămol (60 min)": "Грязьовий масаж (60 хв)",
    "Terapie cu vitamine și minerale": "Терапія вітамінами та мінералами",
    "Tratament combinat hidroterapie + masaj": "Комбіноване лікування: гідротерапія + масаж",

    "Electrostimulare musculară": "Електростимуляція м’язів",
    "Electroneurostimulare": "Електронейростимуляція",
    "Terapie cu ultrasunete (30 min)": "Ультразвукова терапія (30 хв)",
    "Terapie cu curenți alternanți": "Терапія змінними струмами",
    "Terapie cu curenți continui": "Терапія постійними струмами",

    "Evaluare neurologică inițială": "Первинна неврологічна оцінка",
    "Consultație de control": "Контрольна консультація",
    "Evaluarea activității electrice cerebrale": "Оцінка електричної активності мозку",
    "Evaluarea nervilor și mușchilor": "Оцінка нервів і м’язів",
    "Investigație imagistică": "Візуалізаційне дослідження",
    "Procedură specializată": "Спеціалізована процедура",
    "Evaluare inițială": "Первинна оцінка",
    "Recomandări și planificare": "Рекомендації та планування",
    "Evaluare după intervenție": "Оцінка після втручання",
    "Analiză imagistică": "Аналіз знімків",
    "Evaluare complexă": "Комплексна оцінка",
    "Ședință individuală": "Індивідуальний сеанс",
    "Masaj terapeutic": "Лікувальний масаж",
    "Procedură combinată": "Комбінована процедура",
    "Terapie manuală": "Мануальна терапія",
    "Recuperare postoperatorie": "Післяопераційне відновлення",
    "Program individual": "Індивідуальна програма",
    "Echilibru și coordonare": "Рівновага та координація",
    "Diagnostic funcțional": "Функціональна діагностика",
    "Diagnostic nervi și mușchi": "Діагностика нервів і м’язів",
    "Evaluare funcțională": "Функціональна оцінка",
    "Evaluare funcții cognitive": "Оцінка когнітивних функцій",
    "Evaluare coordonare": "Оцінка координації",
    "Evaluare motorie": "Рухова оцінка",
    "Tratament balnear": "Бальнеологічне лікування",
    "Terapie cu apă": "Водна терапія",
    "Saună terapeutică": "Терапевтична сауна",
    "Masaj balnear": "Бальнеологічний масаж",
    "Terapie complementară": "Додаткова терапія",
    "Tratament combinat": "Комбіноване лікування",
    "Activare musculară": "Активація м’язів",
    "Stimulare nervoasă": "Стимуляція нервів",
    "Ultrasunete terapeutice": "Терапевтичний ультразвук",
    "Curent alternativ": "Змінний струм",
    "Curent continuu": "Постійний струм"
  }
};

const serviceTranslations = {
  en: {
    "consultatii-neurologice": {
      title: "Neurological Consultations",
      short_desc: "Complete neurological evaluations for diagnosing and managing nervous system conditions.",
      full_content: `Neurological consultation is an important step for understanding symptoms related to the brain, spine, nerves and muscles.

What a consultation may include:
- Detailed medical history.
- Clinical neurological examination.
- Assessment of reflexes, strength, coordination, balance, sensitivity and cognitive functions.
- Evaluation for headaches, migraine, neuropathy, movement disorders, epilepsy, back pain, radiculopathy and post-stroke recovery.

Benefits:
- Clear medical orientation.
- Personalized recommendations.
- Monitoring and prevention.
- Practical next steps for investigations or rehabilitation.

Revimed PLUS+ focuses on patient-friendly explanations, calm communication and responsible medical guidance.`,
      keywords: "neurologist Chisinau, neurological consultation, migraine, neuropathy, back pain, stroke recovery"
    },
    "consultatii-neurochirurgie": {
      title: "Neurosurgery Consultations",
      short_desc: "Consultations for spine conditions, surgical orientation and complex neurological cases.",
      full_content: `Neurosurgery consultation is useful for patients who need a detailed opinion regarding spine, brain or nerve-related conditions.

During the consultation:
- Surgical and non-surgical options may be discussed.
- Disc herniation, cervical and lumbar pain, radiculopathy and spine lesions can be evaluated.
- Imaging results may be reviewed.
- Recommendations may include rehabilitation, investigations or further specialist evaluation.

The consultation is suitable for patients looking for a second opinion or a clear plan before making important medical decisions.`,
      keywords: "neurosurgeon Chisinau, neurosurgery consultation, disc herniation, spine pain"
    },
    "fizioterapie-si-reabilitare": {
      title: "Physiotherapy and Rehabilitation",
      short_desc: "Personalized rehabilitation programs for mobility, strength, pain reduction and functional recovery.",
      full_content: `Physiotherapy and rehabilitation are designed for patients who need physical recovery, pain reduction and better mobility.

Possible services:
- Therapeutic exercises.
- Manual therapy.
- Therapeutic massage.
- Electrotherapy support.
- Post-operative rehabilitation.
- Balance, coordination and posture programs.

Benefits:
- Reduced chronic pain.
- Improved movement and flexibility.
- Better recovery after surgery or trauma.
- Prevention of recurrent problems.
- A personalized plan based on patient goals.`,
      keywords: "physiotherapy Chisinau, medical rehabilitation, therapeutic massage, recovery"
    },
    "diagnostic-functional": {
      title: "Functional Diagnostics",
      short_desc: "Functional evaluations for the nervous system, muscles, coordination and cognitive performance.",
      full_content: `Functional diagnostics helps evaluate how the nervous system, muscles and movement functions perform.

Possible evaluations:
- EEG.
- EMG.
- Functional neurological tests.
- Cognitive assessments.
- Reaction and coordination tests.
- Motor system assessment.

Benefits:
- Earlier detection of functional problems.
- Monitoring treatment results.
- Better rehabilitation planning.
- Clearer understanding of symptoms.`,
      keywords: "functional diagnostics Chisinau, EEG, EMG, neurological testing"
    },
    "terapie-balneara": {
      title: "Balneotherapy",
      short_desc: "Natural supportive therapies, mud treatments, hydrotherapy and relaxation procedures.",
      full_content: `Balneotherapy includes natural and supportive procedures for relaxation, recovery and general wellbeing.

Possible services:
- Therapeutic mud baths.
- Hydrotherapy.
- Therapeutic sauna.
- Mud massage.
- Vitamin and mineral support.
- Combined treatments.

Benefits:
- Muscle relaxation.
- Improved circulation.
- Stress reduction.
- Support for joint and muscle discomfort.
- Improved general wellbeing.`,
      keywords: "balneotherapy Chisinau, mud therapy, hydrotherapy, therapeutic sauna"
    },
    "electroterapie": {
      title: "Electrotherapy",
      short_desc: "Electrostimulation and therapeutic procedures for pain, muscles and recovery.",
      full_content: `Electrotherapy uses controlled electrical stimulation and modern procedures to support pain reduction, muscle activation and rehabilitation.

Possible procedures:
- Muscle electrostimulation.
- Electroneurostimulation.
- Combined electrotherapy.
- Ultrasound therapy.
- Alternating current therapy.
- Direct current therapy.

It may be useful for patients with chronic pain, muscle weakness or rehabilitation needs. Medical consultation is recommended before procedures.`,
      keywords: "electrotherapy Chisinau, electrostimulation, ultrasound therapy, muscle recovery"
    }
  },

  ru: {
    "consultatii-neurologice": {
      title: "Неврологические консультации",
      short_desc: "Комплексная неврологическая оценка для диагностики и ведения заболеваний нервной системы.",
      full_content: `Неврологическая консультация помогает понять симптомы, связанные с головным мозгом, позвоночником, нервами и мышцами.

Что может включать консультация:
- Подробный сбор анамнеза.
- Клинический неврологический осмотр.
- Проверка рефлексов, силы, координации, равновесия, чувствительности и когнитивных функций.
- Оценка головных болей, мигрени, нейропатий, нарушений движения, эпилепсии, боли в спине, радикулопатий и восстановления после инсульта.

Преимущества:
- Понятная медицинская ориентация.
- Индивидуальные рекомендации.
- Наблюдение и профилактика.
- Практические следующие шаги для обследования или реабилитации.`,
      keywords: "невролог Кишинев, неврологическая консультация, мигрень, нейропатия, боль в спине"
    },
    "consultatii-neurochirurgie": {
      title: "Консультации нейрохирурга",
      short_desc: "Консультации при заболеваниях позвоночника, хирургическая ориентация и сложные неврологические случаи.",
      full_content: `Консультация нейрохирурга полезна пациентам, которым нужно детальное мнение по заболеваниям позвоночника, головного мозга или нервов.

Во время консультации:
- Обсуждаются хирургические и нехирургические варианты.
- Оцениваются грыжи диска, шейные и поясничные боли, радикулопатии и поражения позвоночника.
- Анализируются результаты снимков.
- Могут быть рекомендованы реабилитация, обследования или дополнительная консультация.

Подходит для пациентов, которым нужно второе мнение или понятный план перед важным медицинским решением.`,
      keywords: "нейрохирург Кишинев, консультация нейрохирурга, грыжа диска, позвоночник"
    },
    "fizioterapie-si-reabilitare": {
      title: "Физиотерапия и реабилитация",
      short_desc: "Индивидуальные программы восстановления подвижности, силы, снижения боли и функции.",
      full_content: `Физиотерапия и реабилитация предназначены для пациентов, которым нужно восстановление, уменьшение боли и улучшение подвижности.

Возможные услуги:
- Лечебные упражнения.
- Мануальная терапия.
- Лечебный массаж.
- Электротерапия.
- Послеоперационная реабилитация.
- Программы равновесия, координации и осанки.

Преимущества:
- Снижение хронической боли.
- Улучшение движения и гибкости.
- Восстановление после операции или травмы.
- Профилактика повторных проблем.
- Индивидуальный план под цели пациента.`,
      keywords: "физиотерапия Кишинев, медицинская реабилитация, лечебный массаж"
    },
    "diagnostic-functional": {
      title: "Функциональная диагностика",
      short_desc: "Функциональная оценка нервной системы, мышц, координации и когнитивных функций.",
      full_content: `Функциональная диагностика помогает оценить работу нервной системы, мышц и двигательных функций.

Возможные оценки:
- ЭЭГ.
- ЭМГ.
- Неврологические функциональные тесты.
- Когнитивные оценки.
- Тесты реакции и координации.
- Оценка двигательной системы.

Преимущества:
- Более раннее выявление функциональных проблем.
- Контроль результатов лечения.
- Лучшее планирование реабилитации.
- Более ясное понимание симптомов.`,
      keywords: "функциональная диагностика Кишинев, ЭЭГ, ЭМГ, неврологические тесты"
    },
    "terapie-balneara": {
      title: "Бальнеотерапия",
      short_desc: "Натуральные поддерживающие терапии, грязевые процедуры, гидротерапия и расслабление.",
      full_content: `Бальнеотерапия включает натуральные и поддерживающие процедуры для расслабления, восстановления и общего самочувствия.

Возможные услуги:
- Лечебные грязевые ванны.
- Гидротерапия.
- Терапевтическая сауна.
- Грязевой массаж.
- Поддержка витаминами и минералами.
- Комбинированные процедуры.

Преимущества:
- Расслабление мышц.
- Улучшение кровообращения.
- Снижение стресса.
- Поддержка при мышечном и суставном дискомфорте.
- Улучшение общего состояния.`,
      keywords: "бальнеотерапия Кишинев, грязелечение, гидротерапия"
    },
    "electroterapie": {
      title: "Электротерапия",
      short_desc: "Электростимуляция и терапевтические процедуры для боли, мышц и восстановления.",
      full_content: `Электротерапия использует контролируемую электрическую стимуляцию и современные процедуры для уменьшения боли, активации мышц и реабилитации.

Возможные процедуры:
- Электростимуляция мышц.
- Электронейростимуляция.
- Комбинированная электротерапия.
- Ультразвуковая терапия.
- Терапия переменными токами.
- Терапия постоянными токами.

Может быть полезна при хронической боли, мышечной слабости или необходимости реабилитации. Перед процедурами рекомендуется консультация врача.`,
      keywords: "электротерапия Кишинев, электростимуляция, ультразвуковая терапия"
    }
  },

  ua: {
    "consultatii-neurologice": {
      title: "Неврологічні консультації",
      short_desc: "Комплексна неврологічна оцінка для діагностики та ведення захворювань нервової системи.",
      full_content: `Неврологічна консультація допомагає зрозуміти симптоми, пов’язані з мозком, хребтом, нервами та м’язами.

Що може включати консультація:
- Детальний збір анамнезу.
- Клінічний неврологічний огляд.
- Перевірка рефлексів, сили, координації, рівноваги, чутливості та когнітивних функцій.
- Оцінка головного болю, мігрені, нейропатій, рухових розладів, епілепсії, болю у спині, радикулопатій та відновлення після інсульту.

Переваги:
- Зрозуміла медична орієнтація.
- Індивідуальні рекомендації.
- Спостереження та профілактика.
- Практичні наступні кроки для обстеження або реабілітації.`,
      keywords: "невролог Кишинів, неврологічна консультація, мігрень, нейропатія"
    },
    "consultatii-neurochirurgie": {
      title: "Консультації нейрохірурга",
      short_desc: "Консультації при захворюваннях хребта, хірургічна орієнтація та складні неврологічні випадки.",
      full_content: `Консультація нейрохірурга корисна пацієнтам, яким потрібна детальна думка щодо стану хребта, мозку або нервів.

Під час консультації:
- Обговорюються хірургічні та нехірургічні варіанти.
- Оцінюються грижі диска, шийний і поперековий біль, радикулопатії та ураження хребта.
- Аналізуються результати знімків.
- Можуть бути рекомендовані реабілітація, обстеження або додаткова консультація.

Підходить для пацієнтів, яким потрібна друга думка або зрозумілий план перед важливим медичним рішенням.`,
      keywords: "нейрохірург Кишинів, консультація нейрохірурга, грижа диска"
    },
    "fizioterapie-si-reabilitare": {
      title: "Фізіотерапія та реабілітація",
      short_desc: "Індивідуальні програми відновлення рухливості, сили, зменшення болю та функції.",
      full_content: `Фізіотерапія та реабілітація призначені для пацієнтів, яким потрібне відновлення, зменшення болю та покращення рухливості.

Можливі послуги:
- Лікувальні вправи.
- Мануальна терапія.
- Лікувальний масаж.
- Електротерапія.
- Післяопераційна реабілітація.
- Програми рівноваги, координації та постави.

Переваги:
- Зменшення хронічного болю.
- Покращення руху та гнучкості.
- Відновлення після операції або травми.
- Профілактика повторних проблем.
- Індивідуальний план відповідно до цілей пацієнта.`,
      keywords: "фізіотерапія Кишинів, медична реабілітація, лікувальний масаж"
    },
    "diagnostic-functional": {
      title: "Функціональна діагностика",
      short_desc: "Функціональна оцінка нервової системи, м’язів, координації та когнітивних функцій.",
      full_content: `Функціональна діагностика допомагає оцінити роботу нервової системи, м’язів і рухових функцій.

Можливі оцінки:
- ЕЕГ.
- ЕМГ.
- Неврологічні функціональні тести.
- Когнітивні оцінювання.
- Тести реакції та координації.
- Оцінка рухової системи.

Переваги:
- Раніше виявлення функціональних проблем.
- Контроль результатів лікування.
- Краще планування реабілітації.
- Чіткіше розуміння симптомів.`,
      keywords: "функціональна діагностика Кишинів, ЕЕГ, ЕМГ"
    },
    "terapie-balneara": {
      title: "Бальнеотерапія",
      short_desc: "Натуральні підтримувальні терапії, грязьові процедури, гідротерапія та релаксація.",
      full_content: `Бальнеотерапія включає натуральні та підтримувальні процедури для розслаблення, відновлення та загального самопочуття.

Можливі послуги:
- Лікувальні грязьові ванни.
- Гідротерапія.
- Терапевтична сауна.
- Грязьовий масаж.
- Підтримка вітамінами та мінералами.
- Комбіновані процедури.

Переваги:
- Розслаблення м’язів.
- Покращення кровообігу.
- Зменшення стресу.
- Підтримка при м’язовому та суглобовому дискомфорті.
- Покращення загального самопочуття.`,
      keywords: "бальнеотерапія Кишинів, грязелікування, гідротерапія"
    },
    "electroterapie": {
      title: "Електротерапія",
      short_desc: "Електростимуляція та терапевтичні процедури для болю, м’язів і відновлення.",
      full_content: `Електротерапія використовує контрольовану електричну стимуляцію та сучасні процедури для зменшення болю, активації м’язів і реабілітації.

Можливі процедури:
- Електростимуляція м’язів.
- Електронейростимуляція.
- Комбінована електротерапія.
- Ультразвукова терапія.
- Терапія змінними струмами.
- Терапія постійними струмами.

Може бути корисною при хронічному болю, м’язовій слабкості або потребі в реабілітації. Перед процедурами рекомендована консультація лікаря.`,
      keywords: "електротерапія Кишинів, електростимуляція, ультразвукова терапія"
    }
  }
};

const contentBlocks = {
  en: [
    ["despre-noi", "hero", "About Revimed PLUS+", "Medical care, rehabilitation and functional therapies in a clear, patient-friendly format."],
    ["servicii", "hero", "Medical Services", "Consultations, diagnostics, therapy and rehabilitation organized clearly for patients."],
    ["aplicatii", "hero", "Tests and Tools", "Educational digital tools for orientation, self-checks and better preparation for consultation."],
    ["galerie", "hero", "Revimed PLUS+ Gallery", "Photos from the center and videos about procedures, recovery and activity."],
    ["preturi", "hero", "Revimed PLUS+ Prices", "Choose a category to view services and prices."],
    ["blog", "hero", "Revimed PLUS+ Blog", "Articles, news and educational materials for patients."],
    ["contact", "hero", "Contact Us", "Address, phone, working hours, transport and map for Revimed PLUS+ Medical Center."]
  ],
  ru: [
    ["despre-noi", "hero", "О Revimed PLUS+", "Медицинская помощь, реабилитация и функциональные терапии в понятном формате для пациентов."],
    ["servicii", "hero", "Медицинские услуги", "Консультации, диагностика, терапия и реабилитация, организованные понятно для пациентов."],
    ["aplicatii", "hero", "Тесты и инструменты", "Образовательные цифровые инструменты для ориентации и подготовки к консультации."],
    ["galerie", "hero", "Галерея Revimed PLUS+", "Фотографии центра и видео о процедурах, восстановлении и работе."],
    ["preturi", "hero", "Цены Revimed PLUS+", "Выберите категорию, чтобы увидеть услуги и цены."],
    ["blog", "hero", "Блог Revimed PLUS+", "Статьи, новости и образовательные материалы для пациентов."],
    ["contact", "hero", "Контакты", "Адрес, телефон, график работы, транспорт и карта медицинского центра Revimed PLUS+."]
  ],
  ua: [
    ["despre-noi", "hero", "Про Revimed PLUS+", "Медична допомога, реабілітація та функціональні терапії у зрозумілому форматі для пацієнтів."],
    ["servicii", "hero", "Медичні послуги", "Консультації, діагностика, терапія та реабілітація, організовані зрозуміло для пацієнтів."],
    ["aplicatii", "hero", "Тести та інструменти", "Освітні цифрові інструменти для орієнтації та підготовки до консультації."],
    ["galerie", "hero", "Галерея Revimed PLUS+", "Фото центру та відео про процедури, відновлення і діяльність."],
    ["preturi", "hero", "Ціни Revimed PLUS+", "Оберіть категорію, щоб переглянути послуги та ціни."],
    ["blog", "hero", "Блог Revimed PLUS+", "Статті, новини та освітні матеріали для пацієнтів."],
    ["contact", "hero", "Контакти", "Адреса, телефон, графік роботи, транспорт і карта медичного центру Revimed PLUS+."]
  ]
};

const galleryTitles = {
  en: [
    "Revimed PLUS+ reception",
    "Medical consultation room",
    "Medical rehabilitation",
    "Therapy room",
    "Therapeutic procedures",
    "Medical office"
  ],
  ru: [
    "Ресепшн Revimed PLUS+",
    "Кабинет консультаций",
    "Медицинская реабилитация",
    "Кабинет терапии",
    "Терапевтические процедуры",
    "Медицинский кабинет"
  ],
  ua: [
    "Ресепшн Revimed PLUS+",
    "Кабінет консультацій",
    "Медична реабілітація",
    "Кабінет терапії",
    "Терапевтичні процедури",
    "Медичний кабінет"
  ]
};

function translate(lang, text) {
  if (!text) return text;
  return dictionary[lang]?.[text] || text;
}

function tableExists(name) {
  return !!db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?").get(name);
}

function updateServices(lang) {
  if (!tableExists("services_admin")) return;

  const ro = db.prepare("SELECT * FROM services_admin WHERE lang='ro' ORDER BY position ASC, id ASC").all();

  const insert = db.prepare(`
    INSERT INTO services_admin
    (lang,title,slug,icon,image,short_desc,full_content,keywords,position,published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const update = db.prepare(`
    UPDATE services_admin
    SET title=?, icon=?, image=?, short_desc=?, full_content=?, keywords=?, position=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE lang=? AND slug=?
  `);

  for (const item of ro) {
    const tr = serviceTranslations[lang]?.[item.slug];
    const title = tr?.title || translate(lang, item.title);
    const short_desc = tr?.short_desc || item.short_desc;
    const full_content = tr?.full_content || item.full_content;
    const keywords = tr?.keywords || item.keywords;

    const exists = db.prepare("SELECT id FROM services_admin WHERE lang=? AND slug=?").get(lang, item.slug);

    if (exists) {
      update.run(title, item.icon, item.image, short_desc, full_content, keywords, item.position, item.published, lang, item.slug);
    } else {
      insert.run(lang, title, item.slug, item.icon, item.image, short_desc, full_content, keywords, item.position, item.published);
    }
  }
}

function updatePrices(lang) {
  if (!tableExists("prices")) return;

  const ro = db.prepare("SELECT * FROM prices WHERE lang='ro' ORDER BY position ASC, id ASC").all();

  const insert = db.prepare(`
    INSERT INTO prices
    (group_key,lang,category,service,price,note,position,published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const update = db.prepare(`
    UPDATE prices
    SET category=?, service=?, note=?, position=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE lang=? AND group_key=?
  `);

  for (const item of ro) {
    const groupKey = item.group_key || `price_${item.id}`;
    const category = translate(lang, item.category);
    const service = translate(lang, item.service);
    const note = translate(lang, item.note);
    const exists = db.prepare("SELECT id FROM prices WHERE lang=? AND group_key=?").get(lang, groupKey);

    if (exists) {
      update.run(category, service, note, item.position, item.published, lang, groupKey);
    } else {
      insert.run(groupKey, lang, category, service, item.price, note, item.position, item.published);
    }
  }
}

function updateGallery(lang) {
  if (!tableExists("gallery_items")) return;

  const ro = db.prepare("SELECT * FROM gallery_items WHERE lang='ro' ORDER BY position ASC, id ASC").all();
  const insert = db.prepare(`
    INSERT INTO gallery_items
    (lang,image,title,alt,position,published)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const update = db.prepare(`
    UPDATE gallery_items
    SET image=?, title=?, alt=?, position=?, published=?, edited_at=CURRENT_TIMESTAMP
    WHERE lang=? AND image=?
  `);

  ro.forEach((item, index) => {
    const title = galleryTitles[lang]?.[index] || item.title;
    const alt = title;
    const exists = db.prepare("SELECT id FROM gallery_items WHERE lang=? AND image=?").get(lang, item.image);

    if (exists) {
      update.run(item.image, title, alt, item.position, item.published, lang, item.image);
    } else {
      insert.run(lang, item.image, title, alt, item.position, item.published);
    }
  });
}

function updateContentBlocks(lang) {
  if (!tableExists("content_blocks")) return;

  const insert = db.prepare(`
    INSERT INTO content_blocks (lang,page_key,block_key,title,text,image,position,published)
    VALUES (?, ?, ?, ?, ?, '', 0, 1)
    ON CONFLICT(lang,page_key,block_key) DO UPDATE SET
      title=excluded.title,
      text=excluded.text,
      edited_at=CURRENT_TIMESTAMP
  `);

  for (const row of contentBlocks[lang] || []) {
    insert.run(lang, row[0], row[1], row[2], row[3]);
  }
}

function updateContact(lang) {
  if (!tableExists("contact_content")) return;

  const ro = db.prepare("SELECT * FROM contact_content WHERE lang='ro'").get();
  if (!ro) return;

  const labels = {
    en: {
      hours_week: "Monday to Friday: 09:00 - 16:00",
      hours_weekend: "Weekend: Closed"
    },
    ru: {
      hours_week: "С понедельника по пятницу: 09:00 - 16:00",
      hours_weekend: "Выходные: закрыто"
    },
    ua: {
      hours_week: "З понеділка по п’ятницю: 09:00 - 16:00",
      hours_weekend: "Вихідні: зачинено"
    }
  };

  db.prepare(`
    INSERT INTO contact_content
    (lang,fixed_phone,phone,phone_alt,email,address,hours_week,hours_weekend,bus,trolleybus,tram,image_one,image_two,map_link,map_embed)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(lang) DO UPDATE SET
      fixed_phone=excluded.fixed_phone,
      phone=excluded.phone,
      phone_alt=excluded.phone_alt,
      email=excluded.email,
      address=excluded.address,
      hours_week=excluded.hours_week,
      hours_weekend=excluded.hours_weekend,
      bus=excluded.bus,
      trolleybus=excluded.trolleybus,
      tram=excluded.tram,
      image_one=excluded.image_one,
      image_two=excluded.image_two,
      map_link=excluded.map_link,
      map_embed=excluded.map_embed,
      edited_at=CURRENT_TIMESTAMP
  `).run(
    lang,
    ro.fixed_phone,
    ro.phone,
    ro.phone_alt,
    ro.email,
    ro.address,
    labels[lang]?.hours_week || ro.hours_week,
    labels[lang]?.hours_weekend || ro.hours_weekend,
    ro.bus,
    ro.trolleybus,
    ro.tram,
    ro.image_one,
    ro.image_two,
    ro.map_link,
    ro.map_embed
  );
}

function seedBlog(lang) {
  if (!tableExists("posts")) return;

  const sample = {
    en: {
      title: "When should you see a neurologist?",
      slug: "when-to-see-a-neurologist",
      excerpt: "A simple educational guide about symptoms that may require neurological evaluation.",
      content: `This article is educational and does not replace medical consultation.

You should consider a neurological consultation when symptoms such as persistent headaches, numbness, weakness, balance problems, tremor, memory changes or pain radiating from the spine affect daily life.

Seek urgent medical help if symptoms appear suddenly, especially weakness on one side of the body, speech difficulty, vision loss, severe sudden headache, seizure or confusion.

A consultation helps clarify symptoms, plan investigations and choose a responsible treatment or rehabilitation path.`,
      keywords: "neurologist, neurological symptoms, consultation"
    },
    ru: {
      title: "Когда стоит обратиться к неврологу?",
      slug: "kogda-obratitsya-k-nevrologu",
      excerpt: "Простое образовательное руководство о симптомах, при которых может понадобиться консультация невролога.",
      content: `Эта статья носит образовательный характер и не заменяет консультацию врача.

Консультация невролога может быть полезна при постоянных головных болях, онемении, слабости, нарушении равновесия, треморе, изменениях памяти или боли, отдающей от позвоночника.

Срочно обращайтесь за медицинской помощью, если симптомы появились внезапно: слабость с одной стороны тела, нарушение речи, потеря зрения, внезапная сильная головная боль, судороги или спутанность сознания.

Консультация помогает уточнить симптомы, спланировать обследования и выбрать ответственный путь лечения или реабилитации.`,
      keywords: "невролог, симптомы, консультация"
    },
    ua: {
      title: "Коли варто звернутися до невролога?",
      slug: "koli-zvernutisya-do-nevrologa",
      excerpt: "Простий освітній матеріал про симптоми, за яких може знадобитися консультація невролога.",
      content: `Ця стаття має освітній характер і не замінює консультацію лікаря.

Консультація невролога може бути корисною при постійному головному болю, онімінні, слабкості, порушенні рівноваги, треморі, змінах пам’яті або болю, що віддає від хребта.

Терміново звертайтеся по медичну допомогу, якщо симптоми з’явилися раптово: слабкість з одного боку тіла, порушення мовлення, втрата зору, раптовий сильний головний біль, судоми або сплутаність свідомості.

Консультація допомагає уточнити симптоми, спланувати обстеження та вибрати відповідальний шлях лікування або реабілітації.`,
      keywords: "невролог, симптоми, консультація"
    }
  }[lang];

  if (!sample) return;

  const exists = db.prepare("SELECT id FROM posts WHERE lang=? AND slug=?").get(lang, sample.slug);
  if (!exists) {
    db.prepare(`
      INSERT INTO posts (lang,title,slug,excerpt,content,image,keywords,published)
      VALUES (?, ?, ?, ?, ?, '/images/medical-bg.jpg', ?, 1)
    `).run(lang, sample.title, sample.slug, sample.excerpt, sample.content, sample.keywords);
  }
}

for (const lang of ["en", "ru", "ua"]) {
  updateServices(lang);
  updatePrices(lang);
  updateGallery(lang);
  updateContentBlocks(lang);
  updateContact(lang);
  seedBlog(lang);
}

db.close();
console.log("Full EN/RU/UA translation seed completed.");
