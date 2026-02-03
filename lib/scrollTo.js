/** Scroll to element by selector (works with or without Lenis). */
export function createScrollTo(lenis) {
  return (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    if (lenis) lenis.scrollTo(top, { lerp: 0.1, duration: 1.2 });
    else window.scrollTo({ top, behavior: "smooth" });
  };
}
