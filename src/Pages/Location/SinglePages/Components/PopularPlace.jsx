import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
            className="flex flex-wrap gap-4 "
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.5 }}
              src={item.firstImg}
              alt="Popular Place"
              className="w-[285px] h-[222px] object-cover rounded-lg drop-shadow-md  transition-all"
            />

            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.5 }}
              src={item.secondImg}
              alt="Popular Place"
              className="w-[285px] h-[222px] object-cover rounded-lg drop-shadow-md"
            />
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.5 }}
              src={item.thirdImg}
              alt="Popular Place"
              className="w-[285px] h-[222px] object-cover rounded-lg drop-shadow-md"
            />
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.5 }}
              src={item.fourthImg}
              alt="Popular Place"
              className="w-[285px] h-[222px] object-cover rounded-lg drop-shadow-md"
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, x: 70 }}
            animate={cardAnimation}
            className="flex flex-col justify-center items-end text-right mr-4 w-2/3 text-black"
          >
            <h1 className="text-4xl font-bold mb-5">{item.title}</h1>
            <p className="text-lg font-light">{item.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
