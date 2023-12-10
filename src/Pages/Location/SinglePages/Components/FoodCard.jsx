import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "../../../../Components/Button";
import { Link } from "react-router-dom";

export const FoodCard = ({
  cuisineTitle,
  cuisineDescription,
  filterCuisine,
}) => {
  const [foodCard, setFoodCard] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardAnimation = useAnimation();

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => setFoodCard(data.foods));

    if (inView) {
      cardAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 2, delay: 0.5 },
      });
    }
  }, [inView, cardAnimation]);

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial={{ opacity: 0, y: 70 }}
      animate={cardAnimation}
      className="grid grid-cols-3 my-20 lg:container sm:mx-8 lg:mx-0 cursor-default gap-5 h-[480px] "
    >
      <motion.div className="flex flex-col justify-around items-start cursor-default p-4 rounded-md drop-shadow-md bg-white">
        <motion.h1 className="text-2xl font-bold ">{cuisineTitle}</motion.h1>
        <motion.p className="text-sm text-BlackSecondColor pr-8">
          {cuisineDescription}
        </motion.p>
        <Link to="/library">
          <Button border>
            <span className="font-normal text-darkBlueText">EXPLORE MORE</span>
          </Button>
        </Link>
      </motion.div>
      {foodCard
        .filter((item) => item.cuisine === filterCuisine)
        .slice(0, 2)
        .map((item) => (
          <div key={item.id} className="flex drop-shadow-lg rounded-md ">
            <Link to={`/library/${item.id}`}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  transition: "all 0.9s",
                }}
                src={item.img}
                alt={item.name}
                className="h-full object-cover rounded-md "
              />
            </Link>
          </div>
        ))}
    </motion.div>
  );
};
