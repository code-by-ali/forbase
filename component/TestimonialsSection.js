import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Emma Collins",
      role: "CEO, Powersurge",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      text: "Forbase transformed our brand identity and website beyond what we imagined. Their team was professional, creative, and delivered on time. Our online presence has never looked better.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Brooks",
      role: "CTO, Warpspeed",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      text: "Forbase revamped our online customers. Since launch, engagement and user experience have greatly improved.",
      rating: 5,
      stats: [
        { value: 35, label: "Average order value", suffix: "%", prefix: "+" },
        { value: 45, label: "User engagement", suffix: "%", prefix: "+" },
      ],
    },
    {
      id: 3,
      name: "Emily Harris",
      role: "Founder & CEO, Boltshift",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      text: "Forbase transformed our brand identity and website beyond what we imagined. Their team was professional, creative, and delivered on time. Our online presence has never looked better.",
      rating: 5,
    },
    {
      id: 4,
      name: "Liam Torres",
      role: "COO, CloudWatch",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      text: "Our clean, intuitive website now showcases our SaaS platform perfectly, leading to increased sign-ups and higher customer satisfaction.",
      rating: 5,
      stats: [
        { value: 54, label: "Sign-up rate", suffix: "%", prefix: "+" },
        { value: 25, label: "Customer retention", suffix: "", prefix: "+" },
      ],
    },
  ];

  const clients = [
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          <div className="min-w-60">
            <div className="text-sm border-l-2 border-secondary p-2 flex flex-col gap-2">
              <p className="text-secondary">005</p>
              <p className="text-primary font-medium">Testimonials</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-medium text-primary mb-6">
              <span className="text-primary">Client </span>
              <span className="text-primary/10">stories.</span>
            </h2>
            <p className="text-primary/60 text-sm md:text-base max-w-2xl">
              Hear directly from our clients about their experience with
              Forbase—from seamless collaboration to impactful design solutions
              that elevate their brands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-end items-end"
          >
            {/* Stacked Avatars */}
            <div className="flex items-center mb-4">
              <div className="flex -space-x-3">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative"
                  >
                    <img
                      src={client.avatar}
                      alt={`Client ${index + 1}`}
                      className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm text-primary/60 font-medium text-right"
            >
              We've successfully completed 95+ projects.
            </motion.p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-4">
          {testimonials.map((testimonial, index) =>
            (index + 1) % 2 === 0 ? (
              <TestimonialCard2
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                isInView={isInView}
              />
            ) : (
              <TestimonialCard1
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                isInView={isInView}
              />
            )
          )}
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4">
          <StatCard
            value={4.6}
            suffix="s"
            label="Average page load time across all client websites we deployed"
            isInView={isInView}
            delay={0}
            decimals={1}
          />
          <StatCard
            value={18}
            suffix="+"
            label="Countries where brands use websites built by Forbase"
            isInView={isInView}
            delay={0.1}
          />
          <StatCard
            value={72}
            suffix="%"
            label="Average improvement in conversion rates after a Forbase-led redesign"
            isInView={isInView}
            delay={0.2}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="h-full p-6 text-primary bg-white flex flex-col gap-2">
              <h3 className="text-3xl md:text-4xl text-primary font-normal">
                FORBASE<sup>®</sup>
              </h3>
              <p className="text-sm md:text-base font-medium text-primary/60">
                If you've enjoyed working with us, we'd love to hear from you —
                leave a review and help others discover Forbase.
              </p>
            </div>
            <LeaveReviewButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index, isInView }) => {
  const hasStats = testimonial.stats && testimonial.stats.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-3xl p-8 ${
        hasStats ? testimonial.color : "bg-[#F5F5F0]"
      }`}
    >
      {/* Quote Icon */}
      <div
        className={`text-4xl mb-4 ${
          hasStats ? "text-white/30" : "text-orange-500/30"
        }`}
      >
        "
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={hasStats ? "text-white" : "text-orange-500"}
          >
            ★
          </motion.span>
        ))}
      </div>

      {/* Testimonial Text */}
      <p
        className={`mb-6 leading-relaxed ${
          hasStats ? "text-white" : "text-[#0A1628]"
        }`}
      >
        {testimonial.text}
      </p>

      {/* Stats (if available) */}
      {hasStats && (
        <div className="mb-6 space-y-4">
          {testimonial.stats.map((stat, i) => (
            <StatItem
              key={i}
              stat={stat}
              isInView={isInView}
              delay={0.8 + i * 0.2}
            />
          ))}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div
            className={`font-semibold ${
              hasStats ? "text-white" : "text-[#0A1628]"
            }`}
          >
            {testimonial.name}
          </div>
          <div
            className={`text-sm ${
              hasStats ? "text-white/80" : "text-gray-600"
            }`}
          >
            {testimonial.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard1 = ({ testimonial, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 bg-white flex flex-col gap-6"
    >
      <div>
        {/* Quote Icon */}
        <div className="text-4xl h-20">
          <Quote className="text-secondary" size={64} />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-secondary fill-secondary"
            >
              ★
            </motion.span>
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="mb-6 leading-relaxed text-primary font-medium text-xl md:text-2xl">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center justify-end gap-1">
        <div>
          <div className="font-medium text-lg md:text-xl text-primary tracking-tight">
            {testimonial.name}
          </div>
          <div className="text-sm md:text-base font-normal text-primary/60">
            {testimonial.role} <span className="text-secondary">//</span>
          </div>
        </div>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard2 = ({ testimonial, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 bg-secondary flex flex-col gap-6"
    >
      <div>
        {/* Author */}
        <div className="flex items-center gap-3 h-20">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-lg md:text-xl text-white tracking-tight">
              {testimonial.name}
            </div>
            <div className="text-sm md:text-base font-normal text-white">
              <span className="text-white">//</span> {testimonial.role}
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-white"
            >
              ★
            </motion.span>
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="mb-6 leading-relaxed text-white font-medium text-xl md:text-2xl">
        {testimonial.text}
      </p>

      {/* Stats (if available) */}
      <div className="mb-6 space-y-4 mt-auto flex flex-col gap-1 items-end">
        {testimonial.stats.map((stat, i) => (
          <StatItem
            key={i}
            stat={stat}
            isInView={isInView}
            delay={0.8 + i * 0.2}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Stat Item Component (inside testimonial cards)
const StatItem = ({ stat, isInView, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
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
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-3xl md:text4xl font-medium text-white text-right tracking-tight">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm mdtext-base text-white text-right tracking-tight">
        {stat.label}
      </div>
    </motion.div>
  );
};

// Stat Card Component (bottom row)
const StatCard = ({ value, suffix, label, isInView, delay, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(
            decimals > 0
              ? parseFloat(start.toFixed(decimals))
              : Math.floor(start)
          );
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value, decimals]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="bg-white p-6 min-h-60 flex flex-col justify-between items-start"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-primary/60 font-medium leading-relaxed">
        {label}
      </p>
    </motion.div>
  );
};

// Leave Review Button Component
const LeaveReviewButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="flex justify-end">
        <div
          className="relative inline-flex items-center gap-1 group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-primary text-base md:text-lg font-medium tracking-tight">
            Want to start project
          </span>
          <motion.div>
            <ArrowUpRight
              className="text-primary transition-transform group-hover:rotate-45"
              size={28}
            />
          </motion.div>

          {/* Animated Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -bottom-1 left-0 h-0.5 w-full bg-orange-500 origin-left"
          />
        </div>
      </div>
    </motion.button>
  );
};

export default TestimonialsSection;
