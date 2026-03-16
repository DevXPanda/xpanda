import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { experiences, education } from '../data';

const Resume: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Journal</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional <span className="text-gradient">Timeline</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <Briefcase size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">Experience</h4>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                  {/* Icon dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/50 bg-gray-950 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/20 z-10 absolute left-0 md:left-1/2 md:-ml-5">
                    <Briefcase size={16} />
                  </div>
                  
                  {/* Content card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-3xl hover:border-white/20 transition-all duration-500">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h5 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{exp.role}</h5>
                      <span className="text-[10px] font-bold py-1 px-3 glass rounded-full text-blue-400 border-blue-500/30 shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-4 uppercase tracking-widest">
                      <span className="text-gray-300 font-bold">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-400 text-sm font-light leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mt-1.5 shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">Education</h4>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-8 text-teal-500/20 group-hover:text-teal-500/40 transition-colors pointer-events-none">
                    <GraduationCap size={120} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold py-1 px-3 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 uppercase tracking-widest">
                        {edu.period}
                      </span>
                      <span className="text-gray-600 font-bold uppercase tracking-widest text-[10px]">• {edu.grade}</span>
                    </div>
                    
                    <h5 className="text-xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-teal-400 transition-colors">
                      {edu.degree}
                    </h5>
                    
                    <div className="flex items-center gap-3 text-gray-400 mb-6 font-medium">
                      <span className="text-gray-300">{edu.institution}</span>
                      <span className="text-gray-700">|</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm">
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
