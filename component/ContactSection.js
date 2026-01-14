import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto">
        {/* Title Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter mb-12">
            <span className="text-primary">Get in </span>
            <span className="text-secondary">/touch/.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between">
            <p className="text-primary/60 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Reach out to discover how Forbase can support your digital goals
              and help elevate your brand to new heights.
            </p>

            <div className="flex flex-col gap-4 mb-20">
              {/* Office Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <MapPin className="text-primary mt-1" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-primary mb-2 text-lg md:text-xl font-medium tracking-tight">
                      Office
                    </h3>
                    <p className="text-primary/60 text-sm md:text-base font-medium tracking-tight leading-relaxed">
                      15 Clerkenwell Close
                      <br />
                      London EC1R 0AA
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <Phone className="text-primary mt-1" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-primary mb-2 text-lg md:text-xl font-medium tracking-tight">
                      Contact
                    </h3>
                    <a
                      href="tel:+14155558247"
                      className="text-primary/60 text-sm md:text-base font-medium block hover:text-secondary transition-colors mb-1"
                    >
                      (415) 555-8247
                    </a>
                    <a
                      href="mailto:hello@forbase.com"
                      className="text-primary/60 text-sm md:text-base font-medium block hover:text-secondary transition-colors"
                    >
                      hello@forbase.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 md:p-10 col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-lg md:text-xl font-medium text-primary/60 tracking-tight mb-2">
                  Your name *
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-1 bg-transparent border-b-2 border-primary/30 focus:border-secondary outline-none text-primary transition-colors"
                  whileFocus={{ scale: 1.005 }}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: focusedField === "name" ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 origin-left"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-lg md:text-xl font-medium text-primary/60 tracking-tight mb-2">
                  Your Email *
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-1 bg-transparent border-b-2 border-primary/30 focus:border-secondary outline-none text-primary transition-colors"
                  whileFocus={{ scale: 1.005 }}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: focusedField === "email" ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 origin-left"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-lg md:text-xl font-medium text-primary/60 tracking-tight mb-2">
                  Your message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={3}
                  className="w-full px-0 py-1 bg-transparent border-b-2 border-primary/30 focus:border-secondary outline-none text-primary transition-colors"
                  whileFocus={{ scale: 1.005 }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <SubmitButton />
              </div>

              {/* Privacy Notice */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm font-medium text-primary/60 tracking-tight"
              >
                By submitting, you agree to our{"  "}
                <a href="#" className="text-primary hover:underline">
                  Terms
                </a>
                {"  "}
                and{"  "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Submit Button Component
const SubmitButton = () => {
  return (
    <motion.button className="w-fit cursor-pointer px-8 bg-secondary text-white text-lg font-medium py-4 flex items-center justify-center gap-2 group">
      <span>Get in touch</span>

      {/* Arrow - Changes direction on hover */}
      <motion.span>
        <ArrowUpRight
          size={24}
          className="transition-transform group-hover:rotate-45"
        />
      </motion.span>
    </motion.button>
  );
};

export default ContactSection;
