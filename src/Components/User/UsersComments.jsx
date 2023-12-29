import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const UsersComments = ({ data, img }) => {
  const titleTextRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const descriptionAnimation = useAnimation();

  useEffect(() => {
    const firstTextElement = titleTextRef.current;

    if (inView) {
      descriptionAnimation.start({
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
      });

      gsap.to(firstTextElement, {
        stagger: 0.02,
        duration: 3,
        delay: 1,
        text: data,
        ease: "power1.inOut",
      });
    }
  }, [inView, data, descriptionAnimation]);

  const titleVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <h1 className="lg:text-4xl sm:text-3xl font-medium my-10">
        User`s Reviews
      </h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 border shadow-md rounded-md !bg-white">
          {data && data.length > 0
            ? data.map((item) => (
                <ul key={item.id} className="p-4 ">
                  <li className="flex border-b">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mt-2 ml-2"
                      size="xl"
                    />
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={titleVariants}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col ml-4"
                    >
                      <h1 className="lg:text-xl sm:text-lg font-medium">
                        {item.name}
                      </h1>
                      <div className="flex items-center">
                        <img
                          src={item.countryImg}
                          alt={item.country}
                          className="object-cover w-4 h-4"
                        />
                        <span className="font-light pl-1">{item.country}</span>
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={descriptionAnimation}
                        className=" lg:text-lg sm:text-base font-light"
                      >
                        {item.comment}
                      </motion.p>
                    </motion.div>
                  </li>
                </ul>
              ))
            : null}
        </div>
        <div className="col-span-1">
          <img
            src={img}
            alt="Guide"
            className="w-auto h-auto object-cover shadow-xl rounded-md"
          />
        </div>
      </div>
    </>
  );
};
