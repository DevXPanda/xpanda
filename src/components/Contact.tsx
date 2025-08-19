import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { socialLinks } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Contact Information Card */}
            <div className="flex-1 flex flex-col">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col h-full justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">satyakumarmpandey4567@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400">+91 9936968762</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">Prayagraj, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect With Me Card */}
            <div className="flex-1 flex flex-col">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col h-full justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors shadow"
                        aria-label={link.name}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-auto">
                  Feel free to connect with me on social media. I'm always open to new opportunities, collaborations, or just a friendly chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;