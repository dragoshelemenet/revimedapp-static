import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/sindrom-canal-cubital-nerv-ulnar-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/sindrom-canal-cubital-nerv-ulnar-chisinau/", ru: "/ru/sindrom-kubitalnogo-kanala-loktevoy-nerv-kishinev/", "x-default": "/sindrom-canal-cubital-nerv-ulnar-chisinau/" },
 title: "Sindrom de Canal Cubital (Nerv Ulnar) Chișinău — Amorțeală Deget Mic & Inelar",
 description: "De ce amorțesc degetul mic și inelarul (compresia nervului ulnar la cot — sindrom de canal cubital) vs. tunel carpian în Chișinău — Neurolog Dr. Igor Revenco (500 MDL) & fizioterapie (100 MDL / 30 min)."
});

export default function SindromCanalCubitalNervUlnarChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/sindrom-canal-cubital-nerv-ulnar-chisinau"
   crumbLabel="Canal Cubital (Nerv Ulnar)"
   h1="Sindrom de Canal Cubital (Nerv Ulnar) în Chișinău — Amorțeală în Degetul Mic și Inelar"
   lead="Cum deosebești compresia nervului ulnar la cot de sindromul de tunel carpian și de hernia cervicală C8–T1 și cum prevenim slăbirea mușchilor mâinii la Revimed PLUS+."
   directAnswer="Sindromul de canal cubital apare prin comprimarea sau întinderea nervului ulnar pe partea internă a cotului, manifestându-se tipic prin amorțeală și furnicături în degetul mic și jumătatea externă a degetului inelar — mai ales noaptea sau când ții cotul îndoit mult timp (la telefon, birou, condus). La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), diagnosticul clinic neurologic este realizat de Dr. Igor Revenco (500 MDL primară / 400 MDL repetată), iar tratamentul conservator în stadiile incipiente/moderate combină protecția posturală a cotului cu Laser, Ultrasunete, Magnetoterapie și Electroforeză (100 MDL / 30 min; tarife orientative). Programări: 022 60 50 60."
   introParagraph="Este a doua cea mai frecventă neuropatie compresivă a membrului superior după tunelul carpian, dar pacienții o confundă des cu problemele de încheietură sau de inimă (când apare pe brațul stâng). Identificarea exactă a degetelor amorțite (degetul mic + inelar = nerv ulnar) permite intervenția timpurie înainte de apariția atrofiei musculare în palmă."
   symptomsHeading="Semne specifice ale compresiei nervului ulnar la cot"
   symptoms={[
    "Amorțeală, furnicături sau senzație de „ace” strict în degetul mic și în jumătatea dinspre el a degetului inelar;",
    "Agravare evidentă când ții cotul flexat prelungit (vorbit la telefon, dormit cu brațul sub cap/pernă, sprijinit în coate pe birou);",
    "Durere sau „curentare” pe partea internă a cotului la lovire ușoară sau atingere;",
    "În stadii avansate: scăderea forței de prindere între degete (scapi obiecte mici, dificultate la deschis borcane sau scris)."
]}
   approachHeading="Diagnostic diferențial precis și recuperare conservatoare la Revimed PLUS+"
   approachParagraphs={[
    "Dr. Igor Revenco testează sensibilitatea comparativă a degetelor, semnul Tinel la cot și forța mușchilor intrinseci ai mâinii, diferențiind compresia la cot de o radiculopatie cervicală C8–T1. În cazurile persistente sau cu slăbiciune musculară, medicul recomandă completarea cu electromiografie (EMG) / ecografie de nerv ulnar și, dacă există compresie severă, evaluare de microchirurgie.",
    "În formele ușoare și moderate fără atrofie, eliminarea presiunii pe cot + cura de fizioterapie antiinflamatoare și neurotrofică (Laser, Magnetoterapie, Ultrasunete, Electroforeză — 100 MDL / 30 min) sprijină dezumflarea canalului cubital și refacerea conducerii nervoase."
]}
   equipmentHeading="Fizioterapie locală pentru decompresia conservatoare a nervului ulnar"
   equipmentCards={[
    {
        "slug": "spectr-lc",
        "title": "Terapie Laser & Magnetoterapie",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Reducerea inflamației perineurale la nivelul cotului — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză & Ultrasunete",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Ameliorarea microcirculației și a edemului canalului cubital — 100 MDL / 30 min."
    },
    {
        "slug": "amplipuls-5",
        "title": "Electroneurostimulare",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Susținerea tonusului muscular al antebrațului și palmei — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Harta degetelor amorțite: Canal Cubital vs. Tunel Carpian vs. Coloană Cervicală C8–T1",
    "columns": [
        "Afectare",
        "Ce degete amorțesc",
        "Factor declanșator tipic",
        "Evaluare recomandată"
    ],
    "rows": [
        [
            "Sindrom de canal cubital (Nerv Ulnar)",
            "Degetul mic + jumătatea externă a inelarului",
            "Cot îndoit >90°, sprijin pe coate, dormit cu brațul flexat",
            "Neurolog (500 MDL) + protecție cot + Laser/Magnet (100 MDL)"
        ],
        [
            "Sindrom de tunel carpian (Nerv Median)",
            "Degetul mare, arătător, mijlociu + jumătate din inelar",
            "Tastatură/mouse, treziri nocturne cu „scuturatul mâinii”",
            "Neurolog (500 MDL) + orteză încheietură + fizioterapie locală"
        ],
        [
            "Radiculopatie cervicală C8–T1",
            "Degetul mic + marginea internă a antebrațului + durere de gât/omoplat",
            "Mișcări ale gâtului, stat aplecat la ecran",
            "Neurolog-Neurochirurg (500 MDL) + RMN cervical / ESG (500 MDL)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 reguli imediate ca să nu agravezi compresia nervului ulnar",
    "steps": [
        "Nu te mai sprijini în coate pe birou, masă sau pe cotiera tare a mașinii (folosește un suport moale sau păstrează cotul liber).",
        "Noaptea, încearcă să dormi cu brațul cât mai întins (poți înfășura lejer un prosop moale în jurul cotului ca să nu îl îndoi complet în somn).",
        "Folosește căști (hands-free) la convorbirile telefonice lungi în loc să ții telefonul la ureche cu cotul îndoit.",
        "Reglează tastatura și scaunul astfel încât coatele să stea deschise (>100–110°), nu flexate strâns.",
        "Programează consultul neurologic din timp dacă amorțeala persistă peste 2–3 săptămâni sau observi scăderea forței în palmă."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale care necesită evaluare rapidă (sau 112 dacă apar brusc):",
    "items": [
        "Subțierea vizibilă a mușchilor dintre degetul mare și arătător ori imposibilitatea de a îndrepta degetul mic și inelarul („mână în gheară”);",
        "Amorțeală bruscă a întregului braț stâng însoțită de durere în piept, transpirații sau lipsă de aer (urgență cardiacă/AVC — sună 112!);",
        "Amorțeală apărută imediat după o fractură sau luxație de cot."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Completează Screening-ul Neurologic Orientativ (2 min) →",
    "desc": "Notează distribuția exactă a amorțelilor înainte de consultul cu Dr. Igor Revenco:"
}}
   faqs={[
    {
        "q": "Dacă amorțește degetul mic de la mâna stângă, poate fi de la inimă?",
        "a": "Amorțeala izolată a degetului mic și inelarului, declanșată de îndoirea cotului și fără durere toracică, este de obicei compresie de nerv ulnar. Totuși, dacă se asociază cu durere în piept, sufocare sau transpirații reci, sunați imediat la 112."
    },
    {
        "q": "Se vindecă sindromul de canal cubital fără operație?",
        "a": "În stadiile ușoare și moderate, modificarea obiceiurilor de poziție ale cotului (mai ales noaptea) combinată cu evaluare neurologică (500 MDL) și fizioterapie (100 MDL / 30 min) rezolvă frecvent simptomele; stadiile cu atrofie musculară necesită evaluare chirurgicală."
    }
]}
   relatedLinks={[
    {
        "href": "/tunel-carpian-amorteli-maini-chisinau/",
        "label": "Tunel Carpian & Amorțeli Mâini"
    },
    {
        "href": "/terapie-ultrasunete-epicondilita-tendinita-chisinau/",
        "label": "Ultrasunete — Cot & Umăr (100 MDL)"
    },
    {
        "href": "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/",
        "label": "Hernie Cervicală C5–C6"
    },
    {
        "href": "/nevralgie-neuropatie-chisinau/",
        "label": "Nevralgie & Neuropatie"
    },
    {
        "href": "/evaluare-biomecanica-ergonomie-birou-chisinau/",
        "label": "Ergonomie Birou (550 MDL)"
    }
]}
  />
 );
}
