import { notFound } from "next/navigation";
import { ServiceTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = ServiceTemplate({ lang: "ro", slug });
  if (!page) notFound();
  return page;
}
