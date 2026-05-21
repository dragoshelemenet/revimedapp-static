import type { Lang } from "@/lib/i18n";

export type GalleryLabelKey =
 | "reception"
 | "friendly_staff"
 | "rehabilitation"
 | "therapeutic_procedures"
 | "doctor_igor_revenco"
 | "therapy_room";

export const galleryLabels: Record<Lang, Record<GalleryLabelKey, string>> = {
 ro: {
  reception: "Recepție Revimed PLUS+",
  friendly_staff: "Angajați prietenoși",
  rehabilitation: "Reabilitare medicală",
  therapeutic_procedures: "Proceduri terapeutice",
  doctor_igor_revenco: "Doctor Igor Revenco",
  therapy_room: "Sală de terapie"
 },
 en: {
  reception: "Revimed PLUS+ Reception",
  friendly_staff: "Friendly Staff",
  rehabilitation: "Medical Rehabilitation",
  therapeutic_procedures: "Therapeutic Procedures",
  doctor_igor_revenco: "Doctor Igor Revenco",
  therapy_room: "Therapy Room"
 },
 ru: {
  reception: "Ресепшн Revimed PLUS+",
  friendly_staff: "Дружелюбный персонал",
  rehabilitation: "Медицинская реабилитация",
  therapeutic_procedures: "Терапевтические процедуры",
  doctor_igor_revenco: "Доктор Игорь Ревенко",
  therapy_room: "Терапевтический зал"
 },
 ua: {
  reception: "Рецепція Revimed PLUS+",
  friendly_staff: "Дружній персонал",
  rehabilitation: "Медична реабілітація",
  therapeutic_procedures: "Терапевтичні процедури",
  doctor_igor_revenco: "Доктор Ігор Ревенко",
  therapy_room: "Терапевтична зала"
 }
};

function fileName(value: string) {
 return String(value || "").split("/").pop()?.toLowerCase() || "";
}

export function galleryLabelKeyFromImage(image: string, fallbackTitle?: string): GalleryLabelKey | null {
 const file = fileName(image);
 const title = String(fallbackTitle || "").toLowerCase();

 if (
  file.includes("1pic") ||
  file === "1.jpg" ||
  title.includes("recep") ||
  title.includes("recept")
 ) return "reception";

 if (
  file.includes("3pic") ||
  file === "2.jpg" ||
  title.includes("consulta") ||
  title.includes("sala de consulta") ||
  title.includes("consult")
 ) return "friendly_staff";

 if (
  file.includes("4pic") ||
  file === "3.jpg" ||
  title.includes("reabilitare") ||
  title.includes("rehabilitation")
 ) return "rehabilitation";

 if (
  file.includes("5pic") ||
  file === "4.jpg" ||
  title.includes("proced")
 ) return "therapeutic_procedures";

 if (
  file.includes("6pic") ||
  file === "5.jpg" ||
  title.includes("cabinet") ||
  title.includes("clinic") ||
  title.includes("clinici")
 ) return "doctor_igor_revenco";

 if (
  file.includes("2pic") ||
  file === "6.jpg" ||
  title.includes("terapie") ||
  title.includes("facilit")
 ) return "therapy_room";

 return null;
}

export function getGalleryLabel(lang: Lang, image: string, fallbackTitle?: string) {
 const key = galleryLabelKeyFromImage(image, fallbackTitle);
 if (!key) return fallbackTitle || "";
 return galleryLabels[lang]?.[key] || galleryLabels.ro[key] || fallbackTitle || "";
}
