import React from "react";
import {
  FaTelegram,
  FaGithub,
  FaEnvelope,
  FaDiscord,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AprilIcon from "/src/assets/images/april-icon.png";

interface FooterProps {
  email?: string;
  telegramLink?: string;
  githubLink?: string;
  discordLink?: string;
}

const Footer: React.FC<FooterProps> = ({
  email = "support@aprilmusic.app",
  telegramLink = "https://t.me/aprilmusic",
  githubLink = "https://github.com/aprilmusic",
  discordLink = "https://discord.gg/aprilmusic",
}) => {
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
        { label: "Features", href: "#features" },
        { label: "Screenshots", href: "#screenshots" },
        { label: "Roadmap", href: "#roadmap" },
        { label: "Download", href: "#download" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "API", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-[#0d1117] to-[#1a1a24] text-white pt-20 pb-8 border-t border-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand info */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center mb-6"
            >
              <img
                src={AprilIcon}
                alt="April Icon"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e63946] to-[#a8dadc]">
                April Music Player
              </h3>
            </motion.div>

            <p className="text-gray-400 mb-6">
              The music player that helps you learn languages through your
              favorite songs.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-200 mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#e63946] transition-colors flex items-center"
                    >
                      <span className="w-1 h-1 bg-[#e63946] rounded-full mr-2"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-400 hover:text-[#e63946] transition-colors flex items-start"
                >
                  <FaEnvelope className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{email}</span>
                </a>
              </li>
              <li>
                <a
                  href={discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e63946] transition-colors flex items-start"
                >
                  <FaDiscord className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Join our Discord community</span>
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
          className="border-t border-gray-800/50 pt-8 mt-12 text-center text-gray-500"
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

export default Footer;
