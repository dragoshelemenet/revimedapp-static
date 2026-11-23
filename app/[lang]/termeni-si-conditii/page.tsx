import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeading from "@/components/PageHeading";
import { isLang, t, withLang, type Lang } from "@/lib/i18n";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamicParams = false;

const staticLangs: Exclude<Lang, "ro">[] = ["en", "ru", "ua"];

export function generateStaticParams() {
 return staticLangs.map((lang) => ({ lang }));
}

type Section = { h2: string; paragraphs: string[]; bullets?: string[] };

const termsCopy: Record<Exclude<Lang, "ro">, {
 title: string;
 metaDesc: string;
 h1: string;
 lead: string;
 sections: Section[];
 priorityNote: string;
 cookiesBtn: string;
 faqBtn: string;
 contactBtn: string;
}> = {
 en: {
  title: "Terms & Conditions · Limitation of Liability",
  metaDesc: "Terms and conditions, disclaimer of warranties, photo removal policy, and limitation of liability for Revimed PLUS+ Medical Center Chișinău.",
  h1: "Terms & Conditions · Limitation of Liability",
  lead: "Terms of use, disclaimer of warranties, and full limitation of liability for the website, physicians, and team of Revimed PLUS+.",
  sections: [
   {
    h2: "1. General Operator Information & Strictly Indicative Nature",
    paragraphs: [
     "The website revimed.site is an informational and indicative presentation platform of Revimed PLUS+ Medical Center (S.R.L. “REVIMED PLUS”, Tax ID / IDNO 1011600011964, registered on 31.03.2011, Chișinău, Ciocana sector, Mircea cel Bătrân Blvd. 13/2, MD-2044, Republic of Moldova, founder and coordinating physician: Dr. Igor Revenco, tel. 022 60 50 60 / +373 79 422 908).",
     "By accessing and using this website, you fully accept these Terms and Conditions. Browsing the website, reading articles, using interactive self-assessment tools, or calling for general information does not constitute a medical act, does not create a doctor–patient relationship, and does not represent a binding public offer or telemedicine contract."
    ]
   },
   {
    h2: "2. Disclaimer of Warranties & No Guarantee of Real-Time Physical Availability",
    paragraphs: [
     "The entire website and all information published on it (including service descriptions, procedures, medical devices, equipment, prices, hours, photographs, videos, blog articles, and interactive tools) are provided “as is”, without any express or implied warranty.",
     "Website information does not guarantee physical presence or real-time availability at the clinic: Listing a service, device, price, schedule, staff member, or visual element in photos on the website does not guarantee that it is available, active, or physically present at the clinic at any given time. Actual clinic equipment, services, personnel, hours, and fees may be changed, suspended, or replaced at any time without prior website update. Only information confirmed directly at the clinic reception on the day of your visit is valid."
    ]
   },
   {
    h2: "3. Full Limitation of Liability for Clinic, Dr. Igor Revenco, Website & Developer",
    paragraphs: [
     "To the maximum extent permitted by law, Revimed PLUS+ Medical Center (S.R.L. “REVIMED PLUS”), Dr. Igor Revenco, clinic physicians and staff, website owners, content authors, and the technical web development team (wsod.cloud) are fully exonerated from any legal, civil, administrative, medical, or financial liability toward any visitor, patient, or third party for:"
    ],
    bullets: [
     "any difference or discrepancy between the information, prices, devices, or photographs on the website and the actual situation at the clinic premises;",
     "any decision made based on website texts, articles, tests, calculators, or exercises, including self-medication, altering a prescribed treatment, or delaying a medical consultation;",
     "any expectation of achieving a specific clinical outcome or cure (clinical results vary individually and are never guaranteed);",
     "any typographical errors, omissions, update delays, translation differences between RO / EN / RU / UA (the Romanian version and reception confirmation prevail), or technical interruptions."
    ]
   },
   {
    h2: "4. Not a Substitute for Medical Consultation · Medical Emergencies (112)",
    paragraphs: [
     "No material on this website (including articles on neurology, spine health, phytotherapy, nutrition, general prevention, or self-assessment tools) constitutes medical diagnosis, prescription, or treatment. Revimed PLUS+ Medical Center does not provide oncology treatment and does not operate as an emergency medical service.",
     "In case of a medical emergency (acute chest pain, sudden paralysis or numbness, speech disturbance, active seizures, loss of consciousness, or suspected stroke), call 112 immediately."
    ]
   },
   {
    h2: "5. Photographs, Videos, Consent & Immediate Removal Upon Request",
    paragraphs: [
     "Photographs and videos published on the website serve a strictly illustrative and historical presentation purpose. They do not guarantee that individuals, equipment, or spaces shown in the images are currently identical at the clinic.",
     "All gallery photographs and videos were taken openly inside the center with the consent of those present, without any person expressing objection or refusal to be photographed or filmed at the time.",
     "Immediate photo removal upon simple request: We fully respect personal image and privacy rights. If any person appearing in a photograph or video on the website wishes to have their image removed or anonymized, they may simply notify us by phone at 022 60 50 60 / +373 79 422 908 or at the clinic reception, and the image will be removed immediately and amicably without further formalities."
    ]
   },
   {
    h2: "6. Indicative Prices, Currency Converter & Reviews",
    paragraphs: [
     "All prices displayed on the website and currency conversions (EUR, RON, USD, UAH) are strictly indicative, do not constitute a binding public offer, and do not guarantee the final fee. All payments are made exclusively in MDL at the clinic reception according to the official price list in force at the time of service.",
     "Published patient reviews are anonymized (initials), reflect subjective individual experiences, and do not guarantee identical results for other patients."
    ]
   },
   {
    h2: "7. Phytotherapy, Supplements & Complementary Procedures",
    paragraphs: [
     "Any mention of herbs, supplements, exercises, or physiotherapy procedures is purely informational; contraindications and drug interactions may exist (pregnancy, breastfeeding, epilepsy, pacemaker, cardiac, hepatic, renal, or oncological conditions). Consultation with a physician is mandatory."
    ]
   },
   {
    h2: "8. Copyright & Governing Law",
    paragraphs: [
     "Website content is protected under the laws of the Republic of Moldova. Any inquiry or request (including updating information or removing a photograph) is resolved promptly and amicably by calling 022 60 50 60."
    ]
   }
  ],
  priorityNote: "In case of any discrepancy of interpretation between language versions, the Romanian version (/termeni-si-conditii/) prevails under the laws of the Republic of Moldova.",
  cookiesBtn: "Cookies & Privacy",
  faqBtn: "FAQ",
  contactBtn: "Contact"
 },
 ru: {
  title: "Условия использования · Ограничение ответственности",
  metaDesc: "Условия использования, отсутствие гарантий, удаление фото по запросу и ограничение ответственности для сайта медицинского центра Revimed PLUS+ Кишинёв.",
  h1: "Условия использования · Ограничение ответственности",
  lead: "Правила пользования сайтом, отсутствие гарантий и полное освобождение от ответственности для клиники, врачей и команды Revimed PLUS+.",
  sections: [
   {
    h2: "1. Общие сведения об операторе и справочный характер сайта",
    paragraphs: [
     "Сайт revimed.site является информационно-справочной платформой медицинского центра Revimed PLUS+ (S.R.L. «REVIMED PLUS», IDNO 1011600011964, дата регистрации: 31.03.2011, мун. Кишинёв, сектор Чеканы, бул. Мирча чел Бэтрын 13/2, MD-2044, Республика Молдова, основатель и главный врач: д-р Игорь Ревенко, тел. 022 60 50 60 / +373 79 422 908).",
     "Посещая и используя данный сайт, вы полностью соглашаетесь с настоящими Условиями. Просмотр страниц, чтение статей, использование интерактивных тестов или справочный телефонный звонок не являются медицинской услугой, не создают отношений «врач–пациент» и не являются публичной офертой или договором телемедицины."
    ]
   },
   {
    h2: "2. Отсутствие гарантий и необязательность соответствия реальному наличию",
    paragraphs: [
     "Весь сайт и вся размещённая на нём информация (включая описания услуг, процедур, аппаратов, оборудования, цен, графика работы, фотографии, видеоматериалы, статьи блога и интерактивные инструменты) предоставляются «как есть» («as is»), без каких-либо явных или подразумеваемых гарантий.",
     "Информация на сайте не гарантирует фактического наличия или доступности в реальности: Указание на сайте какой-либо услуги, аппарата, цены, графика, сотрудника или элемента на фотографиях не гарантирует, что они доступны, активны или физически присутствуют в клинике в конкретный момент времени. Оснащение, услуги, персонал, график и тарифы клиники могут изменяться, приостанавливаться или заменяться в любое время без предварительного обновления сайта. Действительной является только информация, подтверждённая на рецепции клиники в день обращения."
    ]
   },
   {
    h2: "3. Освобождение от ответственности клиники, д-ра Игоря Ревенко, сайта и разработчика",
    paragraphs: [
     "В максимальной степени, допускаемой законодательством, медицинский центр Revimed PLUS+ (S.R.L. «REVIMED PLUS»), д-р Игорь Ревенко, врачи и персонал клиники, владельцы сайта, авторы материалов и техническая команда веб-разработки (wsod.cloud) полностью освобождаются от любой юридической, гражданской, административной, медицинской или имущественной ответственности перед посетителями, пациентами или третьими лицами за:"
    ],
    bullets: [
     "любые расхождения или несоответствия между информацией, ценами, аппаратами или фотографиями на сайте и фактической ситуацией в клинике;",
     "любые решения, принятые на основе текстов, статей, тестов, калькуляторов или упражнений на сайте, включая самолечение, изменение назначенной терапии или отсрочку обращения к врачу;",
     "любые ожидания достижения конкретного результата лечения или излечения (результаты индивидуальны и никогда не гарантируются);",
     "возможные опечатки, упущения, задержки обновления, различия перевода между версиями RO / EN / RU / UA (приоритет имеют версия на румынском языке и подтверждение на рецепции) или технические сбои."
    ]
   },
   {
    h2: "4. Не заменяет консультацию врача · Экстренная помощь (112)",
    paragraphs: [
     "Ни один материал сайта (включая статьи о неврологии, позвоночнике, фитотерапии, питании, общей профилактике и тесты самооценки) не является диагнозом, рецептом или назначением лечения. Медицинский центр Revimed PLUS+ не проводит онкологическое лечение и не оказывает скорую неотложную помощь.",
     "В экстренных медицинских случаях (острая боль в груди, внезапный паралич или онемение, нарушение речи, судороги, потеря сознания или подозрение на инсульт) немедленно звоните 112."
    ]
   },
   {
    h2: "5. Фотографии, видеоматериалы, согласие лиц и немедленное удаление по запросу",
    paragraphs: [
     "Фотографии и видеоматериалы на сайте носят исключительно иллюстративный и ознакомительный характер. Они не гарантируют, что изображённые лица, оборудование или помещения в настоящее время находятся в клинике в идентичном виде.",
     "Снимки в галерее и видеоматериалы были сделаны открыто в помещениях центра с согласия присутствующих, при этом никто из присутствующих не выражал возражения или отказа от фото- или видеосъёмки.",
     "Удаление фотографий по простому запросу: Мы полностью уважаем право на изображение и неприкосновенность частной жизни. Если любое лицо, присутствующее на фотографии или видео на сайте, желает удалить или анонимизировать своё изображение, достаточно сообщить об этом по телефону 022 60 50 60 / +373 79 422 908 или на рецепции клиники, и изображение будет немедленно удалено в добровольном порядке без каких-либо дополнительных формальностей."
    ]
   },
   {
    h2: "6. Ориентировочные цены, конвертер валют и отзывы",
    paragraphs: [
     "Все цены на сайте и расчёты конвертера валют (EUR, RON, USD, UAH) являются строго ориентировочными, не являются публичной офертой и не гарантируют итоговую стоимость. Оплата производится исключительно в MDL на рецепции клиники по действующему прейскуранту на момент оказания услуги.",
     "Опубликованные отзывы пациентов анонимизированы (инициалы), отражают субъективное личное мнение и не являются гарантией аналогичного результата для других пациентов."
    ]
   },
   {
    h2: "7. Фитотерапия, добавки и процедуры",
    paragraphs: [
     "Любые упоминания лекарственных растений, добавок, упражнений или физиопроцедур носят справочный характер; возможны противопоказания и лекарственные взаимодействия (беременность, лактация, эпилепсия, кардиостимулятор, сердечно-сосудистые, печёночные, почечные или онкологические заболевания). Обязательна консультация врача."
    ]
   },
   {
    h2: "8. Авторские права и применимое право",
    paragraphs: [
     "Материалы сайта защищены законодательством Республики Молдова. Любые обращения (включая уточнение информации или удаление фотографии) решаются в приоритетном досудебном порядке по телефону 022 60 50 60."
    ]
   }
  ],
  priorityNote: "В случае разночтений между языковыми версиями приоритет имеет версия на румынском языке (/termeni-si-conditii/) в соответствии с законодательством Республики Молдова.",
  cookiesBtn: "Cookies и конфиденциальность",
  faqBtn: "Частые вопросы",
  contactBtn: "Контакты"
 },
 ua: {
  title: "Умови використання · Обмеження відповідальності",
  metaDesc: "Умови використання, відсутність гарантій, видалення фото за запитом та обмеження відповідальності для сайту медичного центру Revimed PLUS+ Кишинів.",
  h1: "Умови використання · Обмеження відповідальності",
  lead: "Правила користування сайтом, відсутність гарантій та повне звільнення від відповідальності для клініки, лікарів і команди Revimed PLUS+.",
  sections: [
   {
    h2: "1. Загальні відомості про оператора та довідковий характер сайту",
    paragraphs: [
     "Сайт revimed.site є інформаційно-довідковою платформою медичного центру Revimed PLUS+ (S.R.L. «REVIMED PLUS», IDNO 1011600011964, дата реєстрації: 31.03.2011, мун. Кишинів, сектор Чокана, бул. Мірча чел Бетрин 13/2, MD-2044, Республіка Молдова, засновник і головний лікар: д-р Ігор Ревенко, тел. 022 60 50 60 / +373 79 422 908).",
     "Відвідуючи та використовуючи цей сайт, ви повністю погоджуєтеся з цими Умовами. Перегляд сторінок, читання статей, використання інтерактивних тестів або довідковий телефонний дзвінок не є медичною послугою, не створюють відносин «лікар–пацієнт» і не є публічною офертою чи договором телемедицини."
    ]
   },
   {
    h2: "2. Відсутність гарантій та необов’язковість відповідності реальній наявності",
    paragraphs: [
     "Увесь сайт і вся розміщена на ньому інформація (включаючи описи послуг, процедур, апаратів, обладнання, цін, графіка роботи, фотографії, відеоматеріали, статті блогу та інтерактивні інструменти) надаються «як є» («as is»), без жодних явних чи передбачуваних гарантій.",
     "Інформація на сайті не гарантує фактичної наявності або доступності в реальності: Зазначення на сайті будь-якої послуги, апарата, ціни, графіка, співробітника чи елемента на фотографіях не гарантує, що вони доступні, активні або фізично присутні в клініці в конкретний момент часу. Оснащення, послуги, персонал, графік і тарифи клініки можуть змінюватися, призупинятися або замінюватися в будь-який час без попереднього оновлення сайту. Дійсною є лише інформація, підтверджена на рецепції клініки в день звернення."
    ]
   },
   {
    h2: "3. Звільнення від відповідальності клініки, д-ра Ігоря Ревенка, сайту та розробника",
    paragraphs: [
     "У максимальному ступені, дозволеному законодавством, медичний центр Revimed PLUS+ (S.R.L. «REVIMED PLUS»), д-р Ігор Ревенко, лікарі та персонал клініки, власники сайту, автори матеріалів і технічна команда веб-розробки (wsod.cloud) повністю звільняються від будь-якої юридичної, цивільної, адміністративної, медичної чи майнової відповідальності перед відвідувачами, пацієнтами або третіми особами за:"
    ],
    bullets: [
     "будь-які розбіжності або невідповідності між інформацією, цінами, апаратами чи фотографіями на сайті та фактичною ситуацією в клініці;",
     "будь-які рішення, прийняті на основі текстів, статей, тестів, калькуляторів або вправ на сайті, включаючи самолікування, зміну призначеної терапії або відкладення звернення до лікаря;",
     "будь-які очікування досягнення конкретного результату лікування чи одужання (результати індивідуальні й ніколи не гарантуються);",
     "можливі друкарські помилки, упущення, затримки оновлення, відмінності перекладу між версіями RO / EN / RU / UA (пріоритет мають версія румунською мовою та підтвердження на рецепції) або технічні збої."
    ]
   },
   {
    h2: "4. Не замінює консультацію лікаря · Екстрена допомога (112)",
    paragraphs: [
     "Жоден матеріал сайту (включаючи статті про неврологію, хребет, фітотерапію, харчування, загальну профілактику та тести самооцінки) не є діагнозом, рецептом чи призначенням лікування. Медичний центр Revimed PLUS+ не проводить онкологічне лікування та не надає невідкладну швидку допомогу.",
     "У невідкладних медичних випадках (гострий біль у грудях, раптовий параліч або оніміння, порушення мовлення, судоми, втрата свідомості або підозра на інсульт) негайно телефонуйте 112."
    ]
   },
   {
    h2: "5. Фотографії, відеоматеріали, згода осіб та негайне видалення за запитом",
    paragraphs: [
     "Фотографії та відеоматеріали на сайті мають виключно ілюстративний та ознайомчий характер. Вони не гарантують, що зображені особи, обладнання чи приміщення наразі перебувають у клініці в ідентичному вигляді.",
     "Знімки в галереї та відеоматеріали були зроблені відкрито в приміщеннях центру за згодою присутніх, при цьому ніхто з присутніх не висловлював заперечень чи відмови від фото- або відеозйомки.",
     "Видалення фотографій за простим запитом: Ми повністю поважаємо право на зображення та приватність. Якщо будь-яка особа, присутня на фотографії чи відео на сайті, бажає видалити або анонімізувати своє зображення, достатньо повідомити про це за телефоном 022 60 50 60 / +373 79 422 908 або на рецепції клініки, і зображення буде негайно видалено в добровільному порядку без жодних додаткових формальностей."
    ]
   },
   {
    h2: "6. Орієнтовні ціни, конвертер валют та відгуки",
    paragraphs: [
     "Усі ціни на сайті та розрахунки конвертера валют (EUR, RON, USD, UAH) є суворо орієнтовними, не є публічною офертою та не гарантують підсумкову вартість. Оплата здійснюється виключно в MDL на рецепції клініки за чинним прейскурантом на момент надання послуги.",
     "Опубліковані відгуки пацієнтів анонімізовані (ініціали), відображають суб’єктивну особисту думку і не є гарантією аналогічного результату для інших пацієнтів."
    ]
   },
   {
    h2: "7. Фітотерапія, добавки та процедури",
    paragraphs: [
     "Будь-які згадки лікарських рослин, добавок, вправ або фізіопроцедур мають довідковий характер; можливі протипоказання та лікарські взаємодії (вагітність, лактація, епілепсія, кардіостимулятор, серцево-судинні, печінкові, ниркові чи онкологічні захворювання). Обов’язкова консультація лікаря."
    ]
   },
   {
    h2: "8. Авторські права та застосовне право",
    paragraphs: [
     "Матеріали сайту захищені законодавством Республіки Молдова. Будь-які звернення (включаючи уточнення інформації або видалення фотографії) вирішуються в пріоритетному досудовому порядку за телефоном 022 60 50 60."
    ]
   }
  ],
  priorityNote: "У разі розбіжностей між мовними версіями пріоритет має версія румунською мовою (/termeni-si-conditii/) відповідно до законодавства Республіки Молдова.",
  cookiesBtn: "Cookies та конфіденційність",
  faqBtn: "Часті питання",
  contactBtn: "Контакти"
 }
};

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") return {};
 const copy = termsCopy[lang];
 return makeMetadata({
  lang,
  path: "/termeni-si-conditii",
  localized: true,
  title: copy.title,
  description: copy.metaDesc
 });
}

