import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-24 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-500"
  >
    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4">{project.description}</p>
      <span className="text-indigo-400 font-semibold mb-4 block">
        {project.tech.join(" • ")}
      </span>
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-500 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-500 transition-colors duration-300">
          <FaArrowRight />
        </a>
      </div>
    </div>
  </motion.div>
);

export default Projects;
