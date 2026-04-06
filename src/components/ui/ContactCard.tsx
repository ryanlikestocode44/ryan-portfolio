import React from "react";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { ContactCardProps } from "@/types";

const ContactCard: FC<ContactCardProps> = React.memo(({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0 15px 35px rgba(194, 252, 247, 0.2)",
      }}
      className="contact-card"
    >
      {/* Icon Badge */}
      <Icon
        className="text-[#040f0f] dark:text-[#C9FBFF] drop-shadow-lg group-hover:scale-110 transition-all duration-300"
        size={30}
      />

      {/* Content */}
      <div className="pt-6">
        <h4 className="text-md md:text-lg font-bold text-[#040f0f] dark:text-[#C9FBFF] mb-2 leading-tight">
          {item.label}
        </h4>
        <motion.a
          href={item.href}
          className="text-[#57737a] hover:text-[#57737a] dark:text-[#85BDBF] hover:dark:text-[#C2FCF7] text-sm md:text-md font-medium block transition-colors duration-300 line-clamp-1 group-hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.value}
        </motion.a>
      </div>
    </motion.div>
  );
});

ContactCard.displayName = "ContactCard";

export default ContactCard;
