import { motion } from "framer-motion";
import React from "react";
import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { FaLinux } from "react-icons/fa6";
import SectionComponent from "../components/SectionComponent";

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
    icon: <AiFillWindows className="w-8 h-8" />,
    downloadUrl: "#",
    systemRequirements: [
      "Windows 10 or later",
      "64-bit version",
      "4GB RAM or more",
      "500MB free disk space",
    ],
    size: "50 MB",
    version: "2.1.0",
  },
  {
    name: "macOS",
    icon: <AiFillApple className="w-8 h-8" />,
    downloadUrl: "#",
    systemRequirements: [
      "macOS 10.15 or later",
      "64-bit version",
      "4GB RAM or more",
      "500MB free disk space",
    ],
    size: "55 MB",
    version: "2.1.0",
  },
  {
    name: "Linux",
    icon: <FaLinux className="w-8 h-8" />,
    downloadUrl: "#",
    systemRequirements: [
      "Ubuntu 20.04 or later",
      "64-bit version",
      "4GB RAM or more",
      "500MB free disk space",
    ],
    size: "45 MB",
    version: "2.1.0",
  },
];

export default function DownloadPage() {
  return (
    <SectionComponent id="/download" className={"py-30"}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#1a1a24]/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2e2e3a] hover:border-[#e63946]/30"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#1a1a24] p-4 rounded-full border border-[#e63946]/30"
                >
                  {platform.icon}
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-4">
                {platform.name}
              </h3>
              <p className="text-gray-400 text-center mb-6">
                Version {platform.version} • {platform.size}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-[#e63946] text-white rounded-full hover:bg-[#e63946]/90 transition-colors mb-6 font-medium cursor-pointer"
                onClick={() => window.open(platform.downloadUrl, "_blank")}
                aria-label={`Download ${platform.name} version ${platform.version}`}
              >
                Download Now
              </motion.button>
              <div className="text-sm text-gray-400">
                <h4 className="font-semibold text-white mb-3">
                  System Requirements:
                </h4>
                <ul className="space-y-2">
                  {platform.systemRequirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#e63946] mr-2">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionComponent>
  );
}
