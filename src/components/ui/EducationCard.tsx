import React from "react";
import { motion } from "framer-motion";
import type { EducationCardProps } from "@/types";
import type { FC } from "react";

const EducationCard: FC<EducationCardProps> = React.memo(
  ({ education, index, side }) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          x: side === "right" ? -80 : 80,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`flex items-start justify-center gap-4 md:gap-8 ${
          side === "right" ? "" : "flex-row-reverse"
        }`}
        role="article"
      >
        {/* Content */}
        <div
          className={`${side === "right" ? "md:pr-3 text-right" : "md:pl-3 text-left"} flex-1 max-w-md`}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="education-card"
          >
            {/* Institution + GPA */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-2">
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
                {education.institution}
              </h3>
              {education.gpa && education.type === "university" && (
                <span className="education-gpa">
                  {education.gpa}
                </span>
              )}
            </div>

            {/* Degree & Period */}
            <div className="mb-4">
              <p className="text-[#57737a] dark:text-cyan-300 font-semibold text-lg">
                {education.degree}
              </p>
              <p className="text-[#040f0f] dark:text-slate-400 text-sm mt-1">
                {education.period}
              </p>
            </div>

            {/* Description */}
            <p className="text-[#040f0f] dark:text-slate-300 leading-relaxed text-sm md:text-base">
              {education.description}
            </p>

            {/* Type Badge */}
            <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
    education.type === "school"
      ? "bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-500/30"
      : education.type === "university"
        ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30"
        : "bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-500/30"
  }`}
              >
                {education.type === "school"
                  ? "High School"
                  : education.type === "university"
                    ? "University"
                    : "Bootcamp"}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Compact Image */}
        <div
          className={`${side === "right" ? "md:pl-2" : "md:pr-2"} flex-shrink-0`}
        >
          <motion.div whileHover={{ scale: 1.08 }} className="education-img">
            <img
              src={education.image}
              alt={education.institution}
              className="w-full h-full object-cover rounded-xl brightness-110 hover:brightness-120 transition-all duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    );
  },
);

EducationCard.displayName = "EducationCard";

export default EducationCard;
