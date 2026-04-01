import { motion } from "framer-motion";
import Timeline from "@/components/ui/Timeline";
import EducationCard from "@/components/ui/EducationCard";
import { educationData } from "@/data/educations";
import type { FC } from "react";

const Education: FC = () => {
  return (
    <section id="education" className="py-20 px-4 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Education Journey
        </motion.h2>

        <Timeline>
          {educationData.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
              side={education.side}
            />
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;
