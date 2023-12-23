import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { useFoodStore } from "../../Store/store";

export const FoodCard = ({ filterCuisine, title, description }) => {
  const { foods = [] } = useFoodStore((state) => state.foods);
  const fetchFoods = useFoodStore((state) => state.fetchFoods);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardAnimation = useAnimation();

  useEffect(() => {
    fetchFoods();

    if (inView) {
      cardAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.2 },
      });
    }
  }, [inView, cardAnimation, fetchFoods]);

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
      className="grid grid-cols-3 my-20 gap-5 h-[480px] "
    >
      <motion.div className="flex flex-col justify-between items-start cursor-default  bg-white">
        <motion.h1 className="text-2xl font-bold ">{title}</motion.h1>
        <motion.p className="text-lg font-light pr-8">{description}</motion.p>
        <Link to="/library">
          <Button border>
            <span className="font-medium text-lg text-darkBlueText">
              EXPLORE MORE
            </span>
          </Button>
        </Link>
      </motion.div>
      {foods
        .filter((item) => item.cuisine === filterCuisine)
        .slice(0, 2)
        .map((item) => (
          <div key={item.id} className="flex">
            <Link to={`/library/${item.id}`}>
              <motion.img
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  transition: "all 0.9s",
                }}
                src={item.img}
                alt={item.name}
                className="h-full object-cover drop-shadow-lg rounded-md "
              />
            </Link>
          </div>
        ))}
    </motion.div>
  );
};
