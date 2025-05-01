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
  icon: string;
  category: 'frontend' | 'backend' | 'blockchain' | 'devops' | 'database';
}

export interface SocialLink {
  id: number;
  name: string;
  icon: string;
  url: string;
}