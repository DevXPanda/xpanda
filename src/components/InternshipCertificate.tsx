import React from "react";
import { Award, ExternalLink } from "lucide-react";

const InternshipCertificate: React.FC = () => {
  
  // 👉 Add your Google Drive direct link here:
  const certificateURL = "https://drive.google.com/file/d/1BYQWWKGx_8IgFZ_51Io1qbhiyu1xftzx/view?usp=sharing";

  // 👉 Link to open certificate (normal drive link)
  const certificateLink = "https://drive.google.com/file/d/1BYQWWKGx_8IgFZ_51Io1qbhiyu1xftzx/view?usp=sharing";

  return (
    <section id="internship_certificate" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Internship Certificate
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Verified certificate of my internship as a Software Development Engineer (SDE).
          </p>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          
          {/* Title Row */}
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-blue-600" size={28} />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              SDE Internship – Bluestock Fintech
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Completed internship as a <strong>Software Development Engineer (SDE)</strong> 
            from <b>1 June 2025</b> to <b>30 July 2025</b> at Bluestock Fintech.
          </p>

          {/* Certificate Preview */}
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 mb-6">
            <img
              src={certificateImage}
              alt="Internship Certificate"
              className="w-full"
            />
          </div>

          {/* View Button */}
          <div className="text-center">
            <a
              href={certificateView}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white 
              font-medium rounded-lg shadow hover:bg-blue-700 transition-all"
            >
              <ExternalLink size={18} />
              View Certificate
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
export default InternshipCertificate;
