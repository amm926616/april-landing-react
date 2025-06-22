import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaDownload,
  FaShoppingCart,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; 
import AprilIcon from "/src/assets/images/april-icon.png";

const HeaderComponent = () => {
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

  // Effect to manage body scroll and browser history for the mobile menu
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; 
      window.history.pushState({ menuOpen: true }, "");

      // Explicitly type the event for popstate
      const handlePopState = (event: PopStateEvent) => {
        if (!event.state || !event.state.menuOpen) {
          setMenuOpen(false);
        }
      };

      window.addEventListener("popstate", handlePopState);

      // Cleanup function
      return () => {
        document.body.style.overflow = "auto"; 
        window.removeEventListener("popstate", handlePopState);
  
        if (window.history.state && window.history.state.menuOpen) {
          window.history.back(); // Go back to the state before menu was opened
        }
      };
    } else {
      document.body.style.overflow = "auto"; 
      if (window.history.state && window.history.state.menuOpen) {
        window.history.back();
      }
    }
  }, [menuOpen]); // Re-run this effect when menuOpen changes

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleBackButtonClick = () => {
    setMenuOpen(false); // This will trigger the useEffect to pop the history state
  };

  const navItems = [
    { id: "documentation", label: "Documentation", path: "/documentation" },
    { id: "updates", label: "Updates", path: "/updates" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "payment", label: "Payment", path: "/payment" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md py-2 shadow-lg border-b border-gray-800/50 text-white"
          : "bg-transparent py-3 md:py-4 text-red-500"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover="hover" className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative mr-3">
                <motion.img
                  src={AprilIcon}
                  alt="April Icon"
                  className="w-10 h-10 object-contain z-10 relative"
                  variants={{
                    hover: {
                      scale: 1.1,
                      rotate: 15,
                      transition: { duration: 0.3 },
                    },
                  }}
                />

                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#e63946] pointer-events-none"
                  variants={{
                    hover: {
                      scale: 1.3,
                      opacity: [0, 0.8, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                      },
                    },
                  }}
                />

                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-[#e63946] pointer-events-none"
                    variants={{
                      hover: {
                        scale: 1 + i * 0.3,
                        opacity: [0, 0.7, 0],
                        transition: {
                          delay: i * 0.15,
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        },
                      },
                    }}
                  />
                ))}
              </div>

              <motion.span
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e63946] via-[#ff686b] to-[#a8dadc]"
                variants={{
                  hover: {
                    backgroundPosition: "100% 50%",
                    transition: { duration: 1 },
                  },
                }}
              >
                April Music Player
              </motion.span>
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
              {/* "Back" button for mobile menu */}
              <button
                onClick={handleBackButtonClick}
                className="flex items-center text-gray-300 hover:text-white mb-4 px-4 py-3 rounded-lg text-lg font-medium hover:bg-gray-800/50 transition-colors self-start"
              >
                <FaArrowLeft className="mr-3" /> Back
              </button>
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
                      onClick={toggleMenu} // Close menu when navigating
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
                  onClick={toggleMenu} // Close menu when navigating
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

export default HeaderComponent;
