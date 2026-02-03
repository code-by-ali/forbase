"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { viewportOnce, easeOut } from "@/lib/animationVariants";

/** Wraps children in a motion div that fades up when in view. */
export default function ScrollReveal({ children, className = "", delay = 0, y = 28 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
