import { useState, useEffect } from "react";
import { FaUserFriends, FaUsers, FaRegCalendarAlt } from "react-icons/fa";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counterInterval);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(counterInterval);
  }, [target, duration]);

  return <span>{count}</span>;
};

const CounterSection = () => {
  const counters = [
    {
      id: 1,
      icon: <FaUserFriends size={40} className="text-blue-600" />,
      target: 500,
      label: "Clients",
    },
    {
      id: 2,
      icon: <FaUsers size={40} className="text-green-600" />,
      target: 50,
      label: "Team Members",
    },
    {
      id: 3,
      icon: <FaRegCalendarAlt size={40} className="text-purple-600" />,
      target: 10,
      label: "Years of Experience",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 md:p-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center gap-8">
        {counters.map(({ id, icon, target, label }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center gap-4"
          >
            <div>{icon}</div>
            <h2 className="text-3xl font-bold text-gray-800">
              <Counter target={target} duration={2000} />+
            </h2>
            <p className="text-lg text-gray-600">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
