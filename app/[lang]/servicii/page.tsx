import { notFound } from "next/navigation";
import { ServicesTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";
export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  return <ServicesTemplate lang={lang as Lang} />;
}
