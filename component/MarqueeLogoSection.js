import React from "react";
import { motion } from "framer-motion";

import Logo1 from "@/public/marquee-section-logo-1.svg";
import Logo2 from "@/public/marquee-section-logo-2.svg";
import CommonImage from "./CommonImage";

const MarqueeLogoSection = () => {
  const logos = [
    Logo1,
    Logo2,
    Logo1,
    Logo2,
    Logo1,
    Logo2,
    Logo1,
    Logo2,
    Logo1,
    Logo2,
    Logo1,
    Logo2,
    Logo1,
    Logo2,
    Logo1,
    Logo2,
    Logo1,
    Logo2,
  ];

  return (
    <section className="py-4 overflow-hidden bg-black">
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center whitespace-nowrap"
        >
          {logos.map((logo, i) => (
            <CommonImage
              key={`${i}`}
              src={logo.src || logo}
              alt={`Client ${i}`}
              className={`${(i + 1) % 2 == 0 ? "h-6" : "h-10"} opacity-80`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeLogoSection;
