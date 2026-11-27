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

type Section = { h2: string; paragraphs: string[] };

const cookiesCopy: Record<Exclude<Lang, "ro">, {
 title: string;
 metaDesc: string;
 h1: string;
 lead: string;
 sections: Section[];
 termsBtn: string;
 faqBtn: string;
 contactBtn: string;
}> = {
 en: {
  title: "Cookies & Privacy Policy",
  metaDesc: "Cookies and personal data protection policy under Law no. 133/2011 for Revimed PLUS+ Medical Center Chișinău.",
  h1: "Cookies & Privacy Policy",
  lead: "Transparent information on personal data protection (Law no. 133/2011 of the Republic of Moldova), cookies, and external content.",
  sections: [
   {
    h2: "1. Personal Data Protection (Law no. 133/2011)",
    paragraphs: [
     "The website revimed.site is a static informational platform and does not collect, store, or process personal data through online forms, user accounts, or automated booking systems. Responses entered in educational self-assessment tools in the Applications section are calculated exclusively locally in your browser and are never transmitted to any server.",
     "When you contact Revimed PLUS+ Medical Center by telephone or in person at reception, any data processing takes place strictly within the clinic in accordance with Law no. 133/2011 on personal data protection of the Republic of Moldova."
    ]
   },
   {
    h2: "2. Prior Consent (Opt-In) for Analytics & Advertising (Google / Meta)",
    paragraphs: [
     "By default, when you access the website, all third-party analytics and advertising measurement modules (Google Consent Mode v2 / Google Analytics 4 _ga / Google Ads _gcl_au / Meta Pixel _fbp, _fbc — max 90 days) are disabled (denied). They are activated exclusively if you explicitly click 'Accept' in the consent banner (stored locally in revimed_cookie_consent_v2). If you choose 'Essential Only', no marketing or analytics cookies are loaded."
    ]
   },
   {
    h2: "3. Local Technical Storage & Cookies",
    paragraphs: [
     "The website does not set proprietary marketing or analytics cookies. Technical interface preferences (such as currency selection on the Prices page or interactive state) operate strictly locally on your device and can be cleared at any time in your browser settings."
    ]
   },
   {
    h2: "4. External Content (YouTube Privacy-Enhanced & Google Maps)",
    paragraphs: [
     "Certain pages may integrate YouTube videos in privacy-enhanced mode (youtube-nocookie.com) or links to Google Maps and Facebook. When playing a video or opening external links, third-party platforms apply their own privacy and cookie policies. Revimed PLUS+ does not control and assumes no liability for third-party data processing."
    ]
   },
   {
    h2: "5. Data Controller, User Rights & Contact",
    paragraphs: [
     "The operator of data processed within medical activities at the clinic premises is S.R.L. “REVIMED PLUS” (IDNO 1011600011964, Chișinău, Ciocana sector, Mircea cel Bătrân Blvd. 13/2, administrator: Dr. Igor Revenco). Under Law no. 133/2011, you have the right to information, access, rectification, objection, and deletion (including immediate removal of any gallery photo upon simple request at 022 60 50 60)."
    ]
   },
   {
    h2: "6. Medical Disclaimer & Updates",
    paragraphs: [
     "Website content is strictly informational (“as is”), does not guarantee real-time physical availability at the clinic, and does not replace medical consultation. In medical emergencies call 112."
    ]
   }
  ],
  termsBtn: "Terms & Conditions",
  faqBtn: "FAQ",
  contactBtn: "Contact"
 },
 ru: {
  title: "Политика Cookies и Конфиденциальности",
  metaDesc: "Политика cookies и защиты персональных данных согласно Закону РМ № 133/2011 для сайта медицинского центра Revimed PLUS+ Кишинёв.",
  h1: "Cookies и Конфиденциальность",
  lead: "Прозрачная информация о защите персональных данных (Закон РМ № 133/2011), файлах cookies и внешнем контенте.",
  sections: [
   {
    h2: "1. Защита персональных данных (Закон № 133/2011)",
    paragraphs: [
     "Сайт revimed.site является статической информационной платформой и не собирает, не хранит и не обрабатывает персональные данные через онлайн-формы, личные кабинеты или системы онлайн-записи. Ответы в образовательных тестах раздела «Приложения» рассчитываются исключительно локально в вашем браузере и не передаются ни на какие серверы.",
     "При обращении в медицинский центр Revimed PLUS+ по телефону или лично на рецепции обработка данных осуществляется исключительно внутри клиники в соответствии с Законом Республики Молдова № 133/2011 о защите персональных данных."
    ]
   },
   {
    h2: "2. Предварительное согласие (Opt-In) на аналитику и рекламу (Google / Meta)",
    paragraphs: [
     "По умолчанию при входе на сайт все модули аналитики и оценки рекламы (Google Consent Mode v2 / Google Analytics 4 _ga / Google Ads _gcl_au / Meta Pixel _fbp, _fbc — до 90 дней) отключены (denied). Они активируются исключительно при явном нажатии кнопки «Принять» в панели согласия (выбор сохраняется локально в revimed_cookie_consent_v2). При выборе «Только необходимые» рекламные и аналитические cookies не загружаются."
    ]
   },
   {
    h2: "3. Локальное техническое хранение и cookies",
    paragraphs: [
     "Сайт не устанавливает собственных маркетинговых или аналитических cookies. Технические настройки интерфейса (например, выбор валюты на странице «Цены») работают строго локально на вашем устройстве и могут быть очищены в настройках браузера."
    ]
   },
   {
    h2: "4. Внешний контент (YouTube Privacy-Enhanced и Google Maps)",
    paragraphs: [
     "Некоторые страницы могут содержать видео YouTube в режиме повышенной конфиденциальности (youtube-nocookie.com) или ссылки на Google Maps и Facebook. При воспроизведении видео или переходе по внешним ссылкам сторонние платформы применяют собственные политики конфиденциальности. Revimed PLUS+ не контролирует и не несёт ответственности за обработку данных третьими лицами."
    ]
   },
   {
    h2: "5. Оператор данных, права пользователя и контакты",
    paragraphs: [
     "Оператором данных в рамках медицинской деятельности в клинике является S.R.L. «REVIMED PLUS» (IDNO 1011600011964, мун. Кишинёв, сектор Чеканы, бул. Мирча чел Бэтрын 13/2, администратор: д-р Игорь Ревенко). Согласно Закону № 133/2011 вы имеете право на доступ, исправление, возражение и удаление (включая немедленное удаление любой фотографии по звонку на 022 60 50 60)."
    ]
   },
   {
    h2: "6. Ограничение медицинской ответственности и обновления",
    paragraphs: [
     "Материалы сайта носят справочный характер («как есть»), не гарантируют фактического наличия услуг или аппаратов в реальном времени и не заменяют консультацию врача. В экстренных случаях звоните 112."
    ]
   }
  ],
  termsBtn: "Условия использования",
  faqBtn: "Частые вопросы",
  contactBtn: "Контакты"
 },
 ua: {
  title: "Політика Cookies та Конфіденційності",
  metaDesc: "Політика cookies та захисту персональних даних згідно із Законом РМ № 133/2011 для сайту медичного центру Revimed PLUS+ Кишинів.",
  h1: "Cookies та Конфіденційність",
  lead: "Прозора інформація щодо захисту персональних даних (Закон РМ № 133/2011), файлів cookies та зовнішнього контенту.",
  sections: [
   {
    h2: "1. Захист персональних даних (Закон № 133/2011)",
    paragraphs: [
     "Сайт revimed.site є статичною інформаційною платформою і не збирає, не зберігає та не обробляє персональні дані через онлайн-форми, облікові записи чи автоматичні системи запису. Відповіді в освітніх тестах розділу «Додатки» розраховуються виключно локально у вашому браузері та не передаються на жодні сервери.",
     "У разі звернення до медичного центру Revimed PLUS+ телефоном або особисто на рецепції обробка даних здійснюється виключно в межах клініки відповідно до Закону Республіки Молдова № 133/2011 про захист персональних даних."
    ]
   },
   {
    h2: "2. Попередня згода (Opt-In) на аналітику та рекламу (Google / Meta)",
    paragraphs: [
     "За замовчуванням під час входу на сайт усі модулі аналітики та вимірювання реклами (Google Consent Mode v2 / Google Analytics 4 _ga / Google Ads _gcl_au / Meta Pixel _fbp, _fbc — до 90 днів) вимкнені (denied). Вони активуються виключно після явного натискання кнопки «Прийняти» на панелі згоди (вибір зберігається локально у revimed_cookie_consent_v2). Якщо ви обираєте «Лише необхідні», маркетингові cookies не завантажуються."
    ]
   },
   {
    h2: "3. Локальне технічне зберігання та cookies",
    paragraphs: [
     "Сайт не встановлює власних маркетингових чи аналітичних cookies. Технічні налаштування інтерфейсу (наприклад, вибір валюти на сторінці «Ціни») працюють суворо локально на вашому пристрої та можуть бути видалені в налаштуваннях браузера."
    ]
   },
   {
    h2: "4. Зовнішній контент (YouTube Privacy-Enhanced та Google Maps)",
    paragraphs: [
     "Окремі сторінки можуть інтегрувати відео YouTube у режимі підвищеної конфіденційності (youtube-nocookie.com) або посилання на Google Maps і Facebook. Під час відтворення відео чи переходу за зовнішніми посиланнями сторонні платформи застосовують власні політики конфіденційності. Revimed PLUS+ не контролює і не несе відповідальності за обробку даних третіми сторонами."
    ]
   },
   {
    h2: "5. Оператор даних, права користувача та контакти",
    paragraphs: [
     "Оператором даних у межах медичної діяльності в клініці є S.R.L. «REVIMED PLUS» (IDNO 1011600011964, мун. Кишинів, сектор Чокана, бул. Мірча чел Бетрин 13/2, адміністратор: д-р Ігор Ревенко). Згідно із Законом № 133/2011 ви маєте право на доступ, виправлення, заперечення та видалення (включаючи негайне видалення будь-якої фотографії за дзвінком на 022 60 50 60)."
    ]
   },
   {
    h2: "6. Обмеження медичної відповідальності та оновлення",
    paragraphs: [
     "Матеріали сайту мають довідковий характер («як є»), не гарантують фактичної наявності послуг чи апаратів у реальному часі та не замінюють консультацію лікаря. У невідкладних випадках телефонуйте 112."
    ]
   }
  ],
  termsBtn: "Умови використання",
  faqBtn: "Часті питання",
  contactBtn: "Контакти"
 }
};

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") return {};
 const copy = cookiesCopy[lang];
 return makeMetadata({
  lang,
  path: "/cookies",
  localized: true,
  title: copy.title,
  description: copy.metaDesc
 });
}

