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
    <SmartCatalogGrid
     items={items}
     initialCount={3}
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
