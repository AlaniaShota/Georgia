import React, { useState, useEffect } from "react";
import { Button, Header } from "../../../Components";

export const SamtskheJavakhetiPage = () => {
  const [samtskheJavakhetiLocation, setSamtskheJavakhetiLocation] = useState(
    [],
  );
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => setSamtskheJavakhetiLocation(data.locations));
  });

  const handleViewMore = () => {
    setViewMore(true);
  };

  return (
    <>
      {samtskheJavakhetiLocation
        .filter((item) => item.title === "Samtskhe-Javakheti")
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
                  {item.bakuriani_Title}
                </h1>
                <img
                  className="rounded-md my-6 object-cover "
                  src={item.bakuriani_img}
                  alt={item.bakuriani_Title}
                />
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.bakuriani_First_Description}
                </p>
                <h1 className="text-3xl mb-6 font-semibold">
                  {item.borjomi_Title}
                </h1>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.borjomi_First_Description}
                </p>
                <img
                  src={item.borjomi_img}
                  alt=""
                  className="rounded-md my-6 object-cover "
                />
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.borjomi_Second_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.borjomi_Third_Description}
                </p>
                <p className="text-lg font-light text-BlackSecondColor pb-4">
                  {item.borjomi_Fourth_Description}
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
                        {item.abastumani_Title}
                      </h1>
                      <img
                        src={item.abastumani_img}
                        alt={item.abastumani_Title}
                        className="rounded-md my-6 object-cover "
                      />
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.abastumani_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.abastumani_Second_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.abastumani_Third_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.abastumani_Fourth_Description}
                      </p>
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.akhaltsikhe_Title}
                      </h1>
                      <img
                        src={item.akhaltsikhe_img}
                        alt={item.akhaltsikhe_Title}
                      />
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.akhaltsikhe_Description}
                      </p>
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.vardzia_Title}
                      </h1>
                      <img
                        src={item.vardzia_img}
                        alt={item.vardzia_Title}
                        className="rounded-md my-6 object-cover "
                      />
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.vardzia_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.vardzia_Second_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.vardzia_Third_Description}
                      </p>
                      <h1 className="text-3xl mb-6 font-semibold">
                        {item.nature_Title}
                      </h1>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.nature_First_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.nature_Second_Description}
                      </p>
                      <p className="text-lg font-light text-BlackSecondColor pb-4">
                        {item.nature_Third_Description}
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
