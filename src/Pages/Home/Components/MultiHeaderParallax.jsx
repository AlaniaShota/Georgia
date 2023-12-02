import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import homeImg from "../../../assets/home-img/home-img-georgia.jpg";
import cloudsImg from "../../../assets/home-img/why_hero_clouds.webp";
import parallaxButtonImg from "../../../assets/home-img/image-bottom.png";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const MultiHeaderParallax = () => {
  const ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const secondaryTextElement = textRef.current;
    gsap.registerPlugin(TextPlugin);

    gsap.to(secondaryTextElement, {
      stagger: 0.02,
      color: "#B22222",
      duration: 2,
      delay: 2,
      ease: "power1.inOut",
      text: {
        value: "Sakartvelo",
      },
    });
  }, []);

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
        className="w-full h-screen overflow-hidden relative grid place-items-center"
      >
        <AnimatePresence>
          <motion.div
            style={{ y: textY }}
            className="font-light text-white text-9xl md:text-9xl relative z-20"
          >
            <h1>
              Why <span ref={textRef}>Georgia</span>
            </h1>
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-bottom	"
          style={{
            y: backgroundY,
          }}
        >
          <img src={homeImg} alt="Town" />
        </motion.div>
        <motion.div className="absolute inset-0 z-20 bg-cover bg-bottom	">
          <img src={parallaxButtonImg} alt="Town" />
        </motion.div>
        <motion.div className="absolute inset-0 z-10 opacity-5 bg-cover">
          <img src={cloudsImg} alt="Cloud" />
        </motion.div>
      </div>
    </div>
  );
};

export default MultiHeaderParallax;
