import { motion } from "framer-motion";
import ExperienceCard from "@/components/ui/ExperienceCard";
import labtiImg from "@/assets/img/experience/labti.webp";
import type { FC } from "react";

const experienceData = [
  {
    id: 1,
    company: "Laboratorium Informatika Universitas Gunadarma",
    position: "Asisten",
    period: "Maret 2023 - April 2024",
    technologies: ["Python", "Java", "C++", "Linux", "OS"],
    description:
      "Membimbing 30+ mahasiswa tingkat pertama hingga tingkat dua dalam praktikum pemrograman berbasis kurikulum perkuliahan. Mengajarkan konsep pemrograman dasar hingga lanjutan, termasuk logika pemrograman dan debugging. Mengevaluasi dan memberikan penilaian pada 30+ laporan akhir praktikum, serta memastikan pemahaman materi melalui diskusi dan bimbingan teknis.",
    achievements: [
      "Membantu memberikan pemahaman mendalam tentang konsep pemrograman kepada mahasiswa",
      "Mengembangkan materi praktikum yang efektif",
      "Membantu penilaian dan mentoring mahasiswa untuk meningkatkan kualitas laporan praktikum",
    ],
    image: labtiImg,
  },
  // Add more experiences here
];

const Experience: FC = () => {
  return (
    <section id="experience" className="py-24 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 md:mb-28 bg-gradient-to-r from-[#C2FCF7] via-[#85BDBF] to-[#57737A] bg-clip-text text-transparent"
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
