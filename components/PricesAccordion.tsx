"use client";

import { useRef, useState } from "react";

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
};

function formatPriceValue(value: string | number | null | undefined) {
 const raw = String(value ?? "").trim();
 if (!raw) return "";
 if (/\bMDL\b|EUR|€|lei|gratis|gratuit|la cerere/i.test(raw)) return raw;
 if (/^\d+(?:[.,]\d+)?$/.test(raw)) return `${raw} MDL`;
 return raw;
}

export default function PricesAccordion({ groups, prices, servicesCountLabel }: Props) {
 const [openGroup, setOpenGroup] = useState<string>("");
 const groupRefs = useRef<Record<string, HTMLElement | null>>({});

 function togglePriceGroup(group: string) {
  const nextGroup = openGroup === group ? "" : group;
  setOpenGroup(nextGroup);

  if (nextGroup) {
   window.setTimeout(() => {
    const el = groupRefs.current[nextGroup];
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 92;
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
