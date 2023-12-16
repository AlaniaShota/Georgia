import { motion, transform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Title_Destinations } from "../constant";
import mtskhetaMtianetiImg from "../../../assets/location/Mtskheta Mtianeti.jpg";
import imeretiImg from "../../../assets/location/Imereti.jpg";
import kakhetiImg from "../../../assets/location/kaxeti.jpg";
import svanetiImg from "../../../assets/location/svaneti.jpg";
import samckheJavakhetiImg from "../../../assets/location/Samcxe Javaxeti.jpg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const LocationCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const cardAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      cardAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.2 },
      });
    }
  }, [inView, cardAnimation]);

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const data = [
    {
      id: 1,
      img: mtskhetaMtianetiImg,
      name: "Mtskheta-Mtianeti",
      link: "mtskheta-mtianeti",
    },
    { id: 2, img: imeretiImg, name: "Imereti", link: "imereti" },
    { id: 3, img: kakhetiImg, name: "Kakheti", link: "kakheti" },
    {
      id: 4,
      img: svanetiImg,
      name: "Samegrelo-Zemo Svaneti",
      link: "samegrelo-zemo-svaneti",
    },
    {
      id: 5,
      img: samckheJavakhetiImg,
      name: "Samtskhe-Javakhetis",
      link: "samtskhe-javakheti",
    },
  ];

  return (
    <>
      <div className="flex flex-col my-20">
        <h1 className="text-center text-5xl font-bold">{Title_Destinations}</h1>
      </div>
      <motion.div
        ref={ref}
        animate={cardAnimation}
        variants={cardVariants}
        initial={{ opacity: 0, y: 70 }}
        className="grid grid-cols-10 grid-rows-2 gap-3 "
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            style={{
              transition: "all 0.9s",
            }}
            className={`relative border drop-shadow-md h-[418px]  rounded-md
        ${item.id === 1 ? " col-start-1 col-end-5 " : ""}
        ${item.id === 2 || item.id === 3 ? "col-span-3 " : ""}
        ${item.id >= 4 ? "col-span-5" : ""}
        
      `}
          >
            <Link to={item.link}>
              <img
                src={item.img}
                alt={item.name}
                className="object-cover w-full h-full rounded-md"
              />
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-start  bg-transparent opacity-100">
                <h1 className="text-2xl ml-4 mb-4 text-white font-light">
                  {item.name}
                </h1>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
