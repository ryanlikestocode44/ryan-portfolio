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
      className="group bg-[#040F0F]/60 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-[#57737A]/40 hover:border-[#C2FCF7]/60 hover:bg-[#040F0F]/80 shadow-lg hover:shadow-xl transition-all duration-400 cursor-pointer relative overflow-hidden"
    >
      {/* Icon Badge */}
      <Icon className="text-[#C9FBFF] drop-shadow-lg group-hover:scale-110 transition-all duration-300" size={30} />

      {/* Content */}
      <div className="pt-6">
        <h4 className="text-md md:text-lg font-bold text-[#C9FBFF] mb-2 leading-tight">
          {item.label}
        </h4>
        <motion.a
          href={item.href}
          className="text-[#85BDBF] hover:text-[#C2FCF7] text-sm md:text-md font-medium block transition-colors duration-300 line-clamp-1 group-hover:underline"
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
