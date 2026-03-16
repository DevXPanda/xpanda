import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Award, Sparkles } from 'lucide-react';
import { experiences, education } from '../data';

const Resume: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-transparent transition-colors duration-500">
      {/* Background effects managed globally in App.tsx */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.5em] mb-4">Milestones</h2>
          <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-none">
            Professional <span className="text-gradient">Narrative</span>
          </h3>
          <p className="mt-8 text-gray-500 dark:text-gray-400 text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            A journey through my academic foundation and professional evolution in the 
            <span className="text-gray-900 dark:text-white font-semibold"> AI & Full Stack ecosystem</span>.
          </p>
        </div>

        <div className="space-y-32">
          {/* Experience Section - Dynamic Flow */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-16 px-4 md:px-0">
              <div className="w-16 h-16 rounded-3xl bg-blue-600 dark:bg-blue-500/10 flex items-center justify-center text-white dark:text-blue-400 shadow-2xl shadow-blue-500/20 border border-blue-500/20">
                <Briefcase size={32} />
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Experience</h4>
                <p className="text-sm font-bold text-blue-600/60 dark:text-blue-400/60 uppercase tracking-widest">Growth & Impact</p>
              </div>
            </div>

            <div className="grid gap-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative">
                  {/* Decorative Elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                  
                  <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border-black/5 dark:border-white/5 group-hover:border-blue-500/20 transition-all duration-500 shadow-2xl overflow-hidden">
                    {/* Background Sparkle Icon */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                    <Sparkles size={120} className="absolute -top-10 -right-10 text-blue-600/5 dark:text-blue-500/10 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] border border-blue-500/20">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full glass text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/5 dark:border-white/5">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>

                        <h5 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                          {exp.role}
                        </h5>
                        <p className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-8 flex items-center gap-2">
                          at <span className="text-gray-900 dark:text-white uppercase tracking-wider">{exp.company}</span>
                        </p>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                          {exp.description.map((desc, i) => (
                            <div key={i} className="flex items-start gap-4 group/item">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.5)] group-hover/item:scale-150 transition-transform"></div>
                              <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section - High Impact Cards */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-16 px-4 md:px-0">
              <div className="w-16 h-16 rounded-3xl bg-teal-600 dark:bg-teal-500/10 flex items-center justify-center text-white dark:text-teal-400 shadow-2xl shadow-teal-500/20 border border-teal-500/20">
                <GraduationCap size={32} />
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Education</h4>
                <p className="text-sm font-bold text-teal-600/60 dark:text-teal-400/60 uppercase tracking-widest">Academic Excellence</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="group relative flex flex-col h-full">
                  <div className="absolute -inset-4 bg-gradient-to-b from-teal-600/10 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                  
                  <div className="relative glass h-full p-8 rounded-[2.5rem] border-black/5 dark:border-white/5 group-hover:border-teal-500/20 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 text-teal-600/5 dark:text-teal-500/10 rotate-12 group-hover:scale-110 transition-transform duration-700">
                      <GraduationCap size={160} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-[10px] font-black py-1.5 px-4 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full border border-teal-500/20 uppercase tracking-widest">
                          {edu.period}
                        </span>
                        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                          <Award size={16} className="group-hover:animate-pulse" />
                          <span className="text-xs font-bold uppercase tracking-widest">{edu.grade}</span>
                        </div>
                      </div>

                      <h5 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors uppercase tracking-tighter">
                        {edu.degree}
                      </h5>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-6 text-xs font-bold uppercase tracking-widest">
                        <span>{edu.institution}</span>
                      </div>
                    </div>

                    <p className="relative z-10 text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
