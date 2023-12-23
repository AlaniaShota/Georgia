import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  MultiAdventureScroll,
  MultiAlphabetDrag,
  MultiCuisineMouseMove,
  MultiHeaderParallax,
  MultiHeritageAnimation,
  Video,
} from "./Components/index";

const cardVariants = {
  offscreen: {
    y: 100,
  },

  onscreen: {
    y: 70,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({ customComponent, isFirst }) {
  const renderComponent = () => {
    switch (customComponent) {
      case "A":
        return <MultiAlphabetDrag />;
      case "B":
        return <MultiCuisineMouseMove />;
      case "C":
        return <MultiHeritageAnimation />;
      case "D":
        return <Video />;
      case "E":
        return <MultiAdventureScroll />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={` ${isFirst ? "" : "scroll-py-40 my-20"}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {renderComponent()}
      </motion.div>
    </motion.div>
  );
}

const customComponentsData = [["A"], ["B"], ["C"], ["D"], ["E"]];

export const Home = () => {
  return (
    <div>
      <Helmet>
        {/* <meta charSet="utf-8" /> */}
        <title>Home</title>
      </Helmet>
      <>
        <MultiHeaderParallax />
      </>
      <div className="lg:container sm:mx-8 lg:mx-0 ">
        {customComponentsData.map(([componentType], index) => (
          <Card
            customComponent={componentType}
            key={index}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};
