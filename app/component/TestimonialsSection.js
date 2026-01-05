import React from "react";
import { TestimonialCard } from "./CommonComponents";


const TestimonialsSection = () => {
  return (
    <section className="py-32 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-white/40 mb-4">007 Testimonials</div>
        <h2 className="text-5xl md:text-7xl font-bold mb-20">
          Client stories.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <TestimonialCard
            quote="Fortex transformed our brand identity and website beyond what we imagined. Their team was professional, creative, and delivered on time."
            author="Emma Collins"
            role="CEO, Powersurge"
            image="https://framerusercontent.com/images/7dBgVlJGddtanMmE6mro8bfVO8.png"
          />

          <TestimonialCard
            quote="From strategy to design and launch, Fortex was with us every step of the way. The team's creativity and technical expertise helped us stand out."
            author="Emily Harris"
            role="Founder & CEO, Boltshift"
            image="https://framerusercontent.com/images/euGdeoG24s5gcYF0PPrn9ZcDhg.png"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