export default async function LocalizedCookiesPage({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 const text = t(lang);
 const copy = cookiesCopy[lang];
 const pagePath = `${withLang("/cookies", lang)}/`;

 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: text.home, path: withLang("/", lang) },
     { name: copy.h1, path: pagePath }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "WebPage",
     name: copy.title,
     url: absoluteUrl(pagePath),
     speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".rm-citable-summary"] },
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
     <aside className="rm-citable-summary" style={{ marginBottom: 20 }}>
      <div className="rm-citable-summary-head">
       <span className="rm-citable-pill">{copy.h1} · Revimed PLUS+</span>
       <span className="rm-citable-date">IDNO 1011600011964 · Zero tracking</span>
      </div>
      <p style={{ margin: 0 }}>
       {lang === "en"
        ? "revimed.site (S.R.L. REVIMED PLUS, IDNO 1011600011964, Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2) is a static informational site with zero Google Analytics, zero Meta Pixel, and zero advertising cookies. Interactive self-assessment tools run strictly locally in your browser. Privacy inquiries: 022 60 50 60."
        : lang === "ru"
          ? "revimed.site (S.R.L. REVIMED PLUS, IDNO 1011600011964, Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2): статический информационный сайт без Google Analytics, Meta Pixel и рекламных cookies. Интерактивные тесты работают локально в браузере. Контакт по конфиденциальности: 022 60 50 60."
          : "revimed.site (S.R.L. REVIMED PLUS, IDNO 1011600011964, Кишинів, Чокана, вул. Мірча чел Бетрин 13/2): статичний інформаційний сайт без Google Analytics, Meta Pixel та рекламних cookies. Інтерактивні тести працюють локально у браузері. Контакт щодо конфіденційності: 022 60 50 60."}
      </p>
     </aside>
     {copy.sections.map((sec) => (
      <div key={sec.h2}>
       <h2>{sec.h2}</h2>
       {sec.paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
       ))}
      </div>
     ))}

     <div className="rm-quick-links-bar">
      <Link href={withLang("/termeni-si-conditii/", lang)} className="btn btn-outline-primary btn-sm">
       {copy.termsBtn}
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
