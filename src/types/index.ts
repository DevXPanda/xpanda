export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: any; // Using any for Lucide icons to avoid type conflicts
  category: 'frontend' | 'backend' | 'blockchain' | 'devops' | 'database' | 'aiml' | 'genai';
}

export interface SocialLink {
  id: number;
  name: string;
  icon: any;
  url: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  link: string;
}

export interface Achievement {
  id: number;
  description: string;
}
