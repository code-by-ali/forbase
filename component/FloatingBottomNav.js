"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Wrench, Mail } from "lucide-react";

const FloatingBottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Briefcase, label: "Projects", href: "#projects" },
    { icon: Wrench, label: "Services", href: "#services" },
    { icon: Mail, label: "Contact", href: "#contact" },
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
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <div className="bg-secondary backdrop-blur-md shadow-2xl rounded-full px-6 py-3 flex items-center gap-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => handleClick(item.href)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-full hover:bg-primary/10 transition-colors group"
          >
            <item.icon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
            <span className="text-[10px] font-medium text-white group-hover:text-primary transition-colors">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingBottomNav;
