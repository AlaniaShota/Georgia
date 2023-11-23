import { Helmet } from "react-helmet";
import foodImg from "../../assets/traditional-food-img/georgia-traditional-food-image2.jpg";
import tamadaImg from "../../assets/traditional-food-img/tamada.jpg";
import RestaurantCard from "./Components/Card/RestaurantCard";
import FoodCard from "./Components/Card/FoodCard";
import { SliderLibrary } from "./Components/SliderLibrary";
import {
  aboutPage,
  pageTitle,
  recommendationTitle,
  recommendationWord,
  supraDescription,
  supraTitle,
  tamadaDescription,
  tamadaTitle,
  traditionFirstDescription,
  traditionTitle,
  traditionSecondDescription,
} from "./constants";

const TraditionalFood = () => {
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
          <h1 className="text-left text-2xl text-[#fff] font-bold cursor-default">
            {pageTitle}
          </h1>
          <p className="w-[497px] text-[#fff] text-base font-normal cursor-default">
            {aboutPage}
          </p>
        </div>
      </div>
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-bold mb-5 text-center cursor-default">
            {traditionTitle}
          </h1>
          <p className="text-base text-textSecondColor font-medium mb-5 text-center w-[740px] cursor-default">
            {traditionFirstDescription}
          </p>
          <p className="text-center text-textSecondColor text-base font-medium w-[740px] cursor-default">
            {traditionSecondDescription}
          </p>
        </div>
        <div className="my-20 grid grid-cols-2 gap-2  ">
          <div className="flex flex-col justify-evenly items-start ">
            <h1 className="text-2xl font-bold cursor-default">{supraTitle}</h1>
            <p className=" lg:text-lg sm:text-sm font-semibold ">
              {supraDescription}
            </p>
          </div>
          <SliderLibrary />
        </div>
        <div className="flex flex-col my-20 ">
          <h1 className="text-xl font-semibold cursor-default">
            {recommendationTitle}
          </h1>
          <p className="text-base font-light py-3 cursor-default">
            {recommendationWord}
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
              <h1 className="text-left text-2xl text-[#fff] font-bold cursor-default">
                {tamadaTitle}
              </h1>
              <p className="w-[497px] text-[#fff] text-base font-normal cursor-default">
                {tamadaDescription}
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
