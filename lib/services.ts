export type SiteLang = "ro" | "en" | "ru" | "ua";

export type ServiceSection = {
  title: string;
  body: string[];
};

export type ServiceItem = {
  slug: string;
  title: string;
  category: string;
  short: string;
  sections: ServiceSection[];
};

export function normalizeLang(lang?: string): SiteLang {
  if (lang === "en" || lang === "ru" || lang === "ua") return lang;
  return "ro";
}

export function langPrefix(lang: SiteLang) {
  return lang === "ro" ? "" : `/${lang}`;
}

export const servicesText = {
  ro: {
    nav: "Servicii",
    home: "Acasă",
    title: "Servicii medicale Revimed PLUS+",
    subtitle: "Consultații, diagnostic funcțional, fizioterapie, recuperare și terapii complementare organizate clar.",
    open: "Deschide",
    back: "Înapoi la servicii",
    note: "Informațiile au caracter educațional și nu înlocuiesc consultația medicală.",
  },
  en: {
    nav: "Services",
    home: "Home",
    title: "Revimed PLUS+ medical services",
    subtitle: "Consultations, functional diagnostics, physiotherapy, rehabilitation and complementary therapies.",
    open: "Open",
    back: "Back to services",
    note: "The information is educational and does not replace medical consultation.",
  },
  ru: {
    nav: "Услуги",
    home: "Главная",
    title: "Медицинские услуги Revimed PLUS+",
    subtitle: "Консультации, функциональная диагностика, физиотерапия, восстановление и дополнительные процедуры.",
    open: "Открыть",
    back: "Назад к услугам",
    note: "Информация носит образовательный характер и не заменяет консультацию врача.",
  },
  ua: {
    nav: "Послуги",
    home: "Головна",
    title: "Медичні послуги Revimed PLUS+",
    subtitle: "Консультації, функціональна діагностика, фізіотерапія, відновлення та додаткові процедури.",
    open: "Відкрити",
    back: "Назад до послуг",
    note: "Інформація має освітній характер і не замінює консультацію лікаря.",
  },
} as const;

