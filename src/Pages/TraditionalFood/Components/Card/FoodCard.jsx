import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dishes_Title, Dishes_Description } from "./constants";
import { Button } from "../../../../Components/Button";
import { useInView } from "react-intersection-observer";

const FoodCard = () => {
  const [foodCard, setFoodCard] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
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
        transition: { duration: 2, delay: 1 },
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
      initial={{ opacity: 0, y: 100 }}
      animate={cardAnimation}
      className="grid grid-cols-3  gap-5 h-96 my-20"
    >
      <motion.div className="flex flex-col justify-around items-start cursor-default">
        <motion.h1 className="text-2xl font-bold ">{Dishes_Title}</motion.h1>
        <motion.p className=" text-BlackSecondColor pr-8">
          {Dishes_Description}
        </motion.p>
        <Link to="/library">
          <Button border>
            <span className="font-normal text-darkBlueText">EXPLORE MORE</span>
          </Button>
        </Link>
      </motion.div>
      {foodCard.slice(0, 2).map((item) => (
        <div key={item.id} className="flex border drop-shadow-lg rounded-md">
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

export default FoodCard;
