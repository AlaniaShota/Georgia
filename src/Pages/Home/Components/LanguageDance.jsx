import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import danceVideo from "../../../assets/home-video/Khorumi.mp4";
import { Dance_Description, Dance_Title } from "../constants";
import { ExploreButton } from "../../../Components/Button";

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
          <ExploreButton>
            <span className="text-sm font-normal">EXPLORE</span>
          </ExploreButton>
        </Link>
      </div>
      <div onClick={handleClick}>
        <ReactPlayer
          url={danceVideo}
          playing={isPlaying}
          controls
          style={{ objectFit: "cover", marginRight: "20px" }}
        />
      </div>
    </div>
  );
};

export default LanguageDance;
