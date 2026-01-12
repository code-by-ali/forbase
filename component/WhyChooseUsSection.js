import React, { useState, useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  ClockFading,
  Layers,
  Rocket,
  Star,
} from "lucide-react";
import CardImg1 from "@/public/why-us-card-img-1.svg";
import CardImg2 from "@/public/why-us-card-img-2.svg";
import CardImg3 from "@/public/why-us-card-img-3.svg";
import CardImg4 from "@/public/why-us-card-img-4.svg";
import CardLogo1 from "@/public/why-us-card-logo-1.svg";
import CardLogo2 from "@/public/why-us-card-logo-2.svg";
import CardLogo3 from "@/public/why-us-card-logo-3.svg";
import CardLogo4 from "@/public/why-us-card-logo-4.svg";
import SatisfactionCardImg from "@/public/satisfaction-card-img.svg";
import FlexibleCardImg from "@/public/flexible-card-img.svg";
import L1Icon from "@/public/l-shape-icon-1.svg";
import L2Icon from "@/public/l-shape-icon-2.svg";
import L3Icon from "@/public/l-shape-icon-3.svg";
import L4Icon from "@/public/l-shape-icon-4.svg";
import MessageToolbarImage from "@/public/message-toolbar-img.svg";
import CommonImage from "./CommonImage";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-6 bg-white mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-16">
          {/* Box 1 - Experience with scrolling cards */}
          <ExperienceBox />

          {/* Box 2 - Satisfaction Rate */}
          <SatisfactionBox />

          {/* Box 3 - Flexible Pricing */}
          <FlexiblePricingBox />

          {/* Box 4 - Fast Turnaround */}
          <FastTurnaroundBox />

          {/* Box 6 - Real-time Support Chat */}
          <RealtimeSupportBox />

          {/* Box 5 - Scalable Design */}
          <ScalableDesignBox />
        </div>
      </div>
    </section>
  );
};

// Section Header Component
const SectionHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-start gap-8 px-0 md:px-8"
    >
      <div className="min-w-30 lg:min-w-80">
        <div className="text-sm border-l-2 border-secondary p-2 flex flex-col gap-2">
          <p className="text-secondary">001</p>
          <p className="text-primary">Why choose us </p>
        </div>
      </div>
      <div className="max-w-3xl">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-primary mb-6">
          Our <span className="text-primary/40">advantage.</span>
        </h2>
        <p className="text-primary/60 text-base">
          Discover how our tailored design solutions, strategic thinking, and
          proven expertise can elevate your brand and set you apart.
        </p>
      </div>
    </motion.div>
  );
};

