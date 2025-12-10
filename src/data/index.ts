// import { Project, Skill, SocialLink } from '../types';
// import { 
//   Boxes, 
//   FileCode, 
//   Server, 
//   Zap, 
//   Paintbrush, 
//   FileCode2, 
//   Container, 
//   Scale, 
//   Database, 
//   Code, 
//   Cloud, 
//   Network,
//   Github,
//   Linkedin,
//   Mail,
//   Instagram
// } from 'lucide-react';

// import decentralizedStorageImg from '../assets/Decentralized-Storage.png';
// import doctorAppointmentImg from '../assets/doctor-appointment-booking-app-development.webp';

// export const projects: Project[] = [
//   {
//     id: 1,
//     title: 'Decentralized File Storage',
//     description: 'A blockchain-based file storage solution that uses IPFS and smart contracts to securely store and share files in a decentralized manner.',
//     image: decentralizedStorageImg,
//     tags: ['Crypto.js', 'IPFS', 'React', 'Web3.js', 'Supabase' , 'Clerk Authentication'],
//     github: 'https://github.com/DevXPanda/DecFileStorage.git',
//     link: 'https://dvault.netlify.app/'
//   },
//   {
//     id: 2,
//     title: 'Doctor Appointment System',
//     description: 'A full-stack application for managing doctor appointments, featuring real-time availability updates, patient history management, and secure authentication.',
//     image: doctorAppointmentImg,
//     tags: ['React', 'Node.js', 'Supabase', 'Express', 'JWT'],
//     github: 'https://github.com/DevXPanda/Doctor-Appoitment.git',
//     link: 'https://ajclinic.netlify.app/'
//   },
//   {
//     id: 3,
//     title: 'Ginni Cafe',
//     description: 'A modern restaurant management system with online ordering capabilities, inventory tracking, and customer loyalty program features.',
//     image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     tags: ['React', 'Supabase', 'Tailwind CSS', 'Stripe', 'Vite.js'],
//     github: 'https://github.com/DevXPanda/Food-Shop',
//     link: 'https://ginniscafe.netlify.app'
//   },
// ];

// export const skills: Skill[] = [
//   { id: 1, name: 'React', icon: Boxes, category: 'frontend' },
//   { id: 2, name: 'JavaScript', icon: FileCode, category: 'frontend' },
//   { id: 3, name: 'Node.js', icon: Server, category: 'backend' },
//   { id: 4, name: 'Vite.js', icon: Zap, category: 'frontend' },
//   { id: 5, name: 'Tailwind CSS', icon: Paintbrush, category: 'frontend' },
//   { id: 6, name: 'Solidity', icon: FileCode2, category: 'blockchain' },
//   { id: 7, name: 'Docker', icon: Container, category: 'devops' },
//   { id: 8, name: 'Kubernetes', icon: Scale, category: 'devops' },
//   { id: 9, name: 'MongoDB', icon: Database, category: 'database' },
//   { id: 10, name: 'Supabase', icon: Database, category: 'database' },
//   { id: 11, name: 'C++', icon: Code, category: 'backend' },
//   { id: 12, name: 'Pinata', icon: Cloud, category: 'blockchain' },
//   { id: 13, name: 'IPFS', icon: Network, category: 'blockchain' },
//   { id: 14, name: 'MySQL', icon: Database, category: 'database' },
//   { id: 15, name: 'Web3', icon: Database, category: 'blockchain' },
// ];

// export const socialLinks: SocialLink[] = [
//   { id: 1, name: 'GitHub', icon: Github, url: 'https://github.com/DevXPanda' },
//   { id: 2, name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/satyam-pandey-b5818824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
//   { id: 3, name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/satyammm.19?igsh=bGN1cjhkc2Robmtt' }
// ];


import { Project, Skill, SocialLink } from '../types';
import { 
  Boxes, 
  FileCode, 
  Server, 
  Zap, 
  Paintbrush,
  Database, 
  Code, 
  Cloud, 
  Network,
  BrainCircuit,
  Sigma,
  Atom,
  LineChart,
  Github,
  Linkedin,
  Instagram
} from 'lucide-react';

import decentralizedStorageImg from '../assets/Decentralized-Storage.png';
import doctorAppointmentImg from '../assets/doctor-appointment-booking-app-development.webp';


// -------------------- PROJECTS --------------------

