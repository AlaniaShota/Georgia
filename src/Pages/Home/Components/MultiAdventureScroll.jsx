import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ExploreButton } from "../../../Components/Button";
import { Link } from "react-router-dom";
import natureFirstImg from "../../../assets/home-img/nature-of-georgia.jpg";
import natureSecondImg from "../../../assets/home-img/why-georgia-nature.jpg";
import ushguliImg from "../../../assets/home-img/ushguli.jpg";
import {
  First_Scroll_Title,
  First_Scroll_Description,
  Second_Scroll_Title,
  Second_Scroll_Description,
  Third_Scroll_Title,
  Third_Scroll_Description,
} from "../constants";

const MultiAdventureScroll = () => {
  const slides = [
    {
      id: "el1",
      image: natureSecondImg,
      title: First_Scroll_Title,
      description: First_Scroll_Description,
      link: "seasons",
    },

    {
      id: "el2",
      image: ushguliImg,
      title: Second_Scroll_Title,
      description: Second_Scroll_Description,
      link: "travel-and-create",
    },
    {
      id: "el3",
      image: natureFirstImg,
      title: Third_Scroll_Title,
      description: Third_Scroll_Description,
      link: "unique-nature",
    },
  ];

  return (
    <div className="relative h-630 border drop-shadow-md rounded-md overflow-hidden">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className="h-630 rounded-md"
        modules={[Navigation, Autoplay]}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id} className="relative object-cover">
            <img src={item.image} alt={item.title} />
            <div className="absolute ml-40 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start  bg-transparent opacity-100">
              <div className="flex items-center opacity-100 cursor-default">
                <h1 className="text-3xl text-white font-bold ">{item.title}</h1>
              </div>
              <div>
                <p className="text-lg w-497  font-medium pt-6 pr-20 text-whiteSecondText">
                  {item.description}
                </p>
              </div>
              <Link to={item.link}>
                <ExploreButton>
                  <span className="text-lg font-normal">EXPLORE</span>
                </ExploreButton>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MultiAdventureScroll;
