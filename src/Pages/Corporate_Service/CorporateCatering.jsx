import service from "../../assets/sample/service.jpg";
import CorporateCatering from "../Corporate_Service/CorporateSubmenus.jsx";
import Cuisines from "./Cuisine.jsx";
import OtherEvents from "./OtherEvents.jsx";
const AboutHome = () => {
  return (
    <>
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${service})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-sm md:text-lg">
            Exceptional catering services for every occasion, from intimate
            gatherings to grand celebrations.
          </p>
        </div>
      </div>
      <CorporateCatering />
      <Cuisines />

      <OtherEvents />
    </>
  );
};

export default AboutHome;
