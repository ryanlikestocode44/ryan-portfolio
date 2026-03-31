import statuskuImg from "@/assets/img/projects/statusku.png";
import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "StatusKu: Jejaring Posting Teks Sederhana",
    image: statuskuImg,
    description:
      "StatusKu adalah sebuah jejaring sosial sederhana yang memungkinkan pengguna untuk membuat dan berbagi posting teks. Dengan menggunakan teknologi modern seperti React, Tailwind CSS, dan Express.js, StatusKu menyediakan pengalaman pengguna yang cepat, responsif, dan mudah digunakan. Pengguna dapat dengan mudah membuat akun, membuat posting baru, dan berinteraksi dengan posting orang lain melalui fitur komentar.",
    technologies: ["React", "Node.js", "Tailwind", "Express", "PostgreSQL"],
    github:
      "https://github.com/ryanlikestocode44/jejaring-posting-teks-sederhana",
    live: "https://statusku-api.vercel.app/",
  },
  {
    id: 2,
    title: "AirHopper: Pemesanan Tiket Pesawat",
    image: "",
    description:
      "AirHopper merupakan website pemesanan tiket pesawat online yang dirancang untuk memberikan pengalaman perjalanan yang mudah dan nyaman. Dengan dukungan teknologi modern seperti React, Chakra UI, dan Vite, kami menyediakan layanan frontend yang cepat, aman, dan dapat diandalkan.",
    technologies: ["React", "Node.js", "Tailwind", "Express", "PostgreSQL"],
    github:
      "https://github.com/ryanlikestocode44/jejaring-posting-teks-sederhana",
    live: "https://airhopper.padek.tech/",
  },
  {
    id: 3,
    title: "ResumeInsight: Resume Analyzer Berbasis Web",
    image: "",
    description:
      "ResumeInsight adalah aplikasi web yang menganalisis resume pengguna untuk memberikan wawasan tentang kekuatan dan kelemahan mereka. Dengan menggunakan teknologi seperti React, Node.js, dan Python, ResumeInsight mengekstraksi informasi penting dari resume dan menyajikannya dalam format yang mudah dipahami, membantu pengguna meningkatkan peluang mereka dalam pencarian kerja.",
    technologies: [
      "React",
      "Node.js",
      "Chart.js",
      "Tailwind",
      "Shadcn UI",
      "Express",
      "Python",
      "Regular Expressions",
      "Flask",
    ],
    github: "https://github.com/ryanlikestocode44/resume-analyzer-fe",
    live: "https://resume-analyzer-fe.vercel.app/",
  },
  // ... more projects
];
