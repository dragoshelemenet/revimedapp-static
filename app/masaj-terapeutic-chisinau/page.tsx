import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/masaj-terapeutic-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/masaj-terapeutic-chisinau/", ru: "/ru/lechebnyy-massazh-kishinev/", "x-default": "/masaj-terapeutic-chisinau/" },
 title: "Masaj Terapeutic Chișinău (200 MDL / 60 min) — Spate & Coloană",
 description: "Masaj terapeutic medical în Chișinău (Ciocana) la Revimed PLUS+: 200 MDL/60 min, masaj terapeutic profund 220 MDL, masaj cu nămol 300 MDL, combinat cu fizioterapie. 022 60 50 60."
});

export default function MasajTerapeuticChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/masaj-terapeutic-chisinau"
   crumbLabel="Masaj Terapeutic Chișinău"
   h1="Masaj Terapeutic Medical în Chișinău — Spate, Coloană & Recuperare"
   lead="Masaj terapeutic profesional sub supraveghere medicală neurologică în Chișinău (Ciocana), ideal pentru dureri cervicale, lombare, contracturi și hernie de disc."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), masajul terapeutic (60 min) costă 200 MDL, masajul terapeutic profund 220 MDL, masajul cu nămol (60 min) 300 MDL, iar patul cu pietre de jad / vibromasajul 150 MDL/oră. Programările se fac la 022 60 50 60."
   introParagraph="Spre deosebire de masajul de relaxare din saloanele cosmetice, masajul terapeutic din Revimed PLUS+ este integrat într-o clinică de neurologie și recuperare, adaptat diagnosticelor de coloană (osteocondroză, protuzii, sciatică, contracturi paravertebrale)."
   symptomsHeading="Când te ajută masajul terapeutic medical"
   symptoms={[
    "Contracturi musculare cervicale, toracale și lombare cauzate de munca la birou;",
    "Dureri de spate, rigiditate matinală, osteocondroză și scolioză;",
    "Recuperare conservatoare în hernie de disc și sciatică (după evaluare neurologică);",
    "Dureri de cap cervicogene, tensiune în umeri și oboseală musculară cronică."
]}
   approachHeading="Protocol combinat: masaj terapeutic + fizioterapie"
   approachParagraphs={[
    "Rezultatele cele mai rapide apar când masajul terapeutic (200 MDL/60 min) este asociat cu fizioterapie țintită (Amplipuls, Electroforeză, Lampa Solux — 150 MDL/ședință) sau kinetoterapie.",
    "Înainte de începerea curei la pacienții cu hernie de disc sau amorțeli, Dr. Igor Revenco poate stabili exact zonele sigure și intensitatea optimă."
]}
   equipmentHeading="Proceduri complementare disponibile pe loc"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls (SMT)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Curenți analgezici și miorelaxanți pentru spate — 150 MDL/oră."
    },
    {
        "slug": "lampa-solux",
        "title": "Lampa Solux",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Încălzire terapeutică infraroșu înainte de masaj."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Vibromasaj Kang Da Jia",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Stimulare circulatorie și relaxare musculară — 150 MDL."
    }
]}
   faqs={[
    {
        "q": "Cât costă masajul terapeutic în Chișinău la Revimed PLUS+?",
        "a": "Masajul terapeutic de 60 minute costă 200 MDL, masajul terapeutic profund 220 MDL, iar masajul cu nămol 300 MDL."
    },
    {
        "q": "Pot face masaj dacă am hernie de disc?",
        "a": "Da, dar numai cu tehnici adaptate și blânde, după evaluarea RMN-ului de către medicul neurolog/neurochirurg (Dr. Igor Revenco)."
    }
]}
   relatedLinks={[
    {
        "href": "/fizioterapie-chisinau/",
        "label": "Fizioterapie Chișinău"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie Chișinău"
    },
    {
        "href": "/hernie-de-disc-chisinau/",
        "label": "Hernie de disc Chișinău"
    },
    {
        "href": "/dureri-de-spate-sciatica-chisinau/",
        "label": "Dureri de spate & sciatică"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (97 servicii)"
    }
]}
  />
 );
}
