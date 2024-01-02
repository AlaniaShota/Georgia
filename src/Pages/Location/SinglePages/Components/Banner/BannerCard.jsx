import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const BannerCard = ({ bannerData, openModal }) => {
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
        y: 0,
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
    <>
      <div ref={ref} className="grid grid-cols-3 lg:gap-6 sm:gap-5 my-20">
        {bannerData.map((item) => (
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, y: 70 }}
            animate={cardAnimation}
            key={item.id}
            className="relative  cursor-pointer "
            onClick={() =>
              openModal(
                item.id,
                item.monument
                  ? "monument"
                  : item.culture
                    ? "culture"
                    : "nature",
              )
            }
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <motion.img
              src={item.bgImg}
              alt="Georgia"
              className={`object-cover drop-shadow-lg rounded-lg lg:h-470 sm:h-auto `}
            />
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center backdrop-blur rounded-lg "
                onClick={() => openModal(item.id)}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="text-center text-6xl font-light "
                >
                  {item.title}
                </motion.h1>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};
