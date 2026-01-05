"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ========================
// Reusable Components
// ========================

const AdvantageCard = ({
  image,
  number,
  title,
  description,
  stats,
  rating,
  subtitle,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl bg-white/5 p-8"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      {number && (
        <div className="text-6xl font-bold text-orange-500 mb-4">{number}</div>
      )}
      {stats && <div className="text-6xl font-bold mb-2">{stats}</div>}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
      {rating && (
        <div className="text-3xl font-bold text-orange-500 mt-4">{rating}</div>
      )}
      {subtitle && <p className="text-white/40 mt-2">{subtitle}</p>}
    </motion.div>
  );
};

const FeatureCard = ({ image, title, description, note }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-3xl bg-white/5 p-6"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-2xl mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/60 text-sm mb-2">{description}</p>
      {note && <p className="text-white/40 text-xs">{note}</p>}
    </motion.div>
  );
};

const InfoCard = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 rounded-3xl p-8"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </motion.div>
  );
};

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <div className="text-sm text-white/40 mb-4">{service.number} /</div>
        <h3 className="text-4xl font-bold mb-6">{service.title}</h3>
        <p className="text-white/60 mb-8">{service.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-orange-500 flex items-center gap-2 font-semibold"
        >
          Get started <ArrowRight size={20} />
        </motion.button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {service.images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`${service.title} ${i + 1}`}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
            className="w-full h-48 object-cover rounded-2xl"
          />
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <img
          src={project.logo}
          alt={project.title}
          className="absolute bottom-6 left-6 h-8 opacity-80"
        />
      </div>
      <div className="flex items-center gap-4 text-sm text-white/40 mb-2">
        <span>{project.category}</span>
        <span>/</span>
        <span>{project.year}</span>
      </div>
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-white/60 text-sm">{project.description}</p>
    </motion.div>
  );
};

const ProcessStep = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {index % 2 === 0 ? (
        <>
          <div>
            <div className="text-sm text-white/40 mb-4">{step.number} /</div>
            <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
            <p className="text-white/60">{step.description}</p>
          </div>
          <motion.img
            src={step.image}
            alt={step.title}
            whileHover={{ scale: 1.05 }}
            className="w-full h-64 object-cover rounded-2xl"
          />
        </>
      ) : (
        <>
          <motion.img
            src={step.image}
            alt={step.title}
            whileHover={{ scale: 1.05 }}
            className="w-full h-64 object-cover rounded-2xl"
          />
          <div>
            <div className="text-sm text-white/40 mb-4">{step.number} /</div>
            <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
            <p className="text-white/60">{step.description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
};

const PricingCard = ({ plan, isAnnual }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`relative p-8 rounded-3xl border h-full ${
        plan.popular
          ? "border-orange-500 bg-orange-500/5"
          : "border-white/10 bg-white/5"
      }`}
    >
      {plan.popular && (
        <div className="absolute top-4 right-4 bg-orange-500 text-xs px-3 py-1 rounded-full">
          Most popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-white/60 text-sm">{plan.description}</p>
      </div>

      <div className="mb-8">
        <div className="text-5xl font-bold mb-2">
          ${price}
          <span className="text-xl text-white/40">/month</span>
        </div>
        <div className="text-sm text-white/40">
          Billed {isAnnual ? "Annually" : "Monthly"}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/80">
            <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          plan.popular
            ? "bg-orange-500 text-white"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        Choose this plan
      </motion.button>
    </motion.div>
  );
};

const TestimonialCard = ({ quote, author, role, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white/5 rounded-3xl p-8"
    >
      <p className="text-lg text-white/80 mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-white/60">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamCard = ({ member }) => {
  return (
    <motion.div whileHover={{ y: -10 }} className="group">
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <motion.img
          src={member.image}
          alt={member.name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-96 object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-white/60 text-sm mb-1">{member.role}</p>
      <p className="text-white/40 text-xs">{member.location}</p>
    </motion.div>
  );
};

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  return (
    <motion.div
      initial={false}
      className="border border-white/10 rounded-2xl overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex-1">
          <div className="text-sm text-white/40 mb-2">{`00${index + 1} /`}</div>
          <div className="text-xl font-semibold">{faq.question}</div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
            <span className="text-orange-500 text-2xl">+</span>
          </div>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-white/60">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ScrollProgress = ({ percentage }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-orange-500 z-50"
      style={{ width: `${percentage}%` }}
    />
  );
};

export {
  AdvantageCard,
  FAQItem,
  FeatureCard,
  InfoCard,
  PricingCard,
  ProcessStep,
  ProjectCard,
  ServiceCard,
  TeamCard,
  TestimonialCard,
  ScrollProgress,
};
