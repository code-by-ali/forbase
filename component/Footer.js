import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05,
    margin: "0px 0px -100px 0px",
  });

  const footerLinks = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "404", href: "#404" },
    { name: "Privacy", href: "#privacy" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <footer ref={ref} className="relative text-white overflow-hidden">
      {/* Red Striped/Textured Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/footer-bg.svg)",
        }}
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#141111] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to
              <br />
              Accelerate Your
              <br />
              Growth?
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg font-medium tracking-tight mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Let Forbase be your partner in achieving remarkable results.
              Whether it's driving leads, boosting conversions, or building your
              brand, we're here to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit cursor-pointer rounded-full px-4 sm:px-6 bg-secondary text-white text-base sm:text-lg font-medium py-3 sm:py-4 flex items-center justify-center gap-3 sm:gap-4 group"
            >
              {/* Arrow - Changes direction on hover */}
              <motion.span className="p-1.5 sm:p-2 bg-white rounded-full">
                <ArrowUpRight
                  size={20}
                  className="text-secondary transition-transform group-hover:rotate-45 sm:w-6 sm:h-6"
                />
              </motion.span>
              <span>Get in touch</span>
            </motion.button>
          </motion.div>

          {/* Right Column - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start lg:items-end justify-center"
          >
            <nav className="space-y-2 sm:space-y-3">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                >
                  <FooterLink href={link.href} text={link.name} />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Large Forbase Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-10 sm:mb-12 md:mb-16 overflow-hidden"
        >
          <h3 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] font-bold leading-none tracking-tight wrap-break-word">
            Forbase
            <span className="text-secondary text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem] leading-none">
              .
            </span>
          </h3>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10"
        >
          {/* Copyright */}
          <div className="text-white/60 text-xs sm:text-sm">
            © 2024. Design & Developed Forbase Design
          </div>

          {/* Location */}
          <div className="text-white/60 text-xs sm:text-sm">Delaware, NY</div>

          {/* Social Links */}
          <div className="flex gap-6 sm:gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink = ({ href, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white relative group"
    >
      <motion.span
        animate={{ x: isHovered ? 10 : 0 }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        {text}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
      />
    </a>
  );
};

export default Footer;
