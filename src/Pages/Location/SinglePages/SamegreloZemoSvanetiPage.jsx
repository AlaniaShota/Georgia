import React, { useState, useEffect } from "react";
import { Header } from "../../../Components";
import {
  FoodCard,
  ButtonViewMore,
  Tour,
  PopularPlace,
} from "./Components/index";
import {
  Cuisine_Samegrelo_Description,
  Cuisine_Samegrelo_Title,
} from "../constant";
import { useLocationStore } from "../../../Store/store";

export const SamegreloZemoSvanetiPage = () => {
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const filteredLocations = locations.filter((item) => {
    return item.title === "Samegrelo-Zemo Svaneti";
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
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_First_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor ">
                {item.major_Second_Description}
              </p>
              <img
                src={item.major_Img}
                alt={item.title}
                className="rounded-md my-6 object-cover "
              />
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Third_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Fourth_Description}
              </p>
              <h1 className="text-3xl mb-6 font-semibold">
                {item.major_Nature_Title}
              </h1>
              <img
                src={item.major_Nature_Img}
                alt={item.major_Nature_Title}
                className="rounded-md my-6 object-cover "
              />
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Nature_First_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Nature_Second_Description}
              </p>
              <p className="text-lg font-light text-BlackSecondColor pb-4">
                {item.major_Nature_Third_Description}
              </p>
              <div className="flex justify-center items-center">
                {!viewMore && <ButtonViewMore setViewMore={setViewMore} />}
                {viewMore && (
                  <div className="flex flex-col">
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minor_Sights_Title}
                    </h1>
                    <img
                      loading="lazy"
                      src={item.minor_Sights_Img}
                      alt={item.minor_Sights_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Sights_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Sights_Second_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Sights_Third_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Sights_Fourth_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minor_Title}
                    </h1>
                    <img
                      loading="lazy"
                      src={item.minor_Img}
                      alt={item.minor_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Second_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minor_Nature_Title}
                    </h1>
                    <img
                      loading="lazy"
                      src={item.minor_Nature_Img}
                      alt={item.minor_Nature_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Nature_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Nature_Second_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minor_Nature_Third_Description}
                    </p>
                    <h1 className="text-3xl mb-6 font-semibold">
                      {item.minorSights_Title}
                    </h1>
                    <img
                      loading="lazy"
                      src={item.minorSights_Img}
                      alt={item.minorSights_Title}
                      className="rounded-md my-6 object-cover "
                    />
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minorSights_First_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minorSights_Second_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minorSights_Third_Description}
                    </p>
                    <p className="text-lg font-light text-BlackSecondColor pb-4">
                      {item.minorSights_Fourth_Description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Tour tourData={item.tour} />
            <PopularPlace placeData={item.popular} />
          </div>
        </React.Fragment>
      ))}
      <FoodCard
        cuisineTitle={Cuisine_Samegrelo_Title}
        cuisineDescription={Cuisine_Samegrelo_Description}
        filterCuisine={"Samegrelo - Zemo Svaneti"}
      />
    </>
  );
};
