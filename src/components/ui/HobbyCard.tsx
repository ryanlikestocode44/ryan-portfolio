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
        scale: 1.03, // Reduced from 1.05
        rotateY: 3, // Subtle tilt
        boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.3)", // Smaller shadow
      }}
      viewport={{ once: true }}
      className="hobby-card" // aspect-video (16:9 compact)
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
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" // Reduced scale
        loading="lazy"
        draggable={false}
      />

      {/* Compact Title Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-4 sm:p-6">
        <motion.h3
          whileHover={{ scale: 1.03 }}
          className="text-lg sm:text-xl font-bold text-white drop-shadow-md" // Smaller text
        >
          {hobby.title}
        </motion.h3>
      </div>
    </motion.div>
  );
});

HobbyCard.displayName = "HobbyCard";

export default HobbyCard;
