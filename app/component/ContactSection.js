import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          Get in <span className="text-orange-500">/touch/.</span>
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Reach out to discover how Fortex can support your digital goals and
          help elevate your brand to new heights.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <div className="text-left">
            <h3 className="text-sm text-white/40 mb-4">Office</h3>
            <p className="text-white/80">
              15 Clerkenwell Close
              <br />
              London EC1R 0AA
              <br />
              United Kingdom
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-sm text-white/40 mb-4">Contact</h3>
            <p className="text-white/80">
              (415) 555-8247
              <br />
              hello@fortex.com
            </p>
          </div>
        </div>

        <form className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors"
          />
          <textarea
            placeholder="Your message"
            rows={6}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-orange-500 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2"
          >
            Get in touch <ArrowRight size={20} />
          </motion.button>
          <p className="text-xs text-white/40 mt-4">
            By submitting, you agree to our Terms and Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
