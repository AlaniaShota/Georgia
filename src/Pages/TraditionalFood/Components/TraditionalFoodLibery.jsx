import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Dishes_Title, Dishes_Description } from "./Card/constants";
import { FilterButton, RandomFood } from "./index";
import { Header, Button } from "../../../Components/index";
import foodImg from "../../../assets/traditional-food-img/georgia-traditional-food-image.jpg";

gsap.registerPlugin(TextPlugin);

const loadMoreContentCount = 15;

export const TraditionalFoodLibery = () => {
  const [traditionalFood, setTraditionalFood] = useState([]);
  const [next, setNext] = useState(loadMoreContentCount);
  const [showMore, setShowMore] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => setTraditionalFood(data.foods));
  }, []);

  const handleMoreItem = () => {
    setNext(next + loadMoreContentCount);
  };

  const categoryFilter = searchParams.get("type");

  const displayedTraditionalFood = categoryFilter
    ? traditionalFood.filter((van) => van.type === categoryFilter)
    : traditionalFood;

  return (
    <>
      <Header
        titlePage={"Traditional food Library"}
        titleText={Dishes_Title}
        descriptionText={Dishes_Description}
        img={foodImg}
      />
      <div className="lg:container sm:mx-8 lg:mx-0 my-20 [&>*:nth-child(2)]:flex-row-reverse">
        {traditionalFood
          .sort(() => 0.5 - Math.random())
          .slice(0, 2)
          .map((item, index) => (
            <RandomFood key={index} randomFood={item} />
          ))}
        <FilterButton
          search={setSearchParams}
          categoryFilter={categoryFilter}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 lg:container sm:mx-8 lg:mx-0">
        {displayedTraditionalFood.slice(0, next).map((item) => (
          <div
            className="flex flex-col justify-between border drop-shadow-md rounded-md bg-white"
            key={item.id}
          >
            <img
              alt={item.name}
              src={item.img}
              className="object-cover rounded-t-md h-[200px]"
            />
            <div className="pt-1 px-4">
              <h1 className="text-2xl ">{item.name}</h1>
              {item.location ? (
                <h3 className="text-sm text-BlackSecondColor font-light my-3">
                  {item.location}
                </h3>
              ) : (
                <h3 className="text-sm text-BlackSecondColor font-light my-3">
                  Most iconic:
                </h3>
              )}
              <p className="text-sm text-BlackSecondColor font-light">
                {showMore ? item.about : `${item.about.substring(0, 200)}`}
              </p>
            </div>
            <div className="flex justify-center items-center w-full p-4">
              <Link
                to={`/library/${item.id}`}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: categoryFilter,
                }}
                onClick={() => setShowMore(!showMore)}
              >
                <Button border onClick={handleMoreItem}>
                  <span className=" text-darkBlueText">SEE MORE</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {categoryFilter ? null : (
        <div className="flex justify-center items-center my-10">
          {next < traditionalFood?.length && (
            <Button border onClick={handleMoreItem}>
              <span className=" text-md text-darkBlueText">LOAD MORE</span>
            </Button>
          )}
        </div>
      )}
    </>
  );
};
