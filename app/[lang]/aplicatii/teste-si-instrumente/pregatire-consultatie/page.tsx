import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import Original from "@/app/aplicatii/teste-si-instrumente/pregatire-consultatie/page";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  return <Original />;
}
