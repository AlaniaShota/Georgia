import React, { useState, useEffect } from "react";
import { Button, Header } from "../../../Components";

export const MtskhetaMtianetiPage = () => {
  const [mtskhetaMtianetiLocation, setMtskhetaMtianetiLocation] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => setMtskhetaMtianetiLocation(data.locations));
  });

  const handleViewMore = () => {
    setViewMore(true);
  };

  return (
    <>
      {mtskhetaMtianetiLocation
        .filter((item) => item.title === "Mtskheta-Mtianeti")
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
            </div>
          </React.Fragment>
        ))}
    </>
  );
};
