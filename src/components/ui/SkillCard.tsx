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
      className="skill-card"
      role="img"
      aria-label={skill.name}
    >
      <div className="skill-icon-wrapper">
        <img
          src={skill.icon}
          alt={`${skill.name} icon`}
          className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-md"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Skill Name ONLY */}
      <h3 className="skill-name">{skill.name}</h3>
    </motion.div>
  );
});

SkillCard.displayName = "SkillCard";

export default SkillCard;