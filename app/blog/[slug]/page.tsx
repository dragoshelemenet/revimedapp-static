import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const page = BlogPostTemplate({ lang: "ro", slug });
 if (!page) notFound();
 return page;
}
