import type { LocalLandingProps } from "@/components/LocalConditionLanding";

export type ClinicalDomain =
 | "pediatric"
 | "spine"
 | "vascular_headache"
 | "sleep_autonomic"
 | "diagnostics"
 | "physio_rehab";

export function detectClinicalDomain(path: string, h1: string): ClinicalDomain {
 const text = `${path} ${h1}`.toLowerCase();
 if (
  /copii|pediatr|detyam|detskiy|rebenk|u-detey|adhd|sdvg|autism|autizm|enurez|balbaiala|zaikanie|ticuri|tiki|vorbire|rechi|febril/.test(
   text
  )
 ) {
  return "pediatric";
 }
 if (
  /spate|spine|sciatica|ishias|hernie|gryzha|lumbago|lyumbago|osteocondroza|osteohondroz|spondil|protruz|stenoza|stenoz|scolioza|skolioz|cervical|sheyn|torticolis|krivosheya|piriform|grushevid|postoperator|operatsii/.test(
   text
  )
 ) {
  return "spine";
 }
 if (
  /migren|cefalee|golovn|ameteli|vertij|golovokruzh|tinitus|tinnitus|shum-v-ushah|avc|insult|reoencefal|reoentsefal|intracranian|vnutricherepn|comotie|sotryasenie/.test(
   text
  )
 ) {
  return "vascular_headache";
 }
 if (
  /insomni|bessonnits|somn|sna|electrosomn|elektroson|panica|panichesk|anxiet|trevog|distonie|vsd|oboseala|ustalost|burnout|vygoranie|spasmofil|spazmofil|nelinistite|bespokoynyh/.test(
   text
  )
 ) {
  return "sleep_autonomic";
 }
 if (
  /eeg|amp|eho|cartograf|kartirov|spondilograf|ecograf|uzi|neuropsiholog|neyropsiholog|mmpi|diagnostic/.test(
   text
  )
 ) {
  return "diagnostics";
 }
 return "physio_rehab";
}

