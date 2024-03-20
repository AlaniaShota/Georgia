import natureImg from "../../../assets/home-img/why-georgia-nature.jpg";
import fallImg from "../../../assets/home-img/Fall.webp";
import springImg from "../../../assets/home-img/Spring.webp";
import summerImg from "../../../assets/home-img/Summer.webp";
import winterImg from "../../../assets/home-img/Winter.webp";
import {
  Season_Title,
  Season_Description,
  Spring_Title,
  Spring_First_Description,
  Spring_Second_Description,
  Spring_Third_Description,
  Summer_Title,
  Summer_First_Description,
  Summer_Second_Description,
  Summer_Third_Description,
  Fall_Title,
  Fall_First_Description,
  Fall_Second_Description,
  Winter_Title,
  Winter_First_Description,
  Winter_Second_Description,
  Winter_Third_Description,
} from "./constants";
import { Header } from "../../../Components/index";

export const SeasonsPage = () => {
  return (
    <>
      <Header
        titlePage={"4 Seasons in Georgia"}
        titleText={Season_Title}
        descriptionText={Season_Description}
        img={natureImg}
      />
      <div className="my-20 m-auto w-10/12">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl font-bold">{Spring_Title}</h1>
          <img
            src={fallImg}
            alt="Image"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Spring_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Spring_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Spring_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Summer_Title}</h2>
          <img
            src={springImg}
            alt="Image"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Summer_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Summer_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Summer_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Fall_Title}</h2>
          <img
            src={summerImg}
            alt="Image"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">{Fall_First_Description}</p>
          <p className="mb-4 text-BlackSecondColor">
            {Fall_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Winter_Title}</h2>
          <img
            src={winterImg}
            alt="Image"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Winter_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Winter_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Winter_Third_Description}
          </p>
        </div>
      </div>
    </>
  );
};
