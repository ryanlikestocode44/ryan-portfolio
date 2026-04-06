import { motion } from "framer-motion";
import SkillCard from "@/components/ui/SkillCard";
import { skillsData } from "@/data/skills";
import type { FC } from "react";

const Skills: FC = () => {
  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12 md:mb-16"
        >
          Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-[#040f0f]/60 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Technologies I work with daily to build amazing digital experiences
        </motion.p>

        {/* 3 ROWS BY CATEGORY */}
        <div className="space-y-12 md:space-y-16">
          {/* ROW 1: Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-center text-[#040f0f] dark:text-[#edfeff] tracking-tight">
              Frontend
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 mx-auto gap-6">
              {skillsData.slice(0, 6).map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* ROW 2: Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-center text-[#040f0f] dark:text-[#edfeff] tracking-tight">
              Backend
            </h3>
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
              {skillsData.slice(6, 8).map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 6} />
              ))}
            </div>
          </motion.div>

          {/* ROW 3: Design & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-center text-[#040f0f] dark:text-[#edfeff]  tracking-tight">
              Design & Tools
            </h3>
            <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
              {skillsData.slice(8).map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 8} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
