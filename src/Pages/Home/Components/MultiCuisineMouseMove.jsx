import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Cuisine_Description, Cuisine_Title } from "../constants";
import testImg from "../../../assets/home-img/test.jpeg";
import { Link } from "react-router-dom";
import { ExploreButton } from "../../../Components/Button";

export const MultiCuisineMouseMove = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full justify-end place-items-center flex-wrap">
        <img
          src={testImg}
          alt="Test"
          className="bg-cover min-2xl:w-full min-2xl:h-837 lg:h-630 sm:h-470 rounded-md"
        />
        <div className="fixed mr-8 bg-white rounded-full cursor-none">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="flex flex-col justify-center items-center min-2xl:h-600 h-[479px] w-full min-2xl:w-600 cursor-none"
          >
            <h1 className=" text-4xl  font-bold ">{Cuisine_Title}</h1>
            <p className="w-497 py-8 px-4 text-center text-black min-2xl:text-2xl text-lg font-light">
              {Cuisine_Description}
            </p>
            <Link to="delicious">
              <ExploreButton>
                <span className="text-lg min-2xl:text-2xl text-black ">EXPLORE</span>
              </ExploreButton>
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        variants={variants}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        animate={cursorVariant}
        className="bg-black  rounded-full fixed top-0 left-0 pointer-events-none "
      ></motion.div>
    </div>
  );
};
