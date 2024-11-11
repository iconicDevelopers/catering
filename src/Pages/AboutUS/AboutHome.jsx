// Import necessary libraries
import aboutus from "../../assets/sample/aboutus.jpeg";
import AboutUs from "./AboutUs.jsx";

const AboutHome = () => {
  return (
    <>
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutus})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-sm md:text-lg">
            At Cuisine Connect, we create memorable food experiences for every
            occasion. Our team is dedicated to quality, service, and making your
            events special.
          </p>
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default AboutHome;
