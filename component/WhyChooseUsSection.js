import React from "react";
import { AdvantageCard, FeatureCard, InfoCard } from "./CommonComponents";

const WhyChooseUsSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-white/40 mb-4">002 Why choose us</div>
        <h2 className="text-5xl md:text-7xl font-bold mb-20">Our advantage.</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <AdvantageCard
            image="https://framerusercontent.com/images/Af7ZirUQtXr63lrfj584g9zgg.png"
            number="08"
            title="8 years of experience"
            description="Hundreds of successful projects across industries, built on 8 years of refined design and development practices."
          />

          <AdvantageCard
            image="https://framerusercontent.com/images/nd4x6nckd1Qe0ssLOPuTGKMlcM.png"
            title="Satisfaction rate"
            stats="98%"
            description="from 95+ client projects"
            rating="4.9/5"
            subtitle="Trusted by brands worldwide."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            image="https://framerusercontent.com/images/emO7fjYsuMdJfa6Guq0B426lpk.png"
            title="Flexible pricing"
            description="Pricing plans that adapt to your budget and scope."
            note="* Plans start from $799 / month."
          />

          <InfoCard
            title="Fast turnaround"
            description="Projects launched in as little as 2 weeks."
          />

          <InfoCard
            title="Scalable design"
            description="Design systems that scale with your product."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
