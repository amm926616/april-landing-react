import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaDownload, FaTelegram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

interface HeaderProps {
  onDownloadClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "features",
        "screenshots",
        "roadmap",
        "contact",
      ];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id;
        }
      }
      setActiveSection(current);

      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const navItems = [
    { id: "features", label: "Features" },
    { id: "screenshots", label: "Screenshots" },
    { id: "roadmap", label: "Roadmap" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full text-white z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md py-2 shadow-lg border-b border-gray-800/50"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <a href="#home" className="flex items-center group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-[#e63946] to-[#ff6b6b] rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                  <span className="text-white text-sm">🎵</span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-[#e63946] opacity-0 group-hover:opacity-100 animate-ping-slow pointer-events-none transition-opacity"></div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e63946] to-[#a8dadc]">
                April Music Player
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x0 items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-white bg-[#e63946]/10 border border-[#e63946]/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a><a href="#downloadSection">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-gradient-to-r from-[#e63946] to-[#ff6b6b] hover:from-[#d62e3b] hover:to-[#e63946] text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
               <FaDownload className="mr-2" />
                Download
              </motion.button></a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-[#0d1117]/95 backdrop-blur-md pt-20 px-4 z-40"
          >
            <div className="flex flex-col h-full">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block px-4 py-3 rounded-lg text-xl font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-white bg-[#e63946]/10 border border-[#e63946]/30"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto mb-8 space-y-4">
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/your-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white p-3 rounded-full hover:bg-gray-800/50 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://t.me/your-telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white p-3 rounded-full hover:bg-gray-800/50 transition-colors"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="w-6 h-6" />
                  </a>
                </div>

                <motion.button
                  onClick={() => {
                    if (onDownloadClick) onDownloadClick();
                    toggleMenu();
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center bg-gradient-to-r from-[#e63946] to-[#ff6b6b] hover:from-[#d62e3b] hover:to-[#e63946] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  <FaDownload className="mr-2" />
                  Download Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
