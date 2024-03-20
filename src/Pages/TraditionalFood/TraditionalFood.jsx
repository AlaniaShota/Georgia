import { Header, Section } from "../../Components/index";
import { FoodCard } from "../../Components/Card/index";
import foodImg from "../../assets/traditional-food-img/georgia-traditional-food-image2.jpg";
import { Slide } from "./Components/Slide";
import { RestaurantCard, Tamada } from "./Components/Card/index";
import {
  Page_Title,
  About_Page,
  Tradition_Title,
  Tradition_First_Description,
  Tradition_Second_Description,
  Dishes_Title,
  Dishes_Description,
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
      <div className="m-auto w-10/12 cursor-default">
        <Section
          title={Tradition_Title}
          firstDescription={Tradition_First_Description}
          secondDescription={Tradition_Second_Description}
        />
        <Slide />
        <RestaurantCard />
        <Tamada />
        <FoodCard title={Dishes_Title} description={Dishes_Description} />
      </div>
    </>
  );
};
