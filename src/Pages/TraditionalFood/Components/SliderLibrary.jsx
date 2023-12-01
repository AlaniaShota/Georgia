import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import swiperImgFifth from "../../../assets/traditional-food-img/georgia-traditional-food-image5.jpg";
import swiperImgSixth from "../../../assets/traditional-food-img/georgia-traditional-food-image6.jpg";
import swiperImgSeventh from "../../../assets/traditional-food-img/georgia-traditional-food-image7.jpg";
import swiperImgEighth from "../../../assets/traditional-food-img/georgia-traditional-food-image8.jpg";
import swiperImgNinth from "../../../assets/traditional-food-img/georgia-traditional-food-image9.jpg";
import swiperImgEleventh from "../../../assets/traditional-food-img/georgia-traditional-food-image11.jpg";
import swiperImgTwelfth from "../../../assets/traditional-food-img/georgia-traditional-food-image12.jpg";
import swiperImgThirteenth from "../../../assets/traditional-food-img/georgia-traditional-food-image14.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SliderLibrary() {
  const sliderImg = [
    swiperImgFifth,
    swiperImgSixth,
    swiperImgSeventh,
    swiperImgEighth,
    swiperImgNinth,
    swiperImgEleventh,
    swiperImgTwelfth,
    swiperImgThirteenth,
  ];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="lg:w-[550px] sm:w-[450px] sm:h-[550px] rounded-md border shadow-xl"
      >
        {sliderImg.map((item, index) => (
          <SwiperSlide key={index} className="">
            <img
              src={item}
              alt="Traditional Food"
              className="object-cover w-full h-full rounded-md "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
