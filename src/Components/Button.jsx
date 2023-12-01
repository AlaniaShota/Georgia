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

export function Button({ children, onClick, margin, border }) {
  const marginStyle = margin ? `mr-${margin}` : "";
  const borderStyle = border
    ? `border border-middleBlueBorderColor hover:bg-middleBlueHoverColor rounded-md py-1 px-4`
    : "";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${borderStyle} ${marginStyle}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
