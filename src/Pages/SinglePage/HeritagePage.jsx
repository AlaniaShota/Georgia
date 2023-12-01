import { Helmet } from "react-helmet";
import HeritageImg from "../../assets/home-img/kvevri.jpeg";
import testamentImg from "../../assets/home-img/georgian-wineyard-kakheti.webp";
import kvevriImg from "../../assets/home-img/why-georgia-cradle-of-wine.webp";
import foulkImg from "../../assets/home-img/shutterstock-1648681876(1).webp";
import wineImg from "../../assets/home-img/wineqwe.webp";
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
import Header from "../../Components/Header";

const HeritagePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Georgia - The Cradle of Wine</title>
      </Helmet>
      <Header
        titleText={Cradle_Wine_Title}
        descriptionText={Cradle_Wine_Description}
        img={HeritageImg}
      />
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 ">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl font-bold">{Testament_Title}</h1>
          <img
            src={testamentImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Testament_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Testament_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Testament_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Testament_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Vine_Clay_Title}</h2>
          <img
            src={kvevriImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Vine_Clay_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Vine_Clay_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Wine_Song_Title}</h2>
          <img
            src={foulkImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Song_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Song_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Wine_Food_Title}</h2>
          <img
            src={wineImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <h3 className="mb-4 text-BlackSecondColor">{Wine_Food_Word}</h3>
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Food_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Food_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Food_Third_Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeritagePage;
