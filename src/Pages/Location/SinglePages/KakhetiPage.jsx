import React, { useState, useContext } from "react";
import { Header } from "../../../Components";
import { FoodCard, ButtonViewMore } from "./Components/index";
import {
  Cuisine_Kakheti_Title,
  Cuisine_Kakheti_Description,
} from "../constant";
import { LocationContext } from "../../../Providers/ThemeProvider";

export const KakhetiPage = () => {
  const [viewMore, setViewMore] = useState(false);
  const data = useContext(LocationContext);

  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data
        .filter((item) => item.title === "Kakheti")
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
            </div>
          </React.Fragment>
        ))}
      <FoodCard
        cuisineTitle={Cuisine_Kakheti_Title}
        cuisineDescription={Cuisine_Kakheti_Description}
        filterCuisine={"Kakheti"}
      />
    </>
  );
};
