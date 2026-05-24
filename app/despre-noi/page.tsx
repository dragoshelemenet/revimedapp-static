import { AboutTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-static";
export const metadata = { title: "Despre noi" };
export default function Page() {
 return <AboutTemplate lang="ro" />;
}
