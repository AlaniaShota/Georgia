import { Helmet } from "react-helmet";
import { Header } from "../../Components";
import tourGuideImg from "../../assets/TourGuide/Georgia.jpeg";
import { Tour_Guide_Description, Tour_Guide_Title } from "./constants";
import { useEffect } from "react";

export const TourGuide = () => {
  useEffect(() => {
    fetch("/api/guides")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Helmet>
        {/* <meta charSet="utf-8" /> */}
        <title></title>
      </Helmet>
      <Header
        titlePage={"Tour Guide"}
        titleText={Tour_Guide_Title}
        descriptionText={Tour_Guide_Description}
        img={tourGuideImg}
      />
    </>
  );
};
