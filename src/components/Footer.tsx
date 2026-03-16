import { socialLinks } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white pt-24 pb-12 transition-colors duration-300 border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent transform tracking-tighter leading-none">
              Satyam Pandey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm font-light leading-relaxed">
              A <span className="text-gray-900 dark:text-white font-medium">Full Stack & AI Engineer</span> passionate about building intelligent systems and scalable digital ecosystems.
            </p>
            <div className="flex space-x-4">
              {socialLinks
                .filter(link => ['github', 'linkedin', 'instagram'].includes(link.name.toLowerCase()))
                .map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg border border-black/5 dark:border-white/5 relative z-10"
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#home" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-1 h-6 bg-teal-600 dark:bg-teal-400 rounded-full"></span>
              Connect
            </h3>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-4 font-light leading-relaxed">
              <p className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Prayagraj, Uttar Pradesh, India
              </p>
              <p className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                satyakumarmpandey4567@gmail.com
              </p>
              <p className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                +91 9936968762
              </p>
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light">
            &copy; {currentYear} <span className="text-gray-900 dark:text-white font-bold">Satyam Pandey</span>. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm font-light">
            Made By <Heart size={14} className="text-red-500 animate-pulse" /> Satyam Pandey
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;