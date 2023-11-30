import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { ExploreButton } from "../../../Components/Button";
import { Link } from "react-router-dom";
import natureFirstImg from "../../../assets/home-img/nature-of-georgia.jpg";
import natureSecondImg from "../../../assets/home-img/why-georgia-nature.jpg";
import ushguliImg from "../../../assets/home-img/ushguli.jpg";

const MultiAdventureScroll = () => {
  const slides = [
    {
      id: "el1",
      image: natureSecondImg,
      title: "4 Seasons in Georgia",
      description:
        "Did you know that at the intersection of Europe and Asia, at the foot of the Caucasus Mountains, on the shores of the Black Sea, there is a small country called Georgia?",
      link: "seasons",
    },

    {
      id: "el2",
      image: ushguliImg,
      title: "Discover Beauty of Georgia",
      description: "Travel and Create an Unforgettable Adventure!",
      link: "travel-and-create",
    },
    {
      id: "el3",
      image: natureFirstImg,
      title: "A Country That Creates Your Adventure",
      description: "Discover Unique Nature!",
      link: "unique-nature",
    },
  ];

  return (
    <div className="relative h-630 border drop-shadow-md rounded-md overflow-hidden">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        className="h-630 rounded-md "
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id} className="relative object-cover">
            <img src={item.image} alt={item.title} />
            <div className="absolute ml-40 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start p-8 text-white">
              <div className="flex items-center">
                <h1 className="text-3xl text-white font-bold my-7">
                  {item.title}
                </h1>
              </div>
              <div>
                <p className="text-lg w-497  font-medium my-6 pr-20 text-white">
                  {item.description}
                </p>
              </div>
              <Link to={item.link}>
                <ExploreButton>
                  <span className="text-sm font-normal">EXPLORE</span>
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
