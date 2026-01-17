"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Folder, Phone, NotebookPen } from "lucide-react";

const FloatingBottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Folder, label: "Projects", href: "#projects" },
    { icon: NotebookPen, label: "Services", href: "#services" },
    { icon: Phone, label: "Contact", href: "#contact" },
  ];

  const handleClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-[#FBF8F3] backdrop-blur-sm shadow-2xl px-4 py-3 flex items-center justify-around">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => handleClick(item.href)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-full group"
          >
            <item.icon className="w-5 h-5 text-secondary" />
            <span className="text-[10px] font-medium text-secondary">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingBottomNav;
