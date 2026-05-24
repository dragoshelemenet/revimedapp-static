import { notFound, redirect } from "next/navigation";
import { BlogPostTemplate } from "@/lib/pageTemplates";
import { getTranslatedBlogSlug } from "@/lib/blogSlugTranslations";
const staticBlogSlugs: string[] = [];

export function generateStaticParams() {
  return staticBlogSlugs.map((slug) => ({ slug }));
}

export const dynamic = "force-static";
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 
  const translatedSlug = getTranslatedBlogSlug(slug, "ro");
  if (translatedSlug !== slug) {
    redirect(`/blog/${translatedSlug}`);
  }
const page = BlogPostTemplate({ lang: "ro", slug });
 if (!page) notFound();
 return page;
}
