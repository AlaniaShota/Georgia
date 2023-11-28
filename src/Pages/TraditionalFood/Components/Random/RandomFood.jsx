import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const RandomFood = ({ randomFood }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Link
      to={`/library/${randomFood.id}`}
      className={`flex justify-between  basis-1 my-4  border drop-shadow-md  rounded-lg bg-white`}
    >
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-col justify-center px-6 py-5 w-[650px]"
      >
        <h1 className="text-3xl text-start">{randomFood.name}</h1>
        <p className="text-sm text-BlackSecondColor pt-4">
          {`${randomFood.about.substring(0, 500)}...`}
        </p>
      </motion.div>
      <div className="basis-1/2">
        <img
          src={randomFood.img}
          alt={randomFood.name}
          className={`object-cover rounded-lg h-80`}
        />
      </div>
    </Link>
  );
};

export default RandomFood;
