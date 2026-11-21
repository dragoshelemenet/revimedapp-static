"use client";

import { useRef, useState } from "react";
import { PRICE_RATES, type PriceCurrency } from "./PricesInteractiveSection";

type Price = {
 id: number;
 group_key: string;
 lang?: string;
 category: string;
 service: string;
 price: string;
 note?: string;
 position?: number;
 published?: number;
};

type Props = {
 groups: string[];
 prices: Price[];
 servicesCountLabel: string;
 currency?: PriceCurrency;
};

function convertAmount(mdlAmount: number, currency: PriceCurrency): string {
 const { mdlPerUnit } = PRICE_RATES[currency];
 const converted = mdlAmount / mdlPerUnit;
 if (currency === "MDL" || currency === "UAH") {
  return String(Math.round(converted));
 }
 return converted >= 100 ? String(Math.round(converted)) : converted.toFixed(1).replace(/\.0$/, "");
}

function formatPriceValue(value: string | number | null | undefined, currency: PriceCurrency = "MDL") {
 const raw = String(value ?? "").trim();
 if (!raw) return "";
 if (/gratis|gratuit|la cerere|free|on request|бесплатно|по запросу|безкоштовно|за запитом/i.test(raw)) {
  return raw;
 }

 // If the price contains EUR already, keep as-is when EUR or convert to MDL first
 const isAlreadyEur = /EUR|€/i.test(raw);
 const unitLabel = currency === "EUR" ? "EUR" : currency;

 // Convert any numeric values (including ranges like "300 - 500" or "450 MDL")
 if (/\d/.test(raw)) {
  const cleaned = raw.replace(/\b(MDL|EUR|RON|USD|UAH|lei)\b|€/gi, "").trim();
  const converted = cleaned.replace(/\d+(?:[.,]\d+)?/g, (numStr) => {
   const n = Number(numStr.replace(",", "."));
   if (!Number.isFinite(n)) return numStr;
   const mdlVal = isAlreadyEur ? n * PRICE_RATES.EUR.mdlPerUnit : n;
   return convertAmount(mdlVal, currency);
  });
  return `${converted} ${unitLabel}`;
 }

 return raw;
}

export default function PricesAccordion({ groups, prices, servicesCountLabel, currency = "MDL" }: Props) {
 const [openGroup, setOpenGroup] = useState<string>("");
 const groupRefs = useRef<Record<string, HTMLElement | null>>({});

 function togglePriceGroup(group: string) {
  const nextGroup = openGroup === group ? "" : group;
  setOpenGroup(nextGroup);

  if (nextGroup) {
   window.setTimeout(() => {
    const el = groupRefs.current[nextGroup];
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
   }, 90);
  }
 }

 return (
  <div className="pricesAccordion">
   {groups.map((group) => {
    const rows = prices.filter((p) => p.category === group);
    const isOpen = openGroup === group;

    return (
     <section
      ref={(el) => {
       groupRefs.current[group] = el;
      }}
      className={isOpen ? "priceAccordionGroup open" : "priceAccordionGroup"}
      key={group}
     >
      <button
       type="button"
       className="priceAccordionHead"
       onClick={() => togglePriceGroup(group)}
       aria-expanded={isOpen}
      >
       <span>
        <b>{group}</b>
        <small>{rows.length} {servicesCountLabel}</small>
       </span>
       <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
      </button>

      {isOpen && (
       <div className="priceAccordionBody">
        {rows.map((p) => (
         <article className="priceItemClean" key={p.id}>
          <div>
           <h3>{p.service}</h3>
           {p.note && <p>{p.note}</p>}
          </div>
          <strong>{formatPriceValue(p.price, currency)}</strong>
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
