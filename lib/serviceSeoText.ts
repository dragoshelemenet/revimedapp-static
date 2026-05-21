import type { Lang } from "@/lib/i18n";

type ServicePack = {
 title: string;
 short: string;
 details: string[];
 benefits: string[];
 cta: string;
};

export function cleanServiceText(value: string | undefined | null) {
 const text = String(value || "");
 return text
  .replace(new RegExp("https?://img\\.icons8\\.com/\\S+", "gi"), "")
  .replace(new RegExp("https?://[^\\s]+\\.png", "gi"), "")
  .replace(new RegExp("\\s+", "g"), " ")
  .trim();
}

export const serviceSeoData: Record<Lang, Record<string, ServicePack>> = {
 ro: {
  "consultatii-neurologice": {
   title: "Consultații Neurologice",
   short: "Evaluare neurologică pentru dureri de cap, amețeli, amorțeli, tulburări de memorie, somn, echilibru și afecțiuni ale sistemului nervos.",
   details: [
    "Consultația neurologică este recomandată pacienților care au dureri de cap, migrene, amețeli, tulburări de echilibru, amorțeli, furnicături, slăbiciune musculară, tremor, tulburări de somn, probleme de memorie sau dificultăți de concentrare.",
    "În cadrul consultației se analizează istoricul simptomelor, evoluția lor, factorii declanșatori, tratamentele folosite anterior și investigațiile existente.",
    "Scopul este identificarea semnalelor de alarmă, clarificarea cauzei posibile și stabilirea unui plan medical adaptat pacientului."
   ],
   benefits: [
    "orientare clară pentru simptome neurologice",
    "evaluare pentru dureri, amorțeli, amețeli și tulburări de echilibru",
    "plan de investigații, tratament sau recuperare"
   ],
   cta: "Pentru o evaluare corectă, programează o consultație neurologică."
  },
  "consultatii-neurochirurgie": {
   title: "Consultații Neurochirurgie",
   short: "Consultații pentru evaluarea patologiilor coloanei vertebrale, compresiilor nervoase, herniilor de disc și indicațiilor neurochirurgicale.",
   details: [
    "Consultația de neurochirurgie este utilă pentru pacienții cu dureri persistente de spate, dureri cervicale sau lombare cu iradiere, hernii de disc, stenoză de canal, compresii radiculare, amorțeli, slăbiciune în membre sau recomandări anterioare pentru intervenție.",
    "Medicul analizează simptomele, documentele medicale și investigațiile existente, inclusiv RMN, CT sau alte rezultate relevante.",
    "Consultația neurochirurgicală nu înseamnă automat operație. Scopul este luarea unei decizii informate, sigure și potrivite pentru starea pacientului."
   ],
   benefits: [
    "evaluare pentru coloană, discuri și compresii nervoase",
    "interpretarea investigațiilor existente",
    "orientare către tratament conservator, recuperare sau intervenție"
   ],
   cta: "Dacă ai dureri persistente de spate sau simptome neurologice în membre, cere o evaluare specializată."
  },
  "fizioterapie-si-reabilitare": {
   title: "Fizioterapie și Reabilitare",
   short: "Programe individuale de recuperare pentru mobilitate, forță, durere, postură, mers, echilibru și funcție.",
   details: [
    "Fizioterapia și reabilitarea ajută la recuperarea mobilității, scăderea durerii, creșterea forței musculare, îmbunătățirea posturii și redobândirea independenței funcționale.",
    "Programul poate include exerciții terapeutice, mobilizări, antrenament pentru mers, echilibru, coordonare, respirație, tonus muscular și adaptarea activităților zilnice.",
    "Planul este personalizat în funcție de diagnostic, vârstă, nivel de efort tolerat, durere și obiectivele pacientului."
   ],
   benefits: [
    "recuperare după dureri sau afecțiuni neurologice/ortopedice",
    "îmbunătățirea mersului, echilibrului și forței",
    "program adaptat individual"
   ],
   cta: "Pentru recuperare eficientă, începe cu o evaluare funcțională și un plan personalizat."
  },
  "diagnostic-functional": {
   title: "Diagnostic Funcțional",
   short: "Evaluări funcționale pentru mișcare, coordonare, echilibru, forță musculară, postură și recuperare.",
   details: [
    "Diagnosticul funcțional ajută la înțelegerea modului în care pacientul se mișcă, își coordonează musculatura, menține echilibrul și tolerează activitățile zilnice.",
    "Evaluarea poate include testarea mobilității, forței, posturii, mersului, echilibrului, coordonării și limitărilor funcționale.",
    "Rezultatul oferă o bază clară pentru planul de recuperare și permite urmărirea progresului în timp."
   ],
   benefits: [
    "înțelegerea limitărilor reale ale pacientului",
    "plan de recuperare mai precis",
    "monitorizarea progresului"
   ],
   cta: "O evaluare funcțională corectă ajută la alegerea exercițiilor potrivite."
  },
  "terapie-balneara": {
   title: "Terapie Balneară",
   short: "Proceduri balneare, nămol, hidroterapie și metode complementare pentru susținerea recuperării.",
   details: [
    "Terapia balneară folosește proceduri complementare pentru relaxare, susținerea recuperării și reducerea disconfortului musculo-articular.",
    "Poate include aplicații locale, hidroterapie, nămol sau alte metode indicate individual, în funcție de starea pacientului și contraindicații.",
    "Procedurile se aleg cu atenție, mai ales la pacienții cu boli cronice, afecțiuni cardiovasculare, inflamații active sau sensibilitate crescută."
   ],
   benefits: [
    "relaxare și suport pentru recuperare",
    "proceduri adaptate pacientului",
    "susținere pentru dureri musculo-articulare selectate"
   ],
   cta: "Întreabă medicul ce proceduri balneare sunt potrivite pentru situația ta."
  },
  "electroterapie": {
   title: "Electroterapie",
   short: "Proceduri de electrostimulare și electroterapie pentru durere, musculatură, tonus și recuperare.",
   details: [
    "Electroterapia include proceduri cu curenți terapeutici sau electrostimulare, folosite ca parte a unui plan de recuperare.",
    "Poate fi recomandată pentru durere, contracturi, tonus muscular, susținerea funcției neuromusculare și recuperare după anumite afecțiuni.",
    "Parametrii se aleg individual, iar procedura se evită atunci când există contraindicații."
   ],
   benefits: [
    "suport pentru durere și musculatură",
    "poate completa exercițiile terapeutice",
    "parametri adaptați individual"
   ],
   cta: "Electroterapia se recomandă după evaluare, ca parte dintr-un plan de recuperare."
  }
 },

 en: {},
 ru: {},
 ua: {}
};

serviceSeoData.en = serviceSeoData.ro;
serviceSeoData.ru = serviceSeoData.ro;
serviceSeoData.ua = serviceSeoData.ro;

export function getServiceSeo(slug: string, lang: Lang, currentTitle?: string, currentDescription?: string) {
 const fallback = serviceSeoData[lang]?.[slug] || serviceSeoData.ro?.[slug];

 const title = cleanServiceText(currentTitle);
 const short = cleanServiceText(currentDescription);

 return {
  title: title && !title.startsWith("http") ? title : fallback?.title || title || "Serviciu",
  short: short && short.length > 30 ? short : fallback?.short || short || "",
  details: fallback?.details || [],
  benefits: fallback?.benefits || [],
  cta: fallback?.cta || ""
 };
}
