import { notFound } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";
import { translatedTools } from "@/lib/appMeta";
import { makeMetadata } from "@/lib/seo";

export function toolMetadata(lang: Lang, slug: string) {
 const tool = translatedTools(lang).find((item) => item.slug === slug);
 if (!tool) notFound();
 return makeMetadata({ lang, path: `/aplicatii/teste-si-instrumente/${slug}`,
  title: tool.title, description: tool.description, image: tool.image });
}
export async function localizedToolMetadata(params: Promise<{ lang: string }>, slug: string) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return toolMetadata(lang, slug);
}
