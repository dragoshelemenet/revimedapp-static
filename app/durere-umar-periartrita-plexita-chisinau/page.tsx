import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/durere-umar-periartrita-plexita-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/durere-umar-periartrita-plexita-chisinau/",
    ru: "/ru/bol-v-pleche-periartroz-pleksit-kishinev/",
    "x-default": "/durere-umar-periartrita-plexita-chisinau/"
  },
  title: "Durere de Umăr, Periartrită & Plexită Brahială Chișinău — Fizioterapie",
  description:
    "Diagnostic diferențial și tratament pentru durerea de umăr, umăr înghețat (periartrită scapulohumerală) și plexită brahială în Chișinău, Ciocana. Consult 500 MDL, fizioterapie 100 MDL / 30 min."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/durere-umar-periartrita-plexita-chisinau"
      crumbLabel="Durere de Umăr & Periartrită Chișinău"
      h1="Durere de umăr, periartrită scapulohumerală și plexită brahială — recuperare în Chișinău"
      lead="Deosebirea exactă între durerea articulară a umărului, plexita brahială și hernia cervicală C5–C6, urmată de curs structurat de fizioterapie și kinetoterapie."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică/neurochirurgicală (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL), procedurile de fizioterapie pentru umăr (ultrasunet/fonoforeză, electroforeză, Amplipuls, magnetoterapie, laser) — 100 MDL / 30 min, iar masajul terapeutic — 200 MDL. Programări: 022 60 50 60."
      introParagraph="Durerea de umăr care te trezește noaptea când te întorci pe partea respectivă sau te împiedică să îți ridici brațul pentru a te îmbrăca poate avea trei origini distincte: inflamația tendoanelor/capsulei umărului (periartrită / „umăr înghețat”), iritația plexului brahial sau o compresie nervoasă la nivelul coloanei cervicale (C5–C6). Tratamentul eficient începe cu identificarea exactă a sursei."
      symptomsHeading="Simptome frecvente care justifică evaluarea și fizioterapia"
      symptoms={[
        "Durere surdă sau ascuțită în umăr, agravată noaptea când dormi pe acea parte;",
        "Limitarea progresivă a ridicării brațului lateral sau a ducerii mâinii la spate;",
        "Durere care coboară din ceafă spre umăr și braț, cu furnicături în degete (componentă cervicală/plexită);",
        "Slăbiciune la ridicarea obiectelor sau senzație de blocaj articular dimineața;",
        "Durere persistentă după o suprasolicitare sportivă, curent rece sau imobilizare prelungită."
      ]}
      approachHeading="Recuperarea pas cu pas la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco testează mobilitatea activă și pasivă a umărului, reflexele și sensibilitatea brațului pentru a separa periartrita locală de radiculopatia cervicală.",
        "Planul combină reducerea inflamației cu fizioterapie țintită (ultrasunet cu gel antiinflamator/fonoforeză, electroforeză, Amplipuls, magnetoterapie — 100 MDL / 30 min), masaj terapeutic cervicobrahial (200 MDL) și exerciții progresive de redobândire a amplitudinii."
      ]}
      equipmentHeading="Proceduri eficiente pentru umăr și coloana cervicală"
      equipmentCards={[
        {
          slug: "bi-lenar",
          title: "Fizioterapie & Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Calmarea durerii radiculare și reducerea contracturii musculare (100 MDL / 30 min)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn & Relaxare",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Îmbunătățirea somnului perturbat de durerea nocturnă de umăr (100 MDL / 30 min)."
        },
        {
          slug: "rheotest",
          title: "RHEOTEST Vascular",
          image: "/images/equipment/rheotest.webp",
          desc: "Evaluarea circulației regionale în sindroamele cervicobrahiale (500 MDL)."
        }
      ]}
      customDecisionTable={{
        heading: "Periartrită (umăr înghețat) vs. Hernie cervicală C5–C6 vs. Plexită",
        columns: ["Sursa durerii", "Semn distinctiv", "Abordare principală"],
        rows: [
          ["Periartrită / capsulită", "Brațul nu se ridică nici cu ajutor; durere nocturnă pe umăr", "Ultrasunet, magnetoterapie, laser (100 MDL) + mobilizare blândă"],
          ["Hernie cervicală C5–C6", "Durerea pleacă din ceafă cu furnicături pe braț/degete", "Consult neurochirurg + RMN cervical + fizioterapie cervicală"],
          ["Plexită brahială", "Durere intensă de umăr urmată de slăbiciune în braț", "Consult neurologic rapid + schema antiinflamatoare + recuperare"]
        ]
      }}
      preparationChecklist={{
        heading: "Ce să aduci la consult",
        steps: [
          "Ecografia de umăr, radiografia sau RMN-ul cervical, dacă le-ai efectuat deja.",
          "Poartă o bluză comodă care permite examinarea ușoară a umărului și gâtului.",
          "Notează ce mișcări exacte declanșează durerea."
        ]
      }}
      redFlagsNotice={{
        heading: "Solicită evaluare urgentă (112) dacă durerea de umăr:",
        items: [
          "Apare brusc pe umărul stâng cu presiune în piept, transpirații reci sau lipsă de aer (posibilă cauză cardiacă);",
          "Urmează unui traumatism cu deformare vizibilă sau imposibilitate totală de mișcare;",
          "Se însoțește de febră, roșeață și umflătură caldă a articulației."
        ]
      }}
      faqs={[
        {
          q: "Câte ședințe de fizioterapie sunt necesare pentru periartrita de umăr?",
          a: "De regulă un curs inițial cuprinde 8–10 ședințe (100 MDL / 30 min), combinate cu exerciții blânde zilnice pentru prevenirea rigidizării capsulei."
        },
        {
          q: "De ce mă doare umărul mai tare noaptea?",
          a: "Poziția culcat comprimă tendoanele inflamate ale coafei rotatorilor și scade drenajul local. O pernă de sprijin sub braț și reducerea inflamației prin fizioterapie ameliorează rapid somnul."
        },
        {
          q: "Cât costă consultația și procedurile la Revimed PLUS+?",
          a: "Consultația primară costă 500 MDL (repetată 400 MDL), fizioterapia — 100 MDL / 30 min, masajul terapeutic — 200 MDL. Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/terapie-ultrasunete-epicondilita-tendinita-chisinau/", label: "Ultrasunete & Tendinită" },
        { href: "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/", label: "Hernie Cervicală C5–C6" },
        { href: "/electroforeza-amplipuls-chisinau/", label: "Electroforeză & Amplipuls (100 MDL)" },
        { href: "/masaj-terapeutic-chisinau/", label: "Masaj Terapeutic (200 MDL)" }
      ]}
    />
  );
}
