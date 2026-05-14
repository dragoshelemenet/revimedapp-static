import { ServicesTemplate } from "@/lib/pageTemplates";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";
export const dynamic = "force-dynamic";
export default function Page() {
  return <ServicesTemplate lang="ro" />;
}
