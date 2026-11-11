
import PageHeading from "@/components/PageHeading";
import { makeMetadata } from "@/lib/seo";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
export const dynamicParams = false;

const staticLangs = ["en", "ru", "ua"];

export function generateStaticParams() {
  return staticLangs.map((lang) => ({ lang }));
}



const labels = {
  ro: ["Acasă", "Aplicații", "Aplicații Revimed PLUS+", "Instrumente simple pentru pacienți.", "Deschide"],
  en: ["Home", "Applications", "Applications Revimed PLUS+", "Simple tools for patients.", "Open"],
  ru: ["Главная", "Приложения", "Приложения Revimed PLUS+", "Простые инструменты для пациентов.", "Открыть"],
  ua: ["Головна", "Застосунки", "Застосунки Revimed PLUS+", "Прості інструменти для пацієнтів.", "Відкрити"]
};

const apps = [
  ["test-ayurveda-dosha", "Ayurveda Dosha Test"],
  ["respiratie-terapeutica", "Therapeutic breathing"],
  ["screening-neurologic", "Neurological screening"],
  ["revimed-yoga-tibetan", "Revimed Tibetan Yoga"],
  ["calculator-recuperare-personalizata", "Recovery calculator"],
  ["test-postura-coloana", "Posture and spine test"]
];

type Props = { params: Promise<{ lang: string }> };

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const safeLang = lang === "en" || lang === "ru" || lang === "ua" ? lang : "ro";
  const [home, nav, title, subtitle, open] = labels[safeLang];
  const prefix = safeLang === "ro" ? "" : `/${safeLang}`;

  return (
    <div>
      <PageHeading>
        <div className="rmShell">
          <p className="breadcrumbs">{home} / {nav}</p>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </PageHeading>

      <section className="rmSection">
        <div className="rmShell">
          <div className="equipmentGrid">
            {apps.map(([slug, title]) => (
              <Link className="equipmentCard" href={`${prefix}/aplicatii/teste-si-instrumente/${slug}`} key={slug}>
                <span className="equipmentBadge">{nav}</span>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <b>{open} →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return makeMetadata({ lang, path: "/aplicatii", title: labels[lang][2], description: labels[lang][3] });
}
