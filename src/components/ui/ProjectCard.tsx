import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import type { ProjectCardProps } from "@/types";
import type { FC } from "react";

const ProjectCard: FC<ProjectCardProps> = React.memo(({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -6,
        scale: 1.015,
        boxShadow: "0 15px 35px -10px rgba(197, 251, 255, 0.2)",
      }}
      className="group relative overflow-hidden rounded-3xl bg-[#040F0F]/60 backdrop-blur-xl border border-[#57737A]/40 hover:border-[#C2FCF7]/60 hover:bg-[#040F0F]/80 shadow-2xl hover:shadow-[#85BDBF]/30 transition-all duration-500 cursor-pointer"
    >
      {/* IMAGE - TOP (Hero Style) */}
      <div className="relative h-32 md:h-30 lg:h-44 overflow-hidden rounded-t-3xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040F0F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-5 lg:p-6">
        {/* Title */}
        <motion.h3
          whileHover={{ scale: 1.01 }}
          className="text-lg md:text-xl font-bold text-[#C9FBFF] mb-2 leading-tight line-clamp-2 group-hover:text-[#85BDBF] transition-colors duration-200" // Smaller text
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-[#C9FBFF]/80 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
          {" "}
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-[#C2FCF7]/20 text-[#85BDBF] text-[10px] md:text-xs font-medium rounded-lg border border-[#85BDBF]/40 hover:bg-[#C2FCF7]/40 transition-all duration-200 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Icons - Bottom */}
        <div className="flex items-center pt-4 border-t border-[#57737A]/30">
          <div className="flex items-center justify-between w-full gap-3">
            {/* GitHub */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl bg-[#C2FCF7]/20 backdrop-blur-sm border border-[#C2FCF7]/40 hover:border-[#85BDBF]/60 hover:bg-[#C2FCF7]/40 hover:shadow-[#85BDBF]/30 shadow-sm transition-all duration-300 flex items-center justify-center text-[#85BDBF] hover:text-[#040F0F]"
              aria-label={`GitHub - ${project.title}`}
            >
              <FaGithub className="text-lg" />
            </motion.a>

            {/* Live Demo */}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, x: 2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#C2FCF7]/30 to-[#85BDBF]/30 border border-[#C2FCF7]/50 hover:border-[#85BDBF]/70 hover:from-[#C2FCF7]/50 hover:to-[#85BDBF]/50 hover:shadow-[#85BDBF]/40 shadow-sm transition-all duration-300 flex items-center justify-center text-[#C9FBFF]"
                aria-label={`Live Demo - ${project.title}`}
              >
                <FaArrowRight className="text-lg" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
