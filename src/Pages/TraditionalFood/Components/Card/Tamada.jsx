import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tamadaImg from "../../../../assets/traditional-food-img/tamada.jpg";
import { Tamada_Title, Tamada_Description } from "../../constants";

gsap.registerPlugin(TextPlugin);

export const Tamada = () => {
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
        text: Tamada_Title,
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
        src={tamadaImg}
        alt="Tamada"
        className="w-full object-cover rounded-md h-630 "
      />
      <div className="absolute ml-20 opacity-100 ">
        <motion.h1
          ref={titleTextRef}
          initial={{ opacity: 0 }}
          animate={titleAnimation}
          className="text-left text-4xl text-white font-bold"
        ></motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={descriptionAnimation}
          className="w-497 pt-6 text-whiteSecondText text-lg font-semibold"
        >
          {Tamada_Description}
        </motion.p>
      </div>
    </motion.div>
  );
};
