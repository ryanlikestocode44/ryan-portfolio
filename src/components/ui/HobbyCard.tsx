import React from "react";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { HobbyCardProps } from "@/types";

const HobbyCard: FC<HobbyCardProps> = React.memo(({ hobby, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{
        scale: 1.03,
        rotateY: 3,
        boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.3)",
      }}
      viewport={{ once: true }}
      className="hobby-card group" // ✅ TAMBAH 'group' DISINI
      role="img"
      tabIndex={0}
      aria-label={hobby.title}
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-15 transition-opacity duration-400`}
      />

      {/* Image */}
      <img
        src={hobby.image}
        alt={hobby.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
        loading="lazy"
        draggable={false}
      />

      {/* Compact Title Overlay */}
      <div className="hobby-title-overlay">
        <motion.h3
          whileHover={{ scale: 1.03 }}
          className="text-lg sm:text-xl font-bold text-white drop-shadow-md"
        >
          {hobby.title}
        </motion.h3>
      </div>
    </motion.div>
  );
});

HobbyCard.displayName = "HobbyCard";

export default HobbyCard;
