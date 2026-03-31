import React from "react";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { SkillCardProps } from "@/types";

const SkillCard: FC<SkillCardProps> = React.memo(({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white/8 backdrop-blur-xl border border-white/20 hover:border-white/40 hover:bg-white/15 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-1 sm:p-2 hover:p-2"
      role="img"
      aria-label={skill.name}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center rounded-xl bg-white/10 transition-all duration-300 group-hover:bg-white/20">
        <img
          src={skill.icon}
          alt={`${skill.name} icon`}
          className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-md"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Skill Name ONLY */}
      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white text-center leading-tight px-2 drop-shadow-md group-hover:drop-shadow-lg transition-shadow">
        {skill.name}
      </h3>
    </motion.div>
  );
});

export default SkillCard;