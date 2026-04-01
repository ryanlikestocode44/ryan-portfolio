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
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 w-full lg:w-44 h-44 lg:h-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C2FCF7]/30 hover:border-[#85BDBF]/60 hover:shadow-[#85BDBF]/25 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#040F0F]/50 to-[#57737A]/20 backdrop-blur-sm"
        >
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
            className="bg-[#040F0F]/40 backdrop-blur-xl p-6 lg:p-8 rounded-2xl border border-[#57737A]/40 hover:border-[#C2FCF7]/50 hover:bg-[#040F0F]/60 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-2 pb-4 border-b border-[#57737A]/20">
              <div>
                <h3
                  id={`experience-${experience.id}-title`}
                  className="text-2xl lg:text-3xl font-bold text-[#C9FBFF] leading-tight mb-1"
                >
                  {experience.company}
                </h3>
                <p className="text-xl text-[#85BDBF] font-semibold">
                  {experience.position}
                </p>
                <p className="text-[#57737A] text-sm mt-1 font-medium">
                  {experience.period}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {experience.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-1 bg-[#C2FCF7]/20 text-[#85BDBF] text-sm font-medium rounded-lg border border-[#85BDBF]/40 hover:bg-[#C2FCF7]/30 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-[#C9FBFF]/90 text-base lg:text-lg leading-relaxed mb-8">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="space-y-3 pt-4 border-t border-[#57737A]/20">
              {experience.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-[#C9FBFF]/90"
                >
                  <div className="w-2 h-2 mt-2 bg-[#85BDBF] rounded-full flex-shrink-0 shadow-sm" />
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
