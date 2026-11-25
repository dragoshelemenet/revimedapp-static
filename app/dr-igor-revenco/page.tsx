import DoctorProfilePage from "@/components/DoctorProfilePage";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/dr-igor-revenco",
  title: "Dr. Igor Revenco — Medic Specialist Neurochirurg Consultant & Neuropediatru",
  description:
    "Profil oficial Dr. Igor Revenco — medic specialist neurochirurg consultant, medic neuropediatru, categorie superioară, membru EANS, 35+ ani experiență, fondator Revimed PLUS+ Chișinău.",
  image: "/images/about-us.jpg"
});

export const dynamic = "force-static";

export default function Page() {
  return <DoctorProfilePage lang="ro" />;
}
