import { Card, Header } from "../../Components/index";
import foodImg from "../../assets/traditional-food-img/georgia-traditional-food-image2.jpg";
import { Slide } from "./Components/Slide";
import { RestaurantCard, FoodCard, Tamada } from "./Components";
import {
  Page_Title,
  About_Page,
  Tradition_Title,
  Tradition_First_Description,
  Tradition_Second_Description,
} from "./constants";

export const TraditionalFood = () => {
  return (
    <>
      <Header
        titlePage={"Traditional food"}
        titleText={Page_Title}
        descriptionText={About_Page}
        img={foodImg}
      />
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 cursor-default">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-bold  text-center ">
            {Tradition_Title}
          </h1>
          <p className="text-BlackSecondColor text-lg my-5 text-center w-[740px] ">
            {Tradition_First_Description}
          </p>
          <p className="text-center text-BlackSecondColor text-lg w-[740px] ">
            {Tradition_Second_Description}
          </p>
        </div>
        <Slide />
        <RestaurantCard />
        <Tamada />
        <FoodCard />
      </div>
    </>
  );
};
