import type { Lang } from "@/lib/i18n";

export type AppTool = {
  slug: string;
  href: string;
  title: string;
  description: string;
  tag: string;
  image: string;
};

const base = {
  ayurveda: {
    slug: "test-ayurveda-dosha",
    href: "/aplicatii/teste-si-instrumente/test-ayurveda-dosha",
    image: "/images/medical-bg.jpg"
  },
  breathing: {
    slug: "respiratie-terapeutica",
    href: "/aplicatii/teste-si-instrumente/respiratie-terapeutica",
    image: "/images/medical-bg.jpg"
  },
  neuro: {
    slug: "screening-neurologic",
    href: "/aplicatii/teste-si-instrumente/screening-neurologic",
    image: "/images/medical-bg.jpg"
  }
};

const text: Record<Lang, AppTool[]> = {
  ro: [
    {
      ...base.ayurveda,
      title: "Test Ayurveda Dosha",
      description: "Identifică orientativ profilul Vata, Pitta sau Kapha și primește recomandări educaționale.",
      tag: "Ayurveda"
    },
    {
      ...base.breathing,
      title: "Respirație Terapeutică",
      description: "Exerciții ghidate de respirație pentru calm, ritm și relaxare.",
      tag: "Respirație"
    },
    {
      ...base.neuro,
      title: "Screening Neurologic",
      description: "Chestionar educațional pentru simptome neurologice și semnale de alarmă.",
      tag: "Neurologie"
    }
  ],
  en: [
    {
      ...base.ayurveda,
      title: "Ayurveda Dosha Test",
      description: "Identify your Vata, Pitta or Kapha tendency and receive educational recommendations.",
      tag: "Ayurveda"
    },
    {
      ...base.breathing,
      title: "Therapeutic Breathing",
      description: "Guided breathing exercises for calm, rhythm and relaxation.",
      tag: "Breathing"
    },
    {
      ...base.neuro,
      title: "Neurological Screening",
      description: "Educational questionnaire for neurological symptoms and red flags.",
      tag: "Neurology"
    }
  ],
  ru: [
    {
      ...base.ayurveda,
      title: "Тест Ayurveda Dosha",
      description: "Определите ориентировочный профиль Vata, Pitta или Kapha и получите образовательные рекомендации.",
      tag: "Ayurveda"
    },
    {
      ...base.breathing,
      title: "Терапевтическое дыхание",
      description: "Управляемые дыхательные упражнения для спокойствия, ритма и расслабления.",
      tag: "Дыхание"
    },
    {
      ...base.neuro,
      title: "Неврологический скрининг",
      description: "Образовательная анкета для неврологических симптомов и тревожных признаков.",
      tag: "Неврология"
    }
  ],
  ua: [
    {
      ...base.ayurveda,
      title: "Тест Ayurveda Dosha",
      description: "Визначте орієнтовний профіль Vata, Pitta або Kapha та отримайте освітні рекомендації.",
      tag: "Ayurveda"
    },
    {
      ...base.breathing,
      title: "Терапевтичне дихання",
      description: "Керовані дихальні вправи для спокою, ритму та розслаблення.",
      tag: "Дихання"
    },
    {
      ...base.neuro,
      title: "Неврологічний скринінг",
      description: "Освітня анкета для неврологічних симптомів і тривожних ознак.",
      tag: "Неврологія"
    }
  ]
};

export function translatedTools(lang: Lang) {
  return text[lang] || text.ro;
}
