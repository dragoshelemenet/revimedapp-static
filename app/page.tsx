import { makeMetadata } from "@/lib/seo";
import { HomeTemplate } from "@/lib/pageTemplates";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/",
 title: "Centru medical neurologie, recuperare și fizioterapie",
 description: "Centrul Medical Revimed PLUS+ din Chișinău oferă consultații neurologice, neurochirurgie, recuperare medicală, fizioterapie, diagnostic funcțional și terapii complementare."
});

export const dynamic = "force-dynamic";
export default function Page() {
 return <HomeTemplate lang="ro" />;
}
