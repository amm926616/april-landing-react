import React from "react";
import { motion } from "framer-motion";
import SectionComponent from "../components/global/SectionComponent";
import { Link } from "react-router-dom";
import BreathingAprilLogoComponent from "../components/pages/home/BreathingAprilLogoComponent";

interface HeroSectionProps {
  id: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id, className }) => {
  return (
    <SectionComponent id={id} className={className}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#e63946] mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-indigo-500 mix-blend-screen filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left column - Text content */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800 rounded-full border border-gray-700"
              >
                <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse"></span>
                <span className="text-sm font-medium">
                  Language Learning Revolution
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e63946] to-[#a8dadc] leading-tight"
              >
                Learn Languages Through Music
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              >
                April transforms your favorite songs into interactive language
                lessons with lyrics note-taking, personal dictionary builder,
                and interactive and personalized lyrics display.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col items-center sm:flex-row gap-4 sm:justify-center lg:justify-start"
              >
                <Link to="/download">
                  <button className="bg-gradient-to-r cursor-pointer from-[#e63946] to-[#ff6b6b] hover:from-[#d62e3b] hover:to-[#e63946] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Download Now
                  </button>
                </Link>

                <a href="#demo">
                  <button className="border-2 border-[#e63946] hover:bg-[#e63946]/10 text-[#e63946] px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center gap-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Watch Demo
                  </button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Real-time translations</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Vocabulary tracking</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Personalized learning</span>
                </div>
              </motion.div>
            </div>
            <BreathingAprilLogoComponent />
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default HeroSection;
