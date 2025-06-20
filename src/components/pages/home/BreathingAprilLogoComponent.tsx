import { motion } from "framer-motion";
import aprilHeroIcon from "../../../assets/images/april-icon.png";

export default function BreathingAprilLogoComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="lg:w-1/2 flex justify-center relative"
    >
      <div className="relative">
        <img
          src={aprilHeroIcon}
          alt="April Music Player Logo"
          className="w-64 h-64 md:w-80 md:h-80 z-10 relative"
        />
        <div className="absolute inset-0 bg-[#e63946] rounded-full opacity-20 blur-xl animate-pulse"></div>
        <motion.div
          className="absolute inset-0 border-4 border-[#e63946] rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 border-2 border-[#a8dadc] rounded-full opacity-20"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>
    </motion.div>
  );
}
