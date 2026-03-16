import React, { useState } from 'react';
import { projects } from '../data';
import { ExternalLink, Boxes, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const activeProject = projects.find((p) => p.id === activeProjectId) || null;

  return (
    <section id="projects" className="py-24 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Boxes size={12} />
            <span>Project Slider</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-none mb-4">
            Features <span className="text-gradient">Innovations</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Swipe through my featured full‑stack and AI projects, with live demos and source code.
          </p>
        </div>

        {/* Horizontal slider */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/70 z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/70 z-10" />

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-1 scroll-smooth">
            {projects.map((project) => (
              <article
                key={project.id}
                className="snap-center shrink-0 w-[320px] sm:w-[360px] md:w-[400px] glass rounded-3xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-black/30 overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-black/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full bg-emerald-500/25 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-100 text-[10px] font-semibold tracking-wide uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4 h-full">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed min-h-[56px] md:min-h-[64px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1 max-w-[60%] overflow-hidden whitespace-nowrap">
                      {project.tags.slice(3, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-[9px] text-gray-600 dark:text-gray-300 uppercase tracking-widest whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <button
                          type="button"
                          onClick={() => setActiveProjectId(project.id)}
                          className="ml-1 text-[9px] font-semibold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 underline underline-offset-4 whitespace-nowrap"
                        >
                          See full details
                        </button>
                      )}
                    </div>

                    <div className="flex gap-2 shrink-0">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100 text-[11px] font-semibold hover:bg-emerald-500/30 dark:hover:bg-emerald-500/30 transition-colors"
                        >
                          <ExternalLink size={13} />
                          Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-100 text-[11px] font-semibold hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
                        >
                          <Github size={13} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
            <div className="max-w-2xl w-full rounded-3xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h4>
                <button
                  type="button"
                  onClick={() => setActiveProjectId(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-sm font-semibold"
                >
                  Close
                </button>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {activeProject.description}
                </p>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">
                    Tech stack used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-[11px] text-gray-700 dark:text-gray-100 uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-end gap-2 pt-2">
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 text-white text-[11px] font-semibold hover:bg-emerald-600 transition-colors"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 text-white text-[11px] font-semibold hover:bg-black transition-colors"
                    >
                      <Github size={13} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
