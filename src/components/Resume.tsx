import React from 'react';
import { Download, FileText, Bookmark, Award } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A summary of my experience, education, and qualifications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            {/* <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <Bookmark size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>

              <div className="border-l-2 border-blue-600 dark:border-blue-500 pl-4 ml-4 space-y-8">
                <div>
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -ml-[1.4rem]"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Full Stack Developer</h4>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">Freelancer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2023 - Present</p>
                  <p className="text-gray-600 dark:text-gray-400">Developing and maintaining web applications using React, Node.js, and various modern technologies.</p>
                </div>
                
                <div>
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -ml-[1.4rem]"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer Intern</h4>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">Tech Solutions Ltd.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2022 - 2023</p>
                  <p className="text-gray-600 dark:text-gray-400">Worked on front-end development using React and assisted in backend development with Node.js.</p>
                </div>
              </div>
            </div> */}

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>

              <div className="border-l-2 border-blue-600 dark:border-blue-500 pl-4 ml-4 space-y-8">
                <div>
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -ml-[1.4rem]"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science and Engineering</h4>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">United University, Prayagraj</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2026 - 2026</p>
                  <p className="text-gray-600 dark:text-gray-400">Specializing in FullStack Development and Blockchain Technology.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      React & Vitejs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      JavaScript/TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      HTML5 & CSS3
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Tailwind CSS
                    </li>
                    {/* <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Next.js
                    </li> */}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Node.js & Express
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      MongoDB & Supabase
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      RESTful APIs
                    </li>
                    {/* <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      GraphQL
                    </li> */}
                    {/* <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Python & Django
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Blockchain & Web3</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Solidity & Smart Contracts
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Web3.js & Ethers.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      IPFS & Decentralized Storage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      DApp Architecture
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Ethereum & EVM
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tools & Technologies</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Git & Version Control
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Docker & Kubernetes
                    </li>
                    {/* <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      AWS & Cloud Services
                    </li> */}
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      CI/CD Pipelines
                    </li>
                    {/* <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      Testing & Debugging
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Download Resume</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Get a copy of my full resume with detailed information about my experience and skills.</p>
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume (PDF)
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;