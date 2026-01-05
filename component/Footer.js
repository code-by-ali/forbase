import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              Fortex<span className="text-orange-500">®</span>
            </div>
            <p className="text-white/40 text-sm">
              you imagine/.
              <br />
              we make it real//.
            </p>
          </div>

          <div>
            <h4 className="text-sm text-white/40 mb-4">Navigation</h4>
            <div className="space-y-2 text-sm">
              {["Home", "About", "Projects", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-white/40 mb-4">Social</h4>
            <div className="space-y-2 text-sm">
              {["LinkedIn", "Instagram", "YouTube", "Twitter"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-white/40 mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-white/40">
          © 2025 Fortex®. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
