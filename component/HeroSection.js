import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroGradientBG from "@/public/hero-bg.svg";
import HeroMainImg from "@/public/hero-main.svg";
import CommonImage from "./CommonImage";

const HeroSection = ({ heroY, heroOpacity }) => {
  const heroRef = useRef(null);

  return (
    <motion.section
      ref={heroRef}
      style={{ y: heroY, opacity: heroOpacity }}
      className="relative min-h-screen flex flex-col items-center pt-20 pb-20 overflow-hidden"
    >
      <div className="absolute left-5/10 ">
        <CommonImage src={HeroGradientBG.src || HeroGradientBG} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-12 items-start w-full mt-20">
        {/* Title Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-[#0A1628]"
          >
            Forbase
            <br />
            <span className="text-[#0A1628]">Solutions for</span>
            <br />
            <span className="text-[#0A1628]">Business</span>
            <span className="text-orange-500">.</span>
          </motion.h1>
        </motion.div>

        {/* Description Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col-reverse md:flex-row md:justify-between items-end"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 mb-8 max-w-md"
          >
            SCROLL
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 mb-8 max-w-md"
          >
            Identify the key barriers that prevent your business from reaching
            its full potential. Addressing these issues can transform your
            operations.
          </motion.p>
        </motion.div>

        {/*Image with team */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <motion.div
            transition={{ duration: 0.3 }}
            className=" rounded-3xl overflow-hidden shadow-2xl"
          >
            <CommonImage
              src={HeroMainImg.src || HeroMainImg}
              alt="Team collaboration"
              className="w-full  object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
