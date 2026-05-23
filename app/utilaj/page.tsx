import type { Metadata } from "next";
import { EquipmentListPage } from "@/components/EquipmentPages";
import { equipmentText } from "@/lib/equipment";

export const metadata: Metadata = {
  title: equipmentText.ro.seoTitle,
  description: equipmentText.ro.seoDescription,
};

export default function Page() {
  return <EquipmentListPage lang="ro" />;
}
