// Import necessary libraries
import image from "../assets/sample/food.jpg";

import Home from "../assets/sample/Home.jpeg";
import Daily from "../assets/sample/Daily.jpeg";
import Event from "../assets/sample/Event.jpeg";
import Packeged from "../assets/sample/Packeged.jpeg";
import galleryItem1 from "../assets/sample/galleryItem1.jpeg";
import galleryItem2 from "../assets/sample/galleryItem2.jpeg";
import galleryItem3 from "../assets/sample/galleryItem3.jpeg";
import galleryItem4 from "../assets/sample/Home.jpeg";
import galleryItem5 from "../assets/sample/Home.jpeg";
import galleryItem6 from "../assets/sample/Home.jpeg";

const CorporateCatering = () => {
  return (
    <div className="bg-gray-100">
      {/* Services Section */}
      <section className="p-8 md:p-16 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Our Corporate Catering Services
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We provide a range of corporate catering options, including daily
          meals, special event catering, and packaged food services. Our team is
          dedicated to ensuring the highest quality of food and service for your
          corporate needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={Daily}
              alt="Daily Lunch"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Daily Lunch Service
            </h3>
            <p className="text-gray-600 mt-2">
              Freshly prepared lunch options delivered daily to your workplace.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={Event}
              alt="Event Catering"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Event Catering
            </h3>
            <p className="text-gray-600 mt-2">
              Full-service catering for corporate events, meetings, and special
              occasions.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={Packeged}
              alt="Packaged Meals"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Packaged Meals
            </h3>
            <p className="text-gray-600 mt-2">
              Convenient and hygienic packaged meal options for busy employees.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="p-8 md:p-16 space-y-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Gallery of Our Services
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Take a look at some of the high-quality meals and setups we provide
          for our corporate clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {/* Gallery Image 1 */}
          <img
            src={galleryItem1}
            alt="Catering setup 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />

          {/* Gallery Image 2 */}
          <img
            src={galleryItem2}
            alt="Catering setup 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />

          {/* Gallery Image 3 */}
          <img
            src={galleryItem3}
            alt="Catering setup 3"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />

          {/* Gallery Image 4 */}
          <img
            src={image}
            alt="Catering setup 4"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />

          {/* Gallery Image 5 */}
          <img
            src={image}
            alt="Catering setup 5"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />

          {/* Gallery Image 6 */}
          <img
            src={image}
            alt="Catering setup 6"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default CorporateCatering;
