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
    { id: 1, name: David_Title, description: Breathtaking_Landscapes },
    { id: 2, name: Sophia_Title, description: Warm_Hospitality },
    { id: 3, name: Alessandr_Title, description: Rich_Cultural_Heritage },
    { id: 4, name: Léa_Title, description: Delicious_Cuisine },
    { id: 5, name: Alexander_Title, description: Vibrant_Wine_Culture },
    { id: 6, name: Isabella_Title, description: Thermal_Resorts },
    { id: 7, name: Mohammed_Title, description: Diverse_Climates },
    { id: 8, name: Emilia_Title, description: Tourism_Infrastructure },
    { id: 9, name: Victor_Title, description: Historical_Monuments },
    { id: 10, name: Eva_Title, description: Festivals_Events },
  ];
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <FontAwesomeIcon icon={faUser} className="mt-2 ml-2" size="xl" />
          <div className="flex flex-col ml-4">
            <h1 className="text-xl font-medium">{item.name}</h1>
            <p className="text-lg font-light">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
