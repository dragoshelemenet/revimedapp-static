"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";

export type FaqEntry = {
 id: string;
 category: "consultatii" | "programari" | "clinica";
 question: string;
 answer: string;
};

const CATEGORY_LABELS: Record<Lang, {
 all: string;
 consultatii: string;
 programari: string;
 clinica: string;
 placeholder: string;
 ariaSearch: string;
 ariaClear: string;
 ariaCats: string;
 emptyPrefix: string;
 emptySuffix: string;
}> = {
 ro: {
  all: "Toate",
  consultatii: "Consultații & Tratament",
  programari: "Programări & Prețuri",
  clinica: "Clinică & Specialități",
  placeholder: "Caută o întrebare (ex. programare, copii, prețuri, neurologie)...",
  ariaSearch: "Caută în întrebări frecvente",
  ariaClear: "Șterge căutarea",
  ariaCats: "Categorii întrebări",
  emptyPrefix: "Nu am găsit întrebări pentru „",
  emptySuffix: "”. Încearcă alt cuvânt sau sună la "
 },
 en: {
  all: "All",
  consultatii: "Consultations & Care",
  programari: "Appointments & Prices",
  clinica: "Clinic & Specialties",
  placeholder: "Search a question (e.g. booking, children, prices, neurology)...",
  ariaSearch: "Search FAQ",
  ariaClear: "Clear search",
  ariaCats: "Question categories",
  emptyPrefix: "No questions found for “",
  emptySuffix: "”. Try another keyword or call "
 },
 ru: {
  all: "Все",
  consultatii: "Консультации и лечение",
  programari: "Запись и цены",
  clinica: "Клиника и профиль",
  placeholder: "Поиск вопроса (напр. запись, дети, цены, неврология)...",
  ariaSearch: "Поиск по частым вопросам",
  ariaClear: "Очистить поиск",
  ariaCats: "Категории вопросов",
  emptyPrefix: "Вопросы по запросу «",
  emptySuffix: "» не найдены. Попробуйте другое слово или позвоните "
 },
 ua: {
  all: "Усі",
  consultatii: "Консультації та лікування",
  programari: "Запис та ціни",
  clinica: "Клініка та профіль",
  placeholder: "Пошук питання (напр. запис, діти, ціни, неврологія)...",
  ariaSearch: "Пошук у частих питаннях",
  ariaClear: "Очистити пошук",
  ariaCats: "Категорії питань",
  emptyPrefix: "Питань за запитом «",
  emptySuffix: "» не знайдено. Спробуйте інше слово або зателефонуйте "
 }
};

function normalizeText(str: string) {
 return str
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
}

export default function FaqInteractive({ items, lang = "ro" }: { items: FaqEntry[]; lang?: Lang }) {
 const [query, setQuery] = useState("");
 const [category, setCategory] = useState<"all" | FaqEntry["category"]>("all");
 const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
 const ui = CATEGORY_LABELS[lang];
 const categories: { id: "all" | FaqEntry["category"]; label: string }[] = [
  { id: "all", label: ui.all },
  { id: "consultatii", label: ui.consultatii },
  { id: "programari", label: ui.programari },
  { id: "clinica", label: ui.clinica }
 ];

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
      placeholder={ui.placeholder}
      aria-label={ui.ariaSearch}
      className="rm-faq-search-input"
     />
     {query && (
      <button
       type="button"
       onClick={() => setQuery("")}
       className="rm-faq-clear-btn"
       aria-label={ui.ariaClear}
      >
       ×
      </button>
     )}
    </div>

    <div className="rm-faq-cats" role="tablist" aria-label={ui.ariaCats}>
     {categories.map((cat) => {
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
     {ui.emptyPrefix}{query}{ui.emptySuffix}
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
