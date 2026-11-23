import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/electrospondilografie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/electrospondilografie-chisinau/", ru: "/ru/elektrospondilografiya-kishinev/", "x-default": "/electrospondilografie-chisinau/" },
 title: "Electrospondilografie Chișinău (500 MDL) — Diagnostic Funcțional Coloană",
 description: "Examinare computerizată cu electrospondilografie a coloanei vertebrale în Chișinău (Ciocana) la Revimed PLUS+ — 500 MDL. Evaluare neinvazivă fără radiații. 022 60 50 60."
});

export default function ElectrospondilografieChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/electrospondilografie-chisinau"
   crumbLabel="Electrospondilografie Chișinău"
   h1="Examinare Computerizată cu Electrospondilografie în Chișinău — 500 MDL"
   lead="Evaluare funcțională computerizată, neinvazivă și fără radiații a segmentelor coloanei vertebrale și a rădăcinilor nervoase spinale la Centrul Medical Revimed PLUS+ (Ciocana)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), examinarea computerizată cu electrospondilografie costă 500 MDL, iar consultația primară la medic neurolog sau neurochirurg (Dr. Igor Revenco, 35+ ani experiență, membru EANS) costă 500 MDL (repetată 400 MDL, tarife orientative). Programări: 022 60 50 60."
   introParagraph="Electrospondilografia (ESG) este o metodă de diagnostic funcțional computerizat care evaluează starea funcțională a segmentelor vertebrale (cervicale, toracale, lombare și sacrale) și reactivitatea radiculară, completând examenul neurologic și investigațiile imagistice (RMN/CT)."
   symptomsHeading="Când este utilă electrospondilografia coloanei (500 MDL)"
   symptoms={[
    "Dureri cervicale, toracale sau lombare recurente, osteocondroză și spondiloză;",
    "Radiculopatii, sciatică, amorțeli sau furnicături pe braț ori picior;",
    "Monitorizarea neinvazivă (fără radiații) a evoluției în timpul cursului de fizioterapie și kinetoterapie;",
    "Evaluare funcțională complementară la pacienții cu hernie de disc sau tulburări de postură."
]}
   approachHeading="Cum decurge examinarea și cum se integrează în planul de recuperare"
   approachParagraphs={[
    "Procedura este complet nedureroasă, nu utilizează raze X și se realizează prin măsurarea parametrilor electrofiziologici cutanați în punctele paravertebrale corespunzătoare segmentelor spinale.",
    "Rezultatul este interpretat de Dr. Igor Revenco în corelație cu examenul clinic și eventualele imagini RMN/CT, pentru a ținti exact segmentele afectate prin electroforeză, Amplipuls, laseroterapie, magnetoterapie sau masaj (proceduri de la 100 MDL / 30 min). Examinarea nu înlocuiește RMN/CT atunci când imagistica este indicată."
]}
   equipmentHeading="Diagnostic funcțional și recuperare vertebrală"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Diagnostic Funcțional Computerizat",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Electrospondilografie (500 MDL) și analiză neinvazivă AMP 117 indici (1000 MDL)."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls-5 / Amplipuls-6",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Electroterapie sinusoidală modulată pentru decompresie musculară — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Medicală",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Terapie locală antiinflamatoare pe segmentul vertebral — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Cât costă electrospondilografia în Chișinău la Revimed PLUS+?",
        "a": "Examinarea computerizată cu electrospondilografie are tariful orientativ de 500 MDL. Consultația primară la neurolog sau neurochirurg costă 500 MDL."
    },
    {
        "q": "Înlocuiește electrospondilografia un RMN de coloană?",
        "a": "Nu. RMN-ul arată structura anatomică, în timp ce electrospondilografia oferă informații funcționale despre iritația radiculară și răspunsul la recuperare, fără radiații."
    }
]}
   relatedLinks={[
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de Disc Chișinău"
    },
    {
        "href": "/dureri-de-spate-sciatica-chisinau/",
        "label": "Dureri de Spate & Sciatică"
    },
    {
        "href": "/osteocondroza-cervicala-chisinau/",
        "label": "Osteocondroză Cervicală"
    },
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
