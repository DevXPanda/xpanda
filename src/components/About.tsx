import React from 'react';
import { BookOpen, Award, Terminal, Code2, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Coding workspace"
                  className="rounded-xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block animate-bounce shadow-2xl border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Experience</p>
                    <p className="text-lg font-bold">Full Stack AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-base font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Discovery</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Passionate about <span className="text-gradient">Intelligent Systems</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-10">
              <p>
                I’m <span className="text-white font-medium">Satyam Pandey</span>, a Full Stack & AI Engineer with hands-on experience building scalable web applications and AI-powered systems. 
                I specialize in developing production-ready applications, REST APIs, and intelligent automation workflows.
              </p>
              <p>
                I have a strong foundation in <span className="text-white font-medium">Machine Learning, Deep Learning, and NLP</span>. 
                My expertise lies in integrating LLMs, vector databases, and RAG pipelines into modern web architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Education</h4>
                  <p className="text-sm text-gray-400">B.Tech in Computer Science</p>
                </div>
              </div>

              <div className="glass-card flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Impact</h4>
                  <p className="text-sm text-gray-400">15+ AI & Web Projects</p>
                </div>
              </div>
              
              <div className="glass-card flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 shrink-0">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Coding</h4>
                  <p className="text-sm text-gray-400">250+ LeetCode Solved</p>
                </div>
              </div>

              <div className="glass-card flex items-start gap-4 border-blue-500/30 bg-blue-500/5">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-300 shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-300 mb-1">Specialty</h4>
                  <p className="text-sm text-blue-300/70">Agentic Workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
