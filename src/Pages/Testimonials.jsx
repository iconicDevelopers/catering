import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "Amazing service! Our event was a success, thanks to the delicious catering.",
    image: "https://via.placeholder.com/80",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "Professional and timely service. The food quality was exceptional!",
    image: "https://via.placeholder.com/80",
    rating: 4,
  },
  {
    id: 3,
    name: "Richard Roe",
    feedback: "Highly recommended! They handled everything with perfection.",
    image: "https://via.placeholder.com/80",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Johnson",
    feedback: "Best corporate catering service we've experienced.",
    image: "https://via.placeholder.com/80",
    rating: 4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 mb-10 container mx-auto">
      {/* Header Section */}
      <div className="space-y-4 p-6 text-center">
        <h2 className="uppercase font-semibold text-orange-600">
          Our Testimonials
        </h2>
        <p className="font-semibold text-3xl">
          What Our Customers Say About Us
        </p>
      </div>

      {/* Testimonial Cards Section */}
      <div>
        <Slider {...settings}>
          {TestimonialsData.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col gap-4 p-6 shadow-lg mx-2 rounded-xl bg-neutral-50 min-h-[250px] h-full border-b-4 border-orange-600">
                {/* Upper Section */}
                <div className="flex justify-start items-center gap-5">
                  <img
                    src={item.image}
                    alt={`Image of ${item.name}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xl font-bold">{item.name}</p>
                    <p className="text-gray-600 text-sm">Customer</p>
                  </div>
                </div>
                {/* Bottom Section */}
                <div className="py-6">
                  <p className="text-sm text-gray-500">{item.feedback}</p>
                  <div className="flex mt-2">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