export function getEnrichedDecisionTable(
 p: LocalLandingProps,
 domain: ClinicalDomain
): NonNullable<LocalLandingProps["customDecisionTable"]> {
 if (p.customDecisionTable) return p.customDecisionTable;
 const isRu = p.lang === "ru";
 const eqList = p.equipmentCards.map((e) => e.title).join(", ") || (isRu ? "Электросон, Амплипульс" : "Electrosomn, Amplipuls");

 if (domain === "pediatric") {
  return isRu
   ? {
      heading: `Ориентировочный маршрут обследования ребёнка (${p.crumbLabel})`,
      columns: ["Клиническая ситуация", "Рекомендуемый шаг в Revimed PLUS+", "Что взять на приём"],
      rows: [
       [
        `Первичные симптомы (${p.crumbLabel})`,
        "Консультация детского невролога д-ра Игоря Ревенко (500 MDL, повторная 400 MDL)",
        "Медицинская карта ребёнка, выписки из роддома и дневник симптомов"
       ],
       [
        "Необходимость оценки биоэлектрической активности мозга",
        "Детская ЭЭГ 19 каналов (1600 MDL) или Картирование мозга 3D (600 MDL)",
        "Чистые сухие волосы без масел, любимая игрушка или книга для комфорта"
       ],
       [
        "Поддержка сна, внимания и снижение гипервозбудимости",
        `Щадящий курс: ${eqList} (100 MDL / 30 мин)`,
        "Заключение детского невролога и спокойный режим дня перед сеансом"
       ]
      ]
     }
   : {
      heading: `Ghid orientativ de evaluare neuropediatrică (${p.crumbLabel})`,
      columns: ["Situația clinică", "Pasul recomandat la Revimed PLUS+", "Ce să pregătiți pentru vizită"],
      rows: [
       [
        `Evaluare inițială pentru ${p.crumbLabel}`,
        "Consultație neuropediatru Dr. Igor Revenco (500 MDL, repetată 400 MDL)",
        "Carnetul de dezvoltare al copilului, bilete de externare și scurt istoric al simptomelor"
       ],
       [
        "Verificarea maturizării corticale și excluderea descărcărilor subclinice",
        "EEG pediatric 19 canale (1600 MDL) sau Cartografiere cerebrală 3D (600 MDL)",
        "Părul curat și uscat (fără uleiuri/balsam) și o jucărie preferată pentru confort"
       ],
       [
        "Reglarea blândă a somnului, atenției și hiperexcitabilității",
        `Protocol nefarmacologic: ${eqList} (100 MDL / 30 min)`,
        "Recomandarea medicului neuropediatru și program regulat de odihnă"
       ]
      ]
     };
 }

 if (domain === "spine") {
  return isRu
   ? {
      heading: `Тактика выбора при патологии позвоночника (${p.crumbLabel})`,
      columns: ["Проявление симптомов", "Оптимальный шаг в Revimed PLUS+", "Подготовка и документы"],
      rows: [
       [
        "Локальная боль, мышечный спазм и ограничение подвижности",
        "Осмотр невролога / нейрохирурга д-ра Игоря Ревенко (500 MDL) + курс физиотерапии",
        "Предыдущие выписки, список принимаемых обезболивающих препаратов"
       ],
       [
        "Боль отдаёт в ногу или руку, онемение пальцев, подозрение на грыжу диска",
        "Консультация нейрохирурга с разбором снимков МРТ/КТ (500 MDL, повторная 400 MDL)",
        "Диск (CD/USB) или плёнка МРТ/КТ позвоночника и письменное описание"
       ],
       [
        "Консервативное снятие спазма и воспаления без операции",
        `Курс 5 - 10 сеансов (${eqList}: по 100 MDL / 30 мин, лечебный массаж 200 MDL)`,
        "Удобная свободная одежда, не сковывающая движения"
       ]
      ]
     }
   : {
      heading: `Ghid de decizie clinică pentru coloană și nervi periferici (${p.crumbLabel})`,
      columns: ["Manifestarea simptomelor", "Pasul recomandat la Revimed PLUS+", "Documente și pregătire"],
      rows: [
       [
        "Durere localizată, contractură musculară paravertebrală și rigiditate",
        "Consultație neurolog / neurochirurg Dr. Igor Revenco (500 MDL) + plan fizioterapeutic",
        "Analizele anterioare și lista medicamentelor antiinflamatoare utilizate"
       ],
       [
        "Durere iradiată pe picior sau braț, amorțeli, suspiciune de hernie/protruzie",
        "Consultație neurochirurgicală cu interpretarea imaginilor RMN/CT (500 MDL, repetată 400 MDL)",
        "Imaginile RMN sau CT pe CD/film împreună cu buletinul radiologic"
       ],
       [
        "Decontracturare și recuperare conservatoare fără operație",
        `Curs 5 - 10 ședințe (${eqList}: 100 MDL / 30 min, masaj terapeutic 200 MDL)`,
        "Îmbrăcăminte lejeră și respectarea repausului de efort fizic greu"
       ]
      ]
     };
 }

 if (domain === "vascular_headache") {
  return isRu
   ? {
      heading: `Алгоритм диагностики и терапии (${p.crumbLabel})`,
      columns: ["Характер жалоб", "Рекомендуемый этап в Revimed PLUS+", "Что подготовить к визиту"],
      rows: [
       [
        `Регулярные эпизоды (${p.crumbLabel}), метеозависимость или тяжесть в голове`,
        "Консультация невролога д-ра Игоря Ревенко (500 MDL) + Реоэнцефалография RHEOTEST (500 MDL)",
        "Дневник приступов (частота, триггеры) и показатели артериального давления"
       ],
       [
        "Сочетание с потерей сознания, судорогами или посттравматическим синдромом",
        "ЭЭГ 19 каналов (1600 MDL) + Картирование мозга 3D (600 MDL) / ЭХО-ЭГ (350 MDL)",
        "Чистые волосы без лака/геля, отказ от кофеина за 12 часов до исследования"
       ],
       [
        "Стабилизация сосудистого тонуса и снижение частоты приступов",
        `Курс нейротропной физиотерапии: ${eqList} (100 MDL / 30 мин)`,
        "Список всех принимаемых сосудистых и обезболивающих средств"
       ]
      ]
     }
   : {
      heading: `Algoritm de diagnostic vascular și neurologic (${p.crumbLabel})`,
      columns: ["Profilul simptomelor", "Etapa recomandată la Revimed PLUS+", "Ce să aduceți la consultație"],
      rows: [
       [
        `Episoade recurente (${p.crumbLabel}), sensibilitate la schimbări meteo sau tensiune occipitală`,
        "Consultație neurolog Dr. Igor Revenco (500 MDL) + Reoencefalografie RHEOTEST (500 MDL)",
        "Jurnalul crizelor (frecvență, factori declanșatori) și valorile tensiunii arteriale"
       ],
       [
        "Asociere cu pierderi de cunoștință, traumatism cranian sau tulburări paroxistice",
        "EEG 19 canale (1600 MDL) + Cartografiere 3D (600 MDL) / EHO-EG (350 MDL)",
        "Părul curat (fără fixativ/gel) și evitarea cofeinei în dimineața examinării"
       ],
       [
        "Reglarea tonusului vascular și reducerea frecvenței episoadelor",
        `Curs fizioterapeutic neurotrop: ${eqList} (100 MDL / 30 min)`,
        "Lista completă a analgezicelor și tratamentelor vasculare curente"
       ]
      ]
     };
 }

 return isRu
  ? {
     heading: `Пошаговый план обследования и восстановления (${p.crumbLabel})`,
     columns: ["Этап маршрута пациента", "Решение в Revimed PLUS+ (Кишинёв, Чеканы)", "Ориентировочный тариф"],
     rows: [
      [
       `1. Первичная клиническая оценка (${p.crumbLabel})`,
       "Осмотр невролога / нейрохирурга высшей категории д-ра Игоря Ревенко",
       "500 MDL (повторный приём: 400 MDL)"
      ],
      [
       "2. Функциональная верификация на месте",
       "Реоэнцефалография RHEOTEST (500 MDL), ЭХО-ЭГ (350 MDL), ЭЭГ 19 каналов (1600 MDL) или АМП (1600 MDL)",
       "от 350 до 1600 MDL по показаниям"
      ],
      [
       "3. Индивидуальный курс аппаратной реабилитации",
       `Щадящие процедуры (${eqList}) курсом 5 - 10 сеансов`,
       "100 MDL / 30 мин (курс 5 сеансов: 500 MDL)"
      ]
     ]
    }
  : {
     heading: `Plan etapizat de evaluare și recuperare (${p.crumbLabel})`,
     columns: ["Etapa parcursului clinic", "Soluția la Revimed PLUS+ (Chișinău, Ciocana)", "Tarif orientativ"],
     rows: [
      [
       `1. Evaluare clinică inițială (${p.crumbLabel})`,
       "Consultație la Dr. Igor Revenco (medic neurolog și neurochirurg categorie superioară, membru EANS)",
       "500 MDL (consultație repetată: 400 MDL)"
      ],
      [
       "2. Diagnostic funcțional neinvaziv pe loc",
       "Reoencefalografie RHEOTEST (500 MDL), EHO-EG (350 MDL), EEG 19 canale (1600 MDL) sau AMP (1600 MDL)",
       "între 350 și 1600 MDL, la indicația medicului"
      ],
      [
       "3. Curs personalizat de fizioterapie și neuro-recuperare",
       `Proceduri blânde (${eqList}) în serii de 5 - 10 ședințe`,
       "100 MDL / 30 min (curs 5 ședințe: 500 MDL)"
      ]
     ]
    };
}

