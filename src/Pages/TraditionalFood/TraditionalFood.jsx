import { Helmet } from "react-helmet";

import foodImg from "../../assets/traditional-food-img/georgia-traditional-food-image.jpg";
import secondFoodImg from "../../assets/traditional-food-img/georgia-traditional-food-image2.jpg";

import RestaurantCard from "./Components/Recommendation/RecommendationRestaurant";
import FoodCard from "./Components/Card/FoodCard";

const TraditionalFood = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Traditional food</title>
      </Helmet>
      <div className="flex w-full justify-start items-center flex-wrap">
        <img
          src={foodImg}
          alt="Tbilisi"
          className="object-cover h-[737px] w-full"
        />
        <div className="absolute ml-40">
          <h1 className="text-left text-2xl text-[#fff] font-bold">
            Food & Wine
          </h1>
          <p className="w-[497px] text-[#fff] text-base font-normal">
            Georgia is known for its rich culinary tradition, influenced by the
            best techniques and traditions of Europe and the East. Its cuisine
            offers diverse flavors and is a must-taste for foodies and
            gastronomy enthusiasts. Georgia is also home to the world’s oldest
            winemaking tradition, offering some of the most unique and authentic
            wines in the world.
          </p>
        </div>
      </div>
      <div className="my-20">
        <div className="lg:container sm:mx-8 lg:mx-0 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-5 text-center">
            An 8000-Year-Old Winemaking Tradition
          </h1>
          <p className="text-base text-textSecondColor font-medium mb-5 text-center w-[740px]">
            The Georgian Qvevri method of wine-making is one of the world’s
            leading methods, and this long and harmonious coexistence of clay
            and vine has delivered gorgeous results for centuries.
          </p>
          <p className="text-center text-textSecondColor text-base font-medium w-[740px]">
            Georgia is known for its delicious food. While traveling in Georgia
            you will notice that throughout the country the taste and flavor
            differs. Every province of Georgia has its own variation of
            traditional cuisine. Georgian dishes are suitable for all kind of
            eaters. Whether you eat meat, or not, you would not stay hungry
            here. Vegetarians can try lots of different delicious dishes too.
          </p>
        </div>
        <div className="my-20 flex justify-center items-center">
          <img
            src={secondFoodImg}
            alt="Supra"
            className="w-full object-cover opacity-1 rounded-md bg-blend-darken"
          />
          <div className="absolute">
            <div className="flex flex-col justify-center items-start text-whiteText m-20">
              <h1 className="text-2xl px-52 font-bold">Georgian Supra</h1>
              <p className=" px-52 text-lg font-semibold ">
                <span>
                  While there are many reasons to host a supra, its fundamental
                  elements never change. Along with sharing the impressive
                  amount of food and wine, people share their happiness and
                  respect, as well as console and cheer up one another.
                </span>
                <br />
                <span>
                  The Georgian supra is impressive in its variety: depending on
                  the region and occasion, the sequence of dishes and order of
                  some toasts may differ. As a table can be laid for good times
                  and bad, the menu and the tone can be modified, but the main
                  philosophy behind the event - communal sharing and sitting
                  together for a meal - remains the same.
                </span>
                <br />
                <span>
                  The rules of Georgian supra are set in stone, with several
                  obligatory toasts to be said, which brings us to the role of
                  toastmaster, tamada, and its paramount importance. The toast
                  in the local tradition is a part of the genre of praise and
                  plea, almost a prayer. It is incumbent upon the tamada of a
                  Georgian supra to propose the toasts appropriate for the
                  occasion of the gathering. Phrasing the obligatory ritual
                  messages in a beautiful, poetic way is crucial. That`s why
                  usually the most eloquent and respected attendee of the meal
                  is appointed as the tamada.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-10 lg:container sm:mx-8 lg:mx-0">
          <h1 className="text-xl font-semibold">Where to eat local?</h1>
          <p className="text-base font-light py-3">
            The best traditional places in Georgia, recommended by food
            professionals
          </p>
          <RestaurantCard />
        </div>
        <FoodCard />
      </div>
    </div>
  );
};

export default TraditionalFood;
