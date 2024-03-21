import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../Components/index";

export const RecommendationRestaurant = () => {
  const [randomRestaurant, setRandomRestaurant] = useState([]);
  useEffect(() => {
    fetch("/api/restaurants")
      .then((res) => res.json())
      .then((data) => setRandomRestaurant(data.restaurants));
  }, []);

  const randomData = randomRestaurant
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="mt-8 ">
      <h1 className="pl-4 text-3xl min-2xl:text-4xl font-medium">
        Recommendation Restaurant
      </h1>
      <div className="grid grid-cols-3 gap-12 mt-5">
        {randomData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col mx-4 border drop-shadow-md rounded-md bg-white"
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="rounded-t-md object-cover w-full h-52"
            />
            <div className="grid grid-cols-2 m-4">
              <div className="flex flex-col items-start">
                <h1 className="text-xl font-normal">{item.name}</h1>
                <p className="text-xs text-BlackSecondColor font-light">
                  {item.location}
                </p>
              </div>
              <Link
                to={item.visit}
                target="_blank"
                className="flex justify-end items-end"
              >
                <Button>
                  <span className="text-darkBlueText font-medium">WEBSITE</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
