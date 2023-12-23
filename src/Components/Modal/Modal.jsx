import { motion } from "framer-motion";

export const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          className="flex justify-center items-center px-10 z-50 bg-black fixed inset-0  bg-opacity-50 backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          onClick={closeModal}
        >
          <div className="snap-y  snap-mandatory overflow-y-auto h-630 rounded-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
            {children}
          </div>
        </motion.div>
      )}
    </>
  );
};
