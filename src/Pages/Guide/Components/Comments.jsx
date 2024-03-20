import {
  David_Title,
  Sophia_Title,
  Alessandr_Title,
  Léa_Title,
  Alexander_Title,
  Isabella_Title,
  Mohammed_Title,
  Emilia_Title,
  Victor_Title,
  Eva_Title,
  Breathtaking_Landscapes,
  Warm_Hospitality,
  Rich_Cultural_Heritage,
  Delicious_Cuisine,
  Vibrant_Wine_Culture,
  Thermal_Resorts,
  Diverse_Climates,
  Tourism_Infrastructure,
  Historical_Monuments,
  Festivals_Events,
} from "./constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Comments = () => {
  const data = [
    {
      id: 1,
      country: "Russia",
      countryImg: "/assets/hotel/Ru.png",
      name: David_Title,
      description: Breathtaking_Landscapes,
    },
    {
      id: 2,
      country: "Russia",
      countryImg: "/assets/hotel/Ru.png",

      name: Sophia_Title,
      description: Warm_Hospitality,
    },
    {
      id: 3,
      country: "Russia",
      countryImg: "/assets/hotel/Ru.png",

      name: Alessandr_Title,
      description: Rich_Cultural_Heritage,
    },
    {
      id: 4,
      country: "Georgia",
      countryImg: "/assets/hotel/Ge.png",
      name: Léa_Title,
      description: Delicious_Cuisine,
    },
    {
      id: 5,
      country: "Slovenia",
      countryImg: "/assets/hotel/Si.png",
      name: Alexander_Title,
      description: Vibrant_Wine_Culture,
    },
    {
      id: 6,
      country: "Hungary",
      countryImg: "/assets/hotel/Hu.png",
      name: Isabella_Title,
      description: Thermal_Resorts,
    },
    {
      id: 7,
      country: "United States",
      countryImg: "/assets/hotel/Us.png",
      name: Mohammed_Title,
      description: Diverse_Climates,
    },
    {
      id: 8,
      country: "Saudi Arabia",
      countryImg: "/assets/hotel/Sa.png",
      name: Emilia_Title,
      description: Tourism_Infrastructure,
    },
    {
      id: 9,
      country: "New Zealand",
      countryImg: "/assets/hotel/Nz.png",
      name: Victor_Title,
      description: Historical_Monuments,
    },
    {
      id: 10,
      country: "United States",
      countryImg: "/assets/hotel/Us.png",
      name: Eva_Title,
      description: Festivals_Events,
    },
  ];
  return (
    <div className="flex flex-col border shadow-md rounded-md !bg-white w-3/5 items-start">
      {data.map((item) => (
        <div key={item.id} className="flex border-b mt-1 p-4">
          <FontAwesomeIcon icon={faUser} className="mt-2 ml-2" size="xl" />
          <div className="flex flex-col ml-4">
            <h1 className="text-xl min-2xl:text-2xl font-medium">
              {item.name}
            </h1>
            <div className="flex items-center">
              <img
                src={item.countryImg}
                alt={item.country}
                className="object-cover w-4 h-4 min-2xl:w-8 min-2xl:h-8"
              />
              <span className="font-light pl-1 min-2xl:text-lg">
                {item.country}
              </span>
            </div>
            <p className="text-lg font-light min-2xl:text-2xl">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
