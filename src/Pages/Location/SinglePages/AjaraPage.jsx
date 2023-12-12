import React, { useState, useEffect } from "react";
import { Header } from "../../../Components";
import { FoodCard, ButtonViewMore, Tour } from "./Components/index";
import { Cuisine_Ajara_Description, Cuisine_Ajara_Title } from "../constant";
import { useLocationStore } from "../../../Store/store";

export const AjaraPage = () => {
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const filteredLocations = locations.filter((item) => {
    return item.title === "Ajara";
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
                src={item.major_Img}
                alt={item.secondary_Major_Title}
                className="rounded-md my-6 object-cover "
              />
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_First_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Second_Description}
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
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.secondary_Major_Third_Description}
              </p>
              <div className="flex justify-center items-center">
                {!viewMore && <ButtonViewMore setViewMore={setViewMore} />}
                {viewMore && (
                  <div className="flex flex-col">
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minor_Title}
                    </h1>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.secondary_Minor_Title}
                    </h1>
                    <img
                      loading="lazy"
                      src={item.secondary_Minor_Img}
                      alt={item.secondary_Minor_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondary_Minor_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.secondaryMinor_Title}
                    </h1>
                    <img
                      loading="lazy"
                      src={item.secondaryMinor_Img}
                      alt={item.secondaryMinor_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondaryMinor_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondaryMinor_Second_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.secondaryMinor_Third_Description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Tour tourData={item.tour} />
          </div>
        </React.Fragment>
      ))}
      <FoodCard
        cuisineTitle={Cuisine_Ajara_Title}
        cuisineDescription={Cuisine_Ajara_Description}
        filterCuisine={"Ajara"}
      />
    </>
  );
};
