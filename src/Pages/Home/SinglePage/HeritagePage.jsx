import HeritageImg from "../../../assets/home-img/kvevri.jpeg";
import testamentImg from "../../../assets/home-img/georgian-wineyard-kakheti.webp";
import kvevriImg from "../../../assets/home-img/why-georgia-cradle-of-wine.webp";
import foulkImg from "../../../assets/home-img/shutterstock-1648681876(1).webp";
import wineImg from "../../../assets/home-img/wineqwe.webp";
import {
  Cradle_Wine_Title,
  Cradle_Wine_Description,
  Testament_Title,
  Testament_First_Description,
  Testament_Second_Description,
  Testament_Third_Description,
  Testament_Fourth_Description,
  Vine_Clay_Title,
  Vine_Clay_First_Description,
  Vine_Clay_Second_Description,
  Wine_Song_Title,
  Wine_Song_First_Description,
  Wine_Song_Second_Description,
  Wine_Food_Title,
  Wine_Food_Word,
  Wine_Food_First_Description,
  Wine_Food_Second_Description,
  Wine_Food_Third_Description,
} from "./constants";
import { Header } from "../../../Components/index";

export const HeritagePage = () => {
  return (
    <>
      <Header
        titlePage={"Georgia - The Cradle of Wine"}
        titleText={Cradle_Wine_Title}
        descriptionText={Cradle_Wine_Description}
        img={HeritageImg}
      />
      <div className="my-20 m-auto w-10/12 min-2xl:my-28 min-2xl:w-9/12">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 min-2xl:mb-8 text-3xl min-2xl:text-4xl font-bold">
            {Testament_Title}
          </h1>
          <img
            src={testamentImg}
            alt="Image"
            className="mb-6  min-2xl:mb-8 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Testament_First_Description}
          </p>
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Testament_Second_Description}
          </p>
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Testament_Third_Description}
          </p>
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Testament_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 min-2xl:mb-8 text-3xl font-bold">{Vine_Clay_Title}</h2>
          <img
            src={kvevriImg}
            alt="Image"
            className="mb-6 min-2xl:mb-8 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Vine_Clay_First_Description}
          </p>
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Vine_Clay_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 min-2xl:mb-8 text-3xl font-bold">{Wine_Song_Title}</h2>
          <img
            src={foulkImg}
            alt="Image"
            className="mb-6 min-2xl:mb-8 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Wine_Song_First_Description}
          </p>
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Wine_Song_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 min-2xl:mb-8 text-3xl font-bold">{Wine_Food_Title}</h2>
          <img
            src={wineImg}
            alt="Image"
            className="mb-6 min-2xl:mb-8 object-cover rounded-md drop-shadow-md"
          />
          <h3 className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Wine_Food_Word}
          </h3>
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Wine_Food_First_Description}
          </p>
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Wine_Food_Second_Description}
          </p>
          <p className="mb-4 min-2xl:mb-6 min-2xl:text-2xl text-BlackSecondColor">
            {Wine_Food_Third_Description}
          </p>
        </div>
      </div>
    </>
  );
};
