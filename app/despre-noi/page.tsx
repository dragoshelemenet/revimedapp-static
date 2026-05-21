import { AboutTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-dynamic";
export const metadata = { title: "Despre noi" };
export default function Page() {
 return <AboutTemplate lang="ro" />;
}
