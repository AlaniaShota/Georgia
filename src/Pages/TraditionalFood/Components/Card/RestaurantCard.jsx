import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../Components/Button";

const loadMoreContentCount = 3;

const RestaurantCard = () => {
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
      <div className="grid grid-cols-3 gap-5">
        {recommendationRestaurant.slice(0, next).map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between h-[355px] border drop-shadow-md rounded-lg bg-white"
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="rounded-t-lg object-cover w-full h-52"
            />
            <div className="flex flex-col pl-4 ">
              <h1 className="text-xl font-normal">{item.name}</h1>
              <h3 className="text-sm text-BlackSecondColor font-light">
                {item.location}
              </h3>
            </div>
            <Link to={item.visit} className="ml-4 mb-2">
              <Button>
                <span className="text-darkBlueText text-sm font-medium">
                  WEBSITE
                </span>
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        {next < recommendationRestaurant?.length && (
          <Button onClick={handleMoreItem}>
            <span className=" text-md text-darkBlueText ">LOAD MORE</span>
          </Button>
        )}
      </div>
    </>
  );
};

export default RestaurantCard;
