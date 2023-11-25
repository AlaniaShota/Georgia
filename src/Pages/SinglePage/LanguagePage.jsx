import { Helmet } from "react-helmet";
import languageImg from "../../assets/home-img/Language-Header.jpeg";
import {
  Language_Description,
  Language_Title,
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

const LanguagePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Georgian Unique Alphabet</title>
      </Helmet>
      <div className="flex w-full justify-start items-center flex-wrap">
        <img
          src={languageImg}
          alt="Tbilisi"
          className="object-cover h-[737px] w-full"
        />
        <div className="absolute  ml-40">
          <h1 className="text-left pb-5 text-4xl text-white font-bold cursor-default">
            {Language_Title}
          </h1>
          <p className="w-[497px] pt-2 text-white font-normal cursor-default">
            {Language_Description}
          </p>
        </div>
      </div>
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 ">
        <h1 className="mb-6 text-3xl font-bold">{Stages_Title}</h1>
        <p className="mb-4 text-secondColor">{Stages_description}</p>
        <h2 className="mb-6 text-3xl font-bold">{Source_Title}</h2>
        <p className="mb-4 text-secondColor">{Sources_First_Description}</p>
        <p className="mb-4 text-secondColor">{Sources_Second_Description}</p>
        <h2 className="mb-6 text-3xl font-bold">{Scientific_Title}</h2>
        <p className="mb-4 text-secondColor">{Scientific_First_Description}</p>
        <p className="mb-4 text-secondColor">{Scientific_Second_Description}</p>
        <h2 className="mb-6 text-3xl font-bold">{Different_Writing_Title}</h2>
        <p className="mb-4 text-secondColor">
          {Different_Writing_First_Description}
        </p>
        <p className="mb-4 text-secondColor">
          {Different_Writing_Second_Description}
        </p>
        <p className="mb-4 text-secondColor">
          {Different_Writing_Third_Description}
        </p>
        <h2 className="mb-6 text-3xl font-bold">{Features_Title}</h2>
        <h3 className="mb-4 text-secondColor">{Features_Word}</h3>
        <p className="mb-4 text-secondColor">{Features_First_Description}</p>
        <p className="mb-4 text-secondColor">{Features_Second_Description}</p>
        <p className="mb-4 text-secondColor">{Features_Third_Description}</p>
      </div>
    </div>
  );
};

export default LanguagePage;
