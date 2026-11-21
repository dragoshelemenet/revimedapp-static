"use client";

import { useState } from "react";
import PricesAccordion from "./PricesAccordion";
import CurrencyConverter from "./CurrencyConverter";
import InfoPopover from "./InfoPopover";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

export type PriceCurrency = "MDL" | "EUR" | "RON" | "USD" | "UAH";

export const PRICE_RATES: Record<PriceCurrency, { symbol: string; mdlPerUnit: number }> = {
  MDL: { symbol: "MDL", mdlPerUnit: 1 },
  EUR: { symbol: "€", mdlPerUnit: 19.4 },
  RON: { symbol: "RON", mdlPerUnit: 3.9 },
  USD: { symbol: "$", mdlPerUnit: 17.9 },
  UAH: { symbol: "UAH", mdlPerUnit: 0.43 }
};

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

const copyByLang: Record<
  Lang,
  {
    currencyLabel: string;
    noticeTitle: string;
    notice2025: string;
    minimize: string;
    expand: string;
    searchPlaceholder: string;
    noResults: string;
    converterOpen: string;
    converterClose: string;
  }
> = {
  ro: {
    currencyLabel: "Monedă",
    noticeTitle: "Notă prețuri (2025)",
    notice2025:
      "Prețurile nu au fost actualizate din 2025, deci pot exista mici modificări. Pentru confirmare exactă:",
    minimize: "Minimizează bara de monede",
    expand: "Deschide bara de monede",
    searchPlaceholder: "Caută serviciu sau procedură (ex: EEG, masaj, consultație)…",
    noResults: "Nu s-au găsit servicii pentru căutarea introdusă.",
    converterOpen: "Convertor valutar orientativ",
    converterClose: "Ascunde convertorul valutar"
  },
  en: {
    currencyLabel: "Currency",
    noticeTitle: "Price note (2025)",
    notice2025:
      "Prices have not been updated since 2025, so minor changes may apply. For exact confirmation:",
    minimize: "Minimize currency dock",
    expand: "Expand currency dock",
    searchPlaceholder: "Search service or procedure (e.g. EEG, massage, consultation)…",
    noResults: "No services found matching your search.",
    converterOpen: "Currency converter",
    converterClose: "Hide currency converter"
  },
  ru: {
    currencyLabel: "Валюта",
    noticeTitle: "Примечание о ценах (2025)",
    notice2025:
      "Цены не обновлялись с 2025 года, поэтому возможны небольшие изменения. Для точного подтверждения:",
    minimize: "Свернуть панель валют",
    expand: "Развернуть панель валют",
    searchPlaceholder: "Поиск услуги или процедуры (напр. ЭЭГ, массаж, консультация)…",
    noResults: "Услуги по вашему запросу не найдены.",
    converterOpen: "Ориентировочный конвертер валют",
    converterClose: "Скрыть конвертер валют"
  },
  ua: {
    currencyLabel: "Валюта",
    noticeTitle: "Примітка про ціни (2025)",
    notice2025:
      "Ціни не оновлювалися з 2025 року, тому можливі невеликі зміни. Для точного підтвердження:",
    minimize: "Згорнути панель валют",
    expand: "Розгорнути панель валют",
    searchPlaceholder: "Пошук послуги або процедури (напр. ЕЕГ, масаж, консультація)…",
    noResults: "Послуг за вашим запитом не знайдено.",
    converterOpen: "Орієнтовний конвертер валют",
    converterClose: "Сховати конвертер валют"
  }
};

