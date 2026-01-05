import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./CommonComponents";

const ProjectsSection = () => {
  const projects = [
    {
      image:
        "https://framerusercontent.com/images/IRarxbe05jVfRyj4iohhfTL7yyw.jpg",
      logo: "https://framerusercontent.com/images/iCdXfJ0izW1KpXgoQEQ0NvYftT8.png",
      category: "Branding",
      year: "2025",
      title: "Lightspeed.",
      description:
        "Lightspeed revitalized their e-commerce platform with a sleek, mobile-first design and streamlined checkout process.",
    },
    {
      image:
        "https://framerusercontent.com/images/RFUk5RKy3RK5IfUg41QuoNVe5yU.png",
      logo: "https://framerusercontent.com/images/h7q7dQYmAqaBaGqpd0qLoHo4gNI.png",
      category: "Branding",
      year: "2024",
      title: "Boltshift.",
      description:
        "Boltshift revamped their logistics platform with a custom dashboard and real-time tracking features.",
    },
    {
      image: "https://framerusercontent.com/images/PXx33vzzrqJEfSkxbGepmVc.png",
      logo: "https://framerusercontent.com/images/5lyYGJlj5d6TUcxbVcR18MbKyrM.png",
      category: "Design",
      year: "2022",
      title: "Powersurge.",
      description:
        "Powersurge partnered with Fortex to redesign their digital presence with a custom website and brand identity overhaul.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-white/40 mb-4">004 Projects</div>
        <h2 className="text-5xl md:text-7xl font-bold mb-8">Projects.</h2>
        <p className="text-xl text-white/60 mb-20 max-w-3xl">
          Real creativity. Tangible results. Discover how we've elevated brands
          like yours through thoughtful design and seamless development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="text-6xl font-bold mb-4">15+</div>
          <p className="text-white/60">
            projects delivered with excellence across multiple industries.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold"
          >
            View all
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
