import React from "react";
import { motion } from "framer-motion";
import Logo1 from "@/public/marquee-section-logo-1.svg";
import Logo2 from "@/public/marquee-section-logo-2.svg";
import CommonImage from "./CommonImage";

const MarqueeLogoSection = () => {
  // Placeholder logos - replace with your actual imports
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
  ];

  return (
    <section className="py-3 sm:py-4 md:py-5 overflow-hidden bg-black">
      <div className="relative">
        {/* First marquee strip */}
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 sm:gap-10 md:gap-12 items-center whitespace-nowrap"
        >
          {logos.map((logo, i) => (
            <CommonImage
              key={`logo-1-${i}`}
              src={logo.src || logo}
              alt={`Client ${i + 1}`}
              className={`${
                (i + 1) % 2 === 0 ? "h-4 sm:h-5 md:h-6" : "h-6 sm:h-8 md:h-10"
              } w-auto opacity-80 object-contain`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeLogoSection;
