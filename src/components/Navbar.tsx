import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import pandaLogo from '../assets/pandaLogo.jpeg';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${
        isScrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div className={`glass rounded-2xl px-6 py-3 flex justify-between items-center transition-all ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/60 border-black/5 dark:border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}>
        <a href="#home" className="flex items-center gap-3">
          <div className="relative glow">
            <img 
              src={pandaLogo} 
              alt="XPanda" 
              className="w-10 h-10 rounded-full border-2 border-blue-500/50 object-cover" 
            />
          </div>
          <span className="text-xl font-extrabold text-gradient tracking-tighter">XPanda</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-bold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10"></div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl glass hover:bg-white/50 dark:hover:bg-white/10 transition-all text-blue-600 dark:text-blue-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl glass text-blue-600 dark:text-blue-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl glass text-gray-600 dark:text-gray-400"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        }`}
      >
        <div className="glass rounded-2xl p-4 flex flex-col gap-2 bg-white/90 dark:bg-black/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

