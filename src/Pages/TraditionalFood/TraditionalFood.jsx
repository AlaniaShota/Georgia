import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import foodImg from "../../assets/traditional-food-img/georgia-traditional-food-image2.jpg";
import tamadaImg from "../../assets/traditional-food-img/tamada.jpg";
import RestaurantCard from "./Components/Card/RestaurantCard";
import FoodCard from "./Components/Card/FoodCard";
import { SliderLibrary } from "./Components/SliderLibrary";
import {
  Page_Title,
  About_Page,
  Tradition_Title,
  Tradition_First_Description,
  Tradition_Second_Description,
  Supra_Title,
  Supra_Description,
  Recommendation_Title,
  Recommendation_Word,
  Tamada_Title,
  Tamada_Description,
} from "./constants";

const TraditionalFood = () => {
  const titleTextRef = useRef(null);
  const descriptionTextRef = useRef(null);

  useEffect(() => {
    const firstTextElement = titleTextRef.current;
    const secondTextElement = descriptionTextRef.current;

    gsap.registerPlugin(TextPlugin);

    gsap.to(firstTextElement, {
      stagger: 0.02,
      duration: 3,
      delay: 1,
      text: Page_Title,
      ease: "power1.inOut",
    });

    gsap.to(secondTextElement, {
      stagger: 0.02,
      duration: 5,
      delay: 3,
      text: About_Page,
      ease: "power1.inOut",
    });
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Traditional food</title>
      </Helmet>
      <div className="flex w-full justify-start items-center flex-wrap">
        <img
          src={foodImg}
          alt="Tbilisi"
          className="object-cover h-[737px] w-full"
        />
        <div className="absolute ml-40">
          <h1
            className="text-left pb-2 text-4xl text-white font-bold cursor-default"
            ref={titleTextRef}
          ></h1>
          <p
            className="w-497 pt-2 text-white font-normal cursor-default"
            ref={descriptionTextRef}
          ></p>
        </div>
      </div>
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-bold mb-5 text-center cursor-default">
            {Tradition_Title}
          </h1>
          <p className="text-BlackSecondColor font-medium mb-5 text-center w-[740px] cursor-default">
            {Tradition_First_Description}
          </p>
          <p className="text-center text-BlackSecondColor font-medium w-[740px] cursor-default">
            {Tradition_Second_Description}
          </p>
        </div>
        <div className="my-20 grid grid-cols-2 gap-2  ">
          <div className="flex flex-col justify-evenly items-start ">
            <h1 className="text-2xl font-bold cursor-default">{Supra_Title}</h1>
            <p className=" lg:text-lg sm:text-sm font-semibold ">
              {Supra_Description}
            </p>
          </div>
          <SliderLibrary />
        </div>
        <div className="flex flex-col my-20 ">
          <h1 className="text-xl font-semibold cursor-default">
            {Recommendation_Title}
          </h1>
          <p className="font-light py-3 cursor-default">
            {Recommendation_Word}
          </p>
          <RestaurantCard />
        </div>
        <div>
          <div className="my-20 flex w-full justify-start items-center flex-wrap">
            <img
              src={tamadaImg}
              alt="Tamada"
              className="w-full rounded-xl border drop-shadow-lg"
            />
            <div className="absolute ml-20">
              <h1 className="text-left text-2xl text-white font-bold cursor-default">
                {Tamada_Title}
              </h1>
              <p className="w-497 text-white font-normal cursor-default">
                {Tamada_Description}
              </p>
            </div>
          </div>
          <FoodCard />
        </div>
      </div>
    </div>
  );
};

export default TraditionalFood;
