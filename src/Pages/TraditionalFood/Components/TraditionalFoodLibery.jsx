import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { dishesDescription, dishesTitle } from "./Card/constants";

import FilterButton from "./FilterButton";
import RandomFood from "./Random/RandomFood";

import foodImg from "../../../assets/traditional-food-img/georgia-traditional-food-image.jpg";

const leadMoreContent = 15;

const TraditionalFoodLibery = () => {
  const [traditionalFood, setTraditionalFood] = useState([]);
  const [next, setNext] = useState(leadMoreContent);
  const [showMore, setShowMore] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => setTraditionalFood(data.foods));
  }, []);

  const handleMoreItem = () => {
    setNext(next + leadMoreContent);
  };

  const categoryFilter = searchParams.get("type");

  const displayedTraditionalFood = categoryFilter
    ? traditionalFood.filter((van) => van.type === categoryFilter)
    : traditionalFood;

  return (
    <div>
      <div className="flex w-full justify-start items-center flex-wrap">
        <img
          src={foodImg}
          alt="Tbilisi"
          className="object-cover h-[737px] w-full"
        />
        <div className="absolute ml-40">
          <h1 className="text-left text-2xl text-whiteText font-bold cursor-default">
            {dishesTitle}
          </h1>
          <p className="w-[497px] text-whiteText text-base font-normal cursor-default">
            {dishesDescription}
          </p>
        </div>
      </div>
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
            className="flex flex-col justify-between border drop-shadow-md rounded-lg bg-whiteBackground"
            key={item.id}
          >
            <img
              alt={item.name}
              src={item.img}
              className="object-cover rounded-t-lg  h-[200px]"
            />
            <div className="p-4">
              <h1 className="text-xl font-normal">{item.name}</h1>
              {item.location ? (
                <h3 className="text-sm text-textSecondColor font-normal my-3">
                  {item.location}
                </h3>
              ) : (
                <h3 className="text-sm text-textSecondColor font-normal my-3">
                  Most iconic:{" "}
                </h3>
              )}
              <h3 className="text-sm text-textSecondColor font-normal">
                {showMore ? item.about : `${item.about.substring(0, 200)}`}
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-center items-center w-full">
                <Link
                  to={`/library/${item.id}`}
                  state={{
                    search: `?${searchParams.toString()}`,
                    type: categoryFilter,
                  }}
                  onClick={() => setShowMore(!showMore)}
                >
                  <button
                    className="border border-buttonBorder hover:bg-buttonHover rounded-md py-1 px-4"
                    onClick={handleMoreItem}
                  >
                    <span className="text-sm font-medium text-buttonColor">
                      SHOW MORE
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {categoryFilter ? null : (
        <div className="flex justify-center items-center my-10">
          {next < traditionalFood?.length && (
            <button
              className="border border-buttonBorder  hover:bg-buttonHover  py-1 px-4 rounded-md"
              onClick={handleMoreItem}
            >
              <span className=" text-md text-buttonColor">LOAD MORE</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TraditionalFoodLibery;
