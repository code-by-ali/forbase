"use client";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";

const imageMotion = {
  initial: { scale: 1.1 },
  whileInView: { scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export default function AboutTeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-primary overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 text-primary"
        >
          <div className="min-w-30 lg:min-w-60">
            <div className="text-sm border-l-2 border-secondary p-2 flex flex-col gap-2">
              <p className="text-secondary">002</p>
              <p className="text-primary">Projects </p>
            </div>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-medium text-primary tracking-tight mb-6">
            We're{" "}
            <span className="text-secondary">/designers/, /strategists/, </span>
            and <span className="text-secondary">/developers/</span> helping
            brands grow through thoughtful design and digital solutions.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-0">
          {/* 1️⃣ Image */}
          <CardImage
            src="https://framerusercontent.com/images/zBc3VzyFnZQObGBbMpJ8wY6Q.png"
            name="Amelia Hyeon"
            role="Brand Strategist"
          />

          {/* 2️⃣ Text */}
          <CardText
            title="3 Designers"
            tag="Design"
            description="creating intuitive, conversion-ready interfaces built for clarity and speed"
          />

          {/* 3️⃣ Image */}
          <CardImage
            src="https://framerusercontent.com/images/zBc3VzyFnZQObGBbMpJ8wY6Q.png"
            name="Oliver Bennett"
            role="Product Designer"
          />

          {/* 4️⃣ Text */}
          <CardText
            title="5 Engineers"
            tag="Engineering"
            description="developing fast, scalable websites with clean code and smooth interactions"
          />

          {/* 5️⃣ Text */}
          <CardText
            title="2 Client Success Managers"
            tag="Client Success"
            description="ensuring seamless collaboration, clear timelines, and ongoing support that lasts"
          />

          {/* 6️⃣ Image */}
          <CardImage
            src="https://framerusercontent.com/images/zBc3VzyFnZQObGBbMpJ8wY6Q.png"
            name="Ava Morgan"
            role="Client Success Manager"
          />

          {/* 7️⃣ Text */}
          <CardText
            title="2 Strategists"
            tag="Strategy"
            description="crafting smart digital plans that align brand, user needs, and business goals"
          />

          {/* 8️⃣ Image */}
          <CardImage
            src="https://framerusercontent.com/images/zBc3VzyFnZQObGBbMpJ8wY6Q.png"
            name="Elliot Kim"
            role="Lead Developer"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="hidden md:flex"></div>
          <div className="flex flex-col gap-4 py-4">
            <p className="text-sm md:text-base font-medium text-primary/60 tracking-tight">
              Meet the minds behind Forbase — an agile team of designers,
              developers, and strategists crafting bold brands and digital
              experiences.
            </p>

            <motion.button className="w-fit cursor-pointer px-8 bg-secondary text-white text-lg font-medium py-4 flex items-center justify-center gap-2 group">
              <span>About Us</span>

              {/* Arrow - Changes direction on hover */}
              <motion.span>
                <ArrowUpRight
                  size={24}
                  className="transition-transform group-hover:rotate-45"
                />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Image Card ---------------- */

function CardImage({ src, name, role }) {
  return (
    <div className="bg-white">
      <motion.div {...imageMotion} className="relative overflow-hidden">
        <img
          src={src}
          alt={name}
          width={400}
          height={500}
          className="h-100 w-full object-cover"
        />
        <p className="absolute top-2 left-2 flex items-center gap-2 backdrop-blur-2xl bg-white/20 text-white rounded-full px-3 py-1">
          <MapPin size={16} />
          New York, US
        </p>
      </motion.div>

      <div className="p-6">
        <p className="text-xl md:text-2xl font-medium text-primary">{name}</p>
        <p className="text-sm font-normal text-primary/60">
          {" "}
          <span className="text-secondary">//</span> {role}
        </p>
      </div>
    </div>
  );
}

/* ---------------- Text Card ---------------- */

function CardText({ title, tag, description }) {
  return (
    <div className="relative bg-[#FBF8F3] min-h-100 p-8 flex flex-col justify-between border border-primary/10">
      <div className="flex flex-col gap-4">
        <p className="text-sm md:text-base font-normal text-primary/64 text-right">
          {tag} <span className="text-secondary">//</span>
        </p>

        <h3 className="text-4xl md:text-5xl font-medium text-primary">
          {title}
        </h3>
      </div>

      <p className="text-sm md:text-base font-normal text-primary/64 tracking-tight max-w-xs text-right">
        {description}
      </p>
    </div>
  );
}
