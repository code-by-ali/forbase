"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, activeSection = "home" }) => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
        >
          <div className="flex flex-col gap-1">
            {menuItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
                className={`text-left py-4 text-2xl font-medium border-b border-gray-200 transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-secondary"
                    : "text-primary hover:text-secondary"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleNavClick("#contact")}
              className="w-full mt-8 px-6 py-4 bg-secondary text-white rounded-full text-lg font-medium flex items-center justify-center gap-2 group"
            >
              <span>Get in Touch</span>
              <motion.span
                className="transition-transform group-hover:rotate-45"
              >
                <ArrowUpRight size={20} />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
