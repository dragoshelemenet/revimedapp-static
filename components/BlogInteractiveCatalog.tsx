"use client";

import { useMemo, useState, useRef } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import styles from "./ContentLayout.module.css";

export type BlogCatalogItem = {
  id: string;
  slug: string;
  href: string;
  title: string;
  description: string;
  image?: string;
  category: "coloana" | "pediatrie" | "cap" | "somn" | "recuperare";
  keywords: string;
  action: string;
};

const UI_TEXT: Record<Lang, {
  searchPlaceholder: string;
  ariaSearch: string;
  ariaClear: string;
  all: string;
  catColoana: string;
  catPediatrie: string;
  catCap: string;
  catSomn: string;
  catRecuperare: string;
  showing: (start: number, end: number, total: number) => string;
  prevPage: string;
  nextPage: string;
  loadMore: string;
  showAll: string;
  collapseView: string;
  emptyPrefix: string;
  emptySuffix: string;
  readTime: string;
  pageOf: (current: number, total: number) => string;
}> = {
  ro: {
    searchPlaceholder: "Caută articole și ghiduri medicale (ex. hernie, sciatică, vorbire, insomnie, migrenă)...",
    ariaSearch: "Caută articole în blog",
    ariaClear: "Șterge căutarea",
    all: "Toate articolele",
    catColoana: "Coloană & Sciatică",
    catPediatrie: "Neuropediatrie & Copii",
    catCap: "Dureri de Cap & Amețeli",
    catSomn: "Somn & Stres",
    catRecuperare: "Recuperare & Diagnostic",
    showing: (s, e, total) => `Se afișează ${s}–${e} din ${total} articole`,
    prevPage: "« Anterior",
    nextPage: "Următor »",
    loadMore: "Încarcă încă 12 articole",
    showAll: "Toate pe o pagină",
    collapseView: "Pagini numerotate",
    emptyPrefix: "Nu am găsit articole pentru „",
    emptySuffix: "”. Încearcă alt termen sau sună la recepție la ",
    readTime: "5 min lectură",
    pageOf: (c, t) => `Pagina ${c} din ${t}`
  },
  ru: {
    searchPlaceholder: "Поиск статей и медицинских руководств (напр. грыжа, ишиас, речь, бессонница, мигрень)...",
    ariaSearch: "Поиск по статьям блога",
    ariaClear: "Очистить поиск",
    all: "Все статьи",
    catColoana: "Позвоночник и ишиас",
    catPediatrie: "Детская неврология",
    catCap: "Головная боль и головокружение",
    catSomn: "Сон и стресс",
    catRecuperare: "Реабилитация и диагностика",
    showing: (s, e, total) => `Показано ${s}–${e} из ${total} статей`,
    prevPage: "« Назад",
    nextPage: "Вперёд »",
    loadMore: "Показать ещё 12 статей",
    showAll: "Все на одной странице",
    collapseView: "Постранично",
    emptyPrefix: "По запросу «",
    emptySuffix: "» статей не найдено. Попробуйте другой запрос или позвоните в клинику ",
    readTime: "5 мин чтения",
    pageOf: (c, t) => `Страница ${c} из ${t}`
  },
  en: {
    searchPlaceholder: "Search clinical guides and articles (e.g. disc herniation, sciatica, speech delay, insomnia)...",
    ariaSearch: "Search blog articles",
    ariaClear: "Clear search",
    all: "All Articles",
    catColoana: "Spine & Sciatica",
    catPediatrie: "Pediatrics & Speech",
    catCap: "Headaches & Dizziness",
    catSomn: "Sleep & Stress",
    catRecuperare: "Rehabilitation & Diagnostics",
    showing: (s, e, total) => `Showing ${s}–${e} of ${total} articles`,
    prevPage: "« Previous",
    nextPage: "Next »",
    loadMore: "Load 12 more articles",
    showAll: "All on one page",
    collapseView: "Paginated view",
    emptyPrefix: "No articles found for “",
    emptySuffix: "”. Try another keyword or call reception at ",
    readTime: "5 min read",
    pageOf: (c, t) => `Page ${c} of ${t}`
  },
  ua: {
    searchPlaceholder: "Пошук посібників та статей (напр. грижа, ішіас, мовлення, безсоння, мігрень)...",
    ariaSearch: "Пошук по статтях блогу",
    ariaClear: "Очистити пошук",
    all: "Усі статті",
    catColoana: "Хребет та ішіас",
    catPediatrie: "Педіатрія та мовлення",
    catCap: "Головний біль та запаморочення",
    catSomn: "Сон та стрес",
    catRecuperare: "Реабілітація та діагностика",
    showing: (s, e, total) => `Показано ${s}–${e} з ${total} статей`,
    prevPage: "« Назад",
    nextPage: "Вперед »",
    loadMore: "Показати ще 12 статей",
    showAll: "Усі на одній сторінці",
    collapseView: "Посторінково",
    emptyPrefix: "За запитом «",
    emptySuffix: "» статей не знайдено. Спробуйте інше слово або зателефонуйте ",
    readTime: "5 хв читання",
    pageOf: (c, t) => `Сторінка ${c} з ${t}`
  }
};

