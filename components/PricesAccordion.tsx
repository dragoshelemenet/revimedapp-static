"use client";

import { useState } from "react";

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
     <section className={isOpen ? "priceAccordionGroup open" : "priceAccordionGroup"} key={group}>
      <button
       type="button"
       className="priceAccordionHead"
       onClick={() => setOpen(isOpen ? null : group)}
       aria-expanded={isOpen}
      >
       <span>
        <b>{group}</b>
        <small>{rows.length} {servicesCountLabel}</small>
       </span>
       <i>{isOpen ? "−" : "+"}</i>
      </button>

      {isOpen && (
       <div className="priceAccordionBody">
        {rows.map((p) => (
         <article className="priceItemClean" key={p.id}>
          <div>
           <h3>{p.service}</h3>
           {p.note && <p>{p.note}</p>}
          </div>
          <strong>{p.price}</strong>
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
