import { Header } from "../../Components";
import {
  GeorgiaMap,
  LocationCard,
  Recommendation,
  SeasonDisplay,
} from "../Location/Components/index";
import { Location_Description, Location_Title } from "./constant";
import locationImg from "../../assets/location/georgia-roadtrip-tbilisi_3x2.avif";

export const Location = () => {
  return (
    <>
      <Header
        titlePage={"Georgian Location"}
        titleText={Location_Title}
        descriptionText={Location_Description}
        img={locationImg}
      />

      <div className="m-auto w-10/12 min-2xl:w-9/12 cursor-default">
        <SeasonDisplay />
        <GeorgiaMap />
        <LocationCard />
        <Recommendation />
      </div>
    </>
  );
};
