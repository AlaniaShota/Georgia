import { Helmet } from "react-helmet";
import balletImg from "../../assets/home-img/mastery-of-generation.jpg";
import coupleImg from "../../assets/home-img/dance-gnta.webp";
import {
  Dance_Title,
  Dance_Description,
  Dance_Era_Title,
  Dance_Era_First_Description,
  Dance_Era_Second_Description,
  Dance_Era_Third_Description,
  Dance_Era_Fourth_Description,
  Dance_Universal_Title,
  Dance_Universal_First_Description,
  Dance_Universal_Second_Description,
  Dance_Universal_Third_Description,
} from "./constants";
import Header from "../../Components/Header";

const NationalBalletPage = () => {
  return (
    <>
      <Header
        titlePage={"Georgia - National Ballet"}
        titleText={Dance_Title}
        descriptionText={Dance_Description}
        img={balletImg}
      />
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 ">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl font-bold">{Dance_Era_Title}</h1>
          <img
            src={coupleImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Dance_Era_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Dance_Era_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Dance_Era_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Dance_Era_Fourth_Description}
          </p>
          <h2 className="mb-6 text-3xl font-bold">{Dance_Universal_Title}</h2>
          <p className="mb-4 text-BlackSecondColor">
            {Dance_Universal_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Dance_Universal_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Dance_Universal_Third_Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default NationalBalletPage;
