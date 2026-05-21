import { GalleryTemplate } from "@/lib/pageTemplates";


function forcedGalleryTitle(title: string, image?: string, lang: "ro" | "en" | "ru" | "ua" = "ro") {
 const file = String(image || "").split("/").pop()?.toLowerCase() || "";
 const t = String(title || "").toLowerCase();

 const labels = {
  ro: {
   friendly: "Angajați prietenoși",
   doctor: "Doctor Igor Revenco",
   reception: "Recepție Revimed PLUS+",
   rehabilitation: "Reabilitare medicală",
   procedures: "Proceduri terapeutice",
   therapy: "Sală de terapie"
  },
  en: {
   friendly: "Friendly Staff",
   doctor: "Doctor Igor Revenco",
   reception: "Revimed PLUS+ Reception",
   rehabilitation: "Medical Rehabilitation",
   procedures: "Therapeutic Procedures",
   therapy: "Therapy Room"
  },
  ru: {
   friendly: "Дружелюбный персонал",
   doctor: "Доктор Игорь Ревенко",
   reception: "Ресепшн Revimed PLUS+",
   rehabilitation: "Медицинская реабилитация",
   procedures: "Терапевтические процедуры",
   therapy: "Терапевтический зал"
  },
  ua: {
   friendly: "Дружній персонал",
   doctor: "Доктор Ігор Ревенко",
   reception: "Рецепція Revimed PLUS+",
   rehabilitation: "Медична реабілітація",
   procedures: "Терапевтичні процедури",
   therapy: "Терапевтична зала"
  }
 } as const;

 const pack = labels[lang] || labels.ro;

 if (file.includes("3pic") || file.includes("blue") || t.includes("consulta")) return pack.friendly;
 if (file.includes("6pic") || t.includes("cabinet") || t.includes("clinic")) return pack.doctor;
 if (file.includes("1pic") || t.includes("recep")) return pack.reception;
 if (file.includes("4pic") || t.includes("reabilitare")) return pack.rehabilitation;
 if (file.includes("5pic") || t.includes("proced")) return pack.procedures;
 if (file.includes("2pic") || t.includes("terapie") || t.includes("sală")) return pack.therapy;

 return title;
}

export const dynamic = "force-dynamic";
export const metadata = { title: "Galerie" };
const lang: "ro" = "ro";

export default function Page() {
 return <GalleryTemplate lang="ro" />;
}
