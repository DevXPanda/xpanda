import React from 'react';
import { FileText, Award } from 'lucide-react';

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
          
          {/* Education Section */}
          <div className="md:w-1/3">
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
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      B.Tech in Computer Science and Engineering
                    </h4>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">United University, Prayagraj</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2022 - 2026</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building AI-driven systems combining machine learning and full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h3>
              </div>

              {/* AI & ML */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI & Machine Learning</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Python, NumPy, Pandas, Scikit-learn</li>
                    <li>• TensorFlow, PyTorch</li>
                    <li>• NLP, RAG, Transformers</li>
                    <li>• LLMs & Vector Databases (FAISS, Pinecone)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Deep Learning</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• CNN, RNN, LSTM</li>
                    <li>• Attention Models</li>
                    <li>• Vision Transformers (ViT)</li>
                    <li>• Image & Text Modeling</li>
                  </ul>
                </div>
              </div>

              {/* GenAI + Full-stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Generative AI</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Prompt Engineering</li>
                    <li>• Chatbot Development</li>
                    <li>• LangChain, RAG Pipelines</li>
                    <li>• Image Generation Models</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• React.js & Vite.js</li>
                    <li>• JavaScript / TypeScript</li>
                    <li>• HTML5, CSS3, TailwindCSS</li>
                  </ul>
                </div>
              </div>

              {/* Backend + DB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Node.js & Express</li>
                    <li>• RESTful APIs</li>
                    <li>• Python Backends</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Databases</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• PostgreSQL, MongoDB</li>
                    <li>• Convex, MySQL</li>
                    <li>• Vector DBs (FAISS, Pinecone)</li>
                  </ul>
                </div>
              </div>

              {/* Tools + Blockchain */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tools & Technologies</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Git & Version Control</li>
                    <li>• Docker & Containerization</li>
                    <li>• CI/CD Pipelines</li>
                    <li>• Cloud Workflows</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Blockchain & Web3</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Solidity & Smart Contracts</li>
                    <li>• Web3.js & Ethers.js</li>
                    <li>• IPFS & Decentralized Storage</li>
                    <li>• DApp Architecture</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
