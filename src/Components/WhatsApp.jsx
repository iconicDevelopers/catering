import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      {" "}
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/7892323878"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 left-4 bg-green-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-105 z-50"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsApp;
