import { motion } from "framer-motion";
import { useRef } from "react";

import alphabetImg from "../../../assets/home-img/Language-Header.jpeg";
import { Alphabet_Title, Alphabet_Description } from "../constants";
import { Link } from "react-router-dom";

const MultiAlphabetDrag = () => {
  const titleRef = useRef(null);

  const descriptionRef = useRef(null);

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
          >
            {Alphabet_Title}
          </motion.h1>
        </motion.div>
        <motion.div ref={descriptionRef}>
          <motion.p
            className="text-sm w-497  font-extralight my-6 pr-20 text-whiteSecondText"
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
            dragElastic={0.5}
            drag
            dragConstraints={descriptionRef}
          >
            {Alphabet_Description}
          </motion.p>
        </motion.div>

        <Link to="heritage">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="border border-white hover:bg-whiteSecondBackground py-1 px-4  mt-10 rounded-md"
          >
            <span className="text-sm font-normal text-white hover:text-black">
              EXPLORE
            </span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default MultiAlphabetDrag;
