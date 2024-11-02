import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, ExampleCorp",
    feedback:
      "Amazing service! Our event was a success, thanks to the delicious catering.",
    image: "https://via.placeholder.com/80",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Head, Foodies Inc.",
    feedback:
      "Professional and timely service. The food quality was exceptional!",
    image: "https://via.placeholder.com/80",
    rating: 4,
  },
  {
    id: 3,
    name: "Richard Roe",
    role: "Event Manager, BigEvents Co.",
    feedback: "Highly recommended! They handled everything with perfection.",
    image: "https://via.placeholder.com/80",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "HR Manager, HappyWork",
    feedback: "Best corporate catering service we've experienced.",
    image: "https://via.placeholder.com/80",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      return [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ];
    }
    return [testimonials[currentIndex]];
  };

  return (
    <div className="relative flex flex-col items-center px-4 py-8 bg-gray-100 rounded-lg lg:px-8">
      <h2 className="mb-6 text-3xl font-semibold text-gray-800">
        What Our Clients Say
      </h2>

      <div className="relative flex overflow-hidden space-x-4 lg:space-x-8">
        {getVisibleCards().map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-80 h-64 p-4 bg-white rounded-lg shadow-lg transition-transform duration-500 transform-gpu hover:scale-105 lg:w-96 lg:h-72 flex"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mb-4 rounded-full"
            />
            <div className="ml-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, index) => (
                    <span key={index} className="text-gray-300">
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <span className="text-gray-500">{testimonial.role}</span>
              </div>
              <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
