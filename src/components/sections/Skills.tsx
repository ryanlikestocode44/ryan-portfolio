import { motion } from "framer-motion";
import SkillCard from "@/components/ui/SkillCard";
import { skill_icons } from "@/assets/icons";
import type { Skill } from "@/components/ui/SkillCard";
import type { FC } from "react";

const skillsData: Skill[] = [
  // Row 1: Frontend
  { name: "HTML5", icon: skill_icons.html },
  { name: "CSS3", icon: skill_icons.css },
  { name: "JavaScript", icon: skill_icons.js },
  { name: "React.js", icon: skill_icons.reactjs },
  { name: "Tailwind", icon: skill_icons.tailwind },
  { name: "Bootstrap", icon: skill_icons.bootstrap },

  // Row 2: Backend
  { name: "Node.js", icon: skill_icons.nodejs },
  { name: "Express.js", icon: skill_icons.expressjs },

  // Row 3: Design & Tools
  { name: "Figma", icon: skill_icons.figma },
  { name: "Photoshop", icon: skill_icons.photoshop },
  { name: "Canva", icon: skill_icons.canva },
  { name: "MS Office", icon: skill_icons.msoffice },
];

const Skills: FC = () => {
  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-[#c2fcf7] to-[#85bdbf] bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-slate-400 mb-20 max-w-2xl mx-auto"
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
            <h3 className="text-2xl font-bold text-center text-white tracking-tight">
              Frontend
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 mx-auto gap-3">
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
            <h3 className="text-2xl font-bold text-center text-white tracking-tight">
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
            <h3 className="text-2xl font-bold text-center text-white tracking-tight">
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
