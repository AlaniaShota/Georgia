import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay]}
        className="mySwiper  lg:w-[550px] lg:h-[650px] sm:w-[450px] sm:h-[550px]"
      >
        {sliderImg.map((item, index) => (
          <SwiperSlide key={index} className="rounded-lg">
            <img
              src={item}
              alt="Traditional Food"
              className="object-cover w-full h-full rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
