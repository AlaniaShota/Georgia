import languageImg from "../../../assets/home-img/Language-Header.jpeg";
import {
  Language_Title,
  Language_Description,
  Stages_Title,
  Stages_description,
  Source_Title,
  Sources_First_Description,
  Sources_Second_Description,
  Scientific_Title,
  Scientific_First_Description,
  Scientific_Second_Description,
  Different_Writing_Title,
  Different_Writing_First_Description,
  Different_Writing_Second_Description,
  Different_Writing_Third_Description,
  Features_Title,
  Features_Word,
  Features_First_Description,
  Features_Second_Description,
  Features_Third_Description,
} from "./constants";
import { Header } from "../../../Components/index";

export const LanguagePage = () => {
  return (
    <>
      <Header
        titlePage={"Georgian Unique Alphabet"}
        titleText={Language_Title}
        descriptionText={Language_Description}
        img={languageImg}
      />
      <div className="my-20 m-auto w-10/12 min-2xl:my-28 min-2xl:w-9/12">
        <div className="lg:px-20 ">
          <h1 className="mb-6 min-2xl:mb-8 text-3xl min-2xl:text-4xl font-bold">
            {Stages_Title}
          </h1>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Stages_description}
          </p>
          <h2 className="mb-6 min-2xl:mb-8 text-3xl min-2xl:text-4xl font-bold">
            {Source_Title}
          </h2>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Sources_First_Description}
          </p>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Sources_Second_Description}
          </p>
          <h2 className="mb-6 min-2xl:mb-8 text-3xl min-2xl:text-4xl font-bold">
            {Scientific_Title}
          </h2>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Scientific_First_Description}
          </p>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Scientific_Second_Description}
          </p>
          <h2 className="mb-6 min-2xl:mb-8 text-3xl min-2xl:text-4xl font-bold">
            {Different_Writing_Title}
          </h2>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Different_Writing_First_Description}
          </p>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Different_Writing_Second_Description}
          </p>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Different_Writing_Third_Description}
          </p>
          <h2 className="mb-6 min-2xl:mb-8 text-3xl min-2xl:text-4xl font-bold">
            {Features_Title}
          </h2>
          <h3 className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Features_Word}
          </h3>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Features_First_Description}
          </p>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Features_Second_Description}
          </p>
          <p className="mb-4 min-2xl:mb-5 text-lg text-BlackSecondColor min-2xl:text-2xl">
            {Features_Third_Description}
          </p>
        </div>
      </div>
    </>
  );
};
