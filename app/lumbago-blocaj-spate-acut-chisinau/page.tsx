import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/lumbago-blocaj-spate-acut-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/lumbago-blocaj-spate-acut-chisinau/",
    ru: "/ru/lyumbago-prostrel-v-poyasnitse-kishinev/",
    "x-default": "/lumbago-blocaj-spate-acut-chisinau/"
  },
  title: "Lumbago & Blocaj Acut de Spate Chișinău — Neurolog, Neurochirurg & Fizioterapie",
  description:
    "Tratament corect când te prinde spatele brusc (lumbago acut / blocaj lombar) în Chișinău, Ciocana — Dr. Igor Revenco. Consultație 500 MDL, fizioterapie 100 MDL / 30 min. Tel: 022 60 50 60."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/lumbago-blocaj-spate-acut-chisinau"
      crumbLabel="Lumbago & Blocaj Acut de Spate Chișinău"
      h1="Lumbago și blocaj acut de spate — ce faci când te „prinde spatele” brusc în Chișinău"
      lead="Evaluare rapidă la neurochirurg consultant și neurolog pentru a elimina spasmul dureros, a exclude hernia cu compresie severă și a reveni sigur la mișcare."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația pentru lumbago / blocaj acut de spate (Dr. Igor Revenco, 35+ ani experiență) costă 500 MDL (repetată 400 MDL), fizioterapia de decontracturare (Amplipuls, electroforeză, magnetoterapie) — 100 MDL / 30 min, iar masajul terapeutic după faza acută — 200 MDL. Programări: 022 60 50 60."
      introParagraph="Blocajul acut lombar (lumbago) apare brusc după o aplecare, ridicarea unei greutăți sau expunerea la frig: musculatura paravertebrală intră într-un spasm protector sever, iar orice încercare de îndreptare provoacă o durere ascuțită. Greșeala frecventă este repausul absolut la pat timp de săptămâni sau masajul agresiv în plină inflamație. Evaluarea medicală și decontracturarea corectă scurtează semnificativ durata crizei."
      symptomsHeading="Cum se manifestă blocajul lombar acut"
      symptoms={[
        "Durere lombară bruscă, tăioasă („ca un cuțit”), declanșată la aplecare sau ridicare;",
        "Imposibilitatea de a îndrepta spatele și poziție antalgică (trunchiul ușor înclinat lateral);",
        "Spasm muscular dur la palpare în zona lombară joasă;",
        "Durere accentuată la tuse, strănut sau la ridicarea din pat dimineața;",
        "În unele cazuri, iradiere spre fesă sau coapsă (lombosciatică)."
      ]}
      approachHeading="Protocolul sigur de deblocare la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco verifică reflexele, forța musculară a picioarelor și semnele radiculare (Lasègue) pentru a stabili dacă este un lumbago muscular/fațetar simplu sau o hernie de disc care comprimă o rădăcină nervoasă.",
        "Tratamentul combină calmarea durerii și a spasmului acut cu fizioterapie blândă (Amplipuls / SMT, electroforeză analgezică, magnetoterapie — 100 MDL / 30 min), urmată după calmarea crizei de masaj terapeutic (200 MDL) și exerciții de stabilizare lombară."
      ]}
      equipmentHeading="Proceduri pentru relaxarea spasmului lombar"
      equipmentCards={[
        {
          slug: "bi-lenar",
          title: "Fizioterapie Analgezică & Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Reducerea rapidă a spasmului paravertebral și a durerii acute (100 MDL / 30 min)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn & Relaxare",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Calmarea sistemului nervos și refacerea somnului afectat de durere (100 MDL / 30 min)."
        },
        {
          slug: "aparat-amp",
          title: "Evaluare Funcțională AMP",
          image: "/images/equipment/aparat-amp.webp",
          desc: "Screening neinvaziv general fără înțepături la indicația medicului (1000 MDL)."
        }
      ]}
      customDecisionTable={{
        heading: "Ce ajută vs. Ce agravează blocajul acut în primele 48 de ore",
        columns: ["Acțiune", "Recomandat?", "De ce"],
        rows: [
          ["Mișcare ușoară, pași scurți prin casă", "Da", "Previne rigidizarea și grăbește recuperarea față de statul continuu la pat"],
          ["Băi fierbinți / saună în plină criză", "Nu", "Căldura intensă poate accentua edemul inflamator radicular"],
          ["Manipulări bruște („trosnirea” spatelui)", "Nu fără RMN/consult", "Risc major dacă la bază există o hernie de disc activă"]
        ]
      }}
      preparationChecklist={{
        heading: "Înainte să vii la clinică",
        steps: [
          "Adu orice RMN sau radiografie lombară anterioară, chiar dacă are 1–2 ani.",
          "Notează ce medicamente/unguente ai folosit deja în ultimele 48 de ore.",
          "Ridică-te din pat întorcându-te mai întâi pe o parte, nu direct din față."
        ]
      }}
      redFlagsNotice={{
        heading: "Sună imediat la 112 dacă blocajul de spate se însoțește de:",
        items: [
          "Amorțeală în zona perineală („în șa”) sau pierderea controlului urinării;",
          "Scădere bruscă a forței în picior (nu poți sta pe vârfuri sau pe călcâie);",
          "Febră mare sau traumatism sever (cădere de la înălțime, accident rutier)."
        ]
      }}
      faqs={[
        {
          q: "Trebuie să stau la pat o săptămână când am lumbago?",
          a: "Nu — studiile clinice arată că repausul prelungit la pat încetinește recuperarea. După 1–2 zile de protecție, mersul ușor, tratamentul corect și fizioterapia grăbesc revenirea."
        },
        {
          q: "Este bun masajul puternic imediat când mă blochez?",
          a: "Nu în prima zi de inflamație acută: masajul profund agresiv poate accentua spasmul. Începem cu consult + fizioterapie blândă (100 MDL / 30 min), iar masajul terapeutic (200 MDL) se introduce după calmarea fazei acute."
        },
        {
          q: "Cât costă consultația și procedurile la Revimed PLUS+?",
          a: "Consultația primară la Dr. Igor Revenco costă 500 MDL (repetată 400 MDL), fizioterapia — 100 MDL / 30 min. Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/hernie-de-disc-chisinau/", label: "Hernie de Disc fără Operație" },
        { href: "/protruzie-disc-l4-l5-l5-s1-stenoza-chisinau/", label: "Protruzie L4–L5 / L5–S1" },
        { href: "/electroforeza-amplipuls-chisinau/", label: "Electroforeză & Amplipuls (100 MDL)" },
        { href: "/neurochirurg-chisinau/", label: "Neurochirurg Chișinău (500 MDL)" }
      ]}
    />
  );
}
