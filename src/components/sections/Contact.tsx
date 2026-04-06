import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ContactCard from "@/components/ui/ContactCard";
import { socialsData, contactsData } from "@/data/contacts";
import type { FC } from "react";

const Contact: FC = () => {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12 md:mb-16"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-10 text-center max-w-full mx-auto leading-relaxed text-[#57737a] dark:text-slate-300"
        >
          Ready to bring your ideas to life? Let's create something amazing
          together! 🚀
        </motion.p>

        {/* CTA + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.a
            href="mailto:ryannichpurba44@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="primary" size="lg">
              Get In Touch
            </Button>
          </motion.a>

          <div className="flex gap-3">
            {socialsData.map(({ icon: Icon, url, label }, index) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                className="social-links"
              >
                <Icon className="social-icon" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {contactsData.map((item, index) => (
            <ContactCard key={item.label} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
