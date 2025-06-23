import { motion, Variants } from "framer-motion"; // Import Variants
import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { FaLinux } from "react-icons/fa6";
import SectionComponent from "../../components/global/SectionComponent";
import { Platform } from "../../types/platform.type";

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

const containerVariants: Variants = {
  // Explicitly type containerVariants
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  // Explicitly type cardVariants
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function DownloadSection() {
  return (
    <SectionComponent id="/download" className="py-30">
      <div
        className="container mx-auto px-4"
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--crimson)] mb-4">
            Download April Music Player
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started with our music player on your preferred platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{
            willChange: "transform, opacity",
            transformStyle: "preserve-3d",
          }}
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              whileHover={{ y: -4, borderColor: "#e63946" }}
              className="bg-[#1a1a24]/80 p-8 rounded-2xl shadow-lg border border-[#2e2e3a] transition-colors flex flex-col"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#1a1a24] p-4 rounded-full border border-[#e63946]/30">
                  {platform.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-4">
                {platform.name}
              </h3>
              <p className="text-gray-400 text-center mb-6">
                Version {platform.version} • {platform.size}
              </p>

              <div className="text-sm text-gray-400 mb-6">
                <h4 className="font-semibold text-white mb-3 text-center">
                  System Requirements:
                </h4>
                <ul className="space-y-2 w-fit mx-auto">
                  {platform.systemRequirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#e63946] mr-2">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-[#e63946] text-white rounded-full hover:bg-[#e63946]/90 transition-colors font-medium cursor-pointer mt-auto"
                onClick={() => globalThis.open(platform.downloadUrl, "_blank")}
                aria-label={`Download ${platform.name} version ${platform.version}`}
              >
                Download Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionComponent>
  );
}
