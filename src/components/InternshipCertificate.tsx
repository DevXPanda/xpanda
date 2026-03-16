import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const InternshipCertificate: React.FC = () => {
  const certificateLink = "https://drive.google.com/file/d/1BYQWWKGx_8IgFZ_51Io1qbhiyu1xftzx/view?usp=sharing";

  return (
    <section id="certificate" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.02)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">Recognition</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-tight">
            Internship <span className="text-gradient">Certificate</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mt-6 font-light">
            Verified certificate of my contribution as a <span className="text-gray-900 dark:text-white font-medium">Software Development Engineer (SDE)</span> at Bluestock Fintech.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card relative overflow-hidden p-10 border-black/5 dark:border-white/10 shadow-2xl group transition-all duration-500 hover:border-blue-500/30">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-3xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-xl group-hover:scale-110 transition-transform">
                    <Award size={40} />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 uppercase tracking-tight leading-tight">
                    SDE Internship – Bluestock Fintech
                  </h3>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
                    <span className="text-[10px] font-black py-1 px-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full uppercase tracking-widest border border-blue-500/20">
                      June 2025 – July 2025
                    </span>
                    <span className="text-gray-400 text-[10px] font-black tracking-widest uppercase">Verified Recognition</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed mb-8">
                    During this tenure, I focused on building scalable financial software solutions, 
                    optimizing backend architectures, and collaborating with a cross-functional engineering team.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <a
                      href={certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-all shadow-xl group/btn"
                    >
                      <ExternalLink size={20} className="mr-3 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Icon Decoration */}
            <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
              <Award size={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipCertificate;
