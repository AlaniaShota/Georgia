import { Header } from "../../Components";
import { GeorgiaMap, LocationCard } from "../Location/Components/index";
import { Location_Description, Location_Title } from "./constant";
import locationImg from "../../assets/location/Macon-beauty-spots-in-Georgia.jpg";

export const Location = () => {
  return (
    <>
      <Header
        titlePage={"Georgian Location"}
        titleText={Location_Title}
        descriptionText={Location_Description}
        img={locationImg}
      />

      <div className="lg:container sm:mx-8 lg:mx-0 ">
        <LocationCard />
        <GeorgiaMap />
      </div>
    </>
  );
};
