import DoctorProfilePage from "@/components/DoctorProfilePage";
import { isLang, type Lang } from "@/lib/i18n";
import { makeMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const metaByLang: Record<Lang, { title: string; description: string }> = {
  ro: {
    title: "Dr. Igor Revenco — Neurolog, Neurochirurg, Neuropediatru Chișinău",
    description:
      "Profil complet Dr. Igor Revenco — medic categorie superioară, doctor în neurochirurgie (USMF), membru EANS, 35+ ani experiență, fondator Revimed PLUS+."
  },
  en: {
    title: "Dr. Igor Revenco — Neurologist, Neurosurgeon & Pediatric Neurologist",
    description:
      "Full profile of Dr. Igor Revenco — superior-category specialist, PhD in Neurosurgery (USMF), EANS member, 35+ years experience, founder of Revimed PLUS+ Chișinău."
  },
  ru: {
    title: "Д-р Игорь Ревенко — Невролог, нейрохирург и детский невролог в Кишинёве",
    description:
      "Профиль д-ра Игоря Ревенко — врач высшей категории, доктор нейрохирургии (USMF), член EANS, опыт более 35 лет, основатель Revimed PLUS+."
  },
  ua: {
    title: "Д-р Ігор Ревенко — Невролог, нейрохірург і дитячий невролог у Кишиневі",
    description:
      "Профіль д-ра Ігоря Ревенка — лікар вищої категорії, доктор нейрохірургії (USMF), член EANS, досвід понад 35 років, засновник Revimed PLUS+."
  }
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "ua" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") return {};
  const m = metaByLang[lang];
  return makeMetadata({
    lang,
    path: "/dr-igor-revenco",
    title: m.title,
    description: m.description,
    image: "/images/about-us.jpg"
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  return <DoctorProfilePage lang={lang} />;
}
