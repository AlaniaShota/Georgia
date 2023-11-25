import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MultiHeaderParallax from "./Components/MultiHeaderParallax";
import MultiAlphabetDrag from "./Components/MultiAlphabetDrag";
import MultiHeritageAnimation from "./Components/MultiHeritageAnimation";

const cardVariants = {
  offscreen: {
    y: 200,
  },

  onscreen: {
    y: 150,
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
        return <MultiHeritageAnimation />;
      // სატესტოდ
      // case "C":
      //   return <MultiAlphabetDrag />;
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
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        {renderComponent()}
      </motion.div>
    </motion.div>
  );
}

const customComponentsData = [["A"], ["B"], ["C"]];
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div>
        <MultiHeaderParallax />
      </div>
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

export default Home;
