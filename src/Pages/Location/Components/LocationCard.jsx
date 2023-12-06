import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { To_Do_Description, To_Do_Title } from "../constant";
import artAndCultureImg from "../../../assets/location/arts-and-culture.jpg";
import cityImg from "../../../assets/location/city-breaks.jpg";
import foodWineImg from "../../../assets/location/food-and-wine.jpg";
import attractionImg from "../../../assets/location/family-attractions.jpg";
import towerImg from "../../../assets/location/tower.jpg";
import wellnesImg from "../../../assets/location/wellness-resorts.jpg";
import { useEffect } from "react";

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
        transition: { duration: 2, delay: 0.5 },
      });
    }
  }, [inView, cardAnimation]);

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const data = [
    { id: 1, img: towerImg, name: "Cultural Monuments" },
    { id: 2, img: artAndCultureImg, name: "Arts & Culture" },
    { id: 3, img: foodWineImg, name: "Food and Wine" },
    { id: 4, img: attractionImg, name: "Family Attractions" },
    { id: 5, img: cityImg, name: "City Breaks" },
    { id: 6, img: wellnesImg, name: "Health & Wellness" },
  ];

  return (
    <>
      <div className="flex flex-col my-20">
        <h1 className="text-center text-4xl font-medium">{To_Do_Title}</h1>
        <p className="text-center text-lg font-light pt-3 px-56">
          {To_Do_Description}
        </p>
      </div>
      <motion.div
        ref={ref}
        animate={cardAnimation}
        variants={cardVariants}
        initial={{ opacity: 0, y: 70 }}
        className="grid grid-cols-12 grid-rows-2 gap-1 justify-between "
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={`relative border drop-shadow-md   rounded-md
        ${
          item.id === 1
            ? "row-start-1 row-end-4 col-start-1 col-end-7 w-[562px] h-[500px]"
            : ""
        }
        ${
          item.id === 2 || item.id === 3 ? "col-span-3 w-[281px] h-[243px]" : ""
        }
        ${item.id >= 4 ? "col-span-2 row-span-1 w-[178px] h-[247px]" : ""}
        
      `}
          >
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
          </div>
        ))}
      </motion.div>
    </>
  );
};
