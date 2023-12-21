import { useState } from "react";
import ReactPlayer from "react-player";
import folkVideo from "../../../assets/home-video/Dato_Kenchiashvili_,_Bichiko_Navrozashvili.mp4";
import { Link } from "react-router-dom";
import { Folk_Description, Folk_Title } from "../constants";
import { ExploreButton } from "../../../Components/Button";

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
          <ExploreButton>
            <span className="text-sm font-normal">EXPLORE</span>
          </ExploreButton>
        </Link>
      </div>
    </div>
  );
};

export default UniqueFolk;
