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
          transition={{ type: "spring", damping: 25 }}
          className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
        >
          {["Projects", "Services", "dafs", "BLOG."].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="block py-4 text-2xl font-medium border-b border-gray-200 text-secondary transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full mt-8 px-6 py-3 bg-secondary text-white rounded-full text-lg font-medium"
          >
            Get Tech →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
