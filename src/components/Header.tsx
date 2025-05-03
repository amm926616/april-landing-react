import React from "react";

interface HeaderProps {
  onDownloadClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
  return (
    <header className="fixed w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="#home" className="hover:text-red-400 transition-colors">
            april music player
          </a>
        </h1>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li>
              <a
                href="#features"
                className="hover:text-red-400 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#screenshots"
                className="hover:text-red-400 transition-colors"
              >
                Screenshots
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={onDownloadClick}
                className="ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
              >
                Download
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white focus:outline-none">
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
