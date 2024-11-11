import Daily from "../assets/sample/Daily.jpeg";
import Event from "../assets/sample/Event.jpeg";
import Packeged from "../assets/sample/Packeged.jpeg";
import galleryItem1 from "../assets/GalleryItems/galleryItem1.jpeg";
import galleryItem2 from "../assets/GalleryItems/galleryItem2.jpeg";
import galleryItem3 from "../assets/GalleryItems/galleryItem3.jpeg";
import galleryItem4 from "../assets/GalleryItems/galleryItem4.jpg";
import galleryItem5 from "../assets/GalleryItems/galleryitem5.webp";
import galleryItem6 from "../assets/GalleryItems/galleryitem6.jpeg";

const OurServices = () => {
  return (
    <div className="bg-gray-100 py-8">
      {/* Services Section */}
      <section className="container mx-auto p-6 md:p-16 space-y-6">
        <div className="space-y-4 p-6 text-center">
          <h2 className="uppercase font-semibold text-orange-600">
            Our Corporate Catering Services
          </h2>
          <p className="font-semibold text-3xl">
            We offer corporate catering for daily meals, events, and packaged
            food, with a focus on quality and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Service 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img
              src={Daily}
              alt="Daily Lunch"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Daily Breakfast, Lunch, Snacks and Dinner Services
            </h3>
            <p className="text-gray-600 mt-2">
              Freshly prepared lunch options delivered daily to your workplace.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img
              src={Event}
              alt="Event Catering"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Event Catering Services
            </h3>
            <p className="text-gray-600 mt-2">
              Full-service catering for corporate events, meetings, and special
              occasions.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
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
      <section className="container mx-auto p-6 md:p-16 space-y-6 bg-gray-50">
        <div className="space-y-4 p-6 text-center">
          <h2 className="uppercase font-semibold text-orange-600">
            Gallery of Our Services
          </h2>
          <p className="font-semibold text-3xl">
            Take a look at some of the high-quality meals and setups we provide
            for our corporate clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {/* Gallery Image 1 */}
          <div className="relative group">
            <img
              src={galleryItem1}
              alt="Catering setup 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">
                Fresh Greens Catering Services
              </p>
            </div>
          </div>

          {/* Gallery Image 2 */}
          <div className="relative group">
            <img
              src={galleryItem2}
              alt="Catering setup 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">
                Banquet Feast Catering Services
              </p>
            </div>
          </div>

          {/* Gallery Image 3 */}
          <div className="relative group">
            <img
              src={galleryItem3}
              alt="Catering setup 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">
                Gourmet Dining Experience Services
              </p>
            </div>
          </div>
          {/* Gallery Image 4 */}
          <div className="relative group">
            <img
              src={galleryItem4}
              alt="Catering setup 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">
                Signature Meal Selections Services
              </p>
            </div>
          </div>

          {/* Gallery Image 5 */}
          <div className="relative group">
            <img
              src={galleryItem5}
              alt="Catering setup 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">
                Decadent Desserts Catering Services
              </p>
            </div>
          </div>

          {/* Gallery Image 6 */}
          <div className="relative group">
            <img
              src={galleryItem6}
              alt="Catering setup 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">
                Petite Feast Catering Services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
