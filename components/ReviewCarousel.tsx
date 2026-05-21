"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";

type Review = {
  name: string;
  rating: number;
  text: Record<Lang, string>;
};

const reviews: Review[] = [
  {
    name: "DR R",
    rating: 5,
    text: {
      ro: "După mult timp de umblat pe la medici, s-a depistat, în sfârșit, problema și am primit un tratament cu rezultat pozitiv. Mulțumesc mult, domnule Igor!",
      en: "After a long time visiting different doctors, the problem was finally identified and I received treatment with a positive result. Thank you very much, Mr. Igor!",
      ru: "После долгих обращений к разным врачам проблему наконец выявили, и я получил лечение с положительным результатом. Большое спасибо, господин Игорь!",
      ua: "Після тривалих звернень до різних лікарів проблему нарешті виявили, і я отримав лікування з позитивним результатом. Щиро дякую, пане Ігорю!"
    }
  },
  {
    name: "Gabriela Dumitrescu",
    rating: 5,
    text: {
      ro: "Tratamentul oferit de Revimed PLUS a fost exact ceea ce aveam nevoie. Mulțumesc din suflet!",
      en: "The treatment provided by Revimed PLUS was exactly what I needed. Thank you from the heart!",
      ru: "Лечение в Revimed PLUS было именно тем, что мне было нужно. Большое спасибо!",
      ua: "Лікування в Revimed PLUS було саме тим, що мені було потрібно. Щиро дякую!"
    }
  }
];

const labels: Record<Lang, { prev: string; next: string; patient: string }> = {
  ro: { prev: "Review anterior", next: "Review următor", patient: "Pacient" },
  en: { prev: "Previous review", next: "Next review", patient: "Patient" },
  ru: { prev: "Предыдущий отзыв", next: "Следующий отзыв", patient: "Пациент" },
  ua: { prev: "Попередній відгук", next: "Наступний відгук", patient: "Пацієнт" }
};

export default function ReviewCarousel({ lang = "ro" }: { lang?: Lang }) {
  const [index, setIndex] = useState(0);
  const safeLang = lang || "ro";
  const active = reviews[index];
  const label = labels[safeLang] || labels.ro;

  const prev = () => setIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));

  return (
    <div className="reviewCarousel">
      <button className="reviewArrow" onClick={prev} aria-label={label.prev}>
        ‹
      </button>

      <div className="reviewSlide">
        <p>“{active.text[safeLang] || active.text.ro}”</p>
        <div className="stars">{"★".repeat(active.rating)}</div>
        <b>- {active.name || label.patient}</b>
        <small>{index + 1} / {reviews.length}</small>
      </div>

      <button className="reviewArrow" onClick={next} aria-label={label.next}>
        ›
      </button>
    </div>
  );
}
