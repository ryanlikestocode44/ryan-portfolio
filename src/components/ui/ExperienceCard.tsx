import React from "react";
import { motion } from "framer-motion";
import type { ExperienceCardProps } from "@/types";
import type { FC } from "react";

const ExperienceCard: FC<ExperienceCardProps> = React.memo(
  ({ experience, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12 group"
        role="article"
        aria-labelledby={`experience-${experience.id}-title`}
      >
        {/* Compact Image */}
        <motion.div whileHover={{ scale: 1.05 }} className="exp-img-wrapper">
          <img
            src={experience.image}
            alt={experience.company}
            className="w-full h-full object-cover hover:brightness-110 hover:contrast-110 transition-all duration-300"
            loading="lazy"
            draggable={false}
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            className="exp-content-wrapper"
          >
            {/* Header */}
            <div className="exp-content-header">
              <div>
                <h3
                  id={`experience-${experience.id}-title`}
                  className="text-2xl lg:text-3xl font-bold text-[#040f0f] dark:text-[#C9FBFF] leading-tight mb-1"
                >
                  {experience.company}
                </h3>
                <p className="text-xl text-[#212e2e] dark:text-[#85BDBF] font-semibold">
                  {experience.position}
                </p>
                <p className="text-[#57737A] text-sm mt-1 font-medium">
                  {experience.period}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {experience.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="exp-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-[#040f0f]/90 dark:text-[#C9FBFF]/90 text-base lg:text-lg leading-relaxed mb-8">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="space-y-3 pt-4 border-t border-[#040f0f]/20 dark:border-[#57737A]/20">
              {experience.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-[#040f0f]/90 dark:text-[#C9FBFF]/90"
                >
                  <div className="w-2 h-2 mt-2 bg-[#57737a] dark:bg-[#85BDBF] rounded-full flex-shrink-0 shadow-sm" />
                  <span className="text-sm leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  },
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
