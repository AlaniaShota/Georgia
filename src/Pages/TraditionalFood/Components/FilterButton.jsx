import { motion } from "framer-motion";
const FilterButton = ({ search, categoryFilter }) => {
  return (
    <div className="mb-5 mt-20">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "SAVORY PIE" })}
      >
        <span className="text-sm font-normal text-darkBlueText">
          SAVORY PIE
        </span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "STEW" })}
      >
        <span className="text-sm font-normal text-darkBlueText">STEW</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "CHEESE" })}
      >
        <span className="text-sm font-normal text-darkBlueText">CHEESE</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "SAUCE" })}
      >
        <span className="text-sm font-normal text-darkBlueText">SAUCE</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "DESSERT" })}
      >
        <span className="text-sm font-normal text-darkBlueText">DESSERT</span>
      </motion.button>
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
