import React, { useEffect, useState } from "react";
import favicon from "/src/assets/images/favicon.ico";
import { motion } from "framer-motion";

interface HeaderProps {
  onDownloadClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "screenshots", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="fixed w-full bg-[var(--raven)]/90 backdrop-blur-md text-white shadow-lg z-50 border-b border-gray-700/50"
      style={{ backgroundColor: "rgba(13, 13, 18, 0.9)" }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a
            href="#home"
            className="hover:text-[var(--crimson)] transition-colors flex items-center"
          >
            <img
              src={favicon}
              alt="April Music Player Logo"
              className="w-5 h-5 mr-2 object-contain hover:scale-110 transition-transform"
            />
            april music player
          </a>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {["features", "screenshots", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`transition-colors font-medium ${
                    activeSection === section
                      ? "text-[var(--crimson)] border-b-2 border-[var(--crimson)]"
                      : "hover:text-[var(--crimson)]"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={onDownloadClick}
                className="ml-4 bg-[var(--crimson)] hover:bg-[#b01030] text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Download
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none hover:text-[var(--crimson)] transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden px-4 py-4 bg-[var(--raven)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        style={{ display: menuOpen ? "block" : "none" }}
      >
        <ul className="flex flex-col space-y-4">
          {["features", "screenshots", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`block transition-colors font-medium ${
                  activeSection === section
                    ? "text-[var(--crimson)]"
                    : "hover:text-[var(--crimson)]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setMenuOpen(false);
                onDownloadClick?.();
              }}
              className="w-full mt-2 bg-[var(--crimson)] hover:bg-[#b01030] text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Download
            </button>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
