"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteTransition() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("route-ready");
    root.classList.add("route-changing");

    const timer = window.setTimeout(() => {
      root.classList.remove("route-changing");
      root.classList.add("route-ready");
    }, 60);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
