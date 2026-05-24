import { notFound } from "next/navigation";
import { PricesTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
export const dynamicParams = false;

const staticLangs = ["en", "ru", "ua"];

export function generateStaticParams() {
  return staticLangs.map((lang) => ({ lang }));
}


export const dynamic = "force-static";
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return <PricesTemplate lang={lang as Lang} />;
}
