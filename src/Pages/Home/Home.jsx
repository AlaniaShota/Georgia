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
      className={` ${isFirst ? "" : " my-16"}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>{renderComponent()}</motion.div>
    </motion.div>
  );
}

const customComponentsData = [["A"], ["B"], ["C"], ["D"], ["E"]];

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <>
        <MultiHeaderParallax />
      </>
      <div className="m-auto w-10/12 min-2xl:w-9/12">
        {customComponentsData.map(([componentType], index) => (
          <Card
            customComponent={componentType}
            key={index}
            isFirst={index === 0}
          />
        ))}
      </div>
    </>
  );
};