export function getEnrichedPreparationChecklist(
 p: LocalLandingProps,
 domain: ClinicalDomain
): NonNullable<LocalLandingProps["preparationChecklist"]> {
 if (p.preparationChecklist) return p.preparationChecklist;
 const isRu = p.lang === "ru";

 if (domain === "spine") {
  return isRu
   ? {
      heading: `Как подготовиться к приёму и процедурам (${p.crumbLabel})`,
      steps: [
       "Возьмите с собой диски (CD/USB), плёнки и письменные заключения МРТ, КТ или рентгена позвоночника.",
       "Составьте список принимаемых обезболивающих, миорелаксантов и хронических препаратов.",
       "Наденьте удобную свободную одежду, позволяющую легко осмотреть спину, шею или суставы.",
       "Перед физиопроцедурами (Амплипульс, Электрофорез, магнитотерапия) примите лёгкий приём пищи за 1 - 1,5 часа.",
       "Сообщите врачу о наличии кардиостимулятора, металлических имплантов или аллергии на лекарства."
      ]
     }
   : {
      heading: `Cum vă pregătiți pentru consultație și proceduri (${p.crumbLabel})`,
      steps: [
       "Aduceți CD-ul/filmul și rezultatul scris de la RMN, CT sau radiografiile coloanei vertebrale ori articulațiilor.",
       "Notați medicamentele antiinflamatoare, analgezice sau tratamentele cronice pe care le luați în prezent.",
       "Purtați îmbrăcăminte comodă, care permite examinarea facilă a coloanei și aplicarea electrozilor de fizioterapie.",
       "Luați o masă ușoară cu 60 - 90 de minute înainte de ședințele de Amplipuls, Electroforeză sau Electrosomn.",
       "Informați medicul dacă aveți stimulator cardiac implantat, implanturi metalice sau alergii medicamentoase."
      ]
     };
 }

 return isRu
  ? {
     heading: `Подготовка к консультации и диагностике (${p.crumbLabel})`,
     steps: [
      "Возьмите предыдущие медицинские выписки, результаты анализов крови и заключения МРТ/КТ или УЗИ (если проводились).",
      "Запишите основные симптомы: когда начались, что их усиливает и какие препараты вы уже принимали.",
      "Если планируется ЭЭГ или РЭГ (RHEOTEST), вымойте голову без использования лака, геля или масел для волос.",
      "В день функциональной диагностики воздержитесь от крепкого кофе, энергетиков и курения за 3 - 4 часа до визита.",
      "Приходите за 5 - 10 минут до назначенного времени, чтобы отдохнуть и нормализовать пульс перед осмотром."
     ]
    }
  : {
     heading: `Cum vă pregătiți pentru consultație și diagnostic (${p.crumbLabel})`,
     steps: [
      "Aduceți biletele de externare anterioare, analizele de laborator și rezultatele RMN, CT sau ecografii existente.",
      "Notați cronologia simptomelor (când au apărut, ce le agravează) și lista completă a medicamentelor administrate.",
      "Dacă este programată o investigație EEG sau REG (RHEOTEST), veniți cu părul curat și uscat, fără fixativ, gel sau uleiuri.",
      "Evitați cafeaua tare, băuturile energizante și fumatul cu 3 - 4 ore înainte de evaluarea funcțională.",
      "Prezentați-vă cu 5 - 10 minute înainte de programare pentru a vă liniști respirația și pulsul înainte de examinare."
     ]
    };
}

