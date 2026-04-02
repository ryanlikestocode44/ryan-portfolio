import { motion } from "framer-motion";
import type { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040F0F]/90 via-[#040F0F]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo & Tagline */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#C9FBFF] via-[#C2FCF7] to-[#85BDBF] bg-clip-text text-transparent mb-4">
              Ryan Nicholas Purba
            </h1>
            <p className="text-xl md:text-2xl text-[#85BDBF]/80 font-light max-w-2xl mx-auto">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12 text-sm"
          >
            {quickLinks.map(({ href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="text-[#85BDBF]/70 hover:text-[#C2FCF7] hover:underline transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="border-t border-[#57737A]/30 pt-8"
          >
            <p className="text-sm md:text-base text-[#57737A]/80">
              © {currentYear} Ryan Nicholas Purba. Made using React.js &
              Tailwind.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
