import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05,
    margin: "0px 0px -100px 0px",
  });
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
  };

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FBF8F3] overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium tracking-tighter mb-8 sm:mb-10 md:mb-12 wrap-break-word">
            <span className="text-primary">Get in </span>
            <span className="text-secondary">/touch/.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-primary/60 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl"
            >
              Reach out to discover how Forbase can support your digital goals
              and help elevate your brand to new heights.
            </motion.p>

            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Office Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <MapPin className="text-primary mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-primary mb-2 text-base sm:text-lg md:text-xl font-medium tracking-tight">
                      Office
                    </h3>
                    <p className="text-primary/60 text-xs sm:text-sm md:text-base font-medium tracking-tight leading-relaxed">
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
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <Phone className="text-primary mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-primary mb-2 text-base sm:text-lg md:text-xl font-medium tracking-tight">
                      Contact
                    </h3>
                    <a
                      href="tel:+14155558247"
                      className="text-primary/60 text-xs sm:text-sm md:text-base font-medium block hover:text-secondary transition-colors mb-1"
                    >
                      (415) 555-8247
                    </a>
                    <a
                      href="mailto:hello@forbase.com"
                      className="text-primary/60 text-xs sm:text-sm md:text-base font-medium block hover:text-secondary transition-colors"
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
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 p-6 sm:p-8 md:p-10"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-base sm:text-lg md:text-xl font-medium text-primary/60 tracking-tight mb-2">
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
                  className="w-full px-0 py-2 sm:py-3 bg-transparent border-b-2 border-primary/30 focus:border-secondary outline-none text-primary text-sm sm:text-base transition-colors"
                  whileFocus={{ scale: 1.005 }}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: focusedField === "name" ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-base sm:text-lg md:text-xl font-medium text-primary/60 tracking-tight mb-2">
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
                  className="w-full px-0 py-2 sm:py-3 bg-transparent border-b-2 border-primary/30 focus:border-secondary outline-none text-primary text-sm sm:text-base transition-colors"
                  whileFocus={{ scale: 1.005 }}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: focusedField === "email" ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-base sm:text-lg md:text-xl font-medium text-primary/60 tracking-tight mb-2">
                  Your message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={3}
                  className="w-full px-0 py-2 sm:py-3 bg-transparent border-b-2 border-primary/30 focus:border-secondary outline-none text-primary text-sm sm:text-base transition-colors resize-none"
                  whileFocus={{ scale: 1.005 }}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: focusedField === "message" ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
                <SubmitButton handleSubmit={handleSubmit} />
              </div>

              {/* Privacy Notice */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xs sm:text-sm font-medium text-primary/60 tracking-tight leading-relaxed"
              >
                By submitting, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Submit Button Component
const SubmitButton = ({ handleSubmit }) => {
  return (
    <motion.button
      onClick={handleSubmit}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full sm:w-fit cursor-pointer px-6 sm:px-8 bg-secondary text-white text-base sm:text-lg font-medium py-3 sm:py-4 flex items-center justify-center gap-2 group"
    >
      <span>Get in touch</span>

      {/* Arrow - Changes direction on hover */}
      <motion.span>
        <ArrowUpRight
          size={20}
          className="transition-transform group-hover:rotate-45 sm:w-6 sm:h-6"
        />
      </motion.span>
    </motion.button>
  );
};

export default ContactSection;
