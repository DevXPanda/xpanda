import React from 'react';
import { BookOpen, Award, Terminal, Code2, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Centered Header */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-base font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">Discovery</h2>
          <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-gray-900 dark:text-white leading-[0.85]">
            Passionate about <span className="text-gradient">Intelligent Systems</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 text-left">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-10 dark:opacity-25 group-hover:opacity-30 dark:group-hover:opacity-50 transition duration-1000 pointer-events-none"></div>
              <div className="relative glass-card overflow-hidden !p-0 border-black/5 dark:border-white/10 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Coding workspace"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block animate-bounce shadow-2xl border-black/5 dark:border-white/10 bg-white/90 dark:bg-black/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest">Experience</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">Full Stack AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-xl font-medium leading-relaxed mb-10">
              <p>
                I’m <span className="text-gray-950 dark:text-white font-black">Satyam Pandey</span>, a Full Stack & AI Engineer with hands-on experience building scalable web applications and AI-powered systems. 
                I specialize in developing production-ready applications, REST APIs, and intelligent automation workflows.
              </p>
              <p>
                I have a strong foundation in <span className="text-gray-950 dark:text-white font-black">Machine Learning, Deep Learning, and NLP</span>. 
                My expertise lies in integrating LLMs, vector databases, and RAG pipelines into modern web architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card flex items-start gap-4 border-black/5 dark:border-white/5 p-6 hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1 uppercase text-xs tracking-widest">Education</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">B.Tech in Computer Science</p>
                </div>
              </div>

              <div className="glass-card flex items-start gap-4 border-black/5 dark:border-white/5 p-6 hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1 uppercase text-xs tracking-widest">Impact</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">15+ AI & Web Projects</p>
                </div>
              </div>
              
              <div className="glass-card flex items-start gap-4 border-black/5 dark:border-white/5 p-6 hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Code2 size={22} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1 uppercase text-xs tracking-widest">Coding</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">250+ LeetCode Solved</p>
                </div>
              </div>

              <div className="glass-card flex items-start gap-4 border-blue-500/20 dark:border-blue-500/30 bg-blue-500/5 p-6 hover:bg-blue-500/10 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-300 shrink-0">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h4 className="font-black text-blue-600 dark:text-blue-300 mb-1 uppercase text-xs tracking-widest">Specialty</h4>
                  <p className="text-sm text-blue-600/70 dark:text-blue-300/70 font-medium tracking-tight">Agentic Workflows</p>
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
