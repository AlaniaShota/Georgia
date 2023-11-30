import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import alphabetImg from "../../../assets/home-img/Language-Header.jpeg";
import { Alphabet_Title, Alphabet_Description } from "../constants";
import { Link } from "react-router-dom";
import { ExploreButton } from "../../../Components/Button";

gsap.registerPlugin(TextPlugin);

const MultiAlphabetDrag = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleTextRef = useRef(null);
  const descriptionTextRef = useRef(null);

  useEffect(() => {
    const firstTextElement = titleTextRef.current;
    const secondTextElement = descriptionTextRef.current;

    gsap.to(firstTextElement, {
      stagger: 0.02,
      duration: 3,
      delay: 1,
      text: { value: Alphabet_Title },
      ease: "power1.inOut",
    });

    gsap.to(secondTextElement, {
      stagger: 0.02,
      duration: 5,
      delay: 3,
      text: Alphabet_Description,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="flex items-center justify-between  h-630  border drop-shadow-md rounded-md">
      <img
        src={alphabetImg}
        alt="Alphabet"
        className="rounded-md h-630 w-full bg-cover"
      />
      <div className="absolute ml-40">
        <motion.div ref={titleRef} className="flex items-center">
          <motion.h1
            className="text-3xl text-white font-bold my-7"
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
            dragElastic={0.5}
            drag
            dragConstraints={titleRef}
            ref={titleTextRef}
          ></motion.h1>
        </motion.div>
        <motion.div ref={descriptionRef}>
          <motion.p
            className="text-sm w-497  font-extralight my-6 pr-20 text-whiteSecondText"
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
            dragElastic={0.5}
            drag
            dragConstraints={descriptionRef}
            ref={descriptionTextRef}
          ></motion.p>
        </motion.div>
        <Link to="language">
          <ExploreButton>
            <span className="text-sm font-normal">EXPLORE</span>
          </ExploreButton>
        </Link>
      </div>
    </div>
  );
};

export default MultiAlphabetDrag;
