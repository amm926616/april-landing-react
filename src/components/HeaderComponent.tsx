import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaDownload, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
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
    { id: "about", label: "About", path: "/" },
    { id: "updates", label: "Updates", path: "/updates" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "payment", label: "Payment", path: "/payment" },
  ];

  return (
    <header
      className={`fixed w-full text-white z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md py-2 shadow-lg border-b border-gray-800/50"
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-[#e63946] to-[#ff6b6b] rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                  <span className="text-white text-sm">🎵</span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-[#e63946] opacity-0 group-hover:opacity-100 animate-ping-slow pointer-events-none transition-opacity"></div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e63946] to-[#a8dadc]">
                April Music Player
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-1 items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                      location.pathname === item.path
                        ? "text-white bg-[#e63946]/10 border border-[#e63946]/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {item.id === "payment" && (
                      <FaShoppingCart className="mr-2" size={14} />
                    )}
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Updated Download Button */}
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/download"
                  className="flex items-center bg-gradient-to-r from-[#e63946] to-[#ff6b6b] hover:from-[#d62e3b] hover:to-[#e63946] text-white px-4 py-2 rounded-lg transition-all duration-300 shadow hover:shadow-md font-semibold text-sm"
                >
                  <FaDownload className="mr-2" size={14} />
                  Download
                </Link>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-[#0d1117]/95 backdrop-blur-md pt-16 px-4 z-40"
          >
            <div className="flex flex-col h-full">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-white bg-[#e63946]/10 border border-[#e63946]/30"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.id === "payment" ? (
                        <span className="flex items-center">
                          <FaShoppingCart className="mr-3" /> {item.label}
                        </span>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto mb-6">
                <motion.a
                  href="/download"
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center bg-gradient-to-r from-[#e63946] to-[#ff6b6b] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow font-semibold text-base"
                  onClick={toggleMenu}
                >
                  <FaDownload className="mr-3" />
                  Download Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
