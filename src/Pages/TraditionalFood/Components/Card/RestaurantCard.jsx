import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const loadMoreContentCount = 3;

const RestaurantCard = () => {
  const [recommendationRestaurant, setRecommendationRestaurant] = useState([]);
  const [next, setNext] = useState(loadMoreContentCount);

  useEffect(() => {
    fetch("/api/restaurants")
      .then((res) => res.json())
      .then((data) => setRecommendationRestaurant(data.restaurants));
  });

  const handleMoreItem = () => {
    setNext(next + loadMoreContentCount);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {recommendationRestaurant.slice(0, next).map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between h-[355px] border drop-shadow-md rounded-lg bg-white"
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="rounded-t-lg object-cover w-full h-52"
            />
            <div className="flex flex-col pl-4 ">
              <h1 className="text-xl font-normal">{item.name}</h1>
              <h3 className="text-sm text-BlackSecondColor font-light">
                {item.location}
              </h3>
            </div>
            <Link to={item.visit} className="ml-2 mb-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className=" hover:bg-middleBlueHoverColor hover:rounded-md py-1 px-2"
              >
                <h3 className="text-darkBlueText text-sm font-medium">
                  WEBSITE
                </h3>
              </motion.button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        {next < recommendationRestaurant?.length && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleMoreItem}
            className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor  py-1 px-4 rounded-md"
          >
            <span className=" text-md text-darkBlueText ">LOAD MORE</span>
          </motion.button>
        )}
      </div>
    </>
  );
};

export default RestaurantCard;
