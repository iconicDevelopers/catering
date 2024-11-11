import corporate from "../../assets/sample/corpoarte.webp";

const CorporateSubmenus = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8 md:px-20 lg:px-32">
        <h2 className="text-2xl text-center md:text-4xl font-semibold mb-10 text-gray-800">
          Corporate Management Catering Services
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-md rounded-lg p-5">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={corporate}
              alt="Corporate Catering Event"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Daily Breakfast, Lunch, Snacks and Dinner
              </h3>
              <p className="text-gray-600 text-sm">
                Enjoy a wide variety of breakfast, lunch, snacks, and dinner
                options tailored to your team’s tastes. With over 1,000 menu
                items, there’s something for everyone, every day.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Corporate Events and Conferences
              </h3>
              <p className="text-gray-600 text-sm">
                Hosting an event for 100 or 1,000 people? We’ve got you covered.
                From setup to service, we make sure your corporate event
                catering is smooth and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateSubmenus;
