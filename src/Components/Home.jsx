import image from "../assets/sample/food.jpg";

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 h-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Our Gourmet Experience
        </h1>
        <p className="text-base md:text-lg max-w-xl">
          Discover an extraordinary culinary journey with us, where every meal
          is crafted with passion and creativity.
        </p>
      </div>
    </div>
  );
};

export default Home;
