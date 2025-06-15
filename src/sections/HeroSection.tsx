import React from "react";
import { motion } from "framer-motion";
import aprilHeroIcon from "../assets/images/april-icon.png";

interface HeroSectionProps {
  id?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={className + " min-h-screen flex items-center relative"}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={aprilHeroIcon}
                alt="April Music Player Logo"
                className="w-32 h-32 md:w-40 md:h-40"
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.2, scale: 1.2 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-[var(--crimson)] mb-4"
            >
              April Music Player
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
            >
              The world's first music player that helps you study lyrics and learn languages while you enjoy your favorite songs.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-[#e63946] hover:bg-[#b01030] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Download Now
            </button>
            <button className="border-2 border-[#e63946] hover:bg-[#e63946] hover:text-white text-[#e63946] px-8 py-4 rounded-full transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
