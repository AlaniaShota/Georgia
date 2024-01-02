import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Things_To_Do_Title, Things_To_Do_Description } from "../constant";
import { useMapStore } from "../../../Store/store";

export const GeorgiaMap = () => {
  const [popover, setPopover] = useState(null);

  const { maps = [] } = useMapStore((state) => state.maps);
  const fetchMaps = useMapStore((state) => state.fetchMaps);

  useEffect(() => {
    fetchMaps();
  }, [fetchMaps]);

  const handleMouseOve = (event, itemName, itemImg) => {
    setPopover({
      show: true,
      x: event.clientX,
      y: event.clientY,
      itemName,
      itemImg,
    });
  };

  const handleMouseOut = () => {
    setPopover({
      show: false,
      x: 0,
      y: 0,
      itemName: null,
      itemImg: null,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center my-20">
        <h1 className=" text-4xl font-medium">{Things_To_Do_Title}</h1>
        <p className="text-center text-lg font-light pt-3 px-56">
          {Things_To_Do_Description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 my-20 ">
        {popover && (
          <div
            className={`col-start-1 col-span-1 top-${popover.y} left-${popover.x} relative `}
          >
            {popover.itemImg ? (
              <img
                src={popover.itemImg}
                alt={popover.itemName}
                className="object-cover relative h-[310px] w-full rounded-md"
              />
            ) : null}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-start  bg-transparent opacity-100">
              <h1 className="text-2xl ml-4 mb-4 text-white font-light ">
                {popover.itemName}
              </h1>
            </div>
          </div>
        )}
        <motion.div className="col-start-2 col-span-2 ">
          <svg
            baseProfile="tiny"
            version="1.2"
            viewBox="0 0 1000 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            {maps.map((item) => (
              <Link to={item.link} key={item.id}>
                <motion.path
                  key={item.id}
                  whileHover={{
                    scale: 1.01,
                    fill: "#ef3a50",
                  }}
                  d={item.d}
                  name={item.name}
                  initial={{
                    fill: item.name === "Abkhazia" ? "#ef3a50" : "#ececec",
                  }}
                  fill={
                    popover && popover.itemName === item.name ? "#ef3a50" : null
                  }
                  className="hover:fill-[#ef3a50] stroke-black stroke-1 cursor-pointer border-none"
                  onMouseOver={(event) =>
                    handleMouseOve(event, item.name, item.img)
                  }
                  onMouseOut={handleMouseOut}
                />
              </Link>
            ))}
            <circle cx="718.8" cy="284.5" id="0"></circle>
            <circle cx="908.2" cy="350.9" id="1"></circle>
            <circle cx="557" cy="368.7" id="2"></circle>
          </svg>
        </motion.div>
      </div>
    </>
  );
};
