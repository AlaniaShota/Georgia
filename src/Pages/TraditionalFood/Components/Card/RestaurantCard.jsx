import { useEffect } from "react";
import { Card } from "../../../../Components";
import { useRestaurantStore } from "../../../../Store/store";
import { Recommendation_Title, Recommendation_Word } from "../../constants";

export const RestaurantCard = () => {
  const { restaurants = [] } = useRestaurantStore((state) => state.restaurants);
  const fetchRestaurants = useRestaurantStore(
    (state) => state.fetchRestaurants,
  );

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return (
    <Card
      title={Recommendation_Title}
      description={Recommendation_Word}
      data={restaurants}
    />
  );
};
