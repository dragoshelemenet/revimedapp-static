import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/kinetoterapie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/kinetoterapie-chisinau/", ru: "/ru/kinezoterapiya-kishinev/", "x-default": "/kinetoterapie-chisinau/" },
 title: "Kinetoterapie Chișinău (250 MDL/oră) — Recuperare Coloană & AVC",
 description: "Kinetoterapie și tratament combinat electroterapie + kinetoterapie în Chișinău (Ciocana) la Revimed PLUS+ — 250 MDL/oră. Hernie de disc, post-AVC, dureri de spate. 022 60 50 60."
});

export default function KinetoterapieChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/kinetoterapie-chisinau"
   crumbLabel="Kinetoterapie Chișinău"
   h1="Kinetoterapie & Recuperare Medicală în Chișinău (Ciocana)"
   lead="Programe personalizate de kinetoterapie și electroterapie combinată pentru refacerea mobilității coloanei vertebrale, articulațiilor și recuperare post-AVC."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), tratamentul combinat electroterapie + kinetoterapie costă 250 MDL/oră, fizioterapia manuală (45 min) 180 MDL, iar ședința de fizioterapie (30 min) 150 MDL. Planul este coordonat de Dr. Igor Revenco. Programări: 022 60 50 60."
   introParagraph="Kinetoterapia medicală corectează postura, întărește musculatura profundă care stabilizează coloana vertebrală și redă autonomia mișcării după episoade de hernie de disc, sciatică, traumatisme sau AVC."
   symptomsHeading="Pentru ce afecțiuni recomandăm kinetoterapia"
   symptoms={[
    "Hernie de disc, protuzii lombare/cervicale și dureri cronice de spate;",
    "Recuperare neuromotorie după AVC (accident vascular cerebral) și pareze;",
    "Scolioză, cifoză, tulburări de postură la adulți și adolescenți;",
    "Rigiditate articulară și recuperare post-traumatică sau post-operatorie."
]}
   approachHeading="De ce combinăm kinetoterapia cu electroterapia"
   approachParagraphs={[
    "Când mușchii sunt contractați și dureroși, mișcarea singură poate fi dificilă. Combinând electroterapia analgezică (Amplipuls, Electroforeză) cu exerciții dozate, reducem durerea rapid și stabilizăm coloana pe termen lung.",
    "Fiecare program este adaptat vârstei, nivelului de durere și investigațiilor RMN/CT."
]}
   equipmentHeading="Resurse clinice pentru recuperare"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls (SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Electroterapie analgezică și stimulare musculară."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Administrare locală antiinflamatoare fără injecții."
    },
    {
        "slug": "lampa-solux",
        "title": "Lampa Solux",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Relaxare musculară profundă înainte de exerciții."
    }
]}
   faqs={[
    {
        "q": "Cât costă kinetoterapia în Chișinău la Revimed PLUS+?",
        "a": "Tratamentul combinat electroterapie + kinetoterapie costă 250 MDL/oră, iar fizioterapia manuală (45 min) 180 MDL."
    },
    {
        "q": "Câte ședințe sunt necesare pentru durerile de spate?",
        "a": "De obicei un ciclu inițial include 8–10 ședințe, ajustate după evoluția clinică."
    }
]}
   relatedLinks={[
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic"
    },
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de disc"
    },
    {
        "href": "/recuperare-dupa-avc-chisinau/",
        "label": "Recuperare după AVC"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (97 servicii)"
    }
]}
  />
 );
}
