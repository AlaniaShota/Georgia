import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecommendationRestaurant = () => {
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
      <h1 className=" text-2xl">Recommendation Restaurant</h1>
      <div className="grid grid-cols-3 gap-8 mt-4">
        {randomData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between border drop-shadow-md  rounded-lg bg-whiteBackground"
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="rounded-t-lg object-cover  h-52"
            />
            <div className="flex flex-col justify-center my-6 pl-4 ">
              <h1 className="text-xl font-normal">{item.name}</h1>
              <h3 className="text-sm text-textSecondColor font-light">
                {item.location}
              </h3>
            </div>
            <Link to={item.visit} className="ml-2 mb-2">
              <button className=" hover:bg-buttonHover hover:rounded-md py-1 px-2">
                <span className="text-buttonColor text-sm font-medium">
                  WEBSITE
                </span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationRestaurant;
