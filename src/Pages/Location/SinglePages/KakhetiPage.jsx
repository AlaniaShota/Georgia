import React, { useState, useEffect } from "react";
import { FoodCard, Header } from "../../../Components";
import { ButtonViewMore, Tour, PopularPlace, Banner } from "./Components/index";
import {
  Cuisine_Kakheti_Title,
  Cuisine_Kakheti_Description,
} from "../constant";
import { useLocationStore } from "../../../Store/store";

export const KakhetiPage = () => {
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const filteredLocations = locations.filter((item) => {
    return item.title === "Kakheti";
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
                {item.major_First_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Second_Description}
              </p>
              <img
                src={item.major_Img}
                alt={item.major_Title}
                className="rounded-md my-6 object-cover "
              />
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Third_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Fourth_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Fifth_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Sixth_Description}
              </p>
              <div className="flex justify-center items-center">
                {!viewMore && <ButtonViewMore setViewMore={setViewMore} />}
                {viewMore && (
                  <div className="flex flex-col">
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Second_Description}
                    </p>
                    <img
                      loading="lazy"
                      src={item.minor_Img}
                      alt={item.major_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Third_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Fourth_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Fifth_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Sixth_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Seventh_Description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Tour tourData={item.tour} />
            <FoodCard
              title={Cuisine_Kakheti_Title}
              description={Cuisine_Kakheti_Description}
              filterCuisine={"Kakheti"}
            />
            <Banner bannerData={item.topExperiences} />
            <PopularPlace placeData={item.popular} />
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
