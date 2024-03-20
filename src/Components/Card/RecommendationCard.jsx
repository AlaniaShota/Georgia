import { useEffect, useRef } from "react";
import { ExploreButton } from "../Button";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const RecommendationCard = ({ data }) => {
  const titleTextRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const titleAnimation = useAnimation();
  const descriptionAnimation = useAnimation();

  useEffect(() => {
    const firstTextElement = titleTextRef.current;

    if (inView && firstTextElement) {
      titleAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });

      descriptionAnimation.start({
        opacity: 1,
        transition: { duration: 2, delay: 3 },
      });

      gsap.to(firstTextElement, {
        text: data[0].title,
        duration: 3,
        delay: 1,
        ease: "power1.inOut",
      });
    }
  }, [inView, titleAnimation, descriptionAnimation, data]);

  const titleVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {data.map((item) => (
        <motion.div
          ref={ref}
          key={item.id}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          transition={{ duration: 1 }}
          className="my-20 flex w-full justify-start items-center flex-wrap min-2xl:h-737 h-full border drop-shadow-xl rounded-md"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full object-cover rounded-md h-full "
          />
          <div className="absolute ml-20 ">
            <motion.h1
              ref={titleTextRef}
              initial={{ opacity: 0 }}
              animate={titleAnimation}
              className="text-left min-2xl:text-5xl lg:text-4xl sm:text-xl text-white font-semibold"
            ></motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={descriptionAnimation}>
              <p className="w-497 min-2xl:w-697 py-6 text-white min-2xl:text-2xl lg:text-lg sm:text-base font-light">
                {item.description}
              </p>
              <Link to={item.link}>
                <ExploreButton>
                  <span className="min-2xl:text-2xl lg:text-lg sm:text-base">
                    SEE MORE
                  </span>
                </ExploreButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </>
  );
};
