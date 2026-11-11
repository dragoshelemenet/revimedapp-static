import type { Metadata } from "next";
import { ServicesListPage } from "@/components/ServicesPages";
import { servicesText } from "@/lib/services";
import { makeMetadata } from "@/lib/seo";

export const metadata: Metadata = makeMetadata({
  lang: "ro",
  path: "/servicii",
  title: servicesText.ro.title,
  description: servicesText.ro.subtitle,
});

export default function Page() {
  return <ServicesListPage lang="ro" />;
}
