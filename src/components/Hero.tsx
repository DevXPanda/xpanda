import React from 'react';
import { Search, Bot } from 'lucide-react';
import { socialLinks } from '../data';
import profileImage from '../assets/1700974615743.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-transparent">
      {/* Background effects managed globally in App.tsx */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Bot size={16} />
              AI & Full Stack Engineer
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter text-gray-900 dark:text-white leading-[1.05]">
              I'm <span className="text-gradient">Satyam Pandey</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl font-normal leading-relaxed">
              Full Stack & AI Engineer specializing in building scalable web applications and
              <span className="text-gray-900 dark:text-white font-semibold"> intelligent automation workflows</span>.
              Bridging the gap between robust code and advanced AI. And also Avialable for Freelancing and Remote Work...
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#projects"
                className="group px-10 py-5 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black font-extrabold text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:scale-105 shadow-2xl shadow-blue-500/10"
              >
                Explore My Work
                <Search size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-10 py-5 rounded-2xl glass hover:bg-gray-100 dark:hover:bg-white/10 font-extrabold text-sm uppercase tracking-widest transition-all text-gray-700 dark:text-white"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 relative z-20">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl glass border-black/5 dark:border-white/5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all hover:-translate-y-1 shadow-lg relative z-30"
                    aria-label={link.name}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:w-2/5 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[3rem] rotate-6 opacity-10 dark:opacity-20 blur-2xl pointer-events-none"></div>
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-black/5 dark:border-white/10 glass rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Satyam Pandey"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50 text-gray-500 dark:text-gray-400 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 dark:from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
