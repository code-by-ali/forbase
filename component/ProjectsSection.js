import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectCard1 from "@/public/projects-card-img-1.svg";
import ProjectCard2 from "@/public/projects-card-img-2.svg";
import ProjectCard3 from "@/public/projects-card-img-3.svg";
import ProjectClient1 from "@/public/project-client-img-1.svg";
import ProjectClient2 from "@/public/project-client-img-2.svg";
import ProjectClient3 from "@/public/project-client-img-3.svg";
import CommonImage from "./CommonImage";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05,
    margin: "0px 0px -100px 0px",
  });

  const projects = [
    {
      id: 1,
      type: "Branding",
      year: "/2025",
      logo: "https://framerusercontent.com/images/iCdXfJ0izW1KpXgoQEQ0NvYftT8.png",
      bgImage: ProjectCard1,
      clientLogo: ProjectClient1,
      name: "Lightspeed",
      title: "Lightspeed.",
      description:
        "Real creativity. Tangible results. Discover how we've elevated brands.",
    },
    {
      id: 2,
      type: "Design",
      year: "/2024",
      logo: "https://framerusercontent.com/images/5lyYGJlj5d6TUcxbVcR18MbKyrM.png",
      bgImage: ProjectCard2,
      clientLogo: ProjectClient2,
      name: "Powersurge",
      title: "Powersurge.",
      description:
        "Thoughtful design strategies that transform business outcomes and drive growth.",
    },
    {
      id: 3,
      type: "Branding",
      year: "/2024",
      logo: "https://framerusercontent.com/images/QHGXGznQjUpBOWrWbqDNDU3u0.png",
      bgImage: ProjectCard3,
      clientLogo: ProjectClient3,
      name: "Boltshift",
      title: "Boltshift.",
      description:
        "Seamless development meets innovative design for exceptional digital experiences.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-10 lg:py-20 px-4 md:px-6 bg-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-20"
        >
          <div className="min-w-30 md:min-w-60">
            <div className="text-sm border-l-2 border-secondary p-2 flex flex-col gap-2">
              <p className="text-secondary">002</p>
              <p className="text-primary">Projects </p>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-primary lg:mb-4">
            Projects.
          </h2>
          <p className="text-primary/60 text-sm md:text-base max-w-sm">
            Real creativity. Tangible results. Discover how we've elevated
            brands like yours through thoughtful design and seamless
            development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}

          {/* Stats Card (4th card) */}
          <StatsCard isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
      className="relative overflow-hidden cursor-pointer group h-[240px] sm:h-[500px] md:h-[550px] lg:h-[400px] xl:h-[600px]"
    >
      {/* Background Image with Zoom */}
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(projects-card-img-${index + 1}.svg)`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 md:p-8">
        {/* Top Labels */}
        <div className="flex items-center justify-between">
          <span className="px-3 md:px-4 py-1 md:py-1.5 bg-white backdrop-blur-sm text-xs md:text-sm font-medium text-primary">
            {project.type}
          </span>
          <span className="text-white/90 text-sm md:text-base font-medium">
            {project.year}
          </span>
        </div>

        {/* Center Logo - Slides Up and Hides */}
        <motion.div
          animate={{
            y: isHovered ? -80 : 0,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="px-4 md:px-8 py-3 md:py-6 flex items-center gap-4">
            <CommonImage
              src={project.clientLogo.src || project.clientLogo}
              alt={project.name}
              className="w-auto h-8 md:h-12"
            />
          </div>
        </motion.div>

        {/* Bottom Content - Slides Up on Hover */}
        <div className="space-y-2">
          <motion.div
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-medium text-white">
              {project.title}
            </h3>
          </motion.div>

          {/* Description - Appears on Hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="h-px bg-white/30 mb-2" />
            <p className="text-white text-sm sm:text-base md:text-base lg:text-lg font-medium tracking-tight leading-relaxed drop-shadow-lg">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Stats Card Component (4th card)
const StatsCard = ({ isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Counting animation
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 59;
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
      className="relative overflow-hidden group cursor-pointer bg-primary h-[300px] sm:h-[500px] md:h-[550px] lg:h-[400px] xl:h-[600px] flex flex-col justify-between px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Number with Plus Icon */}
        <div className="flex items-start mb-4 md:mb-6">
          <motion.span
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-none tracking-tight"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {count}
          </motion.span>

          {/* Plus Icon - Spins and moves on hover - Less movement on mobile */}
          <motion.span
            animate={{
              rotate: isHovered ? 180 : 0,
              x: isHovered ? (isMobile ? -80 : -120) : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-secondary text-4xl sm:text-5xl font-bold"
          >
            +
          </motion.span>
        </div>

        {/* Text with underline */}
        <div className="mb-6 md:mb-8">
          <p className="text-white/60 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight mb-1">
            <motion.span className="relative text-white inline-block group-hover:underline transition-all duration-500">
              projects
            </motion.span>{" "}
            delivered
          </p>
          <p className="text-white/60 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">
            with excellence across{" "}
            <span className="text-white">multiple industries</span>.
          </p>
        </div>
      </div>

      {/* View All Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-secondary text-white text-base md:text-lg font-medium py-3 md:py-4 flex items-center justify-center gap-2 group"
      >
        <span>View all</span>

        {/* Arrow - Changes direction on hover */}
        <motion.div
          animate={{
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight size={20} className="md:w-6 md:h-6" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ProjectsSection;
