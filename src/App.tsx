import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InternshipCertificate from './components/InternshipCertificate';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'DevXPanda';
    
    // Implement smooth scrolling for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href') as string;
        const offsetTop = document.querySelector(href)?.getBoundingClientRect().top ?? 0;
        const offsetPosition = offsetTop + window.pageYOffset - 80; // Adjusted for header height

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* --- GLOBAL PREMIUM BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Liquid Blobs */}
        <div className="absolute top-0 -left-1/4 w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-1/4 w-[50%] h-[50%] bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/5 dark:bg-indigo-600/5 rounded-full blur-[140px] animate-pulse"></div>
        
        {/* Technical Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 dark:opacity-100"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <InternshipCertificate />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
