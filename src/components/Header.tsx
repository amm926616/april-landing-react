import React from "react";

interface HeaderProps {
  onDownloadClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
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
              src="/src/images/favicon.ico"
              alt="April Music Player Logo"
              className="w-5 h-5 mr-2 object-contain hover:scale-110 transition-transform"
            />
            april music player
          </a>
        </h1>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li>
              <a
                href="#features"
                className="hover:text-[var(--crimson)] transition-colors font-medium"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#screenshots"
                className="hover:text-[var(--crimson)] transition-colors font-medium"
              >
                Screenshots
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[var(--crimson)] transition-colors font-medium"
              >
                Contact
              </a>
            </li>
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

        {/* Mobile menu button */}
        <button className="md:hidden text-white focus:outline-none hover:text-[var(--crimson)] transition-colors">
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
    </header>
  );
};

export default Header;
