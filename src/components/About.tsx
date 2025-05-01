import React from 'react';
import { BookOpen, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Get to know more about my journey, experiences, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm Satyam Pandey, a Full Stack Developer with a passion for blockchain technologies and Web3. 
              With a strong foundation in both frontend and backend development, I specialize in building 
              robust, scalable applications that leverage the power of decentralized technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in tech began with traditional web development, but I quickly became fascinated 
              with the potential of blockchain to revolutionize how we build and interact with applications. 
              This led me to dive deep into Solidity, Web3.js, and other blockchain technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">B.Tech in Computer Science</p>
              </div>
              
              {/* <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Briefcase className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">5+ Years in Development</p>
              </div> */}
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Award className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Projects</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">15+ Completed Projects</p>
              </div>
            </div>

            <a 
              href="#projects" 
              className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Check out my work
              <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="rounded-lg bg-white dark:bg-gray-800 shadow-xl p-2 w-full max-w-md transform rotate-3 transition-transform hover:rotate-0">
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Coding workspace"
                className="rounded w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;