"use client";

import { useMemo, useState } from "react";

export type FaqEntry = {
 id: string;
 category: "consultatii" | "programari" | "clinica";
 question: string;
 answer: string;
};

const CATEGORIES: { id: "all" | FaqEntry["category"]; label: string }[] = [
 { id: "all", label: "Toate" },
 { id: "consultatii", label: "Consultații & Tratament" },
 { id: "programari", label: "Programări & Prețuri" },
 { id: "clinica", label: "Clinică & Specialități" }
];

function normalizeText(str: string) {
 return str
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
}

export default function FaqInteractive({ items }: { items: FaqEntry[] }) {
 const [query, setQuery] = useState("");
 const [category, setCategory] = useState<"all" | FaqEntry["category"]>("all");
 const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

 const filtered = useMemo(() => {
  const q = normalizeText(query.trim());
  return items.filter((item) => {
   if (category !== "all" && item.category !== category) return false;
   if (!q) return true;
   return (
    normalizeText(item.question).includes(q) ||
    normalizeText(item.answer).includes(q)
   );
  });
 }, [items, query, category]);

 const hasOpen = openId !== null && filtered.some((item) => item.id === openId);

 return (
  <div className="rm-faq-wrap">
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
      placeholder="Caută o întrebare (ex. programare, copii, prețuri, neurologie)..."
      aria-label="Caută în întrebări frecvente"
      className="rm-faq-search-input"
     />
     {query && (
      <button
       type="button"
       onClick={() => setQuery("")}
       className="rm-faq-clear-btn"
       aria-label="Șterge căutarea"
      >
       ×
      </button>
     )}
    </div>

    <div className="rm-faq-cats" role="tablist" aria-label="Categorii întrebări">
     {CATEGORIES.map((cat) => {
      const active = category === cat.id;
      const count =
       cat.id === "all"
        ? items.length
        : items.filter((i) => i.category === cat.id).length;
      return (
       <button
        key={cat.id}
        type="button"
        role="tab"
        aria-selected={active}
        onClick={() => setCategory(cat.id)}
        className={`rm-faq-cat-pill${active ? " is-active" : ""}`}
       >
        <span>{cat.label}</span>
        <span className="rm-faq-cat-count">{count}</span>
       </button>
      );
     })}
    </div>
   </div>

   {filtered.length === 0 ? (
    <div className="rm-faq-empty" data-glass-card>
     Nu am găsit întrebări pentru „{query}”. Încearcă alt cuvânt sau sună la{" "}
     <a href="tel:022605060">022 60 50 60</a>.
    </div>
   ) : (
    <div className="rm-faq-list">
     {filtered.map((item) => {
      const isOpen = openId === item.id;
      const isCompact = hasOpen && !isOpen;
      return (
       <div
        key={item.id}
        className={`rm-faq-item${isOpen ? " is-open" : ""}${isCompact ? " is-compact" : ""}`}
        data-glass-card
       >
        <button
         type="button"
         className="rm-faq-trigger"
         aria-expanded={isOpen}
         onClick={() => setOpenId(isOpen ? null : item.id)}
        >
         <span className="rm-faq-q-text">{item.question}</span>
         <span className="rm-faq-chevron" aria-hidden="true">
          {isOpen ? "−" : "+"}
         </span>
        </button>
        {isOpen && (
         <div className="rm-faq-answer">
          <p>{item.answer}</p>
         </div>
        )}
       </div>
      );
     })}
    </div>
   )}
  </div>
 );
}
