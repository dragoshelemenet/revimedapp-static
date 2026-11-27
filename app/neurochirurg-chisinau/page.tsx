import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/neurochirurg-chisinau",
 localized: false,
 alternatesLanguages: {
  ro: "/neurochirurg-chisinau/",
  ru: "/ru/neyrohirurg-kishinev/",
  "x-default": "/neurochirurg-chisinau/"
 },
 title: "Neurochirurg Chișinău (Ciocana): Evaluare RMN & Hernie de Disc",
 description:
  "Consultație la medic neurochirurg în Chișinău (500 MDL): Dr. Igor Revenco (doctor în neurochirurgie USMF, membru EANS, 35+ ani). Evaluare RMN/CT hernie de disc, stenoză, sciatică și tratament conservator."
});

export default function NeurochirurgChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/neurochirurg-chisinau/"
   crumbLabel="Neurochirurg Chișinău"
   h1="Neurochirurg Chișinău: Evaluare RMN, Hernie de Disc & A Doua Opinie"
   lead="Opinie neurochirurgicală obiectivă și analiză directă a secțiunilor RMN/CT cu Dr. Igor Revenco (doctor în neurochirurgie USMF, membru al Asociației Europene de Neurochirurgie EANS, 35+ ani experiență clinică) în Chișinău, sectorul Ciocana."
   directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medic neurochirurg costă 500 MDL (repetată: 400 MDL). Dr. Igor Revenco (doctor în neurochirurgie USMF, membru EANS, 35+ ani experiență) evaluează direct imaginile RMN/CT pentru hernie de disc lombară sau cervicală, stenoză de canal spinal, spondilolistezis și compresii radiculare, stabilind obiectiv dacă este necesară operația sau recuperarea conservatoare cu fizioterapie (100 MDL / 30 min). Programări: 022 60 50 60."
   introParagraph="Consultația neurochirurgicală nu înseamnă automat operație. Scopul evaluării este diferențierea clară între cazurile care necesită intervenție chirurgicală și majoritatea pacienților cu hernie de disc, protruzie sau sciatică ce pot fi recuperați în siguranță prin tratament conservator și fizioterapie medicală."
   symptomsHeading="Patologii și situații evaluate la consultația de neurochirurgie"
   symptoms={[
    "Hernie de disc lombară (L4-L5, L5-S1), cervicală (C5-C6, C6-C7) și toracală sau protruzii discale cu compresie radiculară",
    "Sciatică, dureri intense care iradiază pe picior sau braț, amorțeli, furnicături sau scăderea forței musculare",
    "Stenoză de canal spinal lombar sau cervical și spondilolistezis (alunecare vertebrală) confirmate pe RMN/CT",
    "A doua opinie neurochirurgicală obiectivă: când este cu adevărat necesară intervenția chirurgicală vs. protocol conservator",
    "Traumatisme craniocerebrale sau vertebrale în antecedente și evaluarea sechelelor neurologice",
    "Monitorizare și recuperare medicală personalizată după operații pe coloana vertebrală"
   ]}
   approachHeading="Evaluare clinică + imagistică RMN/CT și tratament conservator în aceeași clinică"
   approachParagraphs={[
    "Dr. Igor Revenco analizează personal secțiunile RMN/CT de pe CD sau film (nu doar raportul scris) și le corelează cu examenul clinic neurologic (reflexe osteotendinoase, forță musculară pe miotoame, sensibilitate pe dermatoame și probe de elongație).",
    "În absența indicațiilor chirurgicale de urgență (deficit motor progresiv sau sindrom coadă de cal), pacientul poate începe imediat în aceeași clinică protocolul conservator de decompresie și antiinflamator: Amplipuls SMT, electroforeză medicamentoasă, magnetoterapie, laser, terapie cu ultrasunete, masaj terapeutic și kinetoterapie."
   ]}
   equipmentHeading="Aparatură clinică pentru tratamentul conservator al coloanei"
   equipmentCards={[
    {
     slug: "amplipuls-5",
     title: "Amplipuls-4 / 5 / 6 (SMT)",
     desc: "Analgezie radiculară și relaxarea spasmului paravertebral în hernia de disc și sciatică (100 MDL / 30 min).",
     image: "/images/equipment/amplipuls-5.webp"
    },
    {
     slug: "aparat-electroforeza-medicamentoasa",
     title: "Electroforeză medicamentoasă (Potok-1)",
     desc: "Administrare locală neinvazivă a preparatelor antiinflamatoare și trofice pe zona afectată (100 MDL / 30 min).",
     image: "/images/equipment/aparat-electroforeza-medicamentoasa.webp"
    },
    {
     slug: "lampa-solux",
     title: "Fototerapie & Infraroșu Solux",
     desc: "Îmbunătățirea microcirculației paravertebrale și pregătirea tisulară înainte de kinetoterapie (100 MDL / 30 min).",
     image: "/images/equipment/lampa-solux.webp"
    }
   ]}
   faqs={[
    {
     q: "Trebuie să vin cu RMN-ul pe CD sau ajunge foaia cu concluzia scrisă?",
     a: "Este recomandat să aduceți imaginile RMN/CT pe CD, stick sau film, nu doar descrierea text. Medicul neurochirurg evaluează direct secțiunile sagitale și axiale pentru a măsura gradul real de compresie asupra rădăcinii nervoase."
    },
    {
     q: "Se poate trata hernia de disc fără operație în Chișinău?",
     a: "Da. În majoritatea cazurilor fără deficit motor progresiv sau tulburări sfincteriene, tratamentul conservator combinat (medicație țintită, Amplipuls SMT, electroforeză, kinetoterapie) oferă ameliorare stabilă fără intervenție chirurgicală."
    },
    {
     q: "Cât costă consultația la neurochirurg și cum mă programez?",
     a: "Consultația primară la Dr. Igor Revenco costă 500 MDL, iar consultația repetată 400 MDL. Programările se fac telefonic la 022 60 50 60 sau +373 79 422 908, Luni - Vineri 09:00 - 15:00."
    },
    {
     q: "Oferiți și recuperare medicală după operația de hernie de disc?",
     a: "Da. Elaborăm protocoale etapizate de recuperare post-operatorie pe coloană (electroterapie blândă, kinetoterapie dozată, monitorizare neurologică) pentru prevenirea recidivelor."
    }
   ]}
   relatedLinks={[
    { href: "/hernie-de-disc-chisinau/", label: "Hernie de disc fără operație" },
    { href: "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/", label: "Protruzie L4-L5 / L5-S1 & Stenoză" },
    { href: "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/", label: "Hernie Cervicală C5-C6" },
    { href: "/stenoza-canal-spinal-lombar-neurochirurg-chisinau/", label: "Stenoză Canal Spinal" },
    { href: "/recuperare-postoperatorie-coloana-chisinau/", label: "Recuperare Post-Operatorie" },
    { href: "/fizioterapie-chisinau/", label: "Fizioterapie Chișinău (100 MDL)" }
   ]}
  />
 );
}
