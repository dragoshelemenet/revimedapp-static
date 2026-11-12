import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import { makeMetadata } from "@/lib/seo";
import ApplicationsPage, { applicationsCopy } from "@/components/ApplicationsPage";
export const dynamicParams = false;
export function generateStaticParams() { return ["en","ru","ua"].map(lang=>({lang})); }
type Props = {params: Promise<{lang: string}>};
export default async function Page({params}: Props) {
 const {lang} = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return <ApplicationsPage lang={lang} />;
}
export async function generateMetadata({params}: Props) {
 const {lang} = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return makeMetadata({lang, path: "/aplicatii", title: applicationsCopy[lang][2], description: applicationsCopy[lang][3]});
}
