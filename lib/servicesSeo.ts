import type { SiteLang } from "@/lib/services";

export type ServiceSeoUpgrade = {
 metaTitle: Record<SiteLang, string>;
 metaDescription: Record<SiteLang, string>;
 extraSections: Record<SiteLang, { title: string; body: string[] }[]>;
 faqs: Record<SiteLang, { q: string; a: string }[]>;
};

export const servicesSeo: Record<string, ServiceSeoUpgrade> = {
 "consultatii-neurologice": {
  metaTitle: {
   ro: "Neurolog Chișinău — Consultații Neurologice Adulți & Copii",
   en: "Neurologist Chișinău — Adult & Pediatric Neurology Consultations",
   ru: "Невролог Кишинёв — Консультация невролога для взрослых и детей",
   ua: "Невролог Кишинів — Консультація невролога для дорослих і дітей"
  },
  metaDescription: {
   ro: "Consultație la medic neurolog în Chișinău (Ciocana) — Dr. Igor Revenco, 35+ ani experiență, adulți și copii (neuropediatrie). Migrene, vertij, neuropatii, insomnie, recuperare. Programări: 022 60 50 60.",
   en: "Neurology consultation in Chișinău (Ciocana) with Dr. Igor Revenco, 35+ years experience in adult & pediatric neurology. Migraines, vertigo, neuropathy, sleep disorders. Call 022 60 50 60.",
   ru: "Консультация невролога в Кишинёве (Чеканы) — д-р Игорь Ревенко, опыт 35+ лет, взрослые и дети (детский невролог). Мигрени, головокружение, нейропатии, бессонница. Запись: 022 60 50 60.",
   ua: "Консультація невролога в Кишиневі (Чекани) — д-р Ігор Ревенко, досвід 35+ років, дорослі та діти. Мігрені, запаморочення, нейропатії, безсоння. Запис: 022 60 50 60."
  },
  extraSections: {
   ro: [
    {
     title: "Afecțiuni evaluate frecvent la neurolog în Chișinău",
     body: [
      "migrene, cefalee de tensiune, nevralgie de trigemen și dureri faciale;",
      "amețeli, vertij, instabilitate la mers și tulburări de circulație cerebrală;",
      "dureri de spate cervicale, toracale și lombare, radiculite și sciatică;",
      "polineuropatii, amorțeli în mâini și picioare, sindrom de tunel carpian;",
      "distonie neurovegetativă, insomnie, epuizare nervoasă și stres cronic;",
      "neurologie pediatrică (neuropediatrie) și monitorizare după AVC sau traumatisme."
     ]
    },
    {
     title: "De ce pacienții din Chișinău aleg Revimed PLUS+ (Ciocana)",
     body: [
      "Consultațiile sunt conduse de Dr. Igor Revenco — medic neurolog, neurochirurg și neuropediatru de categorie superioară, doctor în neurochirurgie (USMF) și membru EANS, cu peste 35 de ani de practică clinică.",
      "Pe lângă consultație, în aceeași clinică de pe Str. Mircea cel Bătrân 13/2 (sectorul Ciocana) sunt disponibile 25 de aparate de fizioterapie, diagnostic funcțional (RHEOTEST, AMP) și proceduri blânde de recuperare, astfel încât planul să poată fi aplicat coerent, cu acordul pacientului."
     ]
    }
   ],
   en: [
    {
     title: "Conditions commonly evaluated in Chișinău",
     body: [
      "migraines, tension headaches, trigeminal neuralgia, and chronic pain;",
      "dizziness, vertigo, balance issues, and cerebral circulation symptoms;",
      "cervical and lumbar spine pain, radiculopathy, and sciatica;",
      "peripheral neuropathy, numbness, tingling, and sleep or autonomic disorders;",
      "pediatric neurology and post-stroke or post-traumatic clinical recovery."
     ]
    },
    {
     title: "Why patients choose Dr. Igor Revenco at Revimed PLUS+",
     body: [
      "Consultations are led by Dr. Igor Revenco — Senior Neurologist, Neurosurgeon, and Pediatric Neurologist with 35+ years of clinical experience and EANS membership.",
      "Located in Ciocana (Str. Mircea cel Bătrân 13/2, Chișinău), the clinic combines neurological evaluation with 25 specialized physiotherapy and functional diagnostic devices under one roof."
     ]
    }
   ],
   ru: [
    {
     title: "Какие заболевания и симптомы мы оцениваем в Кишинёве",
     body: [
      "мигрени, головные боли напряжения, невралгия тройничного нерва;",
      "головокружение, шум в ушах, нарушения равновесия и мозгового кровообращения;",
      "боли в шее и пояснице, остеохондроз, радикулит и ишиас;",
      "онемение рук и ног, полинейропатии, нарушения сна и вегетативная дистония;",
      "детская неврология (невропатолог для детей) и восстановление после инсульта или травм."
     ]
    },
    {
     title: "Почему пациенты в Кишинёве выбирают Revimed PLUS+ (Чеканы)",
     body: [
      "Приём ведёт д-р Игорь Ревенко — невролог, нейрохирург и детский невролог высшей категории, доктор нейрохирургии (USMF), член EANS, с клиническим опытом более 35 лет.",
      "В клинике на ул. Мирча чел Бэтрын 13/2 (Чеканы) доступны консультация, функциональная диагностика (RHEOTEST, АМП) и 25 аппаратов физиотерапии и нейростимуляции в одном месте."
     ]
    }
   ],
   ua: [
    {
     title: "Які стани та симптоми ми оцінюємо у Кишиневі",
     body: [
      "мігрені, головний біль напруги, невралгія трійчастого нерва;",
      "запаморочення, порушення рівноваги та мозкового кровообігу;",
      "болі в шиї та попереку, остеохондроз, радикуліт та ішіас;",
      "оніміння кінцівок, полінейропатії, порушення сну та вегетативна дистонія;",
      "дитяча неврологія та відновлення після інсульту або травм."
     ]
    },
    {
     title: "Чому пацієнти обирають Revimed PLUS+ (Чекани)",
     body: [
      "Прийом проводить д-р Ігор Ревенко — невролог, нейрохірург і дитячий невролог вищої категорії з досвідом понад 35 років, член EANS.",
      "У клініці на вул. Мірча чел Бетрин 13/2 поєднано неврологічну консультацію, функціональну діагностику та 25 апаратів фізіотерапії."
     ]
    }
   ]
  },
  faqs: {
   ro: [
    {
     q: "Ce analize sau investigații trebuie să aduc la consultația neurologică?",
     a: "Dacă aveți RMN, CT, radiografii, EEG, Doppler vascular sau analize recente, luați-le cu dumneavoastră (inclusiv imaginile pe CD/film). Dacă nu aveți investigații, medicul stabilește după consult ce este cu adevărat necesar."
    },
    {
     q: "Oferiți consultații neurologice și pentru copii în Chișinău?",
     a: "Da. Dr. Igor Revenco are competență și peste 35 de ani experiență atât în neurologia adulților, cât și în neurologie pediatrică (neuropediatrie)."
    },
    {
     q: "Cum mă programez la neurolog la Revimed PLUS+ Ciocana?",
     a: "Programările se fac telefonic la 022 60 50 60 sau +373 79 422 908, de luni până vineri, între 09:00 și 15:00."
    }
   ],
   en: [
    {
     q: "What medical records should I bring to a neurology consultation?",
     a: "Bring any prior MRI, CT, X-ray, EEG, Doppler, or blood test results if available. If you have none, the doctor will recommend only what is clinically necessary."
    },
    {
     q: "Do you offer pediatric neurology consultations in Chișinău?",
     a: "Yes. Dr. Igor Revenco has 35+ years of clinical experience in both adult neurology and pediatric neurology."
    },
    {
     q: "How do I book an appointment?",
     a: "Call 022 60 50 60 or +373 79 422 908 Monday–Friday, 09:00–15:00."
    }
   ],
   ru: [
    {
     q: "Какие обследования взять на приём к неврологу в Кишинёве?",
     a: "Возьмите имеющиеся МРТ, КТ, рентген, ЭЭГ, допплер сосудов и выписки. Если обследований нет, врач назначит только действительно нужные после осмотра."
    },
    {
     q: "Принимаете ли вы детей (детский невролог)?",
     a: "Да, д-р Игорь Ревенко имеет более 35 лет опыта во взрослой и детской неврологии."
    },
    {
     q: "Как записаться к неврологу в Revimed PLUS+ (Чеканы)?",
     a: "Запись по телефонам 022 60 50 60 или +373 79 422 908, Пн–Пт с 09:00 до 15:00."
    }
   ],
   ua: [
    {
     q: "Які обстеження взяти на прийом до невролога?",
     a: "Візьміть наявні МРТ, КТ, рентген, ЕЕГ або виписки. Якщо їх немає, лікар порадить лише справді необхідні."
    },
    {
     q: "Чи приймаєте дітей (дитячий невролог)?",
     a: "Так, д-р Ігор Ревенко має понад 35 років досвіду у дорослій та дитячій неврології."
    },
    {
     q: "Як записатися до невролога у Revimed PLUS+?",
     a: "Запис за телефонами 022 60 50 60 або +373 79 422 908, Пн–Пт 09:00–15:00."
    }
   ]
  }
 },
 "consultatii-neurochirurgie": {
  metaTitle: {
   ro: "Neurochirurg Chișinău — Hernie de Disc & Coloană | Dr. Igor Revenco",
   en: "Neurosurgeon Chișinău — Spine & Disc Herniation | Dr. Igor Revenco",
   ru: "Нейрохирург Кишинёв — Грыжа диска и позвоночник | Д-р Игорь Ревенко",
   ua: "Нейрохірург Кишинів — Грижа диска та хребет | Д-р Ігор Ревенко"
  },
  metaDescription: {
   ro: "Consultație la medic neurochirurg în Chișinău — Dr. Igor Revenco (doctor în neurochirurgie, membru EANS, 35+ ani experiență). Evaluare RMN/CT pentru hernie de disc, sciatică, stenoză și tratament conservator.",
   en: "Neurosurgery consultation in Chișinău with Dr. Igor Revenco (PhD in Neurosurgery, EANS member, 35+ years experience). MRI/CT evaluation for disc herniation, sciatica, and conservative vs. surgical guidance.",
   ru: "Консультация нейрохирурга в Кишинёве — д-р Игорь Ревенко (доктор нейрохирургии, член EANS, опыт 35+ лет). Оценка МРТ/КТ при грыже диска, ишиасе, стенозе и подбор консервативного лечения.",
   ua: "Консультація нейрохірурга в Кишиневі — д-р Ігор Ревенко (доктор нейрохірургії, член EANS, досвід 35+ років). Оцінка МРТ/КТ при грижі диска, ішіасі та стенозі."
  },
  extraSections: {
   ro: [
    {
     title: "Patologii ale coloanei și sistemului nervos evaluate neurochirurgical",
     body: [
      "hernie de disc lombară, cervicală sau toracală cu durere iradiată pe picior (sciatică) ori braț;",
      "protruzii discale, stenoză de canal spinal și compresii radiculare;",
      "evaluare obiectivă a imaginilor RMN și CT pentru a decide între recuperare conservatoare și indicație chirurgicală;",
      "monitorizare și recuperare post-operatorie după intervenții pe coloană sau craniu."
     ]
    },
    {
     title: "A doua opinie neurochirurgicală — Dr. Igor Revenco (Membru EANS)",
     body: [
      "Multe hernii de disc și dureri radiculare pot fi gestionate eficient fără operație atunci când diagnosticul este corect și recuperarea este condusă atent. Consultația neurochirurgicală clarifică exact dacă este nevoie de tratament conservator (fizioterapie, electroterapie, protocol medical) sau dacă intervenția este cu adevărat necesară.",
      "Pentru o evaluare completă, aduceți imaginile RMN/CT (CD sau film), nu doar concluzia scrisă."
     ]
    }
   ],
   en: [
    {
     title: "Spine & neurosurgical conditions evaluated",
     body: [
      "lumbar, cervical, and thoracic disc herniation with sciatica or arm radiation;",
      "disc protrusions, spinal canal stenosis, and nerve root compression;",
      "objective MRI/CT image review to decide between conservative rehabilitation and surgery;",
      "post-operative follow-up and structured neurological recovery."
     ]
    }
   ],
   ru: [
    {
     title: "Патологии позвоночника и нервной системы на приёме нейрохирурга",
     body: [
      "грыжа межпозвоночного диска (поясничного, шейного, грудного отдела) и ишиас;",
      "протрузии дисков, стеноз позвоночного канала и компрессия нервных корешков;",
      "объективный разбор снимков МРТ/КТ для выбора между консервативной реабилитацией и операцией;",
      "послеоперационное наблюдение и восстановление под контролем врача."
     ]
    }
   ],
   ua: [
    {
     title: "Патології хребта та нервової системи на прийомі нейрохірурга",
     body: [
      "грижа міжхребцевого диска та ішіас;",
      "протрузії дисків, стеноз хребетного каналу та компресія корінців;",
      "об’єктивний аналіз знімків МРТ/КТ для вибору між консервативною реабілітацією та операцією."
     ]
    }
   ]
  },
  faqs: {
   ro: [
    {
     q: "Este obligatoriu să am RMN înainte de consultația la neurochirurg?",
     a: "Dacă aveți deja un RMN sau CT, aduceți neapărat imaginile pe CD/film — medicul analizează direct secțiunile. Dacă nu aveți, puteți veni întâi la consultație pentru ca medicul să indice exact ce segment trebuie investigat."
    },
    {
     q: "Orice hernie de disc necesită operație?",
     a: "Nu. Un procent mare de hernii de disc răspund foarte bine la tratament conservator și fizioterapie țintită. Operația se recomandă doar când există indicații clinice și neurologice clare."
    }
   ],
   en: [
    {
     q: "Do I need an MRI before seeing the neurosurgeon?",
     a: "If you already have MRI/CT images on CD or film, please bring them. Otherwise, the doctor can first examine you and recommend the exact scan needed."
    },
    {
     q: "Does every disc herniation require surgery?",
     a: "No. Many disc herniations respond well to targeted conservative therapy and physiotherapy; surgery is advised only when clinically necessary."
    }
   ],
   ru: [
    {
     q: "Нужно ли делать МРТ до консультации нейрохирурга?",
     a: "Если МРТ или КТ уже есть, обязательно возьмите диск или снимки. Если нет — приходите на осмотр, и врач точно определит нужный отдел для исследования."
    },
    {
     q: "Всегда ли при грыже диска нужна операция?",
     a: "Нет. Во многих случаях помогает правильно подобранное консервативное лечение и физиотерапия; операция назначается только при чётких неврологических показаниях."
    }
   ],
   ua: [
    {
     q: "Чи потрібно робити МРТ до консультації нейрохірурга?",
     a: "Якщо МРТ або КТ уже є, візьміть диск чи знімки. Якщо ні — лікар спочатку огляне вас і визначить точну зону обстеження."
    }
   ]
  }
 },
 "fizioterapie-si-reabilitare": {
  metaTitle: {
   ro: "Fizioterapie și Recuperare Medicală Chișinău (Ciocana)",
   en: "Physiotherapy & Medical Rehabilitation Chișinău",
   ru: "Физиотерапия и Медицинская Реабилитация Кишинёв (Чеканы)",
   ua: "Фізіотерапія та Медична Реабілітація Кишинів (Чекани)"
  },
  metaDescription: {
   ro: "Fizioterapie și recuperare medicală în Chișinău la Revimed PLUS+: 25 de aparate (Electrosomn, Transair, Amplipuls SMT, Electroforeză, MDM, Solux) pentru spate, articulații și sistemul nervos.",
   en: "Physiotherapy and medical rehabilitation in Chișinău at Revimed PLUS+: 25 devices (Electrosleep, Transair, Amplipuls SMT, Electrophoresis, MDM, Sollux) for spine, joints, and neurology.",
   ru: "Физиотерапия и реабилитация в Кишинёве в Revimed PLUS+: 25 аппаратов (Электросон, Трансаир, Амплипульс СМТ, Электрофорез, МДМ, Соллюкс) для спины, суставов и нервной системы.",
   ua: "Фізіотерапія та реабілітація у Кишиневі в Revimed PLUS+: 25 апаратів (Електросон, Трансаір, Ампліпульс СМТ, Електрофорез, МДМ, Соллюкс) для спини, суглобів та нервової системи."
  },
  extraSections: {
   ro: [
    {
     title: "Proceduri și aparataj de fizioterapie disponibile în Chișinău",
     body: [
      "Amplipulsterapie (Amplipuls-4/5/6, curenți SMT) pentru dureri lombare, cervicale, nevralgii și spasme musculare;",
      "Electroforeză medicamentoasă neinvazivă pentru administrare locală țintită antiinflamatoare;",
      "Electrosomn (Electrosomn-3/4T/5) și stimulare transcraniană TES (Transair, Bi-LENAR, MDM) pentru stres, somn, migrene și recuperare neurologică;",
      "Fototerapie infraroșie (Spectr-LC, Lampă Solux) și vibromasaj reflexogen (Kandadzia LQX-2000A)."
     ]
    }
   ],
   en: [
    {
     title: "Physiotherapy procedures & medical devices available",
     body: [
      "SMT electrotherapy (Amplipuls-4/5/6) for back pain, neck tension, neuralgia, and muscle recovery;",
      "Non-invasive medicinal electrophoresis for targeted local anti-inflammatory care;",
      "Electrosleep and TES/MDM neurostimulation (Transair, Bi-LENAR, MDM-2000) for stress, migraines, and neurological recovery;",
      "Infrared phototherapy (Spectr-LC, Sollux lamp) and reflexology vibration therapy."
     ]
    }
   ],
   ru: [
    {
     title: "Физиотерапевтические процедуры и оборудование в Кишинёве",
     body: [
      "СМТ-терапия (Амплипульс-4/5/6) при болях в спине, шее, невралгиях и мышечных спазмах;",
      "Лекарственный электрофорез для локального неинвазивного введения препаратов;",
      "Электросон и транскраниальная стимуляция (Трансаир, Би-ЛЕНАР, МДМ) при стрессе, мигренях, нарушениях сна и неврологической реабилитации;",
      "Инфракрасная терапия (Спектр-ЛЦ, лампа Соллюкс) и рефлекторный вибромассаж."
     ]
    }
   ],
   ua: [
    {
     title: "Фізіотерапевтичні процедури та обладнання у Кишиневі",
     body: [
      "СМТ-терапія (Ампліпульс-4/5/6) при болях у спині, шиї та невралгіях;",
      "Лікарський електрофорез та інфрачервона терапія (Спектр-ЛЦ, Соллюкс);",
      "Електросон і транскраніальна стимуляція (Трансаір, Бі-ЛЕНАР, МДМ)."
     ]
    }
   ]
  },
  faqs: {
   ro: [
    {
     q: "Câte ședințe de fizioterapie sunt necesare de obicei?",
     a: "Un curs orientativ include de obicei între 5 și 10 ședințe, ajustate individual de medic în funcție de diagnostic, toleranță și evoluție."
    },
    {
     q: "Pot face fizioterapie dacă am hernie de disc sau dureri de spate?",
     a: "Da, multe proceduri (Amplipuls SMT, electroforeză, Solux, neurostimulare) sunt indicate tocmai în durerile de coloană, dar doar după evaluarea medicului pentru a exclude contraindicațiile."
    }
   ],
   en: [
    {
     q: "How many physiotherapy sessions are usually recommended?",
     a: "A typical course includes 5 to 10 sessions tailored individually by the physician based on diagnosis and clinical response."
    }
   ],
   ru: [
    {
     q: "Сколько сеансов физиотерапии обычно требуется?",
     a: "Стандартный курс обычно составляет 5–10 процедур и подбирается врачом индивидуально с учётом диагноза и переносимости."
    }
   ],
   ua: [
    {
     q: "Скільки сеансів фізіотерапії зазвичай потрібно?",
     a: "Стандартний курс зазвичай становить 5–10 процедур і підбирається лікарем індивідуально."
    }
   ]
  }
 },
 "diagnostic-functional": {
  metaTitle: {
   ro: "Diagnostic Funcțional Chișinău — RHEOTEST & Analizator AMP",
   en: "Functional Diagnostics Chișinău — RHEOTEST & AMP Analyzer",
   ru: "Функциональная Диагностика Кишинёв — РЕОТЕСТ и Аппарат АМП",
   ua: "Функціональна Діагностика Кишинів — РЕОТЕСТ та Апарат АМП"
  },
  metaDescription: {
   ro: "Diagnostic funcțional neinvaziv în Chișinău la Revimed PLUS+: reografie vasculară RHEOTEST (circulație cerebrală și periferică) și analizator spectral neinvaziv AMP.",
   en: "Non-invasive functional diagnostics in Chișinău at Revimed PLUS+: RHEOTEST vascular rheography (cerebral & peripheral circulation) and AMP spectral analyzer.",
   ru: "Неинвазивная функциональная диагностика в Кишинёве в Revimed PLUS+: сосудистая реография РЕОТЕСТ (мозговое и периферическое кровообращение) и анализатор АМП.",
   ua: "Неінвазивна функціональна діагностика у Кишиневі в Revimed PLUS+: судинна реографія РЕОТЕСТ та спектральний аналізатор АМП."
  },
  extraSections: { ro: [], en: [], ru: [], ua: [] },
  faqs: {
   ro: [
    {
     q: "Este dureros diagnosticul funcțional cu RHEOTEST sau AMP?",
     a: "Nu. Ambele investigații sunt complet neinvazive, fără ace și fără disconfort, iar rezultatele sunt interpretate pe loc de medic în context clinic."
    }
   ],
   en: [
    {
     q: "Are RHEOTEST and AMP examinations painful?",
     a: "No. Both assessments are completely non-invasive and painless, interpreted directly by the physician in clinical context."
    }
   ],
   ru: [
    {
     q: "Болезненна ли диагностика на аппаратах РЕОТЕСТ и АМП?",
     a: "Нет, оба метода полностью неинвазивны и безболезненны, а результаты сразу интерпретирует врач."
    }
   ],
   ua: [
    {
     q: "Чи болісна діагностика на апаратах РЕОТЕСТ та АМП?",
     a: "Ні, обидва методи повністю неінвазивні та безболісні."
    }
   ]
  }
 },
 "terapie-balneara": {
  metaTitle: {
   ro: "Terapii Complementare & Recuperare Blândă Chișinău",
   en: "Complementary Therapies & Gentle Recovery Chișinău",
   ru: "Дополнительные и Щадящие Методы Восстановления Кишинёв",
   ua: "Додаткові та Щадні Методи Відновлення Кишинів"
  },
  metaDescription: {
   ro: "Proceduri complementare blânde în Chișinău la Revimed PLUS+: băi ionice DETOX Spa Bio, vibromasaj reflexogen și suport de relaxare sub supraveghere medicală.",
   en: "Gentle complementary recovery procedures in Chișinău at Revimed PLUS+: ionic DETOX Spa Bio sessions, reflexology vibration therapy, and medically guided relaxation.",
   ru: "Щадящие дополнительные процедуры в Кишинёве в Revimed PLUS+: ионные спа-процедуры DETOX Spa Bio, рефлекторный вибромассаж и восстановление под наблюдением врача.",
   ua: "Щадні додаткові процедури у Кишиневі в Revimed PLUS+: іонні спа-процедури DETOX Spa Bio та рефлекторний вібромасаж."
  },
  extraSections: { ro: [], en: [], ru: [], ua: [] },
  faqs: { ro: [], en: [], ru: [], ua: [] }
 },
 "electroterapie": {
  metaTitle: {
   ro: "Electroterapie Chișinău — Electrosomn, Amplipuls & Electroforeză",
   en: "Electrotherapy Chișinău — Electrosleep, Amplipuls & Electrophoresis",
   ru: "Электротерапия Кишинёв — Электросон, Амплипульс и Электрофорез",
   ua: "Електротерапія Кишинів — Електросон, Ампліпульс та Електрофорез"
  },
  metaDescription: {
   ro: "Electroterapie medicală în Chișinău la Revimed PLUS+: Electrosomn, Transair TES, Amplipuls SMT, Electroforeză medicamentoasă, LENAR și MDM pentru durere, stres și recuperare.",
   en: "Medical electrotherapy in Chișinău at Revimed PLUS+: Electrosleep, Transair TES, Amplipuls SMT, medicinal electrophoresis, LENAR, and MDM for pain relief and recovery.",
   ru: "Медицинская электротерапия в Кишинёве в Revimed PLUS+: Электросон, Трансаир ТЭС, Амплипульс СМТ, электрофорез, ЛЕНАР и МДМ при боли, стрессе и реабилитации.",
   ua: "Медична електротерапія у Кишиневі в Revimed PLUS+: Електросон, Трансаір ТЕС, Ампліпульс СМТ, електрофорез, ЛЕНАР і МДМ."
  },
  extraSections: { ro: [], en: [], ru: [], ua: [] },
  faqs: {
   ro: [
    {
     q: "Cine stabilește parametrii ședinței de electroterapie?",
     a: "Fiecare procedură de electroterapie este prescrisă și dozată individual de medic, în funcție de afecțiune, sensibilitate și istoricul pacientului."
    }
   ],
   en: [
    {
     q: "Who sets the electrotherapy parameters?",
     a: "Every electrotherapy session is prescribed and individually dosed by the physician according to your diagnosis and tolerance."
    }
   ],
   ru: [
    {
     q: "Кто подбирает параметры электротерапии?",
     a: "Каждая процедура электротерапии назначается и дозируется врачом индивидуально с учётом диагноза и переносимости."
    }
   ],
   ua: [
    {
     q: "Хто підбирає параметри електротерапії?",
     a: "Кожна процедура електротерапії призначається та дозується лікарем індивідуально."
    }
   ]
  }
 }
};

export function getServiceSeo(slug: string, lang: SiteLang = "ro") {
 const entry = servicesSeo[slug];
 if (!entry) return null;
 return {
  metaTitle: entry.metaTitle[lang] || entry.metaTitle.ro,
  metaDescription: entry.metaDescription[lang] || entry.metaDescription.ro,
  extraSections: entry.extraSections[lang] || entry.extraSections.ro,
  faqs: entry.faqs[lang] || entry.faqs.ro
 };
}
