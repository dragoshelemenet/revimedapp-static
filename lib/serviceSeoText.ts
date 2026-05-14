import type { Lang } from "@/lib/i18n";

type Pack = {
  title: string;
  short: string;
  details: string[];
};

const cleanIconUrl = (value: string) =>
  String(value || "")
    .replace(/https?:\/\/img\.icons8\.com\/\S+/gi, "")
    .replace(/\s+/g, " ")
    .trim();

const data: Record<Lang, Record<string, Pack>> = {
  ro: {
    "consultatii-neurochirurgie": {
      title: "Consultații Neurochirurgie",
      short: "Consultații pentru evaluarea patologiilor coloanei vertebrale, compresiilor nervoase și indicațiilor neurochirurgicale.",
      details: [
        "Consultația de neurochirurgie este utilă pentru pacienții cu hernii de disc, dureri persistente de spate, compresii radiculare, amorțeli, slăbiciune în membre sau recomandări anterioare pentru intervenție.",
        "Medicul evaluează simptomele, documentele medicale și investigațiile existente, apoi explică opțiunile conservatoare sau chirurgicale.",
        "Consultația nu înseamnă automat operație. Scopul este o decizie informată, sigură și potrivită pentru pacient."
      ]
    },
    "consultatii-neurologice": {
      title: "Consultații Neurologice",
      short: "Evaluare neurologică pentru dureri de cap, amețeli, amorțeli, tulburări de memorie, somn și echilibru.",
      details: [
        "Consultația neurologică este recomandată pentru dureri de cap, migrene, amețeli, amorțeli, slăbiciune musculară, tremor, tulburări de somn, memorie sau concentrare.",
        "Evaluarea include istoricul simptomelor, examen clinic neurologic și orientare către investigații, tratament sau recuperare.",
        "Scopul este identificarea semnalelor de alarmă și alegerea unei conduite medicale potrivite."
      ]
    },
    "fizioterapie-si-reabilitare": {
      title: "Fizioterapie și Reabilitare",
      short: "Programe individuale pentru mobilitate, forță, durere, postură și recuperare funcțională.",
      details: [
        "Fizioterapia și reabilitarea ajută la recuperarea mobilității, reducerea durerii și îmbunătățirea forței, coordonării și independenței.",
        "Planul poate include exerciții terapeutice, mobilizări, echilibru, mers, postură și tehnici adaptate pacientului.",
        "Programul se ajustează în funcție de diagnostic, vârstă, toleranță la efort și obiective."
      ]
    },
    "diagnostic-functional": {
      title: "Diagnostic Funcțional",
      short: "Evaluări funcționale pentru sistem nervos, mușchi, coordonare, echilibru și recuperare.",
      details: [
        "Diagnosticul funcțional ajută la înțelegerea modului în care pacientul se mișcă, își coordonează musculatura și tolerează efortul.",
        "Evaluarea poate include mobilitate, forță, coordonare, postură, mers și echilibru.",
        "Rezultatul ajută la construirea unui plan de recuperare mai clar."
      ]
    },
    "terapie-balneara": {
      title: "Terapie Balneară",
      short: "Proceduri balneare, nămol, hidroterapie și metode complementare pentru recuperare.",
      details: [
        "Terapia balneară folosește proceduri complementare pentru susținerea recuperării și relaxării.",
        "Poate fi utilă în dureri musculo-articulare, tensiune musculară și recuperare funcțională.",
        "Procedurile se aleg individual, ținând cont de contraindicații și toleranța pacientului."
      ]
    },
    "electroterapie": {
      title: "Electroterapie",
      short: "Proceduri de electrostimulare și electroterapie pentru durere, mușchi și recuperare.",
      details: [
        "Electroterapia include proceduri cu curenți terapeutici sau electrostimulare folosite pentru durere și recuperare.",
        "Poate susține funcția neuromusculară și poate fi inclusă într-un plan mai larg de reabilitare.",
        "Parametrii se aleg individual și procedura se evită când există contraindicații."
      ]
    }
  },
  en: {
    "consultatii-neurochirurgie": {
      title: "Neurosurgery Consultations",
      short: "Consultations for spine conditions, nerve compression and neurosurgical indications.",
      details: [
        "Neurosurgery consultation is useful for patients with disc herniation, persistent back pain, nerve root compression, numbness, limb weakness or previous recommendations for surgery.",
        "The doctor evaluates symptoms, medical documents and existing investigations, then explains conservative or surgical options.",
        "A consultation does not automatically mean surgery. The goal is an informed, safe and appropriate decision."
      ]
    },
    "consultatii-neurologice": {
      title: "Neurology Consultations",
      short: "Neurological evaluation for headaches, dizziness, numbness, memory, sleep and balance problems.",
      details: [
        "Neurology consultation is recommended for headaches, migraines, dizziness, numbness, muscle weakness, tremor, sleep, memory or concentration problems.",
        "The evaluation includes symptom history, neurological examination and orientation toward investigations, treatment or rehabilitation.",
        "The goal is to identify warning signs and choose an appropriate medical pathway."
      ]
    },
    "fizioterapie-si-reabilitare": {
      title: "Physiotherapy and Rehabilitation",
      short: "Individual programs for mobility, strength, pain, posture and functional recovery.",
      details: [
        "Physiotherapy and rehabilitation help restore mobility, reduce pain and improve strength, coordination and independence.",
        "The plan may include therapeutic exercise, mobilization, balance, gait, posture and patient-specific techniques.",
        "The program is adjusted according to diagnosis, age, exercise tolerance and goals."
      ]
    },
    "diagnostic-functional": {
      title: "Functional Diagnostics",
      short: "Functional evaluations for the nervous system, muscles, coordination, balance and recovery.",
      details: [
        "Functional diagnostics helps understand how the patient moves, coordinates muscles and tolerates effort.",
        "The evaluation may include mobility, strength, coordination, posture, gait and balance.",
        "The result helps build a clearer rehabilitation plan."
      ]
    },
    "terapie-balneara": {
      title: "Balneotherapy",
      short: "Balneotherapy, mud therapy, hydrotherapy and complementary recovery methods.",
      details: [
        "Balneotherapy uses complementary procedures to support recovery and relaxation.",
        "It may be useful for musculoskeletal pain, muscle tension and functional recovery.",
        "Procedures are selected individually, considering contraindications and patient tolerance."
      ]
    },
    "electroterapie": {
      title: "Electrotherapy",
      short: "Electrostimulation and electrotherapy procedures for pain, muscles and recovery.",
      details: [
        "Electrotherapy includes therapeutic currents or electrostimulation used for pain and recovery.",
        "It may support neuromuscular function and be included in a wider rehabilitation plan.",
        "Parameters are selected individually and the procedure is avoided when contraindications exist."
      ]
    }
  },
  ru: {
    "consultatii-neurochirurgie": {
      title: "Нейрохирургические консультации",
      short: "Консультации при патологиях позвоночника, компрессии нервов и нейрохирургических показаниях.",
      details: [
        "Нейрохирургическая консультация полезна при грыжах диска, стойкой боли в спине, корешковой компрессии, онемении, слабости в конечностях или предыдущих рекомендациях к операции.",
        "Врач оценивает симптомы, документы и обследования, затем объясняет консервативные или хирургические варианты.",
        "Консультация не означает автоматически операцию. Цель — информированное, безопасное и подходящее решение."
      ]
    },
    "consultatii-neurologice": {
      title: "Неврологические консультации",
      short: "Неврологическая оценка при головных болях, головокружении, онемении, проблемах памяти, сна и равновесия.",
      details: [
        "Неврологическая консультация рекомендуется при головных болях, мигренях, головокружении, онемении, мышечной слабости, треморе, нарушениях сна, памяти или концентрации.",
        "Оценка включает историю симптомов, неврологический осмотр и направление к обследованию, лечению или реабилитации.",
        "Цель — выявить тревожные признаки и выбрать подходящую медицинскую тактику."
      ]
    },
    "fizioterapie-si-reabilitare": {
      title: "Физиотерапия и реабилитация",
      short: "Индивидуальные программы для подвижности, силы, боли, осанки и функционального восстановления.",
      details: [
        "Физиотерапия и реабилитация помогают восстановить подвижность, уменьшить боль и улучшить силу, координацию и самостоятельность.",
        "План может включать лечебные упражнения, мобилизации, равновесие, походку, осанку и индивидуальные техники.",
        "Программа адаптируется к диагнозу, возрасту, переносимости нагрузки и целям пациента."
      ]
    },
    "diagnostic-functional": {
      title: "Функциональная диагностика",
      short: "Функциональная оценка нервной системы, мышц, координации, равновесия и восстановления.",
      details: [
        "Функциональная диагностика помогает понять, как пациент двигается, координирует мышцы и переносит нагрузку.",
        "Оценка может включать подвижность, силу, координацию, осанку, походку и равновесие.",
        "Результат помогает составить более понятный план реабилитации."
      ]
    },
    "terapie-balneara": {
      title: "Бальнеотерапия",
      short: "Бальнеотерапия, грязелечение, гидротерапия и дополнительные методы восстановления.",
      details: [
        "Бальнеотерапия использует дополнительные процедуры для поддержки восстановления и расслабления.",
        "Может быть полезна при мышечно-суставной боли, мышечном напряжении и функциональном восстановлении.",
        "Процедуры подбираются индивидуально с учетом противопоказаний и переносимости."
      ]
    },
    "electroterapie": {
      title: "Электротерапия",
      short: "Электростимуляция и электротерапия при боли, мышцах и восстановлении.",
      details: [
        "Электротерапия включает лечебные токи или электростимуляцию, применяемые при боли и восстановлении.",
        "Она может поддерживать нервно-мышечную функцию и входить в более широкий план реабилитации.",
        "Параметры подбираются индивидуально, процедура не применяется при противопоказаниях."
      ]
    }
  },
  ua: {
    "consultatii-neurochirurgie": {
      title: "Нейрохірургічні консультації",
      short: "Консультації при патологіях хребта, компресії нервів і нейрохірургічних показаннях.",
      details: [
        "Нейрохірургічна консультація корисна при грижах диска, стійкому болю в спині, корінцевій компресії, онімінні, слабкості в кінцівках або попередніх рекомендаціях до операції.",
        "Лікар оцінює симптоми, документи та обстеження, потім пояснює консервативні або хірургічні варіанти.",
        "Консультація не означає автоматично операцію. Мета — інформоване, безпечне й відповідне рішення."
      ]
    },
    "consultatii-neurologice": {
      title: "Неврологічні консультації",
      short: "Неврологічна оцінка при головному болю, запамороченні, онімінні, проблемах пам’яті, сну та рівноваги.",
      details: [
        "Неврологічна консультація рекомендована при головному болю, мігрені, запамороченні, онімінні, м’язовій слабкості, треморі, порушеннях сну, пам’яті або концентрації.",
        "Оцінка включає історію симптомів, неврологічний огляд і напрямок до обстеження, лікування або реабілітації.",
        "Мета — виявити тривожні ознаки та вибрати відповідну медичну тактику."
      ]
    },
    "fizioterapie-si-reabilitare": {
      title: "Фізіотерапія та реабілітація",
      short: "Індивідуальні програми для мобільності, сили, болю, постави та функціонального відновлення.",
      details: [
        "Фізіотерапія та реабілітація допомагають відновити рухливість, зменшити біль і покращити силу, координацію та самостійність.",
        "План може включати лікувальні вправи, мобілізації, рівновагу, ходу, поставу та індивідуальні техніки.",
        "Програма адаптується до діагнозу, віку, переносимості навантаження та цілей пацієнта."
      ]
    },
    "diagnostic-functional": {
      title: "Функціональна діагностика",
      short: "Функціональна оцінка нервової системи, м’язів, координації, рівноваги та відновлення.",
      details: [
        "Функціональна діагностика допомагає зрозуміти, як пацієнт рухається, координує м’язи та переносить навантаження.",
        "Оцінка може включати рухливість, силу, координацію, поставу, ходу та рівновагу.",
        "Результат допомагає скласти зрозуміліший план реабілітації."
      ]
    },
    "terapie-balneara": {
      title: "Бальнеотерапія",
      short: "Бальнеотерапія, грязелікування, гідротерапія та додаткові методи відновлення.",
      details: [
        "Бальнеотерапія використовує додаткові процедури для підтримки відновлення та розслаблення.",
        "Може бути корисною при м’язово-суглобовому болю, м’язовому напруженні та функціональному відновленні.",
        "Процедури підбираються індивідуально з урахуванням протипоказань і переносимості."
      ]
    },
    "electroterapie": {
      title: "Електротерапія",
      short: "Електростимуляція та електротерапія при болю, м’язах і відновленні.",
      details: [
        "Електротерапія включає лікувальні струми або електростимуляцію, що застосовуються при болю та відновленні.",
        "Вона може підтримувати нервово-м’язову функцію та входити до ширшого плану реабілітації.",
        "Параметри підбираються індивідуально, процедура не застосовується при протипоказаннях."
      ]
    }
  }
};

export function cleanServiceText(value: string) {
  return cleanIconUrl(value);
}

export function getServiceSeo(slug: string, lang: Lang, title?: string, description?: string) {
  const pack = data[lang]?.[slug] || data.ro[slug];

  const cleanTitle = cleanIconUrl(title || "");
  const cleanDescription = cleanIconUrl(description || "");

  return {
    title: cleanTitle && !cleanTitle.startsWith("http") ? cleanTitle : pack?.title || cleanTitle || "Serviciu",
    short: cleanDescription && cleanDescription.length > 30 ? cleanDescription : pack?.short || cleanDescription || "",
    details: pack?.details || []
  };
}
