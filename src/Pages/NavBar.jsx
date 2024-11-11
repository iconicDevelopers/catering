import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cuisine from "../assets/sample/logo.png";

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

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/aboutus", label: "About Us" },
    { path: "/contactus", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        isScrolled || isOpen ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center  text-2xl font-bold text-white"
            >
              <span>CUISINE</span>
              <img
                src={cuisine}
                alt="Cuisine logo"
                height={100}
                width={80}
                className="text-white"
              />
              <span>CONNECT</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label }, index) => (
              <Link
                key={index}
                to={path}
                className="text-white hover:border-b-2 hover:border-white pb-1 transition duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden  ">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-white  hover:text-gray-300 focus:outline-none"
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
          <div className="md:hidden border-t border-white w-full px-6 py-4 shadow-lg">
            {/* Added px-6 for padding */}
            <div className="space-y-4">
              {navItems.map(({ path, label }, index) => (
                <Link
                  key={index}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:border-b-2 hover:border-indigo-700 pb-1 transition duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
