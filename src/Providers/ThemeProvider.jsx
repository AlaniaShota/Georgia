import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const LocationContext = createContext();
export const TourContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ location: [] || null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/locations`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setLocation(data.locations);
      } catch (error) {
        console.error("There was a problem fetching the tour data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};