export function getEnrichedRedFlagsNotice(
 p: LocalLandingProps,
 domain: ClinicalDomain
): NonNullable<LocalLandingProps["redFlagsNotice"]> {
 if (p.redFlagsNotice) return p.redFlagsNotice;
 const isRu = p.lang === "ru";

 if (domain === "spine") {
  return isRu
   ? {
      heading: "Симптомы экстренной нейрохирургической помощи (звоните 112):",
      items: [
       "Внезапная потеря контроля над мочеиспусканием или дефекацией, онемение в области промежности (синдром конского хвоста);",
       "Быстро нарастающая слабость в стопе или ноге («шлёпающая стопа», невозможность встать на носок или пятку);",
       "Острая боль в спине после падения с высоты, ДТП или сопровождающаяся высокой температурой."
      ]
     }
   : {
      heading: "Semnale de alarmă neurochirurgicale care impun apelarea imediată 112:",
      items: [
       "Pierderea bruscă a controlului sfincterian (retenție sau incontinență urinară) ori amorțeală în zona perineală (sindrom de coadă de cal);",
       "Slăbiciune motorie instalată brusc în picior sau labă (imposibilitatea de a merge pe vârfuri sau pe călcâie);",
       "Durere vertebrală severă apărută după un traumatism major sau asociată cu febră înaltă."
      ]
     };
 }

 return isRu
  ? {
     heading: "Когда необходима неотложная медицинская помощь (звоните 112):",
     items: [
      "Внезапная асимметрия лица, нарушение речи, слабость или онемение в руке/ноге с одной стороны тела (признаки инсульта);",
      "Резкая «громоподобная» головная боль, потеря сознания, судорожный приступ или неукротимая рвота;",
      "Острое нарушение зрения, двоение в глазах или внезапная неспособность удержать равновесие."
     ]
    }
  : {
     heading: "Situații de urgență neurologică în care trebuie apelat imediat 112:",
     items: [
      "Asimetrie facială bruscă, tulburare de vorbire, slăbiciune sau amorțeală într-un braț ori picior pe o parte a corpului (suspiciune AVC);",
      "Durere de cap explozivă instalată în secunde, pierderea cunoștinței, criză convulsivă sau vărsături repetate în jet;",
      "Pierderea bruscă a vederii, vedere dublă acută sau imposibilitatea subită de a menține ortostatismul."
     ]
    };
}

