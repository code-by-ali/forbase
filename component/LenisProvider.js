"use client";

import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const lenisOptions = {
  smoothWheel: true,
  lerp: 0.08,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 2,
};

export default function LenisProvider({ children }) {
  const [options, setOptions] = useState(lenisOptions);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setOptions(mq.matches ? { smoothWheel: false } : lenisOptions);
    const handler = () => setOptions(mq.matches ? { smoothWheel: false } : lenisOptions);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