export default function PricesInteractiveSection({
  lang = "ro",
  groups,
  prices,
  servicesCountLabel,
  converterLabels
}: {
  lang?: Lang;
  groups: string[];
  prices: Price[];
  servicesCountLabel: string;
  converterLabels?: Record<string, string>;
}) {
  const [currency, setCurrency] = useState<PriceCurrency>("MDL");
  const [minimized, setMinimized] = useState(false);
  const [converterOpen, setConverterOpen] = useState(false);
  const [query, setQuery] = useState("");
  const copy = copyByLang[lang] || copyByLang.ro;

  const trimmedQuery = query.trim().toLowerCase();
  const filteredPrices = trimmedQuery
    ? prices.filter(
        (p) =>
          p.service.toLowerCase().includes(trimmedQuery) ||
          p.category.toLowerCase().includes(trimmedQuery) ||
          (p.note || "").toLowerCase().includes(trimmedQuery)
      )
    : prices;
  const filteredGroups = trimmedQuery
    ? groups.filter((g) => filteredPrices.some((p) => p.category === g))
    : groups;

  return (
    <div className="rm-prices-wrap">
      {/* Compact Floating Liquid Glass Currency Dock Bar with Minimize (−) */}
      <div className="rm-currency-dock-slot">
        {minimized ? (
          <button
            type="button"
            className="rm-currency-dock rm-currency-dock-mini"
            aria-label={copy.expand}
            onClick={() => setMinimized(false)}
          >
            <span className="rm-currency-mini-val">{currency}</span>
            <span className="rm-currency-dock-icon" aria-hidden="true">+</span>
          </button>
        ) : (
          <div className="rm-currency-dock" role="toolbar" aria-label={copy.currencyLabel}>
            <div className="rm-currency-pills" role="group" aria-label={copy.currencyLabel}>
              {(Object.keys(PRICE_RATES) as PriceCurrency[]).map((cur) => (
                <button
                  key={cur}
                  type="button"
                  className={`rm-currency-pill ${currency === cur ? "is-active" : ""}`}
                  aria-pressed={currency === cur}
                  onClick={() => setCurrency(cur)}
                >
                  {cur}
                </button>
              ))}
            </div>

            <span className="rm-dock-divider" aria-hidden="true" />

            <InfoPopover title={copy.noticeTitle} ariaLabel={copy.noticeTitle}>
              <p>
                {copy.notice2025}{" "}
                <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a> ·{" "}
                <a href={`tel:${site.phone2.replaceAll(" ", "")}`}>{site.phone2}</a>
              </p>
            </InfoPopover>

            <button
              type="button"
              className="rm-dock-min-btn"
              aria-label={copy.minimize}
              title={copy.minimize}
              onClick={() => setMinimized(true)}
            >
              −
            </button>
          </div>
        )}
      </div>

      {/* Instant Liquid Glass Service Search */}
      <div className="rm-price-search-wrap">
        <svg className="rm-price-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={copy.searchPlaceholder}
          aria-label={copy.searchPlaceholder}
          className="rm-price-search-input"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            className="rm-price-search-clear"
            aria-label="Clear search"
            onClick={() => setQuery("")}
          >
            ✕
          </button>
        )}
      </div>

      {/* Main Prices Accordion */}
      {filteredGroups.length > 0 ? (
        <PricesAccordion
          groups={filteredGroups}
          prices={filteredPrices}
          servicesCountLabel={servicesCountLabel}
          currency={currency}
        />
      ) : (
        <p className="rm-price-empty" role="status" aria-live="polite">
          {copy.noResults}
        </p>
      )}

      {/* Subtle 1-line 2025 disclaimer + Bottom Liquid Glass Currency Converter Dropdown */}
      <p className="rm-price-footnote">
        {copy.notice2025}{" "}
        <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a> ·{" "}
        <a href={`tel:${site.phone2.replaceAll(" ", "")}`}>{site.phone2}</a>
      </p>

      <div className="rm-converter-dropdown">
        <button
          type="button"
          className="rm-more-btn"
          aria-expanded={converterOpen}
          onClick={() => setConverterOpen((v) => !v)}
        >
          <span>{converterOpen ? copy.converterClose : copy.converterOpen}</span>
          <span aria-hidden="true">{converterOpen ? "▴" : "▾"}</span>
        </button>

        {converterOpen && (
          <div className="rm-converter-panel">
            <CurrencyConverter labels={converterLabels} />
          </div>
        )}
      </div>
    </div>
  );
}
