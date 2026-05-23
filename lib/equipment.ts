export type SiteLang = "ro" | "en" | "ru" | "ua";

export type EquipmentSection = {
  title: string;
  body: string[];
};

export type EquipmentItem = {
  slug: string;
  title: string;
  category: string;
  short: string;
  sections: EquipmentSection[];
};

export function normalizeLang(lang?: string): SiteLang {
  if (lang === "en" || lang === "ru" || lang === "ua") return lang;
  return "ro";
}

export function langPrefix(lang: SiteLang) {
  return lang === "ro" ? "" : `/${lang}`;
}

export const equipmentItems: EquipmentItem[] = [
  {
    slug: "aparat-amp",
    title: "Aparat AMP",
    category: "Diagnostic expres",
    short: "Analizator spectral al formulei sanguine / laborator expres pentru evaluare rapidă, neinvazivă.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Aparatul AMP este prezentat ca un analizator spectral al formulei sanguine, folosit pentru evaluarea rapidă a unor parametri funcționali ai organismului, fără recoltare clasică de sânge.",
          "Metoda descrisă utilizează senzori/microprocesoare aplicați pe corp și analiză spectrală/infraroșie, cu scopul de a oferi medicului o imagine orientativă asupra stării funcționale, metabolice și hemodinamice.",
        ],
      },
      {
        title: "Ce poate evalua orientativ",
        body: [
          "formulă sanguină și parametri metabolici;",
          "schimburi electrolitice și indicatori ai conducerii neuromusculare;",
          "circulație, consum de oxigen și echilibru funcțional al unor organe;",
          "procese inflamatorii orientative, compensare funcțională și status metabolic;",
          "date utile pentru discuția cu medicul, nu diagnostic automat.",
        ],
      },
      {
        title: "Important",
        body: [
          "Rezultatele trebuie interpretate de medic în context clinic, împreună cu simptomele, istoricul pacientului și investigațiile necesare.",
          "Pagina este informativă și va fi completată ulterior cu imagini, exemple de raport și explicații pentru pacient.",
        ],
      },
    ],
  },
  {
    slug: "electrosomn-4t",
    title: "Electrosomn-4T",
    category: "Electrosomn",
    short: "Aparat portabil pentru terapia prin electrosomn.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Electrosomnul este o metodă de terapie neurotropă bazată pe influența impulsurilor electrice de joasă frecvență și intensitate mică asupra sistemului nervos central.",
          "În documentația clasică, metoda este asociată cu efecte sedative, anti-stres, de reglare funcțională și de susținere a somnului fiziologic.",
        ],
      },
      {
        title: "Utilizare orientativă",
        body: [
          "stări de stres, oboseală și suprasolicitare;",
          "tulburări funcționale ale somnului;",
          "nevroze, distonie vegetativă și reacții vegetative;",
          "recuperare și reglare funcțională sub supraveghere medicală.",
        ],
      },
      {
        title: "Atenționări",
        body: [
          "Procedura se indică doar după evaluare medicală.",
          "Există contraindicații pentru anumite afecțiuni oculare, neurologice, cardiovasculare sau pentru intoleranță individuală la curent.",
        ],
      },
    ],
  },
  {
    slug: "electrosomn-5-es-10-5",
    title: "Electrosomn-5 / ES-10-5",
    category: "Electrosomn",
    short: "Aparat portabil pentru terapia prin electrosomn.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Electrosomn-5 / ES-10-5 aparține gamei de aparate portabile pentru proceduri de electrosomn.",
          "Metoda urmărește influențarea blândă a sistemului nervos central prin impulsuri cu parametri controlați, în condiții de repaus și confort.",
        ],
      },
      {
        title: "Rol în cabinet",
        body: [
          "susținerea relaxării și reducerea tensiunii neurovegetative;",
          "proceduri de fizioterapie orientate spre reglare funcțională;",
          "completarea planurilor de recuperare, atunci când medicul consideră potrivit.",
        ],
      },
    ],
  },
  {
    slug: "electrosomn-3",
    title: "Electrosomn-3",
    category: "Electrosomn",
    short: "Aparat staționar pentru terapia prin electrosomn, pentru 4 pacienți simultan.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Electrosomn-3 este descris ca aparat staționar pentru proceduri de electrosomn, cu posibilitatea de lucru simultan pentru mai mulți pacienți.",
          "Procedurile se efectuează de obicei într-un mediu liniștit, cu lumină redusă și temperatură confortabilă.",
        ],
      },
      {
        title: "Protocol orientativ",
        body: [
          "durata inițială poate fi mai scurtă, apoi se ajustează gradual;",
          "un curs poate include mai multe proceduri, stabilite individual;",
          "parametrii se aleg în funcție de toleranță, obiectiv și indicația medicală.",
        ],
      },
    ],
  },
  {
    slug: "etrans-1",
    title: "Etrans-1",
    category: "Electroanalgezie transcraniană",
    short: "Aparat pentru electroanalgezie / electrotranchilizare transcraniană.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Etrans-1 este asociat cu proceduri de electroanalgezie și electrotranchilizare transcraniană.",
          "Metoda este descrisă ca influență neurotropă prin curenți impulsionali, orientată spre efect sedativ, tranchilizant și analgezic.",
        ],
      },
      {
        title: "Utilizare orientativă",
        body: [
          "dureri de origine neurologică sau vertebrogenă;",
          "tensiune neuromusculară, stres, oboseală;",
          "tulburări de somn și reacții vegetative;",
          "proceduri de susținere în recuperare, sub control medical.",
        ],
      },
      {
        title: "Contraindicații generale",
        body: [
          "epilepsie, tulburări severe de ritm cardiac, stimulator cardiac implantat, leziuni ale pielii în zona electrozilor, intoleranță individuală.",
        ],
      },
    ],
  },
  {
    slug: "etrans-2",
    title: "Etrans-2",
    category: "Electroanalgezie transcraniană",
    short: "Aparat pentru proceduri transcraniene de tip electroanalgezie/electrotranchilizare.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Etrans-2 face parte din gama de aparate utilizate pentru proceduri transcraniene cu efecte neurotrope orientative.",
          "Procedura urmărește stimularea controlată a unor mecanisme de reglare ale sistemului nervos.",
        ],
      },
      {
        title: "Observații",
        body: [
          "Indicația, durata și parametrii procedurii se stabilesc individual.",
          "Nu se aplică fără evaluare medicală și fără excluderea contraindicațiilor.",
        ],
      },
    ],
  },
  {
    slug: "etrans-3",
    title: "Etrans-3",
    category: "Electroanalgezie transcraniană",
    short: "Aparat pentru proceduri transcraniene de electroanalgezie.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Etrans-3 este inclus în categoria echipamentelor pentru electroanalgezie transcraniană.",
          "Poate fi integrat în proceduri de recuperare și fizioterapie atunci când medicul consideră potrivit.",
        ],
      },
    ],
  },
  {
    slug: "transair-01p-transair-05",
    title: "Transair-01P / Transair-05",
    category: "Stimulare transcraniană",
    short: "Aparat din gama Transair pentru proceduri de stimulare transcraniană.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Transair-01P / Transair-05 este menționat în grupul aparatelor folosite pentru proceduri transcraniene cu curenți impulsionali.",
          "Se utilizează în contexte de fizioterapie și recuperare funcțională, cu parametri individualizați.",
        ],
      },
    ],
  },
  {
    slug: "transair-01s-transair-04",
    title: "Transair-01S / Transair-04",
    category: "Stimulare transcraniană",
    short: "Aparat Transair pentru proceduri transcraniene.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Transair-01S / Transair-04 este o variantă din gama Transair, folosită pentru proceduri de stimulare transcraniană.",
          "Poate fi asociată cu protocoale de relaxare, control al durerii și reglare neurovegetativă, în funcție de indicație.",
        ],
      },
    ],
  },
  {
    slug: "transair-01s-transair-03",
    title: "Transair-01S / Transair-03",
    category: "Stimulare transcraniană",
    short: "Aparat Transair pentru proceduri de stimulare transcraniană.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Transair-01S / Transair-03 este inclus în lista echipamentelor pentru proceduri transcraniene.",
          "Pagina va fi completată ulterior cu specificații, imagini, mod de lucru și explicații pentru pacienți.",
        ],
      },
    ],
  },
  {
    slug: "lenar",
    title: "LENAR",
    category: "Neurostimulare",
    short: "Echipament utilizat în proceduri de neurostimulare și reglare funcțională.",
    sections: [
      {
        title: "Descriere",
        body: [
          "LENAR este menționat în categoria aparatelor pentru proceduri transcraniene și neurostimulare.",
          "Este asociat cu metode de influențare funcțională a sistemului nervos, în contexte medicale și fizioterapeutice.",
        ],
      },
    ],
  },
  {
    slug: "bi-lenar",
    title: "Bi-LENAR",
    category: "Neurostimulare",
    short: "Echipament din gama LENAR pentru proceduri funcționale.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Bi-LENAR este o variantă din gama LENAR, utilizată în proceduri funcționale de neurostimulare.",
          "Indicațiile se stabilesc individual, în funcție de pacient și obiectivul terapeutic.",
        ],
      },
    ],
  },
  {
    slug: "mdm-k",
    title: "MDM-K",
    category: "Modulare mezodiencefalică",
    short: "Aparat compact pentru modulare mezodiencefalică.",
    sections: [
      {
        title: "Descriere",
        body: [
          "MDM-K este un aparat compact pentru modulare mezodiencefalică.",
          "Metoda MDM este descrisă ca o variantă a procedurilor transcraniene, orientată spre influențarea structurilor mezodiencefalice și mecanismelor centrale de reglare.",
        ],
      },
      {
        title: "Utilizare orientativă",
        body: [
          "proceduri de reglare neurovegetativă;",
          "recuperare funcțională;",
          "suport în tulburări funcționale neurologice, după evaluarea medicului.",
        ],
      },
    ],
  },
  {
    slug: "mdm-101",
    title: "MDM-101",
    category: "Modulare mezodiencefalică",
    short: "Aparat MDM pentru 4 pacienți.",
    sections: [
      {
        title: "Descriere",
        body: [
          "MDM-101 este descris ca aparat destinat procedurilor MDM, cu posibilitatea de lucru pentru mai mulți pacienți.",
          "Procedurile se aplică doar cu parametri controlați și indicație individuală.",
        ],
      },
    ],
  },
  {
    slug: "mdm-2000",
    title: "MDM-2000",
    category: "Modulare mezodiencefalică",
    short: "Complex computerizat pentru MDM.",
    sections: [
      {
        title: "Descriere",
        body: [
          "MDM-2000 este prezentat ca un complex computerizat pentru modulare mezodiencefalică.",
          "Pagina va fi extinsă ulterior cu detalii tehnice, aplicații orientative și imagini.",
        ],
      },
    ],
  },
  {
    slug: "amplipuls-4",
    title: "Amplipuls-4",
    category: "Amplipulsterapie",
    short: "Aparat pentru amplipulsterapie transcraniană.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Amplipuls-4 este folosit pentru proceduri de amplipulsterapie, inclusiv transcraniană, cu curenți sinusoidali modulați.",
          "Metoda este descrisă ca având efecte asupra mecanismelor neurohumorale, reglării funcționale și controlului durerii.",
        ],
      },
      {
        title: "Protocol orientativ",
        body: [
          "durata, frecvența și intensitatea se stabilesc individual;",
          "poate fi inclus în cursuri de fizioterapie;",
          "nu se aplică fără evaluarea contraindicațiilor.",
        ],
      },
    ],
  },
  {
    slug: "amplipuls-5",
    title: "Amplipuls-5",
    category: "Amplipulsterapie",
    short: "Aparat pentru proceduri de amplipulsterapie.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Amplipuls-5 este inclus în categoria aparatelor pentru amplipulsterapie.",
          "Se folosește în fizioterapie pentru proceduri cu curenți modulați, conform indicației medicale.",
        ],
      },
    ],
  },
  {
    slug: "amplipuls-6",
    title: "Amplipuls-6",
    category: "Amplipulsterapie",
    short: "Aparat pentru proceduri de amplipulsterapie.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Amplipuls-6 este un aparat pentru proceduri de amplipulsterapie, utilizat în fizioterapie și recuperare.",
          "Pagina va fi completată ulterior cu diferențe față de alte modele și detalii practice.",
        ],
      },
    ],
  },
  {
    slug: "kandadzia-kang-da-jia-lqx-2000a",
    title: "Kandadzia / Kang Da Jia / LQX-2000A",
    category: "Vibromasaj și masaj reflex",
    short: "Aparat vibromasaj / electrostimulator de masaj reflex pentru zone reflexogene.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Kandadzia, cunoscut și ca Kang Da Jia / LQX-2000A, este descris ca aparat vibromasaj de acțiune reflexă pentru scopuri fiziologice și cosmetologice.",
          "Aparatul urmărește stimularea zonelor reflexe ale tălpilor, mâinilor și punctelor active, printr-un disc de masaj cu mișcare rapidă.",
        ],
      },
      {
        title: "Efecte orientative menționate",
        body: [
          "stimularea circulației și a microcirculației;",
          "relaxare musculară și activarea zonelor reflexe;",
          "susținerea tonusului general și a senzației de energie;",
          "masaj reflex pentru tălpi, mâini și alte zone.",
        ],
      },
      {
        title: "Important",
        body: [
          "Beneficiile sunt orientative și trebuie adaptate la starea pacientului.",
          "Nu se folosește peste leziuni, inflamații acute sau în situații în care medicul contraindică masajul/vibrațiile.",
        ],
      },
    ],
  },
  {
    slug: "aparat-electroforeza-medicamentoasa",
    title: "Aparat pentru electroforeză medicamentoasă",
    category: "Electroforeză",
    short: "Echipament pentru proceduri de electroforeză medicamentoasă.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Electroforeza medicamentoasă, numită și ionoforeză, combină acțiunea curentului electric continuu cu introducerea locală a unei substanțe medicamentoase.",
          "Metoda permite depozitarea unei cantități mici de substanță în piele și pătrunderea graduală în țesuturi, conform indicației medicale.",
        ],
      },
      {
        title: "Avantaje orientative",
        body: [
          "administrare locală, în doze mici;",
          "acțiune prelungită prin depozit cutanat;",
          "posibilă concentrare locală mai bună în zona dintre electrozi;",
          "integrare în protocoale de fizioterapie.",
        ],
      },
      {
        title: "Atenționări",
        body: [
          "Nu toate medicamentele pot fi folosite prin electroforeză.",
          "Procedura se efectuează doar cu substanțe indicate de medic și cu respectarea protocolului de fizioterapie.",
        ],
      },
    ],
  },
  {
    slug: "spectr-lc",
    title: "Spectr-LC",
    category: "Infraroșu",
    short: "Aparat pentru iradiere infraroșie.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Spectr-LC este menționat ca aparat pentru iradiere infraroșie.",
          "Poate fi utilizat ca procedură termică de pregătire sau suport în fizioterapie, inclusiv înaintea unor proceduri precum electroforeza, atunci când este indicat.",
        ],
      },
    ],
  },
  {
    slug: "lampa-solux",
    title: "Lampă Solux",
    category: "Proceduri termice",
    short: "Lampă pentru proceduri termice.",
    sections: [
      {
        title: "Descriere",
        body: [
          "Lampa Solux este utilizată pentru proceduri termice locale.",
          "Poate contribui la încălzirea țesuturilor, relaxarea locală și pregătirea zonei pentru anumite proceduri fizioterapeutice.",
        ],
      },
    ],
  },
  {
    slug: "detox-spa-bio",
    title: "DETOX Spa Bio",
    category: "Detoxifiere ionică",
    short: "Sistem de curățare ionică / detoxifiere.",
    sections: [
      {
        title: "Descriere",
        body: [
          "DETOX Spa Bio este prezentat ca sistem de curățare ionică și detoxifiere.",
          "În comunicarea medicală modernă, astfel de proceduri trebuie explicate prudent: pot fi prezentate ca proceduri de relaxare și suport wellness, fără promisiuni medicale exagerate.",
        ],
      },
      {
        title: "Important",
        body: [
          "Nu înlocuiește tratamentele medicale și nu trebuie prezentat ca metodă garantată de eliminare a toxinelor.",
          "Se recomandă informarea pacientului și adaptarea procedurii la starea generală.",
        ],
      },
    ],
  },
  {
    slug: "spa-sy-f088-detox-bio-178",
    title: "SPA SY-F088 / DETOX BIO-178",
    category: "Detoxifiere ionică",
    short: "Sistem de curățare și detoxifiere.",
    sections: [
      {
        title: "Descriere",
        body: [
          "SPA SY-F088 / DETOX BIO-178 este menționat ca sistem de curățare și detoxifiere.",
          "Pagina este pregătită pentru completare cu descriere clară, fotografii, protocol de folosire și avertismente corecte.",
        ],
      },
    ],
  },
  {
    slug: "rheotest",
    title: "RHEOTEST",
    category: "Diagnostic funcțional",
    short: "Reograf computerizat.",
    sections: [
      {
        title: "Descriere",
        body: [
          "RHEOTEST este un reograf computerizat folosit în evaluarea funcțională a circulației.",
          "Reografia poate oferi informații orientative despre parametri hemodinamici și circulatori, care se interpretează de medic în context clinic.",
        ],
      },
      {
        title: "Utilizare orientativă",
        body: [
          "evaluare funcțională vasculară;",
          "monitorizarea unor parametri circulatori;",
          "completarea tabloului clinic în diagnostic funcțional.",
        ],
      },
    ],
  },
];

