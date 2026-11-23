import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/eho-encefalografie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/eho-encefalografie-chisinau/", ru: "/ru/ehoentsefalografiya-eho-eg-kishinev/", "x-default": "/eho-encefalografie-chisinau/" },
 title: "EHO-Encefalografie (ECHO-EG) Chișinău — 250 MDL | Diferența față de EEG",
 description: "Ce arată EHO-Encefalografia (ECHO-EG — 250 MDL) în Chișinău, cum se deosebește de EEG (1600 MDL) și de RMN/CT și când este indicată la Revimed PLUS+ (Dr. Igor Revenco, Ciocana). 022 60 50 60."
});

export default function EhoEncefalografieChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/eho-encefalografie-chisinau"
   crumbLabel="EHO-Encefalografie (250 MDL)"
   h1="EHO-Encefalografie (ECHO-EG) în Chișinău — Ce Arată și Diferența față de EEG"
   lead="Screening ultrasonografic rapid, nedureros și fără iradiere al structurilor mediane ale creierului (M-eco) — explicat clar față de EEG și RMN/CT de neurologul-neurochirurg Dr. Igor Revenco."
   directAnswer="EHO-Encefalografia (ECHO-EG) este o examinare ultrasonografică rapidă și complet nedureroasă care evaluează poziția structurilor mediane ale creierului (semnalul M-eco) și semne orientative legate de presiunea intracraniană. La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), examinarea EHO-Encefalografie costă 250 MDL, Reoencefalografia (REG) 500 MDL, EEG 19 canale 1600 MDL, iar consultația primară cu neurologul și neurochirurgul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL; tarife orientative). EHO-EG nu înlocuiește CT/RMN în urgențele traumatice (112). Programări: 022 60 50 60."
   introParagraph="Pacienții confundă frecvent EHO-EG (ecografie cu ultrasunete a creierului) cu EEG (înregistrarea undelor electrice cerebrale), deși cele două metode răspund la întrebări medicale complet diferite. Înțelegerea rolului fiecărei investigații te ajută să alegi corect evaluarea potrivită simptomelor tale, fără investigații inutile."
   symptomsHeading="Când recomandă medicul neurolog EHO-Encefalografia (250 MDL)"
   symptoms={[
    "Dureri de cap frecvente cu senzație de presiune intracraniană (mai ales dimineața) sau în context de hipertensiune arterială;",
    "Evaluare orientativă rapidă (neinvazivă, fără iradiere) a simetriei structurilor mediane (M-eco) la adulți și copii;",
    "Monitorizare funcțională complementară după traumatisme craniene ușoare stabilizate (după excluderea urgenței în spital);",
    "Amețeli persistente, zgomote în urechi sau tulburări de somn când se asociază cu REG (500 MDL) ori EEG (1600 MDL)."
]}
   approachHeading="Cum integrează Dr. Igor Revenco EHO-EG cu restul diagnosticului funcțional"
   approachParagraphs={[
    "Procedura durează aproximativ 10–15 minute: medicul aplică gel neutru pe tâmple și plasează sonda cu ultrasunete fără niciun disconfort sau radiație, verificând deplasarea semnalului median (M-eco) și indicii de pulsație/ventriculari. Fiind complet lipsită de iradiere, poate fi repetată în siguranță la indicația medicului.",
    "Dr. Igor Revenco (neurolog și doctor în neurochirurgie, membru EANS) stabilește transparent limitele metodei: dacă EHO-EG ridică o suspiciune structurală sau dacă tabloul clinic sugerează o leziune de focar, pacientul este îndrumat imediat spre imagistică de înaltă rezoluție (RMN sau CT cerebral)."
]}
   equipmentHeading="Investigații funcționale complementare la Revimed PLUS+"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "EHO-EG, REG & EEG 19 Canale",
        "image": "/images/equipment/rheotest.webp",
        "desc": "EHO-Encefalografie (250 MDL), Reoencefalografie REG (500 MDL) și EEG 19 canale (1600 MDL)."
    },
    {
        "slug": "aparat-amp",
        "title": "Screening Funcțional AMP 117",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Evaluare neinvazivă a 117 indici clinici funcționali (complementară analizelor de laborator) — 1000 MDL."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn-3",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Terapie nefarmacologică blândă pentru cefalee tensională și insomnie — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Comparație clară: EHO-EG (250 MDL) vs. EEG (1600 MDL) vs. RMN / CT cerebral",
    "columns": [
        "Investigație",
        "Principiu fizic",
        "Ce evaluează concret",
        "Când este alegerea potrivită"
    ],
    "rows": [
        [
            "EHO-Encefalografie (ECHO-EG — 250 MDL)",
            "Ultrasunete (fără radiații, 10–15 min)",
            "Simetria structurilor mediane (M-eco), semne indirecte de presiune/hidrocefalie",
            "Screening rapid orientativ în cefalee, hipertensiune, control neurologic (nu înlocuiește RMN/CT)"
        ],
        [
            "EEG 19 Canale (1600 MDL)",
            "Electrozi de suprafață (unde electrice cerebrale)",
            "Activitatea bioelectrică corticală, ritmuri de somn, focare epileptiforme",
            "Convulsii, pierderi de cunoștință, epilepsie, ticuri, întârziere de vorbire, insomnie"
        ],
        [
            "Reoencefalografie REG (500 MDL)",
            "Impedanță vasculară neinvazivă",
            "Tonusul vascular cerebral, afluxul arterial și drenajul venos",
            "Amețeli, migrene, tinitus, osteocondroză cervicală, recuperare post-comoție"
        ],
        [
            "RMN / CT Cerebral (centre imagistice)",
            "Rezonanță magnetică / Raze X tomografice",
            "Anatomie detaliată milimetrică (tumori, AVC, hemoragii, chisturi, demielinizări)",
            "Traumatism cranian acut (CT urgență 112), deficit neurologic focal, suspiciune de tumoră"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Pregătirea pentru EHO-Encefalografie (simplă, 4 pași)",
    "steps": [
        "Nu este necesară nicio pregătire alimentară specială — poți mânca și lua tratamentul cronic obișnuit.",
        "Îndepărtează cerceii voluminoși, agrafele sau bentițele din zona tâmplelor înainte de intrarea în cabinet.",
        "Adu rezultatele anterioare (EHO-EG, EEG, RMN/CT, valori ale tensiunii arteriale) pentru comparare în dinamică.",
        "Dacă efectuezi în aceeași zi și EEG (1600 MDL) sau REG (500 MDL), vino cu părul curat și uscat (fără fixativ/gel)."
    ]
}}
   redFlagsNotice={{
    "heading": "Când NU trebuie să aștepți EHO-EG — sună imediat la 112 pentru CT de urgență:",
    "items": [
        "Lovitură recentă la cap urmată de vărsături, somnolență, confuzie sau pierdere de cunoștință;",
        "Durere de cap bruscă, extrem de severă („cea mai puternică din viață”) cu greață sau rigiditate de ceafă;",
        "Slăbiciune bruscă la o mână/picior, asimetrie facială ori tulburare subită de vorbire/vedere (suspiciune AVC)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Verifică orientativ ce investigație ți se potrivește (Test 2 min) →",
    "desc": "Completează scurtul chestionar de simptome înainte de programare:"
}}
   faqs={[
    {
        "q": "EHO-Encefalografia doare sau are radiații (este sigură pentru copii și gravide)?",
        "a": "Procedura este complet nedureroasă și folosește ultrasunete (fără raze X / fără radiații), fiind sigură atât pentru copii, cât și pentru adulți sau femei însărcinate."
    },
    {
        "q": "Pot face EHO-EG în loc de RMN cerebral?",
        "a": "Nu. EHO-EG (250 MDL) este o metodă rapidă de screening orientativ pentru deplasarea structurilor mediane și semne indirecte, dar nu oferă imagini anatomice detaliate precum RMN sau CT. Medicul neurolog stabilește dacă este necesar un RMN."
    },
    {
        "q": "Cât costă EHO-Encefalografia și se eliberează rezultatul pe loc?",
        "a": "La Revimed PLUS+, tariful orientativ pentru EHO-Encefalografie este 250 MDL, iar interpretarea clinică poate fi discutată direct în cadrul consultației cu Dr. Igor Revenco (500 MDL primară / 400 MDL repetată)."
    }
]}
   relatedLinks={[
    { href: "/tensiune-intracraniana-simptome-neurolog-chisinau/", label: "Tensiune Intracraniană (Simptome)" },
    {
        "href": "/ghid-diagnostic-functional-eeg-reg-amp-chisinau/",
        "label": "Ghid Diagnostic: EEG vs. REG vs. AMP"
    },
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Chișinău (1600 MDL)"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/recuperare-comotie-cerebrala-traumatism-chisinau/",
        "label": "Recuperare Comoție Cerebrală"
    },
    {
        "href": "/ecografie-ecg-chisinau/",
        "label": "Ecografie & ECG (200–250 MDL)"
    }
]}
  />
 );
}
