import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Page_Title } from "../constants";

import homeImg from "../../../assets/home-img/home-img-georgia.jpg";
import cloudsImg from "../../../assets/home-img/why_hero_clouds.webp";
import parallaxButtonImg from "../../../assets/home-img/image-bottom.png";

const MultiHeaderParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div className="flex w-full justify-center items-center">
      <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center border border-red-800"
      >
        <motion.h1
          style={{ y: textY }}
          className="font-light text-white text-7xl md:text-9xl relative z-10"
        >
          {Page_Title}
        </motion.h1>
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        >
          <img src={homeImg} alt="Town" />
        </motion.div>
        <motion.div
          className="absolute inset-0 z-20"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <img src={parallaxButtonImg} alt="Town" />
        </motion.div>
        <motion.div
          className="absolute inset-0 z-10 opacity-5 "
          style={{
            backgroundSize: "cover",
          }}
        >
          <img src={cloudsImg} alt="Cloud" />
        </motion.div>
      </div>
    </div>
  );
};

export default MultiHeaderParallax;
