import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/nevralgie-occipitala-arnold-durere-ceafa-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/nevralgie-occipitala-arnold-durere-ceafa-chisinau/", ru: "/ru/nevralgiya-zatylochnogo-nerva-arnolda-kishinev/", "x-default": "/nevralgie-occipitala-arnold-durere-ceafa-chisinau/" },
 title: "Nevralgie Occipitală (Arnold) Chișinău — Durere Ascuțită la Ceafă | Neurolog & Fizioterapie",
 description: "Durere electrică la baza craniului spre creștet, tâmplă sau în spatele ochiului (nevralgia Arnold) — diagnostic neurologic Dr. Igor Revenco (500 MDL), REG (500 MDL), laser/Amplipuls (100 MDL / 30 min) în Chișinău."
});

export default function NevralgieOccipitalaArnoldDurereCeafaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/nevralgie-occipitala-arnold-durere-ceafa-chisinau"
   crumbLabel="Nevralgie Occipitală Arnold"
   h1="Nevralgie Occipitală (Nevralgia Arnold) în Chișinău — Durere la Ceafă spre Creștet și Ochi"
   lead="Cum recunoști iritația nervului occipital mare (C2–C3), de ce te doare scalpul chiar și la pieptănat și cum diferențiază neurologul nevralgia Arnold de migrenă sau hipertensiune."
   directAnswer="Nevralgia occipitală (nevralgia Arnold) este o durere neuropatică ascuțită, ca un „curent electric” sau junghi, care pornește de la baza craniului (ceafă) și iradiază spre creștet, în spatele urechii sau al ochiului, adesea pe o singură parte, fiind provocată de compresia nervului occipital de către mușchii suboccipitali tensionați ori modificări cervicale C1–C3. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neurologul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), Reoencefalografia REG 500 MDL, Electrospondilografia 500 MDL, iar procedurile blânde de relaxare și calmare (Laser, Magnetoterapie, Amplipuls, Electroforeză) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Mulți pacienți cu nevralgie occipitală iau luni întregi analgezice pentru „migrenă” sau „tensiune”, fără efect, pentru că durerea provine de fapt din iritația mecanică a nervului occipital mare la ieșirea dintre mușchii tensionați ai cefei. Identificarea exactă a punctelor trigger occipitale la consultul neurologic deschide calea spre ameliorare reală."
   symptomsHeading="Semne caracteristice ale nevralgiei occipitale (Arnold)"
   symptoms={[
    "Junghiuri ascuțite, pulsative sau asemănătoare unor șocuri electrice ce urcă din ceafă spre creștetul capului, de obicei pe o singură parte;",
    "Hipersensibilitate intensă a pielii scalpului (durere chiar și la pieptănat, purtat căciulă sau sprijinirea capului pe pernă);",
    "Durere iradiată în spatele ochiului de aceeași parte, uneori cu sensibilitate la lumină puternică;",
    "Declanșarea sau agravarea durerii la rotirea gâtului, curent de aer rece ori stat prelungit cu capul aplecat la telefon/laptop."
]}
   approachHeading="Diagnostic diferențial și recuperare cervicală blândă la Revimed PLUS+"
   approachParagraphs={[
    "Dr. Igor Revenco examinează punctele de emergență ale nervului occipital la baza craniului, mobilitatea cervicală superioară și semnele neurologice, excluzând alte cauze de durere occipitală (hipertensiune arterială, migrenă, hernie cervicală sau patologii vasculare). La indicație se efectuează REG (500 MDL) și Electrospondilografie (500 MDL), ori se recomandă RMN cervical.",
    "După stabilizarea fazei acute conform indicației medicului, procedurile fizioterapeutice țintite — Laser, Magnetoterapie, Electroforeză și Amplipuls (100 MDL / 30 min), completate de masaj terapeutic cervical blând (200 MDL) și corectarea posturii — relaxează musculatura suboccipitală și reduc recurența crizelor."
]}
   equipmentHeading="Fizioterapie țintită pentru relaxare suboccipitală și calmare nervoasă"
   equipmentCards={[
    {
        "slug": "spectr-lc",
        "title": "Terapie Laser & Bioptron",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Efect antiinflamator local pe traiectul nervului occipital — 100 MDL / 30 min."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls & Electroforeză",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Relaxarea spasmului mușchilor cefei și diminuarea durerii — 100 MDL / 30 min."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn & Transair",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Reducerea pragului de durere neuropatică și refacerea somnului — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Diferențiere rapidă: Nevralgie Arnold vs. Migrenă vs. Cefalee tensională vs. Tensiune arterială",
    "columns": [
        "Afecțiune",
        "Caracterul durerii",
        "Localizare tipică",
        "Pasul medical recomandat"
    ],
    "rows": [
        [
            "Nevralgie occipitală (Arnold)",
            "Junghiuri electrice scurte + scalp extrem de sensibil la atingere/pieptănat",
            "De la baza cefei în sus spre creștet / spatele unui ochi (unilateral)",
            "Neurolog (500 MDL) + tratament țintit + Laser/Magnet/Masaj cervical"
        ],
        [
            "Migrenă",
            "Pulsatilă moderat-severă, ore–zile, cu greață și intoleranță la lumină/sunet",
            "Tâmplă / jumătate de cap, fără sensibilitate punctuală pe nervul cefei",
            "Neurolog (500 MDL) + jurnal migrene + REG / Electrosomn"
        ],
        [
            "Cefalee de tensiune",
            "Presiune surdă constantă „ca o bandă strânsă” în jurul capului",
            "Bilaterală (frunte, tâmple, ceafă), fără șocuri electrice",
            "Corecție postură + Electrosomn / Bi-LENAR (100 MDL) + masaj"
        ],
        [
            "Salt hipertensiv / urgență vasculară",
            "Durere bruscă intensă la ceafă cu valori TA mari, amețeală sau tulburări vizuale",
            "Occipitală difuză, instalată brusc",
            "Măsurare imediată TA + evaluare medicală urgentă / 112"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 pași utili înainte de consultația pentru durerea de ceafă (nevralgia Arnold)",
    "steps": [
        "Măsoară tensiunea arterială în momentul durerii de ceafă pentru a exclude un salt hipertensiv.",
        "Notează dacă durerea se declanșează la o mișcare precisă a gâtului, la atingerea scalpului sau la expunere la curent rece.",
        "Ridică ecranul laptopului/monitorului la nivelul ochilor și evită poziția „cap înainte” la telefon.",
        "Evită manipulările agresive ale gâtului („pocnitul vertebrelor”) făcute fără diagnostic imagistic și neurologic.",
        "Adu rezultatele anterioare (RMN/radiografie cervicală, REG) și lista medicamentelor încercate deja."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale de alarmă — sună IMEDIAT la 112 (NU este o simplă nevralgie):",
    "items": [
        "Durere occipitală bruscă, explozivă („lovitură de trăsnet”), apărută în câteva secunde;",
        "Durere de ceafă însoțită de febră mare, rigiditate severă a gâtului (nu poți duce bărbia în piept) sau vărsături;",
        "Vedere dublă, tulburări de vorbire, slăbiciune pe o parte a corpului ori amețeală severă cu imposibilitate de mers."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Completează Screening-ul Neurologic Orientativ (2 min) →",
    "desc": "Notează tiparul durerilor occipitale și factorii declanșatori înainte de vizită:"
}}
   faqs={[
    {
        "q": "De ce nu trec junghiurile de nevralgie Arnold cu analgezice obișnuite?",
        "a": "Deoarece este o durere neuropatică produsă de iritația directă a nervului occipital. Abordarea eficientă combină diagnosticul neurologic (500 MDL), relaxarea mușchilor suboccipitali (fizioterapie 100 MDL / 30 min, masaj 200 MDL) și terapia medicamentoasă țintită prescrisă de medic."
    },
    {
        "q": "Poate fi confundată nevralgia occipitală cu migrena?",
        "a": "Foarte des, pentru că durerea poate ajunge până în spatele ochiului. Elementul-cheie al nevralgiei Arnold este pornirea din baza craniului și sensibilitatea dureroasă a pielii scalpului la atingere."
    }
]}
   relatedLinks={[
    { href: "/cefalee-abuz-medicamentos-cluster-neurolog-chisinau/", label: "Cefalee de Abuz & Cluster" },
    {
        "href": "/cefalee-tensiune-vs-migrena-chisinau/",
        "label": "Cefalee vs. Migrenă (Ghid)"
    },
    {
        "href": "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/",
        "label": "Hernie Cervicală C5–C6"
    },
    {
        "href": "/nevralgie-trigemen-pareza-faciala-chisinau/",
        "label": "Nevralgie de Trigemen"
    },
    {
        "href": "/magnetoterapie-laser-chisinau/",
        "label": "Magnetoterapie & Laser (100 MDL)"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic (200 MDL)"
    }
]}
  />
 );
}
