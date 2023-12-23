import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import batumiImg from "../../../assets/location/batumi.jpeg";
import { Recommendation_Title, Recommendation_Description } from "../constant";
import { Button, ExploreButton } from "../../../Components";
import { Link } from "react-router-dom";

gsap.registerPlugin(TextPlugin);

export const RecommendationCard = () => {
  const titleTextRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const titleAnimation = useAnimation();
  const descriptionAnimation = useAnimation();

  useEffect(() => {
    const firstTextElement = titleTextRef.current;

    if (inView) {
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
        stagger: 0.02,
        duration: 3,
        delay: 1,
        text: Recommendation_Title,
        ease: "power1.inOut",
      });
    }
  }, [inView, titleAnimation, descriptionAnimation]);

  const titleVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={titleVariants}
      transition={{ duration: 1 }}
      className="my-20 flex w-full justify-start items-center flex-wrap h-630 border drop-shadow-xl rounded-md"
    >
      <img
        src={batumiImg}
        alt="Batumi"
        className="w-full object-cover rounded-md h-full "
      />
      <div className="absolute ml-20 ">
        <motion.h1
          ref={titleTextRef}
          initial={{ opacity: 0 }}
          animate={titleAnimation}
          className="text-left text-4xl text-white font-semibold"
        ></motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={descriptionAnimation}>
          <p className="w-497 py-6 text-white text-lg font-light">
            {Recommendation_Description}
          </p>
          <Link to="imereti">
            <ExploreButton>
              <span className="text-lg ">SEE MORE</span>
            </ExploreButton>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
