import Slider from "react-slick";
import birthdayGathering from "../../assets/otherEvents/birthdaygatherings.jpg";
import collegeGathering from "../../assets/otherEvents/collegegathering.jpg";
import corporateGathering from "../../assets/otherEvents/corporategathering.jpg";
import socialGathering from "../../assets/otherEvents/socialgathering.jpg";

const OtherEvents = () => {
  const items = [
    { title: "Birthday Gathering", image: birthdayGathering },
    { title: "School & College Functions", image: collegeGathering },
    { title: "Corporate Gathering", image: corporateGathering },
    { title: "Social Gathering", image: socialGathering },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gray-100 pt-10 pb-20">
      <div className="container mx-auto max-w-screen-lg">
        {/* Heading and Subheading */}
        <div className="space-y-4 p-6 text-center">
          <h2 className="uppercase font-semibold text-orange-600">
            Our Other Event Catering Services
          </h2>
          <p className="font-semibold text-3xl">
            We cater to any event, big or small, making each one memorable with
            quality service.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="p-4 text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto w-48 h-48 object-cover rounded-full transition-transform duration-300 hover:scale-110"
                />
                <h2 className="mt-2 text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OtherEvents;
