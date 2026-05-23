import type { Metadata } from "next";
import { ServicesListPage } from "@/components/ServicesPages";
import { servicesText } from "@/lib/services";

export const metadata: Metadata = {
  title: servicesText.ro.title,
  description: servicesText.ro.subtitle,
};

export default function Page() {
  return <ServicesListPage lang="ro" />;
}
