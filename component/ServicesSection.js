import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openItems, setOpenItems] = useState([]);

  const services = [
    {
      id: 1,
      number: "001",
      title: "Brand Identity",
      description:
        "We create distinctive logos, color palettes, typography, and brand guidelines to ensure a consistent and memorable brand image.",
      details:
        "Our comprehensive brand identity service includes logo design, brand strategy, visual guidelines, and complete brand system development to establish a strong market presence.",
    },
    {
      id: 2,
      number: "002",
      title: "Web Design & Development",
      description:
        "We design and build responsive, user-friendly websites that align with your brand and deliver seamless performance.",
      details:
        "From concept to deployment, we create custom websites using modern technologies, ensuring optimal performance, accessibility, and user experience across all devices.",
    },
    {
      id: 3,
      number: "003",
      title: "UI / UX Design",
      description:
        "We craft intuitive interfaces and smooth user experiences that engage customers and enhance satisfaction.",
      details:
        "Our UI/UX process includes user research, wireframing, prototyping, and usability testing to create interfaces that users love and that drive business results.",
    },
    {
      id: 4,
      number: "004",
      title: "Design support",
      description:
        "We provide ongoing creative updates and support through flexible plans to keep your brand fresh and relevant.",
      details:
        "Continuous design support with monthly retainers, quick turnaround times, and dedicated design resources to help your brand evolve and stay competitive.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-20"
        >
          <div className="min-w-30 lg:min-w-60">
            <div className="text-sm border-l-2 border-secondary p-2 flex flex-col gap-2">
              <p className="text-secondary">003</p>
              <p className="text-primary">Services </p>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-primary mb-6">
            Services.
          </h2>
          <p className="text-primary/60 text-sm md:text-base max-w-sm">
            Explore how our design solutions shape strong brands, create
            engaging experiences, and deliver lasting impact across industries.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              index={index}
              isOpen={openItems.includes(service.id)}
              toggleItem={toggleItem}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Item Component
const ServiceItem = ({ service, index, isOpen, toggleItem, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative border-b border-primary/10 last:border-b-0 overflow-hidden"
    >
      {/* Animated Dark Border Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/60 z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered || isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />

      {/* Clickable Header */}
      <button
        onClick={() => toggleItem(service.id)}
        className="w-full py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 text-left hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg outline-none"
      >
        {/* Left: Number and Content */}
        <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
          {/* Animated Number Block */}
          <motion.div
            className="relative text-lg md:text-xl text-primary font-medium mt-1 min-w-15"
            animate={{ x: isOpen ? 10 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* The Static Number (Doesn't move) */}
            <span className="inline-block">{service.number}</span>

            {/* The Moving Slash (Moves front to back) */}
            <motion.span
              initial={false}
              animate={{
                x: isOpen ? -10 : 40, // Adjust these based on your font-size
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-0 text-secondary font-bold"
            >
              /
            </motion.span>
          </motion.div>

          {/* Title */}
          <div className="flex-1 mt-4">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium text-primary mb-2">
              {service.title}
            </h3>

            {/* Expanded Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pb-2">
                    <p className="text-primary/60 text-lg md:text-xl max-w-xl leading-relaxed mb-2">
                      {service.details}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-medium"
                    >
                      <span>Get started</span>
                      <motion.span
                        animate={{
                          rotate: isHovered ? 45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight size={24} />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Plus/Minus Toggle (Preserved Logic) */}
        <motion.div
          className="shrink-0 mt-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="ml-auto w-10 h-10 rounded-full border-2 border-primary/60 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="minus"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 270, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Minus size={20} className="text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -270, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={20} className="text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
};
export default ServicesSection;