function normalizeText(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const PAGE_SIZE = 12;

export default function BlogInteractiveCatalog({
  items,
  lang = "ro"
}: {
  items: BlogCatalogItem[];
  lang?: Lang;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | BlogCatalogItem["category"]>("all");
  const [page, setPage] = useState(1);
  const [isViewAll, setIsViewAll] = useState(false);
  const [cumulativeLimit, setCumulativeLimit] = useState(PAGE_SIZE);

  const catalogRef = useRef<HTMLDivElement>(null);
  const text = UI_TEXT[lang];

  const categoryDefinitions: { id: "all" | BlogCatalogItem["category"]; label: string }[] = [
    { id: "all", label: text.all },
    { id: "coloana", label: text.catColoana },
    { id: "pediatrie", label: text.catPediatrie },
    { id: "cap", label: text.catCap },
    { id: "somn", label: text.catSomn },
    { id: "recuperare", label: text.catRecuperare }
  ];

  const filtered = useMemo(() => {
    const q = normalizeText(query.trim());
    return items.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!q) return true;
      return (
        normalizeText(item.title).includes(q) ||
        normalizeText(item.description).includes(q) ||
        normalizeText(item.keywords).includes(q)
      );
    });
  }, [items, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  const visibleItems = useMemo(() => {
    if (isViewAll) {
      return filtered;
    }
    // If cumulative load more is in effect for current page
    const count = Math.max(safePage * PAGE_SIZE, cumulativeLimit);
    const start = (safePage - 1) * PAGE_SIZE;
    // Standard pagination: slice per page, unless cumulative is expanded
    if (cumulativeLimit > PAGE_SIZE && cumulativeLimit > safePage * PAGE_SIZE) {
      return filtered.slice(0, cumulativeLimit);
    }
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage, isViewAll, cumulativeLimit]);

  const startIdx = filtered.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const endIdx = isViewAll
    ? filtered.length
    : Math.min(filtered.length, cumulativeLimit > safePage * PAGE_SIZE ? cumulativeLimit : safePage * PAGE_SIZE);

  const scrollToCatalogTop = () => {
    if (catalogRef.current) {
      const top = catalogRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setCumulativeLimit(newPage * PAGE_SIZE);
    setIsViewAll(false);
    scrollToCatalogTop();
  };

  const handleLoadMore = () => {
    const nextLimit = cumulativeLimit + PAGE_SIZE;
    setCumulativeLimit(nextLimit);
    setPage(Math.ceil(nextLimit / PAGE_SIZE));
  };

  const handleCategorySelect = (catId: "all" | BlogCatalogItem["category"]) => {
    setCategory(catId);
    setPage(1);
    setCumulativeLimit(PAGE_SIZE);
  };

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setPage(1);
    setCumulativeLimit(PAGE_SIZE);
  };

  return (
    <div ref={catalogRef} className="rm-blog-catalog">
      {/* Search and Category Filter Card */}
      <div className="rm-faq-controls" data-glass-card style={{ marginBottom: 20 }}>
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
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder={text.searchPlaceholder}
            aria-label={text.ariaSearch}
            className="rm-faq-search-input"
          />
          {query && (
            <button
              type="button"
              onClick={() => handleQueryChange("")}
              className="rm-faq-clear-btn"
              aria-label={text.ariaClear}
            >
              ×
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="rm-faq-cats" role="tablist" aria-label="Categorii articole">
          {categoryDefinitions.map((cat) => {
            const isActive = category === cat.id;
            const count =
              cat.id === "all"
                ? items.length
                : items.filter((i) => i.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategorySelect(cat.id)}
                className={`rm-faq-cat-pill${isActive ? " is-active" : ""}`}
              >
                <span>{cat.label}</span>
                <span className="rm-faq-cat-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Status & View Toggle Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          padding: "8px 4px 18px",
          color: "#475569",
          fontSize: "14px",
          fontWeight: 500
        }}
      >
        <div>
          {filtered.length > 0 ? (
            <span>{text.showing(startIdx, endIdx, filtered.length)}</span>
          ) : null}
        </div>

        {filtered.length > PAGE_SIZE && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              type="button"
              onClick={() => {
                setIsViewAll(!isViewAll);
                if (!isViewAll) {
                  setCumulativeLimit(filtered.length);
                } else {
                  setPage(1);
                  setCumulativeLimit(PAGE_SIZE);
                }
              }}
              className="btn btn-outline-primary btn-sm"
              style={{
                borderRadius: 20,
                padding: "4px 12px",
                fontSize: "13px",
                cursor: "pointer"
              }}
            >
              {isViewAll ? text.collapseView : text.showAll}
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="rm-faq-empty" data-glass-card style={{ margin: "24px 0", padding: "32px 20px" }}>
          <p style={{ margin: 0, fontSize: "16px", color: "#1e293b" }}>
            {text.emptyPrefix}
            <strong>{query}</strong>
            {text.emptySuffix}
            <a href="tel:022605060" style={{ fontWeight: 700, color: "#0b8fd8", textDecoration: "underline" }}>
              022 60 50 60
            </a>.
          </p>
        </div>
      ) : (
        /* Blog Grid */
        <div className="rm-smart-grid" style={{ padding: "0 0 16px" }}>
          {visibleItems.map((item) => (
            <article key={item.id} className={`${styles.card} rm-listing-card`} data-glass-card>
              {item.image && (
                <Link href={item.href} className="rm-card-cover-link" tabIndex={-1} aria-hidden="true">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cover}
                    loading="lazy"
                    decoding="async"
                    width={720}
                    height={405}
                    style={{ maxHeight: 200, objectFit: "cover" }}
                  />
                </Link>
              )}
              <div className={styles.cardBody} style={{ padding: "16px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", gap: 8 }}>
                  <span className={styles.badge} style={{ fontSize: "11.5px" }}>
                    {categoryDefinitions.find((c) => c.id === item.category)?.label || text.all}
                  </span>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>{text.readTime}</span>
                </div>
                <h2 style={{ fontSize: "18px", lineHeight: "1.3", margin: "6px 0 8px" }}>
                  <Link href={item.href} style={{ color: "inherit", textDecoration: "none" }}>
                    {item.title}
                  </Link>
                </h2>
                <p style={{ fontSize: "14px", lineHeight: "1.55", color: "#475569", marginBottom: 12 }}>
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="btn btn-outline-primary btn-sm"
                  style={{ marginTop: "auto", alignSelf: "flex-start", borderRadius: 20, padding: "5px 14px" }}
                >
                  {item.action} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {!isViewAll && totalPages > 1 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            marginTop: 24,
            marginBottom: 20
          }}
        >
          {/* Numbered Pagination Buttons */}
          <nav
            aria-label="Paginare articole"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 8
            }}
          >
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => handlePageChange(safePage - 1)}
              className="btn btn-outline-primary btn-sm"
              style={{
                borderRadius: 20,
                padding: "6px 14px",
                opacity: safePage <= 1 ? 0.45 : 1,
                cursor: safePage <= 1 ? "not-allowed" : "pointer"
              }}
            >
              {text.prevPage}
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pNum) => {
              const isCurrent = pNum === safePage;
              return (
                <button
                  key={pNum}
                  type="button"
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => handlePageChange(pNum)}
                  style={{
                    minWidth: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: isCurrent ? "none" : "1px solid rgba(11, 143, 216, 0.3)",
                    background: isCurrent
                      ? "linear-gradient(135deg, #0b8fd8, #075f9e)"
                      : "rgba(255, 255, 255, 0.8)",
                    color: isCurrent ? "#ffffff" : "#1e293b",
                    fontWeight: isCurrent ? 700 : 500,
                    fontSize: "14px",
                    cursor: "pointer",
                    boxShadow: isCurrent ? "0 4px 12px rgba(11, 143, 216, 0.3)" : "none",
                    transition: "all 0.2s ease"
                  }}
                >
                  {pNum}
                </button>
              );
            })}

            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => handlePageChange(safePage + 1)}
              className="btn btn-outline-primary btn-sm"
              style={{
                borderRadius: 20,
                padding: "6px 14px",
                opacity: safePage >= totalPages ? 0.45 : 1,
                cursor: safePage >= totalPages ? "not-allowed" : "pointer"
              }}
            >
              {text.nextPage}
            </button>
          </nav>

          {/* Quick Load More Button */}
          {endIdx < filtered.length && (
            <button
              type="button"
              onClick={handleLoadMore}
              className="btn btn-outline-primary"
              style={{
                borderRadius: 30,
                padding: "10px 24px",
                fontWeight: 600,
                fontSize: "14.5px",
                cursor: "pointer"
              }}
            >
              {text.loadMore} (+{Math.min(PAGE_SIZE, filtered.length - endIdx)})
            </button>
          )}

          <div style={{ fontSize: "13px", color: "#64748b" }}>
            {text.pageOf(safePage, totalPages)}
          </div>
        </div>
      )}

      {/* Semantic links for SEO crawlers if JavaScript is disabled */}
      <nav className="sr-only" aria-label="Index complet articole blog">
        {items.map((it) => (
          <Link key={it.id} href={it.href}>
            {it.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
