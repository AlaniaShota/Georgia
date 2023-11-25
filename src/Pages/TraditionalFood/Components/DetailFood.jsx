import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import RecommendationRestaurant from "./Recommendation/RecommendationRestaurant";

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
      <div className="border drop-shadow-md rounded-lg bg-white my-20">
        <img
          src={moreInformation.img}
          alt={moreInformation.name}
          className="rounded-t-lg object-contain"
        />
        <Link to={`..${search}`} relative="path" className="flex mt-2 pl-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor rounded-md py-2 px-4"
          >
            <span className="text-darkBlueText font-medium">
              &larr; BACK TO {searchCategory}
            </span>
          </motion.button>
        </Link>
        <div className="flex justify-between">
          <div className="flex flex-col flex-wrap justify-center items-start px-4">
            {moreInformation.type ? (
              <h6 className="text-secondColor">{moreInformation.type}</h6>
            ) : null}
            <h1 className="text-4xl">{moreInformation.name}</h1>
            {moreInformation.location ? (
              <h4 className="text-secondColor text-xl">
                {moreInformation.location}
              </h4>
            ) : (
              <h4 className="text-secondColor text-xl">Most iconic:</h4>
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
        <p className="text-xl font-medium px-4 pb-5">{moreInformation.about}</p>
        <RecommendationRestaurant />
      </div>
    );
  }

  return (
    <div className="lg:container sm:mx-8 lg:mx-0">
      {moreInformation ? <ItemContent /> : <h1>Loading</h1>}
    </div>
  );
};

export default DetailFood;
