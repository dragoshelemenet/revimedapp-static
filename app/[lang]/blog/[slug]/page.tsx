import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
 const { lang, slug } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 const page = BlogPostTemplate({ lang: lang as Lang, slug });
 if (!page) notFound();
 return page;
}
