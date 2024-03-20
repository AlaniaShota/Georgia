import { useEffect, useState } from "react";
import { useSeasonsStore } from "../../../Store/store";
import { Link } from "react-router-dom";
import { useAnimation, motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../../../Components/Button";

export const SeasonDisplay = () => {
  const fetchSeasons = useSeasonsStore((state) => state.fetchSeasons);
  const { seasons = [] } = useSeasonsStore((state) => state.seasons);
  const [currentSeasonData, setCurrentSeasonData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardAnimation = useAnimation();

  useEffect(() => {
    fetchSeasons();
    if (inView) {
      cardAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.2 },
      });
    }
  }, [fetchSeasons, inView, cardAnimation]);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    if (seasons && seasons.length > 0) {
      let currentSeason;
      switch (currentMonth) {
        case 1:
        case 2:
        case 12:
          currentSeason = "winter";
          break;
        case 3:
        case 4:
        case 5:
          currentSeason = "spring";
          break;
        case 6:
        case 7:
        case 8:
          currentSeason = "summer";
          break;
        case 9:
        case 10:
        case 11:
          currentSeason = "autumn";
          break;
        default:
          currentSeason = "winter";
          break;
      }

      const season = seasons.find((item) => item.hasOwnProperty(currentSeason));
      if (season) {
        setCurrentSeasonData(season[currentSeason]);
      }
    }
  }, [seasons]);

  const cardVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  const handleMouseEnter = (id) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {currentSeasonData ? (
        <div ref={ref} className="flex justify-between my-20 ">
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, x: -70 }}
            animate={cardAnimation}
            className="flex flex-col justify-center basis-10/12 min-2xl:basis-9/12 lg:pr-8 sm:pr-12"
          >
            <h1 className="lg:text-4xl sm:text-lg font-bold ">
              {currentSeasonData[0].title}
            </h1>
            <p className="lg:text-lg min-2xl:text-2xl sm:text-xs font-medium text-BlackSecondColor my-6 ">
              {currentSeasonData[0].description}
            </p>
            <Link to="/plane">
              <Button border>
                <span className="lg:text-lg min-2xl:text-2xl sm:text-base text-darkBlueText">
                  Plane Tour
                </span>
              </Button>
            </Link>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, x: 70 }}
            animate={cardAnimation}
            className="grid grid-cols-2 gap-1 basis-10/12 min-2xl:basis-9/12"
          >
            {currentSeasonData[0].firstPlace.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className=" shrink w-auto  h-auto relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center backdrop-blur-lg rounded-lg "
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                      className="text-center text-3xl font-light text-white"
                    >
                      {item.title}
                    </motion.h1>
                  </motion.div>
                )}
              </Link>
            ))}
            {currentSeasonData[0].secondPlace.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="w-auto h-auto relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md "
                />
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center backdrop-blur-lg rounded-lg "
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                      className="text-center text-3xl text-white font-light "
                    >
                      {item.title}
                    </motion.h1>
                  </motion.div>
                )}
              </Link>
            ))}
            {currentSeasonData[0].thirdPlace.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="w-auto h-auto relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center backdrop-blur-lg rounded-lg "
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                      className="text-center text-3xl text-white font-light "
                    >
                      {item.title}
                    </motion.h1>
                  </motion.div>
                )}
              </Link>
            ))}
            {currentSeasonData[0].fourthPlace.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="w-auto h-auto relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center backdrop-blur-lg rounded-lg "
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                      className="text-center text-3xl text-white font-light "
                    >
                      {item.title}
                    </motion.h1>
                  </motion.div>
                )}
              </Link>
            ))}
          </motion.div>
        </div>
      ) : null}
    </>
  );
};
