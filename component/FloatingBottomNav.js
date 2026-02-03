"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { NAV_ITEMS, CONTACT_HREF, CONTACT_NAV } from "@/lib/config";
import { createScrollTo } from "@/lib/scrollTo";

const spring = { type: "spring", stiffness: 300, damping: 30 };
const springTight = { type: "spring", stiffness: 400, damping: 30 };

export default function FloatingBottomNav() {
  const [activeSection, setActiveSection] = useState("home");
  const lenis = useLenis();
  const scrollTo = createScrollTo(lenis);

  useEffect(() => {
    const onScroll = () => {
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
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...spring, opacity: { duration: 0.2 } }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-6 pt-2 safe-area-bottom pointer-events-none"
    >
      <div className="pointer-events-auto flex justify-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-full pl-3 pr-2 py-2.5 border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)] min-w-0 max-w-[calc(100vw-2rem)]">
          <div className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springTight, delay: i * 0.04 }}
                  aria-label={item.label}
                  className={`relative flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium transition-colors duration-200 ${isActive ? "text-white" : "text-primary/60 active:bg-black/5"}`}
                >
                  {isActive && <motion.div layoutId="mobilePillBg" className="absolute inset-0 bg-primary rounded-full" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                  <item.icon className="relative z-10 w-5 h-5 shrink-0" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden />
                </motion.button>
              );
            })}
            <div className="w-px h-5 bg-black/10 mx-1" />
            <motion.button
              onClick={() => scrollTo(CONTACT_HREF)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTight, delay: NAV_ITEMS.length * 0.04 }}
              aria-label="Contact"
              className="flex items-center justify-center w-9 h-9 bg-primary text-white rounded-full hover:bg-primary/90 active:bg-primary/80 transition-colors shadow-sm"
            >
              <CONTACT_NAV.icon className="w-5 h-5 shrink-0" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
