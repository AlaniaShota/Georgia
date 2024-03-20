import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper style

export function SliderLibrary({ data }) {
  return (
    <Swiper
      autoplay={{
        delay: 15000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="sm:h-[550px] my-20 rounded-md border shadow-xl  mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex flex-row justify-between h-full">
            <div className="flex flex-col justify-center w-1/2 ml-14">
              <h1 className="lg:text-3xl sm:text-lg font-medium">
                {item.title}
              </h1>
              <p className=" lg:text-lg sm:text-xs font-light pt-8 pr-6">
                {item.description}
              </p>
            </div>
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="object-cover lg:w-[550px] sm:w-[450px] h-full rounded-r-md"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
