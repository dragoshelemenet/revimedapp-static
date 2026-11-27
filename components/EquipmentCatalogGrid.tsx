"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SiteLang } from "@/lib/equipment";
import styles from "./ContentLayout.module.css";

export type EquipmentCardItem = {
 id: string;
 href: string;
 title: string;
 description: string;
 badge: string;
 image?: string;
 imageAlt?: string;
 action: string;
};

const uiLabels: Record<SiteLang, { all: string; search: string; empty: string }> = {
 ro: {
  all: "Toate utilajele",
  search: "Caută aparat sau procedură (ex. Electrosomn, Amplipuls, Solux)...",
  empty: "Nu am găsit niciun aparat pentru această căutare."
 },
 en: {
  all: "All equipment",
  search: "Search device or therapy (e.g. Electrosomn, Amplipuls, Sollux)...",
  empty: "No medical device matches your search."
 },
 ru: {
  all: "Всё оборудование",
  search: "Поиск аппарата или процедуры (напр. Электросон, Амплипульс)...",
  empty: "По вашему запросу оборудование не найдено."
 },
 ua: {
  all: "Все обладнання",
  search: "Пошук апарата або процедури (напр. Електросон, Ампліпульс)...",
  empty: "За вашим запитом обладнання не знайдено."
 }
};

function norm(s: string) {
 return s
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
}

export default function EquipmentCatalogGrid({
 items,
 lang = "ro"
}: {
 items: EquipmentCardItem[];
 lang?: SiteLang;
}) {
 const labels = uiLabels[lang] || uiLabels.ro;
 const [activeCategory, setActiveCategory] = useState<string>("__all__");
 const [query, setQuery] = useState("");

 const categories = useMemo(() => {
  const counts = new Map<string, number>();
  for (const item of items) {
   counts.set(item.badge, (counts.get(item.badge) || 0) + 1);
  }
  return Array.from(counts.entries());
 }, [items]);

 const filtered = useMemo(() => {
  const q = norm(query.trim());
  return items.filter((item) => {
   if (activeCategory !== "__all__" && item.badge !== activeCategory) return false;
   if (!q) return true;
   return (
    norm(item.title).includes(q) ||
    norm(item.description).includes(q) ||
    norm(item.badge).includes(q)
   );
  });
 }, [items, activeCategory, query]);

 return (
  <div className="rm-equip-catalog">
   <div className="rm-faq-controls" data-glass-card>
    <div className="rm-faq-search-row">
     <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rm-faq-search-icon"
      aria-hidden="true"
     >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
     </svg>
     <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={labels.search}
      aria-label={labels.search}
      className="rm-faq-search-input"
     />
     {query && (
      <button
       type="button"
       onClick={() => setQuery("")}
       className="rm-faq-clear-btn"
       aria-label="Clear"
      >
       ×
      </button>
     )}
    </div>

    <div className="rm-faq-cats" role="tablist" aria-label={labels.all}>
     <button
      type="button"
      role="tab"
      aria-selected={activeCategory === "__all__"}
      onClick={() => setActiveCategory("__all__")}
      className={`rm-faq-cat-pill${activeCategory === "__all__" ? " is-active" : ""}`}
     >
      <span>{labels.all}</span>
      <span className="rm-faq-cat-count">{items.length}</span>
     </button>
     {categories.map(([cat, count]) => {
      const isActive = activeCategory === cat;
      return (
       <button
        key={cat}
        type="button"
        role="tab"
        aria-selected={isActive}
        onClick={() => setActiveCategory(cat)}
        className={`rm-faq-cat-pill${isActive ? " is-active" : ""}`}
       >
        <span>{cat}</span>
        <span className="rm-faq-cat-count">{count}</span>
       </button>
      );
     })}
    </div>
   </div>

   {filtered.length === 0 ? (
    <div className="rm-faq-empty" data-glass-card>
     {labels.empty}
    </div>
   ) : (
    <div className="rm-smart-grid rm-equip-full-grid">
     {filtered.map((item, idx) => (
      <article key={item.id} className={`${styles.card} rm-listing-card rm-equip-card`} data-glass-card>
       {item.image && (
        <Link href={item.href} className="rm-equip-card-media">
         <img
          src={item.image}
          alt={item.imageAlt || item.title}
          loading={idx === 0 ? "eager" : "lazy"}
          fetchPriority={idx === 0 ? "high" : "auto"}
          decoding="async"
          width={960}
          height={720}
         />
        </Link>
       )}
       <div className={styles.cardBody}>
        <span className={styles.badge}>{item.badge}</span>
        <h2>
         <Link href={item.href}>{item.title}</Link>
        </h2>
        <p className="rm-equip-card-desc">{item.description}</p>
        <Link href={item.href} className={styles.action}>
         {item.action} <span aria-hidden="true">→</span>
        </Link>
       </div>
      </article>
     ))}
    </div>
   )}
  </div>
 );
}
