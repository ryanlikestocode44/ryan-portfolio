export interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

export type SectionName =
  | "home"
  | "education"
  | "skills"
  | "experience"
  | "projects"
  | "hobbies"
  | "contact";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export interface NavbarProps {
  activeSection: SectionName;
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa?: string; // Optional for school
  type: "school" | "university" | "bootcamp";
  description: string;
  image: string;
  side: "left" | "right";
}

export interface EducationCardProps {
  education: EducationItem;
  index: number;
  side: "left" | "right";
}

export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  technologies: string[];
  description: string;
  achievements: string[];
  image: string;
}

export interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export interface SkillItem {
  name: string;
  icon: string;
  category?: "frontend" | "backend" | "design" | "tools";
}

export interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

export interface ProjectItem {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string; // Optional
}

export interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}
