import React from "react";
import { motion } from "framer-motion";

const ClientsMarquee = () => {
  const logos = [
    "https://framerusercontent.com/images/5lyYGJlj5d6TUcxbVcR18MbKyrM.png",
    "https://framerusercontent.com/images/P7gw4luWZlEvbn9wdWWpyOg4aw.png",
    "https://framerusercontent.com/images/QHGXGznQjUpBOWrWbqDNDU3u0.png",
    "https://framerusercontent.com/images/DygFmIgEj3q0leF5cp8HyIublM.png",
    "https://framerusercontent.com/images/eLKqXl5yD92ucj8QL01psGKrOM.png",
    "https://framerusercontent.com/images/iCdXfJ0izW1KpXgoQEQ0NvYftT8.png",
  ];

  return (
    <section className="py-20 overflow-hidden border-y border-white/5">
      <div className="text-sm text-white/40 text-center mb-8">
        001 Our clients
      </div>
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center whitespace-nowrap"
        >
          {[1, 2, 3].map((set) => (
            <React.Fragment key={set}>
              {logos.map((logo, i) => (
                <img
                  key={`${set}-${i}`}
                  src={logo}
                  alt={`Client ${i}`}
                  className="h-8 opacity-50"
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
