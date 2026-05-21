import { notFound, redirect } from "next/navigation";
import { BlogPostTemplate } from "@/lib/pageTemplates";
import { getTranslatedBlogSlug } from "@/lib/blogSlugTranslations";
export const dynamic = "force-dynamic";
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
