import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
// import danceVideo from "../../../assets/home-video/Khorumi.mp4";
import { Dance_Description, Dance_Title } from "../constants";

const LanguageDance = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex justify-between items-center h-630 bg-black border drop-shadow-md rounded-md">
      <div className="flex flex-col justify-center items-start pl-10 my-20 ">
        <h1 className=" text-4xl text-white font-bold cursor-default">
          {Dance_Title}
        </h1>
        <p className="w-497 py-8 text-left text-whiteSecondText font-normal cursor-default">
          {Dance_Description}
        </p>
        <Link to="national-ballet">
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
      <div onClick={handleClick}>
        <ReactPlayer
          // url={danceVideo}
          playing={isPlaying}
          controls
          style={{ objectFit: "cover", marginRight: "20px" }}
        />
      </div>
    </div>
  );
};

export default LanguageDance;
