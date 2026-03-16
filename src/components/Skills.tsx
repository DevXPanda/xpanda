import React, { useState } from 'react';
import { skills } from '../data';
import { Cpu, Scan, Zap, Layers, Terminal } from 'lucide-react';

type SkillCategory =
  | 'all'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'aiml';

const categoryConfig: Record<Exclude<SkillCategory, 'all'>, { label: string; color: string; bg: string; border: string }> = {
  frontend: { 
    label: 'Frontend', 
    color: 'text-cyan-500', 
    bg: 'bg-cyan-500/10', 
    border: 'border-cyan-500/20' 
  },
  backend: { 
    label: 'Backend', 
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10', 
    border: 'border-blue-500/20' 
  },
  database: { 
    label: 'Database', 
    color: 'text-purple-500', 
    bg: 'bg-purple-500/10', 
    border: 'border-purple-500/20' 
  },
  aiml: { 
    label: 'AI / ML / DL', 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-500/10', 
    border: 'border-emerald-500/20' 
  },
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-transparent transition-colors duration-300">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Cpu size={12} />
            <span>Capability Interface</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-none mb-8">
            Technical <span className="text-gradient">Arsenal</span>
          </h3>
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <Scan size={14} className="animate-pulse" />
            <span>Scanning core competencies...</span>
          </div>
        </div>

        {/* Floating Command Bar */}
        <div className="flex justify-center mb-20">
          <div className="glass p-2 rounded-2xl border-black/5 dark:border-white/10 flex flex-wrap justify-center gap-1 shadow-2xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${activeCategory === 'all'
                ? 'bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg shadow-blue-500/20'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
            >
              <Layers size={14} />
              All Stack
            </button>
            {Object.entries(categoryConfig).map(([category, config]) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as SkillCategory)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${activeCategory === category
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg shadow-blue-500/20'
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                {category === 'frontend' && <Zap size={14} />}
                {category === 'aiml' && <Terminal size={14} />}
                {config.label}
              </button>
            ))}
          </div>
        </div>

        {/* Arsenal Grid - badge style */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const config = (categoryConfig as any)[skill.category];

            return (
              <div
                key={skill.id}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className={`flex h-8 w-8 items-center justify-center rounded-xl icon-float-slow ${config.bg} ${config.color}`}>
                  <Icon size={16} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    {config.label}
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
