import { motion } from "framer-motion";
import { useRef } from "react";

import alphabetImg from "../../../assets/home-img/qartuli-anbani.jpg";
import { Alphabet_Title, Alphabet_Description } from "../constants";
import { Link } from "react-router-dom";

const MultiAlphabetDrag = () => {
  const titleRef = useRef(null);

  const descriptionRef = useRef(null);

  return (
    <div className=" flex items-center justify-between p-7 h-[470px] bg-white border drop-shadow-md rounded-md">
      <img src={alphabetImg} alt="Alphabet" className="cover rounded-md" />
      <div className="flex flex-col">
        <motion.div ref={titleRef}>
          <motion.h1
            className="text-3xl font-bold my-7"
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
            className="text-sm font-extralight my-6 pr-20"
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
            dragElastic={0.5}
            drag
            dragConstraints={descriptionRef}
          >
            {Alphabet_Description}
          </motion.p>
        </motion.div>
        <Link to="language">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-36 border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4  rounded-md"
          >
            <span className="text-sm font-normal text-darkBlueText">
              EXPLORE
            </span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default MultiAlphabetDrag;
