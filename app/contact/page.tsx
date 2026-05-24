import { ContactTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-static";
export const metadata = { title: "Contact" };
export default function Page() {
 return <ContactTemplate lang="ro" />;
}
