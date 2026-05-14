import type { Lang } from "@/lib/i18n";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";

type ServicePack = {
  title: string;
  short: string;
  details: string[];
  benefits: string[];
  cta: string;
};

export function cleanServiceText(value: string | undefined | null) {
  return String(value || "")
    .replace(/https?:\/\/img\.icons8\.com\/\S+/gi, "")
    .replace(/https?:\/\/[^\s]+\.png/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

export const serviceSeoData: Record<Lang, Record<string, ServicePack>> = {
  ro: {
    "consultatii-neurologice": {
      title: "Consultații Neurologice",
      short: "Evaluare neurologică pentru dureri de cap, amețeli, amorțeli, tulburări de memorie, somn, echilibru și afecțiuni ale sistemului nervos.",
      details: [
        "Consultația neurologică este recomandată pacienților care au dureri de cap, migrene, amețeli, tulburări de echilibru, amorțeli, furnicături, slăbiciune musculară, tremor, tulburări de somn, probleme de memorie sau dificultăți de concentrare.",
        "În cadrul consultației se analizează istoricul simptomelor, evoluția lor, factorii declanșatori, tratamentele folosite anterior și investigațiile existente. Examinarea clinică ajută la orientarea corectă către diagnostic, tratament sau recuperare.",
        "Scopul este identificarea semnalelor de alarmă, clarificarea cauzei posibile și stabilirea unui plan medical adaptat pacientului."
      ],
      benefits: [
        "orientare clară pentru simptome neurologice",
        "evaluare pentru dureri, amorțeli, amețeli și tulburări de echilibru",
        "plan de investigații, tratament sau recuperare"
      ],
      cta: "Pentru o evaluare corectă, programează o consultație neurologică."
    },
    "consultatii-neurochirurgie": {
      title: "Consultații Neurochirurgie",
      short: "Consultații pentru evaluarea patologiilor coloanei vertebrale, compresiilor nervoase, herniilor de disc și indicațiilor neurochirurgicale.",
      details: [
        "Consultația de neurochirurgie este utilă pentru pacienții cu dureri persistente de spate, dureri cervicale sau lombare cu iradiere, hernii de disc, stenoză de canal, compresii radiculare, amorțeli, slăbiciune în membre sau recomandări anterioare pentru intervenție.",
        "Medicul analizează simptomele, documentele medicale și investigațiile existente, inclusiv RMN, CT sau alte rezultate relevante. Pacientului i se explică opțiunile conservatoare, de recuperare sau chirurgicale, în funcție de caz.",
        "Consultația neurochirurgicală nu înseamnă automat operație. Scopul este luarea unei decizii informate, sigure și potrivite pentru starea pacientului."
      ],
      benefits: [
        "evaluare pentru coloană, discuri și compresii nervoase",
        "interpretarea investigațiilor existente",
        "orientare către tratament conservator, recuperare sau intervenție"
      ],
      cta: "Dacă ai dureri persistente de spate sau simptome neurologice în membre, cere o evaluare specializată."
    },
    "fizioterapie-si-reabilitare": {
      title: "Fizioterapie și Reabilitare",
      short: "Programe individuale de recuperare pentru mobilitate, forță, durere, postură, mers, echilibru și funcție.",
      details: [
        "Fizioterapia și reabilitarea ajută la recuperarea mobilității, scăderea durerii, creșterea forței musculare, îmbunătățirea posturii și redobândirea independenței funcționale.",
        "Programul poate include exerciții terapeutice, mobilizări, antrenament pentru mers, echilibru, coordonare, respirație, tonus muscular și adaptarea activităților zilnice.",
        "Planul este personalizat în funcție de diagnostic, vârstă, nivel de efort tolerat, durere și obiectivele pacientului."
      ],
      benefits: [
        "recuperare după dureri sau afecțiuni neurologice/ortopedice",
        "îmbunătățirea mersului, echilibrului și forței",
        "program adaptat individual"
      ],
      cta: "Pentru recuperare eficientă, începe cu o evaluare funcțională și un plan personalizat."
    },
    "diagnostic-functional": {
      title: "Diagnostic Funcțional",
      short: "Evaluări funcționale pentru mișcare, coordonare, echilibru, forță musculară, postură și recuperare.",
      details: [
        "Diagnosticul funcțional ajută la înțelegerea modului în care pacientul se mișcă, își coordonează musculatura, menține echilibrul și tolerează activitățile zilnice.",
        "Evaluarea poate include testarea mobilității, forței, posturii, mersului, echilibrului, coordonării și limitărilor funcționale.",
        "Rezultatul oferă o bază clară pentru planul de recuperare și permite urmărirea progresului în timp."
      ],
      benefits: [
        "înțelegerea limitărilor reale ale pacientului",
        "plan de recuperare mai precis",
        "monitorizarea progresului"
      ],
      cta: "O evaluare funcțională corectă ajută la alegerea exercițiilor potrivite."
    },
    "terapie-balneara": {
      title: "Terapie Balneară",
      short: "Proceduri balneare, nămol, hidroterapie și metode complementare pentru susținerea recuperării.",
      details: [
        "Terapia balneară folosește proceduri complementare pentru relaxare, susținerea recuperării și reducerea disconfortului musculo-articular.",
        "Poate include aplicații locale, hidroterapie, nămol sau alte metode indicate individual, în funcție de starea pacientului și contraindicații.",
        "Procedurile se aleg cu atenție, mai ales la pacienții cu boli cronice, afecțiuni cardiovasculare, inflamații active sau sensibilitate crescută."
      ],
      benefits: [
        "relaxare și suport pentru recuperare",
        "proceduri adaptate pacientului",
        "susținere pentru dureri musculo-articulare selectate"
      ],
      cta: "Întreabă medicul ce proceduri balneare sunt potrivite pentru situația ta."
    },
    "electroterapie": {
      title: "Electroterapie",
      short: "Proceduri de electrostimulare și electroterapie pentru durere, musculatură, tonus și recuperare.",
      details: [
        "Electroterapia include proceduri cu curenți terapeutici sau electrostimulare, folosite ca parte a unui plan de recuperare.",
        "Poate fi recomandată pentru durere, contracturi, tonus muscular, susținerea funcției neuromusculare și recuperare după anumite afecțiuni.",
        "Parametrii se aleg individual, iar procedura se evită atunci când există contraindicații."
      ],
      benefits: [
        "suport pentru durere și musculatură",
        "poate completa exercițiile terapeutice",
        "parametri adaptați individual"
      ],
      cta: "Electroterapia se recomandă după evaluare, ca parte dintr-un plan de recuperare."
    }
  },

  en: {
    "consultatii-neurologice": {
      title: "Neurology Consultations",
      short: "Neurological evaluation for headaches, dizziness, numbness, memory, sleep, balance and nervous system conditions.",
      details: [
        "Neurology consultation is recommended for patients with headaches, migraines, dizziness, balance disorders, numbness, tingling, muscle weakness, tremor, sleep problems, memory issues or concentration difficulties.",
        "The consultation reviews symptom history, progression, triggers, previous treatments and available investigations. The clinical examination helps orient the patient toward diagnosis, treatment or rehabilitation.",
        "The goal is to identify warning signs, clarify possible causes and establish a medical plan adapted to the patient."
      ],
      benefits: [
        "clear orientation for neurological symptoms",
        "evaluation for pain, numbness, dizziness and balance issues",
        "plan for investigations, treatment or rehabilitation"
      ],
      cta: "For proper evaluation, schedule a neurology consultation."
    },
    "consultatii-neurochirurgie": {
      title: "Neurosurgery Consultations",
      short: "Consultations for spine conditions, nerve compression, disc herniation and neurosurgical indications.",
      details: [
        "Neurosurgery consultation is useful for patients with persistent back pain, neck or low back pain radiating to limbs, disc herniation, spinal stenosis, nerve root compression, numbness, limb weakness or previous recommendations for surgery.",
        "The doctor reviews symptoms, medical documents and existing investigations, including MRI, CT or other relevant results. Conservative, rehabilitation or surgical options are explained depending on the case.",
        "A neurosurgery consultation does not automatically mean surgery. The goal is an informed, safe and appropriate decision for the patient."
      ],
      benefits: [
        "spine, disc and nerve compression evaluation",
        "interpretation of existing investigations",
        "orientation toward conservative treatment, rehabilitation or surgery"
      ],
      cta: "If you have persistent back pain or neurological symptoms in the limbs, request a specialized evaluation."
    },
    "fizioterapie-si-reabilitare": {
      title: "Physiotherapy and Rehabilitation",
      short: "Individual recovery programs for mobility, strength, pain, posture, gait, balance and function.",
      details: [
        "Physiotherapy and rehabilitation help restore mobility, reduce pain, increase muscle strength, improve posture and regain functional independence.",
        "The program may include therapeutic exercise, mobilization, gait training, balance, coordination, breathing, muscle tone work and adaptation of daily activities.",
        "The plan is personalized according to diagnosis, age, tolerated effort, pain level and patient goals."
      ],
      benefits: [
        "recovery after neurological, orthopedic or pain conditions",
        "improved gait, balance and strength",
        "individualized program"
      ],
      cta: "For effective recovery, start with a functional evaluation and a personalized plan."
    },
    "diagnostic-functional": {
      title: "Functional Diagnostics",
      short: "Functional evaluations for movement, coordination, balance, muscle strength, posture and recovery.",
      details: [
        "Functional diagnostics helps understand how the patient moves, coordinates muscles, maintains balance and tolerates daily activities.",
        "The evaluation may include mobility, strength, posture, gait, balance, coordination and functional limitations.",
        "The result provides a clear base for the rehabilitation plan and helps monitor progress over time."
      ],
      benefits: [
        "understanding real functional limitations",
        "more precise rehabilitation plan",
        "progress monitoring"
      ],
      cta: "A correct functional evaluation helps choose the right exercises."
    },
    "terapie-balneara": {
      title: "Balneotherapy",
      short: "Balneotherapy, mud therapy, hydrotherapy and complementary methods to support recovery.",
      details: [
        "Balneotherapy uses complementary procedures for relaxation, recovery support and reduction of musculoskeletal discomfort.",
        "It may include local applications, hydrotherapy, mud therapy or other methods selected individually according to the patient and contraindications.",
        "Procedures are chosen carefully, especially in patients with chronic disease, cardiovascular conditions, active inflammation or increased sensitivity."
      ],
      benefits: [
        "relaxation and recovery support",
        "procedures adapted to the patient",
        "support for selected musculoskeletal pain"
      ],
      cta: "Ask the doctor which balneotherapy procedures are appropriate for your situation."
    },
    "electroterapie": {
      title: "Electrotherapy",
      short: "Electrostimulation and electrotherapy procedures for pain, muscles, tone and recovery.",
      details: [
        "Electrotherapy includes therapeutic currents or electrostimulation used as part of a rehabilitation plan.",
        "It may be recommended for pain, contractures, muscle tone, support of neuromuscular function and recovery after selected conditions.",
        "Parameters are selected individually, and the procedure is avoided when contraindications exist."
      ],
      benefits: [
        "support for pain and muscles",
        "can complement therapeutic exercise",
        "individually adapted parameters"
      ],
      cta: "Electrotherapy is recommended after evaluation, as part of a recovery plan."
    }
  },

  ru: {
    "consultatii-neurologice": {
      title: "Неврологические консультации",
      short: "Неврологическая оценка при головных болях, головокружении, онемении, нарушениях памяти, сна, равновесия и заболеваниях нервной системы.",
      details: [
        "Неврологическая консультация рекомендуется пациентам с головными болями, мигренями, головокружением, нарушениями равновесия, онемением, покалыванием, мышечной слабостью, тремором, нарушениями сна, памяти или концентрации.",
        "На консультации анализируются история симптомов, их развитие, провоцирующие факторы, ранее применявшееся лечение и имеющиеся обследования. Клинический осмотр помогает правильно направить пациента к диагностике, лечению или реабилитации.",
        "Цель — выявить тревожные признаки, уточнить возможную причину и определить медицинский план, подходящий пациенту."
      ],
      benefits: [
        "ясная ориентация при неврологических симптомах",
        "оценка боли, онемения, головокружения и равновесия",
        "план обследования, лечения или восстановления"
      ],
      cta: "Для правильной оценки запишитесь на неврологическую консультацию."
    },
    "consultatii-neurochirurgie": {
      title: "Нейрохирургические консультации",
      short: "Консультации при заболеваниях позвоночника, компрессии нервов, грыжах диска и нейрохирургических показаниях.",
      details: [
        "Нейрохирургическая консультация полезна пациентам со стойкой болью в спине, болью в шее или пояснице с иррадиацией, грыжами диска, стенозом канала, корешковой компрессией, онемением, слабостью в конечностях или предыдущими рекомендациями к операции.",
        "Врач анализирует симптомы, медицинские документы и имеющиеся обследования, включая МРТ, КТ или другие результаты. Пациенту объясняются консервативные, реабилитационные или хирургические варианты.",
        "Нейрохирургическая консультация не означает автоматически операцию. Цель — информированное, безопасное и подходящее решение."
      ],
      benefits: [
        "оценка позвоночника, дисков и компрессии нервов",
        "интерпретация имеющихся обследований",
        "ориентация к консервативному лечению, реабилитации или операции"
      ],
      cta: "Если у вас стойкая боль в спине или неврологические симптомы в конечностях, нужна специализированная оценка."
    },
    "fizioterapie-si-reabilitare": {
      title: "Физиотерапия и реабилитация",
      short: "Индивидуальные программы восстановления подвижности, силы, боли, осанки, ходьбы, равновесия и функции.",
      details: [
        "Физиотерапия и реабилитация помогают восстановить подвижность, уменьшить боль, увеличить мышечную силу, улучшить осанку и вернуть функциональную самостоятельность.",
        "Программа может включать лечебные упражнения, мобилизации, тренировку ходьбы, равновесие, координацию, дыхание, работу с мышечным тонусом и адаптацию повседневной активности.",
        "План персонализируется с учетом диагноза, возраста, переносимой нагрузки, уровня боли и целей пациента."
      ],
      benefits: [
        "восстановление после неврологических, ортопедических или болевых состояний",
        "улучшение ходьбы, равновесия и силы",
        "индивидуальная программа"
      ],
      cta: "Для эффективного восстановления начните с функциональной оценки и персонального плана."
    },
    "diagnostic-functional": {
      title: "Функциональная диагностика",
      short: "Функциональная оценка движения, координации, равновесия, мышечной силы, осанки и восстановления.",
      details: [
        "Функциональная диагностика помогает понять, как пациент двигается, координирует мышцы, удерживает равновесие и переносит повседневную активность.",
        "Оценка может включать подвижность, силу, осанку, походку, равновесие, координацию и функциональные ограничения.",
        "Результат дает ясную основу для плана реабилитации и помогает отслеживать прогресс."
      ],
      benefits: [
        "понимание реальных функциональных ограничений",
        "более точный план реабилитации",
        "контроль прогресса"
      ],
      cta: "Правильная функциональная оценка помогает подобрать подходящие упражнения."
    },
    "terapie-balneara": {
      title: "Бальнеотерапия",
      short: "Бальнеотерапия, грязелечение, гидротерапия и дополнительные методы поддержки восстановления.",
      details: [
        "Бальнеотерапия использует дополнительные процедуры для расслабления, поддержки восстановления и уменьшения мышечно-суставного дискомфорта.",
        "Она может включать местные аппликации, гидротерапию, грязелечение или другие методы, подобранные индивидуально.",
        "Процедуры выбираются осторожно, особенно при хронических заболеваниях, сердечно-сосудистых состояниях, активном воспалении или повышенной чувствительности."
      ],
      benefits: [
        "расслабление и поддержка восстановления",
        "процедуры, адаптированные пациенту",
        "поддержка при отдельных мышечно-суставных болях"
      ],
      cta: "Уточните у врача, какие бальнеопроцедуры подходят вашей ситуации."
    },
    "electroterapie": {
      title: "Электротерапия",
      short: "Электростимуляция и электротерапия при боли, нарушении мышечного тонуса и восстановлении.",
      details: [
        "Электротерапия включает лечебные токи или электростимуляцию, применяемые как часть плана реабилитации.",
        "Она может быть рекомендована при боли, контрактурах, нарушениях мышечного тонуса, поддержке нервно-мышечной функции и восстановлении.",
        "Параметры подбираются индивидуально, а процедура не проводится при противопоказаниях."
      ],
      benefits: [
        "поддержка при боли и мышечных проблемах",
        "может дополнять лечебные упражнения",
        "индивидуально подобранные параметры"
      ],
      cta: "Электротерапия назначается после оценки, как часть плана восстановления."
    }
  },

  ua: {
    "consultatii-neurologice": {
      title: "Неврологічні консультації",
      short: "Неврологічна оцінка при головному болю, запамороченні, онімінні, порушеннях пам’яті, сну, рівноваги та станах нервової системи.",
      details: [
        "Неврологічна консультація рекомендована пацієнтам із головним болем, мігренню, запамороченням, порушеннями рівноваги, онімінням, поколюванням, м’язовою слабкістю, тремором, порушеннями сну, пам’яті або концентрації.",
        "Під час консультації аналізуються історія симптомів, їх розвиток, провокуючі фактори, попереднє лікування та наявні обстеження. Клінічний огляд допомагає правильно спрямувати пацієнта до діагностики, лікування або реабілітації.",
        "Мета — виявити тривожні ознаки, уточнити можливу причину та визначити медичний план, адаптований до пацієнта."
      ],
      benefits: [
        "чітка орієнтація при неврологічних симптомах",
        "оцінка болю, оніміння, запаморочення та рівноваги",
        "план обстеження, лікування або відновлення"
      ],
      cta: "Для правильної оцінки запишіться на неврологічну консультацію."
    },
    "consultatii-neurochirurgie": {
      title: "Нейрохірургічні консультації",
      short: "Консультації при патологіях хребта, компресії нервів, грижах диска та нейрохірургічних показаннях.",
      details: [
        "Нейрохірургічна консультація корисна пацієнтам зі стійким болем у спині, болем у шиї або попереку з іррадіацією, грижами диска, стенозом каналу, корінцевою компресією, онімінням, слабкістю в кінцівках або попередніми рекомендаціями до операції.",
        "Лікар аналізує симптоми, медичні документи та наявні обстеження, включно з МРТ, КТ або іншими результатами. Пацієнту пояснюються консервативні, реабілітаційні або хірургічні варіанти.",
        "Нейрохірургічна консультація не означає автоматично операцію. Мета — інформоване, безпечне й відповідне рішення."
      ],
      benefits: [
        "оцінка хребта, дисків і компресії нервів",
        "інтерпретація наявних обстежень",
        "орієнтація до консервативного лікування, реабілітації або операції"
      ],
      cta: "Якщо маєте стійкий біль у спині або неврологічні симптоми в кінцівках, потрібна спеціалізована оцінка."
    },
    "fizioterapie-si-reabilitare": {
      title: "Фізіотерапія та реабілітація",
      short: "Індивідуальні програми відновлення мобільності, сили, болю, постави, ходи, рівноваги та функції.",
      details: [
        "Фізіотерапія та реабілітація допомагають відновити рухливість, зменшити біль, збільшити м’язову силу, покращити поставу та повернути функціональну самостійність.",
        "Програма може включати лікувальні вправи, мобілізації, тренування ходи, рівновагу, координацію, дихання, роботу з м’язовим тонусом і адаптацію щоденної активності.",
        "План персоналізується з урахуванням діагнозу, віку, переносимого навантаження, рівня болю та цілей пацієнта."
      ],
      benefits: [
        "відновлення після неврологічних, ортопедичних або больових станів",
        "покращення ходи, рівноваги та сили",
        "індивідуальна програма"
      ],
      cta: "Для ефективного відновлення почніть із функціональної оцінки та персонального плану."
    },
    "diagnostic-functional": {
      title: "Функціональна діагностика",
      short: "Функціональна оцінка руху, координації, рівноваги, м’язової сили, постави та відновлення.",
      details: [
        "Функціональна діагностика допомагає зрозуміти, як пацієнт рухається, координує м’язи, утримує рівновагу та переносить щоденну активність.",
        "Оцінка може включати рухливість, силу, поставу, ходу, рівновагу, координацію та функціональні обмеження.",
        "Результат дає чітку основу для плану реабілітації та допомагає відстежувати прогрес."
      ],
      benefits: [
        "розуміння реальних функціональних обмежень",
        "точніший план реабілітації",
        "контроль прогресу"
      ],
      cta: "Правильна функціональна оцінка допомагає підібрати відповідні вправи."
    },
    "terapie-balneara": {
      title: "Бальнеотерапія",
      short: "Бальнеотерапія, грязелікування, гідротерапія та додаткові методи підтримки відновлення.",
      details: [
        "Бальнеотерапія використовує додаткові процедури для розслаблення, підтримки відновлення та зменшення м’язово-суглобового дискомфорту.",
        "Вона може включати місцеві аплікації, гідротерапію, грязелікування або інші методи, підібрані індивідуально.",
        "Процедури обираються обережно, особливо при хронічних захворюваннях, серцево-судинних станах, активному запаленні або підвищеній чутливості."
      ],
      benefits: [
        "розслаблення та підтримка відновлення",
        "процедури, адаптовані до пацієнта",
        "підтримка при окремих м’язово-суглобових болях"
      ],
      cta: "Уточніть у лікаря, які бальнеопроцедури підходять вашій ситуації."
    },
    "electroterapie": {
      title: "Електротерапія",
      short: "Електростимуляція та електротерапія при болю, порушенні м’язового тонусу та відновленні.",
      details: [
        "Електротерапія включає лікувальні струми або електростимуляцію, що застосовуються як частина плану реабілітації.",
        "Вона може бути рекомендована при болю, контрактурах, порушеннях м’язового тонусу, підтримці нервово-м’язової функції та відновленні.",
        "Параметри підбираються індивідуально, а процедура не проводиться при протипоказаннях."
      ],
      benefits: [
        "підтримка при болю та м’язових проблемах",
        "може доповнювати лікувальні вправи",
        "індивідуально підібрані параметри"
      ],
      cta: "Електротерапія призначається після оцінки, як частина плану відновлення."
    }
  }
};

export function getServiceSeo(slug: string, lang: Lang, currentTitle?: string, currentDescription?: string) {
  const fallback = serviceSeoData[lang]?.[slug] || serviceSeoData.ro?.[slug];

  const title = cleanServiceText(currentTitle);
  const short = cleanServiceText(currentDescription);

  return {
    title: title && !title.startsWith("http") ? title : fallback?.title || title || "Serviciu",
    short: short && short.length > 30 ? short : fallback?.short || short || "",
    details: fallback?.details || [],
    benefits: fallback?.benefits || [],
    cta: fallback?.cta || ""
  };
}
