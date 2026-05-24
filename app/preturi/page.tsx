import { PricesTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-static";
export const metadata = { title: "Prețuri" };
export default function Page() {
 return <PricesTemplate lang="ro" />;
}
