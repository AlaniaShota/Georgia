import React, { useState, useEffect } from "react";
import { Header } from "../../../Components";
import { FoodCard, ButtonViewMore } from "./Components/index";
import {
  Cuisine_Shida_Kartli_Description,
  Cuisine_Shida_Kartli_Title,
} from "../constant";

export const ShidaKartliPage = () => {
  const [shidaKartliLocation, setShidaKartliLocation] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => setShidaKartliLocation(data.locations));
  }, []);

  return (
    <>
      {shidaKartliLocation
        .filter((item) => item.title === "Shida Kartli")
        .map((item) => (
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
                  alt={item.major_Title}
                  className="rounded-md my-6 object-cover "
                />
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.major_First_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.major_Second_Description}
                </p>
                <h1 className="text-3xl mb-6 font-semibold">
                  {item.major_Historical_Title}
                </h1>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.major_Historical_First_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.major_Historical_Second_Description}
                </p>
                <img
                  src={item.major_Historical_Img}
                  alt={item.major_Historical_Title}
                  className="rounded-md my-6 object-cover "
                />
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.major_Historical_Third_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.major_Historical_Fourth_Description}
                </p>
                <div className="flex justify-center items-center">
                  {!viewMore && <ButtonViewMore setViewMore={setViewMore} />}
                  {viewMore && (
                    <div className="flex flex-col">
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.minor_Sights_Title}
                      </h1>
                      <img
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
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.minor_Nature_Title}
                      </h1>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.minor_Nature_Description}
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      <FoodCard
        cuisineTitle={Cuisine_Shida_Kartli_Title}
        cuisineDescription={Cuisine_Shida_Kartli_Description}
        filterCuisine={"Shida Kartli"}
      />
    </>
  );
};
