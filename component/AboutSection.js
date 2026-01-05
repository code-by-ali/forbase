import React from "react";
import { TeamCard } from "./CommonComponents";

const AboutSection = () => {
  const team = [
    {
      name: "Amelia Hyeon",
      role: "Brand Strategist",
      location: "New York, US",
      image:
        "https://framerusercontent.com/images/jZqoxNU3gf48YgdXjmbJBrX7yH0.png",
    },
    {
      name: "Oliver Bennett",
      role: "Product Designer",
      location: "London, UK",
      image:
        "https://framerusercontent.com/images/OVDRqLmcYGcS3gmqlFEgrz6pyE.png",
    },
    {
      name: "Ava Morgan",
      role: "Client Success Manager",
      location: "New York, US",
      image:
        "https://framerusercontent.com/images/zBc3VzyFnZQObGBbMpJ8wY6Q.png",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-white/40 mb-4">008 About us</div>
        <h2 className="text-5xl md:text-6xl font-bold mb-20">
          We're <span className="text-orange-500">/designers/</span>,{" "}
          <span className="text-orange-500">/strategists/</span>, and{" "}
          <span className="text-orange-500">/developers/</span> helping brands
          grow through thoughtful design and digital solutions.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
