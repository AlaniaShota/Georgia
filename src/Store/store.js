import { create } from "zustand";

export const useLocationStore = create((set) => ({
  locations: [],
  fetchLocations: async () => {
    try {
      const response = await fetch(`/api/locations`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      set({ locations: data });
    } catch (error) {
      console.error("There was a problem fetching the tour data:", error);
    }
  },
}));

export const useFoodStore = create((set) => ({
  foods: [],
  fetchFoods: async () => {
    try {
      const response = await fetch(`/api/foods`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      set({ foods: data });
    } catch (error) {
      console.error("There was a problem fetching the tour data:", error);
    }
  },
}));

export const useSeasonsStore = create((set) => ({
  seasons: [],
  fetchSeasons: async () => {
    try {
      const response = await fetch(`/api/seasons`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      set({ seasons: data });
    } catch (error) {
      console.error("There was a problem fetching the tour data:", error);
    }
  },
}));

export const useGuideStore = create((set) => ({
  guides: [],
  selectedGuide: null,
  fetchGuide: async () => {
    try {
      const response = await fetch(`/api/guides`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      set({ guides: data });
    } catch (error) {
      console.error("There was a problem fetching the tour data:", error);
    }
  },

  fetchGuideById: async (id) => {
    try {
      const response = await fetch(`/api/guides/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      set({ selectedGuide: data });
    } catch (error) {
      console.error("There was a problem fetching the tour data:", error);
    }
  },
}));

// export const useGuideIdStore = create((set) => ({
//   guidesId: [],
//   fetchGuideId: async () => {
//     try {
//       const response = await fetch(`/api/guides/:id`);
//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }
//       const data = await response.json();
//       set({ guidesId: data });
//     } catch (error) {
//       console.error("There was a problem fetching the tour data:", error);
//     }
//   },
// }));

export const useRestaurantStore = create((set) => ({
  restaurants: [],
  fetchRestaurants: async () => {
    try {
      const response = await fetch(`/api/restaurants`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      set({ restaurants: data });
    } catch (error) {
      console.error("There was a problem fetching the tour data:", error);
    }
  },
}));

export const useHotelStore = create((set) => ({
  hotels: [],
  fetchHotels: async () => {
    try {
      const response = await fetch("/api/hotels");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      set({ hotels: data });
    } catch (error) {
      console.error("There was a problem fetching the tour data:", error);
    }
  },
}));
