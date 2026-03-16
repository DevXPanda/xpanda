import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Code } from 'lucide-react';
import { projects } from '../data';
import { Project as ProjectType } from '../types';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-base font-bold text-blue-400 uppercase tracking-[0.3em] mb-4 text-center md:text-left">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-center md:text-left">
              Featured <span className="text-gradient">Innovations</span>
            </h3>
          </div>
          <p className="text-gray-400 text-lg max-w-sm text-center md:text-right font-light">
            A selection of my recent works in AI, Blockchain, and Full Stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-64 sm:h-80">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute top-6 right-6 flex gap-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-white/20 text-white transition-all transform hover:-translate-y-1"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-white/20 text-white transition-all transform hover:-translate-y-1"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <span 
                      key={index}
                      className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="text-gray-600 group-hover:text-blue-400 transition-colors" size={24} />
                </h4>
                
                <p className="text-gray-400 font-light leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                >
                  <Code size={16} />
                  Technical Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setActiveProject(null)}>
          <div 
            className="glass rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-96">
              <img 
                src={activeProject.image} 
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-3 rounded-full glass hover:bg-white/20 text-white transition-all"
              >
                <ArrowUpRight className="rotate-45" size={24} />
              </button>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">{activeProject.title}</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="md:col-span-2">
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Overview</h4>
                  <p className="text-gray-400 text-lg font-light leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-all"
                  >
                    View Source
                  </a>
                )}
                
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 rounded-2xl glass hover:bg-white/10 text-white font-bold hover:scale-105 transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;