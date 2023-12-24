import { useEffect } from "react";
import { Header } from "../../Components";
import { useHotelStore } from "../../Store/store";
import img from "../../assets/hotel/Macon-beauty-spots-in-Georgia.jpg";
import { Page_Description, Page_Title } from "./constants";
import {
  Calendar,
  FilterButton,
  PopularHotels,
  HotelCard,
  Recommendation,
} from "./Components";
import { useSearchParams } from "react-router-dom";

export const Hotel = () => {
  const fetchHotels = useHotelStore((state) => state.fetchHotels);
  const { hotels = [] } = useHotelStore((state) => state.hotels);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  const categoryFilter = searchParams.get("type");

  return (
    <>
      <Header
        titlePage={"Georgian Hotels"}
        titleText={Page_Title}
        descriptionText={Page_Description}
        img={img}
      />
      <div className="m-auto w-10/12 cursor-default">
        <PopularHotels data={hotels} />
        <Calendar data={hotels} />
        <FilterButton
          search={setSearchParams}
          categoryFilter={categoryFilter}
        />
        <HotelCard data={hotels} categoryFilter={categoryFilter} />
        <Recommendation />
      </div>
    </>
  );
};