export default async function LocalizedTermsPage({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 const text = t(lang);
 const copy = termsCopy[lang];
 const pagePath = `${withLang("/termeni-si-conditii", lang)}/`;

 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: text.home, path: withLang("/", lang) },
     { name: copy.title, path: pagePath }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "WebPage",
     name: copy.title,
     url: absoluteUrl(pagePath),
     publisher: { "@id": `${siteUrl}/#medical-clinic` }
    }}
   />
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {copy.h1}</p>
     <h1>{copy.h1}</h1>
     <p className="lead">{copy.lead}</p>
    </div>
   </PageHeading>

   <section className="rmSection legalSection">
    <article className="rmShell legalCard" data-glass-card>
     {copy.sections.map((sec) => (
      <div key={sec.h2}>
       <h2>{sec.h2}</h2>
       {sec.paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
       ))}
       {sec.bullets && (
        <ul>
         {sec.bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
         ))}
        </ul>
       )}
      </div>
     ))}

     <hr style={{ margin: "24px 0", opacity: 0.2 }} />
     <p><strong>{copy.priorityNote}</strong></p>

     <div className="rm-quick-links-bar">
      <Link href={withLang("/cookies/", lang)} className="btn btn-outline-primary btn-sm">
       {copy.cookiesBtn}
      </Link>
      <Link href={withLang("/intrebari/", lang)} className="btn btn-outline-primary btn-sm">
       {copy.faqBtn}
      </Link>
      <Link href={withLang("/contact/", lang)} className="btn btn-primary btn-sm">
       {copy.contactBtn}
      </Link>
     </div>
    </article>
   </section>
  </>
 );
}
