import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/ghid-diagnostic-functional-eeg-reg-amp-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/ghid-diagnostic-functional-eeg-reg-amp-chisinau/", ru: "/ru/gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev/", "x-default": "/ghid-diagnostic-functional-eeg-reg-amp-chisinau/" },
 title: "Ghid Diagnostic Funcțional Chișinău: EEG vs. REG vs. AMP vs. ESG (Prețuri 2026)",
 description: "Ce investigație să alegi la Revimed PLUS+ Chișinău? Comparație clară EEG (1600 MDL), Cartografiere 3D (600 MDL), REG (500 MDL), Electrospondilografie (500 MDL), AMP (1000 MDL) și pregătire. 022 60 50 60."
});

export default function GhidDiagnosticFunctionalEegRegAmpChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/ghid-diagnostic-functional-eeg-reg-amp-chisinau"
   crumbLabel="Ghid Diagnostic Funcțional"
   h1="Ghid Complet de Diagnostic Funcțional în Chișinău: EEG vs. REG vs. AMP vs. Electrospondilografie"
   lead="Comparație transparentă a celor 7 investigații neinvazive de la Centrul Medical Revimed PLUS+ (Ciocana): ce măsoară fiecare, cum te pregătești, ce NU înlocuiește și tarifele orientative 2026."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), toate investigațiile de diagnostic funcțional sunt neinvazive și fără radiații: EEG 19 canale (1600 MDL), Cartografiere cerebrală 3D (600 MDL), Reoencefalografie REG (500 MDL), Electrospondilografie (500 MDL), Termalgometrie RUNO (500 MDL), Analizator AMP 117 indici (1000 MDL), Ecografie organe interne / EHO-EG (250 MDL) și ECG computerizat (200 MDL — tarife orientative). Programări: 022 60 50 60."
   introParagraph="Pacienții ne întreabă frecvent: „Pentru amețeli trebuie EEG sau REG?”, „Pentru spate ajunge electrospondilografia sau îmi trebuie RMN?”, „Analizatorul AMP înlocuiește analizele de sânge?”. Acest ghid clarifică exact rolul clinic și limitele fiecărei investigații disponibile la Revimed PLUS+."
   symptomsHeading="Principiile diagnosticului funcțional corect la Revimed PLUS+"
   symptoms={[
    "Diagnosticul funcțional măsoară cum funcționează organul (activitate electrică, circulație, tonus vegetativ), completând — dar fără a înlocui — imagistica anatomică (RMN/CT) sau analizele de laborator atunci când acestea sunt indicate;",
    "Toate investigațiile sunt neinvazive, fără raze X și fără durere, putând fi repetate în siguranță pentru monitorizarea evoluției;",
    "Rezultatele sunt corelate direct cu examenul clinic al Dr. Igor Revenco (35+ ani experiență în neurologie, neurochirurgie și neuropediatrie)."
]}
   approachHeading="Cum alegi investigația potrivită fără cheltuieli inutile"
   approachParagraphs={[
    "Dacă nu ești sigur ce investigație se potrivește simptomelor tale, cel mai eficient prim pas este consultația primară la medicul neurolog/neurochirurg (500 MDL), în urma căreia medicul indică strict investigațiile necesare cazului tău.",
    "Toate prețurile și disponibilitatea procedurilor afișate pe site au caracter orientativ și se confirmă telefonic la recepția clinicii (022 60 50 60, Luni–Vineri 09:00–15:00)."
]}
   equipmentHeading="Sistemele de diagnostic ale clinicii"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG) & EEG 19 Canale",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Circulație cerebrală REG (500 MDL), Cartografiere (600 MDL) și EEG (1600 MDL)."
    },
    {
        "slug": "aparat-amp",
        "title": "Analizator Neinvaziv AMP",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Evaluare orientativă a 117 indici fără recoltare de sânge — 1000 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Plan de Recuperare Personalizat",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Legătură directă între diagnostic și fizioterapie — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Comparație directă: toate investigațiile funcționale Revimed PLUS+ (2026)",
    "columns": [
        "Investigație",
        "Ce evaluează",
        "Când este indicată",
        "Preț orientativ"
    ],
    "rows": [
        [
            "EEG 19 canale + Brain Mapping",
            "Activitatea bioelectrică cerebrală",
            "Epilepsie, convulsii, ticuri copii, insomnie, migrene",
            "1600 MDL"
        ],
        [
            "Cartografiere creier / Neuroenergometrie",
            "Harta topografică 3D a ritmurilor și energiei corticale",
            "Monitorizare post-AVC, stres, concentrare, migrene",
            "600 MDL"
        ],
        [
            "Reoencefalografie (REG RHEOTEST)",
            "Tonusul arterelor cerebrale și drenajul venos",
            "Amețeli, tinitus, migrene, spondiloză cervicală",
            "500 MDL"
        ],
        [
            "Electrospondilografie coloană",
            "Starea funcțională a segmentelor vertebrale (fără RX)",
            "Dureri de spate, sciatică, scolioză, monitorizare",
            "500 MDL"
        ],
        [
            "Analizator AMP-Tech (117 indici)",
            "Screening neinvaziv metabolic, hemodinamic, electrolitic",
            "Evaluare orientativă generală (nu înlocuiește laboratorul)",
            "1000 MDL"
        ],
        [
            "Termalgometrie RUNO",
            "Reactivitatea sistemului nervos vegetativ",
            "Distonie neurovegetativă (DNV), stres, palpitații",
            "500 MDL"
        ],
        [
            "ECG / EHO-EG / Ecografie",
            "Ritm cardiac (200 MDL), structuri cerebrale/organe (250 MDL)",
            "Completare rapidă a evaluării clinice pe loc",
            "200–250 MDL"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Pregătirea pas cu pas înainte de investigații (5 reguli simple)",
    "steps": [
        "Pentru EEG și Cartografiere: spală părul cu o seară înainte și nu folosi gel, ulei sau fixativ.",
        "Pentru REG și RUNO: evită cafeaua, energizantele, alcoolul și fumatul cu 3–4 ore înainte de examinare.",
        "Pentru AMP 117 indici: ideal pe nemâncate sau la 2–3 ore după o masă ușoară, în repaus liniștit.",
        "NU întrerupe medicația cronică (antiepileptică, antihipertensivă, cardiacă) fără indicația expresă a medicului.",
        "Adu dosarul cu investigațiile anterioare (RMN, CT, EEG vechi, analize) pentru comparație în dinamică."
    ]
}}
   redFlagsNotice={{
    "heading": "Notă importantă de siguranță medicală:",
    "items": [
        "Investigațiile funcționale din regim ambulatoriu nu sunt destinate urgențelor acute. În caz de durere acută în piept, paralizie bruscă, pierderea cunoștinței sau convulsii active, apelați imediat 112."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata/",
    "label": "Deschide Calculatorul de Recuperare Personalizată (gratuit) →",
    "desc": "Explorează orientativ ce direcție de evaluare și recuperare se potrivește profilului tău:"
}}
   faqs={[
    {
        "q": "Analizatorul AMP 117 indici înlocuiește analizele clasice de sânge?",
        "a": "Nu. AMP-Tech oferă un screening funcțional neinvaziv orientativ extrem de util, dar nu înlocuiește analizele biochimice de laborator sau imagistica atunci când acestea sunt necesare pentru diagnostic."
    },
    {
        "q": "Pot face mai multe investigații în aceeași zi?",
        "a": "Da, de exemplu consultația neurologică (500 MDL) poate fi asociată în aceeași vizită cu REG (500 MDL), Electrospondilografie (500 MDL) sau EEG (1600 MDL), cu programare prealabilă la 022 60 50 60."
    }
]}
   relatedLinks={[
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Chișinău (1600 MDL)"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/diagnostic-amp-chisinau/",
        "label": "Diagnostic AMP (1000 MDL)"
    },
    {
        "href": "/electrospondilografie-chisinau/",
        "label": "Electrospondilografie (500 MDL)"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
