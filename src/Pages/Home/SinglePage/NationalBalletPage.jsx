import balletImg from "../../../assets/home-img/mastery-of-generation.jpg";
import coupleImg from "../../../assets/home-img/dance-gnta.webp";
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
import { Header } from "../../../Components/index";

export const NationalBalletPage = () => {
  return (
    <>
      <Header
        titlePage={"Georgia - National Ballet"}
        titleText={Dance_Title}
        descriptionText={Dance_Description}
        img={balletImg}
      />
      <div className="my-20 m-auto w-10/12 min-2xl:my-28 min-2xl:w-9/12">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl min-2xl:mb-8 min-2xl:text-4xl font-bold">
            {Dance_Era_Title}
          </h1>
          <img
            src={coupleImg}
            alt="Image"
            className="mb-6 min-2xl:mb-8 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:mb-5 min-2xl:text-2xl">
            {Dance_Era_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:mb-5 min-2xl:text-2xl">
            {Dance_Era_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:mb-5 min-2xl:text-2xl">
            {Dance_Era_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:mb-5 min-2xl:text-2xl">
            {Dance_Era_Fourth_Description}
          </p>
          <h2 className="mb-6 text-3xl min-2xl:mb-8 min-2xl:text-4xl font-bold">
            {Dance_Universal_Title}
          </h2>
          <p className="mb-4 text-BlackSecondColor min-2xl:mb-5 min-2xl:text-2xl">
            {Dance_Universal_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:mb-5 min-2xl:text-2xl">
            {Dance_Universal_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:mb-5 min-2xl:text-2xl">
            {Dance_Universal_Third_Description}
          </p>
        </div>
      </div>
    </>
  );
};
