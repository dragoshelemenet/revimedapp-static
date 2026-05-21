import type { Lang } from "@/lib/i18n";
import { getGalleryLabel } from "@/lib/galleryLabels";

const translations: Record<Lang, Record<string, string>> = {
 ro: {},
 en: {
  "Recepție Revimed PLUS+": "Revimed PLUS+ Reception",
  "Recepție": "Reception",
  "Sala de Consultații": "Consultation Room",
  "Angajați prietenoși": "Friendly Staff",
  "Reabilitare": "Medical Rehabilitation",
  "Reabilitare medicală": "Medical Rehabilitation",
  "Proceduri terapeutice": "Therapeutic Procedures",
  "Doctor Igor Revenco": "Doctor Igor Revenco",
  "Sală de terapie": "Therapy Room",
  "Facilități Moderne": "Modern Facilities",
  "Personal Medical": "Medical Staff",
  "Clinici": "Clinic",
  "Clinic": "Clinic",
  "Echipamente Medicale": "Medical Equipment"
 },
 ru: {
  "Recepție Revimed PLUS+": "Ресепшн Revimed PLUS+",
  "Recepție": "Ресепшн",
  "Sala de Consultații": "Кабинет консультаций",
  "Angajați prietenoși": "Дружелюбный персонал",
  "Reabilitare": "Медицинская реабилитация",
  "Reabilitare medicală": "Медицинская реабилитация",
  "Proceduri terapeutice": "Терапевтические процедуры",
  "Doctor Igor Revenco": "Доктор Игорь Ревенко",
  "Sală de terapie": "Терапевтический зал",
  "Facilități Moderne": "Современные условия",
  "Personal Medical": "Медицинский персонал",
  "Clinici": "Клиника",
  "Clinic": "Клиника",
  "Echipamente Medicale": "Медицинское оборудование"
 },
 ua: {
  "Recepție Revimed PLUS+": "Ресепшн Revimed PLUS+",
  "Recepție": "Ресепшн",
  "Sala de Consultații": "Кабінет консультацій",
  "Angajați prietenoși": "Дружній персонал",
  "Reabilitare": "Медична реабілітація",
  "Reabilitare medicală": "Медична реабілітація",
  "Proceduri terapeutice": "Терапевтичні процедури",
  "Doctor Igor Revenco": "Доктор Ігор Ревенко",
  "Sală de terapie": "Терапевтична зала",
  "Facilități Moderne": "Сучасні умови",
  "Personal Medical": "Медичний персонал",
  "Clinici": "Клініка",
  "Clinic": "Клініка",
  "Echipamente Medicale": "Медичне обладнання"
 }
};

const byImage: Record<Lang, Record<string, string>> = {
 ro: {},
 en: {
  "2pic.jpg": "Revimed PLUS+ Reception",
  "3pic.jpg": "Medical Consultation",
  "4pic.jpg": "Medical Rehabilitation",
  "5pic.jpg": "Therapeutic Procedures",
  "6pic.jpg": "Medical Office",
  "1pic.jpg": "Therapy Room",
  "1.jpg": "Revimed PLUS+ Reception",
  "2.jpg": "Medical Consultation",
  "3.jpg": "Medical Rehabilitation",
  "4.jpg": "Therapeutic Procedures",
  "5.jpg": "Medical Office",
  "6.jpg": "Therapy Room"
 },
 ru: {
  "2pic.jpg": "Ресепшн Revimed PLUS+",
  "3pic.jpg": "Медицинская консультация",
  "4pic.jpg": "Медицинская реабилитация",
  "5pic.jpg": "Терапевтические процедуры",
  "6pic.jpg": "Медицинский кабинет",
  "1pic.jpg": "Терапевтический зал",
  "1.jpg": "Ресепшн Revimed PLUS+",
  "2.jpg": "Медицинская консультация",
  "3.jpg": "Медицинская реабилитация",
  "4.jpg": "Терапевтические процедуры",
  "5.jpg": "Медицинский кабинет",
  "6.jpg": "Терапевтический зал"
 },
 ua: {
  "2pic.jpg": "Ресепшн Revimed PLUS+",
  "3pic.jpg": "Медична консультація",
  "4pic.jpg": "Медична реабілітація",
  "5pic.jpg": "Терапевтичні процедури",
  "6pic.jpg": "Медичний кабінет",
  "1pic.jpg": "Терапевтична зала",
  "1.jpg": "Ресепшн Revimed PLUS+",
  "2.jpg": "Медична консультація",
  "3.jpg": "Медична реабілітація",
  "4.jpg": "Терапевтичні процедури",
  "5.jpg": "Медичний кабінет",
  "6.jpg": "Терапевтична зала"
 }
};

export function translateGalleryTitle(lang: Lang, title: string, image?: string) {
 if (lang === "ro") return title;

 const cleanTitle = String(title || "").trim();
 const direct = translations[lang]?.[cleanTitle];
 if (direct) return direct;

 const file = String(image || "").split("/").pop() || "";
 const byFile = byImage[lang]?.[file];
 if (byFile) return byFile;

 return cleanTitle;
}
