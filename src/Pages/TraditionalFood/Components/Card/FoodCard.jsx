import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { dishesDescription, dishesTitle } from "./constants";

const FoodCard = () => {
  const [foodCard, setFoodCard] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => setFoodCard(data.foods));
  }, []);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="grid grid-cols-3  gap-5 h-96"
    >
      <div className="flex flex-col justify-between items-start">
        <h1 className="text-2xl font-bold mb-5 cursor-default">
          {dishesTitle}
        </h1>
        <p className="text-sm text-textSecondColor pr-6 cursor-default">
          {dishesDescription}
        </p>
        <Link to="/library">
          <button className="border border-buttonBorder hover:bg-buttonHover py-1 px-4 mr-4 mt-5 rounded-md">
            <span className="text-sm font-normal text-buttonColor">
              EXPLORE MORE
            </span>
          </button>
        </Link>
      </div>
      {foodCard.slice(0, 2).map((item) => (
        <Link
          to={`/traditional-food/${item.id}`}
          key={item.id}
          className="flex "
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            style={{
              transition: "all 0.9s",
            }}
            src={item.img}
            alt={item.name}
            className="h-full object-cover rounded-md"
          />
        </Link>
      ))}
    </motion.div>
  );
};

export default FoodCard;
