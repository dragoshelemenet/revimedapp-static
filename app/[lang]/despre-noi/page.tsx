import { notFound } from "next/navigation";
import { AboutTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return <AboutTemplate lang={lang as Lang} />;
}
