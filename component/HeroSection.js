"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import HeroGradientBG from "@/public/hero-bg.svg";
import HeroMainImg from "@/public/hero-main.svg";
import CommonImage from "./CommonImage";
import { easeOut } from "@/lib/animationVariants";

const t = (delay, y = 24) => ({ initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: easeOut } });

export default function HeroSection() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative bg-background min-h-screen flex flex-col overflow-hidden pt-0"
    >
      {/* Orange gradient - right half, from very top */}
      <div className="absolute top-0 left-1/2 right-0 bottom-0 w-1/2 min-h-screen pointer-events-none overflow-hidden" aria-hidden>
        <CommonImage
          src={HeroGradientBG.src || HeroGradientBG}
          alt=""
          className="h-full w-full min-h-full min-w-full"
          style={{ objectFit: "cover", objectPosition: "left center" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col min-h-screen pt-6 pb-8 lg:pt-8 lg:pb-10">
        <div className="flex-1 flex flex-col gap-4 lg:gap-12 items-start justify-center mt-12 lg:mt-16">
          <motion.div {...t(0.15)}>
            <motion.h1 {...t(0.3)} className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-primary">
              Forbase<br /><span className="text-primary">Solutions for</span><br /><span className="text-primary">Business</span><span className="text-secondary">.</span>
            </motion.h1>
          </motion.div>

          <motion.div {...t(0.2)} className="w-full flex flex-col-reverse md:flex-row md:justify-between items-end gap-6">
            <motion.div {...t(0.5)} className="flex items-center gap-3 mb-8 md:mb-0">
              <span className="w-0.5 h-6 bg-secondary shrink-0" aria-hidden />
              <p className="text-lg text-primary/60 font-medium">SCROLL</p>
            </motion.div>
            <motion.p {...t(0.5)} className="text-lg text-primary mb-8 max-w-md leading-relaxed">
              Identify the key barriers that prevent your business from reaching its full potential. Addressing these issues can transform your operations.
            </motion.p>
          </motion.div>
        </div>

        <motion.div {...t(0.4, 32)}>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <CommonImage src={HeroMainImg.src || HeroMainImg} alt="Team collaboration" className="w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
