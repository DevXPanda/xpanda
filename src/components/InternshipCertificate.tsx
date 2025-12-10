import React from "react";
import { Award, ExternalLink } from "lucide-react";

const InternshipCertificate: React.FC = () => {
  
  // 👉 Add your Google Drive direct link here:
  const certificateURL = "https://drive.google.com/file/d/1BYQWWKGx_8IgFZ_51Io1qbhiyu1xftzx/view?usp=drive_link";

  // 👉 Link to open certificate (normal drive link)
  const certificateLink = "https://drive.google.com/file/d/1BYQWWKGx_8IgFZ_51Io1qbhiyu1xftzx/view?usp=drive_link";

  return (
    <section
      id="certificate"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text mb-4">
            Internship Certificate
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Verified certificate of my internship as a Software Development Engineer (SDE) at Bluestock Fintech.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl 
          border border-gray-200/20 dark:border-gray-700/40 rounded-2xl p-6 shadow-lg">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 
            opacity-0 hover:opacity-100 blur-xl transition-all duration-300"></div>

            <div className="relative z-10">
              
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-600 dark:text-blue-400" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  SDE Internship – Bluestock Fintech
                </h3>
              </div>

              {/* Duration */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Completed internship as a <strong>Software Development Engineer (SDE)</strong> 
                from <b>1 June 2025</b> to <b>30 July 2025</b>.
              </p>

              {/* Certificate Image From Google Drive */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300/30 dark:border-gray-600/40">
                <img 
                  src={certificateURL}
                  alt="Bluestock Internship Certificate" 
                  className="w-full object-cover"
                />
              </div>

              {/* Button */}
              <div className="text-center mt-6">
                <a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white 
                  hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-500/30"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View Certificate
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternshipCertificate;
