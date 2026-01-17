import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import BlogCardImg1 from "@/public/blog-section-card-img-1.svg";
import BlogCardImg2 from "@/public/blog-section-card-img-2.svg";
import BlogCardImg3 from "@/public/blog-section-card-img-3.svg";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05,
    margin: "0px 0px -100px 0px",
  });

  // NOTE: Replace these placeholder images with your actual imports:

  const blogPosts = [
    {
      id: 1,
      type: "hover-card",
      date: "Feb 23, 2025",
      category: "Branding",
      title: "Why Design-Driven Brands Outperform the Competition",
      description:
        "Discover how strategic design solutions, brand equity, drive conversions, and position your business for long-term growth in an increasingly visual digital landscape.",
      author: "Written by Lena Moritz",
      image: BlogCardImg1, // Replace this string with actual BlogCardImg1 import
    },
    {
      id: 2,
      type: "static-card",
      image:
        "https://framerusercontent.com/images/XHeYPvAaouC6t25VTJjzjb2wg.png",
      title: "FORBASE®",
      subtitle: "YOU IMAGINE./\nWE MAKE IT REAL//.",
    },
    {
      id: 3,
      type: "hover-card",
      date: "Feb 9, 2025",
      category: "Design",
      title: "Why Strategic Design Drives Better Business Results",
      description:
        "Learn how thoughtful, conversion-focused design isn't just about aesthetics—it's a business tool that drives clarity, trust, and measurable outcomes.",
      author: "Written by Amelia Hyeon",
      image: BlogCardImg2, // Replace this string with actual BlogCardImg2 import
    },
    {
      id: 4,
      type: "hover-card",
      date: "Feb 16, 2025",
      category: "Development",
      title: "How Custom Web Development Accelerates Business Growth",
      description:
        "Explore how tailored web solutions outperform templates by creating faster, scalable, and conversion-focused digital experiences that drive long-term value.",
      author: "Written by Jasper Lin",
      image: BlogCardImg3, // Replace this string with actual BlogCardImg3 import
    },
    {
      id: 5,
      type: "static-icon",
    },
    {
      id: 6,
      type: "latest-news",
      title: "Latest news & trends",
      description:
        "Explore our blog for the latest insights and trends in design, branding, and digital innovation.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mb-16"
        >
          <div className="min-w-60">
            <div className="text-sm border-l-2 border-secondary p-2 flex flex-col gap-2">
              <p className="text-secondary">007</p>
              <p className="text-primary font-medium">Blog</p>
            </div>
          </div>
          <div>
            <h2 className="text-6xl md:text-8xl font-medium mb-6">
              <span className="text-primary/60">Latest </span>
              <span className="text-primary">insights.</span>
            </h2>
            <p className="text-primary/60 text-sm md:text-base max-w-lg">
              Discover expert insights on design, development and brand
              strategy. Curated for founders, creatives and teams looking to
              make an impact.
            </p>
          </div>
          <div></div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {blogPosts.map((post, index) => {
            if (post.type === "hover-card") {
              return (
                <HoverBlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  isInView={isInView}
                />
              );
            } else if (post.type === "static-card") {
              return (
                <StaticBrandCard
                  key={post.id}
                  post={post}
                  index={index}
                  isInView={isInView}
                />
              );
            } else if (post.type === "static-icon") {
              return (
                <StaticIconCard
                  key={post.id}
                  post={post}
                  index={index}
                  isInView={isInView}
                />
              );
            } else if (post.type === "latest-news") {
              return (
                <StaticLatestNewsCard
                  key={post.id}
                  post={post}
                  index={index}
                  isInView={isInView}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

// Hover Blog Card Component (Cards 1, 3, 4)
const HoverBlogCard = ({ post, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = post.image?.src || post.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
      className="relative cursor-pointer group h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden"
    >
      {/* Background Image with Zoom - Using CSS background */}
      <motion.div
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
        {/* Top: Date Badge */}
        <div>
          <span className="inline-block text-sm md:text-base font-medium text-white">
            {post.date}
          </span>
        </div>

        {/* Bottom: Description (above), Title, and Author */}
        <div>
          {/* Description - Fades in from center on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="mb-4"
          >
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              {post.description}
            </p>
          </motion.div>

          {/* Title - Stays in place */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            {post.title}
          </h3>
          <div className="border-t border-white/50" />
          {/* Author - Stays in place */}
          <p className="text-white/80 text-sm md:text-base tracking-tight font-medium mt-4">
            {post.author}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Static Brand Card Component (Card 2)
const StaticBrandCard = ({ post, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#FBF8F3] py-6 px-6 md:py-8 md:px-8 flex flex-col items-center justify-between text-center h-[450px] md:h-[500px] lg:h-[550px]"
    >
      <h3 className="w-full text-4xl md:text-5xl lg:text-6xl font-normal text-primary tracking-tighter text-right">
        FORBASE <sup>® </sup>
      </h3>
      <p className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-normal text-primary leading-tight text-left uppercase">
        you <span className="text-secondary">imagine</span>/.
        <br />
        we make it <span className="text-secondary">real</span>//.
      </p>
    </motion.div>
  );
};

// Static Icon Card Component (Card 5)
const StaticIconCard = ({ post, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 md:p-12 flex flex-col items-center justify-center text-center h-[450px] md:h-[500px] lg:h-[550px]"
    >
      <div className="text-primary">
        <Globe
          size={150}
          strokeWidth={1}
          className="md:w-[200px] md:h-[200px]"
        />
      </div>
    </motion.div>
  );
};

const StaticLatestNewsCard = ({ post, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white py-6 px-6 md:py-8 md:px-8 flex flex-col items-center justify-between text-center h-[450px] md:h-[500px] lg:h-[550px]"
    >
      <h3 className="w-full text-3xl md:text-4xl lg:text-5xl font-normal text-primary text-left leading-tight">
        Latest <span className="text-primary/60">news</span> &
        <span className="text-primary/60"> trends</span>
      </h3>
      <div className="flex flex-col gap-4">
        <p className="text-base md:text-lg lg:text-xl tracking-tight font-normal text-primary/60 leading-relaxed text-left">
          Explore our blog for the latest insights and trends in design,
          branding, and digital innovation.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full cursor-pointer px-6 md:px-8 bg-secondary text-white text-base md:text-lg font-medium py-3 md:py-4 flex items-center justify-center gap-2 group"
        >
          <span>View Blog</span>

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
  );
};

export default BlogSection;
