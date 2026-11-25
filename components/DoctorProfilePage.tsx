import Link from "next/link";
import PageHeading from "./PageHeading";
import { ContentSection } from "./ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { withLang, type Lang } from "@/lib/i18n";

type PublicationItem = {
  year: string;
  type: string;
  title: string;
  authors: string;
  venue: string;
  identifier: string;
  url: string;
  summary: string;
  coverImage?: string;
  reviewers?: string;
};

type ProfileCopy = {
  home: string;
  about: string;
  name: string;
  subtitle: string;
  lead: string;
  callBtn: string;
  contactBtn: string;
  metrics: [string, string][];
  eduTitle: string;
  eduItems: string[];
  specTitle: string;
  specItems: string[];
  approachTitle: string;
  approachText: string[];
  publicationsTitle: string;
  publicationsIntro: string;
  publicationsLinkLabel: string;
  publications: PublicationItem[];
  clinicTitle: string;
  clinicAddressLabel: string;
  clinicAddress: string;
  clinicHoursLabel: string;
  clinicHours: string;
  clinicPhoneLabel: string;
  sourcesTitle: string;
  sourcesNote: string;
  sources: { name: string; url: string; desc: string }[];
  backLabel: string;
};

const copyByLang: Record<Lang, ProfileCopy> = {
  ro: {
    home: "Acasă",
    about: "Despre Noi",
    name: "Dr. Igor Revenco",
    subtitle: "Medic neurolog, neurochirurg și neuropediatru · Categorie superioară",
    lead: "Fondatorul și medicul principal al Centrului Medical Revimed PLUS+ din Chișinău, cu peste 35 de ani de experiență clinică în neurologie, neurochirurgie, neuropediatrie și neurorecuperare.",
    callBtn: "Programează consultație",
    contactBtn: "Vezi contact & hartă",
    metrics: [
      ["35+ ani", "Experiență medicală clinică"],
      ["Categorie superioară", "Medic specialist atestat"],
      ["Dr. în neurochirurgie", "Doctorat USMF „Nicolae Testemițanu”"],
      ["Membru EANS", "Asociația Europeană de Neurochirurgie"]
    ],
    eduTitle: "Studii, Titluri și Afilieri Profesionale",
    eduItems: [
      "Absolvent al Universității de Stat de Medicină și Farmacie „Nicolae Testemițanu” (USMF, 1991), rezidențiat (1991–1994) și doctor în neurochirurgie (USMF, Chișinău).",
      "Medic neurochirurg la Spitalul Clinic Municipal de Copii „V. Ignatenco” (1994–2007) și fondator / medic principal al Centrului Medical Revimed PLUS+ din 2007.",
      "Medic de categorie superioară în neurologie, neurochirurgie și neurologie pediatrică, membru al Asociației Europene de Neurochirurgie (EANS).",
      "Autor a zeci de lucrări științifice în neurologie, neurochirurgie și neuroreabilitare și deținător al brevetului de invenție pentru „Aparatul Revimed vertebro”."
    ],
    specTitle: "Specializări și Competențe Clinice",
    specItems: [
      "Diagnosticarea și tratamentul afecțiunilor sistemului nervos central și periferic (radiculite, dureri cervicale și lombare, migrene, cefalee, amețeli, stări depresive, anxietate, tulburări de somn).",
      "Consultații de neurochirurgie — evaluarea indicațiilor chirurgicale versus strategii conservatoare și de recuperare.",
      "Neurologie pediatrică (neuropediatrie) — evaluare și urmărire neurologică pentru copii și adolescenți.",
      "Diagnostic funcțional, psihodiagnostic și programe de neurorecuperare neuro-psiho-somatică.",
      "Integrarea metodelor complementare și de fizioterapie: electroterapie (Electrosomn, Transair, Bi-LENAR), acupunctură, fitoterapie și reabilitare medicală."
    ],
    approachTitle: "Abordarea Terapeutică și Acordul Pacientului",
    approachText: [
      "La Centrul Medical Revimed PLUS+, fiecare plan de tratament este stabilit strict individual. Dr. Igor Revenco analizează simptomele, istoricul medical, investigațiile anterioare, reacțiile la tratamente și obiectivele reale ale pacientului.",
      "Atunci când situația clinică permite în condiții de siguranță, pacientul poate opta între o abordare medicamentoasă clasică sau metode mai blânde, de recuperare, fizioterapie și terapie integrativă. Fiecare pas este explicat clar și se aplică exclusiv cu acordul informat al pacientului."
    ],
    publicationsTitle: "Publicații științifice",
    publicationsIntro:
      "Lucrări publicate în cadrul USMF „Nicolae Testemițanu”, indexate în IBN și în Repository-ul USMF:",
    publicationsLinkLabel: "Deschide publicația",
    publications: [
      {
        year: "2024",
        type: "Articol · IBN",
        title:
          "Blocantul selectiv al receptorilor de glutamat (N-metil-D-aspartat) – în terapia adjuvantă la copiii cu tulburarea spectrului autist",
        authors: "Igor Revenco (coord. șt. Svetlana Hadjiu, USMF „Nicolae Testemițanu”)",
        venue:
          "Conferința „Cercetarea în biomedicină și sănătate”, Ed. 4, 16–18 octombrie 2024, Chișinău, p. 457",
        identifier: "ISSN 2345-1467",
        url: "https://ibn.idsi.md/vizualizare_articol/224130",
        summary:
          "Studiu clinic pe 80 de copii (4–14 ani) cu tulburări din spectrul autist privind utilizarea blocantului receptorilor NMDA ca terapie adjuvantă."
      },
      {
        year: "2023",
        type: "Articol · IBN",
        title: "Trauma craniocerebrală la copii: teste radioimunologice",
        authors: "Igor Revenco, Svetlana Hadjiu (USMF „Nicolae Testemițanu”; IMSP Institutul Mamei și Copilului)",
        venue:
          "Conferința „Cercetarea în biomedicină și sănătate”, Ed. 1, 18–20 octombrie 2023, Chișinău, p. 392",
        identifier: "ISSN 2345-1476",
        url: "https://ibn.idsi.md/vizualizare_articol/194511",
        summary:
          "Analiza dinamicii hormonului TSH prin teste radioimunologice la copii cu traumatism craniocerebral."
      },
      {
        year: "2022",
        type: "Monografie · USMF · 158 pag.",
        title:
          "Semnificația modificărilor neuroendocrine ale complexelor hipofizartiroid-suprarenale ale TSH, T3, T4, cortizolului în traumatismul craniocerebral la copiii de vârstă școlară: Monografie",
        authors: "Igor Revenco (USMF „Nicolae Testemițanu”)",
        venue: "Chișinău, 2022 · 158 p., 390 referințe bibliografice · Repository USMF",
        identifier: "ISBN 978-5-88554-160-2 · DOI 10.5281/zenodo.24531283",
        url: "https://repository.usmf.md/handle/20.500.12710/27457",
        summary:
          "Monografie despre modificările hormonilor TSH, T3, T4 și cortizol în traumatismele craniocerebrale la copiii de vârstă școlară.",
        coverImage: "/images/monografie-igor-revenco-2022.webp",
        reviewers:
          "Conducător șt.: E. Tofanica (dr. hab.) · Consultant șt.: Acad. D. German · Recenzenți USMF: G. Zapuhlîh (dr. hab., Director IMSP INN), I. Iliciuc (prof. univ.), G. Caradja (conf. univ.)."
      }
    ],
    clinicTitle: "Activitate Clinică și Programări",
    clinicAddressLabel: "Adresă clinică",
    clinicAddress: "Str. Mircea cel Bătrân 13/2, sectorul Ciocana, Chișinău, Republica Moldova",
    clinicHoursLabel: "Program de lucru",
    clinicHours: "Luni – Vineri: 09:00 – 15:00",
    clinicPhoneLabel: "Telefon programări",
    sourcesTitle: "Surse publice și directoare medicale",
    sourcesNote: "Informațiile biografice și profesionale sunt compilate din surse publice și directoare medicale din Republica Moldova:",
    sources: [
      { name: "DocDoc.md", url: "https://docdoc.md/", desc: "Profil medic specialist — neurologie, neurochirurgie, neurologie pediatrică, categorie superioară, 35+ ani experiență." },
      { name: "DoctorNeurolog.md", url: "https://doctorneurolog.md/", desc: "Studii de doctorat în neurochirurgie (USMF „Nicolae Testemițanu”), membru al Asociației Europene de Neurochirurgie, domenii clinice." },
      { name: "DoctorChat.md", url: "https://doctorchat.md/", desc: "Profil medic neurolog și neuropediatru, Chișinău." },
      { name: "Top.md", url: "https://top.md/", desc: "Fișa Centrului Medical Revimed PLUS+ (sectorul Ciocana, diagnostic funcțional și reabilitare neuro-psiho-somatică)." },
      { name: "Revimed PLUS+ (Oficial)", url: "https://revimed.site/despre-noi/", desc: "Prezentarea oficială a clinicii și a echipei medicale." }
    ],
    backLabel: "Înapoi"
  },
  en: {
    home: "Home",
    about: "About",
    name: "Dr. Igor Revenco",
    subtitle: "Neurologist, Neurosurgeon & Pediatric Neurologist · Superior Category",
    lead: "Founder and lead physician of Revimed PLUS+ Medical Center in Chișinău, bringing over 35 years of clinical experience in neurology, neurosurgery, pediatric neurology, and neurorehabilitation.",
    callBtn: "Book a consultation",
    contactBtn: "View contact & map",
    metrics: [
      ["35+ yrs", "Clinical medical experience"],
      ["Superior Category", "Board-certified specialist"],
      ["PhD Neurosurgery", "USMF “Nicolae Testemițanu”"],
      ["EANS Member", "European Assoc. of Neurosurgical Societies"]
    ],
    eduTitle: "Education, Credentials & Professional Memberships",
    eduItems: [
      "PhD in Neurosurgery — doctoral studies completed at “Nicolae Testemițanu” State University of Medicine and Pharmacy (USMF), Chișinău.",
      "Superior-category physician in neurology, neurosurgery, and pediatric neurology.",
      "Member of the European Association of Neurosurgical Societies (EANS).",
      "Over 35 years of continuous medical practice and more than 20 years leading Revimed PLUS+ Medical Center in Chișinău."
    ],
    specTitle: "Specialties & Clinical Expertise",
    specItems: [
      "Diagnosis and treatment of central and peripheral nervous system disorders (radiculitis, cervical & lumbar pain, migraines, headaches, dizziness, depression, anxiety, sleep disorders).",
      "Neurosurgical consultations — evaluating surgical indications versus conservative and rehabilitation pathways.",
      "Pediatric neurology — neurological evaluation and follow-up for children and adolescents.",
      "Functional diagnostics, psychodiagnostics, and neuro-psycho-somatic rehabilitation.",
      "Integrative physiotherapy and complementary methods: electrotherapy (Electrosomn, Transair, Bi-LENAR), acupuncture, phytotherapy, and medical recovery."
    ],
    approachTitle: "Therapeutic Approach & Informed Consent",
    approachText: [
      "At Revimed PLUS+ Medical Center, every care plan is tailored individually. Dr. Igor Revenco reviews symptoms, medical history, prior imaging/tests, previous treatment responses, and realistic goals for each patient.",
      "Whenever clinically safe, patients may choose between conventional medical therapy or gentler rehabilitation, physiotherapy, and integrative methods. Every step is explained clearly and carried out with the patient’s informed consent."
    ],
    publicationsTitle: "Scientific Publications",
    publicationsIntro:
      "Published papers and monograph affiliated with USMF “Nicolae Testemițanu” (IBN and USMF Repository):",
    publicationsLinkLabel: "Open publication",
    publications: [
      {
        year: "2024",
        type: "Paper · IBN",
        title:
          "The selective blocker of glutamate receptors (N-methyl-D-aspartate) – in adjunctive therapy in children with autism spectrum disorder",
        authors: "Igor Revenco (advisor: Svetlana Hadjiu, USMF “Nicolae Testemițanu”)",
        venue:
          "Conference “Research in Biomedicine and Health”, 4th Ed., Oct 16–18, 2024, Chișinău, p. 457",
        identifier: "ISSN 2345-1467",
        url: "https://ibn.idsi.md/vizualizare_articol/224130",
        summary:
          "Clinical study of 80 children (aged 4–14) with autism spectrum disorder on adjunctive NMDA-receptor blocker therapy."
      },
      {
        year: "2023",
        type: "Paper · IBN",
        title: "Cranio-cerebral trauma in children: radioimmunological tests",
        authors: "Igor Revenco, Svetlana Hadjiu (USMF “Nicolae Testemițanu”; Mother and Child Institute)",
        venue:
          "Conference “Research in Biomedicine and Health”, 1st Ed., Oct 18–20, 2023, Chișinău, p. 392",
        identifier: "ISSN 2345-1476",
        url: "https://ibn.idsi.md/vizualizare_articol/194511",
        summary:
          "Radioimmunological analysis of serum TSH dynamics in children with craniocerebral trauma."
      },
      {
        year: "2022",
        type: "Monograph · USMF · 158 pp.",
        title:
          "The significance of neuroendocrine changes in pituitary-thyroid-adrenal complexes (TSH, T3, T4, cortisol) in craniocerebral trauma in school-age children: Monograph",
        authors: "Igor Revenco (USMF “Nicolae Testemițanu”)",
        venue: "Chișinău, 2022 · 158 pp., 390 references · USMF Institutional Repository",
        identifier: "ISBN 978-5-88554-160-2 · DOI 10.5281/zenodo.24531283",
        url: "https://repository.usmf.md/handle/20.500.12710/27457",
        summary:
          "Monograph on TSH, T3, T4, and cortisol changes in school-age children with craniocerebral trauma.",
        coverImage: "/images/monografie-igor-revenco-2022.webp",
        reviewers:
          "Scientific supervisor: E. Tofanica (MD, DSc) · Advisor: Acad. D. German · USMF Reviewers: G. Zapuhlîh (MD, DSc), I. Iliciuc (Prof.), G. Caradja (Assoc. Prof.)."
      }
    ],
    clinicTitle: "Clinical Practice & Appointments",
    clinicAddressLabel: "Clinic address",
    clinicAddress: "Mircea cel Bătrân St. 13/2, Ciocana district, Chișinău, Republic of Moldova",
    clinicHoursLabel: "Working hours",
    clinicHours: "Monday – Friday: 09:00 – 15:00",
    clinicPhoneLabel: "Appointments phone",
    sourcesTitle: "Public Sources & Medical Directories",
    sourcesNote: "Biographical and professional credentials compiled from public medical directories and official clinic records:",
    sources: [
      { name: "DocDoc.md", url: "https://docdoc.md/", desc: "Specialist profile — neurology, neurosurgery, pediatric neurology, superior category, 35+ years experience." },
      { name: "DoctorNeurolog.md", url: "https://doctorneurolog.md/", desc: "PhD in neurosurgery (USMF “Nicolae Testemițanu”), member of the European Association of Neurosurgical Societies." },
      { name: "DoctorChat.md", url: "https://doctorchat.md/", desc: "Neurologist & pediatric neurologist directory listing in Chișinău." },
      { name: "Top.md", url: "https://top.md/", desc: "Revimed PLUS+ Medical Center directory profile (Ciocana branch, functional diagnostics & rehabilitation)." },
      { name: "Revimed PLUS+ (Official)", url: "https://revimed.site/en/despre-noi/", desc: "Official clinic presentation and clinical team overview." }
    ],
    backLabel: "Back"
  },
  ru: {
    home: "Главная",
    about: "О нас",
    name: "Д-р Игорь Ревенко",
    subtitle: "Невролог, нейрохирург и детский невролог · Высшая категория",
    lead: "Основатель и ведущий врач медицинского центра Revimed PLUS+ в Кишинёве с опытом более 35 лет в неврологии, нейрохирургии, детской неврологии и нейрореабилитации.",
    callBtn: "Записаться на приём",
    contactBtn: "Контакты и карта",
    metrics: [
      ["35+ лет", "Клинический медицинский опыт"],
      ["Высшая категория", "Аттестованный специалист"],
      ["Д-р нейрохирургии", "Докторантура USMF им. Н. Тестемицану"],
      ["Член EANS", "Европейская ассоциация нейрохирургов"]
    ],
    eduTitle: "Образование, звания и членство",
    eduItems: [
      "Доктор нейрохирургии — докторантура в Государственном университете медицины и фармации им. Николае Тестемицану (USMF), Кишинёв.",
      "Врач высшей категории по неврологии, нейрохирургии и детской неврологии.",
      "Член Европейской ассоциации нейрохирургов (EANS).",
      "Более 35 лет врачебной практики и свыше 20 лет работы во главе центра Revimed PLUS+ в Кишинёве."
    ],
    specTitle: "Специализация и клинические компетенции",
    specItems: [
      "Диагностика и лечение заболеваний центральной и периферической нервной системы (радикулиты, боли в шее и пояснице, мигрени, головокружение, депрессивные состояния, тревога, нарушения сна).",
      "Консультации нейрохирурга — оценка показаний к операции или консервативному восстановлению.",
      "Детская неврология (нейропедиатрия) — приём и наблюдение детей.",
      "Функциональная диагностика, психодиагностика и нейро-психо-соматическая реабилитация.",
      "Физиотерапия и интегративные методы: электротерапия (Электросон, Трансаир, Би-ЛЕНАР), акупунктура, фитотерапия."
    ],
    approachTitle: "Индивидуальный подход и согласие пациента",
    approachText: [
      "В Revimed PLUS+ план лечения подбирается индивидуально с учётом симптомов, анамнеза, обследований, реакций на предыдущую терапию и целей пациента.",
      "Когда состояние позволяет, пациент может выбрать классический подход или более щадящие методы физиотерапии и восстановления. Каждый этап подробно объясняется и выполняется только с согласия пациента."
    ],
    publicationsTitle: "Научные публикации",
    publicationsIntro:
      "Работы, опубликованные в рамках USMF им. Н. Тестемицану (архивы IBN и репозиторий USMF):",
    publicationsLinkLabel: "Открыть публикацию",
    publications: [
      {
        year: "2024",
        type: "Статья · IBN",
        title:
          "Селективный блокатор глутаматных (NMDA) рецепторов в адъювантной терапии у детей с расстройством аутистического спектра",
        authors: "Игорь Ревенко (науч. рук. Светлана Хаджиу, USMF им. Н. Тестемицану)",
        venue:
          "Конференция «Cercetarea în biomedicină și sănătate», 4-е изд., 16–18 октября 2024, Кишинёв, с. 457",
        identifier: "ISSN 2345-1467",
        url: "https://ibn.idsi.md/vizualizare_articol/224130",
        summary:
          "Клиническое исследование с участием 80 детей (4–14 лет) с расстройством аутистического спектра о применении блокатора NMDA-рецепторов в адъювантной терапии."
      },
      {
        year: "2023",
        type: "Статья · IBN",
        title: "Черепно-мозговая травма у детей: радиоиммунологические тесты",
        authors: "Игорь Ревенко, Светлана Хаджиу (USMF им. Н. Тестемицану; Институт матери и ребёнка)",
        venue:
          "Конференция «Cercetarea în biomedicină și sănătate», 1-е изд., 18–20 октября 2023, Кишинёв, с. 392",
        identifier: "ISSN 2345-1476",
        url: "https://ibn.idsi.md/vizualizare_articol/194511",
        summary:
          "Анализ динамики уровня ТТГ с помощью радиоиммунологических тестов у детей с черепно-мозговой травмой."
      },
      {
        year: "2022",
        type: "Монография · USMF · 158 с.",
        title:
          "Значение нейроэндокринных изменений гипофизарно-тиреоидно-надпочечниковых комплексов (ТТГ, Т3, Т4, кортизол) при черепно-мозговой травме у детей школьного возраста: Монография",
        authors: "Игорь Ревенко (USMF им. Н. Тестемицану)",
        venue: "Кишинёв, 2022 · 158 с., 390 источников · Репозиторий USMF",
        identifier: "ISBN 978-5-88554-160-2 · DOI 10.5281/zenodo.24531283",
        url: "https://repository.usmf.md/handle/20.500.12710/27457",
        summary:
          "Монография об изменениях гормонов ТТГ, Т3, Т4 и кортизола при черепно-мозговых травмах у детей школьного возраста.",
        coverImage: "/images/monografie-igor-revenco-2022.webp",
        reviewers:
          "Науч. рук.: Е. Тофаника (д.х.м.н.) · Консультант: акад. Д. Герман · Рецензенты USMF: Г. Запухлых (д.х.м.н.), И. Иличюк (проф.), Г. Караджа (доц.)."
      }
    ],
    clinicTitle: "Клиническая практика и запись",
    clinicAddressLabel: "Адрес клиники",
    clinicAddress: "ул. Мирча чел Бэтрын 13/2, сектор Чеканы, Кишинёв, Молдова",
    clinicHoursLabel: "График работы",
    clinicHours: "Понедельник – Пятница: 09:00 – 15:00",
    clinicPhoneLabel: "Телефон для записи",
    sourcesTitle: "Открытые источники и медицинские каталоги",
    sourcesNote: "Профессиональные сведения собраны из открытых медицинских каталогов и официальных материалов клиники:",
    sources: [
      { name: "DocDoc.md", url: "https://docdoc.md/", desc: "Профиль врача — неврология, нейрохирургия, детская неврология, высшая категория, стаж 35+ лет." },
      { name: "DoctorNeurolog.md", url: "https://doctorneurolog.md/", desc: "Доктор нейрохирургии (USMF), член Европейской ассоциации нейрохирургов." },
      { name: "DoctorChat.md", url: "https://doctorchat.md/", desc: "Профиль невролога и детского невролога в Кишинёве." },
      { name: "Top.md", url: "https://top.md/", desc: "Карточка медицинского центра Revimed PLUS+ (Чеканы, диагностика и реабилитация)." },
      { name: "Revimed PLUS+ (Официально)", url: "https://revimed.site/ru/despre-noi/", desc: "Официальный сайт центра Revimed PLUS+." }
    ],
    backLabel: "Назад"
  },
  ua: {
    home: "Головна",
    about: "Про нас",
    name: "Д-р Ігор Ревенко",
    subtitle: "Невролог, нейрохірург та дитячий невролог · Вища категорія",
    lead: "Засновник і провідний лікар медичного центру Revimed PLUS+ у Кишиневі з досвідом понад 35 років у неврології, нейрохірургії, дитячій неврології та нейрореабілітації.",
    callBtn: "Записатися на прийом",
    contactBtn: "Контакти та карта",
    metrics: [
      ["35+ років", "Клінічний медичний досвід"],
      ["Вища категорія", "Атестований спеціаліст"],
      ["Д-р нейрохірургії", "Докторантура USMF ім. М. Тестеміцану"],
      ["Член EANS", "Європейська асоціація нейрохірургів"]
    ],
    eduTitle: "Освіта, звання та членство",
    eduItems: [
      "Доктор нейрохірургії — докторантура в Державному університеті медицини та фармації ім. Ніколае Тестеміцану (USMF), Кишинів.",
      "Лікар вищої категорії з неврології, нейрохірургії та дитячої неврології.",
      "Член Європейської асоціації нейрохірургів (EANS).",
      "Понад 35 років лікарської практики та понад 20 років керівництва центром Revimed PLUS+ у Кишиневі."
    ],
    specTitle: "Спеціалізація та клінічні компетенції",
    specItems: [
      "Діагностика та лікування захворювань центральної та периферичної нервової системи (радикуліти, болі в шиї та попереку, мігрені, запаморочення, депресивні стани, тривога, порушення сну).",
      "Консультації нейрохірурга — оцінка показань до операції або консервативного відновлення.",
      "Дитяча неврологія (нейропедіатрія) — прийом і спостереження дітей.",
      "Функціональна діагностика, психодіагностика та нейро-психо-соматична реабілітація.",
      "Фізіотерапія та інтегративні методи: електротерапія (Електросон, Трансаїр, Бі-ЛЕНАР), акупунктура, фітотерапія."
    ],
    approachTitle: "Індивідуальний підхід і згода пацієнта",
    approachText: [
      "У Revimed PLUS+ план лікування підбирається індивідуально з урахуванням симптомів, анамнезу, обстежень, реакцій на попередню терапію та цілей пацієнта.",
      "Коли стан дозволяє, пацієнт може обрати класичний підхід або м’якші методи фізіотерапії та відновлення. Кожен етап детально пояснюється і проводиться лише за згодою пацієнта."
    ],
    publicationsTitle: "Наукові публікації",
    publicationsIntro:
      "Праці, опубліковані в межах USMF ім. М. Тестеміцану (архіви IBN та репозиторій USMF):",
    publicationsLinkLabel: "Відкрити публікацію",
    publications: [
      {
        year: "2024",
        type: "Стаття · IBN",
        title:
          "Селективний блокатор глутаматних (NMDA) рецепторів в ад’ювантній терапії у дітей із розладом аутистичного спектра",
        authors: "Ігор Ревенко (наук. кер. Світлана Хаджіу, USMF ім. М. Тестеміцану)",
        venue:
          "Конференція «Cercetarea în biomedicină și sănătate», 4-те вид., 16–18 жовтня 2024, Кишинів, с. 457",
        identifier: "ISSN 2345-1467",
        url: "https://ibn.idsi.md/vizualizare_articol/224130",
        summary:
          "Клінічне дослідження 80 дітей (4–14 років) із розладом аутистичного спектра щодо застосування блокатора NMDA-рецепторів в ад’ювантній терапії."
      },
      {
        year: "2023",
        type: "Стаття · IBN",
        title: "Черепно-мозкова травма у дітей: радіоімунологічні тести",
        authors: "Ігор Ревенко, Світлана Хаджіу (USMF ім. М. Тестеміцану; Інститут матері та дитини)",
        venue:
          "Конференція «Cercetarea în biomedicină și sănătate», 1-ше вид., 18–20 жовтня 2023, Кишинів, с. 392",
        identifier: "ISSN 2345-1476",
        url: "https://ibn.idsi.md/vizualizare_articol/194511",
        summary:
          "Аналіз динаміки рівня ТТГ за допомогою радіоімунологічних тестів у дітей із черепно-мозковою травмою."
      },
      {
        year: "2022",
        type: "Монографія · USMF · 158 с.",
        title:
          "Значення нейроендокринних змін гіпофізарно-тиреоїдно-наднирникових комплексів (ТТГ, Т3, Т4, кортизол) при черепно-мозковій травмі у дітей шкільного віку: Монографія",
        authors: "Ігор Ревенко (USMF ім. М. Тестеміцану)",
        venue: "Кишинів, 2022 · 158 с., 390 джерел · Репозиторій USMF",
        identifier: "ISBN 978-5-88554-160-2 · DOI 10.5281/zenodo.24531283",
        url: "https://repository.usmf.md/handle/20.500.12710/27457",
        summary:
          "Монографія про зміни гормонів ТТГ, Т3, Т4 і кортизолу при черепно-мозкових травмах у дітей шкільного віку.",
        coverImage: "/images/monografie-igor-revenco-2022.webp",
        reviewers:
          "Наук. кер.: Є. Тофаніка (д.х.м.н.) · Консультант: акад. Д. Герман · Рецензенти USMF: Г. Запухлих (д.х.м.н.), І. Ілічук (проф.), Г. Караджа (доц.)."
      }
    ],
    clinicTitle: "Клінічна практика та запис",
    clinicAddressLabel: "Адреса клініки",
    clinicAddress: "вул. Мірча чел Бетрин 13/2, сектор Чокана, Кишинів, Молдова",
    clinicHoursLabel: "Графік роботи",
    clinicHours: "Понеділок – П’ятниця: 09:00 – 15:00",
    clinicPhoneLabel: "Телефон для запису",
    sourcesTitle: "Відкриті джерела та медичні каталоги",
    sourcesNote: "Професійні відомості зібрані з відкритих медичних каталогів та офіційних матеріалів клініки:",
    sources: [
      { name: "DocDoc.md", url: "https://docdoc.md/", desc: "Профіль лікаря — неврологія, нейрохірургія, дитяча неврологія, вища категорія, досвід 35+ років." },
      { name: "DoctorNeurolog.md", url: "https://doctorneurolog.md/", desc: "Доктор нейрохірургії (USMF), член Європейської асоціації нейрохірургів." },
      { name: "DoctorChat.md", url: "https://doctorchat.md/", desc: "Профіль невролога та дитячого невролога в Кишиневі." },
      { name: "Top.md", url: "https://top.md/", desc: "Картка медичного центру Revimed PLUS+ (Чокана, діагностика та реабілітація)." },
      { name: "Revimed PLUS+ (Офіційно)", url: "https://revimed.site/ua/despre-noi/", desc: "Офіційний сайт центру Revimed PLUS+." }
    ],
    backLabel: "Назад"
  }
};

