// Import necessary libraries
import kitchen from "../assets/sample/kitchen.webp";

const CateringSection = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-center p-6 md:p-16 space-y-6 md:space-y-0 md:space-x-10">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Trusted Daily Lunch, Snacks and Breakfast provider
        </h1>
        <p className="text-gray-600">
          Heartfelt Catering is a leading corporate catering service in
          Bangalore, specializing in providing daily lunch, snacks, and
          breakfast to companies and institutions. We are known for our
          hygienic, timely, and professional service.
        </p>
        <p className="text-gray-600">
          We also help you meet requirements for special occasions like Board
          Meetings, Family day celebrations, Sales team meetings, etc.
        </p>
        <p className="text-gray-600">
          We also have packaged food options, which are perfect for companies
          looking for a convenient option.
        </p>
        <button className="px-6 py-2 mt-4 border border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-100">
          Contact Us
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
          <p className="text-gray-800 font-medium text-sm">
            “All-in-one service to meet the quality food needs of any Corporate”
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Baisali (from a Japanese MNC) - Client for 3+ Years
          </p>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
