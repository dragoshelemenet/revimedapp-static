import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/tensiune-intracraniana-simptome-neurolog-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/tensiune-intracraniana-simptome-neurolog-chisinau/", ru: "/ru/vnutricherepnoe-davlenie-simptomy-nevrolog-kishinev/", "x-default": "/tensiune-intracraniana-simptome-neurolog-chisinau/" },
 title: "Tensiune Intracraniană Simptome Chișinău — Neurolog-Neurochirurg, EHO-EG & REG",
 description: "Cum recunoști semnele reale de tensiune intracraniană crescută la adulți și copii vs. migrena obișnuită în Chișinău — Dr. Igor Revenco (neurolog & neurochirurg, 500 MDL), EHO-EG (250 MDL), REG (500 MDL)."
});

export default function TensiuneIntracranianaSimptomeNeurologChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/tensiune-intracraniana-simptome-neurolog-chisinau"
   crumbLabel="Tensiune Intracraniană"
   h1="Tensiune Intracraniană (Adulți și Copii) în Chișinău — Simptome Reale și Evaluare Corectă"
   lead="Când durerea de cap matinală sugerează presiune intracraniană reală și când este vorba de migrenă, cefalee de tensiune sau drenaj venos deficitar — ghid de la neurologul-neurochirurg Dr. Igor Revenco."
   directAnswer="Hipertensiunea intracraniană adevărată este o stare medicală serioasă care se manifestă tipic prin cefalee apăsătoare matinală (agravată la tuse/aplecare), greață fără ușurare și tulburări vizuale (vedere dublă sau încețoșată), și NU trebuie confundată cu orice durere de cap obișnuită. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară cu Dr. Igor Revenco (neurolog, neuropediatru și doctor în neurochirurgie, membru EANS, 35+ ani experiență) costă 500 MDL (repetată 400 MDL), EHO-Encefalografia (M-eco) 250 MDL, iar Reoencefalografia REG 500 MDL (tarife orientative). În semne acute severe apelați 112. Programări: 022 60 50 60."
   introParagraph="În Republica Moldova, diagnosticul informal de „tensiune intracraniană” este uneori presupus prea ușor la orice cefalee, oboseală ori plâns al copilului — dar, pe de altă parte, o hipertensiune intracraniană adevărată nu trebuie niciodată ignorată. Evaluarea de către un medic care este simultan neurolog, neuropediatru și doctor în neurochirurgie oferă diferențierea precisă între o urgență neurochirurgicală (RMN/CT + fund de ochi) și tulburările funcționale vasculare sau tensionale."
   symptomsHeading="Simptome care necesită diferențiere medicală atentă"
   symptoms={[
    "La adulți: durere de cap cu senzație de presiune intensă, mai accentuată dimineața sau la trezire, agravată de tuse, strănut ori aplecare;",
    "Greață sau vărsături matinale care nu aduc ușurare, asociate cu vedere dublă (diplopie), ceață vizuală sau îngustarea câmpului vizual;",
    "La sugari/copii mici: creștere accelerată a perimetrului cranian, fontanelă bombată și tensionată în repaus, vărsături în jet sau privire „în apus de soare”;",
    "La școlari/adolescenți: cefalee persistentă cu scăderea bruscă a concentrării, somnolență diurnă neobișnuită sau amețeli cu zgomot pulsatil în urechi."
]}
   approachHeading="Cum stabilește Dr. Igor Revenco diagnosticul corect (fără tratamente „după ureche”)"
   approachParagraphs={[
    "Dr. Igor Revenco realizează examenul neurologic și neurochirurgical complet (nervi cranieni, reflexe, coordonare, evoluția simptomelor) și poate efectua pe loc screening-ul ultrasonografic EHO-Encefalografie (250 MDL) și Reoencefalografie REG (500 MDL) pentru evaluarea drenajului venos cerebral și a structurilor mediane.",
    "Pentru confirmarea sau excluderea definitivă a hipertensiunii intracraniene adevărate, medicul recomandă transparent examinările standard internaționale — examenul fundului de ochi la oftalmolog (pentru edem papilar) și imagistică cerebrală (RMN/CT la adulți și copii mari, sau ecografie transfontanelară la sugari). Nu se recomandă niciodată automedicația cu diuretice fără diagnostic obiectiv."
]}
   equipmentHeading="Investigații funcționale neinvazive disponibile la Revimed PLUS+"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "EHO-EG (250 MDL) & REG (500 MDL)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Screening rapid fără iradiere al structurilor mediane (M-eco) și al drenajului venos cerebral."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn-3",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Suport nefarmacologic în cefaleea tensională sau migrenoasă (după excluderea HIC) — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Echilibrare neuro-vegetativă în tulburările funcționale vasculare — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Hipertensiune intracraniană reală vs. Cefalee frecvent confundată",
    "columns": [
        "Tablou clinic",
        "Semne cheie",
        "Ce confirmă diagnosticul",
        "Conduită corectă"
    ],
    "rows": [
        [
            "Hipertensiune intracraniană la adulți (suspiciune reală)",
            "Cefalee matinală agravată la tuse/culcat, greață, vedere dublă/încețoșată, tinitus pulsatil",
            "Consult Neurolog-Neurochirurg + Fund de ochi (oftalmolog) + RMN/CT cerebral",
            "Evaluare prioritară Dr. Igor Revenco (500 MDL) / 112 dacă apar semne acute"
        ],
        [
            "Suspiciune la sugari / copii mici",
            "Fontanelă bombată în liniște, perimetru cranian crescut rapid, vărsături în jet, apatie",
            "Neurosonografie transfontanelară + consult neuropediatru/neurochirurg",
            "Evaluare pediatrică/neurochirurgicală urgentă — nu așteptați!"
        ],
        [
            "Migrenă / Cefalee tensională / Drenaj venos cervical",
            "Durere pulsatilă sau ca o „cască” la stres/ecran, fără edem papilar și fără deficit focal",
            "Examen neurologic + REG (500 MDL) + EHO-EG (250 MDL) la indicație",
            "Plan neurologic personalizat + fizioterapie blândă (100 MDL / 30 min)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Ce să aduci la consultația neurologului-neurochirurg (5 elemente)",
    "steps": [
        "Notează timp de 5–7 zile când apare durerea de cap (dimineața la trezire vs. seara după muncă) și dacă se agravează când tușești sau te apleci.",
        "Măsoară tensiunea arterială dimineața și seara (hipertensiunea arterială necontrolată imită des presiunea intracraniană).",
        "Adu rezultatele anterioare de RMN/CT cerebral, oftalmologie (fund de ochi) și, la copii, graficul perimetrului cranian / ecografia transfontanelară.",
        "Notează dacă au apărut modificări de vedere (vedere dublă, pete negre la ridicarea în picioare) sau zgomot pulsatil în urechi.",
        "Nu lua diuretice sau calmante în exces înainte de clarificarea cauzei — abuzul de analgezice întreține durerea cronică de cap."
    ]
}}
   redFlagsNotice={{
    "heading": "Urgență neurochirurgicală — sună IMEDIAT la 112 dacă apare:",
    "items": [
        "Durere de cap bruscă, extrem de severă, însoțită de vărsături repetate, somnolență profundă sau confuzie;",
        "Vedere dublă nou apărută, pierdere tranzitorie sau bruscă a vederii, ori pupile inegale;",
        "La sugar: fontanelă foarte bombată, plâns ascuțit inconsolabil, vărsături în jet sau apatie severă;",
        "Slăbiciune bruscă la un membru, tulburări de vorbire, febră mare cu ceafă rigidă sau convulsii."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Completează Screening-ul Neurologic Orientativ (2 min) →",
    "desc": "Structurează tiparul durerilor de cap și al simptomelor asociate înainte de consultație:"
}}
   faqs={[
    {
        "q": "Se poate măsura exact tensiunea intracraniană printr-un aparat extern în cabinet?",
        "a": "Nu există un aparat extern care să măsoare direct în mmHg presiunea intracraniană (măsurarea directă este invazivă, de spital). În ambulatoriu se folosesc semnele clinice neurologice, examenul fundului de ochi (oftalmolog), EHO-EG (250 MDL) orientativ și imagistica RMN/CT."
    },
    {
        "q": "De ce este important consultul unui medic cu dublă specializare neurolog + neurochirurg?",
        "a": "Dr. Igor Revenco (neurolog, neuropediatru și doctor în neurochirurgie, membru EANS) poate evalua atât cauzele neurologice benigne (migrenă, tulburări de drenaj venos), cât și indicațiile neurochirurgicale care necesită RMN/CT de urgență."
    },
    {
        "q": "Orice durere de cap la copii înseamnă tensiune intracraniană?",
        "a": "Nu — la școlari, cele mai frecvente cauze sunt oboseala vizuală/ecranele, lipsa somnului, stresul școlar, deshidratarea sau sinuzita. Consultul neuropediatric (500 MDL) clarifică exact cauza fără alarme inutile."
    }
]}
   relatedLinks={[
    {
        "href": "/eho-encefalografie-chisinau/",
        "label": "EHO-Encefalografie (250 MDL)"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău (500 MDL)"
    },
    {
        "href": "/cefalee-tensiune-vs-migrena-chisinau/",
        "label": "Cefalee vs. Migrenă (Ghid)"
    },
    {
        "href": "/recuperare-comotie-cerebrala-traumatism-chisinau/",
        "label": "Recuperare Comoție Cerebrală"
    }
]}
  />
 );
}
