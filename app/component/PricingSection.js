import React, { useState } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "./CommonComponents";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Basic",
      description:
        "For startups and small teams looking to launch with confidence and clarity.",
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        "1–3 custom-designed pages",
        "Basic branding (colors, fonts, logo)",
        "Mobile responsive layout",
        "Simple animations",
        "Contact form integration",
        "Email support",
      ],
    },
    {
      name: "Standard",
      popular: true,
      description:
        "For growing businesses that need a solid online presence to elevate their brand.",
      monthlyPrice: 2499,
      annualPrice: 1499,
      features: [
        "Everything in Basic",
        "4–8 custom-designed pages",
        "CMS integration (blog, portfolio)",
        "Custom animations & transitions",
        "Basic SEO setup",
        "Priority email & chat support",
      ],
    },
    {
      name: "Premium",
      description:
        "For established brands seeking high-impact, custom design solutions",
      monthlyPrice: 4999,
      annualPrice: 3999,
      features: [
        "Everything in Standard",
        "10+ custom pages or layouts",
        "Advanced CMS setup",
        "Strategy sessions & workshops",
        "48-hour turnaround",
        "Up to 70 hrs/month design support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-white/40 mb-4">006 Pricing</div>
        <h2 className="text-5xl md:text-7xl font-bold mb-12">Pricing.</h2>

        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`text-sm ${!isAnnual ? "text-white" : "text-white/40"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-white/10 rounded-full transition-colors"
          >
            <motion.div
              animate={{ x: isAnnual ? 28 : 0 }}
              className="absolute top-1 left-1 w-5 h-5 bg-orange-500 rounded-full"
            />
          </button>
          <span
            className={`text-sm ${isAnnual ? "text-white" : "text-white/40"}`}
          >
            Annual
          </span>
          {isAnnual && (
            <span className="text-sm text-orange-500">Save 30%</span>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
