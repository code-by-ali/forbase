"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { NAV_ITEMS, CONTACT_HREF, CONTACT_NAV, HERO_SCROLL_THRESHOLD } from "@/lib/config";
import { createScrollTo } from "@/lib/scrollTo";

const spring = { type: "spring", stiffness: 300, damping: 30 };
const springTight = { type: "spring", stiffness: 400, damping: 30 };

function PillTooltip({ show, label }) {
  if (!show) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.6, y: 4 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 rounded-lg bg-primary text-white text-xs font-medium whitespace-nowrap shadow-lg pointer-events-none z-20"
    >
      {label}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary" aria-hidden />
    </motion.div>
  );
}

export default function Navigation() {
  const [showPillNav, setShowPillNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pillHoveredLabel, setPillHoveredLabel] = useState(null);
  const lenis = useLenis();
  const scrollTo = createScrollTo(lenis);

  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        setShowPillNav(window.scrollY > HERO_SCROLL_THRESHOLD);
        const ids = NAV_ITEMS.map((i) => i.href.slice(1));
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el) {
            const { top, bottom } = el.getBoundingClientRect();
            if (top <= 150 && bottom >= 150) {
              setActiveSection(id);
              break;
            }
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showPillNav && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ ...spring, opacity: { duration: 0.2 } }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block px-4"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-full pl-4 pr-2 py-2.5 border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-1">
                {NAV_ITEMS.map((item, i) => {
                  const id = item.href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <motion.button
                      key={item.label}
                      onClick={() => scrollTo(item.href)}
                      onMouseEnter={() => setPillHoveredLabel(item.label)}
                      onMouseLeave={() => setPillHoveredLabel(null)}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...springTight, delay: i * 0.04 }}
                      aria-label={item.label}
                      className={`relative flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-colors duration-200 ${isActive ? "text-white" : "text-primary/60 hover:text-primary hover:bg-black/5"}`}
                    >
                      <AnimatePresence>
                        <PillTooltip show={pillHoveredLabel === item.label} label={item.label} />
                      </AnimatePresence>
                      {isActive && <motion.div layoutId="activePill" className="absolute inset-0 bg-primary rounded-full" transition={spring} />}
                      <item.icon className="relative z-10 w-[22px] h-[22px] shrink-0" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden />
                    </motion.button>
                  );
                })}
                <div className="w-px h-5 bg-black/10 mx-1.5" />
                <motion.button
                  onClick={() => scrollTo(CONTACT_HREF)}
                  onMouseEnter={() => setPillHoveredLabel("Contact")}
                  onMouseLeave={() => setPillHoveredLabel(null)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springTight, delay: NAV_ITEMS.length * 0.04 }}
                  aria-label="Contact"
                  className="relative flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <AnimatePresence>
                    <PillTooltip show={pillHoveredLabel === "Contact"} label="Contact" />
                  </AnimatePresence>
                  <CONTACT_NAV.icon className="relative z-10 w-[22px] h-[22px] shrink-0" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