export default function DoctorProfilePage({ lang = "ro" }: { lang?: Lang }) {
  const c = copyByLang[lang] || copyByLang.ro;
  const profilePath = `${withLang("/dr-igor-revenco", lang)}/`;

  const physicianJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/dr-igor-revenco/#physician`,
    name: "Dr. Igor Revenco",
    jobTitle: c.subtitle,
    description: c.lead,
    url: absoluteUrl(profilePath),
    image: absoluteUrl("/images/about-us.webp"),
    medicalSpecialty: ["Neurology", "Neurosurgery", "Pediatric"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitatea de Stat de Medicină și Farmacie „Nicolae Testemițanu” (USMF)"
    },
    memberOf: {
      "@type": "Organization",
      name: "European Association of Neurosurgical Societies (EANS)"
    },
    worksFor: {
      "@id": `${siteUrl}/#medical-clinic`
    },
    sameAs: [
      "https://orcid.org/0009-0005-9098-8175",
      "https://www.youtube.com/@revimedpluschisinau"
    ],
    telephone: [site.phone, site.phone2],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Mircea cel Bătrân 13/2",
      addressLocality: "Chișinău",
      addressCountry: "MD"
    }
  };

  const publicationsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ScholarlyArticle",
        name: "Blocantul selectiv al receptorilor de glutamat (N-metil-D-aspartat) – în terapia adjuvantă la copiii cu tulburarea spectrului autist",
        alternateName:
          "The selective blocker of glutamate receptors (n-methyl-d-aspartate) – in adjunctive therapy in children with autism spectrum disorder",
        datePublished: "2024-10-16",
        url: "https://ibn.idsi.md/vizualizare_articol/224130",
        isPartOf: {
          "@type": "PublicationIssue",
          name: "Conferința „Cercetarea în biomedicină și sănătate: calitate, excelență și performanță”, Ed. 4",
          issn: "2345-1467"
        },
        pagination: "457",
        author: { "@id": `${siteUrl}/dr-igor-revenco/#physician`, "@type": "Person", name: "Dr. Igor Revenco" }
      },
      {
        "@type": "ScholarlyArticle",
        name: "Trauma craniocerebrală la copii: teste radioimunologice",
        alternateName: "Cranio-cerebral trauma in children: radioimmunological tests",
        datePublished: "2023-10-18",
        url: "https://ibn.idsi.md/vizualizare_articol/194511",
        isPartOf: {
          "@type": "PublicationIssue",
          name: "Conferința „Cercetarea în biomedicină și sănătate: calitate, excelență și performanță”, Ed. 1",
          issn: "2345-1476"
        },
        pagination: "392",
        author: [
          { "@id": `${siteUrl}/dr-igor-revenco/#physician`, "@type": "Person", name: "Dr. Igor Revenco" },
          { "@type": "Person", name: "Svetlana Hadjiu" }
        ]
      },
      {
        "@type": "Book",
        name: "Semnificația modificărilor neuroendocrine ale complexelor hipofizartiroid-suprarenale ale TSH, T3, T4, cortizolului în traumatismul craniocerebral la copiii de vârstă școlară: Monografie",
        datePublished: "2022-12-26",
        isbn: "978-5-88554-160-2",
        numberOfPages: 158,
        image: absoluteUrl("/images/monografie-igor-revenco-2022.webp"),
        url: "https://repository.usmf.md/handle/20.500.12710/27457",
        sameAs: [
          "https://doi.org/10.5281/zenodo.24531283",
          "https://zenodo.org/records/24531283"
        ],
        publisher: {
          "@type": "EducationalOrganization",
          name: "Universitatea de Stat de Medicină și Farmacie „Nicolae Testemițanu” (USMF)"
        },
        author: { "@id": `${siteUrl}/dr-igor-revenco/#physician`, "@type": "Person", name: "Dr. Igor Revenco" }
      }
    ]
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: c.home, path: withLang("/", lang) },
          { name: c.about, path: `${withLang("/despre-noi", lang)}/` },
          { name: c.name, path: profilePath }
        ])}
      />
      <JsonLd data={physicianJsonLd} />
      <JsonLd data={publicationsJsonLd} />

      <PageHeading>
        <div>
          <p>
            <Link href={withLang("/", lang)}>{c.home}</Link> /{" "}
            <Link href={withLang("/despre-noi", lang)}>{c.about}</Link> / {c.name}
          </p>
          <h1>{c.name}</h1>
          <p>{c.subtitle}</p>
        </div>
      </PageHeading>

      <ContentSection>
        <div className="rm-doc-profile">
          <div className="rm-doc-hero-grid">
            <div className="rm-doc-photo-card" data-glass-card>
              <img
                src="/images/about-us.webp"
                alt={`${c.name} — ${c.subtitle}`}
                width={380}
                height={420}
                decoding="async"
              />
            </div>

            <div className="rm-doc-summary-card" data-glass-card>
              <p className="rm-doc-lead">{c.lead}</p>

              <div className="rm-doc-metrics">
                {c.metrics.map(([val, desc]) => (
                  <div key={val} className="rm-doc-metric" data-glass-card>
                    <strong>{val}</strong>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>

              <div className="rm-doc-actions">
                <a className="blueBtn" href={`tel:${site.phone2.replaceAll(" ", "")}`}>
                  {c.callBtn}
                </a>
                <Link className="softBtn" href={withLang("/contact", lang)}>
                  {c.contactBtn}
                </Link>
              </div>
            </div>
          </div>

          <div className="rm-doc-sections-grid">
            <section className="rm-doc-glass-block" data-glass-card>
              <h2>{c.eduTitle}</h2>
              <ul>
                {c.eduItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rm-doc-glass-block" data-glass-card>
              <h2>{c.specTitle}</h2>
              <ul>
                {c.specItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="rm-doc-glass-block" data-glass-card>
            <h2>{c.approachTitle}</h2>
            {c.approachText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="rm-doc-glass-block" data-glass-card>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
              <h2 style={{ margin: 0 }}>{c.publicationsTitle}</h2>
              <a
                href="https://orcid.org/0009-0005-9098-8175"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
                style={{ fontWeight: 600 }}
              >
                ORCID: 0009-0005-9098-8175 ↗
              </a>
            </div>
            <p style={{ marginTop: 10, marginBottom: 16 }}>{c.publicationsIntro}</p>
            <div style={{ display: "grid", gap: 14 }}>
              {c.publications.map((pub) => (
                <article
                  key={pub.url}
                  data-glass-card
                  style={{
                    padding: "16px 18px",
                    borderRadius: 16,
                    background: "rgba(255, 255, 255, 0.56)",
                    border: "1px solid rgba(25, 118, 210, 0.14)",
                    display: pub.coverImage ? "flex" : "block",
                    flexWrap: "wrap",
                    gap: 18,
                    alignItems: "flex-start"
                  }}
                >
                  {pub.coverImage && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: "0 0 132px", maxWidth: 132, display: "block" }}
                    >
                      <img
                        src={pub.coverImage}
                        alt={`${pub.title} — ${c.name}`}
                        width={480}
                        height={643}
                        loading="lazy"
                        decoding="async"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: 10,
                          boxShadow: "0 10px 24px rgba(11, 35, 66, 0.18)"
                        }}
                      />
                    </a>
                  )}
                  <div style={{ flex: "1 1 260px", minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        alignItems: "center",
                        marginBottom: 8,
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#1565c0"
                      }}
                    >
                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: 999,
                          background: "rgba(25, 118, 210, 0.12)"
                        }}
                      >
                        {pub.year}
                      </span>
                      <span>{pub.type}</span>
                      <span style={{ opacity: 0.72 }}>· {pub.identifier}</span>
                    </div>
                    <h3 style={{ fontSize: "1.04rem", lineHeight: 1.4, margin: "0 0 6px" }}>
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0f2744", textDecoration: "none" }}
                      >
                        {pub.title}
                      </a>
                    </h3>
                    <p style={{ margin: "0 0 6px", fontSize: "0.9rem", color: "#2d4865" }}>
                      <strong>{pub.authors}</strong> — {pub.venue}
                    </p>
                    <p style={{ margin: "0 0 8px", fontSize: "0.92rem", lineHeight: 1.55 }}>{pub.summary}</p>
                    {pub.reviewers && (
                      <p style={{ margin: "0 0 10px", fontSize: "0.84rem", lineHeight: 1.5, color: "#486581" }}>
                        {pub.reviewers}
                      </p>
                    )}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {pub.coverImage ? (
                        <>
                          <a
                            href="https://doi.org/10.5281/zenodo.24531283"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                          >
                            {lang === "ru"
                              ? "Читать книгу (DOI · Zenodo) ↗"
                              : lang === "ua"
                                ? "Читати книгу (DOI · Zenodo) ↗"
                                : lang === "en"
                                  ? "Read Monograph (DOI · Zenodo) ↗"
                                  : "Citește cartea (DOI · Zenodo) ↗"}
                          </a>
                          <a
                            href="https://zenodo.org/records/24531283/files/Revenco%20Igor__Carte_CleanCover.pdf?download=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm"
                          >
                            {lang === "ru"
                              ? "Скачать PDF (158 с.) ↓"
                              : lang === "ua"
                                ? "Завантажити PDF (158 с.) ↓"
                                : lang === "en"
                                  ? "Download PDF (158 pp.) ↓"
                                  : "Descarcă PDF (158 pag.) ↓"}
                          </a>
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm"
                          >
                            Repository USMF ↗
                          </a>
                        </>
                      ) : (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          {c.publicationsLinkLabel} ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rm-doc-glass-block" data-glass-card>
            <h2>{c.clinicTitle}</h2>
            <div className="rm-doc-clinic-meta">
              <div>
                <strong>{c.clinicAddressLabel}</strong>
                <span>{c.clinicAddress}</span>
              </div>
              <div>
                <strong>{c.clinicHoursLabel}</strong>
                <span>{c.clinicHours}</span>
              </div>
              <div>
                <strong>{c.clinicPhoneLabel}</strong>
                <span>
                  <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a> ·{" "}
                  <a href={`tel:${site.phone2.replaceAll(" ", "")}`}>{site.phone2}</a>
                </span>
              </div>
            </div>
          </section>

          <section className="rm-doc-glass-block" data-glass-card>
            <h2>
              {lang === "ru"
                ? "Основные направления и консультации в Кишинёве"
                : lang === "en"
                  ? "Clinical Specialties & Dedicated Guides in Chișinău"
                  : lang === "ua"
                    ? "Основні клінічні напрямки у Кишиневі"
                    : "Direcții clinice și pagini dedicate în Chișinău"}
            </h2>
            <div className="rm-quick-links-bar" style={{ marginTop: 10 }}>
              {lang === "ru" ? (
                <>
                  <Link href="/ru/nevrolog-kishinev/" className="btn btn-outline-primary btn-sm">Невролог Кишинёв</Link>
                  <Link href="/ru/neyrohirurg-kishinev/" className="btn btn-outline-primary btn-sm">Нейрохирург Кишинёв</Link>
                  <Link href="/ru/detskiy-nevrolog-kishinev/" className="btn btn-outline-primary btn-sm">Детский невролог</Link>
                  <Link href="/ru/epilepsiya-kishinev/" className="btn btn-outline-primary btn-sm">Эпилепсия и ЭЭГ</Link>
                  <Link href="/ru/nevralgiya-neyropatiya-kishinev/" className="btn btn-outline-primary btn-sm">Невралгия и нейропатия</Link>
                  <Link href="/ru/igloukalyvanie-kishinev/" className="btn btn-outline-primary btn-sm">Иглоукалывание</Link>
                  <Link href="/ru/elektroforez-amplipuls-kishinev/" className="btn btn-outline-primary btn-sm">Электрофорез и Амплипульс</Link>
                  <Link href="/ru/kinezoterapiya-kishinev/" className="btn btn-outline-primary btn-sm">Кинезиотерапия</Link>
                </>
              ) : (
                <>
                  <Link href="/neurolog-ciocana-chisinau/" className="btn btn-outline-primary btn-sm">Neurolog Ciocana</Link>
                  <Link href="/ameteli-vertij-chisinau/" className="btn btn-outline-primary btn-sm">Amețeli &amp; Vertij</Link>
                  <Link href="/epilepsie-convulsii-chisinau/" className="btn btn-outline-primary btn-sm">Epilepsie &amp; EEG</Link>
                  <Link href="/nevralgie-neuropatie-chisinau/" className="btn btn-outline-primary btn-sm">Nevralgie &amp; Neuropatie</Link>
                  <Link href="/insomnie-tratament-chisinau/" className="btn btn-outline-primary btn-sm">Tratament Insomnie</Link>
                  <Link href="/osteocondroza-cervicala-chisinau/" className="btn btn-outline-primary btn-sm">Osteocondroză Cervicală</Link>
                  <Link href="/recuperare-dupa-avc-chisinau/" className="btn btn-outline-primary btn-sm">Recuperare post-AVC</Link>
                  <Link href="/acupunctura-reflexoterapie-chisinau/" className="btn btn-outline-primary btn-sm">Acupunctură &amp; Reflexoterapie</Link>
                </>
              )}
            </div>
          </section>

          <div>
            <Link href={withLang("/", lang)} className="rm-back-link" aria-label={c.backLabel}>
              ←
            </Link>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
