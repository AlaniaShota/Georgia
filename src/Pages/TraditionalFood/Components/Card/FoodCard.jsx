import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Dishes_Title, Dishes_Description } from "./constants";

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
    <motion.div ref={ref} className="grid grid-cols-3  gap-5 h-96">
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-col justify-between items-start"
      >
        <h1 className="text-2xl font-bold mb-5 cursor-default">
          {Dishes_Title}
        </h1>
        <p className="text-sm text-BlackSecondColor pr-6 cursor-default">
          {Dishes_Description}
        </p>
        <Link to="/library">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 mt-5 rounded-md"
          >
            <span className="text-sm font-normal text-darkBlueText">
              EXPLORE MORE
            </span>
          </motion.button>
        </Link>
      </motion.div>
      {foodCard.slice(0, 2).map((item) => (
        <Link to={`/library/${item.id}`} key={item.id} className="flex ">
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
