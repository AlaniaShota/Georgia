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
