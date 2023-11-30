import { motion } from "framer-motion";
import { Button } from "../../../Components/Button";

const FilterButton = ({ search, categoryFilter }) => {
  return (
    <div className="mb-5 mt-20">
      <Button margin="4" onClick={() => search({ type: "SAVORY PIE" })}>
        <span className="text-sm font-normal text-darkBlueText">
          SAVORY PIE
        </span>
      </Button>
      <Button margin="4" onClick={() => search({ type: "STEW" })}>
        <span className="text-sm font-normal text-darkBlueText">STEW</span>
      </Button>
      <Button margin="4" onClick={() => search({ type: "CHEESE" })}>
        <span className="text-sm font-normal text-darkBlueText">CHEESE</span>
      </Button>
      <Button margin="4" onClick={() => search({ type: "SAUCE" })}>
        <span className="text-sm font-normal text-darkBlueText">SAUCE</span>
      </Button>
      <Button margin="4" onClick={() => search({ type: "DESSERT" })}>
        <span className="text-sm font-normal text-darkBlueText">DESSERT</span>
      </Button>
      {categoryFilter ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => search({})}
        >
          <span>Clear filter</span>
        </motion.button>
      ) : null}
    </div>
  );
};

export default FilterButton;
