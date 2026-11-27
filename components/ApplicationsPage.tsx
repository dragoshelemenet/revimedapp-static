import Link from "next/link";
import { translatedTools } from "@/lib/appMeta";
import { withLang, type Lang } from "@/lib/i18n";
import PageHeading from "./PageHeading";
import { ContentSection } from "./ContentLayout";
import SmartCatalogGrid from "./SmartCatalogGrid";
import { JsonLd, breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";

export const applicationsCopy = {
 ro: [
  "Acasă",
  "Aplicații",
  "Aplicații Revimed PLUS+",
  "Instrumente interactive gratuite pentru orientare neurologică, respirație terapeutică, postură, recuperare și pregătire pentru consultație.",
  "Deschide",
  "Mai multe +",
  "Restrânge"
 ],
 en: [
  "Home",
  "Applications",
  "Revimed PLUS+ Patient Tools",
  "Free interactive self-assessment tools for neurology screening, posture, back pain, breathing therapy, and personalized rehabilitation.",
  "Open",
  "More +",
  "Show less"
 ],
 ru: [
  "Главная",
  "Приложения",
  "Приложения Revimed PLUS+",
  "Бесплатные интерактивные тесты для неврологического скрининга, осанки, боли в спине, дыхательной терапии и реабилитации.",
  "Открыть",
  "Показать ещё +",
  "Свернуть"
 ],
 ua: [
  "Головна",
  "Застосунки",
  "Застосунки Revimed PLUS+",
  "Безкоштовні інтерактивні тести для неврологічного скринінгу, постави, болю в спині, дихальної терапії та реабілітації.",
  "Відкрити",
  "Показати ще +",
  "Згорнути"
 ]
};

const guidanceCopy: Record<Lang, { note: string; doctor: string; contact: string }> = {
 ro: {
  note: "Instrumentele au rol educațional și orientativ. Pentru evaluare medicală completă și plan personalizat, programează o consultație.",
  doctor: "Dr. Igor Revenco",
  contact: "Programare & Contact"
 },
 en: {
  note: "These tools are educational and informational. For a full clinical assessment and personalized plan, schedule an appointment.",
  doctor: "Dr. Igor Revenco",
  contact: "Book Appointment"
 },
 ru: {
  note: "Инструменты носят образовательный характер. Для полноценной медицинской оценки и индивидуального плана запишитесь на консультацию.",
  doctor: "Д-р Игорь Ревенко",
  contact: "Записаться"
 },
 ua: {
  note: "Інструменти мають освітній характер. Для повної медичної оцінки та індивідуального плану запишіться на консультацію.",
  doctor: "Д-р Ігор Ревенко",
  contact: "Записатися"
 }
};

export default function ApplicationsPage({ lang }: { lang: Lang }) {
 const [home, nav, title, subtitle, action, more, less] = applicationsCopy[lang];
 const guide = guidanceCopy[lang];
 const tools = translatedTools(lang);
 const path = `${withLang("/aplicatii", lang)}/`;
 const items = tools.map((tool) => ({
  id: tool.slug,
  href: withLang(tool.href, lang),
  title: tool.title,
  description: tool.description,
  badge: tool.tag,
  action
 }));

 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: home, path: withLang("/", lang) },
     { name: nav, path }
    ])}
   />
   <JsonLd
    data={collectionPageJsonLd({
     name: title,
     description: subtitle,
     path,
     items: items.map((item) => ({ name: item.title, url: item.href }))
    })}
   />
   <PageHeading>
    <div>
     <p>{home} / {nav}</p>
     <h1>{title}</h1>
     <p>{subtitle}</p>
    </div>
   </PageHeading>
   <ContentSection>
    <aside className="rm-citable-summary" style={{ marginBottom: 18 }}>
     <div className="rm-citable-summary-head">
      <span className="rm-citable-pill">{title} · 11 Interactive Medical Tools</span>
      <span className="rm-citable-date">Free Access (0 MDL) · Revimed PLUS+</span>
     </div>
     <p style={{ margin: 0 }}>
      {lang === "ru"
       ? "11 бесплатных интерактивных медицинских онлайн-тестов от центра Revimed PLUS+ (Кишинёв, Чеканы, д-р Игорь Ревенко): неврологический скрининг за 2 минуты, карта боли в спине и шее (дерматомы L4-L5, L5-S1, C5-C7), дневник мигрени, тест осанки, калькулятор индекса восстановления, тренажёр дыхания, чек-лист подготовки к приёму и гид по оборудованию. Все тесты работают бесплатно без регистрации (0 MDL)."
       : lang === "ua"
         ? "11 безкоштовних інтерактивних медичних онлайн-тестів від центру Revimed PLUS+ (Кишинів, Чокана, д-р Ігор Ревенко): неврологічний скринінг за 2 хвилини, карта болю в спині та шиї (дерматоми L4-L5, L5-S1, C5-C7), щоденник мігрені, тест постави, калькулятор індексу відновлення, тренажер дихання та чек-лист підготовки до прийому. Усі тести безкоштовні без реєстрації (0 MDL)."
         : lang === "en"
           ? "11 free interactive online medical self-assessment tools by Revimed PLUS+ Medical Center (Chișinău, Ciocana, Dr. Igor Revenco): 2-minute neurological symptom screening, interactive spine & dermatome pain map (L4-L5, L5-S1, C5-C7), headache & migraine trigger diary, posture assessment, recovery index calculator, guided therapeutic breathing timer, and consultation preparation checklist. 100% free with zero registration (0 MDL)."
           : "11 instrumente și teste medicale interactive gratuite create de Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Dr. Igor Revenco): screening neurologic în 2 minute, harta interactivă a durerii de spate și dermatoamelor (L4-L5, L5-S1, C5-C7), jurnal de migrenă și cefalee, evaluator de postură, calculator indice de recuperare, ghid de respirație terapeutică și checklist de pregătire pentru consultație. Acces gratuit fără cont (0 MDL)."}
     </p>
    </aside>
    <SmartCatalogGrid
     items={items}
     initialCount={12}
     moreLabel={more}
     lessLabel={less}
     useInfoPopover
    />
    <div className="rm-apps-guidance-card" data-glass-card>
     <p>{guide.note}</p>
     <div className="rm-quick-links-bar" style={{ marginTop: 10 }}>
      <Link href={withLang("/dr-igor-revenco/", lang)} className="btn btn-outline-primary btn-sm">
       {guide.doctor}
      </Link>
      <Link href={withLang("/contact/", lang)} className="btn btn-primary btn-sm">
       {guide.contact}
      </Link>
     </div>
    </div>
   </ContentSection>
  </>
 );
}
