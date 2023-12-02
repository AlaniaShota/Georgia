import folkImg from "../../assets/home-img/lilesvanurisimgera.jpg";
import mountainImg from "../../assets/home-img/shutterstock-1303327465.webp";
import songImg from "../../assets/home-img/shutterstock-1648681876(1).webp";
import danceImg from "../../assets/home-img/why-georgia-dance.webp";
import Header from "../../Components/Header";

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

const UniqueFolkPage = () => {
  return (
    <>
      <Header
        titlePage={"Georgia - Unique Folklore"}
        titleText={Folk_Title}
        descriptionText={Folk_Description}
        img={folkImg}
      />
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 ">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl font-bold">{Mountain_Title}</h1>
          <img
            src={mountainImg}
            alt="Image"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Mountain_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Mountain_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Mountain_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Mountain_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Poetry_Title}</h2>
          <p className="mb-4 text-BlackSecondColor">
            {Poetry_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Poetry_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Poetry_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Song_Title}</h2>
          <img
            src={songImg}
            alt="Image"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">{Song_First_Description}</p>
          <p className="mb-4 text-BlackSecondColor">
            {Song_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">{Song_Third_Description}</p>
          <p className="mb-4 text-BlackSecondColor">
            {Song_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Genius_Title}</h2>
          <img
            src={danceImg}
            alt="Image"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <h3 className="mb-4 text-BlackSecondColor">
            {Genius_First_Description}
          </h3>
          <p className="mb-4 text-BlackSecondColor">
            {Genius_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Genius_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Genius_Fourth_Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default UniqueFolkPage;
