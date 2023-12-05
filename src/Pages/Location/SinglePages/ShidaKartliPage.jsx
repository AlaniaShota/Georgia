import React, { useState, useEffect } from "react";
import { Button, Header } from "../../../Components";

export const ShidaKartliPage = () => {
  const [shidaKartliLocation, setShidaKartliLocation] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => setShidaKartliLocation(data.locations));
  });

  const handleViewMore = () => {
    setViewMore(true);
  };

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
              img={item.title_img}
            />
            <div className="lg:container sm:mx-8 lg:mx-0 ">
              <div className="flex flex-col my-20 px-40">
                <h1 className="text-3xl mb-6 font-semibold">
                  {item.major_Shida_Kartli_Title}
                </h1>
                <img
                  src={item.major_Shida_Kartli_img}
                  alt={item.major_Shida_Kartli_Title}
                  className="rounded-md my-6 object-cover "
                />
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.major_Shida_Kartli_First_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.major_Shida_Kartli_Second_Description}
                </p>
                <h1 className="text-3xl mb-6 font-semibold">
                  {item.historical_Cultural_Title}
                </h1>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.historical_Cultural_First_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.historical_Cultural_Second_Description}
                </p>
                <img
                  src={item.historical_Cultural_img}
                  alt={item.historical_Cultural_Title}
                  className="rounded-md my-6 object-cover "
                />
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.historical_Cultural_Third_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.historical_Cultural_Fourth_Description}
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
                        {item.sights_Shida_Kartli_Title}
                      </h1>
                      <img
                        src={item.sights_Shida_Kartli_Img}
                        alt={item.sights_Shida_Kartli_Title}
                        className="rounded-md my-6 object-cover "
                      />
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Shida_Kartli_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Samegrelo_Second_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Samegrelo_Third_Description}
                      </p>
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.nature_Shida_Kartli_Title}
                      </h1>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.nature_Shida_Kartli_Description}
                      </p>
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.cuisine_Shida_Kartli_Title}
                      </h1>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.cuisine_Shida_Kartli_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.cuisine_Shida_Kartli_Second_Description}
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
