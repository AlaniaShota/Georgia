import { RecommendationCard } from "../../../Components";
import { Recommendation_Description, Recommendation_Title } from "../constants";
import tbilisiImg from "../../../assets/hotel/tbilisi-botanical-garden-gnta.jpg";

export const Recommendation = () => {
  const data = [
    {
      id: 1,
      title: Recommendation_Title,
      description: Recommendation_Description,
      img: tbilisiImg,
      link: "/location/tbilisi",
    },
  ];

  return <RecommendationCard data={data} />;
};
