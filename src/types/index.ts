import type { ReactNode } from "react";

// Theme Context
export interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Section Names
export type SectionName =
  | "home"
  | "education"
  | "skills"
  | "experience"
  | "projects"
  | "hobbies"
  | "contact";

// Update ButtonProps dulu
export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export interface NavbarProps {
  activeSection: SectionName;
}

export interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
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

export interface TimelineProps {
  children: ReactNode;
  lineColor?: string;
  className?: string;
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

export interface HobbyItem {
  title: string;
  image: string;
  color: string;
}

export interface HobbyCardProps {
  hobby: HobbyItem;
  index: number;
}

export interface SocialLink {
  id: number;
  label: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ContactItem {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  value: string;
  href?: string;
  whatsapp?: boolean;
}

export interface ContactCardProps {
  item: ContactItem;
  index: number;
}
