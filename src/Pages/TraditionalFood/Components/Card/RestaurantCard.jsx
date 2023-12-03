import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../Components/Button";

const loadMoreContentCount = 3;

export const RestaurantCard = () => {
  const [recommendationRestaurant, setRecommendationRestaurant] = useState([]);
  const [next, setNext] = useState(loadMoreContentCount);

  useEffect(() => {
    fetch("/api/restaurants")
      .then((res) => res.json())
      .then((data) => setRecommendationRestaurant(data.restaurants));
  });

  const handleMoreItem = () => {
    setNext(next + loadMoreContentCount);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-16 mt-5">
        {recommendationRestaurant.slice(0, next).map((item) => (
          <div
            key={item.id}
            className="flex flex-col  border drop-shadow-lg rounded-md bg-white"
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="rounded-t-md object-cover w-full h-52"
            />
            <div className="grid grid-cols-2 m-4">
              <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold">{item.name}</h1>
                <p className="text-xs  text-BlackSecondColor font-light">
                  {item.location}
                </p>
              </div>
              <Link
                to={item.visit}
                target="_blank"
                className="flex justify-end items-end "
              >
                <Button>
                  <span className="text-darkBlueText font-medium">WEBSITE</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        {next < recommendationRestaurant?.length && (
          <Button border onClick={handleMoreItem}>
            <span className=" text-md text-darkBlueText ">LOAD MORE</span>
          </Button>
        )}
      </div>
    </>
  );
};
