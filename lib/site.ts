export const site = {
  name: "Centrul Medical Revimed PLUS+",
  shortName: "Revimed PLUS+",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Centru medical în Chișinău pentru neurologie, neurochirurgie, reabilitare medicală, fizioterapie, diagnostic funcțional și instrumente digitale pentru pacienți.",
  phone: "+373 60 60 40",
  phone2: "+373 60 10 00",
  email: "revimed@revimed.md",
  address: "Str. Mircea cel Bătrân Nr. 18/1, Chișinău, Ciocana",
  hours: "Luni–Vineri: 09:00–19:00",
  image: "/images/medical-bg.jpg"
};

export const services = [
  {
    title: "Neurological consult",
    slug: "consultatie-neurologica",
    icon: "https://img.icons8.com/color/96/brain.png",
    image: "/images/about-us.jpg",
    description:
      "Consultație neurologică pentru cefalee, amețeli, amorțeli, dureri neuropate, tulburări de somn și simptome ale sistemului nervos.",
    keywords:
      "neurolog Chișinău, consultație neurologică, dureri de cap, amețeli, amorțeli, neuropatie"
  },
  {
    title: "Neuro-surgery consult",
    slug: "consultatie-neurochirurgicala",
    icon: "https://img.icons8.com/color/96/medical-doctor.png",
    image: "/images/medical-bg.jpg",
    description:
      "Consultație neurochirurgicală pentru hernie de disc, dureri lombare și cervicale, radiculopatii și patologii ale coloanei.",
    keywords:
      "neurochirurg Chișinău, hernie de disc, dureri lombare, dureri cervicale, coloană vertebrală"
  },
  {
    title: "Fizionarație și Reabilitare",
    slug: "fizioterapie-reabilitare",
    icon: "https://img.icons8.com/color/96/physical-therapy.png",
    image: "/images/medical-bg.jpg",
    description:
      "Programe personalizate pentru mobilitate, durere, postură, tonus muscular și recuperare funcțională.",
    keywords:
      "fizioterapie Chișinău, reabilitare medicală, recuperare medicală, kinetoterapie"
  },
  {
    title: "Functional diagnostics",
    slug: "diagnostic-functional",
    icon: "https://img.icons8.com/color/96/heart-health.png",
    image: "/images/medical-bg.jpg",
    description:
      "Diagnostic funcțional pentru evaluarea sistemului nervos, aparatului locomotor, circulației și funcțiilor asociate recuperării.",
    keywords:
      "diagnostic funcțional Chișinău, evaluare neurologică, investigații funcționale"
  },
  {
    title: "Bahmeră Therapy",
    slug: "terapie-bemer",
    icon: "https://img.icons8.com/color/96/spa.png",
    image: "/images/medical-bg.jpg",
    description:
      "Terapie pentru susținerea microcirculației, relaxării și recuperării în cadrul unui plan terapeutic responsabil.",
    keywords:
      "Bemer Chișinău, terapie Bemer, microcirculație, recuperare"
  },
  {
    title: "Electrostimulation",
    slug: "electrostimulare",
    icon: "https://img.icons8.com/color/96/electrical.png",
    image: "/images/medical-bg.jpg",
    description:
      "Proceduri pentru activare musculară, tonifiere, recuperare neuromusculară și suport în dureri cronice.",
    keywords:
      "electrostimulare Chișinău, recuperare musculară, stimulare musculară"
  }
];

export const tools = [
  {
    title: "Ayurveda Dosha Test",
    slug: "test-ayurveda-dosha",
    href: "/aplicatii/teste-si-instrumente/test-ayurveda-dosha",
    tag: "Test integrativ",
    image: "/images/medical-bg.jpg",
    description:
      "Chestionar Vata–Pitta–Kapha cu scor, concluzie și protocol educațional cu doze și contraindicații."
  },
  {
    title: "REVIMED Yoga Tibetan",
    slug: "respiratie-terapeutica",
    href: "/aplicatii/teste-si-instrumente/respiratie-terapeutica",
    tag: "Instrument pacient",
    image: "/images/medical-bg.jpg",
    description:
      "Aplicație de respirație ghidată cu programe pentru anxietate, somn, respirație, cardiovascular, digestiv și energie."
  },
  {
    title: "Screening neurologic rapid",
    slug: "screening-neurologic",
    href: "/aplicatii/teste-si-instrumente/screening-neurologic",
    tag: "Autoevaluare",
    image: "/images/medical-bg.jpg",
    description:
      "Instrument educațional pentru simptome neurologice și semnale de alarmă."
  }
];
