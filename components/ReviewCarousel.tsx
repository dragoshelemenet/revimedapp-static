"use client";

import { useState } from "react";

const reviews = [
  {
    text: "Servicii bune, atenție și explicații clare. Recomand cu încredere.",
    name: "Pacient Revimed"
  },
  {
    text: "Consultație calmă, clară și recomandări utile pentru recuperare.",
    name: "Pacient Revimed"
  },
  {
    text: "Am primit un plan clar pentru recuperare și explicații pe înțeles.",
    name: "Pacient Revimed"
  },
  {
    text: "Personal atent, atmosferă plăcută și abordare profesionistă.",
    name: "Pacient Revimed"
  },
  {
    text: "M-au ajutat să înțeleg problema și pașii următori.",
    name: "Pacient Revimed"
  }
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));

  const active = reviews[index];

  return (
    <div className="reviewCarousel">
      <button className="reviewArrow" onClick={prev} aria-label="Review anterior">
        <img src="https://img.icons8.com/ios-filled/50/0b8fd8/chevron-left.png" alt="prev" />
      </button>

      <div className="reviewSlide">
        <p>“{active.text}”</p>
        <div className="stars">★★★★★</div>
        <b>- {active.name}</b>
        <small>{index + 1} / {reviews.length}</small>
      </div>

      <button className="reviewArrow" onClick={next} aria-label="Review următor">
        <img src="https://img.icons8.com/ios-filled/50/0b8fd8/chevron-right.png" alt="next" />
      </button>
    </div>
  );
}
