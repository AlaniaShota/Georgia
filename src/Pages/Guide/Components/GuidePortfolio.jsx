import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useParams } from "react-router-dom";
import { Button, Header } from "../../../Components";
import { UsersComments } from "../../../Components/User/index";

export const GuidePortfolio = () => {
  const [guide, setGuide] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const params = useParams();

  const cardAnimation = useAnimation();
  useEffect(() => {
    fetch(`/api/guides/${params.id}`)
      .then((res) => res.json())
      .then((data) => setGuide(data.guides));
    if (inView) {
      cardAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.2 },
      });
    }
  }, [params.id, inView, cardAnimation]);

  const cardVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Header
        titleText={guide.name}
        titlePage={guide.name}
        descriptionText={guide.description}
        img={guide.img}
      />
      <div className="flex flex-col [&>*:nth-child(2)]:flex-row-reverse [&>*:nth-child(2)]:text-end m-auto w-10/12 my-20 min-2xl:w-9/12">
        {guide.gender === "Male" ? (
          <h1 className="min-2xl:text-5xl lg:text-4xl sm:text-2xl font-medium py-4">
            He recommends
          </h1>
        ) : (
          <h1 className="min-2xl:text-5xl lg:text-4xl sm:text-2xl font-medium py-4">
            She recommends
          </h1>
        )}
        {guide.recommended
          ? guide.recommended.map((item) => (
              <div
                ref={ref}
                key={item.id}
                className="flex flex-row items-center mb-20 "
              >
                <motion.div
                  className="flex-1 px-10"
                  variants={cardVariants}
                  initial={{ opacity: 0, x: -70 }}
                  animate={cardAnimation}
                >
                  <h1 className="lg:text-4xl min-2xl:text-5xl sm:text-lg font-medium">
                    {item.title}
                  </h1>
                  <p className="font-light min-2xl:text-2xl lg:text-base sm:text-xs my-10 ">
                    {item.description}
                  </p>
                  <Link to={`/location/${item.link}`}>
                    <Button border>
                      <span className="lg:text-lg min-2xl:text-2xl sm:text-base text-darkBlueText">
                        SEE MORE
                      </span>
                    </Button>
                  </Link>
                </motion.div>
                <div className="flex-1 grid grid-cols-2 lg:gap-5 sm:gap-2 ">
                  {Array.isArray(item.img) &&
                    item.img.map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        initial={{ opacity: 0, x: 70 }}
                        animate={cardAnimation}
                        className="w-auto  "
                      >
                        <img
                          src={imgSrc}
                          alt={`Image ${index}`}
                          className="w-full h-full object-cover rounded-md drop-shadow-2xl"
                        />
                      </motion.div>
                    ))}
                </div>
              </div>
            ))
          : null}
        <UsersComments data={guide.comments} img={guide.img} />
      </div>
    </>
  );
};
