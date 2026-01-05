import React from "react";
import { ProcessStep } from "./CommonComponents";

const ProcessSection = () => {
  const steps = [
    {
      number: "001",
      title: "Discovery",
      description:
        "We start by learning about your business, goals, and challenges to align on vision and direction.",
      image:
        "https://framerusercontent.com/images/jnejQkzRyL1FQoeTKyODKvOQxLk.png",
    },
    {
      number: "002",
      title: "Strategy",
      description:
        "We develop a comprehensive plan that outlines the project scope, timeline, and deliverables.",
      image:
        "https://framerusercontent.com/images/qjO5HEFLgff5gSUgrvzJdDzy73M.jpg",
    },
    {
      number: "003",
      title: "Design",
      description:
        "Our team creates beautiful, functional designs that bring your brand to life.",
      image:
        "https://framerusercontent.com/images/98nqQcKyGFlkZcdQ83JR9DLzWsc.jpg",
    },
    {
      number: "004",
      title: "Development",
      description:
        "We build your website with clean code, ensuring it's fast, secure, and scalable.",
      image:
        "https://framerusercontent.com/images/sYHaJTIhxoMaOE3jdKTG1ycPrD4.png",
    },
    {
      number: "005",
      title: "Launch",
      description:
        "We deploy your project and provide ongoing support to ensure continued success.",
      image:
        "https://framerusercontent.com/images/O2mboqHJCrWdxBeorobIuDd7Gr8.png",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-white/40 mb-4">005 Process</div>
        <h2 className="text-5xl md:text-7xl font-bold mb-20">Process.</h2>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
