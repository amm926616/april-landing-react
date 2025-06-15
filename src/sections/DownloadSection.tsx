import React from "react";
import { motion } from "framer-motion";

interface Platform {
  name: string;
  icon: React.ReactNode;
  downloadUrl: string;
  systemRequirements: string[];
  size: string;
  version: string;
}

const platforms: Platform[] = [
  {
    name: "Windows",
    icon: <svg className="w-8 h-8 text-[var(--crimson)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
    downloadUrl: "#",
    systemRequirements: [
      "Windows 10 or later",
      "64-bit version",
      "4GB RAM or more",
      "500MB free disk space"
    ],
    size: "50 MB",
    version: "2.1.0"
  },
  {
    name: "macOS",
    icon: <svg className="w-8 h-8 text-[var(--crimson)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>,
    downloadUrl: "#",
    systemRequirements: [
      "macOS 10.15 or later",
      "64-bit version",
      "4GB RAM or more",
      "500MB free disk space"
    ],
    size: "55 MB",
    version: "2.1.0"
  },
  {
    name: "Linux",
    icon: <svg className="w-8 h-8 text-[var(--crimson)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    downloadUrl: "#",
    systemRequirements: [
      "Ubuntu 20.04 or later",
      "64-bit version",
      "4GB RAM or more",
      "500MB free disk space"
    ],
    size: "45 MB",
    version: "2.1.0"
  }
];

interface DownloadSectionProps {
  id?: string;
  className?: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={className + "py-20 bg-[var(--raven)]/90"}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--crimson)] mb-4">
            Download April Music Player
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started with our music player on your preferred platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[var(--raven)]/80 p-8 rounded-lg hover:bg-[var(--raven)]/70 transition-colors"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[var(--raven)]/50 p-4 rounded-full">
                  {platform.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--crimson)] mb-4">
                {platform.name}
              </h3>
              <p className="text-gray-400 mb-6">
                Version {platform.version} • {platform.size}
              </p>
              <button
                className="w-full px-6 py-3 bg-[var(--crimson)] text-white rounded-full hover:bg-[var(--crimson)]/90 transition-colors mb-6"
                onClick={() => window.open(platform.downloadUrl, '_blank')}
              >
                Download Now
              </button>
              <div className="text-sm text-gray-500">
                <h4 className="font-semibold mb-2">System Requirements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {platform.systemRequirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
