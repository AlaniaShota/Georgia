import React, { useState, useEffect } from "react";
import { FoodCard, Header } from "../../../Components";
import { ButtonViewMore, Tour, PopularPlace, Banner } from "./Components/index";
import {
  Cuisine_Mtskheta_Mtianeti_Description,
  Cuisine_Mtskheta_Mtianeti_Title,
} from "../constant";
import { useLocationStore } from "../../../Store/store";

export const MtskhetaMtianetiPage = () => {
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const filteredLocations = locations.filter((item) => {
    return item.title === "Mtskheta-Mtianeti";
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
              <img
                className="rounded-md my-6 object-cover "
                src={item.major_Img}
                alt={item.major_Title}
              />
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Description}
              </p>
              <h1 className="text-3xl mb-6 font-semibold">
                {item.secondary_Major_Title}
              </h1>
              <img
                src={item.secondary_Major_Img}
                alt={item.secondary_Major_Title}
                className="rounded-md my-6 object-cover "
              />
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.secondary_Major_First_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.secondary_Major_Second_Description}
              </p>
              <div className="flex justify-center items-center">
                {!viewMore && <ButtonViewMore setViewMore={setViewMore} />}
                {viewMore && (
                  <div className="flex flex-col">
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minor_Title}
                    </h1>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Second_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Third_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.secondary_Minor_Title}
                    </h1>
                    <img
                      className="rounded-md my-6 object-cover "
                      loading="lazy"
                      src={item.secondary_Minor_Img}
                      alt={item.minor_Title}
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Second_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Third_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Fourth_Description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Tour tourData={item.tour} />
            <FoodCard
              title={Cuisine_Mtskheta_Mtianeti_Title}
              description={Cuisine_Mtskheta_Mtianeti_Description}
              filterCuisine={"Mtskheta Mtianeti"}
            />
            <Banner bannerData={item.topExperiences} />
            <PopularPlace placeData={item.popular} />
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
