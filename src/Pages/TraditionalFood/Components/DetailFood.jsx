import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import RecommendationRestaurant from "./Recommendation/RecommendationRestaurant";
import { Button } from "../../../Components/Button";
import Header from "../../../Components/Header";

const DetailFood = () => {
  const [moreInformation, setMoreInformation] = useState(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch(`/api/foods/${params.id}`)
      .then((res) => res.json())
      .then((data) => setMoreInformation(data.foods));
  }, [params.id]);

  const search = location.state?.search || "";
  const searchCategory = location.state?.type || "ALL";

  function ItemContent() {
    return (
      <>
        <Header
          titlePage={`${moreInformation.name}`}
          // titleText={Dishes_Title}
          // descriptionText={Dishes_Description}
          // img={foodImg}
        />
        <div className="border drop-shadow-md rounded-lg bg-white my-20">
          <img
            src={moreInformation.img}
            alt={moreInformation.name}
            className="rounded-t-lg object-contain"
          />
          <Link to={`..${search}`} relative="path" className="flex mt-10 pl-4">
            <Button>
              <span className="text-darkBlueText font-medium">
                &larr; BACK TO {searchCategory}
              </span>
            </Button>
          </Link>
          <div className="flex justify-between">
            <div className="flex flex-col flex-wrap justify-center items-start px-4">
              {moreInformation.type ? (
                <h6 className="text-BlackSecondColor font-light">
                  {moreInformation.type}
                </h6>
              ) : null}
              <h1 className="text-4xl font-semibold">{moreInformation.name}</h1>
              {moreInformation.location ? (
                <h4 className="text-BlackSecondColor text-lg font-light">
                  {moreInformation.location}
                </h4>
              ) : (
                <h4 className="text-BlackSecondColor font-medium">
                  Most iconic:
                </h4>
              )}
            </div>
            <div className="my-8 px-4">
              <img
                src={moreInformation.map}
                alt={moreInformation.name}
                className="object-cover w-[150px]"
              />
            </div>
          </div>
          <p className="text-lg  px-4 pb-5">{moreInformation.about}</p>
          <RecommendationRestaurant />
        </div>
      </>
    );
  }

  return (
    <div className="lg:container sm:mx-8 lg:mx-0">
      {moreInformation ? <ItemContent /> : <h1>Loading</h1>}
    </div>
  );
};

export default DetailFood;
