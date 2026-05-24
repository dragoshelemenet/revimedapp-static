import { notFound, redirect } from "next/navigation";
import { BlogPostTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
import { getTranslatedBlogSlug } from "@/lib/blogSlugTranslations";
const staticLangs = ['en', 'ru', 'ua'];
const staticBlogSlugs: string[] = [];

export function generateStaticParams() {
  return staticLangs.flatMap((lang) => staticBlogSlugs.map((slug) => ({ lang, slug })));
}


export const dynamic = "force-static";
export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
 const { lang, slug } = await params;
 
  const translatedSlug = getTranslatedBlogSlug(slug, lang as Lang);
  if (translatedSlug !== slug) {
    redirect(`/${lang}/blog/${translatedSlug}`);
  }
if (!isLang(lang) || lang === "ro") notFound();
 const page = BlogPostTemplate({ lang: lang as Lang, slug });
 if (!page) notFound();
 return page;
}
