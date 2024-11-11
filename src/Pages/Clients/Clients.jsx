import "./client.css";
import client1 from "../../assets/Clients/client1.jpg";
import client2 from "../../assets/Clients/client2.jpg";
import client3 from "../../assets/Clients/client3.jpg";
import client4 from "../../assets/Clients/client4.jpg";

const logos = [client1, client2, client3, client4];

const Client = () => {
  // Duplicate logos to create a continuous effect
  const repeatingLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="container mx-auto p-5">
      <div className="space-y-4 text-center">
        <h2 className="uppercase font-semibold text-orange-600">
          Our Trusted Clients
        </h2>
        {/* <p className="font-semibold text-3xl">
          We are proud to collaborate with industry leaders and trusted brands.
        </p> */}
      </div>
      <div className="logo-carousel-container text-center">
        {/* Heading and Subheading */}

        <div className="logo-slider">
          {repeatingLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="logo-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
