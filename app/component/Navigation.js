import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer"
        >
          Fortex<span className="text-orange-500">®</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Projects", "Careers", "Blog", "Contact"].map(
            (item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: "#f97316" }}
                className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            )
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
