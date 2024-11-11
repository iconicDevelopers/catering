import contact from "../assets/sample/contact.jpg";
import ContactForm from "../Pages/ContactForm.jsx";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Background Image Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${contact})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className=" text-sm md:text-lg">
            We're here to assist you. Reach out using the form below or contact
            us directly.
          </p>
        </div>
      </div>

      {/* Contact Form and Contact Information Section */}
      <div className="container mx-auto px-4 py-8 md:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Information */}

          <div className="lg:col-span-5 space-y-4 p-6   ">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 underline">
              Get in Touch with Us
            </h3>
            <p className="text-gray-600 text-justify">
              We value your feedback and inquiries. Please feel free to contact
              us through any of the following methods :
            </p>
            <ul className="space-y-2 pt-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-red-500 mr-2 text-xl" />
                <a
                  href="https://www.google.com/maps?q=5-811,+Garden+St,+Ramaswamipalya,+Lingarajapuram,+Bengaluru,+Karnataka+560043"
                  className="ml-2 mb-2 text-gray-600 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  5-811, Garden St, Ramaswamipalya, Lingarajapuram, Bengaluru,
                  Karnataka 560043
                </a>
              </li>

              <li className="flex items-center">
                <FaPhone className="text-red-500 mr-2 text-lg" />
                <a
                  href="tel:+917892323878"
                  className="ml-2 mb-2 text-gray-600 text-sm"
                >
                  +91 7892323878
                </a>
              </li>

              <li className="flex items-center">
                <FaEnvelope className="text-red-500 mr-2 text-lg" />
                <a
                  href="mailto:cuisineconnectcc@gmail.com"
                  className="ml-2  text-gray-600 text-sm"
                >
                  cuisineconnectcc@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
