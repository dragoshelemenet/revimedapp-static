import { makeMetadata } from "@/lib/seo";
import { ServicesTemplate } from "@/lib/pageTemplates";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/servicii",
  title: "Servicii medicale",
  description: "Servicii medicale Revimed PLUS+: consultații neurologice, neurochirurgie, fizioterapie și reabilitare, diagnostic funcțional, terapie balneară și electroterapie."
});

export const dynamic = "force-dynamic";
export default function Page() {
  return <ServicesTemplate lang="ro" />;
}
