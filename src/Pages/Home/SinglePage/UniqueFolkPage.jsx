import folkImg from "../../../assets/home-img/lilesvanurisimgera.jpg";
import mountainImg from "../../../assets/home-img/shutterstock-1303327465.webp";
import songImg from "../../../assets/home-img/shutterstock-1648681876(1).webp";
import danceImg from "../../../assets/home-img/why-georgia-dance.webp";
import { Header } from "../../../Components/index";

import {
  Folk_Title,
  Folk_Description,
  Mountain_Title,
  Mountain_First_Description,
  Mountain_Second_Description,
  Mountain_Third_Description,
  Mountain_Fourth_Description,
  Poetry_Title,
  Poetry_First_Description,
  Poetry_Second_Description,
  Poetry_Third_Description,
  Song_Title,
  Song_First_Description,
  Song_Second_Description,
  Song_Third_Description,
  Song_Fourth_Description,
  Genius_Title,
  Genius_First_Description,
  Genius_Second_Description,
  Genius_Third_Description,
  Genius_Fourth_Description,
} from "./constants";

export const UniqueFolkPage = () => {
  return (
    <>
      <Header
        titlePage={"Georgia - Unique Folklore"}
        titleText={Folk_Title}
        descriptionText={Folk_Description}
        img={folkImg}
      />
      <div className="my-20 m-auto w-10/12 min-2xl:my-28 min-2xl:w-9/12">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Mountain_Title}
          </h1>
          <img
            src={mountainImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Mountain_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Mountain_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Mountain_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Mountain_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Poetry_Title}
          </h2>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Poetry_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Poetry_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Poetry_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Song_Title}
          </h2>
          <img
            src={songImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Song_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Song_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Song_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Song_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Genius_Title}
          </h2>
          <img
            src={danceImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <h3 className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Genius_First_Description}
          </h3>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Genius_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Genius_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Genius_Fourth_Description}
          </p>
        </div>
      </div>
    </>
  );
};
