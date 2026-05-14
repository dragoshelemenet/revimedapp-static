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
  image: "/images/revimed-og.jpg"
};

export const services = [
  {
    title: "Consultație neurologică",
    slug: "consultatie-neurologica",
    icon: "🧠",
    image: "/images/neurologie.jpg",
    description:
      "Consultație neurologică în Chișinău pentru cefalee, amețeli, amorțeli, dureri neuropate, tulburări de somn și simptome ale sistemului nervos.",
    keywords:
      "neurolog Chișinău, consultație neurologică, dureri de cap, amețeli, amorțeli, neuropatie, tulburări de somn"
  },
  {
    title: "Consultație neurochirurgicală",
    slug: "consultatie-neurochirurgicala",
    icon: "⚕️",
    image: "/images/neurochirurgie.jpg",
    description:
      "Consultație neurochirurgicală pentru hernie de disc, dureri lombare și cervicale, radiculopatii, coloană vertebrală și recuperare postoperatorie.",
    keywords:
      "neurochirurg Chișinău, hernie de disc, dureri lombare, dureri cervicale, radiculopatie, coloană vertebrală"
  },
  {
    title: "Fizioterapie și reabilitare",
    slug: "fizioterapie-reabilitare",
    icon: "🏃",
    image: "/images/reabilitare.jpg",
    description:
      "Fizioterapie și reabilitare medicală pentru durere, mobilitate, tonus muscular, postură, recuperare funcțională și calitatea mișcării.",
    keywords:
      "fizioterapie Chișinău, reabilitare medicală, recuperare medicală, kinetoterapie, dureri musculare, recuperare funcțională"
  },
  {
    title: "Diagnostic funcțional",
    slug: "diagnostic-functional",
    icon: "💓",
    image: "/images/diagnostic-functional.jpg",
    description:
      "Diagnostic funcțional pentru evaluarea sistemului nervos, aparatului locomotor, circulației și funcțiilor asociate recuperării.",
    keywords:
      "diagnostic funcțional Chișinău, evaluare neurologică, investigații funcționale, evaluare medicală"
  },
  {
    title: "Terapie Bemer",
    slug: "terapie-bemer",
    icon: "🌿",
    image: "/images/bemer.jpg",
    description:
      "Terapie Bemer în Chișinău pentru susținerea microcirculației, relaxării și recuperării în cadrul unui plan terapeutic responsabil.",
    keywords:
      "Bemer Chișinău, terapie Bemer, microcirculație, recuperare, terapie complementară"
  },
  {
    title: "Electrostimulare",
    slug: "electrostimulare",
    icon: "⚡",
    image: "/images/electrostimulare.jpg",
    description:
      "Electrostimulare pentru activare musculară, tonifiere, recuperare neuromusculară și suport în dureri cronice.",
    keywords:
      "electrostimulare Chișinău, recuperare musculară, stimulare musculară, durere cronică, tonifiere"
  }
];

export const tools = [
  {
    title: "Test Ayurveda Dosha",
    slug: "test-ayurveda-dosha",
    href: "/aplicatii/teste-si-instrumente/test-ayurveda-dosha",
    tag: "Test integrativ",
    image: "/images/test-ayurveda-dosha.jpg",
    description:
      "Chestionar educațional Vata–Pitta–Kapha cu scor, interpretare și recomandări generale pentru stil de viață."
  },
  {
    title: "Respirație terapeutică ghidată",
    slug: "respiratie-terapeutica",
    href: "/aplicatii/teste-si-instrumente/respiratie-terapeutica",
    tag: "Instrument pacient",
    image: "/images/respiratie-terapeutica.jpg",
    description:
      "Timer vizual pentru respirație ghidată, relaxare, somn, anxietate și reglarea sistemului nervos vegetativ."
  },
  {
    title: "Screening neurologic rapid",
    slug: "screening-neurologic",
    href: "/aplicatii/teste-si-instrumente/screening-neurologic",
    tag: "Autoevaluare",
    image: "/images/screening-neurologic.jpg",
    description:
      "Instrument educațional pentru verificarea simptomelor neurologice și identificarea semnalelor de alarmă."
  }
];
