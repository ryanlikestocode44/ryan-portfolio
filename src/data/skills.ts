import { skill_icons } from "@/assets/icons";
import type { SkillItem } from "@/types";

export const skillsData: SkillItem[] = [
  // Row 1: Frontend
  { name: "HTML5", icon: skill_icons.html, category: "frontend" },
  { name: "CSS3", icon: skill_icons.css, category: "frontend" },
  { name: "JavaScript", icon: skill_icons.js, category: "frontend" },
  { name: "React.js", icon: skill_icons.reactjs, category: "frontend" },
  { name: "Tailwind", icon: skill_icons.tailwind, category: "frontend" },
  { name: "Bootstrap", icon: skill_icons.bootstrap, category: "frontend" },

  // Row 2: Backend
  { name: "Node.js", icon: skill_icons.nodejs, category: "backend" },
  { name: "Express.js", icon: skill_icons.expressjs, category: "backend" },

  // Row 3: Design & Tools
  { name: "Figma", icon: skill_icons.figma, category: "design" },
  { name: "Photoshop", icon: skill_icons.photoshop, category: "design" },
  { name: "Canva", icon: skill_icons.canva, category: "design" },
  { name: "MS Office", icon: skill_icons.msoffice, category: "tools" },
];
