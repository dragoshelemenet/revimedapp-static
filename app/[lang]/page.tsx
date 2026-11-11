import { notFound } from "next/navigation";
import { HomeTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
import { makeMetadata } from "@/lib/seo";
import { pageSeoText } from "@/lib/seoAdvanced";
import type { Metadata } from "next";
export const dynamicParams = false;

const staticLangs = ["en", "ru", "ua"];

export function generateStaticParams() {
  return staticLangs.map((lang) => ({ lang }));
}


export const dynamic = "force-static";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") return {};
 const copy = pageSeoText[lang].home;
 return makeMetadata({ lang, path: "/", title: copy.title, description: copy.description });
}
export default async function Page({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return <HomeTemplate lang={lang as Lang} />;
}
