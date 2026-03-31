import smaImg from "@/assets/img/education/sman02.jpeg";
import universityImg from "@/assets/img/education/gundar-univ.jpg";
import type { EducationItem } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: 1,
    institution: "SMA Negeri 02 Tambun Utara",
    degree: "IPA",
    period: "2018 - 2021",
    type: "school", // No GPA
    description:
      "Juara 2 Kejuaraan Provinsi Karatedo Indonesia • Peserta Olimpiade Sains Nasional Fisika • Juara 3 Kejuaraan Provinsi Karatedo Indonesia • Aktif Mengikuti Ekstrakurikuler Karate",
    image: smaImg,
    side: "right",
  },
  {
    id: 2,
    institution: "Universitas Gunadarma",
    degree: "Sarjana Informatika",
    period: "2021 - 2025",
    gpa: "3.87/4.00", // GPA shown below institution
    type: "university",
    description:
      "Penulisan Ilmiah: Aplikasi Jejaring Unggah Postingan Teks Sederhana Berbasis Web Menggunakan Tech Stack PERN • Project Capstone Kampus Merdeka: AirHopper Pemesanan Tiket Pesawat • Tugas Akhir: Implementasi Ekstraksi Informasi pada Resume Analyzer Berbasis Web.",
    image: universityImg,
    side: "left",
  },
  // Add bootcamp here later
];
