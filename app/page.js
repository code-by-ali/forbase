"use client";

import React, { useState } from "react";
import { useScroll, useTransform } from "framer-motion";

import Navigation from "@/component/Navigation";
import FloatingBottomNav from "@/component/FloatingBottomNav";
import HeroSection from "@/component/HeroSection";
import WhyChooseUsSection from "@/component/WhyChooseUsSection";
import ProjectsSection from "@/component/ProjectsSection";
import ProcessSection from "@/component/ProcessSection";
import ServicesSection from "@/component/ServicesSection";

import "./globals.css";
import TestimonialsSection from "@/component/TestimonialsSection";
import AboutTeamSection from "@/component/AboutTeamSection";
import BlogSection from "@/component/BlogSection";
import FAQSection from "@/component/FAQSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <FloatingBottomNav />
      <HeroSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutTeamSection />
      <BlogSection />
      <FAQSection />
      {/* <MarqueeLogoSection />
      <ContactSection />
      <Footer /> */}

      {/* More sections coming soon */}
    </main>
  );
}
