import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FAQItem } from "./CommonComponents";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What does your brand identity service include?",
      answer:
        "Our brand identity package typically includes logo design, color palette, typography, brand guidelines, and key visual assets to ensure consistency across all platforms.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "Timelines vary based on scope, but most projects take 2–6 weeks. We'll provide a clear timeline before we begin and keep you updated throughout.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! We work with clients all over the world. Our process is fully remote and designed to fit across different time zones.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Absolutely. We offer retainer-based design and development support to help you evolve and grow your brand over time.",
    },
    {
      question: "What platforms do you develop on?",
      answer:
        "We work with modern platforms like Webflow, Framer, and custom solutions using React or Next.js—tailored to your needs.",
    },
    {
      question: "What do you need from me to get started?",
      answer:
        "We'll need a clear project brief, any existing assets, and your goals. We'll guide you through the onboarding process to make it smooth and efficient.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-16">FAQ.</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold"
          >
            Ask a question
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
