import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import type { FC } from "react";
import labtiImg from "@/assets/img/experience/labti.webp";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  technologies: string[];
  description: string;
  achievements: string[];
  image: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Laboratorium Informatika Universitas Gunadarma",
    position: "Asisten",
    period: "Maret 2023 - April 2024",
    technologies: ["Python", "Java", "C++", "Linux", "OS"],
    description:
      "Membimbing 30+ mahasiswa tingkat pertama hingga tingkat dua dalam praktikum pemrograman berbasis kurikulum perkuliahan. Mengajarkan konsep pemrograman dasar hingga lanjutan, termasuk logika pemrograman dan debugging.Mengevaluasi dan memberikan penilaian pada 30+ laporan akhir praktikum, serta memastikan pemahaman materi melalui diskusi danbimbingan teknis.",
    achievements: [
      "Membantu memberikan pemahaman mendalam tentang konsep pemrograman kepada mahasiswa",
      "Mengembangkan materi praktikum yang efektif",
      "Membantu penilaian dan mentoring mahasiswa untuk meningkatkan kualitas laporan praktikum",
    ],
    image: labtiImg,
  },
];

const Experience: FC = () => {
  return (
    <section id="experience" className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-24 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-20">
          {experienceData.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-12"
            >
              {/* Company Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-2xl p-4 flex items-center justify-center overflow-hidden border-4 border-white/20">
                  <img
                    src={experience.image}
                    alt={experience.company}
                    className="w-36 h-36 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {experience.company}
                      </h3>
                      <p className="text-2xl text-indigo-400 font-semibold">
                        {experience.position}
                      </p>
                      <p className="text-slate-400 mt-1">{experience.period}</p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      {experience.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 text-slate-300"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
