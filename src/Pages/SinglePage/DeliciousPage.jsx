import { Helmet } from "react-helmet";
import deliciousImg from "../../assets/home-img/georgia-traditional-dinner.jpg";
import supraImg from "../../assets/home-img/jewells-restaurant-supra-menu.jpg";
import badriganiImg from "../../assets/home-img/eggplant-with-hazelnuts-gnta.webp";
import pkhaliImg from "../../assets/home-img/meadow-pkhali-gnta.webp";
import khinkaliImg from "../../assets/home-img/a-vegetarian-guide-to-georgian-food-qartuli-kerdzebis-vegetarianuli-gzamkvlevi-skhvadaskhva-khinkali.webp";
import acharuliImg from "../../assets/home-img/acharuli-khachapuri-gnta.webp";
import { useEffect, useRef } from "react";
import Header from "../../Components/Header";
import {
  Delicious_Cuisine_Title,
  Delicious_Cuisine_Description,
  Wine_Wheat_Honey_Title,
  Wine_Wheat_Honey_First_Description,
  Wine_Wheat_Honey_Second_Description,
  Wine_Wheat_Honey_Third_Description,
  Wine_Wheat_Honey_Fourth_Description,
  Kind_Of_Flavor_Title,
  Kind_Of_Flavor_First_Description,
  Kind_Of_Flavor_Second_Description,
  Vegetarians_Vegans_Title,
  Vegetarians_Vegans_First_Description,
  Vegetarians_Vegans_Second_Description,
  Vegetarians_Vegans_Third_Description,
  Question_Title,
  Answer_First_Word,
  Answer_Second_Word,
  Answer_Description,
  Why_Georgia_Title,
  Why_Georgia_First_Description,
  Why_Georgia_Second_Description,
  Why_Georgia_Third_Description,
} from "./constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const DeliciousPage = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => setFood(data.foods));
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Georgian Delicious Cuisine</title>
      </Helmet>
      <Header
        titleText={Delicious_Cuisine_Title}
        descriptionText={Delicious_Cuisine_Description}
        img={deliciousImg}
      />
      <div className="my-20 lg:container sm:mx-8 lg:mx-0 lg:">
        <div className="flex flex-col justify-center items-start mb-10 px-20">
          <h1 className="mb-6 text-3xl font-bold">{Wine_Wheat_Honey_Title}</h1>
          <img
            src={supraImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md w-full"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Wheat_Honey_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Wheat_Honey_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Wheat_Honey_Third_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Wine_Wheat_Honey_Fourth_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Kind_Of_Flavor_Title}</h2>
          <img
            src={badriganiImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Kind_Of_Flavor_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Kind_Of_Flavor_Second_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">
            {Vegetarians_Vegans_Title}
          </h2>
          <img
            src={pkhaliImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Vegetarians_Vegans_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Vegetarians_Vegans_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Vegetarians_Vegans_Third_Description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Question_Title}</h2>
          <img
            src={khinkaliImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <h3 className="mb-4 text-BlackSecondColor">{Answer_First_Word}</h3>
          <h3 className="mb-4 text-BlackSecondColor">{Answer_Second_Word}</h3>
          {food.slice(0, 14).map((item) => (
            <ul className="" key={item.in}>
              <li className="my-1 hover:text-red-500 p-1 duration-400">
                <Link to={`/library/${item.id}`}>
                  <span>{item.name}</span>
                </Link>
              </li>
            </ul>
          ))}
          <p className="my-4 text-BlackSecondColor">{Answer_Description}</p>
        </div>
        <div className="flex flex-col justify-center items-start my-10 px-20">
          <h2 className="mb-6 text-3xl font-bold">{Why_Georgia_Title}</h2>
          <img
            src={acharuliImg}
            alt="Testament"
            className="mb-6 object-cover rounded-md drop-shadow-md"
          />
          <p className="mb-4 text-BlackSecondColor">
            {Why_Georgia_First_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Why_Georgia_Second_Description}
          </p>
          <p className="mb-4 text-BlackSecondColor">
            {Why_Georgia_Third_Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default DeliciousPage;
