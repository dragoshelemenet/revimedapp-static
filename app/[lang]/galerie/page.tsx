import { notFound } from "next/navigation";
import { GalleryTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
import { getGalleryLabel } from "@/lib/galleryLabels";
export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  return <GalleryTemplate lang={lang as Lang} />;
}
