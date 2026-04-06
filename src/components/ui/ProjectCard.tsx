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
      className="project-card"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#c9fbff]/90 dark:from-[#040F0F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-5 lg:p-6">
        {/* Title */}
        <motion.h3
          whileHover={{ scale: 1.01 }}
          className="text-lg md:text-xl font-bold text-[#040f0f] dark:text-[#C9FBFF] mb-2 leading-tight line-clamp-2 group-hover:text-[#57737a] group-hover:dark:text-[#85BDBF] transition-colors duration-200" // Smaller text
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-[#040f0f]/80 dark:text-[#C9FBFF]/80 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
          {" "}
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="project-tech-badge">
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
              className="project-github-icon"
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
                className="project-live-icon"
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
