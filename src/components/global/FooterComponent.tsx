import React from "react";
import {
  FaTelegram,
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AprilIcon from "/src/assets/images/april-icon.png";
import { Link, useLocation } from "react-router-dom";

interface FooterProps {
  email?: string;
  telegramLink?: string;
  githubLink?: string;
  discordLink?: string;
}

const FooterComponent: React.FC<FooterProps> = ({
  telegramLink = "https://t.me/aprilmusic",
  githubLink = "https://github.com/aprilmusic",
  discordLink = "https://discord.gg/aprilmusic",
}) => {
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    const [path, hash] = href.split("#");

    // If it's a hash link and we're on the same page
    if (hash && (path === location.pathname || path === "")) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  const socialLinks = [
    { icon: <FaGithub />, href: githubLink, label: "GitHub" },
    { icon: <FaTelegram />, href: telegramLink, label: "Telegram" },
    { icon: <FaDiscord />, href: discordLink, label: "Discord" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Screenshots", href: "/#screenshots" },
        { label: "Roadmap", href: "/updates/#roadmap" },
        { label: "Download", href: "/download" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/documentation" },
        { label: "Blog", href: "/link/blog" },
        { label: "Tutorials", href: "/link/tutorials" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Contact & About Us", href: "/contact" },
        { label: "Privacy Policy", href: "/legal/#privacy-policy" },
        { label: "Terms of Service", href: "/legal/#terms-of-service" },
        { label: "CopyRight Aggrement", href: "/legal/#copyright-agreement" },
      ],
    },
  ];

  return (
    <footer
      id="footer"
      className="relative z-20 bg-gradient-to-b from-[#0d1117] to-[#1a1a24] text-white pt-12 pb-8 border-t border-gray-800/50 md:pt-20" // Adjusted pt for mobile
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {" "}
          {/* Adjusted grid for mobile */}
          {/* Brand info */}
          <div className="lg:col-span-1 text-center md:text-left">
            {" "}
            {/* Center on mobile, left on larger screens */}
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center justify-center md:justify-start mb-6" // Center on mobile, start on larger screens
            >
              <img
                src={AprilIcon}
                alt="April Icon"
                className="w-10 h-10 object-contain mr-2" // Added mr-2 for spacing
              />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e63946] to-[#a8dadc] sm:text-2xl">
                {" "}
                {/* Adjusted text size for mobile */}
                April Music Player
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-6 px-4 md:px-0">
              {" "}
              {/* Added horizontal padding for smaller screens */}
              The music player that helps you learn languages through your
              favorite songs.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8 md:mb-0">
              {" "}
              {/* Centered social links on mobile, added bottom margin */}
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all text-xl" // Increased icon size slightly for better tap target
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="text-center md:text-left">
              {" "}
              {/* Centered text on mobile, left on larger screens */}
              <h3 className="text-base font-semibold text-gray-200 mb-4 sm:text-lg">
                {" "}
                {/* Adjusted text size for mobile */}
                {column.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {" "}
                {/* Adjusted spacing for mobile */}
                {column.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-[#e63946] transition-colors flex items-center justify-center md:justify-start" // Centered links on mobile
                    >
                      <span className="w-1 h-1 bg-[#e63946] rounded-full mr-2"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact info */}
          <div className="text-center md:text-left">
            {" "}
            {/* Centered text on mobile, left on larger screens */}
            <h3 className="text-base font-semibold text-gray-200 mb-4 sm:text-lg">
              {" "}
              {/* Adjusted text size for mobile */}
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {" "}
              {/* Adjusted spacing for mobile */}
              
              <li>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e63946] transition-colors flex items-start justify-center md:justify-start" // Centered on mobile
                >
                  <FaTelegram className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Join our Telegram channel</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-8 mt-8 md:mt-12 text-center text-gray-500" // Adjusted top margin for mobile
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} April Music Player. All rights
            reserved.
          </p>
          <p className="text-xs mt-2">
            Made with ♥ for language learners worldwide
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterComponent;
