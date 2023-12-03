import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import {
  Folk_Description,
  Folk_Title,
  Dance_Description,
  Dance_Title,
} from "../constants";
import folkVideo from "../../../assets/home-video/Dato_Kenchiashvili_,_Bichiko_Navrozashvili.mp4";
import danceVideo from "../../../assets/home-video/Khorumi.mp4";
import { ExploreButton } from "../../../Components/Button";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const videoContent = [
    {
      id: "el1",
      title: Folk_Title,
      description: Folk_Description,
      video: folkVideo,
      link: "unique-folk",
    },
    {
      id: "el2",
      title: Dance_Title,
      description: Dance_Description,
      video: danceVideo,
      link: "unique-folk",
    },
  ];
  return (
    <>
      {videoContent.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center h-630 bg-black border drop-shadow-md rounded-md my-20"
        >
          <div onClick={handleClick}>
            <ReactPlayer
              url={item.video}
              playing={isPlaying}
              controls
              style={{ objectFit: "cover", marginLeft: "20px" }}
            />
          </div>
          <div className="flex flex-col justify-center items-end bg-transparent opacity-100 pr-10  cursor-default">
            <h1 className=" text-4xl text-white font-bold ">{item.title}</h1>
            <p className="w-497 text-lg text-right text-whiteSecondText font-light  pl-7 py-8 ">
              {item.description}
            </p>
            <Link to={item.link}>
              <ExploreButton>
                <span className="text-lg font-normal">EXPLORE</span>
              </ExploreButton>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
