import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const BannerCard = ({ bannerData, openModal }) => {
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
  return (
    <>
      <div ref={ref} className="grid grid-cols-3 gap-16 my-20">
        {bannerData.map((item) => (
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, y: 70 }}
            animate={cardAnimation}
            key={item.id}
            className="cursor-pointer"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", velocity: 0.2 }}
              src={item.bgImg}
              alt="Georgia"
              onClick={() => openModal(item.id)}
              className="object-cover drop-shadow-lg rounded-lg h-[480px]"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};
