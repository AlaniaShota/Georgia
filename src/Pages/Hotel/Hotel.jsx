import { useEffect } from "react";
import { Header, Section } from "../../Components";
import { useHotelStore } from "../../Store/store";
import img from "../../assets/hotel/Macon-beauty-spots-in-Georgia.jpg";
import {
  Hotel_First_Description,
  Hotel_Second_Description,
  Hotel_Title,
  Page_Description,
  Page_Title,
} from "./constants";
import { Calendar } from "./Components";

export const Hotel = () => {
  const fetchHotels = useHotelStore((state) => state.fetchHotels);
  const { hotels = [] } = useHotelStore((state) => state.hotels);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  return (
    <>
      <Header
        titlePage={"Georgian Hotels"}
        titleText={Page_Title}
        descriptionText={Page_Description}
        img={img}
      />
      <div className="m-auto w-10/12 cursor-default">
        <Section
          title={Hotel_Title}
          firstDescription={Hotel_First_Description}
          secondDescription={Hotel_Second_Description}
        />
        <Calendar data={hotels} />
      </div>
    </>
  );
};
