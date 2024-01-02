import { Link } from "react-router-dom";
import {
  Hotel_First_Description,
  Hotel_Second_Description,
  Hotel_Title,
} from "../constants";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion, easeInOut } from "framer-motion";

export const PopularHotels = ({ data }) => {
  const popularHotelsImg = data.filter((item) => item.popular);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      cardAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.2 },
      });
    }
  }, [inView, cardAnimation]);

  const cardVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  const handleMouseEnter = (id) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div ref={ref} className="flex justify-between my-20">
      <motion.div
        variants={cardVariants}
        initial={{ opacity: 0, x: -70 }}
        animate={cardAnimation}
        className="flex flex-col justify-evenly basis-10/12"
      >
        <h1 className="lg:text-4xl sm:text-lg font-bold ">{Hotel_Title}</h1>
        <p className="lg:text-lg sm:text-xs font-medium text-BlackSecondColor mt-6 ">
          {Hotel_First_Description}
        </p>
        <p className="lg:text-lg sm:text-xs font-medium text-BlackSecondColor mt-6 ">
          {Hotel_Second_Description}
        </p>
      </motion.div>
      <motion.div
        className="basis-10/12 grid grid-cols-2 gap-1"
        variants={cardVariants}
        initial={{ opacity: 0, x: 70 }}
        animate={cardAnimation}
      >
        {popularHotelsImg.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            className=" shrink w-auto  h-auto  relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover rounded-md shadow-2xl"
            />
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center backdrop-blur-lg rounded-md w-full h-full"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: easeInOut }}
                  className="text-center text-3xl font-light text-white "
                >
                  {item.name}
                </motion.h1>
              </motion.div>
            )}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};