export const projects: Project[] = [
  {
    id: 1,
    title: 'Decentralized File Storage',
    description:
      'A secure decentralized storage system built using IPFS, Supabase, encryption, and smart contracts to store and share files safely.',
    image: decentralizedStorageImg,
    tags: ['IPFS', 'React', 'Supabase', 'Web3.js', 'Encryption', 'Clerk Auth'],
    github: 'https://github.com/DevXPanda/DecFileStorage.git',
    link: 'https://dvault.netlify.app/'
  },
  {
    id: 2,
    title: 'Doctor Appointment System',
    description:
      'A full-stack doctor appointment management app with authentication, real-time booking, patient records, and notifications.',
    image: doctorAppointmentImg,
    tags: ['React', 'Node.js', 'Supabase', 'Express', 'JWT'],
    github: 'https://github.com/DevXPanda/Doctor-Appoitment.git',
    link: 'https://ajclinic.netlify.app/'
  },
  {
    id: 3,
    title: 'Ginni Cafe',
    description:
      'A modern online cafe management system with ordering, menu management, and delivery assignment.',
    image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Supabase', 'Tailwind CSS', 'Vite.js'],
    github: 'https://github.com/DevXPanda/Food-Shop',
    link: 'https://ginniscafe.netlify.app'
  },
  {
    id: 3,
    title: 'PandaAI',
    description:
      'A multi-agent AI assistant capable of handling tasks like answering queries, generating content, automating workflows, and managing user interactions.',
    image: 'https://res.cloudinary.com/dyd911kmh/image/upload/v1689325496/datarhys_an_absurdist_oil_painting_of_an_artificially_intellige_a23fb2c4_c77f_4552_b348_460455ee31aa_d94c99ad7a.png',
    tags: ['Python','GeminieAPI','Convex','LangChain','LLMs','Vector DB','RAG','Multi-Agent System','React.js','Tailwind CSS'],
    github: 'https://github.com/DevXPanda/Food-Shop',
    link: 'https://ginniscafe.netlify.app'
  }
];


// -------------------- SKILLS (UPDATED FULL AI + ML + FULL STACK) --------------------

export const skills: Skill[] = [

  // ---------------- AI / ML ----------------
  { id: 1, name: 'Python', icon: FileCode, category: 'aiml' },
  { id: 2, name: 'NumPy', icon: Sigma, category: 'aiml' },
  { id: 3, name: 'Pandas', icon: Boxes, category: 'aiml' },
  { id: 4, name: 'TensorFlow', icon: BrainCircuit, category: 'aiml' },
  { id: 5, name: 'PyTorch', icon: Atom, category: 'aiml' },
  { id: 6, name: 'LLMs & Transformers', icon: LineChart, category: 'aiml' },
  { id: 7, name: 'RAG Pipelines', icon: Cloud, category: 'aiml' },
  { id: 8, name: 'Vector Databases (FAISS, Pinecone)', icon: Database, category: 'aiml' },

  // ---------------- FRONTEND ----------------
  { id: 9,  name: 'React', icon: Boxes, category: 'frontend' },
  { id: 10, name: 'JavaScript', icon: FileCode, category: 'frontend' },
  { id: 11, name: 'Vite.js', icon: Zap, category: 'frontend' },
  { id: 12, name: 'Tailwind CSS', icon: Paintbrush, category: 'frontend' },

  // ---------------- BACKEND ----------------
  { id: 13, name: 'Node.js', icon: Server, category: 'backend' },
  { id: 14, name: 'Express.js', icon: Server, category: 'backend' },
  { id: 15, name: 'REST APIs', icon: Code, category: 'backend' },

  // ---------------- DATABASES ----------------
  { id: 16, name: 'PostgreSQL', icon: Database, category: 'database' },
  { id: 17, name: 'MongoDB', icon: Database, category: 'database' },
  { id: 18, name: 'MySQL', icon: Database, category: 'database' },
  { id: 19, name: 'Convex', icon: Database, category: 'database' },

  // ---------------- DEVOPS / CLOUD ----------------
  { id: 20, name: 'Docker', icon: Cloud, category: 'devops' },
  { id: 21, name: 'CI/CD Pipelines', icon: Cloud, category: 'devops' },
  { id: 22, name: 'Cloud Workflows', icon: Cloud, category: 'devops' },

  // ---------------- BLOCKCHAIN ----------------
  { id: 23, name: 'Solidity', icon: Code, category: 'blockchain' },
  { id: 24, name: 'Web3.js / Ethers.js', icon: Network, category: 'blockchain' },
  { id: 25, name: 'IPFS', icon: Network, category: 'blockchain' }
];


// -------------------- SOCIAL LINKS --------------------

export const socialLinks: SocialLink[] = [
  { id: 1, name: 'GitHub', icon: Github, url: 'https://github.com/DevXPanda' },
  { id: 2, name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/satyam-pandey-b5818824b' },
  { id: 3, name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/satyammm.19' }
];
