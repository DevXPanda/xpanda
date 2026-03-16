// import React, { useState, useEffect } from 'react';
// import { Menu, X, Moon, Sun } from 'lucide-react';

// interface NavLink {
//   name: string;
//   href: string;
// }

// const navLinks: NavLink[] = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Resume', href: '#resume' },
//   { name: 'Contact', href: '#contact' },
// ];

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
//           : 'bg-transparent py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <a 
//             href="#home" 
//              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
//             style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}
//           >
//             DevXPanda
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
//                 onClick={closeMenu}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label="Toggle dark mode"
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </nav>

//           {/* Mobile Navigation Toggle */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label="Toggle dark mode"
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="container mx-auto px-4 py-4 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
//           <nav className="flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="py-2 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
//                 onClick={closeMenu}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

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
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

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
        isScrolled ? 'bg-black/60 border-white/10' : 'bg-transparent border-transparent'
      }`}>
        <a href="#home" className="flex items-center gap-3">
          <div className="relative glow">
            <img 
              src={pandaLogo} 
              alt="XPanda" 
              className="w-10 h-10 rounded-full border-2 border-blue-500/50 object-cover" 
            />
          </div>
          <span className="text-xl font-bold text-gradient tracking-tight">XPanda</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-white/10"></div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl glass hover:bg-white/10 transition-all text-blue-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl glass text-blue-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl glass text-gray-400"
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
        <div className="glass rounded-2xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all"
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

