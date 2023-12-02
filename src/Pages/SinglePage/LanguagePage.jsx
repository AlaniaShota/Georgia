import { Helmet } from "react-helmet";
import languageImg from "../../assets/home-img/Language-Header.jpeg";
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
import Header from "../../Components/Header";

const LanguagePage = () => {
  return (
    <>
      <Header
        titlePage={"Georgian Unique Alphabet"}
        titleText={Language_Title}
        descriptionText={Language_Description}
        img={languageImg}
      />
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 ">
        <div className="px-20">
          <h1 className="mb-6 text-3xl font-bold">{Stages_Title}</h1>
          <p className="mb-4 text-BlackSecondColor">{Stages_description}</p>
          <h2 className="mb-6 text-3xl font-bold">{Source_Title}</h2>
          <p className="mb-4 text-BlackSecondColor">
            {Sources_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Sources_Second_Description}
          </p>
          <h2 className="mb-6 text-3xl font-bold">{Scientific_Title}</h2>
          <p className="mb-4 text-BlackSecondColor">
            {Scientific_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Scientific_Second_Description}
          </p>
          <h2 className="mb-6 text-3xl font-bold">{Different_Writing_Title}</h2>
          <p className="mb-4 text-BlackSecondColor">
            {Different_Writing_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Different_Writing_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Different_Writing_Third_Description}
          </p>
          <h2 className="mb-6 text-3xl font-bold">{Features_Title}</h2>
          <h3 className="mb-4 text-BlackSecondColor">{Features_Word}</h3>
          <p className="mb-4 text-BlackSecondColor">
            {Features_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Features_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Features_Third_Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default LanguagePage;
