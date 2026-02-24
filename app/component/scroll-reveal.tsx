"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-animate")
    );

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
          } else {
            el.classList.remove("is-visible");
          }
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    for (const node of nodes) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return null;
}
