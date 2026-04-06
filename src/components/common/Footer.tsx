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
      <div className="footer-gradient" />

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
            <h1 className="footer-name">Ryan Nicholas Purba</h1>
            <p className="text-xl md:text-2xl text-[#040f0f]/90 dark:text-[#85BDBF]/80 font-light max-w-2xl mx-auto">
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
                className=""
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
            className="border-t border-[#040f0f]/40 dark:border-[#57737A]/30 pt-8"
          >
            <p className="text-sm md:text-base text-[#040f0f]/80 dark:text-[#57737A]/80">
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
