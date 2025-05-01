import React from 'react';
import { Heart, Github, Linkedin, Instagram } from 'lucide-react';
import { socialLinks } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Helper function to get the correct icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return Github;
      case 'linkedin':
        return Linkedin;
      case 'instagram':
        return Instagram;
      default:
        return Github;
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              Satyam Pandey
            </h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              A Full Stack Developer passionate about Blockchain and Web3, building innovative digital solutions.
            </p>
            <div className="flex space-x-3">
              {/* Only show GitHub, LinkedIn, and Instagram */}
              {socialLinks
                .filter(link => ['github', 'linkedin', 'instagram'].includes(link.name.toLowerCase()))
                .map((link) => {
                  const IconComponent = getIconComponent(link.name);
                  return (
                    <a 
                      key={link.id}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      aria-label={link.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#resume" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Resume
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Prayagraj, Uttar Pradesh, India</p>
              <p>Satyakumarmpandey4567@gmail.com</p>
              <p>+91 9936968762</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-2 sm:mb-0">
            &copy; {currentYear} Satyam Pandey. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;