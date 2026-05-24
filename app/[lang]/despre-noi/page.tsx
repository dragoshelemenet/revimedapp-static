import { notFound } from "next/navigation";
import { AboutTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
const staticLangs = ["en", "ru", "ua"];

export function generateStaticParams() {
  return staticLangs.map((lang) => ({ lang }));
}


export const dynamic = "force-static";
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return <AboutTemplate lang={lang as Lang} />;
}
