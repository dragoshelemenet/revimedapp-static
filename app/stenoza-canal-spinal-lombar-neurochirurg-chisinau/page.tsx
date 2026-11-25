import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/stenoza-canal-spinal-lombar-neurochirurg-chisinau",
  localized: false,
  alternatesLanguages: {
    ro: "/stenoza-canal-spinal-lombar-neurochirurg-chisinau/",
    ru: "/ru/stenoz-pozvonochnogo-kanala-neyrohirurg-kishinev/",
    "x-default": "/stenoza-canal-spinal-lombar-neurochirurg-chisinau/"
  },
  title: "Stenoză Canal Spinal Lombar Chișinău — Neurochirurg Consultant & Recuperare",
  description:
    "Evaluare neurochirurgicală RMN și recuperare conservatoare pentru stenoza canalului spinal lombar (dureri și oboseală în picioare la mers) în Chișinău, Ciocana — Dr. Igor Revenco (500 MDL)."
});

export default function Page() {
  return (
    <LocalConditionLanding
      lang="ro"
      path="/stenoza-canal-spinal-lombar-neurochirurg-chisinau"
      crumbLabel="Stenoză Canal Spinal Chișinău"
      h1="Stenoza canalului spinal lombar — evaluare RMN la neurochirurg consultant în Chișinău"
      lead="Analiză obiectivă a imaginilor RMN (CD/film) cu Dr. Igor Revenco (Neurochirurg consultant, 35+ ani experiență, membru EANS) pentru a decide corect între recuperare conservatoare și indicație chirurgicală."
      directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurochirurgicală cu analiză RMN pentru stenoza canalului spinal (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL), fizioterapia de decontracturare și reducere a durerii radiculare — 100 MDL / 30 min, iar masajul terapeutic — 200 MDL. Programări: 022 60 50 60."
      introParagraph="Stenoza canalului spinal lombar este îngustarea progresivă a spațiului prin care trec nervii coloanei, frecventă după 55–60 de ani. Semnul clasic este „claudicația neurogenă”: pacientul merge 100–300 de metri, simte picioarele grele, amorțite sau dureroase și trebuie să se oprească ori să se aplece ușor în față (de ex. pe căruciorul de cumpărături), moment în care durerea se calmează rapid."
      symptomsHeading="Semne tipice ale stenozei spinale lombare"
      symptoms={[
        "Oboseală, greutate, furnicături sau crampe în gambe și coapse după mers pe distanțe scurte;",
        "Ameliorare clară imediat ce te așezi pe o bancă sau te apleci ușor înainte;",
        "Durere lombară cronică agravată la statul prelungit în picioare sau la mers la vale;",
        "Amorțeli intermitente în tălpi sau dificultate la urcatul scărilor;",
        "Rezultat RMN cu „stenoză de canal vertebral L3–L4 / L4–L5” și nevoia unei a doua opinii neurochirurgicale."
      ]}
      approachHeading="Cum evaluăm și gestionăm stenoza spinală la Revimed PLUS+"
      approachParagraphs={[
        "Dr. Igor Revenco compară severitatea îngustării de pe RMN cu examenul clinic real (forța picioarelor, reflexe, distanța de mers fără durere) și exclude claudicația vasculară arterială.",
        "În formele ușoare și moderate fără deficit motor progresiv, strategia conservatoare (fizioterapie analgezică — 100 MDL / 30 min, kinetoterapie în flexie, controlul greutății și terapie medicamentoasă țintită) menține autonomia ani la rând. Dacă există compresie severă cu deficit motor, primești o recomandare neurochirurgicală onestă."
      ]}
      equipmentHeading="Evaluare vasculară și recuperare conservatoare"
      equipmentCards={[
        {
          slug: "rheotest",
          title: "RHEOTEST Vascular",
          image: "/images/equipment/rheotest.webp",
          desc: "Ajută la diferențierea claudicației neurogene de tulburările vasculare (500 MDL)."
        },
        {
          slug: "bi-lenar",
          title: "Fizioterapie & Bi-LENAR",
          image: "/images/equipment/bi-lenar.webp",
          desc: "Reducerea durerii lombare și a iritației radiculare (100 MDL / 30 min)."
        },
        {
          slug: "electrosomn-4t",
          title: "Electrosomn & Relaxare",
          image: "/images/equipment/electrosomn-4t.webp",
          desc: "Îmbunătățirea somnului afectat de durerea lombară cronică (100 MDL / 30 min)."
        }
      ]}
      customDecisionTable={{
        heading: "Claudicație neurogenă (stenoză spinală) vs. Claudicație vasculară (artere picioare)",
        columns: ["Semn clinic", "Stenoză spinală lombară", "Boală arterială periferică"],
        rows: [
          ["Ce calmează durerea", "Aplecarea în față sau statul jos", "Simpla oprire din mers în picioare (2–3 min)"],
          ["Mers pe bicicletă / cărucior", "De obicei bine tolerat (spatele e ușor flectat)", "Declanșează aceeași crampă musculară"],
          ["Temperatura picioarelor", "Normală, puls prezent la gleznă", "Picioare reci, puls periferic diminuat"]
        ]
      }}
      preparationChecklist={{
        heading: "Ce să aduci obligatoriu la consultație",
        steps: [
          "CD-ul sau filmele RMN ale coloanei lombare (nu doar foaia scrisă de concluzie).",
          "Lista medicamentelor pentru tensiune, inimă sau durere.",
          "Notează aproximativ câți metri poți merge continuu înainte să fie nevoie să te așezi."
        ]
      }}
      redFlagsNotice={{
        heading: "Indicație de evaluare urgentă (112) dacă apar:",
        items: [
          "Pierderea controlului urinării/defecației sau amorțeală în zona perineală („în șa”);",
          "Slăbiciune bruscă la ridicarea labei piciorului („picior căzut”);",
          "Imposibilitate bruscă de a sta în picioare."
        ]
      }}
      faqs={[
        {
          q: "Orice stenoză de canal spinal necesită operație?",
          a: "Nu — multe stenoze ușoare sau moderate răspund bine la fizioterapie, exerciții adaptate în flexie și tratament conservator. Operația se discută atunci când distanța de mers scade sever sau apare slăbiciune progresivă în picioare."
        },
        {
          q: "Cât costă consultația neurochirurgicală cu analiză RMN la Revimed PLUS+?",
          a: "Consultația primară la Dr. Igor Revenco costă 500 MDL (repetată 400 MDL). Programări: 022 60 50 60."
        }
      ]}
      relatedLinks={[
        { href: "/neurochirurg-chisinau/", label: "Neurochirurg Chișinău (500 MDL)" },
        { href: "/protruzie-disc-l4-l5-l5-s1-stenoza-chisinau/", label: "Protruzie L4–L5 / L5–S1" },
        { href: "/spondilolistezis-alunecare-vertebra-neurochirurg-chisinau/", label: "Spondilolistezis Vertebral" },
        { href: "/hernie-de-disc-chisinau/", label: "Hernie de Disc fără Operație" }
      ]}
    />
  );
}
