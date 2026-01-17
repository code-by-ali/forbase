import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05,
    margin: "0px 0px -100px 0px",
  });
  const [openItems, setOpenItems] = useState([]);

  const faqs = [
    {
      id: 1,
      number: "001",
      question: "What does your brand identity service include?",
      answer:
        "Our brand identity package typically includes logo design, color palette, typography, brand guidelines, and key visual assets to ensure consistency across all platforms.",
    },
    {
      id: 2,
      number: "002",
      question: "How long does a project usually take?",
      answer:
        "Timelines vary based on scope, but most projects take 2–6 weeks. We'll provide a clear timeline before we begin and keep you updated throughout the process.",
    },
    {
      id: 3,
      number: "003",
      question: "Do you work with international clients?",
      answer:
        "Yes! We work with clients all over the world. Our process is fully remote and designed to fit across different time zones, ensuring seamless collaboration.",
    },
    {
      id: 4,
      number: "004",
      question: "Do you offer ongoing support after launch?",
      answer:
        "Absolutely. We offer retainer-based design and development support to help you evolve and grow your brand over time with continuous updates and improvements.",
    },
    {
      id: 5,
      number: "005",
      question: "What platforms do you develop on?",
      answer:
        "We work with modern platforms like Webflow, Framer, Next.js, and custom solutions using React—tailored to your specific needs and requirements.",
    },
    {
      id: 6,
      number: "006",
      question: "What do you need from me to get started?",
      answer:
        "We'll need a clear project brief, any existing brand assets, and your goals. We'll guide you through the onboarding process to make it smooth and efficient.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section ref={ref} className="py-20 md:py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-16">
          {/* Left Column - FAQ Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-primary tracking-tighter">
                FAQ.
              </h2>
              <p className="text-primary/60 text-sm md:text-base font-medium tracking-tight leading-relaxed">
                Find answers to the most common questions about our services,
                process, and what it's like to work with Forbase.
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-10 lg:mb-0 mt-8 lg:mt-0">
              <p className="text-primary/60 text-sm md:text-base font-medium tracking-tight">
                Still have questions?
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-fit cursor-pointer px-6 md:px-8 bg-secondary text-white text-base md:text-lg font-medium py-3 md:py-4 flex items-center justify-center gap-2 group"
              >
                <span>Ask a question</span>

                {/* Arrow - Changes direction on hover */}
                <motion.span>
                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:rotate-45 md:w-6 md:h-6"
                  />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-0"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                index={index}
                isOpen={openItems.includes(faq.id)}
                toggleItem={toggleItem}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// FAQ Item Component
const FAQItem = ({ faq, index, isOpen, toggleItem, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      {/* Clickable Header */}
      <button
        onClick={() => toggleItem(faq.id)}
        className="outline-none w-full py-4 md:py-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 text-left hover:bg-gray-50/50 transition-colors px-2 -mx-2 rounded-lg"
      >
        {/* Left: Number and Question */}
        <div className="flex-1 flex items-start gap-4 md:gap-6">
          {/* Animated Number */}
          <motion.div
            className="relative text-base md:text-lg lg:text-xl text-primary font-medium mt-1 min-w-12 md:min-w-15"
            animate={{ x: isOpen ? 10 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* The Static Number (Doesn't move) */}
            <span className="inline-block">{faq.number}</span>

            {/* The Moving Slash (Moves front to back) */}
            <motion.span
              initial={false}
              animate={{
                x: isOpen ? -10 : 40,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-0 text-secondary font-bold"
            >
              /
            </motion.span>
          </motion.div>

          {/* Question */}
          <div className="flex-1">
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-primary mb-2">
              {faq.question}
            </h3>

            {/* Expanded Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="text-primary/60 text-sm md:text-base font-medium max-w-xl leading-relaxed mb-2">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Plus/Minus Toggle */}
        <motion.div
          className="ml-auto md:shrink-0 mt-1 self-start"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary/60 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="minus"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 270, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Minus size={18} className="text-primary md:w-5 md:h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -270, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={18} className="text-primary md:w-5 md:h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default FAQSection;
