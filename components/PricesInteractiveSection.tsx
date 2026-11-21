"use client";

import { useState } from "react";
import PricesAccordion from "./PricesAccordion";
import CurrencyConverter from "./CurrencyConverter";
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
    converterOpen: string;
    converterClose: string;
  }
> = {
  ro: {
    currencyLabel: "Monedă afișare prețuri:",
    noticeTitle: "Notă:",
    notice2025:
      "Prețurile nu au fost actualizate din 2025, deci pot exista mici modificări. Pentru confirmare exactă:",
    converterOpen: "Convertor valutar orientativ",
    converterClose: "Ascunde convertorul valutar"
  },
  en: {
    currencyLabel: "Display currency:",
    noticeTitle: "Note:",
    notice2025:
      "Prices have not been updated since 2025, so minor changes may apply. For exact confirmation:",
    converterOpen: "Currency converter",
    converterClose: "Hide currency converter"
  },
  ru: {
    currencyLabel: "Валюта отображения цен:",
    noticeTitle: "Примечание:",
    notice2025:
      "Цены не обновлялись с 2025 года, поэтому возможны небольшие изменения. Для точного подтверждения:",
    converterOpen: "Ориентировочный конвертер валют",
    converterClose: "Скрыть конвертер валют"
  },
  ua: {
    currencyLabel: "Валюта відображення цін:",
    noticeTitle: "Примітка:",
    notice2025:
      "Ціни не оновлювалися з 2025 року, тому можливі невеликі зміни. Для точного підтвердження:",
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
  const [converterOpen, setConverterOpen] = useState(false);
  const copy = copyByLang[lang] || copyByLang.ro;

  return (
    <div className="rm-prices-wrap">
      {/* Currency Switcher + 2025 Notice */}
      <div className="rm-prices-toolbar" data-glass-card>
        <div className="rm-currency-switcher">
          <span className="rm-currency-label">{copy.currencyLabel}</span>
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
        </div>

        <div className="rm-price-notice-2025">
          <b>{copy.noticeTitle}</b> {copy.notice2025}{" "}
          <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a> ·{" "}
          <a href={`tel:${site.phone2.replaceAll(" ", "")}`}>{site.phone2}</a>
        </div>
      </div>

      {/* Main Prices Accordion */}
      <PricesAccordion
        groups={groups}
        prices={prices}
        servicesCountLabel={servicesCountLabel}
        currency={currency}
      />

      {/* Currency Converter at the bottom inside a Liquid Glass Dropdown */}
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
