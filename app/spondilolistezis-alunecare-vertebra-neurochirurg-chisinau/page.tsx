import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/spondilolistezis-alunecare-vertebra-neurochirurg-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/spondilolistezis-alunecare-vertebra-neurochirurg-chisinau/", ru: "/ru/spondilolistez-pozvonochnika-neyrohirurg-kishinev/", "x-default": "/spondilolistezis-alunecare-vertebra-neurochirurg-chisinau/" },
 title: "Spondilolistezis (Alunecare Vertebră) Chișinău — A Doua Opinie Neurochirurg & Recuperare",
 description: "Ghid medical pentru spondilolistezis gradul I–IV (alunecare vertebră L4–L5 / L5–S1) în Chișinău — Neurochirurg Dr. Igor Revenco (membru EANS, 500 MDL), fizioterapie (100 MDL / 30 min) și stabilizare conservatoare."
});

export default function SpondilolistezisAlunecareVertebraNeurochirurgChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/spondilolistezis-alunecare-vertebra-neurochirurg-chisinau"
   crumbLabel="Spondilolistezis Coloană"
   h1="Spondilolistezis (Alunecare de Vertebră) în Chișinău — Când se Recuperează fără Operație"
   lead="Înțelege gradele Meyerding (I–IV) de pe rezultatul RMN/radiografie, de ce majoritatea cazurilor stabile de grad I–II răspund la stabilizare conservatoare și când este indicată chirurgia spinală."
   directAnswer="Spondilolistezisul reprezintă alunecarea unei vertebre față de vertebra inferioară (cel mai des L4–L5 sau L5–S1), provocând durere lombară la stat în picioare/mers și iradiere pe picioare dacă sunt comprimate rădăcinile nervoase. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), a doua opinie obiectivă este oferită de Dr. Igor Revenco (doctor în neurochirurgie, membru EANS, 35+ ani experiență — consultație primară 500 MDL, repetată 400 MDL), completată de Electrospondilografie (500 MDL), fizioterapie analgezică (100 MDL / 30 min) și kinetoterapie de stabilizare (250 MDL; tarife orientative). Programări: 022 60 50 60."
   introParagraph="Când un pacient citește pe RMN „spondilolistezis L5–S1” sau „anterolistezis grad I”, prima reacție este teama de intervenție cu șuruburi și tije. Realitatea clinică este mult mai nuanțată: decizia depinde de stabilitatea vertebrei (radiografie funcțională în flexie-extensie), gradul alunecării și prezența deficitului neurologic — evaluare pe care o face cel mai obiectiv un neurochirurg cu experiență clinică îndelungată."
   symptomsHeading="Simptome tipice ale spondilolistezisului lombar"
   symptoms={[
    "Durere lombară joasă profundă care se accentuează la stat prelungit în picioare, mers pe jos sau aplecare spre spate (extensie);",
    "Ameliorare parțială când te așezi sau te apleci ușor în față (poziție care lărgește canalul spinal);",
    "Contractură persistentă a mușchilor din spatele coapselor (ischiogambieri) și rigiditate lombară matinală;",
    "Iradiere dureroasă pe fese și picioare, furnicături sau senzație de oboseală rapidă a picioarelor la mers (claudicație neurogenă)."
]}
   approachHeading="A doua opinie neurochirurgicală și protocolul de stabilizare fără operație"
   approachParagraphs={[
    "Dr. Igor Revenco analizează imaginile RMN (pe disc/film) și radiografiile funcționale, verifică reflexele și forța musculară și explică onest dacă spondilolistezisul este stabil (grad I–II, ideal pentru recuperare conservatoare) sau prezintă instabilitate progresivă ori compresie nervoasă severă ce impune consult chirurgical spitalicesc.",
    "Pentru cazurile stabile, recuperarea la Revimed PLUS+ evită strict hiperextensiile și manipulările violente ale coloanei: se combină calmarea durerii prin Amplipuls, Magnetoterapie, Laser și Electroforeză (100 MDL / 30 min) cu întărirea corsetului muscular profund (kinetoterapie de stabilizare — 250 MDL) și masaj decontracturant controlat (200 MDL)."
]}
   equipmentHeading="Fizioterapie analgezică și monitorizare funcțională în spondilolistezis"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls & Electroforeză",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Calmează durerea lombară și contractura paravertebrală — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Magnetoterapie & Laser",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Reducerea inflamației periradiculare în canalul lombar — 100 MDL / 30 min."
    },
    {
        "slug": "rheotest",
        "title": "Electrospondilografie (500 MDL)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluare funcțională computerizată neinvazivă a segmentelor lombare."
    }
]}
   customDecisionTable={{
    "heading": "Gradele spondilolistezisului (Meyerding) și conduita neurochirurgicală",
    "columns": [
        "Grad alunecare",
        "Procent deplasare",
        "Tablou clinic uzual",
        "Direcția recomandată"
    ],
    "rows": [
        [
            "Gradul I (stabil)",
            "Sub 25% din corpul vertebral",
            "Durere lombară la efort/stat în picioare, fără deficit motor",
            "Tratament conservator: Neurochirurg (500 MDL) + Kineto stabilizare + Fizioterapie (100 MDL)"
        ],
        [
            "Gradul II",
            "25% – 50%",
            "Durere lombară + iradiere intermitentă pe picioare",
            "Evaluare neurochirurg + radiografie flexie-extensie; conservator dacă e stabil"
        ],
        [
            "Gradul III – IV sau instabilitate mobilă",
            "Peste 50% sau alunecare progresivă",
            "Durere severă refractară, mers limitat, slăbiciune progresivă",
            "Indicație chirurgicală evaluată de neurochirurg spinal (decompresie/stabilizare)"
        ],
        [
            "Sindrom coadă de cal (Urgență)",
            "Orice grad cu compresie acută",
            "Tulburări sfincteriene, amorțeală perineală, pareză bruscă picioare",
            "URGENȚĂ 112 / spital de neurochirurgie imediat!"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Ce să aduci la a doua opinie neurochirurgicală pentru spondilolistezis (5 puncte)",
    "steps": [
        "Adu discul/imaginile RMN lombar și, dacă ai, radiografiile lombare de profil în flexie și extensie (esențiale pentru evaluarea instabilității).",
        "Notează distanța pe care o poți merge pe jos înainte să apară durerea sau greutatea în picioare.",
        "Evită exercițiile cu arcuirea spatelui pe spate (hiperextensii lombare, „podul”, ridicări grele din aplecare) și manipulările bruște.",
        "Nu purta corset lombar rigid non-stop fără indicație medicală — purtarea excesivă slăbește mușchii stabilizatori proprii.",
        "Adu lista tratamentelor și procedurilor efectuate în ultimele 6 luni."
    ]
}}
   redFlagsNotice={{
    "heading": "Urgență neurochirurgicală — apelează IMEDIAT 112:",
    "items": [
        "Pierderea controlului urinar sau intestinal ori amorțeală în zona perineală („în șa”);",
        "Slăbiciune bruscă severă la unul sau ambele picioare („picior căzut” / imposibilitate de a sta pe vârfuri sau călcâie);",
        "Durere lombară acută după un accident rutier sau cădere de la înălțime."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/monitor-dureri-spate/",
    "label": "Deschide Monitorul Durerilor de Spate & Coloană →",
    "desc": "Notează toleranța la mers și zonele de iradiere înainte de consultul cu Dr. Igor Revenco:"
}}
   faqs={[
    {
        "q": "Orice spondilolistezis de grad I necesită operație?",
        "a": "Nu — marea majoritate a cazurilor stabile de grad I și multe cazuri stabile de grad II se gestionează cu succes conservator prin stabilizare musculară, fizioterapie (100 MDL / 30 min) și monitorizare periodică la neurochirurg (500 MDL)."
    },
    {
        "q": "Poate un masaj agresiv sau „îndreptarea vertebrei” să pună vertebra la loc?",
        "a": "Nu! Nicio manipulare manuală nu poate „împinge” o vertebră alunecată la loc, iar manevrele violente pot agrava instabilitatea și compresia nervoasă. Stabilizarea se obține prin musculatura profundă și proceduri medicale blânde."
    }
]}
   relatedLinks={[
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău (500 MDL)"
    },
    {
        "href": "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/",
        "label": "Ghid RMN L4–L5 / Stenoză"
    },
    {
        "href": "/recuperare-postoperatorie-coloana-chisinau/",
        "label": "Recuperare Post-Operatorie Coloană"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie Stabilizare (250 MDL)"
    },
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de Disc fără Operație"
    }
]}
  />
 );
}
