import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#716a4e] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-[#f4f4f4] text-xl font-bold">Doom Tribute</h1>
          </div>

          {/* Hamburger Menu (Visible on Small Screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f4f4f4] hover:text-[#b45e33] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links (Visible on Larger Screens) */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-[#f4f4f4] hover:text-[#b45e33] text-lg font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#f4f4f4] hover:text-[#b45e33] text-lg font-medium transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/play-doom"
                  className="text-[#f4f4f4] hover:text-[#b45e33] text-lg font-medium transition-colors"
                >
                  Doom
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#f4f4f4] hover:text-[#b45e33] text-lg font-medium transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="space-y-2 p-4 rounded-lg">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block text-[#f4f4f4] hover:text-[#b45e33] text-lg font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className="block text-[#f4f4f4] hover:text-[#b45e33] text-lg font-medium transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/play-doom"
                  onClick={() => setIsOpen(false)}
                  className="block text-[#f4f4f4] hover:text-[#b45e33] text-lg font-medium transition-colors"
                >
                  Doom
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block text-[#f4f4f4] hover:text-[#b45e33] text-lg font-medium transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
