export interface Project {
  id: number;
  title: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  description: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  image: string;
  side: 'left' | 'right';
}

export interface Skill {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export type { SkillCardProps } from "@/components/ui/SkillCard";

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

export type SectionName = 'home' | 'education' | 'skills' | 'experience' | 'projects' | 'hobbies' | 'contact';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export interface NavbarProps {
  activeSection: SectionName;
}