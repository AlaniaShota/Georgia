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
              img={item.title_img}
            />
            <div className="lg:container sm:mx-8 lg:mx-0 ">
              <div className="flex flex-col my-20 px-40">
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.samegrelo_First_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor ">
                  {item.samegrelo_Second_Description}
                </p>
                <img
                  src={item.samegrelo_img}
                  alt={item.title}
                  className="rounded-md my-6 object-cover "
                />
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.samegrelo_Third_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.samegrelo_Fourth_Description}
                </p>
                <h1 className="text-3xl mb-6 font-semibold">
                  {item.nature_Samegrelo_Title}
                </h1>
                <img
                  src={item.nature_Samegrelo_img}
                  alt={item.nature_Samegrelo_Title}
                  className="rounded-md my-6 object-cover "
                />
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.nature_Samegrelo_First_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.nature_Samegrelo_Second_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.nature_Samegrelo_Third_Description}
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
                        {item.sights_Samegrelo_Title}
                      </h1>
                      <img
                        src={item.sights_Samegrelo_img}
                        alt={item.sights_Samegrelo_Title}
                        className="rounded-md my-6 object-cover "
                      />
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Samegrelo_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Samegrelo_Second_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Samegrelo_Third_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Samegrelo_Fourth_Description}
                      </p>
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.zemo_Svaneti_Title}
                      </h1>
                      <img
                        src={item.zemo_Svaneti_img}
                        alt={item.zemo_Svaneti_Title}
                        className="rounded-md my-6 object-cover "
                      />
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.zemo_Svaneti_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.zemo_Svaneti_Second_Description}
                      </p>
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.nature_Zemo_Svaneti_Title}
                      </h1>
                      <img
                        src={item.nature_Zemo_Svaneti_img}
                        alt={item.nature_Zemo_Svaneti_Title}
                        className="rounded-md my-6 object-cover "
                      />
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.nature_Zemo_Svaneti_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.nature_Zemo_Svaneti_Second_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.nature_Zemo_Svaneti_Third_Description}
                      </p>
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.sights_Zemo_Svaneti_Title}
                      </h1>
                      <img
                        src={item.sights_Zemo_Svaneti_img}
                        alt={item.sights_Zemo_Svaneti_Title}
                        className="rounded-md my-6 object-cover "
                      />
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Zemo_Svaneti_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Zemo_Svaneti_Second_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Zemo_Svaneti_Third_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.sights_Zemo_Svaneti_Fourth_Description}
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
