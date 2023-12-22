import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Dishes_Title, Dishes_Description } from "./Card/constants";
import { Detail, FilterButton, RandomFood } from "./index";
import { Header, Button } from "../../../Components/index";
import foodImg from "../../../assets/traditional-food-img/georgia-traditional-food-image.jpg";
import { useFoodStore } from "../../../Store/store";

gsap.registerPlugin(TextPlugin);

export const TraditionalFoodLibery = () => {
  const loadMoreContentCount = 15;
  const { foods = [] } = useFoodStore((state) => state.foods);
  const fetchFoods = useFoodStore((state) => state.fetchFoods);
  const [next, setNext] = useState(loadMoreContentCount);
  const [showMore, setShowMore] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  const handleMoreItem = () => {
    setNext(next + loadMoreContentCount);
  };

  const categoryFilter = searchParams.get("type");

  // const displayedTraditionalFood = categoryFilter
  //   ? foods.filter((van) => van.type === categoryFilter)
  //   : foods;

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
      </div>
      <div className="grid grid-cols-3 gap-5 lg:container sm:mx-8 lg:mx-0">
        <Detail foods={foods} />
      </div>
      {categoryFilter ? null : (
        <div className="flex justify-center items-center my-10">
          {next < foods?.length && (
            <Button border onClick={handleMoreItem}>
              <span className=" text-md text-darkBlueText">LOAD MORE</span>
            </Button>
          )}
        </div>
      )}
    </>
  );
};
