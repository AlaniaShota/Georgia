import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Helmet } from "react-helmet";

gsap.registerPlugin(TextPlugin);

export const Header = ({ titlePage, titleText, descriptionText, img }) => {
  const titleTextRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // const getTextSizeClass = (text) => {
  //   if (text.length < 100) {
  //     return "w-[700px]";
  //   }
  //   if (text.length < 1000) {
  //     return "w-[2000px]";
  //   }
  //   // if (text.length > 1000) {
  //   //   return "w-[50px]";
  //   // }
  // };

  const getTextSizeClass = (text) => {
    let sizeClass = "";
    switch (true) {
      case text.length < 200:
        sizeClass = "w-497";
        break;
      case text.length < 550:
        sizeClass = "w-[570px]";
        break;
      case text.length < 1000:
        sizeClass = "w-[700px]";
        break;
      default:
        sizeClass = "w-[300px]";
        break;
    }
    return sizeClass;
  };

  const titleAnimation = useAnimation();
  const descriptionAnimation = useAnimation();

  useEffect(() => {
    const firstTextElement = titleTextRef.current;

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

      gsap.to(firstTextElement, {
        stagger: 0.02,
        duration: 3,
        delay: 1,
        text: titleText,
        ease: "power1.inOut",
      });
    }
  }, [
    inView,
    titlePage,
    titleText,
    descriptionText,
    titleAnimation,
    descriptionAnimation,
    img,
  ]);

  const titleVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const titleSizeClass = getTextSizeClass(titleText);
  const descriptionSizeClass = getTextSizeClass(descriptionText);

  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <div className="flex flex-col">
        <div className="flex w-full justify-start items-center flex-wrap cursor-default">
          <img
            src={img}
            alt={titleText}
            className="object-cover h-737 w-full"
          />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={titleVariants}
            transition={{ duration: 1 }}
            className="absolute  ml-40 bg-transparent opacity-100 "
          >
            <motion.h1
              className={`${titleSizeClass}  text-4xl text-white font-bold `}
              ref={titleTextRef}
              initial={{ opacity: 0, y: 50 }}
              animate={titleAnimation}
            ></motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={descriptionAnimation}
              className={` ${descriptionSizeClass} text-lg mt-4 text-white `}
            >
              {descriptionText ? descriptionText : null}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
