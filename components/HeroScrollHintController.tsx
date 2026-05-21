"use client";

import { useEffect } from "react";

export default function HeroScrollHintController() {
  useEffect(() => {
    const update = () => {
      if (window.scrollY > 25) {
        document.body.classList.add("heroScrolled");
      } else {
        document.body.classList.remove("heroScrolled");
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
