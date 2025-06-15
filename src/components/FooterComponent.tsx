import React from "react";
import { FaTelegram, FaFacebookF, FaEnvelope, FaDiscord } from "react-icons/fa";

interface FooterProps {
  email?: string;
  telegramLink?: string;
  facebookLink?: string;
  discordLink?: string;
}

const Footer: React.FC<FooterProps> = ({
  email = "aprilmusicplayer@gmail.com",
  telegramLink = "https://t.me/Adamd178",
  facebookLink = "#",
  discordLink = "#",
}) => {
  return (
    <footer
      id="footer"
      className="bg-[#1a1a24] text-white py-16 border-t border-gray-700/50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#e63946]">
              April Music Player
            </h3>
            <p className="text-gray-400 mb-4">
              Your ultimate music experience. Discover, play, and enjoy your favorite tracks.
            </p>
            <div className="flex space-x-4">
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e63946] transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="w-6 h-6" />
              </a>
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e63946] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e63946] transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-[#e63946] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#screenshots"
                  className="text-gray-400 hover:text-[#e63946] transition-colors"
                >
                  Screenshots
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#e63946] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-400 hover:text-[#e63946] transition-colors flex items-center"
                >
                  <FaEnvelope className="w-5 h-5 mr-2" />
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e63946] transition-colors flex items-center"
                >
                  <FaDiscord className="w-5 h-5 mr-2" />
                  Discord Server
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 pt-8 mt-12 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} April Music Player. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
