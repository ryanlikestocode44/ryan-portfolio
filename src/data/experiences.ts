import labtiImg from "@/assets/img/experience/labti.webp";
import type { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
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