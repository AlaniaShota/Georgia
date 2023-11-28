import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { Dishes_Title, Dishes_Description } from "./Card/constants";

import FilterButton from "./FilterButton";
import RandomFood from "./Random/RandomFood";

import foodImg from "../../../assets/traditional-food-img/georgia-traditional-food-image.jpg";
import { Button } from "../../../Components/Button";

const loadMoreContentCount = 15;

const TraditionalFoodLibery = () => {
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
    <div>
      <div className="flex w-full justify-start items-center flex-wrap">
        <img
          src={foodImg}
          alt="Tbilisi"
          className="object-cover h-[737px] w-full"
        />
        <div className="absolute ml-40">
          <h1 className="text-left text-2xl text-white font-bold cursor-default">
            {Dishes_Title}
          </h1>
          <p className="w-497 text-white font-normal cursor-default">
            {Dishes_Description}
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
            className="flex flex-col justify-between border drop-shadow-md rounded-lg bg-white"
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
                <h3 className="text-sm text-BlackSecondColor font-normal my-3">
                  {item.location}
                </h3>
              ) : (
                <h3 className="text-sm text-BlackSecondColor font-normal my-3">
                  Most iconic:
                </h3>
              )}
              <h3 className="text-sm text-BlackSecondColor font-normal">
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
                  <Button onClick={handleMoreItem}>
                    <span className="text-sm font-medium text-darkBlueText">
                      SHOW MORE
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {categoryFilter ? null : (
        <div className="flex justify-center items-center my-10">
          {next < traditionalFood?.length && (
            <Button onClick={handleMoreItem}>
              <span className=" text-md text-darkBlueText">LOAD MORE</span>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default TraditionalFoodLibery;
