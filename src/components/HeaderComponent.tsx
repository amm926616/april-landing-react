import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {
  onDownloadClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", " ", "screenshots", "contact"];
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
  };

  return (
    <header
      className={`fixed w-full text-white shadow-lg z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1a1a24]" : "bg-[#1a1a24]/90"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a
              href="#home"
              className="flex items-center hover:text-[#e63946] transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-6 h-6 bg-[#e63946] rounded-full flex items-center justify-center mr-2"
              >
                <span className="text-white">🎵</span>
              </motion.div>
              April Music Player
            </a>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8 items-center">
              {['features', 'screenshots', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`font-medium transition-all duration-300 ${
                      activeSection === section
                        ? "text-[#e63946] border-b-2 border-[#e63946]"
                        : "text-gray-300 hover:text-[#e63946]"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={onDownloadClick}
              className="ml-6 bg-[#e63946] hover:bg-[#b01030] text-white px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
            >
              Download Now
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-[#e63946] transition-colors"
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            <div className="bg-[#1a1a24] rounded-lg p-4">
              <ul className="space-y-4">
                {['features', 'screenshots', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`block text-gray-300 hover:text-[#e63946] transition-colors font-medium ${
                        activeSection === section ? "text-[#e63946]" : ""
                      }`}
                      onClick={toggleMenu}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={onDownloadClick}
                    className="w-full bg-[#e63946] hover:bg-[#b01030] text-white px-4 py-3 rounded-full transition-all duration-300 font-semibold"
                  >
                    Download Now
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
