import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/cefalee-abuz-medicamentos-cluster-neurolog-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/cefalee-abuz-medicamentos-cluster-neurolog-chisinau/", ru: "/ru/abuzusnaya-golovnaya-bol-klasternaya-nevrolog-kishinev/", "x-default": "/cefalee-abuz-medicamentos-cluster-neurolog-chisinau/" },
 title: "Cefalee de Abuz Medicamentos & Cefalee Cluster Chișinău — Neurolog & Electrosomn",
 description: "De ce te doare capul zilnic când iei calmante >10–15 zile/lună (cefalee de abuz medicamentos) și cum se recunoaște cefaleea Cluster („în ciorchine”) în Chișinău — Neurolog Dr. Igor Revenco (500 MDL)."
});

export default function CefaleeAbuzMedicamentosClusterNeurologChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/cefalee-abuz-medicamentos-cluster-neurolog-chisinau"
   crumbLabel="Cefalee de Abuz & Cluster"
   h1="Cefalee prin Abuz Medicamentos și Cefalee Cluster („în Ciorchine”) în Chișinău — Ghid Neurologic"
   lead="Cercul vicios al pastilelor zilnice de durere de cap (analgezice, combinații cu cofeină/codeină, triptani) și recunoașterea durerii severe unilaterale din cefaleea Cluster — la Revimed PLUS+."
   directAnswer="Cefaleea prin abuz medicamentos apare paradoxal la persoanele care iau calmante obișnuite peste 15 zile pe lună (sau triptani / analgezice combinate cu cofeină peste 10 zile pe lună) timp de cel puțin 3 luni: medicamentele devin ele însele cauza durerii zilnice de cap. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), neurologul Dr. Igor Revenco (35+ ani experiență — consultație primară 500 MDL, repetată 400 MDL) elaborează planul sigur de ieșire din abuz și prevenție, sprijinit de REG (500 MDL) și metode preventive nefarmacologice (Electrosomn, Transair TES, Acupunctură — 100 MDL / 30 min; tarife orientative). Programări: 022 60 50 60."
   introParagraph="Mulți pacienți ajung la neurolog spunând: „Mă doare capul în fiecare dimineață și iau deja 1–2 pastile pe zi doar ca să pot lucra”. În foarte multe cazuri nu este o tumoră cerebrală, ci cefaleea de rebound (prin abuz medicamentos) — o afecțiune complet reversibilă odată ce este recunoscută și întreruptă ghidat de medic, înlocuită cu prevenție adevărată."
   symptomsHeading="Semnale că te confrunți cu cefalee de abuz medicamentos sau cefalee Cluster"
   symptoms={[
    "Durere de cap prezentă 15+ zile pe lună, adesea chiar de dimineață la trezire, care dispare doar 3–4 ore după pastilă și revine din nou;",
    "Consum frecvent de analgezice combinate (cu cofeină/codeină) sau triptani de >10 zile/lună, ori AINS/paracetamol de >15 zile/lună;",
    "În cefaleea Cluster („în ciorchine”): crize extrem de intense de 15–180 minute strict pe o singură parte, în jurul unui ochi, cu lăcrimare, ochi roșu, pleoapă căzută și nară înfundată de aceeași parte;",
    "Crize care apar la aceleași ore (frecvent noaptea, trezind pacientul din somn) în perioade de câteva săptămâni, cu agitație motorie."
]}
   approachHeading="Cum ieșim din cercul vicios al calmantelor cu ajutorul neurologului"
   approachParagraphs={[
    "Dr. Igor Revenco analizează jurnalul exact al durerilor și al pastilelor luate în ultimele 3 luni, exclude cauzele secundare (inclusiv prin examen neurologic, REG 500 MDL, EHO-EG 250 MDL sau indicație de RMN la cefaleea Cluster nou apărută) și stabilește o schemă sigură de reducere/oprire a analgezicelor abuzate împreună cu tratament preventiv adecvat.",
    "Pentru a traversa mult mai ușor perioada de resetare a receptorilor de durere și a reduce frecvența crizelor fără a crește din nou consumul de pastile, metodele nefarmacologice din Revimed PLUS+ — Electrosomn, stimulare transcraniană Transair TES, Bi-LENAR și acupunctură (100 MDL / 30 min) — oferă un sprijin real pentru sistemul nervos și somn."
]}
   equipmentHeading="Metode preventive nefarmacologice pentru reducerea dependenței de calmante"
   equipmentCards={[
    {
        "slug": "transair-01p-transair-05",
        "title": "Transair (TES-terapie)",
        "image": "/images/equipment/transair.webp",
        "desc": "Stimularea sistemului endorfinic propriu pentru calmarea cefaleei cronice — 100 MDL / 30 min."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn-3",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Stabilizarea somnului și a pragului dureros în perioada de retragere a calmantelor — 100 MDL / 30 min."
    },
    {
        "slug": "rheotest",
        "title": "Reoencefalografie REG (500 MDL)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea neinvazivă a tonusului vascular cerebral."
    }
]}
   customDecisionTable={{
    "heading": "Diferențiere: Cefalee de abuz medicamentos vs. Cefalee Cluster vs. Migrenă cronică",
    "columns": [
        "Tip cefalee",
        "Frecvență & durată",
        "Semne distinctive",
        "Abordare corectă"
    ],
    "rows": [
        [
            "Cefalee prin abuz medicamentos (MOH)",
            "15+ zile/lună, adesea zilnică, de >3 luni",
            "Reapare exact când trece efectul pastilei; consum >10–15 zile/lună",
            "Neurolog (500 MDL) + oprire ghidată a abuzului + prevenție + Transair/Electrosomn"
        ],
        [
            "Cefalee Cluster („în ciorchine”)",
            "Crize de 15–180 min, 1–8 ori/zi, în serii de săptămâni",
            "Durere atroce strict în jurul unui ochi + lăcrimare, ochi roșu, nară înfundată, agitație",
            "Neurolog (500 MDL) + RMN la debut + terapie specifică de criză și profilaxie"
        ],
        [
            "Migrenă cronică",
            "15+ zile/lună (cel puțin 8 cu caracter migrenos)",
            "Pulsatilă cu greață, fotofobie/fonofobie, preferă camera întunecată și liniștea",
            "Neurolog (500 MDL) + profilaxie medicală + REG / Electrosomn / Acupunctură"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Cum pregătești consultul pentru dureri de cap zilnice (4 pași esențiali)",
    "steps": [
        "Notează sincer timp de 2 săptămâni fiecare zi cu durere ȘI fiecare pastilă luată (inclusiv pulberi efervescente, pastile cu cofeină sau picături).",
        "În cefaleea Cluster, notează ora exactă a crizelor, durata în minute și dacă apare lăcrimare sau nas înfundat pe aceeași parte.",
        "Evită alcoolul (declanșator aproape imediat în perioadele active de cefalee Cluster) și redu treptat excesul de cafea/energizante.",
        "Nu întrerupe brusc de unul singur medicamentele care conțin codeină sau barbiturice fără sfatul medicului neurolog."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale de alarmă la durerea de cap — apelează IMEDIAT 112:",
    "items": [
        "Durere de cap bruscă, fulgerătoare („cea mai severă din viață”), instalată în câteva secunde;",
        "Durere de cap nou apărută după 50 de ani cu sensibilitate la tâmplă, durere la mestecat sau tulburări vizuale;",
        "Cefalee însoțită de febră mare, ceafă rigidă, confuzie, convulsii, slăbiciune la un membru ori vedere dublă."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Completează Screening-ul Neurologic Orientativ (2 min) →",
    "desc": "Organizează frecvența crizelor și simptomele asociate înainte de consult:"
}}
   faqs={[
    {
        "q": "Cât timp durează până scad durerile de cap după oprirea abuzului de calmante?",
        "a": "Primele 1–2 săptămâni pot fi mai sensibile (simptome de rebound), motiv pentru care procesul se face ghidat de neurolog (500 MDL) cu suport preventiv și proceduri blânde (Transair/Electrosomn — 100 MDL / 30 min). Ulterior, frecvența durerilor scade dramatic."
    },
    {
        "q": "De ce este important RMN-ul la prima apariție a cefaleei Cluster?",
        "a": "Deși cefaleea Cluster este o cefalee primară, la debutul absolut medicul neurolog recomandă de regulă un RMN cerebral pentru a exclude cu certitudine cauze secundare din zona hipofizei sau a sinusului cavernos."
    }
]}
   relatedLinks={[
    {
        "href": "/cefalee-tensiune-vs-migrena-chisinau/",
        "label": "Cefalee vs. Migrenă (Ghid)"
    },
    {
        "href": "/tratament-migrene-chisinau/",
        "label": "Tratament Migrene Chișinău"
    },
    {
        "href": "/nevralgie-occipitala-arnold-durere-ceafa-chisinau/",
        "label": "Nevralgie Occipitală Arnold"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn & Transair (100 MDL)"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    }
]}
  />
 );
}
