import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-20 md:mb-28"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
