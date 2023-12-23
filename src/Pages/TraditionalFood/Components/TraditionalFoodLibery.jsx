import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Dishes_Title, Dishes_Description } from "./Card/constants";
import { FilterButton, Food, RandomFood } from "./index";
import { Header } from "../../../Components/index";
import foodImg from "../../../assets/traditional-food-img/georgia-traditional-food-image.jpg";
import { useFoodStore } from "../../../Store/store";

gsap.registerPlugin(TextPlugin);

export const TraditionalFoodLibery = () => {
  const { foods = [] } = useFoodStore((state) => state.foods);
  const fetchFoods = useFoodStore((state) => state.fetchFoods);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  const categoryFilter = searchParams.get("type");

  return (
    <>
      <Header
        titlePage={"Traditional food Library"}
        titleText={Dishes_Title}
        descriptionText={Dishes_Description}
        img={foodImg}
      />
      <div className="lg:container sm:mx-8 lg:mx-0 my-20 ">
        <RandomFood />
        <FilterButton
          search={setSearchParams}
          categoryFilter={categoryFilter}
        />
        <Food foods={foods} categoryFilter={categoryFilter} />
      </div>
    </>
  );
};
