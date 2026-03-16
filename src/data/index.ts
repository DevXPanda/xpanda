import { Project, Skill, SocialLink, Experience, Education, Certificate, Achievement, TechnicalArsenalLink } from '../types';
import {
  Boxes,
  Server,
  Zap,
  Paintbrush,
  Database,
  Code,
  Network,
  BrainCircuit,
  Sigma,
  Atom,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Cpu,
  Bot,
  Layers,
  MessageSquare
} from 'lucide-react';

// Images
import decentralizedStorageImg from '../assets/Decentralized-Storage.png';
import lookfameImg from '../assets/lookfame-preview.png';
import ulbSystemImg from '../assets/ulb-system-preview.png';
import doctorAppImg from '../assets/doctor-appointment-preview.png';

// -------------------- PROJECTS --------------------

export const projects: Project[] = [
  {
    id: 1,
    title: 'AJ Clinic - AI-Powered Doctor Appointment System',
    description:
      'A sophisticated medical booking platform featuring a dedicated doctor appointment UI and an integrated AI chatbot for patient assistance.',
    image: doctorAppImg,
    tags: ['React', 'Node.js', 'AI Chatbot', 'Full Stack', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/DevXPanda/Doctor-Appoitment',
    link: 'https://ajclinic.netlify.app/'
  },
  {
    id: 2,
    title: 'ULB System - Government Management Portal',
    description:
      'A comprehensive management system for Urban Local Bodies (ULB), streamlining administrative workflows, data tracking, and governance operations.',
    image: ulbSystemImg,
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'TailwindCSS', 'Management'],
    github: 'https://github.com/DevXPanda/HTCMS',
    link: 'https://ulbsystemm.vercel.app/'
  },
  {
    id: 3,
    title: 'Lookfame - Premium E-Commerce Platform',
    description:
      'A full-stack, scalable e-commerce solution featuring real-time inventory management, secure payments, and a premium shopping experience.',
    image: lookfameImg,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe', 'TailwindCSS'],
    github: 'https://github.com/DevXPanda/LookFME.git',
    link: 'https://lookfame.com'
  },
  {
    id: 4,
    title: 'Personal AI Assistant (Multi-Agent System)',
    description:
      'Built an AI Assistant capable of handling tasks such as text generation, reminders, email drafts, coding help, and web search. Used LLM orchestration, memory modules, and tool-based agent execution.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python', 'LangChain', 'OpenAI API', 'Vector DB', 'ReactJS', 'Convex', 'TailwindCSS'],
    github: 'https://github.com/DevXPanda/Personal-AI-Assistant',
    // link: 'https://dvault.netlify.app/'
  },
  {
    id: 5,
    title: 'Decentralized File Storage System',
    description:
      'Developed a secure file storage platform with end-to-end encryption using blockchain and IPFS technologies.',
    image: decentralizedStorageImg,
    tags: ['React', 'Vite', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'Pinata', 'IPFS'],
    github: 'https://github.com/DevXPanda/DecFileStorage.git',
    link: 'https://dvault.netlify.app/'
  }
];

// -------------------- TECHNICAL ARSENAL (PROJECT LINKS) --------------------
// Add your project links here – shown in the Technical Arsenal section before Skills.

export const technicalArsenalLinks: TechnicalArsenalLink[] = [
  { id: 1, name: 'AJ Clinic - Doctor Appointment', link: 'https://ajclinic.netlify.app/' },
  { id: 2, name: 'ULB System - Government Portal', link: 'https://ulbsystemm.vercel.app/' },
  { id: 3, name: 'Lookfame - E-Commerce', link: 'https://lookfame.com' },
  { id: 4, name: 'Personal AI Assistant', link: 'https://github.com/DevXPanda/Personal-AI-Assistant' },
  { id: 5, name: 'Decentralized File Storage', link: 'https://dvault.netlify.app/' }
];


// -------------------- SKILLS (RESUME ALIGNED) --------------------

