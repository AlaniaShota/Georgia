import { motion } from "framer-motion";
import { Button } from "../../../Components/index";

export const FilterButton = ({ search, categoryFilter }) => {
  return (
    <div className="mb-5 mt-20 text-lg text-darkBlueText">
      <Button border margin="4" onClick={() => search({ type: "Popular" })}>
        <span>Popular</span>
      </Button>
      <Button border margin="4" onClick={() => search({ type: "Restaurant" })}>
        <span>Restaurant</span>
      </Button>
      {/* <Button border margin="4" onClick={() => search({ type: "CHEESE" })}>
        <span>CHEESE</span>
      </Button>
      <Button border margin="4" onClick={() => search({ type: "SAUCE" })}>
        <span>SAUCE</span>
      </Button>
      <Button border margin="4" onClick={() => search({ type: "DESSERT" })}>
        <span>DESSERT</span>
      </Button> */}
      {categoryFilter ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => search({})}
        >
          <span className="text-black">Clear filter</span>
        </motion.button>
      ) : null}
    </div>
  );
};
