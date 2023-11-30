import { Helmet } from "react-helmet";
import {
  Folk_Title,
  Folk_Description,
  Mountain_Title,
  Mountain_First_Description,
  Mountain_Second_Description,
  Mountain_Third_Description,
  Mountain_Fourth_Description,
  Poetry_Title,
  Poetry_First_Description,
  Poetry_Second_Description,
  Poetry_Third_Description,
  Song_Title,
  Song_First_Description,
  Song_Second_Description,
  Song_Third_Description,
  Song_Fourth_Description,
  Genius_Title,
  Genius_First_Description,
  Genius_Second_Description,
  Genius_Third_Description,
  Genius_Fourth_Description,
} from "./constants";
import folkImg from "../../assets/home-img/lilesvanurisimgera.jpg";
import mountainImg from "../../assets/home-img/shutterstock-1303327465.webp";
import songImg from "../../assets/home-img/shutterstock-1648681876(1).webp";
import danceImg from "../../assets/home-img/why-georgia-dance.webp";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const UniqueFolkPage = () => {
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
      text: Folk_Title,
      ease: "power1.inOut",
    });

    gsap.to(secondTextElement, {
      stagger: 0.02,
      duration: 5,
      delay: 3,
      text: Folk_Description,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Georgia - Unique Folklore</title>
      </Helmet>
      <div className="flex w-full justify-start items-center flex-wrap">
        <img
          src={folkImg}
          alt="Tbilisi"
          className="bg-cover h-[737px] w-full"
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
          <h1 className="mb-6 text-3xl font-bold">{Mountain_Title}</h1>
          <img
            src={mountainImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Mountain_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Mountain_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Mountain_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Mountain_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10">
          <h2 className="mb-6 text-3xl font-bold">{Poetry_Title}</h2>
          <p className="mb-4 text-BlackSecondColor">
            {Poetry_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Poetry_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Poetry_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10">
          <h2 className="mb-6 text-3xl font-bold">{Song_Title}</h2>
          <img
            src={songImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">{Song_First_Description}</p>
          <p className="mb-4 text-BlackSecondColor">
            {Song_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">{Song_Third_Description}</p>
          <p className="mb-4 text-BlackSecondColor">
            {Song_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10">
          <h2 className="mb-6 text-3xl font-bold">{Genius_Title}</h2>
          <img
            src={danceImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <h3 className="mb-4 text-BlackSecondColor">
            {Genius_First_Description}
          </h3>
          <p className="mb-4 text-BlackSecondColor">
            {Genius_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Genius_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Genius_Fourth_Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default UniqueFolkPage;
