import HomeImage from "../assets/sample/Home.jpeg";
import CateringSection from "../Pages/CateringSection";
import CorporateCatering from "../Pages/Service";
import Testimonials from "../Pages/Testimonials";

const Home = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 h-full">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Our Cuisine Connect Catering Service
          </h1>
          <p className="text-base md:text-lg max-w-xl">
            The kitchen is the heart of the home, where memories are made
          </p>
        </div>
      </div>
      <CateringSection />
      <CorporateCatering />
      <Testimonials />
    </>
  );
};

export default Home;
