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
          className="flex lg:justify-between sm:justify-center items-center  lg:h-630 sm:h-470 bg-black border drop-shadow-md rounded-md mb-20"
        >
          <div onClick={handleClick} className="w-auto h-auto">
            <ReactPlayer
              url={item.video}
              playing={isPlaying}
              controls
              style={{
                objectFit: "cover",
                marginLeft: "20px",
                position: "relative",
              }}
            />
          </div>
          <div className="flex flex-col flex-wrap justify-center text-right items-end bg-transparent opacity-100 pr-10  cursor-default">
            <h1 className="lg:text-4xl sm:text-xl sm:pl-10 lg:pl-0 sm:pb-4 lg:pb-0 text-white font-bold ">
              {item.title}
            </h1>
            <p className="text-lg  text-whiteSecondText font-light  pl-20 py-8 md:hidden lg:flex">
              {item.description}
            </p>
            <Link to={item.link}>
              <ExploreButton>
                <span className="lg:text-lg sm:text-base font-normal">
                  EXPLORE
                </span>
              </ExploreButton>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
