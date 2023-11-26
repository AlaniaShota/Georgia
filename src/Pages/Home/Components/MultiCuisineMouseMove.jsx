import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Cuisine_Description, Cuisine_Title } from "../constants";
import testImg from "../../../assets/home-img/test.jpeg";
import { Link } from "react-router-dom";

const MultiCuisineMouseMove = () => {
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
      x: mousePosition.x - 190,
      y: mousePosition.y - 190,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 190,
      y: mousePosition.y - 190,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="flex items-center justify-center ">
      <div className="flex w-full justify-end place-items-center flex-wrap">
        <img src={testImg} alt="Test" className="bg-cover " />
        <div className="fixed h-96 mr-8  bg-white rounded-full">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="flex flex-col justify-center items-center h-96 w-full"
          >
            <h1 className=" text-4xl  font-bold cursor-default">
              {Cuisine_Title}
            </h1>
            <p className="w-[497px] py-8 px-12 text-secondColor font-normal cursor-default">
              {Cuisine_Description}
            </p>
            <Link to="heritage">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4   rounded-md"
              >
                <span className="text-sm font-normal text-darkBlueText">
                  EXPLORE
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        variants={variants}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        animate={cursorVariant}
        className="bg-[#111] h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none"
      ></motion.div>
    </div>
  );
};

export default MultiCuisineMouseMove;
