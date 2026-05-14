"use client";

import { useMemo, useState } from "react";

const currencies = {
  MDL: { label: "MDL", rate: 1 },
  EUR: { label: "EUR", rate: 19.4 },
  USD: { label: "USD", rate: 17.9 },
  RON: { label: "RON", rate: 3.9 }
};

type Currency = keyof typeof currencies;

export default function CurrencyConverter({
  labels
}: {
  labels?: {
    converterTitle?: string;
    converterText?: string;
    amount?: string;
    from?: string;
    to?: string;
    result?: string;
  };
}) {
  const [amount, setAmount] = useState("500");
  const [from, setFrom] = useState<Currency>("MDL");
  const [to, setTo] = useState<Currency>("EUR");

  const result = useMemo(() => {
    const value = Number(amount.replace(",", "."));
    if (!Number.isFinite(value)) return "0.00";
    const mdl = value * currencies[from].rate;
    const converted = mdl / currencies[to].rate;
    return converted.toFixed(2);
  }, [amount, from, to]);

  return (
    <section className="currencyBox">
      <div>
        <span className="contactBadge">Calculator</span>
        <h2>{labels?.converterTitle || "Convertor valutar orientativ"}</h2>
        <p>{labels?.converterText || "Pentru comoditate, poți aproxima rapid prețurile."}</p>
      </div>

      <div className="currencyGrid">
        <label>
          {labels?.amount || "Sumă"}
          <input value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" />
        </label>

        <label>
          {labels?.from || "Din"}
          <select value={from} onChange={(e) => setFrom(e.target.value as Currency)}>
            {Object.keys(currencies).map((key) => <option key={key}>{key}</option>)}
          </select>
        </label>

        <label>
          {labels?.to || "În"}
          <select value={to} onChange={(e) => setTo(e.target.value as Currency)}>
            {Object.keys(currencies).map((key) => <option key={key}>{key}</option>)}
          </select>
        </label>

        <div className="currencyResult">
          <small>{labels?.result || "Rezultat"}</small>
          <strong>{result} {to}</strong>
        </div>
      </div>
    </section>
  );
}
