import React, { useState } from "react";

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
    setFormData({ ...formData, [name]: value });
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
    alert("Form submitted!");
    // Add backend submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10">
      <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
      <p className="mb-6 text-gray-700">
        Get in touch with us for all your corporate catering needs. We provide
        hygienic and professional services for daily lunch, snacks, breakfast,
        and dinner.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium mb-2">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">
              Official Company Email ID*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Contact Number*</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Company Name*</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block font-medium mb-2">Company Address*</label>
            <input
              type="text"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
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
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="serviceType"
                  value={option}
                  onChange={handleChange}
                  checked={formData.serviceType === option}
                  className="mr-2"
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
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={service}
                  onChange={handleCheckboxChange}
                  checked={formData.servicesRequired.includes(service)}
                  className="mr-2"
                />
                {service}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            No. of portions required in a day:*
          </label>
          <input
            type="number"
            name="portionsPerDay"
            value={formData.portionsPerDay}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
