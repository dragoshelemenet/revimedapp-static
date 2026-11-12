import ApplicationsPage, { applicationsCopy } from "@/components/ApplicationsPage";
import { makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata({lang: "ro", path: "/aplicatii", title: applicationsCopy.ro[2], description: applicationsCopy.ro[3]});
export default function Page() { return <ApplicationsPage lang="ro" />; }