export const skills: Skill[] = [
  // ---------------- AI & ML ----------------
  { id: 1, name: 'Python', icon: Code, category: 'aiml' },
  { id: 2, name: 'NumPy', icon: Sigma, category: 'aiml' },
  { id: 3, name: 'Pandas', icon: Boxes, category: 'aiml' },
  { id: 4, name: 'Scikit-learn', icon: BrainCircuit, category: 'aiml' },
  { id: 5, name: 'TensorFlow', icon: BrainCircuit, category: 'aiml' },
  { id: 6, name: 'PyTorch', icon: Atom, category: 'aiml' },
  { id: 7, name: 'NLP & RAG', icon: MessageSquare, category: 'aiml' },
  { id: 8, name: 'Vector DB (FAISS, Pinecone)', icon: Database, category: 'aiml' },

  // ---------------- DEEP LEARNING ----------------
  { id: 9, name: 'CNN', icon: Cpu, category: 'aiml' },
  { id: 10, name: 'RNN/LSTM', icon: Cpu, category: 'aiml' },
  { id: 11, name: 'Attention Models', icon: Layers, category: 'aiml' },
  { id: 12, name: 'Vision Transformers', icon: Layers, category: 'aiml' },

  // ---------------- GEN AI ----------------
  { id: 13, name: 'Prompt Engineering', icon: Bot, category: 'aiml' },
  { id: 14, name: 'Chatbot Development', icon: MessageSquare, category: 'aiml' },
  { id: 15, name: 'Image Generation', icon: Paintbrush, category: 'aiml' },
  { id: 16, name: 'LangChain', icon: Network, category: 'aiml' },

  // ---------------- FULL STACK & DATABASE ----------------
  { id: 17, name: 'React.js', icon: Boxes, category: 'frontend' },
  { id: 18, name: 'Node.js', icon: Server, category: 'backend' },
  { id: 19, name: 'Next.js', icon: Zap, category: 'frontend' },
  { id: 20, name: 'PostgreSQL', icon: Database, category: 'database' },
  { id: 21, name: 'MongoDB', icon: Database, category: 'database' },
  { id: 22, name: 'Convex', icon: Database, category: 'database' }
];


// -------------------- RESUME SECTIONS --------------------

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'AI Web Developer Intern',
    company: 'Bizwoke Nova',
    location: 'Onsite, Noida, Uttar Pradesh, India',
    period: 'Dec 2024 – Present',
    description: [
      'Worked on AI-powered web applications using React.js and Node.js.',
      'Integrated LLM-based features such as chatbot automation and intelligent workflows.',
      'Developed backend APIs and connected AI services using REST architecture.',
      'Collaborated with the team on feature development, debugging, and deployment.',
      'Improved performance and scalability of AI modules.'
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: 'United University, Prayagraj',
    degree: 'B.tech CSE',
    location: 'Prayagraj, Uttar Pradesh, India',
    period: 'Aug 2022 - May 2026',
    grade: '7.9 CGPA',
    description: 'Specializing in Artificial Intelligence and Full Stack Development.'
  },
  {
    id: 2,
    institution: 'Kendriya Vidyalaya',
    degree: 'Senior Secondary (PCM)',
    location: 'Ballia, Uttar Pradesh, India',
    period: 'April 2020 - March 2021',
    grade: '81%',
    description: 'Focus on PCM and foundational computer science.'
  },
  {
    id: 3,
    institution: 'Kendriya Vidyalaya',
    degree: 'High School',
    location: 'Ballia, Uttar Pradesh, India',
    period: 'April 2018 - March 2019',
    grade: '80.6%',
    description: 'Distinction in Mathematics and Science.'
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'OCI Certified AI Foundations Associate',
    organization: 'Oracle',
    date: '2025',
    link: '#'
  },
  {
    id: 2,
    title: 'Introduction to Artificial Intelligence',
    organization: 'Coursera',
    date: '2024',
    link: '#'
  },
  {
    id: 3,
    title: 'Introduction to Machine Learning',
    organization: 'Coursera',
    date: '2023',
    link: '#'
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    description: 'Solved 250+ problems on LeetCode'
  },
  {
    id: 2,
    description: 'Active GitHub contributor with multiple production-ready full-stack and AI/ML projects'
  }
];


// -------------------- SOCIAL LINKS --------------------

export const socialLinks: SocialLink[] = [
  { id: 1, name: 'GitHub', icon: Github, url: 'https://github.com/DevXPanda' },
  { id: 2, name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/satyam-pandey-b5818824b' },
  { id: 3, name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/satyammm.19/' },
  { id: 4, name: 'Email', icon: Mail, url: 'mailto:Satyamkumarpandey4567@gmail.com' }
];

// Footer content
export const footerContent = {
  name: "Satyam Pandey",
  email: "Satyamkumarpandey4567@gmail.com",
  phone: "+91 9936968762"
};
