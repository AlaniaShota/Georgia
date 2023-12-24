import { RecommendationCard } from "../../../Components";
import batumiImg from "../../../assets/location/batumi.jpeg";
import { Recommendation_Title, Recommendation_Description } from "../constant";

export const Recommendation = () => {
  const data = [
    {
      id: 1,
      title: Recommendation_Title,
      description: Recommendation_Description,
      img: batumiImg,
      link: "imereti",
    },
  ];

  return <RecommendationCard data={data} />;
};
