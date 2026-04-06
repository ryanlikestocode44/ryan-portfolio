import { motion } from "framer-motion";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experienceData } from "@/data/experiences";
import type { FC } from "react";

const Experience: FC = () => {
  return (
    <section id="experience" className="py-24 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12 md:mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-20 md:space-y-28">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
