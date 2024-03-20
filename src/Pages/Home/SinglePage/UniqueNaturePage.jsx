import natureImg from "../../../assets/home-img/nature-of-georgia.jpg";
import hikingImg from "../../../assets/home-img/hiking-gudani-roshka-3.webp";
import goderdziImg from "../../../assets/home-img/goderdzi-petrified-forest-natural-monument.webp";
import gomiImg from "../../../assets/home-img/gomi-mountain.webp";
import tabatskuriImg from "../../../assets/home-img/tabatskuri-tavkvetili-levani-lake-abuli-lake-abuli-fortress-gandzani-gnta.webp";
import martviliImg from "../../../assets/home-img/martvili-canyon-gnta.webp";
import caveImg from "../../../assets/home-img/prometheus-cave-gnta.webp";
import seaImg from "../../../assets/home-img/seaside-adjara-black-sea.webp";
import kaykingImg from "../../../assets/home-img/kayaking-techura-gnta.webp";

import { Header } from "../../../Components/index";

import {
  Land_Title,
  Land_First_Description,
  Land_Second_Description,
  Forests_Title,
  Forests_First_Description,
  Forests_Second_Description,
  Mountains_Title,
  Mountains_First_Description,
  Mountains_Second_Description,
  Rivers_Waterfalls_Lakes_Title,
  Rivers_Waterfalls_Lakes_First_Description,
  Rivers_Waterfalls_Lakes_Second_Description,
  Rivers_Waterfalls_Lakes_Third_Description,
  Canyons_Title,
  Canyons_First_Description,
  Canyons_Second_Description,
  Caves_Caverns_Title,
  Caves_Caverns_First_Description,
  Caves_Caverns_Second_Description,
  Black_Sea_Title,
  Black_Sea_Description,
  Why_Georgia_Second_Title,
  Why_Georgia_Second_First_Description,
  Why_Georgia_Second_Second_Description,
} from "./constants";

export const UniqueNaturePage = () => {
  return (
    <>
      <Header
        titlePage={"Georgia - Unique Folklore"}
        titleText={Land_Title}
        descriptionText={Land_First_Description}
        img={natureImg}
      />
      <div className="my-20 m-auto w-10/12 min-2xl:my-28 min-2xl:w-9/12">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Land_Title}
          </h1>
          <img
            src={hikingImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Land_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Forests_Title}
          </h2>
          <img
            src={goderdziImg}
            alt="Mount"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Forests_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Forests_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Mountains_Title}
          </h2>
          <img
            src={gomiImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Mountains_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Mountains_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Rivers_Waterfalls_Lakes_Title}
          </h2>
          <img
            src={tabatskuriImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <h3 className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Rivers_Waterfalls_Lakes_First_Description}
          </h3>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Rivers_Waterfalls_Lakes_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Rivers_Waterfalls_Lakes_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Canyons_Title}
          </h2>
          <img
            src={martviliImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Canyons_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Canyons_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Caves_Caverns_Title}
          </h2>
          <img
            src={caveImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Caves_Caverns_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Caves_Caverns_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Black_Sea_Title}
          </h2>
          <img
            src={seaImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Black_Sea_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <p className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Why_Georgia_Second_Title}
          </p>
          <img
            src={kaykingImg}
            alt="Image"
            className="mb-6 object-cover min-2xl:mb-8 rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Why_Georgia_Second_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Why_Georgia_Second_Second_Description}
          </p>
        </div>
      </div>
    </>
  );
};
