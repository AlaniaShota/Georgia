import React, { useState, useEffect } from "react";
import { Header } from "../../../Components";
import {
  FoodCard,
  ButtonViewMore,
  Tour,
  PopularPlace,
  Banner,
} from "./Components/index";
import {
  Cuisine_Racha_Lechkhumi_Description,
  Cuisine_Racha_Lechkhumi_Title,
} from "../constant";
import { useLocationStore } from "../../../Store/store";

export const RachaLechkhumiKvemoSvanetiPage = () => {
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const filteredLocations = locations.filter((item) => {
    return item.title === "Racha-Lechkhumi & Kvemo Svaneti";
  });

  return (
    <>
      {filteredLocations.map((item) => (
        <React.Fragment key={item.id}>
          <Header
            titlePage={item.title}
            titleText={item.title}
            descriptionText={item.title_Description}
            img={item.title_Img}
          />
          <div className="lg:container sm:mx-8 lg:mx-0 ">
            <div className="flex flex-col my-20 px-40">
              <h1 className="text-3xl mb-6 font-semibold">
                {item.major_Title}
              </h1>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Description}
              </p>
              <h1 className="text-3xl mb-6 font-semibold">
                {item.major_History_Title}
              </h1>
              <img
                src={item.major_History_Img}
                alt={item.major_History_Title}
                className="rounded-md my-6 object-cover "
              />
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_History_First_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_History_Second_Description}
              </p>

              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_History_Third_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_History_Fourth_Description}
              </p>
              <div className="flex justify-center items-center">
                {!viewMore && <ButtonViewMore setViewMore={setViewMore} />}
                {viewMore && (
                  <div className="flex flex-col">
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minor_Historical_Title}
                    </h1>
                    <img
                      loading="lazy"
                      src={item.minor_Historical_Img}
                      alt={item.minor_Historical_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Historical_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.secondary_Minor_Historical_Title}
                    </h1>
                    <img
                      className="rounded-md my-6 object-cover "
                      loading="lazy"
                      src={item.secondary_Minor_Historical_Img}
                      alt={item.secondary_Minor_Historical_Title}
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Historical_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Historical_Second_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Historical_Third_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Historical_Fourth_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minor_Title}
                    </h1>
                    <img
                      className="rounded-md my-6 object-cover "
                      loading="lazy"
                      src={item.minor_Img}
                      alt={item.minor_Title}
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minor_Cuisine_Title}
                    </h1>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Cuisine_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Cuisine_Second_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Cuisine_Third_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Cuisine_Fourth_Description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Tour tourData={item.tour} />
            <FoodCard
              cuisineTitle={Cuisine_Racha_Lechkhumi_Title}
              cuisineDescription={Cuisine_Racha_Lechkhumi_Description}
              filterCuisine={"Racha Lechkhumi"}
            />
            <Banner bannerData={item.topExperiences} />
            <PopularPlace placeData={item.popular} />
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