export function getEnrichedInteractiveTool(
 p: LocalLandingProps,
 domain: ClinicalDomain
): NonNullable<LocalLandingProps["interactiveTool"]> {
 if (p.interactiveTool) return p.interactiveTool;
 const isRu = p.lang === "ru";
 const prefix = isRu ? "/ru" : "";

 if (domain === "spine") {
  return isRu
   ? {
      href: `${prefix}/aplicatii/teste-si-instrumente/monitor-dureri-spate/`,
      label: "Открыть интерактивный Монитор боли в спине и осанки (2 мин) →",
      desc: "Оцените характер и локализацию боли в позвоночнике перед консультацией нейрохирурга:"
     }
   : {
      href: `${prefix}/aplicatii/teste-si-instrumente/monitor-dureri-spate/`,
      label: "Deschide Monitorul Interactiv pentru Dureri de Spate și Postură (2 min) →",
      desc: "Evaluează rapid localizarea și intensitatea durerii vertebrale înainte de consultația la Dr. Igor Revenco:"
     };
 }

 if (domain === "sleep_autonomic") {
  return isRu
   ? {
      href: `${prefix}/aplicatii/teste-si-instrumente/test-stres-somn-respiratie/`,
      label: "Пройти тест оценки стресса, сна и вегетативного тонуса (2 мин) →",
      desc: "Проверьте уровень нейровегетативной нагрузки и качества сна онлайн:"
     }
   : {
      href: `${prefix}/aplicatii/teste-si-instrumente/test-stres-somn-respiratie/`,
      label: "Completează Testul de Stres, Somn și Echilibru Neurovegetativ (2 min) →",
      desc: "Verifică nivelul de suprasolicitare nervoasă și calitatea somnului înainte de vizita la clinică:"
     };
 }

 if (domain === "vascular_headache") {
  return isRu
   ? {
      href: `${prefix}/aplicatii/teste-si-instrumente/test-risc-cadere-echilibru/`,
      label: "Пройти экспресс-тест равновесия и сосудистых симптомов (2 мин) →",
      desc: "Структурируйте жалобы на головокружение, мигрень или шум в ушах перед приёмом врача:"
     }
   : {
      href: `${prefix}/aplicatii/teste-si-instrumente/test-risc-cadere-echilibru/`,
      label: "Parcurge Testul Orientativ de Echilibru și Simptome Vasculare (2 min) →",
      desc: "Structurează-ți simptomele de amețeală, cefalee sau instabilitate înainte de consultul neurologic:"
     };
 }

 if (domain === "physio_rehab") {
  return isRu
   ? {
      href: `${prefix}/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata/`,
      label: "Открыть Калькулятор персонализированной реабилитации (2 мин) →",
      desc: "Узнайте ориентировочный объём и длительность курса физиотерапии для ваших симптомов:"
     }
   : {
      href: `${prefix}/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata/`,
      label: "Deschide Calculatorul de Recuperare Medicală Personalizată (2 min) →",
      desc: "Estimează structura și durata orientativă a cursului de fizioterapie și reabilitare:"
     };
 }

 return isRu
  ? {
     href: `${prefix}/aplicatii/teste-si-instrumente/screening-neurologic/`,
     label: "Пройти ориентировочный Неврологический скрининг (2 мин) →",
     desc: "Отметьте ключевые симптомы онлайн, чтобы подготовиться к очной консультации д-ра Игоря Ревенко:"
    }
  : {
     href: `${prefix}/aplicatii/teste-si-instrumente/screening-neurologic/`,
     label: "Completează Screening-ul Neurologic Orientativ (2 min) →",
     desc: "Notează-ți rapid simptomele principale pentru a pregăti eficient consultația cu Dr. Igor Revenco:"
    };
}

