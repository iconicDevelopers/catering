import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        isScrolled || isOpen ? "bg-indigo-700 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              BrandLogo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:border-b-2 hover:border-white pb-1 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/service"
              className="text-white hover:border-b-2 hover:border-white pb-1 transition duration-300"
            >
              Service
            </Link>
            <Link
              to="/about"
              className="text-white hover:border-b-2 hover:border-white pb-1 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:border-b-2 hover:border-white pb-1 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="space-y-4 py-4">
              <Link
                to="/"
                className="block text-indigo-700 hover:border-b-2 hover:border-indigo-700 pb-1 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/service"
                className="block text-indigo-700 hover:border-b-2 hover:border-indigo-700 pb-1 transition duration-300"
              >
                Service
              </Link>
              <Link
                to="/about"
                className="block text-indigo-700 hover:border-b-2 hover:border-indigo-700 pb-1 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-indigo-700 hover:border-b-2 hover:border-indigo-700 pb-1 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
