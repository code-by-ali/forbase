"use client";

import React, { useState, useEffect } from "react";

import Navigation from "./component/Navigation";
import MobileMenu from "./component/MobileMenu";
import HeroSection from "./component/HeroSection";
import ClientsMarquee from "./component/ClientsMarquee";
import WhyChooseUsSection from "./component/WhyChooseUsSection";
import ServicesSection from "./component/ServicesSection";
import ProjectsSection from "./component/ProjectsSection";
import ProcessSection from "./component/ProcessSection";
import PricingSection from "./component/PricingSection";
import TestimonialsSection from "./component/TestimonialsSection";
import AboutSection from "./component/AboutSection";
import FAQSection from "./component/FAQSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import { ScrollProgress } from "./component/CommonComponents";

// ========================
// Main App Component
// ========================
const FortexWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white font-sans overflow-x-hidden">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <ClientsMarquee />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollProgress percentage={scrollPercentage} />
    </div>
  );
};

export default FortexWebsite;
