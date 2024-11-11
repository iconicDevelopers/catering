import southIndian from "../../assets/sample/southindian.jpg";
import northIndian from "../../assets/sample/northindian.webp";
import chinese from "../../assets/sample/chinese.jpg";

const Cuisines = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="space-y-4 p-6 text-center">
        <h2 className="uppercase font-semibold text-orange-600">Cuisines</h2>
        <p className="font-semibold text-3xl">
          Explore our range of cuisines, from North Indian to Chinese, for your
          catering needs!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-7 mb-10">
        {[
          {
            img: southIndian,
            alt: "South Indian Cuisine",
            title: "South Indian Cuisine",
            description:
              "Elevate your gatherings with the authentic flavors of South Indian cuisine, offering a delightful journey through our rich culinary heritage.",
          },
          {
            img: northIndian,
            alt: "North Indian Cuisine",
            title: "North Indian Cuisine",
            description:
              "Experience vibrant spices, aromatic herbs, and authentic flavors that bring your event to life.",
          },
          {
            img: chinese,
            alt: "Chinese Cuisine",
            title: "Chinese Cuisine",
            description:
              "Savor the essence of authentic Chinese cuisine with every exquisite dish crafted to perfection.",
          },
        ].map((cuisine, index) => (
          <div
            className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
            key={index}
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg transition-shadow duration-300">
              <img
                src={cuisine.img}
                alt={cuisine.alt}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {cuisine.title}
            </h3>
            <p className="text-center mt-2 text-gray-600 p-2">
              {cuisine.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
