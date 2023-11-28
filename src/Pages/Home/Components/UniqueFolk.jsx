import { motion } from "framer-motion";
import { useState } from "react";
import ReactPlayer from "react-player";
import folkVideo from "../../../assets/home-video/Dato_Kenchiashvili_,_Bichiko_Navrozashvili.mp4";
import { Link } from "react-router-dom";
import { Folk_Description, Folk_Title } from "../constants";

const UniqueFolk = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex justify-between items-center h-630 bg-black border drop-shadow-md rounded-md">
      <div onClick={handleClick}>
        <ReactPlayer
          url={folkVideo}
          playing={isPlaying}
          controls
          style={{ objectFit: "cover", marginLeft: "20px" }}
        />
      </div>
      <div className="flex flex-col justify-center items-end pr-10 my-20 ">
        <h1 className=" text-4xl   text-white font-bold cursor-default">
          {Folk_Title}
        </h1>
        <p className="w-497 py-8 text-right text-whiteSecondText font-normal cursor-default">
          {Folk_Description}
        </p>
        <Link to="unique-folk">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="border border-white hover:bg-whiteSecondBackground py-1 px-4 rounded-md"
          >
            <span className="text-sm font-normal text-white hover:text-black">
              EXPLORE
            </span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default UniqueFolk;
