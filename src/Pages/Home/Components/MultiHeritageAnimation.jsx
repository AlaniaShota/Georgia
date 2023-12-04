import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ExploreButton } from "../../../Components/Button";
import { Cradle_Wine_Title, Cradle_Wine_Description } from "../constants";
import kvevriImg from "../../../assets/home-img/akhaltsikhe-winemakeing.jpg";

export const MultiHeritageAnimation = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-row justify-center items-center h-630  border drop-shadow-md rounded-md "
    >
      <div className="flex w-full justify-start items-center flex-wrap">
        <motion.img
          src={kvevriImg}
          alt="Kvevri"
          className="rounded-md h-630 w-full bg-cover"
          style={{
            transform: isInView ? "none" : "translateX(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
        <motion.div
          className="absolute ml-40 bg-transparent opacity-100 cursor-default"
          style={{
            transform: isInView ? "none" : "translateX(-80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
        >
          <h1 className=" text-4xl text-white font-bold ">
            {Cradle_Wine_Title}
          </h1>
          <p className="w-497 py-8 text-whiteSecondText text-lg ">
            {Cradle_Wine_Description}
          </p>
          <Link to="heritage">
            <ExploreButton>
              <span className="text-lg ">EXPLORE</span>
            </ExploreButton>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
