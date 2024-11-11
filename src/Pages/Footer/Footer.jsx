import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/sample/logo.png"; // Make sure to import your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col items-start  md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Contact Information Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="flex items-center mb-3">
            <a
              href="https://www.google.com/maps/place/Byanna+Garden,+Lingarajapuram,+Bengaluru,+Karnataka+560043"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaMapMarkerAlt className="text-red-500 mr-2" size={30} />

              <span className="hover:text-orange-500">
                RAMDEV GARDEN, HBR LAYOUT 2ND BLOCK, BANGALORE 45
              </span>
            </a>
          </p>
          <p className="flex items-center mb-3">
            <a
              href="mailto:dharanienterprises.blr@gmail.com"
              className="flex items-center"
            >
              <FaEnvelope className="text-red-500 mr-3" />
              <span className="hover:text-orange-500">
                cuisineconnectcc@gmail.com
              </span>
            </a>
          </p>
          <p className="flex items-center mb-3">
            <a href="tel:+919480012696" className="flex items-center">
              <FaPhoneAlt className="text-red-500 mr-3 " />
              <span className="hover:text-orange-500"> +91 7892323878</span>
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center mb-6 md:mb-0 w-full md:w-1/2">
          <img
            src={logo}
            alt="Catering Service Logo"
            className="w-60 h-auto filter sepia-100 saturate-120 brightness-95"
          />
        </div>

        {/* Additional Links or About Section (optional) */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61568455171392"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-500 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/cuisine_connect_?utm_source=qr&igsh=MTFtbDBpMm92ZW5wMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-red-500 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/cuisineconnect/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-700 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} | All Rights Reserved by :
          CUISINE CONNECT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
