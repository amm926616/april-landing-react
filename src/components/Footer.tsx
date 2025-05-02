import React from "react";
import { FaTelegram, FaFacebookF, FaEnvelope } from "react-icons/fa";

interface FooterProps {
  email?: string;
  telegramLink?: string;
  facebookLink?: string;
}

const Footer: React.FC<FooterProps> = ({
  email = "aprilmusicplayer@gmail.com",
  telegramLink = "https://t.me/Adamd178",
  facebookLink = "#",
}) => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">connect with us</h2>
          <p className="text-gray-400">
            Have questions or feedback? Reach out through these platforms.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-400 text-2xl transition-colors"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-400 text-2xl transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-gray-300 hover:text-red-400 text-2xl transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} April Music Player. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
