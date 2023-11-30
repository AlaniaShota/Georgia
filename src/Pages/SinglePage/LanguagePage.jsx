import { Helmet } from "react-helmet";
import languageImg from "../../assets/home-img/Language-Header.jpeg";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
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

const LanguagePage = () => {
  const titleTextRef = useRef(null);
  const descriptionTextRef = useRef(null);

  useEffect(() => {
    const firstTextElement = titleTextRef.current;
    const secondTextElement = descriptionTextRef.current;
    gsap.registerPlugin(TextPlugin);

    gsap.to(firstTextElement, {
      stagger: 0.02,
      duration: 3,
      delay: 1,
      text: Language_Title,
      ease: "power1.inOut",
    });

    gsap.to(secondTextElement, {
      stagger: 0.02,
      duration: 5,
      delay: 3,
      text: Language_Description,
      ease: "power1.inOut",
    });
  });

  return (
    <>
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
          <h1
            className="text-left pb-5 text-4xl text-white font-bold cursor-default"
            ref={titleTextRef}
          ></h1>
          <p
            className="w-497 pt-2 text-white font-normal cursor-default"
            ref={descriptionTextRef}
          ></p>
        </div>
      </div>
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
