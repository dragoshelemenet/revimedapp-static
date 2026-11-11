import type { Metadata } from "next";
import { EquipmentListPage } from "@/components/EquipmentPages";
import { equipmentText } from "@/lib/equipment";
import { makeMetadata } from "@/lib/seo";

export const metadata: Metadata = makeMetadata({
  lang: "ro",
  path: "/utilaj",
  title: equipmentText.ro.title,
  description: equipmentText.ro.subtitle,
});

export default function Page() {
  return <EquipmentListPage lang="ro" />;
}
