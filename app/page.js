"use client";

import React from "react";
import "./globals.css";
import Navigation from "@/component/Navigation";
import FloatingBottomNav from "@/component/FloatingBottomNav";
import HeroSection from "@/component/HeroSection";
import WhyChooseUsSection from "@/component/WhyChooseUsSection";
import ProjectsSection from "@/component/ProjectsSection";
import ServicesSection from "@/component/ServicesSection";
import ProcessSection from "@/component/ProcessSection";
import TestimonialsSection from "@/component/TestimonialsSection";
import AboutTeamSection from "@/component/AboutTeamSection";
import BlogSection from "@/component/BlogSection";
import FAQSection from "@/component/FAQSection";
import MarqueeLogoSection from "@/component/MarqueeLogoSection";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";

const SECTIONS = [
  HeroSection,
  WhyChooseUsSection,
  ProjectsSection,
  ServicesSection,
  ProcessSection,
  TestimonialsSection,
  AboutTeamSection,
  BlogSection,
  FAQSection,
  MarqueeLogoSection,
  ContactSection,
  Footer,
];

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <FloatingBottomNav />
      {SECTIONS.map((Section, i) => (
        <Section key={i} />
      ))}
    </main>
  );
}
