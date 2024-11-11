import { useState } from "react";
import { TextInput, Textarea } from "flowbite-react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    companyName: "",
    companyAddress: "",
    serviceType: "",
    servicesRequired: [],
    portionsPerDay: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the field is 'contactNumber', allow only numeric values
    if (name === "contactNumber") {
      const sanitizedValue = value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
      setFormData({ ...formData, [name]: sanitizedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      servicesRequired: checked
        ? [...prev.servicesRequired, value]
        : prev.servicesRequired.filter((service) => service !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with actual values from EmailJS
    emailjs
      .send(
        "service_njktqsl",
        "template_gybifwn",
        formData,
        "Tht39SFKTd6NCnZ7U"
      )
      .then(() => {
        toast.success("Thanks for reaching out! We’ll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          companyName: "",
          companyAddress: "",
          serviceType: "",
          servicesRequired: [],
          portionsPerDay: "",
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <div className="flex items-center border-b">
              <FaUser className="mr-1 text-gray-500" />
              <TextInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="w-full border-0 outline-none"
                style={{
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center border-b">
              <FaEnvelope className="mr-1 text-gray-500" />
              <TextInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Official Company Email ID*"
                required
                className="w-full border-0 outline-none"
                style={{
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center border-b">
              <FaPhone className="mr-1 text-gray-500" />
              <TextInput
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number*"
                required
                pattern="[0-9]*" // This allows only numbers
                className="w-full border-0 outline-none"
                style={{
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border-b">
              <FaBuilding className="mr-1 text-gray-500" />
              <TextInput
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name*"
                required
                className="w-full border-0 outline-none"
                style={{
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
            <div className="flex items-start border-b">
              <FaMapMarkerAlt className="mr-1 text-gray-500 mt-1" />
              <Textarea
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                placeholder="Address*"
                required
                className="w-full border-0 outline-none"
                style={{
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Kindly select the type of service you require:*
          </label>
          {[
            "Food Requirement is 5 days/week",
            "Food Requirement is 3-4 days/week",
            "Food Requirement is 2 days/week",
            "Food Requirement is for a Company Event",
          ].map((option) => (
            <div key={option}>
              <label className="inline-flex items-center text-gray-500">
                <input
                  type="radio"
                  name="serviceType"
                  value={option}
                  onChange={handleChange}
                  checked={formData.serviceType === option}
                  className="mr-2 text-green-500 focus:ring-green-500"
                />
                {option}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            What are the services you require?*
          </label>
          {["Lunch", "Snacks", "Breakfast", "Dinner"].map((service) => (
            <div key={service}>
              <label className="inline-flex items-center text-gray-500">
                <input
                  type="checkbox"
                  value={service}
                  onChange={handleCheckboxChange}
                  checked={formData.servicesRequired.includes(service)}
                  className="mr-2 text-green-500 focus:ring-green-500"
                />
                {service}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-4 border-b">
          <label className="block font-medium mb-2">
            No. of portions required in a day:*
          </label>
          <TextInput
            type="number"
            name="portionsPerDay"
            value={formData.portionsPerDay}
            onChange={handleChange}
            className="w-full border-0 outline-none"
            style={{
              boxShadow: "none",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