// Box 1 - Experience with scrolling cards
const ExperienceBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      bgImage: CardImg2,
      clientLogo: CardLogo2,
    },
    {
      bgImage: CardImg3,
      clientLogo: CardLogo4,
    },
    {
      bgImage: CardImg2,
      clientLogo: CardLogo2,
    },
    {
      bgImage: CardImg3,
      clientLogo: CardLogo4,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-8 lg:col-span-2"
    >
      <h3 className="text-2xl md:text-3xl font-medium text-primary mb-2">
        8 years of experience
      </h3>
      <p className="text-primary/60 font-medium mb-6">
        Hundreds of successful projects across industries, built on{" "}
        <span className="font-semibold text-primary">
          8 years of refined design and development practices
        </span>
        .
      </p>

      {/* Scrolling Cards Container */}
      <div className="relative overflow-hidden h-32 rounded-2xl">
        <motion.div
          animate={{ x: [0, -400] }}
          whileHover={{
            x: -300,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 absolute"
        >
          {[...projects, ...projects, ...projects].map((project, i) => (
            <motion.div
              key={i}
              className="relative w-48 h-32 rounded-xl overflow-hidden flex-shrink-0"
              whileHover={{ filter: "grayscale(100%)" }}
              transition={{ duration: 0.3 }}
            >
              <CommonImage
                src={project.bgImage.src || project.bgImage}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-[25%] left-[15%] p-4">
                <CommonImage
                  src={project.clientLogo.src || project.clientLogo}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Box 2 - Satisfaction Rate with counting animation
const SatisfactionBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 95;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-linear-to-br from-[#e7b1a9] to-[#F44930] p-8 text-white relative overflow-hidden"
    >
      <CommonImage
        src={SatisfactionCardImg.src || SatisfactionCardImg}
        alt="Satisfied client"
        className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay"
      />
      <div className="flex flex-col items-center z-10">
        <p className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
          Satisfaction rate
        </p>
        <motion.div
          className="text-7xl tracking-tighter font-bold mb-2"
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {count}%
        </motion.div>
        <p className="text-base tracking-tight mb-8">
          from 95+ client projects
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-end gap-1 mb-2">
        <div className="flex items-center gap-2">
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <Star className="fill-white text-white w-3 h-3" />
              </motion.div>
            ))}
          </>
          <span className="ml-2 text-sm text-primary font-medium">4/5</span>
        </div>

        <p className="text-xs">
          Trusted by <span className="font-semibold">brands worldwide.</span>
        </p>
      </div>
    </motion.div>
  );
};

// Box 3 - Flexible Pricing with zoom and fade
const FlexiblePricingBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white overflow-hidden lg:row-span-2 relative"
    >
      <motion.img
        src={FlexibleCardImg.src || FlexibleCardImg}
        alt="Flexible pricing"
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent flex flex-col justify-between p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="text-white text-sm font-medium tracking-tight flex items-center justify-start">
          <span className="text-lg text-secondary">*</span> Plans start from
          $799 / month.
        </div>

        <div className="flex grow flex-col justify-center items-center ">
          <div className="bg-secondary text-white text-5xl md:text-6xl font-bold inline-block mb-4 w-fit">
            Flexible
          </div>
          <h3 className="text-5xl md:text-6xl font-bold inline-block w-fit text-white mb-2">
            pricing
          </h3>
          <p className="text-white/90 text-lg md:text-xl mb-4">Pricing</p>
        </div>

        <div className="text-white text-base md:text-lg font-medium tracking-tight flex items-center justify-end gap-2">
          Get Started <ArrowUpRight />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Box 4 - Fast Turnaround
const FastTurnaroundBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 flex flex-col items-center justify-center gap-2 border border-primary/10"
    >
      <div className="flex flex-col items-center justify-center gap-2 mt-auto">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <ClockFading className="text-secondary" size={28} />
        </motion.div>
        <motion.h3
          className="text-2xl md:text-3xl font-medium text-primary mb-2"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Fast turnaround
        </motion.h3>
        <motion.p
          className="text-primary/60 text-lg md:text-xl font-medium tracking-tight text-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects launched in as little as 2 weeks.
        </motion.p>
      </div>

      <div className="w-full mt-auto flex items-center justify-between">
        <CommonImage src={L1Icon.src || L1Icon} />
        <CommonImage src={L2Icon.src || L2Icon} />
      </div>
    </motion.div>
  );
};

// Box 5 - Scalable Design
const ScalableDesignBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 flex flex-col items-center justify-center gap-2 border border-t-0 border-primary/10 order-1 lg:order-none"
    >
      <div className="w-full mb-auto flex items-center justify-between">
        <CommonImage src={L3Icon.src || L3Icon} />
        <CommonImage src={L4Icon.src || L4Icon} />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mb-auto">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <Rocket className="text-secondary" size={28} />
        </motion.div>
        <motion.h3
          className="text-2xl md:text-3xl font-medium text-primary mb-2"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Scalable design
        </motion.h3>
        <motion.p
          className="text-primary/60 text-lg md:text-xl font-medium tracking-tight text-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Design systems that scale with your product.
        </motion.p>
      </div>
    </motion.div>
  );
};

// Box 6 - Real-time Support Chat
const RealtimeSupportBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const messages = [
    { text: "Can we update the layout before launch?", type: "user", delay: 0 },
    { text: "Of course!", type: "support", delay: 0.3 },
    {
      text: "We'll make the changes and send a quick preview",
      type: "support",
      delay: 0.5,
    },
    {
      text: "Just updated. You should be able to see the new version on your side now.",
      type: "support",
      delay: 0.7,
    },
    {
      text: "Amazing, thank you! You guys are fast 🙌",
      type: "user",
      delay: 0.9,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-8 lg:row-span-2 flex flex-col justify-between order-2 lg:order-none"
    >
      <div>
        <h3 className="text-3xl md:text-4xl font-medium text-primary mb-2">
          Real-time support
        </h3>
        <p className="text-lg md:text-xl mb-6 text-primary/60 font-medium">
          Our team is always just a message away —{" "}
          <span className="font-semibold text-primary">
            real humans, real answers.
          </span>
        </p>
      </div>

      <div className="space-y-2  overflow-hidden">
        {messages.map((message, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: message.delay }}
            className={`flex ${
              message.type === "support" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm font-medium ${
                message.type === "user"
                  ? "bg-[#2563EB] text-white rounded-br-sm"
                  : "bg-gray-100 text-primary rounded-bl-sm"
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <CommonImage src={MessageToolbarImage.src || MessageToolbarImage} />
      </div>
    </motion.div>
  );
};

export default WhyChooseUsSection;
