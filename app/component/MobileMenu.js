import React from "react";
import { motion, AnimatePresence } from "framer-motion";


const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 bg-[#0A0A0A] md:hidden pt-20 px-6"
        >
          {["Home", "About", "Projects", "Careers", "Blog", "Contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-2xl border-b border-white/10 hover:text-orange-500 transition-colors"
              >
                {item}
              </motion.a>
            )
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