export function getEnrichedResearchCitations(
 p: LocalLandingProps,
 domain: ClinicalDomain
): NonNullable<LocalLandingProps["researchCitations"]> {
 if (p.researchCitations && p.researchCitations.length > 0) return p.researchCitations;
 const isRu = p.lang === "ru";

 if (domain === "pediatric") {
  return isRu
   ? [
      {
       year: "2024",
       title: "Селективный блокатор глутаматных (NMDA) рецепторов в адъювантной терапии у детей с расстройством аутистического спектра (И. Ревенко, С. Хаджиу)",
       source: "IBN · Конференция USMF, ISSN 2345-1467",
       url: "https://ibn.idsi.md/vizualizare_articol/224130"
      },
      {
       year: "2023",
       title: "Черепно-мозговая травма у детей: радиоиммунологические тесты (И. Ревенко, С. Хаджиу)",
       source: "IBN · Конференция USMF, ISSN 2345-1476",
       url: "https://ibn.idsi.md/vizualizare_articol/194511"
      }
     ]
   : [
      {
       year: "2024",
       title: "Blocantul selectiv al receptorilor de glutamat (NMDA) în terapia adjuvantă la copiii cu tulburarea spectrului autist (I. Revenco, S. Hadjiu)",
       source: "IBN · Conferința USMF, ISSN 2345-1467",
       url: "https://ibn.idsi.md/vizualizare_articol/224130"
      },
      {
       year: "2023",
       title: "Trauma craniocerebrală la copii: teste radioimunologice (I. Revenco, S. Hadjiu)",
       source: "IBN · Conferința USMF, ISSN 2345-1476",
       url: "https://ibn.idsi.md/vizualizare_articol/194511"
      }
     ];
 }

 return isRu
  ? [
     {
      year: "2022",
      title: "Значение нейроэндокринных изменений гипофизарно-тиреоидно-надпочечниковых комплексов (ТТГ, Т3, Т4, кортизол) при черепно-мозговой травме: Монография (Д-р Игорь Ревенко, USMF, 158 с.)",
      source: "DOI 10.5281/zenodo.24532588 · ISBN 978-5-88554-160-2",
      url: "https://doi.org/10.5281/zenodo.24532588"
     },
     {
      year: "2023",
      title: "Черепно-мозговая травма и нейроэндокринная регуляция: радиоиммунологические исследования (И. Ревенко, С. Хаджиу)",
      source: "IBN · Репозиторий USMF, ISSN 2345-1476",
      url: "https://ibn.idsi.md/vizualizare_articol/194511"
     }
    ]
  : [
     {
      year: "2022",
      title: "Semnificația modificărilor neuroendocrine (TSH, T3, T4, cortizol) în patologia neurologică și traumatismul craniocerebral: Monografie (Dr. Igor Revenco, USMF, 158 p.)",
      source: "DOI 10.5281/zenodo.24532588 · ISBN 978-5-88554-160-2",
      url: "https://doi.org/10.5281/zenodo.24532588"
     },
     {
      year: "2023",
      title: "Trauma craniocerebrală și reglarea neuroendocrină: teste radioimunologice (I. Revenco, S. Hadjiu)",
      source: "IBN · Arhiva USMF, ISSN 2345-1476",
      url: "https://ibn.idsi.md/vizualizare_articol/194511"
     }
    ];
}

