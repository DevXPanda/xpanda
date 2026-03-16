import React, { useState } from 'react';
import { skills } from '../data';

type SkillCategory = 
  | 'all' 
  | 'frontend' 
  | 'backend' 
  | 'blockchain' 
  | 'devops' 
  | 'database'
  | 'aiml';

const categoryLabels: Record<Exclude<SkillCategory, 'all'>, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  blockchain: 'Blockchain',
  devops: 'DevOps',
  database: 'Database',
  aiml: 'AI / ML / DL',
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Stack</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h3>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-2xl text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-white text-black scale-105 shadow-lg shadow-blue-500/10'
                : 'glass text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            All
          </button>
          
          {Object.entries(categoryLabels).map(([category, label]) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as SkillCategory)}
              className={`px-6 py-2 rounded-2xl text-sm font-bold transition-all ${
                activeCategory === category
                  ? 'bg-white text-black scale-105 shadow-lg shadow-blue-500/10'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="glass-card group flex flex-col items-center justify-center text-center hover:-translate-y-2 !p-8 border-white/5"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-500/5 text-blue-400 group-hover:text-white group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                  {skill.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
