import { Helmet } from "react-helmet";
import homeImg from "../../assets/home-img/home-img-georgia.jpg";
import mapImg from "../../assets/home-img/why-georgia-map-1-new.svg";
import { geographyDescription, geographyTitle, pageTitle } from "./constants";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div className="flex w-full justify-center items-center">
        <img
          src={homeImg}
          alt="Tbilisi"
          className="object-cover h-[737px] w-full"
        />
        <div className="absolute">
          <h1 className="text-center text-2xl text-[#fff] font-bold leading-9">
            {pageTitle}
          </h1>
        </div>
      </div>
      <div className="lg:container  bg-[#02160e] sm:mx-8 lg:mx-0">
        <div className="flex flex-row text-[#fff]">
          <div className="flex flex-col flex-wrap items-start justify-center">
            <h1>{geographyTitle}</h1>
            <p>{geographyDescription}</p>
          </div>
          <img
            src={mapImg}
            alt="Georgian Map"
            className="object-cover w-[650px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
