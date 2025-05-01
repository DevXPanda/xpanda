import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '../data';
import heroImg from '../assets/1700974615743.jpg';

const Hero: React.FC = () => {
  // Helper function to get the correct icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return Github;
      case 'Linkedin':
        return Linkedin;
      case 'Twitter':
        return Twitter;
      case 'Mail':
        return Mail;
      default:
        return Mail;
    }
  };

  return (
    <section id="home" className="min-h-[60vh] flex items-center relative overflow-hidden pt-8 pb-8">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-cyan-50 to-transparent dark:from-cyan-950/20 dark:to-transparent opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center">
            {/* <p className="text-blue-600 dark:text-blue-400 font-medium mb-6 mt-4 sm:mt-6 sm:mb-6 text-base sm:text-lg md:text-xl leading-tight text-left">
              Hi, I'm
            </p> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1 text-gray-900 dark:text-gray-100">
              Satyam Pandey
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Full Stack Developer
              <span className="text-blue-600 dark:text-blue-400"> | </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Blockchain & Web3
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
              A Full Stack Developer passionate about Blockchain and Web3, with experience in building decentralized applications and scalable systems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-0">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transform transition hover:-translate-y-1"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
              >
                Contact Me
              </a>
            </div>
            
            {/* <div className="mt-8 flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = getIconComponent(link.icon);
                return (
                  <a 
                    key={link.id}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div> */}
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src={heroImg} 
                alt="Satyam Pandey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-500 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;