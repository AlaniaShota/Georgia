import React, { useState, useEffect } from "react";
import { Button, Header } from "../../../Components";

export const SamegreloZemoSvanetiPage = () => {
  const [samegreloLocation, setSamegreloLocation] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => setSamegreloLocation(data.locations));
  });

  const handleViewMore = () => {
    setViewMore(true);
  };

  return (
    <>
      {samegreloLocation
        .filter((item) => item.title === "Samegrelo-Zemo Svaneti")
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
                  {!viewMore && (
                    <Button border onClick={handleViewMore}>
                      <span className="text-lg text-darkBlueText">
                        View More
                      </span>
                    </Button>
                  )}
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
            </div>
          </React.Fragment>
        ))}
    </>
  );
};