export function getEnrichedFaqs(p: LocalLandingProps): { q: string; a: string }[] {
 if (p.faqs.length >= 4) return p.faqs;
 const isRu = p.lang === "ru";
 const eqList = p.equipmentCards.map((e) => e.title).join(", ") || (isRu ? "Электросон, Амплипульс, RHEOTEST" : "Electrosomn, Amplipuls, RHEOTEST");

 const extraFaqs = isRu
  ? [
     {
      q: `Сколько стоит консультация и курс лечения (${p.crumbLabel}) в Revimed PLUS+?`,
      a: `Первичная консультация невролога или нейрохирурга д-ра Игоря Ревенко стоит 500 MDL (повторная: 400 MDL). Аппаратные физиопроцедуры (${eqList}) стоят 100 MDL за 30 минут (курс из 5 сеансов: 500 MDL, 10 сеансов: 1000 MDL).`
     },
     {
      q: `Какие обследования взять с собой на приём по поводу «${p.crumbLabel}»?`,
      a: "Рекомендуется взять предыдущие выписки, результаты анализов, а при болях в позвоночнике или головных болях: диски или плёнки МРТ/КТ. При необходимости функциональная диагностика (RHEOTEST 500 MDL, ЭХО-ЭГ 350 MDL, ЭЭГ 1600 MDL) проводится на месте."
     },
     {
      q: `Как записаться на приём в секторе Чеканы (Кишинёв)?`,
      a: "Запись ведётся по телефонам 022 60 50 60 и +373 79 422 908 (Понедельник - Пятница, 09:00 - 15:00). Клиника расположена по адресу: Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2."
     }
    ]
  : [
     {
      q: `Cât costă consultația și procedurile pentru ${p.crumbLabel} la Revimed PLUS+?`,
      a: `Consultația primară la Dr. Igor Revenco (neurolog și neurochirurg categorie superioară) costă 500 MDL (repetată: 400 MDL). Procedurile de fizioterapie cu aparataj (${eqList}) costă 100 MDL / 30 min (curs de 5 ședințe: 500 MDL, 10 ședințe: 1000 MDL).`
     },
     {
      q: `Ce documente sau investigații este bine să aduc la consultație pentru ${p.crumbLabel}?`,
      a: "Este util să aduceți biletele de externare anterioare, lista medicamentelor curente și, dacă există, imaginile RMN sau CT pe CD/film. Investigațiile funcționale suplimentare (RHEOTEST 500 MDL, EHO-EG 350 MDL, EEG 1600 MDL) se pot efectua direct în clinică."
     },
     {
      q: `Cum mă pot programa la Centrul Medical Revimed PLUS+ în Chișinău (Ciocana)?`,
      a: "Programările se fac telefonic la 022 60 50 60 sau +373 79 422 908 (Luni - Vineri, 09:00 - 15:00). Adresa clinicii: Str. Mircea cel Bătrân 13/2, sectorul Ciocana, Chișinău."
     }
    ];

 const existingQuestions = new Set(p.faqs.map((f) => f.q.toLowerCase()));
 const merged = [...p.faqs];
 for (const item of extraFaqs) {
  if (merged.length >= 4) break;
  if (!existingQuestions.has(item.q.toLowerCase())) {
   merged.push(item);
  }
 }
 return merged;
}
