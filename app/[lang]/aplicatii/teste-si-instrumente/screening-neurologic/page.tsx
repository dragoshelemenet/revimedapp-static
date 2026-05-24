import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import Original from "@/app/aplicatii/teste-si-instrumente/screening-neurologic/page";
export const dynamicParams = false;

const staticLangs = ["en", "ru", "ua"];

export function generateStaticParams() {
  return staticLangs.map((lang) => ({ lang }));
}



export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  return <Original />;
}
