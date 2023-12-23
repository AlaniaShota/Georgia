import React, { useState, useEffect } from "react";
import { FoodCard, Header } from "../../../Components";
import { ButtonViewMore, Tour, PopularPlace, Banner } from "./Components/index";
import {
  Cuisine_Imereti_Title,
  Cuisine_Imereti_Description,
} from "../constant";
import { useLocationStore } from "../../../Store/store";

export const ImeretiPage = () => {
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const filteredLocations = locations.filter((item) => {
    return item.title === "Imereti";
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
          <div className="m-auto w-10/12">
            <div className="flex flex-col my-20 px-40">
              <h1 className="text-3xl mb-6 font-semibold">
                {item.major_Title}
              </h1>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Description}
              </p>
              <h1 className="text-3xl mb-6 font-semibold">
                {item.secondary_Major_Title}
              </h1>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.secondaryMajor_Title}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.secondary_Major_Description}
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
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Fourth_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.secondary_Minor_Title}
                    </h1>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Second_Description}
                    </p>
                    <img
                      loading="lazy"
                      src={item.minor_Img}
                      alt={item.secondary_Minor_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Third_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Fourth_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Fifth_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Sixth_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.secondaryMinor_Title}
                    </h1>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondaryMinor_Description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Tour tourData={item.tour} />
            <Banner bannerData={item.topExperiences} />
            <PopularPlace placeData={item.popular} />
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
