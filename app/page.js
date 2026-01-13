"use client";

import React, { useState } from "react";
import { useScroll, useTransform } from "framer-motion";

import Navigation from "@/component/Navigation";
import MobileMenu from "@/component/MobileMenu";
import HeroSection from "@/component/HeroSection";
import WhyChooseUsSection from "@/component/WhyChooseUsSection";
import ProjectsSection from "@/component/ProjectsSection";
// import ServicesSection from "@/component/ServicesSection";
// import ProcessSection from "@/component/ProcessSection";
// import TestimonialsSection from "@/component/TestimonialsSection";
// import AboutTeamSection from "@/component/AboutTeamSection";
// import BlogSection from "@/component/BlogSection";
// import FAQSection from "@/component/FAQSection";
// import MarqueeLogoSection from "@/component/MarqueeLogoSection";
// import ContactSection from "@/component/ContactSection";
// import Footer from "@/component/Footer";
import "./globals.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effect for hero section
  const heroY = useTransform(scrollY, [0, 500], [0, 50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 1]);

  return (
    <main className="bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection heroY={heroY} heroOpacity={heroOpacity} />
      <WhyChooseUsSection />
      <ProjectsSection />
      {/* <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutTeamSection />
      <BlogSection />
      <FAQSection />
      <MarqueeLogoSection />
      <ContactSection />
      <Footer /> */}

      {/* More sections coming soon */}
    </main>
  );
}
