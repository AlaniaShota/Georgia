import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import alphabetImg from "../../../assets/home-img/Language-Header.jpeg";
import { Alphabet_Title, Alphabet_Description } from "../constants";
import { Link } from "react-router-dom";
import { ExploreButton } from "../../../Components/Button";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(TextPlugin);

const MultiAlphabetDrag = () => {
  const titleTextRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const titleAnimation = useAnimation();
  const descriptionAnimation = useAnimation();

  useEffect(() => {
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

      gsap.to(titleTextRef.current, {
        stagger: 0.02,
        duration: 3,
        delay: 1,
        text: { value: Alphabet_Title },
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
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={titleVariants}
      transition={{ duration: 1 }}
      className="flex items-center justify-between h-630 border drop-shadow-md rounded-md "
      ref={ref}
    >
      <img
        src={alphabetImg}
        alt="Alphabet"
        className="rounded-md h-630 w-full bg-cover"
      />
      <div className="absolute ml-40 bg-transparent opacity-100 cursor-default">
        <motion.h1
          className="text-4xl text-white font-bold "
          ref={titleTextRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleAnimation}
        />
        <motion.div initial={{ opacity: 0 }} animate={descriptionAnimation}>
          <p className="w-497 transition-opacity  ease-in-out text-lg font-light py-8 pr-18 text-whiteSecondText">
            {Alphabet_Description}
          </p>
          <Link to="language">
            <ExploreButton>
              <span className="text-lg font-normal">EXPLORE</span>
            </ExploreButton>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MultiAlphabetDrag;
