import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/lib/pageTemplates";
import { getStaticBlogSlugs } from "@/lib/staticBlogPosts";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticBlogSlugs("ro").map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = BlogPostTemplate({ lang: "ro", slug });
  if (!page) notFound();
  return page;
}
