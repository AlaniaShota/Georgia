import { motion } from "framer-motion";

export function ExploreButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="border border-white hover:bg-whiteSecondBackground text-white hover:text-black py-1 px-4  mt-10 rounded-md"
    >
      {children}
    </motion.button>
  );
}

export function Button({ children, onClick, margin }) {
  const marginStyle = margin ? `mr-${margin}` : "";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`border border-middleBlueBorderColor hover:bg-middleBlueHoverColor rounded-md py-1 px-4 ${marginStyle}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
