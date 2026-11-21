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
  const copy = copyByLang[lang] || copyByLang.ro;

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

      {/* Main Prices Accordion */}
      <PricesAccordion
        groups={groups}
        prices={prices}
        servicesCountLabel={servicesCountLabel}
        currency={currency}
      />

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
