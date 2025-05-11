import { Project, Skill, SocialLink } from '../types';
import { 
  Boxes, 
  FileCode, 
  Server, 
  Zap, 
  Paintbrush, 
  FileCode2, 
  Container, 
  Scale, 
  Database, 
  Code, 
  Cloud, 
  Network,
  Github,
  Linkedin,
  Mail,
  Instagram
} from 'lucide-react';

import decentralizedStorageImg from '../assets/Decentralized-Storage.png';
import doctorAppointmentImg from '../assets/doctor-appointment-booking-app-development.webp';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Decentralized File Storage',
    description: 'A blockchain-based file storage solution that uses IPFS and smart contracts to securely store and share files in a decentralized manner.',
    image: decentralizedStorageImg,
    tags: ['Crypto.js', 'IPFS', 'React', 'Web3.js', 'Supabase' , 'Clerk Authentication'],
    github: 'https://github.com/DevXPanda/DecFileStorage.git',
    link: 'https://dvault.netlify.app/'
  },
  {
    id: 2,
    title: 'Doctor Appointment System',
    description: 'A full-stack application for managing doctor appointments, featuring real-time availability updates, patient history management, and secure authentication.',
    image: doctorAppointmentImg,
    tags: ['React', 'Node.js', 'Supabase', 'Express', 'JWT'],
    github: 'https://github.com/DevXPanda/Doctor-Appoitment.git',
    link: 'https://ajclinic.netlify.app/'
  },
  {
    id: 3,
    title: 'Ginni Cafe',
    description: 'A modern restaurant management system with online ordering capabilities, inventory tracking, and customer loyalty program features.',
    image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Supabase', 'Tailwind CSS', 'Stripe', 'Vite.js'],
    github: 'https://github.com/DevXPanda/Food-Shop',
    link: 'https://ginniscafe.netlify.app'
  },
];

export const skills: Skill[] = [
  { id: 1, name: 'React', icon: Boxes, category: 'frontend' },
  { id: 2, name: 'JavaScript', icon: FileCode, category: 'frontend' },
  { id: 3, name: 'Node.js', icon: Server, category: 'backend' },
  { id: 4, name: 'Vite.js', icon: Zap, category: 'frontend' },
  { id: 5, name: 'Tailwind CSS', icon: Paintbrush, category: 'frontend' },
  { id: 6, name: 'Solidity', icon: FileCode2, category: 'blockchain' },
  { id: 7, name: 'Docker', icon: Container, category: 'devops' },
  { id: 8, name: 'Kubernetes', icon: Scale, category: 'devops' },
  { id: 9, name: 'MongoDB', icon: Database, category: 'database' },
  { id: 10, name: 'Supabase', icon: Database, category: 'database' },
  { id: 11, name: 'C++', icon: Code, category: 'backend' },
  { id: 12, name: 'Pinata', icon: Cloud, category: 'blockchain' },
  { id: 13, name: 'IPFS', icon: Network, category: 'blockchain' },
  { id: 14, name: 'MySQL', icon: Database, category: 'database' },
  { id: 15, name: 'Web3', icon: Database, category: 'blockchain' },
];

export const socialLinks: SocialLink[] = [
  { id: 1, name: 'GitHub', icon: Github, url: 'https://github.com/DevXPanda' },
  { id: 2, name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/satyam-pandey-b5818824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { id: 3, name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/satyammm.19?igsh=bGN1cjhkc2Robmtt' }
];
