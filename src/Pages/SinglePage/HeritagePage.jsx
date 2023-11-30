import { Helmet } from "react-helmet";
import HeritageImg from "../../assets/home-img/kvevri.jpeg";
import testamentImg from "../../assets/home-img/georgian-wineyard-kakheti.webp";
import kvevriImg from "../../assets/home-img/why-georgia-cradle-of-wine.webp";
import foulkImg from "../../assets/home-img/shutterstock-1648681876(1).webp";
import wineImg from "../../assets/home-img/wineqwe.webp";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
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

const HeritagePage = () => {
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
      text: Cradle_Wine_Title,
      ease: "power1.inOut",
    });

    gsap.to(secondTextElement, {
      stagger: 0.02,
      duration: 5,
      delay: 3,
      text: Cradle_Wine_Description,
      ease: "power1.inOut",
    });
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Georgia - The Cradle of Wine</title>
      </Helmet>
      <div className="flex w-full justify-start items-center flex-wrap">
        <img
          src={HeritageImg}
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
        <div className="flex flex-col justify-center items-start mb-10">
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
        <div className="flex flex-col justify-center items-start my-10">
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
        <div className="flex flex-col justify-center items-start my-10">
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
        <div className="flex flex-col justify-center items-start my-10">
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
