import { Header } from "../../Components";
import img from "../../assets/hotel/Macon-beauty-spots-in-Georgia.jpg";
import { Page_Description, Page_Title } from "./constants";

export const Hotel = () => {
  return (
    <>
      <Header
        titlePage={"Georgian Hotels"}
        titleText={Page_Title}
        descriptionText={Page_Description}
        img={img}
      />
    </>
  );
};
