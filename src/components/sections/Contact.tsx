import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import type { FC } from "react";

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="py-32 px-4 bg-gradient-to-b from-slate-900/50 to-transparent"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-slate-300"
        >
          Ready to bring your ideas to life? Let's create something amazing
          together! 🚀
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <motion.a
            href="mailto:ryan@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="primary" size="lg">
              Get In Touch
            </Button>
          </motion.a>
          <div className="flex space-x-4">
            {[
              { icon: FaGithub, href: "https://github.com/ryan" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/ryan" },
              { icon: FaInstagram, href: "https://instagram.com/ryan" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-3xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: FaEnvelope, label: "Email", value: "ryan@example.com" },
            { icon: FaPhone, label: "Phone", value: "+62 812-3456-7890" },
            {
              icon: FaMapMarkerAlt,
              label: "Location",
              value: "Jakarta, Indonesia",
            },
          ].map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white">{label}</h4>
              </div>
              <p className="text-slate-400 group-hover:text-white transition-colors">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
