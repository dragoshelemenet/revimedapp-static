import { makeMetadata } from "@/lib/seo";
import { HomeTemplate } from "@/lib/pageTemplates";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/",
 title: "Neurolog, Neurochirurg & Fizioterapie Chișinău (Ciocana)",
 description: "Centrul Medical Revimed PLUS+ din Chișinău (Ciocana): consultații neurologice adulți și copii (neuropediatrie), neurochirurgie (Dr. Igor Revenco, 35+ ani experiență), fizioterapie și 25 aparate de recuperare."
});

export const dynamic = "force-static";
export default function Page() {
 return <HomeTemplate lang="ro" />;
}