export function getEquipmentItem(slug: string) {
  return equipmentItems.find((item) => item.slug === slug);
}

export const equipmentText = {
  ro: {
    nav: "Utilaj",
    home: "Acasă",
    title: "Utilaj medical Revimed PLUS+",
    subtitle: "Echipamente, aparate și metode utilizate pentru diagnostic funcțional, recuperare, fizioterapie și proceduri complementare.",
    open: "Deschide",
    back: "Înapoi la utilaj",
    note: "Informațiile au caracter educațional și nu înlocuiesc consultația medicală.",
  },
  en: {
    nav: "Equipment",
    home: "Home",
    title: "Revimed PLUS+ medical equipment",
    subtitle: "Equipment and methods used for functional diagnostics, recovery, physiotherapy and complementary procedures.",
    open: "Open",
    back: "Back to equipment",
    note: "The information is educational and does not replace medical consultation.",
  },
  ru: {
    nav: "Оборудование",
    home: "Главная",
    title: "Медицинское оборудование Revimed PLUS+",
    subtitle: "Оборудование и методы для функциональной диагностики, восстановления, физиотерапии и дополнительных процедур.",
    open: "Открыть",
    back: "Назад к оборудованию",
    note: "Информация носит образовательный характер и не заменяет консультацию врача.",
  },
  ua: {
    nav: "Обладнання",
    home: "Головна",
    title: "Медичне обладнання Revimed PLUS+",
    subtitle: "Обладнання та методи для функціональної діагностики, відновлення, фізіотерапії та додаткових процедур.",
    open: "Відкрити",
    back: "Назад до обладнання",
    note: "Інформація має освітній характер і не замінює консультацію лікаря.",
  },
} as const;
