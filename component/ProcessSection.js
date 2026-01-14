import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProcessCardIcon1 from "@/public/process-card-img-1.svg";
import ProcessCardIcon2 from "@/public/process-card-img-2.svg";
import CommonImage from "./CommonImage";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive cards logic
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const processes = [
    {
      id: 1,
      number: "001",
      title: "Discovery",
      description:
        "We start by learning about your business, goals, and challenges to align on vision and direction.",
      icon: ProcessCardIcon1,
    },
    {
      id: 2,
      number: "002",
      title: "Planning",
      description:
        "We start by learning about your business, goals, and challenges to align on vision and direction.",
      icon: ProcessCardIcon2,
    },
    {
      id: 3,
      number: "003",
      title: "Implementation",
      description:
        "We start by learning about your business, goals, and challenges to align on vision and direction.",
      icon: ProcessCardIcon1,
    },
    {
      id: 4,
      number: "004",
      title: "Delivery",
      description:
        "We start by learning about your business, goals, and challenges to align on vision and direction.",
      icon: ProcessCardIcon2,
    },
  ];

  // Logic: Max index is total length minus how many are visible
  const maxIndex = Math.max(0, processes.length - cardsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20"
        >
          <div className="min-w-60">
            <div className="text-sm border-l-2 border-secondary p-2 flex flex-col gap-2">
              <p className="text-secondary">004</p>
              <p className="text-primary font-medium">Process</p>
            </div>
          </div>
          <h2 className="text-6xl md:text-8xl font-medium text-primary mb-6">
            Process.
          </h2>
          <p className="text-primary/60 text-sm md:text-base max-w-sm">
            See how our proven process transforms your brand with custom design
            solutions that deliver measurable impact from day one.
          </p>
        </motion.div>

        {/* Cards Slider Container */}
        <div className="relative">
          <div className="overflow-visible">
            {" "}
            {/* Changed to visible so shadows/borders don't clip */}
            <motion.div
              className="flex gap-6"
              animate={{
                // Move by exactly (100% / visibleCount) per index, accounting for the 24px (gap-6)
                x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${
                  currentIndex * 24
                }px)`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {processes.map((process, index) => (
                <ProcessCard
                  key={process.id}
                  process={process}
                  index={index}
                  isInView={isInView}
                  cardsToShow={cardsToShow}
                />
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-end gap-4 mt-12"
          >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? "border-primary/30 text-primary/30 cursor-not-allowed"
                  : "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
              }`}
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                currentIndex >= maxIndex
                  ? "border-primary/30 text-primary/30 cursor-not-allowed"
                  : "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
              }`}
            >
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessCard = ({ process, index, isInView, cardsToShow }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // Fixed width logic: subtract gap from total percentage
      className="shrink-0 bg-white p-8 flex flex-col min-h-120"
      style={{
        width: `calc(${100 / cardsToShow}% - ${
          (24 * (cardsToShow - 1)) / cardsToShow
        }px)`,
      }}
    >
      <div className="mb-8 h-16 w-16">
        <CommonImage
          src={process.icon.src || process.icon}
          className="object-contain"
        />
      </div>

      <div className="text-xl md:text-2xl text-primary font-bold mb-6">
        {process.number} <span className="text-secondary">/</span>
      </div>

      <motion.h3
        className="text-2xl md:text-4xl font-bold text-[#0A1628] mb-4 wrap-break-words"
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {process.title}
      </motion.h3>

      <motion.p
        className="text-primary/60 font-medium leading-relaxed text-base md:text-lg"
        animate={{ opacity: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {process.description}
      </motion.p>
    </motion.div>
  );
};

export default ProcessSection;
