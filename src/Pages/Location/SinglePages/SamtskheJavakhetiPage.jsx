import React, { useState, useEffect } from "react";
import { Header } from "../../../Components";
import { ButtonViewMore, Tour, PopularPlace, Banner } from "./Components/index";
import { useLocationStore } from "../../../Store/store";

export const SamtskheJavakhetiPage = () => {
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const filteredLocations = locations.filter((item) => {
    return item.title === "Samtskhe-Javakheti";
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
          <div className="m-auto w-10/12 min-2xl:w-9/12">
            <div className="flex flex-col my-20 px-20">
              <h1 className="text-3xl min-2xl:text-4xl min-2xl:mb-8 mb-6 font-semibold">
                {item.major_Title}
              </h1>
              <img
                className="rounded-md my-6 object-cover min-2xl:my-8"
                src={item.major_Img}
                alt={item.major_Title}
              />
              <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                {item.major_First_Description}
              </p>
              <h1 className="text-3xl min-2xl:text-4xl min-2xl:mb-8 mb-6 font-semibold">
                {item.secondary_Major_Title}
              </h1>
              <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                {item.secondary_Major_First_Description}
              </p>
              <img
                src={item.secondary_Major_Img}
                alt={item.secondary_Major_Title}
                className="rounded-md my-6 object-cover min-2xl:my-8"
              />
              <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                {item.secondary_Major_Second_Description}
              </p>
              <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                {item.secondary_Major_Third_Description}
              </p>
              <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                {item.secondary_Major_Fourth_Description}
              </p>
              <div className="flex justify-center items-center">
                {!viewMore && <ButtonViewMore setViewMore={setViewMore} />}
                {viewMore && (
                  <div className="flex flex-col">
                    <h1 className="text-3xl min-2xl:text-4xl min-2xl:mb-8 mb-6 font-semibold">
                      {item.minor_Title}
                    </h1>
                    <img
                      src={item.minor_Img}
                      alt={item.minor_Title}
                      className="rounded-md my-6 object-cover min-2xl:my-8"
                    />
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.minor_First_Description}
                    </p>
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.minor_Second_Description}
                    </p>
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.minor_Third_Description}
                    </p>
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.minor_Fourth_Description}
                    </p>
                    <h1 className="text-3xl min-2xl:text-4xl min-2xl:mb-8 mb-6 font-semibold">
                      {item.secondary_Minor_Title}
                    </h1>
                    <img
                      src={item.secondary_Minor_Img}
                      alt={item.secondary_Minor_Title}
                    />
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Description}
                    </p>
                    <h1 className="text-3xl min-2xl:text-4xl min-2xl:mb-8 mb-6 font-semibold">
                      {item.secondary_MinorTitle}
                    </h1>
                    <img
                      src={item.secondary_MinorImg}
                      alt={item.secondary_MinorTitle}
                      className="rounded-md my-6 object-cover min-2xl:my-8"
                    />
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.secondary_MinorFirst_Description}
                    </p>
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.secondary_MinorSecond_Description}
                    </p>
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.secondary_MinorThird_Description}
                    </p>
                    <h1 className="text-3xl min-2xl:text-4xl min-2xl:mb-8 mb-6 font-semibold">
                      {item.minor_Nature_Title}
                    </h1>
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.minor_Nature_First_Description}
                    </p>
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.minor_Nature_Second_Description}
                    </p>
                    <p className="text-lg font-light min-2xl:text-2xl text-BlackSecondColor pb-4">
                      {item.minor_Nature_Third_Description}
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
