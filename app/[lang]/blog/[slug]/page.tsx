import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
import { getStaticBlogSlugs } from "@/lib/staticBlogPosts";

export const dynamic = "force-static";
export const dynamicParams = false;

const staticLangs: Lang[] = ["en", "ru", "ua"];

export function generateStaticParams() {
  return staticLangs.flatMap((lang) =>
    getStaticBlogSlugs(lang).map((slug) => ({ lang, slug }))
  );
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLang(lang) || lang === "ro") notFound();

  const page = BlogPostTemplate({ lang: lang as Lang, slug });
  if (!page) notFound();
  return page;
}
