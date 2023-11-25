import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  Culture_Title,
  Culture_Description,
  Wine_Title,
  Wine_Description,
  Cradle_Wine_Title,
  Cradle_Wine_Description,
} from "../constants";
import kvevriImg from "../../../assets/home-img/kvevri.webp";

const MultiHeritageAnimation = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-row justify-center items-center  bg-white border drop-shadow-md rounded-md"
    >
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-80px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex items-start justify-center flex-col ml-3"
      >
        <h1 className="text-2xl py-10">{Cradle_Wine_Title}</h1>
        <p className="text-lg text-left ">{Cradle_Wine_Description}</p>
        <Link to="heritage">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4  mt-10 rounded-md"
          >
            <span className="text-sm font-normal text-darkBlueText">
              EXPLORE
            </span>
          </motion.button>
        </Link>
      </motion.div>
      <div className="flex flex-col justify-evenly">
        <div className=" mr-5 text-end">
          <h1 className="text-xl pb-3  pl-12">{Culture_Title}</h1>
          <p className="text-sm ">{Culture_Description}</p>
        </div>
        <div className="mt-10 mr-5 text-end">
          <h1 className="text-xl pb-3">{Wine_Title}</h1>
          <p className="text-sm ">{Wine_Description}</p>
        </div>
      </div>
      <motion.img
        src={kvevriImg}
        alt="Kvevri"
        className="rounded-md h-[470px] object-cover"
        style={{
          transform: isInView ? "none" : "translateX(80px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
        }}
      />
    </motion.div>
  );
};

export default MultiHeritageAnimation;
