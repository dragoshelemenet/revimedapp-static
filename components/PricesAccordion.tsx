"use client";

import { useState } from "react";

type PriceLang = "ro" | "en" | "ru" | "ua";

const priceTranslations: Record<PriceLang, Record<string, string>> = {
  ro: {},
  en: {
    "Реоенцефалограма": "Реоенцефалограма",
    "Оцінка мозкового кровообігу": "Оцінка мозкового кровообігу",
    "Evaluation of cerebral blood circulation": "Evaluation of cerebral blood circulation",
    "Оценка мозгового кровообращения": "Оценка мозгового кровообращения",
    "Электроэнцефалограмма (ЭЭГ)": "Электроэнцефалограмма (ЭЭГ)",
    "Rheoencephalogram": "Rheoencephalogram",
    "Electroencephalogram (EEG)": "Electroencephalogram (EEG)",
    "Електроенцефалограма (ЕЕГ)": "Електроенцефалограма (ЕЕГ)",
    "Реоэнцефалограмма": "Реоэнцефалограмма",
    "Consultații Neurologice": "Neurology Consultations",
    "Consultație primară cu neurolog": "Initial neurologist consultation",
    "Evaluare neurologică inițială": "Initial neurological evaluation",
    "Consultație repetată cu neurolog": "Follow-up neurologist consultation",
    "Consultație de control": "Follow-up consultation",
    "Electroencefalogramă (EEG)": "Electroencephalogram (EEG)",
    "Evaluarea activității electrice cerebrale": "Evaluation of brain electrical activity",
    "Reoencefalogramă": "Rheoencephalogram",
    "Evaluarea circulației cerebrale": "Evaluation of cerebral blood circulation",

    "Consultații Neurochirurgie": "Neurosurgery Consultations",
    "Fizioterapie și Reabilitare": "Physiotherapy and Rehabilitation",
    "Diagnostic Funcțional": "Functional Diagnostics",
    "Terapie Balneară": "Balneotherapy",
    "Electroterapie": "Electrotherapy"
  },
  ru: {
    "Consultații Neurologice": "Неврологические консультации",
    "Consultație primară cu neurolog": "Первичная консультация невролога",
    "Evaluare neurologică inițială": "Первичная неврологическая оценка",
    "Consultație repetată cu neurolog": "Повторная консультация невролога",
    "Consultație de control": "Контрольная консультация",
    "Electroencefalogramă (EEG)": "Электроэнцефалограмма (ЭЭГ)",
    "Evaluarea activității electrice cerebrale": "Оценка электрической активности мозга",
    "Reoencefalogramă": "Реоэнцефалограмма",
    "Evaluarea circulației cerebrale": "Оценка мозгового кровообращения",

    "Consultații Neurochirurgie": "Консультации нейрохирурга",
    "Fizioterapie și Reabilitare": "Физиотерапия и реабилитация",
    "Diagnostic Funcțional": "Функциональная диагностика",
    "Terapie Balneară": "Бальнеотерапия",
    "Electroterapie": "Электротерапия"
  },
  ua: {
    "Consultații Neurologice": "Неврологічні консультації",
    "Consultație primară cu neurolog": "Первинна консультація невролога",
    "Evaluare neurologică inițială": "Первинна неврологічна оцінка",
    "Consultație repetată cu neurolog": "Повторна консультація невролога",
    "Consultație de control": "Контрольна консультація",
    "Electroencefalogramă (EEG)": "Електроенцефалограма (ЕЕГ)",
    "Evaluarea activității electrice cerebrale": "Оцінка електричної активності мозку",
    "Reoencefalogramă": "Реоенцефалограма",
    "Evaluarea circulației cerebrale": "Оцінка мозкового кровообігу",

    "Consultații Neurochirurgie": "Консультації нейрохірурга",
    "Fizioterapie și Reabilitare": "Фізіотерапія та реабілітація",
    "Diagnostic Funcțional": "Функціональна діагностика",
    "Terapie Balneară": "Бальнеотерапія",
    "Electroterapie": "Електротерапія"
  }
};

function getPriceLang(): PriceLang {
  if (typeof window === "undefined") return "ro";
  const first = window.location.pathname.split("/").filter(Boolean)[0];
  if (first === "en" || first === "ru" || first === "ua") return first;
  return "ro";
}

function translatePriceText(value: string | null | undefined) {
  const raw = String(value || "").trim();
  if (!raw) return raw;
  const lang = getPriceLang();
  return priceTranslations[lang]?.[raw] || raw;
}

function formatPriceValue(value: string | number | null | undefined) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  if (/\bMDL\b|EUR|€|lei|gratis|gratuit|la cerere/i.test(raw)) return raw;
  if (/^\d+(?:[.,]\d+)?$/.test(raw)) return `${raw} MDL`;
  return raw;
}



type Price = {
 id: number;
 category: string;
 service: string;
 price: string;
 note: string;
};

export default function PricesAccordion({
 groups,
 prices,
 servicesCountLabel = "servicii"
}: {
 groups: string[];
 prices: Price[];
 servicesCountLabel?: string;
}) {
 const [open, setOpen] = useState<string | null>(null);

 return (
  <div className="pricesAccordion">
   {groups.map((group) => {
    const isOpen = open === group;
    const rows = prices.filter((p) => p.category === group);

    return (
     <section className={isOpen ? "priceAccordionGroup open" : "priceAccordionGroup"} key={translatePriceText(group)}>
      <button
       type="button"
       className="priceAccordionHead"
       onClick={() => setOpen(isOpen ? null : group)}
       aria-expanded={isOpen}
      >
       <span>
        <b>{translatePriceText(group)}</b>
        <small>{rows.length} {servicesCountLabel}</small>
       </span>
       <i>{isOpen ? "−" : "+"}</i>
      </button>

      {isOpen && (
       <div className="priceAccordionBody">
        {rows.map((p) => (
         <article className="priceItemClean" key={p.id}>
          <div>
           <h3>{translatePriceText(p.service)}</h3>
           {p.note && <p>{translatePriceText(p.note)}</p>}
          </div>
          <strong>{formatPriceValue(p.price)}</strong>
         </article>
        ))}
       </div>
      )}
     </section>
    );
   })}
  </div>
 );
}