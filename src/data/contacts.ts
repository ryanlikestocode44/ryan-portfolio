import type { SocialLink, ContactItem } from "@/types";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export const socialsData: SocialLink[] = [
  {
      id: 1,
      label: "GitHub",
      url: "https://github.com/ryanlikestocode44",
      icon: FaGithub,
    },
  {
      id: 2,
      label: "LinkedIn",
      url: "https://linkedin.com/in/ryan-nicholas-purba",
      icon: FaLinkedin,
    },
  {
      id: 3,
      label: "Instagram",
      url: "https://instagram.com/ryan_nicholas.44",
      icon: FaInstagram,
    },
  ];

export const contactsData: ContactItem[] = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "ryannichpurba44@gmail.com",
    href: "mailto:ryannichpurba44@gmail.com",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+62 878-4433-5057",
    href: "https://wa.me/6287844335057",
    whatsapp: true,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+62 878-4433-5057",
    href: "tel:+6287844335057",
  },
  { icon: FaMapMarkerAlt, label: "Location", value: "Bekasi, Jawa Barat, Indonesia" },
];