export const servicesRo: ServiceItem[] = [
  {
    slug: "consultatii-neurologice",
    title: "Consultații neurologice",
    category: "Neurologie",
    short: "Evaluare neurologică pentru simptome, dureri, amețeli, amorțeli, tulburări de mers și afecțiuni ale sistemului nervos.",
    sections: [
      {
        title: "Când este utilă consultația",
        body: [
          "dureri de cap, amețeli, vertij sau tulburări de echilibru;",
          "amorțeli, furnicături, slăbiciune musculară sau dureri pe traiect nervos;",
          "tulburări de somn, memorie, concentrare sau oboseală neurologică;",
          "dureri cervicale, lombare sau simptome asociate coloanei vertebrale;",
          "monitorizarea afecțiunilor neurologice deja cunoscute.",
        ],
      },
      {
        title: "Ce include evaluarea",
        body: [
          "discuție despre simptome, istoric, tratamente și factori declanșatori;",
          "examen clinic neurologic orientativ;",
          "recomandări pentru investigații funcționale sau paraclinice, dacă sunt necesare;",
          "plan individual de conduită, recuperare sau monitorizare.",
        ],
      },
      {
        title: "Important",
        body: [
          "Consultația neurologică nu trebuie amânată dacă apar slăbiciune bruscă, tulburări de vorbire, asimetrie facială, pierderea stării de conștiență sau durere de cap severă apărută brusc.",
        ],
      },
    ],
  },
  {
    slug: "consultatii-neurochirurgie",
    title: "Consultații neurochirurgie",
    category: "Neurochirurgie",
    short: "Evaluare pentru patologia coloanei vertebrale, dureri radiculare, hernii de disc și situații care pot necesita opinie neurochirurgicală.",
    sections: [
      {
        title: "Când se recomandă",
        body: [
          "dureri cervicale sau lombare persistente;",
          "durere care coboară pe braț sau picior;",
          "amorțeli, slăbiciune, dificultăți de mers;",
          "hernie de disc, stenoză, compresii nervoase sau modificări imagistice;",
          "nevoie de opinie înainte sau după intervenții.",
        ],
      },
      {
        title: "Scopul consultației",
        body: [
          "stabilirea severității simptomelor;",
          "corelarea simptomelor cu investigațiile existente;",
          "decizia dacă pacientul are nevoie de tratament conservator, recuperare, monitorizare sau trimitere pentru investigații suplimentare.",
        ],
      },
      {
        title: "Notă",
        body: [
          "Nu toate modificările de pe RMN sau CT necesită intervenție. Decizia se ia în funcție de simptome, examen clinic și evoluție.",
        ],
      },
    ],
  },
  {
    slug: "fizioterapie-si-reabilitare",
    title: "Fizioterapie și reabilitare",
    category: "Recuperare",
    short: "Programe personalizate pentru dureri, mobilitate, tonus muscular, recuperare funcțională și reintegrare în activitățile zilnice.",
    sections: [
      {
        title: "Pentru ce poate ajuta",
        body: [
          "dureri de spate, cervicale, lombare sau articulare;",
          "recuperare după suprasolicitare, imobilizare sau episoade dureroase;",
          "îmbunătățirea mobilității, coordonării și echilibrului;",
          "refacerea tonusului muscular și prevenirea recidivelor;",
          "programe adaptate vârstei, toleranței și obiectivelor pacientului.",
        ],
      },
      {
        title: "Cum se organizează",
        body: [
          "evaluare inițială a simptomelor și limitărilor;",
          "alegerea procedurilor potrivite;",
          "exerciții ghidate, recomandări pentru acasă și monitorizare progresivă;",
          "ajustarea planului în funcție de răspunsul pacientului.",
        ],
      },
    ],
  },
  {
    slug: "diagnostic-functional",
    title: "Diagnostic funcțional",
    category: "Evaluare",
    short: "Evaluări funcționale pentru sistemul nervos, mușchi, coordonare, circulație și parametri orientativi ai organismului.",
    sections: [
      {
        title: "Rolul diagnosticului funcțional",
        body: [
          "Diagnosticarea funcțională ajută medicul să înțeleagă cum funcționează organismul, nu doar cum arată structural.",
          "Poate completa consultația prin date despre activitate nervoasă, circulație, reacții vegetative, mișcare sau parametri metabolici orientativi.",
        ],
      },
      {
        title: "Ce poate include",
        body: [
          "evaluări neurologice funcționale;",
          "teste computerizate și chestionare clinice;",
          "analize orientative ale circulației sau parametrilor funcționali;",
          "recomandări pentru investigații suplimentare, când este necesar.",
        ],
      },
      {
        title: "Limitări",
        body: [
          "Diagnosticarea funcțională nu înlocuiește analizele de laborator, imagistica sau consultația specialistului atunci când acestea sunt indicate.",
        ],
      },
    ],
  },
  {
    slug: "terapie-balneara",
    title: "Terapie balneară",
    category: "Balneoterapie",
    short: "Proceduri balneare, nămol, hidroterapie și terapii complementare pentru relaxare, recuperare și susținere funcțională.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Terapia balneară folosește factori naturali sau proceduri inspirate din balneologie pentru relaxare, recuperare și susținere funcțională.",
          "Poate include băi, nămol, hidroterapie și proceduri combinate, în funcție de indicația medicală.",
        ],
      },
      {
        title: "Pentru ce poate fi utilă",
        body: [
          "dureri musculo-articulare cronice;",
          "tensiune musculară și oboseală;",
          "recuperare după episoade dureroase sau suprasolicitare;",
          "relaxare, circulație periferică și confort general.",
        ],
      },
      {
        title: "Precauții",
        body: [
          "Procedurile calde sau balneare se adaptează în boli cardiovasculare, hipertensiune, afecțiuni acute, sarcină sau alte situații speciale.",
        ],
      },
    ],
  },
  {
    slug: "electroterapie",
    title: "Electroterapie",
    category: "Fizioterapie",
    short: "Proceduri cu curenți terapeutici, electrostimulare, electroforeză și metode complementare pentru durere, tonus și recuperare.",
    sections: [
      {
        title: "Ce este electroterapia",
        body: [
          "Electroterapia folosește forme controlate de curent electric în scop fizioterapeutic.",
          "Poate fi utilizată pentru durere, relaxare musculară, stimulare, recuperare funcțională sau administrare locală prin electroforeză, în funcție de protocol.",
        ],
      },
      {
        title: "Proceduri posibile",
        body: [
          "electrostimulare musculară;",
          "electroneurostimulare;",
          "electroforeză medicamentoasă;",
          "curenți modulați sau combinați;",
          "proceduri adaptate în funcție de toleranță și indicație.",
        ],
      },
      {
        title: "Contraindicații generale",
        body: [
          "stimulator cardiac, epilepsie, sarcină, leziuni ale pielii în zona electrozilor, afecțiuni acute sau intoleranță la curent necesită evaluare medicală înainte de procedură.",
        ],
      },
    ],
  },
];

export function getServiceRo(slug: string) {
  return servicesRo.find((item) => item.slug === slug);
}
