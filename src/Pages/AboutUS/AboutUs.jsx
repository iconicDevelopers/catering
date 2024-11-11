// Import necessary libraries
import { Link } from "react-router-dom";
import kitchen from "../../assets/sample/kitchen.webp";
import Experience from "./Experience.jsx";

const AboutUs = () => {
  return (
    <>
      <Experience />
      <div className="container mx-auto pb-12 pt-4 " id="aboutus">
        <div className="space-y-4 p-6 text-center">
          <h2 className="uppercase font-semibold text-orange-600">ABOUT US</h2>
        </div>

        <section className=" flex flex-col md:flex-row shadow-md bg-white rounded-lg  items-center justify-center p-6 md:p-16 space-y-6 md:space-y-0 md:space-x-10">
          {/* Left Side - Text Content */}

          <div className="md:w-1/2 space-y-4 rounded-md">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800   md:text-start">
              Trusted Daily Lunch, Snacks and Breakfast provider
            </h2>
            <p className="text-gray-600 text-justify">
              Where Every Meal is a Masterpiece, Elevating Your Event with
              Flavors That Speak for Themselves, From Start to Finish, We
              Perfect Every Bite, Transforming Ordinary Events into
              Extraordinary Ones, Let Us Take Your Event to the Next Level with
              <span className="font-bold text-gray-800"> CUISINE CONNECT</span>
            </p>

            <p className="text-gray-600 text-justify">
              We also cater to the specific needs of special occasions such as
              board meetings, family day celebrations, sales team meetings, and
              more.
            </p>
            <p className="text-gray-600 text-justify">
              Additionally, we offer convenient packaged food options, perfect
              for companies seeking a hassle-free catering solution.
            </p>
            <button className="px-6 py-2 mt-4 border  font-semibold rounded-full bg-orange-500 text-white shadow-md hover:text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/contactus" className="w-full h-full block text-center">
                Contact Us
              </Link>
            </button>
          </div>

          {/* Right Side - Image with Quote */}
          <div className="md:w-1/2 relative h-96 md:h-[600px]">
            <img
              src={kitchen} // Replace with actual image path
              alt="Kitchen view"
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
            <div className="absolute bottom-4 left-4 bg-green-100 p-4 rounded-lg shadow-lg w-3/4 md:w-1/2">
              <p className=" font-medium text-sm">
                “{" "}
                <span className="font-semibold text-gray-800">
                  CUISINE CONNECT
                </span>
                <span className="text-gray-600">
                  {" "}
                  has delivered great food and excellent service for more than
                  10 years{" "}
                </span>
                ”
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
