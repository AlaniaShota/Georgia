import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "../../../../Components";
import { Link } from "react-router-dom";

export const PopularPlace = ({ placeData }) => {
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

  return (
    <div ref={ref}>
      {placeData.map((item, index) => (
        <div key={index} className="flex justify-between my-20 ">
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, x: -70 }}
            animate={cardAnimation}
            className="grid grid-cols-2 gap-1 w-2/4 h-auto min-2xl:h-737"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.5 }}
              src={item.firstImg}
              alt="Popular Place"
              className="w-full h-full object-cover rounded-lg drop-shadow-md  transition-all"
            />

            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.5 }}
              src={item.secondImg}
              alt="Popular Place"
              className="w-full h-full object-cover rounded-lg drop-shadow-md"
            />
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.5 }}
              src={item.thirdImg}
              alt="Popular Place"
              className="w-full h-full object-cover rounded-lg drop-shadow-md"
            />
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.5 }}
              src={item.fourthImg}
              alt="Popular Place"
              className="w-full h-full object-cover rounded-lg drop-shadow-md"
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, x: 70 }}
            animate={cardAnimation}
            className="flex flex-col justify-center items-end text-right ml-10 w-2/4 text-black"
          >
            <h1 className="lg:text-4xl sm:text-xl min-2xl:text-5xl font-bold ">
              {item.title}
            </h1>
            <p className="lg:text-lg sm:text-base min-2xl:text-2xl my-6 font-light">
              {item.description}
            </p>
            <Link to="/plane">
              <Button border>
                <span className="lg:text-lg min-2xl:text-2xl sm:text-base text-darkBlueText">
                  Plane Tour
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
