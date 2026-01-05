import React from "react";
import { ServiceCard } from "./CommonComponents";

const ServicesSection = () => {
  const services = [
    {
      number: "001",
      title: "Brand Identity",
      description:
        "We create distinctive logos, color palettes, typography, and brand guidelines to ensure a consistent and memorable brand image.",
      images: [
        "https://framerusercontent.com/images/TLPPoiLm5kWF8vZkoTAcJWc3mA0.png",
        "https://framerusercontent.com/images/sdOMkUQUiMbRnxdcfnsFhFS3I.png",
        "https://framerusercontent.com/images/xKUrJdhloWBDbXJPIWFcuYzdSp4.jpg",
      ],
    },
    {
      number: "002",
      title: "Web Design & Development",
      description:
        "We design and build responsive, user-friendly websites that align with your brand and deliver seamless performance.",
      images: [
        "https://framerusercontent.com/images/LkW7w6wDIQmMR0wNlHXGs8PWDo.png",
        "https://framerusercontent.com/images/0qg1IyAdw0W5O0FA0VOoQeL6Rs.png",
        "https://framerusercontent.com/images/sYHaJTIhxoMaOE3jdKTG1ycPrD4.png",
      ],
    },
    {
      number: "003",
      title: "UI / UX Design",
      description:
        "We craft intuitive interfaces and smooth user experiences that engage customers and enhance satisfaction.",
      images: [
        "https://framerusercontent.com/images/EtJ8nP4EfYtNlVHz6H4eiQcTZo.jpg",
        "https://framerusercontent.com/images/hKGcnfozR6RkGzw8cgioZknGc0.png",
        "https://framerusercontent.com/images/adxUOQuT7eoYEJ9rIHCgchGfdi4.png",
      ],
    },
    {
      number: "004",
      title: "Design support",
      description:
        "We provide ongoing creative updates and support through flexible plans to keep your brand fresh and relevant.",
      images: [
        "https://framerusercontent.com/images/nj91wgfLKKin5pcKLCAfx3mgsFs.png",
        "https://framerusercontent.com/images/XZFIhJgzlEGDe5yhLlrK7ffugE.png",
        "https://framerusercontent.com/images/JbWe4tW5Vn733HGYWMaSRRHkdlE.png",
      ],
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-white/40 mb-4">003 Services</div>
        <h2 className="text-5xl md:text-7xl font-bold mb-20">Services.</h2>

        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
