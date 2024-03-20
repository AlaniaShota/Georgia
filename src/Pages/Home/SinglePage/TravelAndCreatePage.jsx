import ushguliImg from "../../../assets/home-img/ushguli.jpg";
import shaoriImg from "../../../assets/home-img/shaori-lake-gnta.webp";
import alazaniImg from "../../../assets/home-img/alazani-floodplain-forests-natural-monument-gnta.webp";
import abashaImg from "../../../assets/home-img/abasha-waterfall-gnta.webp";
import {
  Nature_Title,
  Nature_Description,
  Land_Second_Title,
  Land_Second_First_Description,
  Land_Second_Second_Description,
  Lakes_Rivers_Title,
  Lakes_Rivers_First_Description,
  Lakes_Rivers_Second_Description,
  Lakes_Rivers_Third_Description,
  Forests_Marshes_Title,
  Forests_Marshes_First_Description,
  Forests_Marshes_Second_Description,
  Forests_Marshes_Third_Description,
  Waters_Climate_Title,
  Waters_Climate_First_Description,
  Waters_Climate_Second_Description,
  Waters_Climate_Third_Description,
  Waters_Climate_Fourth_Description,
} from "./constants";
import { Header } from "../../../Components/index";

export const TravelAndCreatePage = () => {
  return (
    <>
      <Header
        titlePage={"Nature of Georgia"}
        titleText={Nature_Title}
        descriptionText={Nature_Description}
        img={ushguliImg}
      />
      <div className="my-20 m-auto w-10/12 min-2xl:my-28 min-2xl:w-9/12">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Land_Second_Title}
          </h1>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Land_Second_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Land_Second_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Lakes_Rivers_Title}
          </h2>
          <img
            src={shaoriImg}
            alt="Image"
            className="mb-6 min-2xl:mb-8 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Lakes_Rivers_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Lakes_Rivers_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Lakes_Rivers_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Forests_Marshes_Title}
          </h2>
          <img
            src={alazaniImg}
            alt="Image"
            className="mb-6 min-2xl:mb-8 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Forests_Marshes_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Forests_Marshes_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Forests_Marshes_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl min-2xl:text-4xl min-2xl:mb-8 font-bold">
            {Waters_Climate_Title}
          </h2>
          <img
            src={abashaImg}
            alt="Image"
            className="mb-6 min-2xl:mb-8 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Waters_Climate_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Waters_Climate_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Waters_Climate_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor min-2xl:text-2xl min-2xl:mb-5">
            {Waters_Climate_Fourth_Description}
          </p>
        </div>
      </div>
    </>
  );
};
