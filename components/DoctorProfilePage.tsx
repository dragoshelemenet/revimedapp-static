import Link from "next/link";
import PageHeading from "./PageHeading";
import { ContentSection } from "./ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { withLang, type Lang } from "@/lib/i18n";

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
      "Doctor în neurochirurgie — studii de doctorat efectuate la Universitatea de Stat de Medicină și Farmacie „Nicolae Testemițanu” (USMF), Chișinău.",
      "Medic de categorie superioară în neurologie, neurochirurgie și neurologie pediatrică.",
      "Membru al Asociației Europene de Neurochirurgie (EANS).",
      "Peste 35 de ani de practică medicală neîntreruptă și peste 20 de ani la conducerea Centrului Medical Revimed PLUS+ din Chișinău."
    ],
    specTitle: "Specializări și Competențe Clinice",
    specItems: [
      "Diagnosticarea și tratamentul afecțiunilor sistemului nervos central și periferic (radiculite, dureri cervicale și lombare, migrene, cefalee, amețeli, stări depresive, anxietate, tulburări de somn).",
      "Consultații de neurochirurgie — evaluarea indicațiilor chirurgicale versus strategii conservatoare și de recuperare.",
      "Neurologie pediatrică (neuropediatrie) — evaluare și urmărire neurologică pentru copii și adolescenți.",
      "Diagnostic funcțional, psihodiagnostic, psihoterapie și programe de neurorecuperare neuro-psiho-somatică.",
      "Integrarea metodelor complementare și de fizioterapie: electroterapie (Electrosomn, Transair, Bi-LENAR), acupunctură, fitoterapie și reabilitare medicală."
    ],
    approachTitle: "Abordarea Terapeutică și Acordul Pacientului",
    approachText: [
      "La Centrul Medical Revimed PLUS+, fiecare plan de tratament este stabilit strict individual. Dr. Igor Revenco analizează simptomele, istoricul medical, investigațiile anterioare, reacțiile la tratamente și obiectivele reale ale pacientului.",
      "Atunci când situația clinică permite în condiții de siguranță, pacientul poate opta între o abordare medicamentoasă clasică sau metode mai blânde, de recuperare, fizioterapie și terapie integrativă. Fiecare pas este explicat clar și se aplică exclusiv cu acordul informat al pacientului."
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
      "Functional diagnostics, psychodiagnostics, psychotherapy, and neuro-psycho-somatic rehabilitation.",
      "Integrative physiotherapy and complementary methods: electrotherapy (Electrosomn, Transair, Bi-LENAR), acupuncture, phytotherapy, and medical recovery."
    ],
    approachTitle: "Therapeutic Approach & Informed Consent",
    approachText: [
      "At Revimed PLUS+ Medical Center, every care plan is tailored individually. Dr. Igor Revenco reviews symptoms, medical history, prior imaging/tests, previous treatment responses, and realistic goals for each patient.",
      "Whenever clinically safe, patients may choose between conventional medical therapy or gentler rehabilitation, physiotherapy, and integrative methods. Every step is explained clearly and carried out with the patient’s informed consent."
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
      "Функциональная диагностика, психодиагностика, психотерапия и нейро-психо-соматическая реабилитация.",
      "Физиотерапия и интегративные методы: электротерапия (Электросон, Трансаир, Би-ЛЕНАР), акупунктура, фитотерапия."
    ],
    approachTitle: "Индивидуальный подход и согласие пациента",
    approachText: [
      "В Revimed PLUS+ план лечения подбирается индивидуально с учётом симптомов, анамнеза, обследований, реакций на предыдущую терапию и целей пациента.",
      "Когда состояние позволяет, пациент может выбрать классический подход или более щадящие методы физиотерапии и восстановления. Каждый этап подробно объясняется и выполняется только с согласия пациента."
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
      "Функціональна діагностика, психодіагностика, психотерапія та нейро-психо-соматична реабілітація.",
      "Фізіотерапія та інтегративні методи: електротерапія (Електросон, Трансаїр, Бі-ЛЕНАР), акупунктура, фітотерапія."
    ],
    approachTitle: "Індивідуальний підхід і згода пацієнта",
    approachText: [
      "У Revimed PLUS+ план лікування підбирається індивідуально з урахуванням симптомів, анамнезу, обстежень, реакцій на попередню терапію та цілей пацієнта.",
      "Коли стан дозволяє, пацієнт може обрати класичний підхід або м’якші методи фізіотерапії та відновлення. Кожен етап детально пояснюється і проводиться лише за згодою пацієнта."
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
    telephone: [site.phone, site.phone2],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Mircea cel Bătrân 13/2",
      addressLocality: "Chișinău",
      addressCountry: "MD"
    },
    sameAs: [
      "https://docdoc.md/",
      "https://doctorneurolog.md/",
      "https://doctorchat.md/",
      "https://top.md/"
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
            <h2>{c.sourcesTitle}</h2>
            <p className="rm-doc-sources-note">{c.sourcesNote}</p>
            <div className="rm-doc-sources-list">
              {c.sources.map((src) => (
                <a
                  key={src.name}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rm-doc-source-item"
                >
                  <strong>{src.name} ↗</strong>
                  <span>{src.desc}</span>
                </a>
              ))}
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
